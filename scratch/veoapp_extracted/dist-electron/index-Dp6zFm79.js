var ma = Object.defineProperty;
var pi = (t) => {
  throw TypeError(t);
};
var ya = (t, e, n) => e in t ? ma(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var V = (t, e, n) => ya(t, typeof e != "symbol" ? e + "" : e, n), Cn = (t, e, n) => e.has(t) || pi("Cannot " + n);
var se = (t, e, n) => (Cn(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ye = (t, e, n) => e.has(t) ? pi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ne = (t, e, n, i) => (Cn(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n), ce = (t, e, n) => (Cn(t, e, "access private method"), n);
import Yr from "child_process";
import nt, { createWriteStream as va } from "fs";
import zr from "https";
import Ve from "stream";
import ni from "os";
import Xr from "events";
import _a from "process";
import it from "util";
import ii from "path";
import oi from "crypto";
import Ea from "querystring";
import dn from "buffer";
import * as gi from "fs/promises";
import { writeFile as Ta } from "fs/promises";
import { Readable as Ca } from "node:stream";
import { finished as Aa } from "node:stream/promises";
import { t as Sa } from "./main-CHQQFXN8.js";
var An = {}, Sn = {}, Je = {}, Ke = {}, wn, mi;
function Qr() {
  if (mi) return wn;
  mi = 1;
  var t = Object.prototype.hasOwnProperty, e = Object.prototype.toString, n = Object.defineProperty, i = Object.getOwnPropertyDescriptor, o = function(c) {
    return typeof Array.isArray == "function" ? Array.isArray(c) : e.call(c) === "[object Array]";
  }, r = function(c) {
    if (!c || e.call(c) !== "[object Object]")
      return !1;
    var f = t.call(c, "constructor"), h = c.constructor && c.constructor.prototype && t.call(c.constructor.prototype, "isPrototypeOf");
    if (c.constructor && !f && !h)
      return !1;
    var p;
    for (p in c)
      ;
    return typeof p > "u" || t.call(c, p);
  }, l = function(c, f) {
    n && f.name === "__proto__" ? n(c, f.name, {
      enumerable: !0,
      configurable: !0,
      value: f.newValue,
      writable: !0
    }) : c[f.name] = f.newValue;
  }, u = function(c, f) {
    if (f === "__proto__")
      if (t.call(c, f)) {
        if (i)
          return i(c, f).value;
      } else return;
    return c[f];
  };
  return wn = function d() {
    var c, f, h, p, m, v, y = arguments[0], _ = 1, C = arguments.length, A = !1;
    for (typeof y == "boolean" && (A = y, y = arguments[1] || {}, _ = 2), (y == null || typeof y != "object" && typeof y != "function") && (y = {}); _ < C; ++_)
      if (c = arguments[_], c != null)
        for (f in c)
          h = u(y, f), p = u(c, f), y !== p && (A && p && (r(p) || (m = o(p))) ? (m ? (m = !1, v = h && o(h) ? h : []) : v = h && r(h) ? h : {}, l(y, { name: f, newValue: d(A, v, p) })) : typeof p < "u" && l(y, { name: f, newValue: p }));
    return y;
  }, wn;
}
var wt = {};
const wa = "gaxios", Ia = "7.1.3", Ra = "A simple common HTTP client specifically for Google APIs and services.", Pa = "build/cjs/src/index.js", Na = "build/cjs/src/index.d.ts", ka = ["build/"], Ma = { ".": { import: { types: "./build/esm/src/index.d.ts", default: "./build/esm/src/index.js" }, require: { types: "./build/cjs/src/index.d.ts", default: "./build/cjs/src/index.js" } } }, Ua = { lint: "gts check --no-inline-config", test: "c8 mocha build/esm/test", "presystem-test": "npm run compile", "system-test": "mocha build/esm/system-test --timeout 80000", compile: "tsc -b ./tsconfig.json ./tsconfig.cjs.json && node utils/enable-esm.mjs", fix: "gts fix", prepare: "npm run compile", pretest: "npm run compile", webpack: "webpack", "prebrowser-test": "npm run compile", "browser-test": "node build/browser-test/browser-test-runner.js", docs: "jsdoc -c .jsdoc.js", "docs-test": "linkinator docs", "predocs-test": "npm run docs", "samples-test": "cd samples/ && npm link ../ && npm test && cd ../", prelint: "cd samples; npm link ../; npm install", clean: "gts clean" }, Da = { type: "git", directory: "packages/gaxios", url: "https://github.com/googleapis/google-cloud-node-core.git" }, xa = ["google"], La = { node: ">=18" }, ba = "Google, LLC", Fa = "Apache-2.0", Ga = { "@babel/plugin-proposal-private-methods": "^7.18.6", "@types/cors": "^2.8.6", "@types/express": "^5.0.0", "@types/extend": "^3.0.1", "@types/mocha": "^10.0.10", "@types/multiparty": "4.2.1", "@types/mv": "^2.1.0", "@types/ncp": "^2.0.1", "@types/node": "^22.0.0", "@types/sinon": "^17.0.0", "@types/tmp": "0.2.6", assert: "^2.0.0", browserify: "^17.0.0", c8: "^10.0.0", cors: "^2.8.5", express: "^5.0.0", gts: "^6.0.0", "is-docker": "^3.0.0", jsdoc: "^4.0.0", "jsdoc-fresh": "^5.0.0", "jsdoc-region-tag": "^4.0.0", karma: "^6.0.0", "karma-chrome-launcher": "^3.0.0", "karma-coverage": "^2.0.0", "karma-firefox-launcher": "^2.0.0", "karma-mocha": "^2.0.0", "karma-remap-coverage": "^0.1.5", "karma-sourcemap-loader": "^0.4.0", "karma-webpack": "^5.0.1", linkinator: "^6.1.2", mocha: "^11.1.0", multiparty: "^4.2.1", mv: "^2.1.1", ncp: "^2.0.0", nock: "^14.0.0-beta.13", "null-loader": "^4.0.0", "pack-n-play": "^4.0.0", puppeteer: "^24.0.0", sinon: "^21.0.0", "stream-browserify": "^3.0.0", tmp: "0.2.5", "ts-loader": "^9.5.2", typescript: "^5.8.3", webpack: "^5.35.0", "webpack-cli": "^6.0.1" }, Oa = { extend: "^3.0.2", "https-proxy-agent": "^7.0.1", "node-fetch": "^3.3.2", rimraf: "^5.0.1" }, qa = "https://github.com/googleapis/google-cloud-node-core/tree/main/packages/gaxios", Ba = {
  name: wa,
  version: Ia,
  description: Ra,
  main: Pa,
  types: Na,
  files: ka,
  exports: Ma,
  scripts: Ua,
  repository: Da,
  keywords: xa,
  engines: La,
  author: ba,
  license: Fa,
  devDependencies: Ga,
  dependencies: Oa,
  homepage: qa
};
var In, yi;
function Va() {
  return yi || (yi = 1, In = { pkg: Ba }), In;
}
var vi;
function Zr() {
  return vi || (vi = 1, (function(t) {
    var d;
    var e = wt && wt.__importDefault || function(c) {
      return c && c.__esModule ? c : { default: c };
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.GaxiosError = t.GAXIOS_ERROR_SYMBOL = void 0, t.defaultErrorRedactor = u;
    const n = e(Qr()), o = e(Va()).default.pkg;
    t.GAXIOS_ERROR_SYMBOL = Symbol.for(`${o.name}-gaxios-error`);
    class r extends Error {
      constructor(h, p, m, v) {
        var y, _;
        super(h, { cause: v });
        V(this, "config");
        V(this, "response");
        /**
         * An error code.
         * Can be a system error code, DOMException error name, or any error's 'code' property where it is a `string`.
         *
         * It is only a `number` when the cause is sourced from an API-level error (AIP-193).
         *
         * @see {@link https://nodejs.org/api/errors.html#errorcode error.code}
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException#error_names DOMException#error_names}
         * @see {@link https://google.aip.dev/193#http11json-representation AIP-193}
         *
         * @example
         * 'ECONNRESET'
         *
         * @example
         * 'TimeoutError'
         *
         * @example
         * 500
         */
        V(this, "code");
        /**
         * An HTTP Status code.
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response/status Response#status}
         *
         * @example
         * 500
         */
        V(this, "status");
        /**
         * @deprecated use {@link GaxiosError.cause} instead.
         *
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause Error#cause}
         *
         * @privateRemarks
         *
         * We will want to remove this property later as the modern `cause` property is better suited
         * for displaying and relaying nested errors. Keeping this here makes the resulting
         * error log larger than it needs to be.
         *
         */
        V(this, "error");
        /**
         * Support `instanceof` operator for `GaxiosError` across builds/duplicated files.
         *
         * @see {@link GAXIOS_ERROR_SYMBOL}
         * @see {@link GaxiosError[Symbol.hasInstance]}
         * @see {@link https://github.com/microsoft/TypeScript/issues/13965#issuecomment-278570200}
         * @see {@link https://stackoverflow.com/questions/46618852/require-and-instanceof}
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance#reverting_to_default_instanceof_behavior}
         */
        V(this, d, o.version);
        if (this.config = p, this.response = m, this.error = v instanceof Error ? v : void 0, this.config = (0, n.default)(!0, {}, p), this.response && (this.response.config = (0, n.default)(!0, {}, this.response.config)), this.response) {
          try {
            this.response.data = l(
              this.config.responseType,
              // workaround for `node-fetch`'s `.data` deprecation...
              (y = this.response) != null && y.bodyUsed ? (_ = this.response) == null ? void 0 : _.data : void 0
            );
          } catch {
          }
          this.status = this.response.status;
        }
        v instanceof DOMException ? this.code = v.name : v && typeof v == "object" && "code" in v && (typeof v.code == "string" || typeof v.code == "number") && (this.code = v.code);
      }
      /**
       * Support `instanceof` operator for `GaxiosError` across builds/duplicated files.
       *
       * @see {@link GAXIOS_ERROR_SYMBOL}
       * @see {@link GaxiosError[GAXIOS_ERROR_SYMBOL]}
       */
      static [(d = t.GAXIOS_ERROR_SYMBOL, Symbol.hasInstance)](h) {
        return h && typeof h == "object" && t.GAXIOS_ERROR_SYMBOL in h && h[t.GAXIOS_ERROR_SYMBOL] === o.version ? !0 : Function.prototype[Symbol.hasInstance].call(r, h);
      }
      /**
       * An AIP-193 conforming error extractor.
       *
       * @see {@link https://google.aip.dev/193#http11json-representation AIP-193}
       *
       * @internal
       * @expiremental
       *
       * @param res the response object
       * @returns the extracted error information
       */
      static extractAPIErrorFromResponse(h, p = "The request failed") {
        let m = p;
        if (typeof h.data == "string" && (m = h.data), h.data && typeof h.data == "object" && "error" in h.data && h.data.error && !h.ok) {
          if (typeof h.data.error == "string")
            return {
              message: h.data.error,
              code: h.status,
              status: h.statusText
            };
          if (typeof h.data.error == "object") {
            m = "message" in h.data.error && typeof h.data.error.message == "string" ? h.data.error.message : m;
            const v = "status" in h.data.error && typeof h.data.error.status == "string" ? h.data.error.status : h.statusText, y = "code" in h.data.error && typeof h.data.error.code == "number" ? h.data.error.code : h.status;
            if ("errors" in h.data.error && Array.isArray(h.data.error.errors)) {
              const _ = [];
              for (const C of h.data.error.errors)
                typeof C == "object" && "message" in C && typeof C.message == "string" && _.push(C.message);
              return Object.assign({
                message: _.join(`
`) || m,
                code: y,
                status: v
              }, h.data.error);
            }
            return Object.assign({
              message: m,
              code: y,
              status: v
            }, h.data.error);
          }
        }
        return {
          message: m,
          code: h.status,
          status: h.statusText
        };
      }
    }
    t.GaxiosError = r;
    function l(c, f) {
      switch (c) {
        case "stream":
          return f;
        case "json":
          return JSON.parse(JSON.stringify(f));
        case "arraybuffer":
          return JSON.parse(Buffer.from(f).toString("utf8"));
        case "blob":
          return JSON.parse(f.text());
        default:
          return f;
      }
    }
    function u(c) {
      const f = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
      function h(v) {
        v && v.forEach((y, _) => {
          (/^authentication$/i.test(_) || /^authorization$/i.test(_) || /secret/i.test(_)) && v.set(_, f);
        });
      }
      function p(v, y) {
        if (typeof v == "object" && v !== null && typeof v[y] == "string") {
          const _ = v[y];
          (/grant_type=/i.test(_) || /assertion=/i.test(_) || /secret/i.test(_)) && (v[y] = f);
        }
      }
      function m(v) {
        !v || typeof v != "object" || (v instanceof FormData || v instanceof URLSearchParams || // support `node-fetch` FormData/URLSearchParams
        "forEach" in v && "set" in v ? v.forEach((y, _) => {
          (["grant_type", "assertion"].includes(_) || /secret/.test(_)) && v.set(_, f);
        }) : ("grant_type" in v && (v.grant_type = f), "assertion" in v && (v.assertion = f), "client_secret" in v && (v.client_secret = f)));
      }
      return c.config && (h(c.config.headers), p(c.config, "data"), m(c.config.data), p(c.config, "body"), m(c.config.body), c.config.url.searchParams.has("token") && c.config.url.searchParams.set("token", f), c.config.url.searchParams.has("client_secret") && c.config.url.searchParams.set("client_secret", f)), c.response && (u({ config: c.response.config }), h(c.response.headers), c.response.bodyUsed && (p(c.response, "data"), m(c.response.data))), c;
    }
  })(wt)), wt;
}
var on = {}, _i;
function Ha() {
  if (_i) return on;
  _i = 1, Object.defineProperty(on, "__esModule", { value: !0 }), on.getRetryConfig = t;
  async function t(o) {
    let r = n(o);
    if (!o || !o.config || !r && !o.config.retry)
      return { shouldRetry: !1 };
    r = r || {}, r.currentRetryAttempt = r.currentRetryAttempt || 0, r.retry = r.retry === void 0 || r.retry === null ? 3 : r.retry, r.httpMethodsToRetry = r.httpMethodsToRetry || [
      "GET",
      "HEAD",
      "PUT",
      "OPTIONS",
      "DELETE"
    ], r.noResponseRetries = r.noResponseRetries === void 0 || r.noResponseRetries === null ? 2 : r.noResponseRetries, r.retryDelayMultiplier = r.retryDelayMultiplier ? r.retryDelayMultiplier : 2, r.timeOfFirstRequest = r.timeOfFirstRequest ? r.timeOfFirstRequest : Date.now(), r.totalTimeout = r.totalTimeout ? r.totalTimeout : Number.MAX_SAFE_INTEGER, r.maxRetryDelay = r.maxRetryDelay ? r.maxRetryDelay : Number.MAX_SAFE_INTEGER;
    const l = [
      // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      // 1xx - Retry (Informational, request still processing)
      // 2xx - Do not retry (Success)
      // 3xx - Do not retry (Redirect)
      // 4xx - Do not retry (Client errors)
      // 408 - Retry ("Request Timeout")
      // 429 - Retry ("Too Many Requests")
      // 5xx - Retry (Server errors)
      [100, 199],
      [408, 408],
      [429, 429],
      [500, 599]
    ];
    if (r.statusCodesToRetry = r.statusCodesToRetry || l, o.config.retryConfig = r, !await (r.shouldRetry || e)(o))
      return { shouldRetry: !1, config: o.config };
    const d = i(r);
    o.config.retryConfig.currentRetryAttempt += 1;
    const c = r.retryBackoff ? r.retryBackoff(o, d) : new Promise((f) => {
      setTimeout(f, d);
    });
    return r.onRetryAttempt && await r.onRetryAttempt(o), await c, { shouldRetry: !0, config: o.config };
  }
  function e(o) {
    var l, u;
    const r = n(o);
    if ((l = o.config.signal) != null && l.aborted && o.code !== "TimeoutError" || o.code === "AbortError" || !r || r.retry === 0 || !o.response && (r.currentRetryAttempt || 0) >= r.noResponseRetries || !r.httpMethodsToRetry || !r.httpMethodsToRetry.includes(((u = o.config.method) == null ? void 0 : u.toUpperCase()) || "GET"))
      return !1;
    if (o.response && o.response.status) {
      let d = !1;
      for (const [c, f] of r.statusCodesToRetry) {
        const h = o.response.status;
        if (h >= c && h <= f) {
          d = !0;
          break;
        }
      }
      if (!d)
        return !1;
    }
    return r.currentRetryAttempt = r.currentRetryAttempt || 0, !(r.currentRetryAttempt >= r.retry);
  }
  function n(o) {
    if (o && o.config && o.config.retryConfig)
      return o.config.retryConfig;
  }
  function i(o) {
    const l = (o.currentRetryAttempt ? 0 : o.retryDelay ?? 100) + (Math.pow(o.retryDelayMultiplier, o.currentRetryAttempt) - 1) / 2 * 1e3, u = o.totalTimeout - (Date.now() - o.timeOfFirstRequest);
    return Math.min(l, u, o.maxRetryDelay);
  }
  return on;
}
var It = {}, Ei;
function jr() {
  if (Ei) return It;
  Ei = 1, Object.defineProperty(It, "__esModule", { value: !0 }), It.GaxiosInterceptorManager = void 0;
  class t extends Set {
  }
  return It.GaxiosInterceptorManager = t, It;
}
var Ti;
function $a() {
  var h, es, ts, ns, is, Hn, C, A, k, os, rs;
  if (Ti) return Ke;
  Ti = 1;
  var t = Ke && Ke.__importDefault || function(M) {
    return M && M.__esModule ? M : { default: M };
  }, e;
  Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.Gaxios = void 0;
  const n = t(Qr()), i = zr, o = Zr(), r = Ha(), l = Ve, u = jr(), d = async () => {
    var M;
    return ((M = globalThis.crypto) == null ? void 0 : M.randomUUID()) || (await import("crypto")).randomUUID();
  }, c = 204;
  class f {
    /**
     * The Gaxios class is responsible for making HTTP requests.
     * @param defaults The default set of options to be used for this instance.
     */
    constructor(w) {
      ye(this, h);
      V(this, "agentCache", /* @__PURE__ */ new Map());
      /**
       * Default HTTP options that will be used for every HTTP request.
       */
      V(this, "defaults");
      /**
       * Interceptors
       */
      V(this, "interceptors");
      this.defaults = w || {}, this.interceptors = {
        request: new u.GaxiosInterceptorManager(),
        response: new u.GaxiosInterceptorManager()
      };
    }
    /**
     * A {@link fetch `fetch`} compliant API for {@link Gaxios}.
     *
     * @remarks
     *
     * This is useful as a drop-in replacement for `fetch` API usage.
     *
     * @example
     *
     * ```ts
     * const gaxios = new Gaxios();
     * const myFetch: typeof fetch = (...args) => gaxios.fetch(...args);
     * await myFetch('https://example.com');
     * ```
     *
     * @param args `fetch` API or `Gaxios#request` parameters
     * @returns the {@link Response} with Gaxios-added properties
     */
    fetch(...w) {
      const D = w[0], g = w[1];
      let E;
      const G = new Headers();
      return typeof D == "string" ? E = new URL(D) : D instanceof URL ? E = D : D && D.url && (E = new URL(D.url)), D && typeof D == "object" && "headers" in D && e.mergeHeaders(G, D.headers), g && e.mergeHeaders(G, new Headers(g.headers)), typeof D == "object" && !(D instanceof URL) ? this.request({ ...g, ...D, headers: G, url: E }) : this.request({ ...g, headers: G, url: E });
    }
    /**
     * Perform an HTTP request with the given options.
     * @param opts Set of HTTP options that will be used for this HTTP request.
     */
    async request(w = {}) {
      let D = await ce(this, h, is).call(this, w);
      return D = await ce(this, h, ts).call(this, D), ce(this, h, ns).call(this, this._request(D));
    }
    async _defaultAdapter(w) {
      var H, q;
      const D = w.fetchImplementation || this.defaults.fetchImplementation || await ce(H = e, k, rs).call(H), g = { ...w };
      delete g.data;
      const E = await D(w.url, g), G = await this.getResponseData(w, E);
      return (q = Object.getOwnPropertyDescriptor(E, "data")) != null && q.configurable || Object.defineProperties(E, {
        data: {
          configurable: !0,
          writable: !0,
          enumerable: !0,
          value: G
        }
      }), Object.assign(E, { config: w, data: G });
    }
    /**
     * Internal, retryable version of the `request` method.
     * @param opts Set of HTTP options that will be used for this HTTP request.
     */
    async _request(w) {
      var D;
      try {
        let g;
        if (w.adapter ? g = await w.adapter(w, this._defaultAdapter.bind(this)) : g = await this._defaultAdapter(w), !w.validateStatus(g.status)) {
          if (w.responseType === "stream") {
            const G = [];
            for await (const H of g.data)
              G.push(H);
            g.data = G.toString();
          }
          const E = o.GaxiosError.extractAPIErrorFromResponse(g, `Request failed with status code ${g.status}`);
          throw new o.GaxiosError(E == null ? void 0 : E.message, w, g, E);
        }
        return g;
      } catch (g) {
        let E;
        g instanceof o.GaxiosError ? E = g : g instanceof Error ? E = new o.GaxiosError(g.message, w, void 0, g) : E = new o.GaxiosError("Unexpected Gaxios Error", w, void 0, g);
        const { shouldRetry: G, config: H } = await (0, r.getRetryConfig)(E);
        if (G && H)
          return E.config.retryConfig.currentRetryAttempt = H.retryConfig.currentRetryAttempt, w.retryConfig = (D = E.config) == null ? void 0 : D.retryConfig, ce(this, h, Hn).call(this, w), this._request(w);
        throw w.errorRedactor && w.errorRedactor(E), E;
      }
    }
    async getResponseData(w, D) {
      var g;
      if (D.status === c)
        return "";
      if (w.maxContentLength && D.headers.has("content-length") && w.maxContentLength < Number.parseInt(((g = D.headers) == null ? void 0 : g.get("content-length")) || ""))
        throw new o.GaxiosError("Response's `Content-Length` is over the limit.", w, Object.assign(D, { config: w }));
      switch (w.responseType) {
        case "stream":
          return D.body;
        case "json": {
          const E = await D.text();
          try {
            return JSON.parse(E);
          } catch {
            return E;
          }
        }
        case "arraybuffer":
          return D.arrayBuffer();
        case "blob":
          return D.blob();
        case "text":
          return D.text();
        default:
          return this.getResponseDataFromContentType(D);
      }
    }
    /**
     * By default, throw for any non-2xx status code
     * @param status status code from the HTTP response
     */
    validateStatus(w) {
      return w >= 200 && w < 300;
    }
    /**
     * Attempts to parse a response by looking at the Content-Type header.
     * @param {Response} response the HTTP response.
     * @returns a promise that resolves to the response data.
     */
    async getResponseDataFromContentType(w) {
      let D = w.headers.get("Content-Type");
      if (D === null)
        return w.text();
      if (D = D.toLowerCase(), D.includes("application/json")) {
        let g = await w.text();
        try {
          g = JSON.parse(g);
        } catch {
        }
        return g;
      } else return D.match(/^text\//) ? w.text() : w.blob();
    }
    /**
     * Creates an async generator that yields the pieces of a multipart/related request body.
     * This implementation follows the spec: https://www.ietf.org/rfc/rfc2387.txt. However, recursive
     * multipart/related requests are not currently supported.
     *
     * @param {GaxiosMultipartOptions[]} multipartOptions the pieces to turn into a multipart/related body.
     * @param {string} boundary the boundary string to be placed between each part.
     */
    async *getMultipartRequest(w, D) {
      const g = `--${D}--`;
      for (const E of w) {
        const G = E.headers.get("Content-Type") || "application/octet-stream";
        yield `--${D}\r
Content-Type: ${G}\r
\r
`, typeof E.content == "string" ? yield E.content : yield* E.content, yield `\r
`;
      }
      yield g;
    }
    /**
     * Merges headers.
     * If the base headers do not exist a new `Headers` object will be returned.
     *
     * @remarks
     *
     * Using this utility can be helpful when the headers are not known to exist:
     * - if they exist as `Headers`, that instance will be used
     *   - it improves performance and allows users to use their existing references to their `Headers`
     * - if they exist in another form (`HeadersInit`), they will be used to create a new `Headers` object
     * - if the base headers do not exist a new `Headers` object will be created
     *
     * @param base headers to append/overwrite to
     * @param append headers to append/overwrite with
     * @returns the base headers instance with merged `Headers`
     */
    static mergeHeaders(w, ...D) {
      w = w instanceof Headers ? w : new Headers(w);
      for (const g of D)
        (g instanceof Headers ? g : new Headers(g)).forEach((G, H) => {
          H === "set-cookie" ? w.append(H, G) : w.set(H, G);
        });
      return w;
    }
  }
  return h = new WeakSet(), es = function(w, D = []) {
    var H;
    const g = new URL(w), E = [...D], G = ((H = process.env.NO_PROXY ?? process.env.no_proxy) == null ? void 0 : H.split(",")) || [];
    for (const q of G)
      E.push(q.trim());
    for (const q of E)
      if (q instanceof RegExp) {
        if (q.test(g.toString()))
          return !1;
      } else if (q instanceof URL) {
        if (q.origin === g.origin)
          return !1;
      } else if (q.startsWith("*.") || q.startsWith(".")) {
        const J = q.replace(/^\*\./, ".");
        if (g.hostname.endsWith(J))
          return !1;
      } else if (q === g.origin || q === g.hostname || q === g.href)
        return !1;
    return !0;
  }, ts = async function(w) {
    let D = Promise.resolve(w);
    for (const g of this.interceptors.request.values())
      g && (D = D.then(g.resolved, g.rejected));
    return D;
  }, ns = async function(w) {
    let D = Promise.resolve(w);
    for (const g of this.interceptors.response.values())
      g && (D = D.then(g.resolved, g.rejected));
    return D;
  }, is = async function(w) {
    var H, q, J, W, Z, Q, ee, ge;
    const D = new Headers(this.defaults.headers);
    e.mergeHeaders(D, w.headers);
    const g = (0, n.default)(!0, {}, this.defaults, w);
    if (!g.url)
      throw new Error("URL is required.");
    if (g.baseURL && (g.url = new URL(g.url, g.baseURL)), g.url = new URL(g.url), g.params)
      if (g.paramsSerializer) {
        let oe = g.paramsSerializer(g.params);
        oe.startsWith("?") && (oe = oe.slice(1));
        const ve = g.url.toString().includes("?") ? "&" : "?";
        g.url = g.url + ve + oe;
      } else {
        const oe = g.url instanceof URL ? g.url : new URL(g.url);
        for (const [ve, fe] of new URLSearchParams(g.params))
          oe.searchParams.append(ve, fe);
        g.url = oe;
      }
    typeof w.maxContentLength == "number" && (g.size = w.maxContentLength), typeof w.maxRedirects == "number" && (g.follow = w.maxRedirects);
    const E = typeof g.data == "string" || g.data instanceof ArrayBuffer || g.data instanceof Blob || // Node 18 does not have a global `File` object
    globalThis.File && g.data instanceof File || g.data instanceof FormData || g.data instanceof l.Readable || g.data instanceof ReadableStream || g.data instanceof String || g.data instanceof URLSearchParams || ArrayBuffer.isView(g.data) || // `Buffer` (Node.js), `DataView`, `TypedArray`
    /**
     * @deprecated `node-fetch` or another third-party's request types
     */
    ["Blob", "File", "FormData"].includes(((q = (H = g.data) == null ? void 0 : H.constructor) == null ? void 0 : q.name) || "");
    if ((J = g.multipart) != null && J.length) {
      const oe = await d();
      D.set("content-type", `multipart/related; boundary=${oe}`), g.body = l.Readable.from(this.getMultipartRequest(g.multipart, oe));
    } else E ? g.body = g.data : typeof g.data == "object" ? D.get("Content-Type") === "application/x-www-form-urlencoded" ? g.body = g.paramsSerializer ? g.paramsSerializer(g.data) : new URLSearchParams(g.data) : (D.has("content-type") || D.set("content-type", "application/json"), g.body = JSON.stringify(g.data)) : g.data && (g.body = g.data);
    g.validateStatus = g.validateStatus || this.validateStatus, g.responseType = g.responseType || "unknown", !D.has("accept") && g.responseType === "json" && D.set("accept", "application/json");
    const G = g.proxy || ((W = process.env) == null ? void 0 : W.HTTPS_PROXY) || ((Z = process.env) == null ? void 0 : Z.https_proxy) || ((Q = process.env) == null ? void 0 : Q.HTTP_PROXY) || ((ee = process.env) == null ? void 0 : ee.http_proxy);
    if (!g.agent) if (G && ce(this, h, es).call(this, g.url, g.noProxy)) {
      const oe = await ce(ge = e, k, os).call(ge);
      this.agentCache.has(G) ? g.agent = this.agentCache.get(G) : (g.agent = new oe(G, {
        cert: g.cert,
        key: g.key
      }), this.agentCache.set(G, g.agent));
    } else g.cert && g.key && (this.agentCache.has(g.key) ? g.agent = this.agentCache.get(g.key) : (g.agent = new i.Agent({
      cert: g.cert,
      key: g.key
    }), this.agentCache.set(g.key, g.agent)));
    return typeof g.errorRedactor != "function" && g.errorRedactor !== !1 && (g.errorRedactor = o.defaultErrorRedactor), g.body && !("duplex" in g) && (g.duplex = "half"), ce(this, h, Hn).call(this, g), Object.assign(g, {
      headers: D,
      url: g.url instanceof URL ? g.url : new URL(g.url)
    });
  }, Hn = function(w) {
    if (w.timeout) {
      const D = AbortSignal.timeout(w.timeout);
      w.signal && !w.signal.aborted ? w.signal = AbortSignal.any([w.signal, D]) : w.signal = D;
    }
  }, C = new WeakMap(), A = new WeakMap(), k = new WeakSet(), os = async function() {
    return se(this, C) || Ne(this, C, (await import("./index-Be3YBbK0.js").then((w) => w.i)).HttpsProxyAgent), se(this, C);
  }, rs = async function() {
    const w = typeof window < "u" && !!window;
    return se(this, A) || Ne(this, A, w ? window.fetch : (await import("./index-JSo2Ek-w.js")).default), se(this, A);
  }, ye(f, k), /**
   * A cache for the lazily-loaded proxy agent.
   *
   * Should use {@link Gaxios[#getProxyAgent]} to retrieve.
   */
  // using `import` to dynamically import the types here
  ye(f, C), /**
   * A cache for the lazily-loaded fetch library.
   *
   * Should use {@link Gaxios[#getFetch]} to retrieve.
   */
  //
  ye(f, A), Ke.Gaxios = f, e = f, Ke;
}
var Ci;
function Ee() {
  return Ci || (Ci = 1, (function(t) {
    var e = Je && Je.__createBinding || (Object.create ? (function(l, u, d, c) {
      c === void 0 && (c = d);
      var f = Object.getOwnPropertyDescriptor(u, d);
      (!f || ("get" in f ? !u.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
        return u[d];
      } }), Object.defineProperty(l, c, f);
    }) : (function(l, u, d, c) {
      c === void 0 && (c = d), l[c] = u[d];
    })), n = Je && Je.__exportStar || function(l, u) {
      for (var d in l) d !== "default" && !Object.prototype.hasOwnProperty.call(u, d) && e(u, l, d);
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.instance = t.Gaxios = t.GaxiosError = void 0, t.request = r;
    const i = $a();
    Object.defineProperty(t, "Gaxios", { enumerable: !0, get: function() {
      return i.Gaxios;
    } });
    var o = Zr();
    Object.defineProperty(t, "GaxiosError", { enumerable: !0, get: function() {
      return o.GaxiosError;
    } }), n(jr(), t), t.instance = new i.Gaxios();
    async function r(l) {
      return t.instance.request(l);
    }
  })(Je)), Je;
}
var ke = {}, Rt = { exports: {} }, Rn = { exports: {} }, an = { exports: {} }, Ja = an.exports, Ai;
function ss() {
  return Ai || (Ai = 1, (function(t) {
    (function(e) {
      var n, i = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, o = Math.ceil, r = Math.floor, l = "[BigNumber Error] ", u = l + "Number primitive has more than 15 significant digits: ", d = 1e14, c = 14, f = 9007199254740991, h = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], p = 1e7, m = 1e9;
      function v(M) {
        var w, D, g, E = K.prototype = { constructor: K, toString: null, valueOf: null }, G = new K(1), H = 20, q = 4, J = -7, W = 21, Z = -1e7, Q = 1e7, ee = !1, ge = 1, oe = 0, ve = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: " ",
          // non-breaking space
          suffix: ""
        }, fe = "0123456789abcdefghijklmnopqrstuvwxyz", st = !0;
        function K(S, R) {
          var x, I, T, P, L, U, F, B, O = this;
          if (!(O instanceof K)) return new K(S, R);
          if (R == null) {
            if (S && S._isBigNumber === !0) {
              O.s = S.s, !S.c || S.e > Q ? O.c = O.e = null : S.e < Z ? O.c = [O.e = 0] : (O.e = S.e, O.c = S.c.slice());
              return;
            }
            if ((U = typeof S == "number") && S * 0 == 0) {
              if (O.s = 1 / S < 0 ? (S = -S, -1) : 1, S === ~~S) {
                for (P = 0, L = S; L >= 10; L /= 10, P++) ;
                P > Q ? O.c = O.e = null : (O.e = P, O.c = [S]);
                return;
              }
              B = String(S);
            } else {
              if (!i.test(B = String(S))) return g(O, B, U);
              O.s = B.charCodeAt(0) == 45 ? (B = B.slice(1), -1) : 1;
            }
            (P = B.indexOf(".")) > -1 && (B = B.replace(".", "")), (L = B.search(/e/i)) > 0 ? (P < 0 && (P = L), P += +B.slice(L + 1), B = B.substring(0, L)) : P < 0 && (P = B.length);
          } else {
            if (A(R, 2, fe.length, "Base"), R == 10 && st)
              return O = new K(S), Te(O, H + O.e + 1, q);
            if (B = String(S), U = typeof S == "number") {
              if (S * 0 != 0) return g(O, B, U, R);
              if (O.s = 1 / S < 0 ? (B = B.slice(1), -1) : 1, K.DEBUG && B.replace(/^0\.0*|\./, "").length > 15)
                throw Error(u + S);
            } else
              O.s = B.charCodeAt(0) === 45 ? (B = B.slice(1), -1) : 1;
            for (x = fe.slice(0, R), P = L = 0, F = B.length; L < F; L++)
              if (x.indexOf(I = B.charAt(L)) < 0) {
                if (I == ".") {
                  if (L > P) {
                    P = F;
                    continue;
                  }
                } else if (!T && (B == B.toUpperCase() && (B = B.toLowerCase()) || B == B.toLowerCase() && (B = B.toUpperCase()))) {
                  T = !0, L = -1, P = 0;
                  continue;
                }
                return g(O, String(S), U, R);
              }
            U = !1, B = D(B, R, 10, O.s), (P = B.indexOf(".")) > -1 ? B = B.replace(".", "") : P = B.length;
          }
          for (L = 0; B.charCodeAt(L) === 48; L++) ;
          for (F = B.length; B.charCodeAt(--F) === 48; ) ;
          if (B = B.slice(L, ++F)) {
            if (F -= L, U && K.DEBUG && F > 15 && (S > f || S !== r(S)))
              throw Error(u + O.s * S);
            if ((P = P - L - 1) > Q)
              O.c = O.e = null;
            else if (P < Z)
              O.c = [O.e = 0];
            else {
              if (O.e = P, O.c = [], L = (P + 1) % c, P < 0 && (L += c), L < F) {
                for (L && O.c.push(+B.slice(0, L)), F -= c; L < F; )
                  O.c.push(+B.slice(L, L += c));
                L = c - (B = B.slice(L)).length;
              } else
                L -= F;
              for (; L--; B += "0") ;
              O.c.push(+B);
            }
          } else
            O.c = [O.e = 0];
        }
        K.clone = v, K.ROUND_UP = 0, K.ROUND_DOWN = 1, K.ROUND_CEIL = 2, K.ROUND_FLOOR = 3, K.ROUND_HALF_UP = 4, K.ROUND_HALF_DOWN = 5, K.ROUND_HALF_EVEN = 6, K.ROUND_HALF_CEIL = 7, K.ROUND_HALF_FLOOR = 8, K.EUCLID = 9, K.config = K.set = function(S) {
          var R, x;
          if (S != null)
            if (typeof S == "object") {
              if (S.hasOwnProperty(R = "DECIMAL_PLACES") && (x = S[R], A(x, 0, m, R), H = x), S.hasOwnProperty(R = "ROUNDING_MODE") && (x = S[R], A(x, 0, 8, R), q = x), S.hasOwnProperty(R = "EXPONENTIAL_AT") && (x = S[R], x && x.pop ? (A(x[0], -m, 0, R), A(x[1], 0, m, R), J = x[0], W = x[1]) : (A(x, -m, m, R), J = -(W = x < 0 ? -x : x))), S.hasOwnProperty(R = "RANGE"))
                if (x = S[R], x && x.pop)
                  A(x[0], -m, -1, R), A(x[1], 1, m, R), Z = x[0], Q = x[1];
                else if (A(x, -m, m, R), x)
                  Z = -(Q = x < 0 ? -x : x);
                else
                  throw Error(l + R + " cannot be zero: " + x);
              if (S.hasOwnProperty(R = "CRYPTO"))
                if (x = S[R], x === !!x)
                  if (x)
                    if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                      ee = x;
                    else
                      throw ee = !x, Error(l + "crypto unavailable");
                  else
                    ee = x;
                else
                  throw Error(l + R + " not true or false: " + x);
              if (S.hasOwnProperty(R = "MODULO_MODE") && (x = S[R], A(x, 0, 9, R), ge = x), S.hasOwnProperty(R = "POW_PRECISION") && (x = S[R], A(x, 0, m, R), oe = x), S.hasOwnProperty(R = "FORMAT"))
                if (x = S[R], typeof x == "object") ve = x;
                else throw Error(l + R + " not an object: " + x);
              if (S.hasOwnProperty(R = "ALPHABET"))
                if (x = S[R], typeof x == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(x))
                  st = x.slice(0, 10) == "0123456789", fe = x;
                else
                  throw Error(l + R + " invalid: " + x);
            } else
              throw Error(l + "Object expected: " + S);
          return {
            DECIMAL_PLACES: H,
            ROUNDING_MODE: q,
            EXPONENTIAL_AT: [J, W],
            RANGE: [Z, Q],
            CRYPTO: ee,
            MODULO_MODE: ge,
            POW_PRECISION: oe,
            FORMAT: ve,
            ALPHABET: fe
          };
        }, K.isBigNumber = function(S) {
          if (!S || S._isBigNumber !== !0) return !1;
          if (!K.DEBUG) return !0;
          var R, x, I = S.c, T = S.e, P = S.s;
          e: if ({}.toString.call(I) == "[object Array]") {
            if ((P === 1 || P === -1) && T >= -m && T <= m && T === r(T)) {
              if (I[0] === 0) {
                if (T === 0 && I.length === 1) return !0;
                break e;
              }
              if (R = (T + 1) % c, R < 1 && (R += c), String(I[0]).length == R) {
                for (R = 0; R < I.length; R++)
                  if (x = I[R], x < 0 || x >= d || x !== r(x)) break e;
                if (x !== 0) return !0;
              }
            }
          } else if (I === null && T === null && (P === null || P === 1 || P === -1))
            return !0;
          throw Error(l + "Invalid BigNumber: " + S);
        }, K.maximum = K.max = function() {
          return at(arguments, -1);
        }, K.minimum = K.min = function() {
          return at(arguments, 1);
        }, K.random = (function() {
          var S = 9007199254740992, R = Math.random() * S & 2097151 ? function() {
            return r(Math.random() * S);
          } : function() {
            return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
          };
          return function(x) {
            var I, T, P, L, U, F = 0, B = [], O = new K(G);
            if (x == null ? x = H : A(x, 0, m), L = o(x / c), ee)
              if (crypto.getRandomValues) {
                for (I = crypto.getRandomValues(new Uint32Array(L *= 2)); F < L; )
                  U = I[F] * 131072 + (I[F + 1] >>> 11), U >= 9e15 ? (T = crypto.getRandomValues(new Uint32Array(2)), I[F] = T[0], I[F + 1] = T[1]) : (B.push(U % 1e14), F += 2);
                F = L / 2;
              } else if (crypto.randomBytes) {
                for (I = crypto.randomBytes(L *= 7); F < L; )
                  U = (I[F] & 31) * 281474976710656 + I[F + 1] * 1099511627776 + I[F + 2] * 4294967296 + I[F + 3] * 16777216 + (I[F + 4] << 16) + (I[F + 5] << 8) + I[F + 6], U >= 9e15 ? crypto.randomBytes(7).copy(I, F) : (B.push(U % 1e14), F += 7);
                F = L / 7;
              } else
                throw ee = !1, Error(l + "crypto unavailable");
            if (!ee)
              for (; F < L; )
                U = R(), U < 9e15 && (B[F++] = U % 1e14);
            for (L = B[--F], x %= c, L && x && (U = h[c - x], B[F] = r(L / U) * U); B[F] === 0; B.pop(), F--) ;
            if (F < 0)
              B = [P = 0];
            else {
              for (P = -1; B[0] === 0; B.splice(0, 1), P -= c) ;
              for (F = 1, U = B[0]; U >= 10; U /= 10, F++) ;
              F < c && (P -= c - F);
            }
            return O.e = P, O.c = B, O;
          };
        })(), K.sum = function() {
          for (var S = 1, R = arguments, x = new K(R[0]); S < R.length; ) x = x.plus(R[S++]);
          return x;
        }, D = /* @__PURE__ */ (function() {
          var S = "0123456789";
          function R(x, I, T, P) {
            for (var L, U = [0], F, B = 0, O = x.length; B < O; ) {
              for (F = U.length; F--; U[F] *= I) ;
              for (U[0] += P.indexOf(x.charAt(B++)), L = 0; L < U.length; L++)
                U[L] > T - 1 && (U[L + 1] == null && (U[L + 1] = 0), U[L + 1] += U[L] / T | 0, U[L] %= T);
            }
            return U.reverse();
          }
          return function(x, I, T, P, L) {
            var U, F, B, O, $, Y, z, j, ne = x.indexOf("."), le = H, te = q;
            for (ne >= 0 && (O = oe, oe = 0, x = x.replace(".", ""), j = new K(I), Y = j.pow(x.length - ne), oe = O, j.c = R(
              N(_(Y.c), Y.e, "0"),
              10,
              T,
              S
            ), j.e = j.c.length), z = R(x, I, T, L ? (U = fe, S) : (U = S, fe)), B = O = z.length; z[--O] == 0; z.pop()) ;
            if (!z[0]) return U.charAt(0);
            if (ne < 0 ? --B : (Y.c = z, Y.e = B, Y.s = P, Y = w(Y, j, le, te, T), z = Y.c, $ = Y.r, B = Y.e), F = B + le + 1, ne = z[F], O = T / 2, $ = $ || F < 0 || z[F + 1] != null, $ = te < 4 ? (ne != null || $) && (te == 0 || te == (Y.s < 0 ? 3 : 2)) : ne > O || ne == O && (te == 4 || $ || te == 6 && z[F - 1] & 1 || te == (Y.s < 0 ? 8 : 7)), F < 1 || !z[0])
              x = $ ? N(U.charAt(1), -le, U.charAt(0)) : U.charAt(0);
            else {
              if (z.length = F, $)
                for (--T; ++z[--F] > T; )
                  z[F] = 0, F || (++B, z = [1].concat(z));
              for (O = z.length; !z[--O]; ) ;
              for (ne = 0, x = ""; ne <= O; x += U.charAt(z[ne++])) ;
              x = N(x, B, U.charAt(0));
            }
            return x;
          };
        })(), w = /* @__PURE__ */ (function() {
          function S(I, T, P) {
            var L, U, F, B, O = 0, $ = I.length, Y = T % p, z = T / p | 0;
            for (I = I.slice(); $--; )
              F = I[$] % p, B = I[$] / p | 0, L = z * F + B * Y, U = Y * F + L % p * p + O, O = (U / P | 0) + (L / p | 0) + z * B, I[$] = U % P;
            return O && (I = [O].concat(I)), I;
          }
          function R(I, T, P, L) {
            var U, F;
            if (P != L)
              F = P > L ? 1 : -1;
            else
              for (U = F = 0; U < P; U++)
                if (I[U] != T[U]) {
                  F = I[U] > T[U] ? 1 : -1;
                  break;
                }
            return F;
          }
          function x(I, T, P, L) {
            for (var U = 0; P--; )
              I[P] -= U, U = I[P] < T[P] ? 1 : 0, I[P] = U * L + I[P] - T[P];
            for (; !I[0] && I.length > 1; I.splice(0, 1)) ;
          }
          return function(I, T, P, L, U) {
            var F, B, O, $, Y, z, j, ne, le, te, ue, me, lt, ut, St, we, $e, he = I.s == T.s ? 1 : -1, re = I.c, ie = T.c;
            if (!re || !re[0] || !ie || !ie[0])
              return new K(
                // Return NaN if either NaN, or both Infinity or 0.
                !I.s || !T.s || (re ? ie && re[0] == ie[0] : !ie) ? NaN : (
                  // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                  re && re[0] == 0 || !ie ? he * 0 : he / 0
                )
              );
            for (ne = new K(he), le = ne.c = [], B = I.e - T.e, he = P + B + 1, U || (U = d, B = y(I.e / c) - y(T.e / c), he = he / c | 0), O = 0; ie[O] == (re[O] || 0); O++) ;
            if (ie[O] > (re[O] || 0) && B--, he < 0)
              le.push(1), $ = !0;
            else {
              for (ut = re.length, we = ie.length, O = 0, he += 2, Y = r(U / (ie[0] + 1)), Y > 1 && (ie = S(ie, Y, U), re = S(re, Y, U), we = ie.length, ut = re.length), lt = we, te = re.slice(0, we), ue = te.length; ue < we; te[ue++] = 0) ;
              $e = ie.slice(), $e = [0].concat($e), St = ie[0], ie[1] >= U / 2 && St++;
              do {
                if (Y = 0, F = R(ie, te, we, ue), F < 0) {
                  if (me = te[0], we != ue && (me = me * U + (te[1] || 0)), Y = r(me / St), Y > 1)
                    for (Y >= U && (Y = U - 1), z = S(ie, Y, U), j = z.length, ue = te.length; R(z, te, j, ue) == 1; )
                      Y--, x(z, we < j ? $e : ie, j, U), j = z.length, F = 1;
                  else
                    Y == 0 && (F = Y = 1), z = ie.slice(), j = z.length;
                  if (j < ue && (z = [0].concat(z)), x(te, z, ue, U), ue = te.length, F == -1)
                    for (; R(ie, te, we, ue) < 1; )
                      Y++, x(te, we < ue ? $e : ie, ue, U), ue = te.length;
                } else F === 0 && (Y++, te = [0]);
                le[O++] = Y, te[0] ? te[ue++] = re[lt] || 0 : (te = [re[lt]], ue = 1);
              } while ((lt++ < ut || te[0] != null) && he--);
              $ = te[0] != null, le[0] || le.splice(0, 1);
            }
            if (U == d) {
              for (O = 1, he = le[0]; he >= 10; he /= 10, O++) ;
              Te(ne, P + (ne.e = O + B * c - 1) + 1, L, $);
            } else
              ne.e = B, ne.r = +$;
            return ne;
          };
        })();
        function Ct(S, R, x, I) {
          var T, P, L, U, F;
          if (x == null ? x = q : A(x, 0, 8), !S.c) return S.toString();
          if (T = S.c[0], L = S.e, R == null)
            F = _(S.c), F = I == 1 || I == 2 && (L <= J || L >= W) ? b(F, L) : N(F, L, "0");
          else if (S = Te(new K(S), R, x), P = S.e, F = _(S.c), U = F.length, I == 1 || I == 2 && (R <= P || P <= J)) {
            for (; U < R; F += "0", U++) ;
            F = b(F, P);
          } else if (R -= L + (I === 2 && P > L), F = N(F, P, "0"), P + 1 > U) {
            if (--R > 0) for (F += "."; R--; F += "0") ;
          } else if (R += P - U, R > 0)
            for (P + 1 == U && (F += "."); R--; F += "0") ;
          return S.s < 0 && T ? "-" + F : F;
        }
        function at(S, R) {
          for (var x, I, T = 1, P = new K(S[0]); T < S.length; T++)
            I = new K(S[T]), (!I.s || (x = C(P, I)) === R || x === 0 && P.s === R) && (P = I);
          return P;
        }
        function At(S, R, x) {
          for (var I = 1, T = R.length; !R[--T]; R.pop()) ;
          for (T = R[0]; T >= 10; T /= 10, I++) ;
          return (x = I + x * c - 1) > Q ? S.c = S.e = null : x < Z ? S.c = [S.e = 0] : (S.e = x, S.c = R), S;
        }
        g = /* @__PURE__ */ (function() {
          var S = /^(-?)0([xbo])(?=\w[\w.]*$)/i, R = /^([^.]+)\.$/, x = /^\.([^.]+)$/, I = /^-?(Infinity|NaN)$/, T = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
          return function(P, L, U, F) {
            var B, O = U ? L : L.replace(T, "");
            if (I.test(O))
              P.s = isNaN(O) ? null : O < 0 ? -1 : 1;
            else {
              if (!U && (O = O.replace(S, function($, Y, z) {
                return B = (z = z.toLowerCase()) == "x" ? 16 : z == "b" ? 2 : 8, !F || F == B ? Y : $;
              }), F && (B = F, O = O.replace(R, "$1").replace(x, "0.$1")), L != O))
                return new K(O, B);
              if (K.DEBUG)
                throw Error(l + "Not a" + (F ? " base " + F : "") + " number: " + L);
              P.s = null;
            }
            P.c = P.e = null;
          };
        })();
        function Te(S, R, x, I) {
          var T, P, L, U, F, B, O, $ = S.c, Y = h;
          if ($) {
            e: {
              for (T = 1, U = $[0]; U >= 10; U /= 10, T++) ;
              if (P = R - T, P < 0)
                P += c, L = R, F = $[B = 0], O = r(F / Y[T - L - 1] % 10);
              else if (B = o((P + 1) / c), B >= $.length)
                if (I) {
                  for (; $.length <= B; $.push(0)) ;
                  F = O = 0, T = 1, P %= c, L = P - c + 1;
                } else
                  break e;
              else {
                for (F = U = $[B], T = 1; U >= 10; U /= 10, T++) ;
                P %= c, L = P - c + T, O = L < 0 ? 0 : r(F / Y[T - L - 1] % 10);
              }
              if (I = I || R < 0 || // Are there any non-zero digits after the rounding digit?
              // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
              // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
              $[B + 1] != null || (L < 0 ? F : F % Y[T - L - 1]), I = x < 4 ? (O || I) && (x == 0 || x == (S.s < 0 ? 3 : 2)) : O > 5 || O == 5 && (x == 4 || I || x == 6 && // Check whether the digit to the left of the rounding digit is odd.
              (P > 0 ? L > 0 ? F / Y[T - L] : 0 : $[B - 1]) % 10 & 1 || x == (S.s < 0 ? 8 : 7)), R < 1 || !$[0])
                return $.length = 0, I ? (R -= S.e + 1, $[0] = Y[(c - R % c) % c], S.e = -R || 0) : $[0] = S.e = 0, S;
              if (P == 0 ? ($.length = B, U = 1, B--) : ($.length = B + 1, U = Y[c - P], $[B] = L > 0 ? r(F / Y[T - L] % Y[L]) * U : 0), I)
                for (; ; )
                  if (B == 0) {
                    for (P = 1, L = $[0]; L >= 10; L /= 10, P++) ;
                    for (L = $[0] += U, U = 1; L >= 10; L /= 10, U++) ;
                    P != U && (S.e++, $[0] == d && ($[0] = 1));
                    break;
                  } else {
                    if ($[B] += U, $[B] != d) break;
                    $[B--] = 0, U = 1;
                  }
              for (P = $.length; $[--P] === 0; $.pop()) ;
            }
            S.e > Q ? S.c = S.e = null : S.e < Z && (S.c = [S.e = 0]);
          }
          return S;
        }
        function Ce(S) {
          var R, x = S.e;
          return x === null ? S.toString() : (R = _(S.c), R = x <= J || x >= W ? b(R, x) : N(R, x, "0"), S.s < 0 ? "-" + R : R);
        }
        return E.absoluteValue = E.abs = function() {
          var S = new K(this);
          return S.s < 0 && (S.s = 1), S;
        }, E.comparedTo = function(S, R) {
          return C(this, new K(S, R));
        }, E.decimalPlaces = E.dp = function(S, R) {
          var x, I, T, P = this;
          if (S != null)
            return A(S, 0, m), R == null ? R = q : A(R, 0, 8), Te(new K(P), S + P.e + 1, R);
          if (!(x = P.c)) return null;
          if (I = ((T = x.length - 1) - y(this.e / c)) * c, T = x[T]) for (; T % 10 == 0; T /= 10, I--) ;
          return I < 0 && (I = 0), I;
        }, E.dividedBy = E.div = function(S, R) {
          return w(this, new K(S, R), H, q);
        }, E.dividedToIntegerBy = E.idiv = function(S, R) {
          return w(this, new K(S, R), 0, 1);
        }, E.exponentiatedBy = E.pow = function(S, R) {
          var x, I, T, P, L, U, F, B, O, $ = this;
          if (S = new K(S), S.c && !S.isInteger())
            throw Error(l + "Exponent not an integer: " + Ce(S));
          if (R != null && (R = new K(R)), U = S.e > 14, !$.c || !$.c[0] || $.c[0] == 1 && !$.e && $.c.length == 1 || !S.c || !S.c[0])
            return O = new K(Math.pow(+Ce($), U ? S.s * (2 - k(S)) : +Ce(S))), R ? O.mod(R) : O;
          if (F = S.s < 0, R) {
            if (R.c ? !R.c[0] : !R.s) return new K(NaN);
            I = !F && $.isInteger() && R.isInteger(), I && ($ = $.mod(R));
          } else {
            if (S.e > 9 && ($.e > 0 || $.e < -1 || ($.e == 0 ? $.c[0] > 1 || U && $.c[1] >= 24e7 : $.c[0] < 8e13 || U && $.c[0] <= 9999975e7)))
              return P = $.s < 0 && k(S) ? -0 : 0, $.e > -1 && (P = 1 / P), new K(F ? 1 / P : P);
            oe && (P = o(oe / c + 2));
          }
          for (U ? (x = new K(0.5), F && (S.s = 1), B = k(S)) : (T = Math.abs(+Ce(S)), B = T % 2), O = new K(G); ; ) {
            if (B) {
              if (O = O.times($), !O.c) break;
              P ? O.c.length > P && (O.c.length = P) : I && (O = O.mod(R));
            }
            if (T) {
              if (T = r(T / 2), T === 0) break;
              B = T % 2;
            } else if (S = S.times(x), Te(S, S.e + 1, 1), S.e > 14)
              B = k(S);
            else {
              if (T = +Ce(S), T === 0) break;
              B = T % 2;
            }
            $ = $.times($), P ? $.c && $.c.length > P && ($.c.length = P) : I && ($ = $.mod(R));
          }
          return I ? O : (F && (O = G.div(O)), R ? O.mod(R) : P ? Te(O, oe, q, L) : O);
        }, E.integerValue = function(S) {
          var R = new K(this);
          return S == null ? S = q : A(S, 0, 8), Te(R, R.e + 1, S);
        }, E.isEqualTo = E.eq = function(S, R) {
          return C(this, new K(S, R)) === 0;
        }, E.isFinite = function() {
          return !!this.c;
        }, E.isGreaterThan = E.gt = function(S, R) {
          return C(this, new K(S, R)) > 0;
        }, E.isGreaterThanOrEqualTo = E.gte = function(S, R) {
          return (R = C(this, new K(S, R))) === 1 || R === 0;
        }, E.isInteger = function() {
          return !!this.c && y(this.e / c) > this.c.length - 2;
        }, E.isLessThan = E.lt = function(S, R) {
          return C(this, new K(S, R)) < 0;
        }, E.isLessThanOrEqualTo = E.lte = function(S, R) {
          return (R = C(this, new K(S, R))) === -1 || R === 0;
        }, E.isNaN = function() {
          return !this.s;
        }, E.isNegative = function() {
          return this.s < 0;
        }, E.isPositive = function() {
          return this.s > 0;
        }, E.isZero = function() {
          return !!this.c && this.c[0] == 0;
        }, E.minus = function(S, R) {
          var x, I, T, P, L = this, U = L.s;
          if (S = new K(S, R), R = S.s, !U || !R) return new K(NaN);
          if (U != R)
            return S.s = -R, L.plus(S);
          var F = L.e / c, B = S.e / c, O = L.c, $ = S.c;
          if (!F || !B) {
            if (!O || !$) return O ? (S.s = -R, S) : new K($ ? L : NaN);
            if (!O[0] || !$[0])
              return $[0] ? (S.s = -R, S) : new K(O[0] ? L : (
                // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                q == 3 ? -0 : 0
              ));
          }
          if (F = y(F), B = y(B), O = O.slice(), U = F - B) {
            for ((P = U < 0) ? (U = -U, T = O) : (B = F, T = $), T.reverse(), R = U; R--; T.push(0)) ;
            T.reverse();
          } else
            for (I = (P = (U = O.length) < (R = $.length)) ? U : R, U = R = 0; R < I; R++)
              if (O[R] != $[R]) {
                P = O[R] < $[R];
                break;
              }
          if (P && (T = O, O = $, $ = T, S.s = -S.s), R = (I = $.length) - (x = O.length), R > 0) for (; R--; O[x++] = 0) ;
          for (R = d - 1; I > U; ) {
            if (O[--I] < $[I]) {
              for (x = I; x && !O[--x]; O[x] = R) ;
              --O[x], O[I] += d;
            }
            O[I] -= $[I];
          }
          for (; O[0] == 0; O.splice(0, 1), --B) ;
          return O[0] ? At(S, O, B) : (S.s = q == 3 ? -1 : 1, S.c = [S.e = 0], S);
        }, E.modulo = E.mod = function(S, R) {
          var x, I, T = this;
          return S = new K(S, R), !T.c || !S.s || S.c && !S.c[0] ? new K(NaN) : !S.c || T.c && !T.c[0] ? new K(T) : (ge == 9 ? (I = S.s, S.s = 1, x = w(T, S, 0, 3), S.s = I, x.s *= I) : x = w(T, S, 0, ge), S = T.minus(x.times(S)), !S.c[0] && ge == 1 && (S.s = T.s), S);
        }, E.multipliedBy = E.times = function(S, R) {
          var x, I, T, P, L, U, F, B, O, $, Y, z, j, ne, le, te = this, ue = te.c, me = (S = new K(S, R)).c;
          if (!ue || !me || !ue[0] || !me[0])
            return !te.s || !S.s || ue && !ue[0] && !me || me && !me[0] && !ue ? S.c = S.e = S.s = null : (S.s *= te.s, !ue || !me ? S.c = S.e = null : (S.c = [0], S.e = 0)), S;
          for (I = y(te.e / c) + y(S.e / c), S.s *= te.s, F = ue.length, $ = me.length, F < $ && (j = ue, ue = me, me = j, T = F, F = $, $ = T), T = F + $, j = []; T--; j.push(0)) ;
          for (ne = d, le = p, T = $; --T >= 0; ) {
            for (x = 0, Y = me[T] % le, z = me[T] / le | 0, L = F, P = T + L; P > T; )
              B = ue[--L] % le, O = ue[L] / le | 0, U = z * B + O * Y, B = Y * B + U % le * le + j[P] + x, x = (B / ne | 0) + (U / le | 0) + z * O, j[P--] = B % ne;
            j[P] = x;
          }
          return x ? ++I : j.splice(0, 1), At(S, j, I);
        }, E.negated = function() {
          var S = new K(this);
          return S.s = -S.s || null, S;
        }, E.plus = function(S, R) {
          var x, I = this, T = I.s;
          if (S = new K(S, R), R = S.s, !T || !R) return new K(NaN);
          if (T != R)
            return S.s = -R, I.minus(S);
          var P = I.e / c, L = S.e / c, U = I.c, F = S.c;
          if (!P || !L) {
            if (!U || !F) return new K(T / 0);
            if (!U[0] || !F[0]) return F[0] ? S : new K(U[0] ? I : T * 0);
          }
          if (P = y(P), L = y(L), U = U.slice(), T = P - L) {
            for (T > 0 ? (L = P, x = F) : (T = -T, x = U), x.reverse(); T--; x.push(0)) ;
            x.reverse();
          }
          for (T = U.length, R = F.length, T - R < 0 && (x = F, F = U, U = x, R = T), T = 0; R; )
            T = (U[--R] = U[R] + F[R] + T) / d | 0, U[R] = d === U[R] ? 0 : U[R] % d;
          return T && (U = [T].concat(U), ++L), At(S, U, L);
        }, E.precision = E.sd = function(S, R) {
          var x, I, T, P = this;
          if (S != null && S !== !!S)
            return A(S, 1, m), R == null ? R = q : A(R, 0, 8), Te(new K(P), S, R);
          if (!(x = P.c)) return null;
          if (T = x.length - 1, I = T * c + 1, T = x[T]) {
            for (; T % 10 == 0; T /= 10, I--) ;
            for (T = x[0]; T >= 10; T /= 10, I++) ;
          }
          return S && P.e + 1 > I && (I = P.e + 1), I;
        }, E.shiftedBy = function(S) {
          return A(S, -f, f), this.times("1e" + S);
        }, E.squareRoot = E.sqrt = function() {
          var S, R, x, I, T, P = this, L = P.c, U = P.s, F = P.e, B = H + 4, O = new K("0.5");
          if (U !== 1 || !L || !L[0])
            return new K(!U || U < 0 && (!L || L[0]) ? NaN : L ? P : 1 / 0);
          if (U = Math.sqrt(+Ce(P)), U == 0 || U == 1 / 0 ? (R = _(L), (R.length + F) % 2 == 0 && (R += "0"), U = Math.sqrt(+R), F = y((F + 1) / 2) - (F < 0 || F % 2), U == 1 / 0 ? R = "5e" + F : (R = U.toExponential(), R = R.slice(0, R.indexOf("e") + 1) + F), x = new K(R)) : x = new K(U + ""), x.c[0]) {
            for (F = x.e, U = F + B, U < 3 && (U = 0); ; )
              if (T = x, x = O.times(T.plus(w(P, T, B, 1))), _(T.c).slice(0, U) === (R = _(x.c)).slice(0, U))
                if (x.e < F && --U, R = R.slice(U - 3, U + 1), R == "9999" || !I && R == "4999") {
                  if (!I && (Te(T, T.e + H + 2, 0), T.times(T).eq(P))) {
                    x = T;
                    break;
                  }
                  B += 4, U += 4, I = 1;
                } else {
                  (!+R || !+R.slice(1) && R.charAt(0) == "5") && (Te(x, x.e + H + 2, 1), S = !x.times(x).eq(P));
                  break;
                }
          }
          return Te(x, x.e + H + 1, q, S);
        }, E.toExponential = function(S, R) {
          return S != null && (A(S, 0, m), S++), Ct(this, S, R, 1);
        }, E.toFixed = function(S, R) {
          return S != null && (A(S, 0, m), S = S + this.e + 1), Ct(this, S, R);
        }, E.toFormat = function(S, R, x) {
          var I, T = this;
          if (x == null)
            S != null && R && typeof R == "object" ? (x = R, R = null) : S && typeof S == "object" ? (x = S, S = R = null) : x = ve;
          else if (typeof x != "object")
            throw Error(l + "Argument not an object: " + x);
          if (I = T.toFixed(S, R), T.c) {
            var P, L = I.split("."), U = +x.groupSize, F = +x.secondaryGroupSize, B = x.groupSeparator || "", O = L[0], $ = L[1], Y = T.s < 0, z = Y ? O.slice(1) : O, j = z.length;
            if (F && (P = U, U = F, F = P, j -= P), U > 0 && j > 0) {
              for (P = j % U || U, O = z.substr(0, P); P < j; P += U) O += B + z.substr(P, U);
              F > 0 && (O += B + z.slice(P)), Y && (O = "-" + O);
            }
            I = $ ? O + (x.decimalSeparator || "") + ((F = +x.fractionGroupSize) ? $.replace(
              new RegExp("\\d{" + F + "}\\B", "g"),
              "$&" + (x.fractionGroupSeparator || "")
            ) : $) : O;
          }
          return (x.prefix || "") + I + (x.suffix || "");
        }, E.toFraction = function(S) {
          var R, x, I, T, P, L, U, F, B, O, $, Y, z = this, j = z.c;
          if (S != null && (U = new K(S), !U.isInteger() && (U.c || U.s !== 1) || U.lt(G)))
            throw Error(l + "Argument " + (U.isInteger() ? "out of range: " : "not an integer: ") + Ce(U));
          if (!j) return new K(z);
          for (R = new K(G), B = x = new K(G), I = F = new K(G), Y = _(j), P = R.e = Y.length - z.e - 1, R.c[0] = h[(L = P % c) < 0 ? c + L : L], S = !S || U.comparedTo(R) > 0 ? P > 0 ? R : B : U, L = Q, Q = 1 / 0, U = new K(Y), F.c[0] = 0; O = w(U, R, 0, 1), T = x.plus(O.times(I)), T.comparedTo(S) != 1; )
            x = I, I = T, B = F.plus(O.times(T = B)), F = T, R = U.minus(O.times(T = R)), U = T;
          return T = w(S.minus(x), I, 0, 1), F = F.plus(T.times(B)), x = x.plus(T.times(I)), F.s = B.s = z.s, P = P * 2, $ = w(B, I, P, q).minus(z).abs().comparedTo(
            w(F, x, P, q).minus(z).abs()
          ) < 1 ? [B, I] : [F, x], Q = L, $;
        }, E.toNumber = function() {
          return +Ce(this);
        }, E.toPrecision = function(S, R) {
          return S != null && A(S, 1, m), Ct(this, S, R, 2);
        }, E.toString = function(S) {
          var R, x = this, I = x.s, T = x.e;
          return T === null ? I ? (R = "Infinity", I < 0 && (R = "-" + R)) : R = "NaN" : (S == null ? R = T <= J || T >= W ? b(_(x.c), T) : N(_(x.c), T, "0") : S === 10 && st ? (x = Te(new K(x), H + T + 1, q), R = N(_(x.c), x.e, "0")) : (A(S, 2, fe.length, "Base"), R = D(N(_(x.c), T, "0"), 10, S, I, !0)), I < 0 && x.c[0] && (R = "-" + R)), R;
        }, E.valueOf = E.toJSON = function() {
          return Ce(this);
        }, E._isBigNumber = !0, M != null && K.set(M), K;
      }
      function y(M) {
        var w = M | 0;
        return M > 0 || M === w ? w : w - 1;
      }
      function _(M) {
        for (var w, D, g = 1, E = M.length, G = M[0] + ""; g < E; ) {
          for (w = M[g++] + "", D = c - w.length; D--; w = "0" + w) ;
          G += w;
        }
        for (E = G.length; G.charCodeAt(--E) === 48; ) ;
        return G.slice(0, E + 1 || 1);
      }
      function C(M, w) {
        var D, g, E = M.c, G = w.c, H = M.s, q = w.s, J = M.e, W = w.e;
        if (!H || !q) return null;
        if (D = E && !E[0], g = G && !G[0], D || g) return D ? g ? 0 : -q : H;
        if (H != q) return H;
        if (D = H < 0, g = J == W, !E || !G) return g ? 0 : !E ^ D ? 1 : -1;
        if (!g) return J > W ^ D ? 1 : -1;
        for (q = (J = E.length) < (W = G.length) ? J : W, H = 0; H < q; H++) if (E[H] != G[H]) return E[H] > G[H] ^ D ? 1 : -1;
        return J == W ? 0 : J > W ^ D ? 1 : -1;
      }
      function A(M, w, D, g) {
        if (M < w || M > D || M !== r(M))
          throw Error(l + (g || "Argument") + (typeof M == "number" ? M < w || M > D ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(M));
      }
      function k(M) {
        var w = M.c.length - 1;
        return y(M.e / c) == w && M.c[w] % 2 != 0;
      }
      function b(M, w) {
        return (M.length > 1 ? M.charAt(0) + "." + M.slice(1) : M) + (w < 0 ? "e" : "e+") + w;
      }
      function N(M, w, D) {
        var g, E;
        if (w < 0) {
          for (E = D + "."; ++w; E += D) ;
          M = E + M;
        } else if (g = M.length, ++w > g) {
          for (E = D, w -= g; --w; E += D) ;
          M += E;
        } else w < g && (M = M.slice(0, w) + "." + M.slice(w));
        return M;
      }
      n = v(), n.default = n.BigNumber = n, t.exports ? t.exports = n : (e || (e = typeof self < "u" && self ? self : window), e.BigNumber = n);
    })(Ja);
  })(an)), an.exports;
}
var Si;
function Ka() {
  return Si || (Si = 1, (function(t) {
    var e = ss(), n = t.exports;
    (function() {
      var i = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, o, r, l = {
        // table of character substitutions
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
      }, u;
      function d(f) {
        return i.lastIndex = 0, i.test(f) ? '"' + f.replace(i, function(h) {
          var p = l[h];
          return typeof p == "string" ? p : "\\u" + ("0000" + h.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + f + '"';
      }
      function c(f, h) {
        var p, m, v, y, _ = o, C, A = h[f], k = A != null && (A instanceof e || e.isBigNumber(A));
        switch (A && typeof A == "object" && typeof A.toJSON == "function" && (A = A.toJSON(f)), typeof u == "function" && (A = u.call(h, f, A)), typeof A) {
          case "string":
            return k ? A : d(A);
          case "number":
            return isFinite(A) ? String(A) : "null";
          case "boolean":
          case "null":
          case "bigint":
            return String(A);
          // If the type is 'object', we might be dealing with an object or an array or
          // null.
          case "object":
            if (!A)
              return "null";
            if (o += r, C = [], Object.prototype.toString.apply(A) === "[object Array]") {
              for (y = A.length, p = 0; p < y; p += 1)
                C[p] = c(p, A) || "null";
              return v = C.length === 0 ? "[]" : o ? `[
` + o + C.join(`,
` + o) + `
` + _ + "]" : "[" + C.join(",") + "]", o = _, v;
            }
            if (u && typeof u == "object")
              for (y = u.length, p = 0; p < y; p += 1)
                typeof u[p] == "string" && (m = u[p], v = c(m, A), v && C.push(d(m) + (o ? ": " : ":") + v));
            else
              Object.keys(A).forEach(function(b) {
                var N = c(b, A);
                N && C.push(d(b) + (o ? ": " : ":") + N);
              });
            return v = C.length === 0 ? "{}" : o ? `{
` + o + C.join(`,
` + o) + `
` + _ + "}" : "{" + C.join(",") + "}", o = _, v;
        }
      }
      typeof n.stringify != "function" && (n.stringify = function(f, h, p) {
        var m;
        if (o = "", r = "", typeof p == "number")
          for (m = 0; m < p; m += 1)
            r += " ";
        else typeof p == "string" && (r = p);
        if (u = h, h && typeof h != "function" && (typeof h != "object" || typeof h.length != "number"))
          throw new Error("JSON.stringify");
        return c("", { "": f });
      });
    })();
  })(Rn)), Rn.exports;
}
var Pn, wi;
function Wa() {
  if (wi) return Pn;
  wi = 1;
  var t = null;
  const e = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/, n = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;
  var i = function(o) {
    var r = {
      strict: !1,
      // not being strict means do not generate syntax errors for "duplicate key"
      storeAsString: !1,
      // toggles whether the values should be stored as BigNumber (default) or a string
      alwaysParseAsBig: !1,
      // toggles whether all numbers should be Big
      useNativeBigInt: !1,
      // toggles whether to use native BigInt instead of bignumber.js
      protoAction: "error",
      constructorAction: "error"
    };
    if (o != null) {
      if (o.strict === !0 && (r.strict = !0), o.storeAsString === !0 && (r.storeAsString = !0), r.alwaysParseAsBig = o.alwaysParseAsBig === !0 ? o.alwaysParseAsBig : !1, r.useNativeBigInt = o.useNativeBigInt === !0 ? o.useNativeBigInt : !1, typeof o.constructorAction < "u")
        if (o.constructorAction === "error" || o.constructorAction === "ignore" || o.constructorAction === "preserve")
          r.constructorAction = o.constructorAction;
        else
          throw new Error(
            `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${o.constructorAction}`
          );
      if (typeof o.protoAction < "u")
        if (o.protoAction === "error" || o.protoAction === "ignore" || o.protoAction === "preserve")
          r.protoAction = o.protoAction;
        else
          throw new Error(
            `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${o.protoAction}`
          );
    }
    var l, u, d = {
      '"': '"',
      "\\": "\\",
      "/": "/",
      b: "\b",
      f: "\f",
      n: `
`,
      r: "\r",
      t: "	"
    }, c, f = function(k) {
      throw {
        name: "SyntaxError",
        message: k,
        at: l,
        text: c
      };
    }, h = function(k) {
      return k && k !== u && f("Expected '" + k + "' instead of '" + u + "'"), u = c.charAt(l), l += 1, u;
    }, p = function() {
      var k, b = "";
      for (u === "-" && (b = "-", h("-")); u >= "0" && u <= "9"; )
        b += u, h();
      if (u === ".")
        for (b += "."; h() && u >= "0" && u <= "9"; )
          b += u;
      if (u === "e" || u === "E")
        for (b += u, h(), (u === "-" || u === "+") && (b += u, h()); u >= "0" && u <= "9"; )
          b += u, h();
      if (k = +b, !isFinite(k))
        f("Bad number");
      else
        return t == null && (t = ss()), b.length > 15 ? r.storeAsString ? b : r.useNativeBigInt ? BigInt(b) : new t(b) : r.alwaysParseAsBig ? r.useNativeBigInt ? BigInt(k) : new t(k) : k;
    }, m = function() {
      var k, b, N = "", M;
      if (u === '"')
        for (var w = l; h(); ) {
          if (u === '"')
            return l - 1 > w && (N += c.substring(w, l - 1)), h(), N;
          if (u === "\\") {
            if (l - 1 > w && (N += c.substring(w, l - 1)), h(), u === "u") {
              for (M = 0, b = 0; b < 4 && (k = parseInt(h(), 16), !!isFinite(k)); b += 1)
                M = M * 16 + k;
              N += String.fromCharCode(M);
            } else if (typeof d[u] == "string")
              N += d[u];
            else
              break;
            w = l;
          }
        }
      f("Bad string");
    }, v = function() {
      for (; u && u <= " "; )
        h();
    }, y = function() {
      switch (u) {
        case "t":
          return h("t"), h("r"), h("u"), h("e"), !0;
        case "f":
          return h("f"), h("a"), h("l"), h("s"), h("e"), !1;
        case "n":
          return h("n"), h("u"), h("l"), h("l"), null;
      }
      f("Unexpected '" + u + "'");
    }, _, C = function() {
      var k = [];
      if (u === "[") {
        if (h("["), v(), u === "]")
          return h("]"), k;
        for (; u; ) {
          if (k.push(_()), v(), u === "]")
            return h("]"), k;
          h(","), v();
        }
      }
      f("Bad array");
    }, A = function() {
      var k, b = /* @__PURE__ */ Object.create(null);
      if (u === "{") {
        if (h("{"), v(), u === "}")
          return h("}"), b;
        for (; u; ) {
          if (k = m(), v(), h(":"), r.strict === !0 && Object.hasOwnProperty.call(b, k) && f('Duplicate key "' + k + '"'), e.test(k) === !0 ? r.protoAction === "error" ? f("Object contains forbidden prototype property") : r.protoAction === "ignore" ? _() : b[k] = _() : n.test(k) === !0 ? r.constructorAction === "error" ? f("Object contains forbidden constructor property") : r.constructorAction === "ignore" ? _() : b[k] = _() : b[k] = _(), v(), u === "}")
            return h("}"), b;
          h(","), v();
        }
      }
      f("Bad object");
    };
    return _ = function() {
      switch (v(), u) {
        case "{":
          return A();
        case "[":
          return C();
        case '"':
          return m();
        case "-":
          return p();
        default:
          return u >= "0" && u <= "9" ? p() : y();
      }
    }, function(k, b) {
      var N;
      return c = k + "", l = 0, u = " ", N = _(), v(), u && f("Syntax error"), typeof b == "function" ? (function M(w, D) {
        var g, E = w[D];
        return E && typeof E == "object" && Object.keys(E).forEach(function(G) {
          g = M(E, G), g !== void 0 ? E[G] = g : delete E[G];
        }), b.call(w, D, E);
      })({ "": N }, "") : N;
    };
  };
  return Pn = i, Pn;
}
var Ii;
function Ya() {
  if (Ii) return Rt.exports;
  Ii = 1;
  var t = Ka().stringify, e = Wa();
  return Rt.exports = function(n) {
    return {
      parse: e(n),
      stringify: t
    };
  }, Rt.exports.parse = e(), Rt.exports.stringify = t, Rt.exports;
}
var Nn = {}, Ri;
function Pi() {
  return Ri || (Ri = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.GCE_LINUX_BIOS_PATHS = void 0, t.isGoogleCloudServerless = o, t.isGoogleComputeEngineLinux = r, t.isGoogleComputeEngineMACAddress = l, t.isGoogleComputeEngine = u, t.detectGCPResidency = d;
    const e = nt, n = ni;
    t.GCE_LINUX_BIOS_PATHS = {
      BIOS_DATE: "/sys/class/dmi/id/bios_date",
      BIOS_VENDOR: "/sys/class/dmi/id/bios_vendor"
    };
    const i = /^42:01/;
    function o() {
      return !!(process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE);
    }
    function r() {
      if ((0, n.platform)() !== "linux")
        return !1;
      try {
        (0, e.statSync)(t.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
        const c = (0, e.readFileSync)(t.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, "utf8");
        return /Google/.test(c);
      } catch {
        return !1;
      }
    }
    function l() {
      const c = (0, n.networkInterfaces)();
      for (const f of Object.values(c))
        if (f) {
          for (const { mac: h } of f)
            if (i.test(h))
              return !0;
        }
      return !1;
    }
    function u() {
      return r() || l();
    }
    function d() {
      return o() || u();
    }
  })(Nn)), Nn;
}
var We = {}, Fe = {}, Pt = {}, Ni;
function za() {
  if (Ni) return Pt;
  Ni = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.Colours = void 0;
  class t {
    /**
     * @param stream The stream (e.g. process.stderr)
     * @returns true if the stream should have colourization enabled
     */
    static isEnabled(n) {
      return n && // May happen in browsers.
      n.isTTY && (typeof n.getColorDepth == "function" ? n.getColorDepth() > 2 : !0);
    }
    static refresh() {
      t.enabled = t.isEnabled(process == null ? void 0 : process.stderr), this.enabled ? (t.reset = "\x1B[0m", t.bright = "\x1B[1m", t.dim = "\x1B[2m", t.red = "\x1B[31m", t.green = "\x1B[32m", t.yellow = "\x1B[33m", t.blue = "\x1B[34m", t.magenta = "\x1B[35m", t.cyan = "\x1B[36m", t.white = "\x1B[37m", t.grey = "\x1B[90m") : (t.reset = "", t.bright = "", t.dim = "", t.red = "", t.green = "", t.yellow = "", t.blue = "", t.magenta = "", t.cyan = "", t.white = "", t.grey = "");
    }
  }
  return Pt.Colours = t, t.enabled = !1, t.reset = "", t.bright = "", t.dim = "", t.red = "", t.green = "", t.yellow = "", t.blue = "", t.magenta = "", t.cyan = "", t.white = "", t.grey = "", t.refresh(), Pt;
}
var ki;
function Xa() {
  return ki || (ki = 1, (function(t) {
    var e = Fe && Fe.__createBinding || (Object.create ? (function(N, M, w, D) {
      D === void 0 && (D = w);
      var g = Object.getOwnPropertyDescriptor(M, w);
      (!g || ("get" in g ? !M.__esModule : g.writable || g.configurable)) && (g = { enumerable: !0, get: function() {
        return M[w];
      } }), Object.defineProperty(N, D, g);
    }) : (function(N, M, w, D) {
      D === void 0 && (D = w), N[D] = M[w];
    })), n = Fe && Fe.__setModuleDefault || (Object.create ? (function(N, M) {
      Object.defineProperty(N, "default", { enumerable: !0, value: M });
    }) : function(N, M) {
      N.default = M;
    }), i = Fe && Fe.__importStar || /* @__PURE__ */ (function() {
      var N = function(M) {
        return N = Object.getOwnPropertyNames || function(w) {
          var D = [];
          for (var g in w) Object.prototype.hasOwnProperty.call(w, g) && (D[D.length] = g);
          return D;
        }, N(M);
      };
      return function(M) {
        if (M && M.__esModule) return M;
        var w = {};
        if (M != null)
          for (var D = N(M), g = 0; g < D.length; g++) D[g] !== "default" && e(w, M, D[g]);
        return n(w, M), w;
      };
    })();
    Object.defineProperty(t, "__esModule", { value: !0 }), t.env = t.DebugLogBackendBase = t.placeholder = t.AdhocDebugLogger = t.LogSeverity = void 0, t.getNodeBackend = p, t.getDebugBackend = v, t.getStructuredBackend = _, t.setBackend = k, t.log = b;
    const o = Xr, r = i(_a), l = i(it), u = za();
    var d;
    (function(N) {
      N.DEFAULT = "DEFAULT", N.DEBUG = "DEBUG", N.INFO = "INFO", N.WARNING = "WARNING", N.ERROR = "ERROR";
    })(d || (t.LogSeverity = d = {}));
    class c extends o.EventEmitter {
      /**
       * @param upstream The backend will pass a function that will be
       *   called whenever our logger function is invoked.
       */
      constructor(M, w) {
        super(), this.namespace = M, this.upstream = w, this.func = Object.assign(this.invoke.bind(this), {
          // Also add an instance pointer back to us.
          instance: this,
          // And pull over the EventEmitter functionality.
          on: (D, g) => this.on(D, g)
        }), this.func.debug = (...D) => this.invokeSeverity(d.DEBUG, ...D), this.func.info = (...D) => this.invokeSeverity(d.INFO, ...D), this.func.warn = (...D) => this.invokeSeverity(d.WARNING, ...D), this.func.error = (...D) => this.invokeSeverity(d.ERROR, ...D), this.func.sublog = (D) => b(D, this.func);
      }
      invoke(M, ...w) {
        if (this.upstream)
          try {
            this.upstream(M, ...w);
          } catch {
          }
        try {
          this.emit("log", M, w);
        } catch {
        }
      }
      invokeSeverity(M, ...w) {
        this.invoke({ severity: M }, ...w);
      }
    }
    t.AdhocDebugLogger = c, t.placeholder = new c("", () => {
    }).func;
    class f {
      constructor() {
        var M;
        this.cached = /* @__PURE__ */ new Map(), this.filters = [], this.filtersSet = !1;
        let w = (M = r.env[t.env.nodeEnables]) !== null && M !== void 0 ? M : "*";
        w === "all" && (w = "*"), this.filters = w.split(",");
      }
      log(M, w, ...D) {
        try {
          this.filtersSet || (this.setFilters(), this.filtersSet = !0);
          let g = this.cached.get(M);
          g || (g = this.makeLogger(M), this.cached.set(M, g)), g(w, ...D);
        } catch (g) {
          console.error(g);
        }
      }
    }
    t.DebugLogBackendBase = f;
    class h extends f {
      constructor() {
        super(...arguments), this.enabledRegexp = /.*/g;
      }
      isEnabled(M) {
        return this.enabledRegexp.test(M);
      }
      makeLogger(M) {
        return this.enabledRegexp.test(M) ? (w, ...D) => {
          var g;
          const E = `${u.Colours.green}${M}${u.Colours.reset}`, G = `${u.Colours.yellow}${r.pid}${u.Colours.reset}`;
          let H;
          switch (w.severity) {
            case d.ERROR:
              H = `${u.Colours.red}${w.severity}${u.Colours.reset}`;
              break;
            case d.INFO:
              H = `${u.Colours.magenta}${w.severity}${u.Colours.reset}`;
              break;
            case d.WARNING:
              H = `${u.Colours.yellow}${w.severity}${u.Colours.reset}`;
              break;
            default:
              H = (g = w.severity) !== null && g !== void 0 ? g : d.DEFAULT;
              break;
          }
          const q = l.formatWithOptions({ colors: u.Colours.enabled }, ...D), J = Object.assign({}, w);
          delete J.severity;
          const W = Object.getOwnPropertyNames(J).length ? JSON.stringify(J) : "", Z = W ? `${u.Colours.grey}${W}${u.Colours.reset}` : "";
          console.error("%s [%s|%s] %s%s", G, E, H, q, W ? ` ${Z}` : "");
        } : () => {
        };
      }
      // Regexp patterns below are from here:
      // https://github.com/nodejs/node/blob/c0aebed4b3395bd65d54b18d1fd00f071002ac20/lib/internal/util/debuglog.js#L36
      setFilters() {
        const w = this.filters.join(",").replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^");
        this.enabledRegexp = new RegExp(`^${w}$`, "i");
      }
    }
    function p() {
      return new h();
    }
    class m extends f {
      constructor(M) {
        super(), this.debugPkg = M;
      }
      makeLogger(M) {
        const w = this.debugPkg(M);
        return (D, ...g) => {
          w(g[0], ...g.slice(1));
        };
      }
      setFilters() {
        var M;
        const w = (M = r.env.NODE_DEBUG) !== null && M !== void 0 ? M : "";
        r.env.NODE_DEBUG = `${w}${w ? "," : ""}${this.filters.join(",")}`;
      }
    }
    function v(N) {
      return new m(N);
    }
    class y extends f {
      constructor(M) {
        var w;
        super(), this.upstream = (w = M) !== null && w !== void 0 ? w : void 0;
      }
      makeLogger(M) {
        var w;
        const D = (w = this.upstream) === null || w === void 0 ? void 0 : w.makeLogger(M);
        return (g, ...E) => {
          var G;
          const H = (G = g.severity) !== null && G !== void 0 ? G : d.INFO, q = Object.assign({
            severity: H,
            message: l.format(...E)
          }, g), J = JSON.stringify(q);
          D ? D(g, J) : console.log("%s", J);
        };
      }
      setFilters() {
        var M;
        (M = this.upstream) === null || M === void 0 || M.setFilters();
      }
    }
    function _(N) {
      return new y(N);
    }
    t.env = {
      /**
       * Filter wildcards specific to the Node syntax, and similar to the built-in
       * utils.debuglog() environment variable. If missing, disables logging.
       */
      nodeEnables: "GOOGLE_SDK_NODE_LOGGING"
    };
    const C = /* @__PURE__ */ new Map();
    let A;
    function k(N) {
      A = N, C.clear();
    }
    function b(N, M) {
      if (!A && !r.env[t.env.nodeEnables] || !N)
        return t.placeholder;
      M && (N = `${M.instance.namespace}:${N}`);
      const w = C.get(N);
      if (w)
        return w.func;
      if (A === null)
        return t.placeholder;
      A === void 0 && (A = p());
      const D = (() => {
        let g;
        return new c(N, (G, ...H) => {
          if (g !== A) {
            if (A === null)
              return;
            A === void 0 && (A = p()), g = A;
          }
          A == null || A.log(N, G, ...H);
        });
      })();
      return C.set(N, D), D.func;
    }
  })(Fe)), Fe;
}
var Mi;
function as() {
  return Mi || (Mi = 1, (function(t) {
    var e = We && We.__createBinding || (Object.create ? (function(i, o, r, l) {
      l === void 0 && (l = r);
      var u = Object.getOwnPropertyDescriptor(o, r);
      (!u || ("get" in u ? !o.__esModule : u.writable || u.configurable)) && (u = { enumerable: !0, get: function() {
        return o[r];
      } }), Object.defineProperty(i, l, u);
    }) : (function(i, o, r, l) {
      l === void 0 && (l = r), i[l] = o[r];
    })), n = We && We.__exportStar || function(i, o) {
      for (var r in i) r !== "default" && !Object.prototype.hasOwnProperty.call(o, r) && e(o, i, r);
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), n(Xa(), t);
  })(We)), We;
}
var Ui;
function gn() {
  return Ui || (Ui = 1, (function(t) {
    var e = ke && ke.__createBinding || (Object.create ? (function(g, E, G, H) {
      H === void 0 && (H = G);
      var q = Object.getOwnPropertyDescriptor(E, G);
      (!q || ("get" in q ? !E.__esModule : q.writable || q.configurable)) && (q = { enumerable: !0, get: function() {
        return E[G];
      } }), Object.defineProperty(g, H, q);
    }) : (function(g, E, G, H) {
      H === void 0 && (H = G), g[H] = E[G];
    })), n = ke && ke.__setModuleDefault || (Object.create ? (function(g, E) {
      Object.defineProperty(g, "default", { enumerable: !0, value: E });
    }) : function(g, E) {
      g.default = E;
    }), i = ke && ke.__importStar || /* @__PURE__ */ (function() {
      var g = function(E) {
        return g = Object.getOwnPropertyNames || function(G) {
          var H = [];
          for (var q in G) Object.prototype.hasOwnProperty.call(G, q) && (H[H.length] = q);
          return H;
        }, g(E);
      };
      return function(E) {
        if (E && E.__esModule) return E;
        var G = {};
        if (E != null)
          for (var H = g(E), q = 0; q < H.length; q++) H[q] !== "default" && e(G, E, H[q]);
        return n(G, E), G;
      };
    })(), o = ke && ke.__exportStar || function(g, E) {
      for (var G in g) G !== "default" && !Object.prototype.hasOwnProperty.call(E, G) && e(E, g, G);
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.gcpResidencyCache = t.METADATA_SERVER_DETECTION = t.HEADERS = t.HEADER_VALUE = t.HEADER_NAME = t.SECONDARY_HOST_ADDRESS = t.HOST_ADDRESS = t.BASE_PATH = void 0, t.instance = v, t.project = y, t.universe = _, t.bulk = C, t.isAvailable = b, t.resetIsAvailableCache = N, t.getGCPResidency = M, t.setGCPResidency = w, t.requestTimeout = D;
    const r = Ee(), l = Ya(), u = Pi(), d = i(as());
    t.BASE_PATH = "/computeMetadata/v1", t.HOST_ADDRESS = "http://169.254.169.254", t.SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.", t.HEADER_NAME = "Metadata-Flavor", t.HEADER_VALUE = "Google", t.HEADERS = Object.freeze({ [t.HEADER_NAME]: t.HEADER_VALUE });
    const c = d.log("gcp-metadata");
    t.METADATA_SERVER_DETECTION = Object.freeze({
      "assume-present": "don't try to ping the metadata server, but assume it's present",
      none: "don't try to ping the metadata server, but don't try to use it either",
      "bios-only": "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
      "ping-only": "skip the BIOS probe, and go straight to pinging"
    });
    function f(g) {
      return g || (g = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || t.HOST_ADDRESS), /^https?:\/\//.test(g) || (g = `http://${g}`), new URL(t.BASE_PATH, g).href;
    }
    function h(g) {
      Object.keys(g).forEach((E) => {
        switch (E) {
          case "params":
          case "property":
          case "headers":
            break;
          case "qs":
            throw new Error("'qs' is not a valid configuration option. Please use 'params' instead.");
          default:
            throw new Error(`'${E}' is not a valid configuration option.`);
        }
      });
    }
    async function p(g, E = {}, G = 3, H = !1) {
      const q = new Headers(t.HEADERS);
      let J = "", W = {};
      if (typeof g == "object") {
        const oe = g;
        new Headers(oe.headers).forEach((ve, fe) => q.set(fe, ve)), J = oe.metadataKey, W = oe.params || W, G = oe.noResponseRetries || G, H = oe.fastFail || H;
      } else
        J = g;
      typeof E == "string" ? J += `/${E}` : (h(E), E.property && (J += `/${E.property}`), new Headers(E.headers).forEach((oe, ve) => q.set(ve, oe)), W = E.params || W);
      const Z = H ? m : r.request, Q = {
        url: `${f()}/${J}`,
        headers: q,
        retryConfig: { noResponseRetries: G },
        params: W,
        responseType: "text",
        timeout: D()
      };
      c.info("instance request %j", Q);
      const ee = await Z(Q);
      c.info("instance metadata is %s", ee.data);
      const ge = ee.headers.get(t.HEADER_NAME);
      if (ge !== t.HEADER_VALUE)
        throw new RangeError(`Invalid response from metadata service: incorrect ${t.HEADER_NAME} header. Expected '${t.HEADER_VALUE}', got ${ge ? `'${ge}'` : "no header"}`);
      if (typeof ee.data == "string")
        try {
          return l.parse(ee.data);
        } catch {
        }
      return ee.data;
    }
    async function m(g) {
      var q;
      const E = {
        ...g,
        url: (q = g.url) == null ? void 0 : q.toString().replace(f(), f(t.SECONDARY_HOST_ADDRESS))
      }, G = (0, r.request)(g), H = (0, r.request)(E);
      return Promise.any([G, H]);
    }
    function v(g) {
      return p("instance", g);
    }
    function y(g) {
      return p("project", g);
    }
    function _(g) {
      return p("universe", g);
    }
    async function C(g) {
      const E = {};
      return await Promise.all(g.map((G) => (async () => {
        const H = await p(G), q = G.metadataKey;
        E[q] = H;
      })())), E;
    }
    function A() {
      return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0;
    }
    let k;
    async function b() {
      if (process.env.METADATA_SERVER_DETECTION) {
        const g = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
        if (!(g in t.METADATA_SERVER_DETECTION))
          throw new RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${g}\`, but it should be \`${Object.keys(t.METADATA_SERVER_DETECTION).join("`, `")}\`, or unset`);
        switch (g) {
          case "assume-present":
            return !0;
          case "none":
            return !1;
          case "bios-only":
            return M();
        }
      }
      try {
        return k === void 0 && (k = p(
          "instance",
          void 0,
          A(),
          // If the default HOST_ADDRESS has been overridden, we should not
          // make an effort to try SECONDARY_HOST_ADDRESS (as we are likely in
          // a non-GCP environment):
          !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST)
        )), await k, !0;
      } catch (g) {
        const E = g;
        if (process.env.DEBUG_AUTH && console.info(E), E.type === "request-timeout" || E.response && E.response.status === 404)
          return !1;
        if (!(E.response && E.response.status === 404) && // A warning is emitted if we see an unexpected err.code, or err.code
        // is not populated:
        (!E.code || ![
          "EHOSTDOWN",
          "EHOSTUNREACH",
          "ENETUNREACH",
          "ENOENT",
          "ENOTFOUND",
          "ECONNREFUSED"
        ].includes(E.code.toString()))) {
          let G = "UNKNOWN";
          E.code && (G = E.code.toString()), process.emitWarning(`received unexpected error = ${E.message} code = ${G}`, "MetadataLookupWarning");
        }
        return !1;
      }
    }
    function N() {
      k = void 0;
    }
    t.gcpResidencyCache = null;
    function M() {
      return t.gcpResidencyCache === null && w(), t.gcpResidencyCache;
    }
    function w(g = null) {
      t.gcpResidencyCache = g !== null ? g : (0, u.detectGCPResidency)();
    }
    function D() {
      return M() ? 0 : 3e3;
    }
    o(Pi(), t);
  })(ke)), ke;
}
var Ye = {}, Nt = {}, kt = {}, Di;
function Qa() {
  if (Di) return kt;
  Di = 1, kt.byteLength = u, kt.toByteArray = c, kt.fromByteArray = p;
  for (var t = [], e = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, r = i.length; o < r; ++o)
    t[o] = i[o], e[i.charCodeAt(o)] = o;
  e[45] = 62, e[95] = 63;
  function l(m) {
    var v = m.length;
    if (v % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var y = m.indexOf("=");
    y === -1 && (y = v);
    var _ = y === v ? 0 : 4 - y % 4;
    return [y, _];
  }
  function u(m) {
    var v = l(m), y = v[0], _ = v[1];
    return (y + _) * 3 / 4 - _;
  }
  function d(m, v, y) {
    return (v + y) * 3 / 4 - y;
  }
  function c(m) {
    var v, y = l(m), _ = y[0], C = y[1], A = new n(d(m, _, C)), k = 0, b = C > 0 ? _ - 4 : _, N;
    for (N = 0; N < b; N += 4)
      v = e[m.charCodeAt(N)] << 18 | e[m.charCodeAt(N + 1)] << 12 | e[m.charCodeAt(N + 2)] << 6 | e[m.charCodeAt(N + 3)], A[k++] = v >> 16 & 255, A[k++] = v >> 8 & 255, A[k++] = v & 255;
    return C === 2 && (v = e[m.charCodeAt(N)] << 2 | e[m.charCodeAt(N + 1)] >> 4, A[k++] = v & 255), C === 1 && (v = e[m.charCodeAt(N)] << 10 | e[m.charCodeAt(N + 1)] << 4 | e[m.charCodeAt(N + 2)] >> 2, A[k++] = v >> 8 & 255, A[k++] = v & 255), A;
  }
  function f(m) {
    return t[m >> 18 & 63] + t[m >> 12 & 63] + t[m >> 6 & 63] + t[m & 63];
  }
  function h(m, v, y) {
    for (var _, C = [], A = v; A < y; A += 3)
      _ = (m[A] << 16 & 16711680) + (m[A + 1] << 8 & 65280) + (m[A + 2] & 255), C.push(f(_));
    return C.join("");
  }
  function p(m) {
    for (var v, y = m.length, _ = y % 3, C = [], A = 16383, k = 0, b = y - _; k < b; k += A)
      C.push(h(m, k, k + A > b ? b : k + A));
    return _ === 1 ? (v = m[y - 1], C.push(
      t[v >> 2] + t[v << 4 & 63] + "=="
    )) : _ === 2 && (v = (m[y - 2] << 8) + m[y - 1], C.push(
      t[v >> 10] + t[v >> 4 & 63] + t[v << 2 & 63] + "="
    )), C.join("");
  }
  return kt;
}
var rn = {}, xi;
function ls() {
  if (xi) return rn;
  xi = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.fromArrayBufferToHex = t;
  function t(e) {
    return Array.from(new Uint8Array(e)).map((i) => i.toString(16).padStart(2, "0")).join("");
  }
  return rn;
}
var Li;
function Za() {
  if (Li) return Nt;
  Li = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.BrowserCrypto = void 0;
  const t = Qa(), e = ls();
  class n {
    constructor() {
      if (typeof window > "u" || window.crypto === void 0 || window.crypto.subtle === void 0)
        throw new Error("SubtleCrypto not found. Make sure it's an https:// website.");
    }
    async sha256DigestBase64(o) {
      const r = new TextEncoder().encode(o), l = await window.crypto.subtle.digest("SHA-256", r);
      return t.fromByteArray(new Uint8Array(l));
    }
    randomBytesBase64(o) {
      const r = new Uint8Array(o);
      return window.crypto.getRandomValues(r), t.fromByteArray(r);
    }
    static padBase64(o) {
      for (; o.length % 4 !== 0; )
        o += "=";
      return o;
    }
    async verify(o, r, l) {
      const u = {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      }, d = new TextEncoder().encode(r), c = t.toByteArray(n.padBase64(l)), f = await window.crypto.subtle.importKey("jwk", o, u, !0, ["verify"]);
      return await window.crypto.subtle.verify(u, f, c, d);
    }
    async sign(o, r) {
      const l = {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      }, u = new TextEncoder().encode(r), d = await window.crypto.subtle.importKey("jwk", o, l, !0, ["sign"]), c = await window.crypto.subtle.sign(l, d, u);
      return t.fromByteArray(new Uint8Array(c));
    }
    decodeBase64StringUtf8(o) {
      const r = t.toByteArray(n.padBase64(o));
      return new TextDecoder().decode(r);
    }
    encodeBase64StringUtf8(o) {
      const r = new TextEncoder().encode(o);
      return t.fromByteArray(r);
    }
    /**
     * Computes the SHA-256 hash of the provided string.
     * @param str The plain text string to hash.
     * @return A promise that resolves with the SHA-256 hash of the provided
     *   string in hexadecimal encoding.
     */
    async sha256DigestHex(o) {
      const r = new TextEncoder().encode(o), l = await window.crypto.subtle.digest("SHA-256", r);
      return (0, e.fromArrayBufferToHex)(l);
    }
    /**
     * Computes the HMAC hash of a message using the provided crypto key and the
     * SHA-256 algorithm.
     * @param key The secret crypto key in utf-8 or ArrayBuffer format.
     * @param msg The plain text message.
     * @return A promise that resolves with the HMAC-SHA256 hash in ArrayBuffer
     *   format.
     */
    async signWithHmacSha256(o, r) {
      const l = typeof o == "string" ? o : String.fromCharCode(...new Uint16Array(o)), u = new TextEncoder(), d = await window.crypto.subtle.importKey("raw", u.encode(l), {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      }, !1, ["sign"]);
      return window.crypto.subtle.sign("HMAC", d, u.encode(r));
    }
  }
  return Nt.BrowserCrypto = n, Nt;
}
var Mt = {}, bi;
function ja() {
  if (bi) return Mt;
  bi = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.NodeCrypto = void 0;
  const t = oi;
  class e {
    async sha256DigestBase64(r) {
      return t.createHash("sha256").update(r).digest("base64");
    }
    randomBytesBase64(r) {
      return t.randomBytes(r).toString("base64");
    }
    async verify(r, l, u) {
      const d = t.createVerify("RSA-SHA256");
      return d.update(l), d.end(), d.verify(r, u, "base64");
    }
    async sign(r, l) {
      const u = t.createSign("RSA-SHA256");
      return u.update(l), u.end(), u.sign(r, "base64");
    }
    decodeBase64StringUtf8(r) {
      return Buffer.from(r, "base64").toString("utf-8");
    }
    encodeBase64StringUtf8(r) {
      return Buffer.from(r, "utf-8").toString("base64");
    }
    /**
     * Computes the SHA-256 hash of the provided string.
     * @param str The plain text string to hash.
     * @return A promise that resolves with the SHA-256 hash of the provided
     *   string in hexadecimal encoding.
     */
    async sha256DigestHex(r) {
      return t.createHash("sha256").update(r).digest("hex");
    }
    /**
     * Computes the HMAC hash of a message using the provided crypto key and the
     * SHA-256 algorithm.
     * @param key The secret crypto key in utf-8 or ArrayBuffer format.
     * @param msg The plain text message.
     * @return A promise that resolves with the HMAC-SHA256 hash in ArrayBuffer
     *   format.
     */
    async signWithHmacSha256(r, l) {
      const u = typeof r == "string" ? r : i(r);
      return n(t.createHmac("sha256", u).update(l).digest());
    }
  }
  Mt.NodeCrypto = e;
  function n(o) {
    return o.buffer.slice(o.byteOffset, o.byteOffset + o.byteLength);
  }
  function i(o) {
    return Buffer.from(o);
  }
  return Mt;
}
var Fi;
function mn() {
  return Fi || (Fi = 1, (function(t) {
    var e = Ye && Ye.__createBinding || (Object.create ? (function(u, d, c, f) {
      f === void 0 && (f = c);
      var h = Object.getOwnPropertyDescriptor(d, c);
      (!h || ("get" in h ? !d.__esModule : h.writable || h.configurable)) && (h = { enumerable: !0, get: function() {
        return d[c];
      } }), Object.defineProperty(u, f, h);
    }) : (function(u, d, c, f) {
      f === void 0 && (f = c), u[f] = d[c];
    })), n = Ye && Ye.__exportStar || function(u, d) {
      for (var c in u) c !== "default" && !Object.prototype.hasOwnProperty.call(d, c) && e(d, u, c);
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.createCrypto = r, t.hasBrowserCrypto = l;
    const i = Za(), o = ja();
    n(ls(), t);
    function r() {
      return l() ? new i.BrowserCrypto() : new o.NodeCrypto();
    }
    function l() {
      return typeof window < "u" && typeof window.crypto < "u" && typeof window.crypto.subtle < "u";
    }
  })(Ye)), Ye;
}
var Ut = {}, Me = {}, sn = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Gi;
function Zt() {
  return Gi || (Gi = 1, (function(t, e) {
    var n = dn, i = n.Buffer;
    function o(l, u) {
      for (var d in l)
        u[d] = l[d];
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = r);
    function r(l, u, d) {
      return i(l, u, d);
    }
    r.prototype = Object.create(i.prototype), o(i, r), r.from = function(l, u, d) {
      if (typeof l == "number")
        throw new TypeError("Argument must not be a number");
      return i(l, u, d);
    }, r.alloc = function(l, u, d) {
      if (typeof l != "number")
        throw new TypeError("Argument must be a number");
      var c = i(l);
      return u !== void 0 ? typeof d == "string" ? c.fill(u, d) : c.fill(u) : c.fill(0), c;
    }, r.allocUnsafe = function(l) {
      if (typeof l != "number")
        throw new TypeError("Argument must be a number");
      return i(l);
    }, r.allocUnsafeSlow = function(l) {
      if (typeof l != "number")
        throw new TypeError("Argument must be a number");
      return n.SlowBuffer(l);
    };
  })(sn, sn.exports)), sn.exports;
}
var kn, Oi;
function el() {
  if (Oi) return kn;
  Oi = 1;
  function t(i) {
    var o = (i / 8 | 0) + (i % 8 === 0 ? 0 : 1);
    return o;
  }
  var e = {
    ES256: t(256),
    ES384: t(384),
    ES512: t(521)
  };
  function n(i) {
    var o = e[i];
    if (o)
      return o;
    throw new Error('Unknown algorithm "' + i + '"');
  }
  return kn = n, kn;
}
var Mn, qi;
function us() {
  if (qi) return Mn;
  qi = 1;
  var t = Zt().Buffer, e = el(), n = 128, i = 0, o = 32, r = 16, l = 2, u = r | o | i << 6, d = l | i << 6;
  function c(v) {
    return v.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function f(v) {
    if (t.isBuffer(v))
      return v;
    if (typeof v == "string")
      return t.from(v, "base64");
    throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
  }
  function h(v, y) {
    v = f(v);
    var _ = e(y), C = _ + 1, A = v.length, k = 0;
    if (v[k++] !== u)
      throw new Error('Could not find expected "seq"');
    var b = v[k++];
    if (b === (n | 1) && (b = v[k++]), A - k < b)
      throw new Error('"seq" specified length of "' + b + '", only "' + (A - k) + '" remaining');
    if (v[k++] !== d)
      throw new Error('Could not find expected "int" for "r"');
    var N = v[k++];
    if (A - k - 2 < N)
      throw new Error('"r" specified length of "' + N + '", only "' + (A - k - 2) + '" available');
    if (C < N)
      throw new Error('"r" specified length of "' + N + '", max of "' + C + '" is acceptable');
    var M = k;
    if (k += N, v[k++] !== d)
      throw new Error('Could not find expected "int" for "s"');
    var w = v[k++];
    if (A - k !== w)
      throw new Error('"s" specified length of "' + w + '", expected "' + (A - k) + '"');
    if (C < w)
      throw new Error('"s" specified length of "' + w + '", max of "' + C + '" is acceptable');
    var D = k;
    if (k += w, k !== A)
      throw new Error('Expected to consume entire buffer, but "' + (A - k) + '" bytes remain');
    var g = _ - N, E = _ - w, G = t.allocUnsafe(g + N + E + w);
    for (k = 0; k < g; ++k)
      G[k] = 0;
    v.copy(G, k, M + Math.max(-g, 0), M + N), k = _;
    for (var H = k; k < H + E; ++k)
      G[k] = 0;
    return v.copy(G, k, D + Math.max(-E, 0), D + w), G = G.toString("base64"), G = c(G), G;
  }
  function p(v, y, _) {
    for (var C = 0; y + C < _ && v[y + C] === 0; )
      ++C;
    var A = v[y + C] >= n;
    return A && --C, C;
  }
  function m(v, y) {
    v = f(v);
    var _ = e(y), C = v.length;
    if (C !== _ * 2)
      throw new TypeError('"' + y + '" signatures must be "' + _ * 2 + '" bytes, saw "' + C + '"');
    var A = p(v, 0, _), k = p(v, _, v.length), b = _ - A, N = _ - k, M = 2 + b + 1 + 1 + N, w = M < n, D = t.allocUnsafe((w ? 2 : 3) + M), g = 0;
    return D[g++] = u, w ? D[g++] = M : (D[g++] = n | 1, D[g++] = M & 255), D[g++] = d, D[g++] = b, A < 0 ? (D[g++] = 0, g += v.copy(D, g, 0, _)) : g += v.copy(D, g, A, _), D[g++] = d, D[g++] = N, k < 0 ? (D[g++] = 0, v.copy(D, g, _)) : v.copy(D, g, _ + k), D;
  }
  return Mn = {
    derToJose: h,
    joseToDer: m
  }, Mn;
}
var Le = {}, Bi;
function be() {
  var p, m, $n, Jn;
  if (Bi) return Le;
  Bi = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.LRUCache = void 0, Le.snakeToCamel = r, Le.originalOrCamelOptions = l, Le.removeUndefinedValuesInObject = d, Le.isValidFile = c, Le.getWellKnownCertificateConfigFileLocation = f;
  const t = nt, e = ni, n = ii, i = "certificate_config.json", o = "gcloud";
  function r(_) {
    return _.replace(/([_][^_])/g, (C) => C.slice(1).toUpperCase());
  }
  function l(_) {
    function C(A) {
      const k = _ || {};
      return k[A] ?? k[r(A)];
    }
    return { get: C };
  }
  class u {
    constructor(C) {
      ye(this, m);
      V(this, "capacity");
      /**
       * Maps are in order. Thus, the older item is the first item.
       *
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map}
       */
      ye(this, p, /* @__PURE__ */ new Map());
      V(this, "maxAge");
      this.capacity = C.capacity, this.maxAge = C.maxAge;
    }
    /**
     * Add an item to the cache.
     *
     * @param key the key to upsert
     * @param value the value of the key
     */
    set(C, A) {
      ce(this, m, $n).call(this, C, A), ce(this, m, Jn).call(this);
    }
    /**
     * Get an item from the cache.
     *
     * @param key the key to retrieve
     */
    get(C) {
      const A = se(this, p).get(C);
      if (A)
        return ce(this, m, $n).call(this, C, A.value), ce(this, m, Jn).call(this), A.value;
    }
  }
  p = new WeakMap(), m = new WeakSet(), /**
   * Moves the key to the end of the cache.
   *
   * @param key the key to move
   * @param value the value of the key
   */
  $n = function(C, A) {
    se(this, p).delete(C), se(this, p).set(C, {
      value: A,
      lastAccessed: Date.now()
    });
  }, /**
   * Maintain the cache based on capacity and TTL.
   */
  Jn = function() {
    const C = this.maxAge ? Date.now() - this.maxAge : 0;
    let A = se(this, p).entries().next();
    for (; !A.done && (se(this, p).size > this.capacity || // too many
    A.value[1].lastAccessed < C); )
      se(this, p).delete(A.value[0]), A = se(this, p).entries().next();
  }, Le.LRUCache = u;
  function d(_) {
    return Object.entries(_).forEach(([C, A]) => {
      (A === void 0 || A === "undefined") && delete _[C];
    }), _;
  }
  async function c(_) {
    try {
      return (await t.promises.lstat(_)).isFile();
    } catch {
      return !1;
    }
  }
  function f() {
    const _ = process.env.CLOUDSDK_CONFIG || (h() ? n.join(process.env.APPDATA || "", o) : n.join(process.env.HOME || "", ".config", o));
    return n.join(_, i);
  }
  function h() {
    return e.platform().startsWith("win");
  }
  return Le;
}
var Un = {}, Ge = {};
const tl = "google-auth-library", nl = "10.5.0", il = "Google Inc.", ol = "Google APIs Authentication Client Library for Node.js", rl = { node: ">=18" }, sl = "./build/src/index.js", al = "./build/src/index.d.ts", ll = "googleapis/google-auth-library-nodejs.git", ul = ["google", "api", "google apis", "client", "client library"], cl = { "base64-js": "^1.3.0", "ecdsa-sig-formatter": "^1.0.11", gaxios: "^7.0.0", "gcp-metadata": "^8.0.0", "google-logging-utils": "^1.0.0", gtoken: "^8.0.0", jws: "^4.0.0" }, dl = { "@types/base64-js": "^1.2.5", "@types/jws": "^3.1.0", "@types/mocha": "^10.0.10", "@types/mv": "^2.1.0", "@types/ncp": "^2.0.1", "@types/node": "^22.0.0", "@types/sinon": "^17.0.0", "assert-rejects": "^1.0.0", c8: "^10.0.0", codecov: "^3.0.2", gts: "^6.0.0", "is-docker": "^3.0.0", jsdoc: "^4.0.0", "jsdoc-fresh": "^5.0.0", "jsdoc-region-tag": "^4.0.0", karma: "^6.0.0", "karma-chrome-launcher": "^3.0.0", "karma-coverage": "^2.0.0", "karma-firefox-launcher": "^2.0.0", "karma-mocha": "^2.0.0", "karma-sourcemap-loader": "^0.4.0", "karma-webpack": "^5.0.1", keypair: "^1.0.4", mocha: "^11.1.0", mv: "^2.1.1", ncp: "^2.0.0", nock: "^14.0.5", "null-loader": "^4.0.0", puppeteer: "^24.0.0", sinon: "^21.0.0", "ts-loader": "^8.0.0", typescript: "5.8.2", webpack: "^5.21.2", "webpack-cli": "^4.0.0" }, fl = ["build/src", "!build/src/**/*.map"], hl = { test: "c8 mocha build/test", clean: "gts clean", prepare: "npm run compile", lint: "gts check --no-inline-config", compile: "tsc -p .", fix: "gts fix", pretest: "npm run compile -- --sourceMap", docs: "jsdoc -c .jsdoc.js", "samples-setup": "cd samples/ && npm link ../ && npm run setup && cd ../", "samples-test": "cd samples/ && npm link ../ && npm test && cd ../", "system-test": "mocha build/system-test --timeout 60000", "presystem-test": "npm run compile -- --sourceMap", webpack: "webpack", "browser-test": "karma start", "docs-test": "echo 'disabled until linkinator is fixed'", "predocs-test": "npm run docs", prelint: "cd samples; npm link ../; npm install" }, pl = "Apache-2.0", gl = {
  name: tl,
  version: nl,
  author: il,
  description: ol,
  engines: rl,
  main: sl,
  types: al,
  repository: ll,
  keywords: ul,
  dependencies: cl,
  devDependencies: dl,
  files: fl,
  scripts: hl,
  license: pl
};
var Vi;
function cs() {
  if (Vi) return Ge;
  Vi = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.USER_AGENT = Ge.PRODUCT_NAME = Ge.pkg = void 0;
  const t = gl;
  Ge.pkg = t;
  const e = "google-api-nodejs-client";
  Ge.PRODUCT_NAME = e;
  const n = `${e}/${t.version}`;
  return Ge.USER_AGENT = n, Ge;
}
var Hi;
function Re() {
  return Hi || (Hi = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.AuthClient = t.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = t.DEFAULT_UNIVERSE = void 0;
    const e = Xr, n = Ee(), i = be(), o = as(), r = cs();
    t.DEFAULT_UNIVERSE = "googleapis.com", t.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 300 * 1e3;
    const u = class u extends e.EventEmitter {
      constructor(f = {}) {
        super();
        V(this, "apiKey");
        V(this, "projectId");
        /**
         * The quota project ID. The quota project can be used by client libraries for the billing purpose.
         * See {@link https://cloud.google.com/docs/quota Working with quotas}
         */
        V(this, "quotaProjectId");
        /**
         * The {@link Gaxios `Gaxios`} instance used for making requests.
         */
        V(this, "transporter");
        V(this, "credentials", {});
        V(this, "eagerRefreshThresholdMillis", t.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS);
        V(this, "forceRefreshOnFailure", !1);
        V(this, "universeDomain", t.DEFAULT_UNIVERSE);
        const h = (0, i.originalOrCamelOptions)(f);
        this.apiKey = f.apiKey, this.projectId = h.get("project_id") ?? null, this.quotaProjectId = h.get("quota_project_id"), this.credentials = h.get("credentials") ?? {}, this.universeDomain = h.get("universe_domain") ?? t.DEFAULT_UNIVERSE, this.transporter = f.transporter ?? new n.Gaxios(f.transporterOptions), h.get("useAuthRequestParameters") !== !1 && (this.transporter.interceptors.request.add(u.DEFAULT_REQUEST_INTERCEPTOR), this.transporter.interceptors.response.add(u.DEFAULT_RESPONSE_INTERCEPTOR)), f.eagerRefreshThresholdMillis && (this.eagerRefreshThresholdMillis = f.eagerRefreshThresholdMillis), this.forceRefreshOnFailure = f.forceRefreshOnFailure ?? !1;
      }
      /**
       * A {@link fetch `fetch`} compliant API for {@link AuthClient}.
       *
       * @see {@link AuthClient.request} for the classic method.
       *
       * @remarks
       *
       * This is useful as a drop-in replacement for `fetch` API usage.
       *
       * @example
       *
       * ```ts
       * const authClient = new AuthClient();
       * const fetchWithAuthClient: typeof fetch = (...args) => authClient.fetch(...args);
       * await fetchWithAuthClient('https://example.com');
       * ```
       *
       * @param args `fetch` API or {@link Gaxios.fetch `Gaxios#fetch`} parameters
       * @returns the {@link GaxiosResponse} with Gaxios-added properties
       */
      fetch(...f) {
        const h = f[0], p = f[1];
        let m;
        const v = new Headers();
        return typeof h == "string" ? m = new URL(h) : h instanceof URL ? m = h : h && h.url && (m = new URL(h.url)), h && typeof h == "object" && "headers" in h && n.Gaxios.mergeHeaders(v, h.headers), p && n.Gaxios.mergeHeaders(v, new Headers(p.headers)), typeof h == "object" && !(h instanceof URL) ? this.request({ ...p, ...h, headers: v, url: m }) : this.request({ ...p, headers: v, url: m });
      }
      /**
       * Sets the auth credentials.
       */
      setCredentials(f) {
        this.credentials = f;
      }
      /**
       * Append additional headers, e.g., x-goog-user-project, shared across the
       * classes inheriting AuthClient. This method should be used by any method
       * that overrides getRequestMetadataAsync(), which is a shared helper for
       * setting request information in both gRPC and HTTP API calls.
       *
       * @param headers object to append additional headers to.
       */
      addSharedMetadataHeaders(f) {
        return !f.has("x-goog-user-project") && // don't override a value the user sets.
        this.quotaProjectId && f.set("x-goog-user-project", this.quotaProjectId), f;
      }
      /**
       * Adds the `x-goog-user-project` and `authorization` headers to the target Headers
       * object, if they exist on the source.
       *
       * @param target the headers to target
       * @param source the headers to source from
       * @returns the target headers
       */
      addUserProjectAndAuthHeaders(f, h) {
        const p = h.get("x-goog-user-project"), m = h.get("authorization");
        return p && f.set("x-goog-user-project", p), m && f.set("authorization", m), f;
      }
      /**
       * Sets the method name that is making a Gaxios request, so that logging may tag
       * log lines with the operation.
       * @param config A Gaxios request config
       * @param methodName The method name making the call
       */
      static setMethodName(f, h) {
        try {
          const p = f;
          p[u.RequestMethodNameSymbol] = h;
        } catch {
        }
      }
      /**
       * Retry config for Auth-related requests.
       *
       * @remarks
       *
       * This is not a part of the default {@link AuthClient.transporter transporter/gaxios}
       * config as some downstream APIs would prefer if customers explicitly enable retries,
       * such as GCS.
       */
      static get RETRY_CONFIG() {
        return {
          retry: !0,
          retryConfig: {
            httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
          }
        };
      }
    };
    /**
     * Symbols that can be added to GaxiosOptions to specify the method name that is
     * making an RPC call, for logging purposes, as well as a string ID that can be
     * used to correlate calls and responses.
     */
    V(u, "RequestMethodNameSymbol", Symbol("request method name")), V(u, "RequestLogIdSymbol", Symbol("request log id")), V(u, "log", (0, o.log)("auth")), V(u, "DEFAULT_REQUEST_INTERCEPTOR", {
      resolved: async (f) => {
        if (!f.headers.has("x-goog-api-client")) {
          const p = process.version.replace(/^v/, "");
          f.headers.set("x-goog-api-client", `gl-node/${p}`);
        }
        const h = f.headers.get("User-Agent");
        h ? h.includes(`${r.PRODUCT_NAME}/`) || f.headers.set("User-Agent", `${h} ${r.USER_AGENT}`) : f.headers.set("User-Agent", r.USER_AGENT);
        try {
          const p = f, m = p[u.RequestMethodNameSymbol], v = `${Math.floor(Math.random() * 1e3)}`;
          p[u.RequestLogIdSymbol] = v;
          const y = {
            url: f.url,
            headers: f.headers
          };
          m ? u.log.info("%s [%s] request %j", m, v, y) : u.log.info("[%s] request %j", v, y);
        } catch {
        }
        return f;
      }
    }), V(u, "DEFAULT_RESPONSE_INTERCEPTOR", {
      resolved: async (f) => {
        try {
          const h = f.config, p = h[u.RequestMethodNameSymbol], m = h[u.RequestLogIdSymbol];
          p ? u.log.info("%s [%s] response %j", p, m, f.data) : u.log.info("[%s] response %j", m, f.data);
        } catch {
        }
        return f;
      },
      rejected: async (f) => {
        var h, p;
        try {
          const m = f.config, v = m[u.RequestMethodNameSymbol], y = m[u.RequestLogIdSymbol];
          v ? u.log.info("%s [%s] error %j", v, y, (h = f.response) == null ? void 0 : h.data) : u.log.error("[%s] error %j", y, (p = f.response) == null ? void 0 : p.data);
        } catch {
        }
        throw f;
      }
    });
    let l = u;
    t.AuthClient = l;
  })(Un)), Un;
}
var Dt = {}, $i;
function ds() {
  if ($i) return Dt;
  $i = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.LoginTicket = void 0;
  class t {
    /**
     * Create a simple class to extract user ID from an ID Token
     *
     * @param {string} env Envelope of the jwt
     * @param {TokenPayload} pay Payload of the jwt
     * @constructor
     */
    constructor(n, i) {
      V(this, "envelope");
      V(this, "payload");
      this.envelope = n, this.payload = i;
    }
    getEnvelope() {
      return this.envelope;
    }
    getPayload() {
      return this.payload;
    }
    /**
     * Create a simple class to extract user ID from an ID Token
     *
     * @return The user ID
     */
    getUserId() {
      const n = this.getPayload();
      return n && n.sub ? n.sub : null;
    }
    /**
     * Returns attributes from the login ticket.  This can contain
     * various information about the user session.
     *
     * @return The envelope and payload
     */
    getAttributes() {
      return { envelope: this.getEnvelope(), payload: this.getPayload() };
    }
  }
  return Dt.LoginTicket = t, Dt;
}
var Ji;
function vt() {
  if (Ji) return Me;
  Ji = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.OAuth2Client = Me.ClientAuthentication = Me.CertificateFormat = Me.CodeChallengeMethod = void 0;
  const t = Ee(), e = Ea, n = Ve, i = us(), o = be(), r = mn(), l = Re(), u = ds();
  var d;
  (function(m) {
    m.Plain = "plain", m.S256 = "S256";
  })(d || (Me.CodeChallengeMethod = d = {}));
  var c;
  (function(m) {
    m.PEM = "PEM", m.JWK = "JWK";
  })(c || (Me.CertificateFormat = c = {}));
  var f;
  (function(m) {
    m.ClientSecretPost = "ClientSecretPost", m.ClientSecretBasic = "ClientSecretBasic", m.None = "None";
  })(f || (Me.ClientAuthentication = f = {}));
  const p = class p extends l.AuthClient {
    /**
     * An OAuth2 Client for Google APIs.
     *
     * @param options The OAuth2 Client Options. Passing an `clientId` directly is **@DEPRECATED**.
     * @param clientSecret **@DEPRECATED**. Provide a {@link OAuth2ClientOptions `OAuth2ClientOptions`} object in the first parameter instead.
     * @param redirectUri **@DEPRECATED**. Provide a {@link OAuth2ClientOptions `OAuth2ClientOptions`} object in the first parameter instead.
     */
    constructor(y = {}, _, C) {
      var A;
      super(typeof y == "object" ? y : {});
      V(this, "redirectUri");
      V(this, "certificateCache", {});
      V(this, "certificateExpiry", null);
      V(this, "certificateCacheFormat", c.PEM);
      V(this, "refreshTokenPromises", /* @__PURE__ */ new Map());
      V(this, "endpoints");
      V(this, "issuers");
      V(this, "clientAuthentication");
      // TODO: refactor tests to make this private
      V(this, "_clientId");
      // TODO: refactor tests to make this private
      V(this, "_clientSecret");
      V(this, "refreshHandler");
      typeof y != "object" && (y = {
        clientId: y,
        clientSecret: _,
        redirectUri: C
      }), this._clientId = y.clientId || y.client_id, this._clientSecret = y.clientSecret || y.client_secret, this.redirectUri = y.redirectUri || ((A = y.redirect_uris) == null ? void 0 : A[0]), this.endpoints = {
        tokenInfoUrl: "https://oauth2.googleapis.com/tokeninfo",
        oauth2AuthBaseUrl: "https://accounts.google.com/o/oauth2/v2/auth",
        oauth2TokenUrl: "https://oauth2.googleapis.com/token",
        oauth2RevokeUrl: "https://oauth2.googleapis.com/revoke",
        oauth2FederatedSignonPemCertsUrl: "https://www.googleapis.com/oauth2/v1/certs",
        oauth2FederatedSignonJwkCertsUrl: "https://www.googleapis.com/oauth2/v3/certs",
        oauth2IapPublicKeyUrl: "https://www.gstatic.com/iap/verify/public_key",
        ...y.endpoints
      }, this.clientAuthentication = y.clientAuthentication || f.ClientSecretPost, this.issuers = y.issuers || [
        "accounts.google.com",
        "https://accounts.google.com",
        this.universeDomain
      ];
    }
    /**
     * Generates URL for consent page landing.
     * @param opts Options.
     * @return URL to consent page.
     */
    generateAuthUrl(y = {}) {
      if (y.code_challenge_method && !y.code_challenge)
        throw new Error("If a code_challenge_method is provided, code_challenge must be included.");
      return y.response_type = y.response_type || "code", y.client_id = y.client_id || this._clientId, y.redirect_uri = y.redirect_uri || this.redirectUri, Array.isArray(y.scope) && (y.scope = y.scope.join(" ")), this.endpoints.oauth2AuthBaseUrl.toString() + "?" + e.stringify(y);
    }
    generateCodeVerifier() {
      throw new Error("generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.");
    }
    /**
     * Convenience method to automatically generate a code_verifier, and its
     * resulting SHA256. If used, this must be paired with a S256
     * code_challenge_method.
     *
     * For a full example see:
     * https://github.com/googleapis/google-auth-library-nodejs/blob/main/samples/oauth2-codeVerifier.js
     */
    async generateCodeVerifierAsync() {
      const y = (0, r.createCrypto)(), C = y.randomBytesBase64(96).replace(/\+/g, "~").replace(/=/g, "_").replace(/\//g, "-"), k = (await y.sha256DigestBase64(C)).split("=")[0].replace(/\+/g, "-").replace(/\//g, "_");
      return { codeVerifier: C, codeChallenge: k };
    }
    getToken(y, _) {
      const C = typeof y == "string" ? { code: y } : y;
      if (_)
        this.getTokenAsync(C).then((A) => _(null, A.tokens, A.res), (A) => _(A, null, A.response));
      else
        return this.getTokenAsync(C);
    }
    async getTokenAsync(y) {
      const _ = this.endpoints.oauth2TokenUrl.toString(), C = new Headers(), A = {
        client_id: y.client_id || this._clientId,
        code_verifier: y.codeVerifier,
        code: y.code,
        grant_type: "authorization_code",
        redirect_uri: y.redirect_uri || this.redirectUri
      };
      if (this.clientAuthentication === f.ClientSecretBasic) {
        const M = Buffer.from(`${this._clientId}:${this._clientSecret}`);
        C.set("authorization", `Basic ${M.toString("base64")}`);
      }
      this.clientAuthentication === f.ClientSecretPost && (A.client_secret = this._clientSecret);
      const k = {
        ...p.RETRY_CONFIG,
        method: "POST",
        url: _,
        data: new URLSearchParams((0, o.removeUndefinedValuesInObject)(A)),
        headers: C
      };
      l.AuthClient.setMethodName(k, "getTokenAsync");
      const b = await this.transporter.request(k), N = b.data;
      return b.data && b.data.expires_in && (N.expiry_date = (/* @__PURE__ */ new Date()).getTime() + b.data.expires_in * 1e3, delete N.expires_in), this.emit("tokens", N), { tokens: N, res: b };
    }
    /**
     * Refreshes the access token.
     * @param refresh_token Existing refresh token.
     * @private
     */
    async refreshToken(y) {
      if (!y)
        return this.refreshTokenNoCache(y);
      if (this.refreshTokenPromises.has(y))
        return this.refreshTokenPromises.get(y);
      const _ = this.refreshTokenNoCache(y).then((C) => (this.refreshTokenPromises.delete(y), C), (C) => {
        throw this.refreshTokenPromises.delete(y), C;
      });
      return this.refreshTokenPromises.set(y, _), _;
    }
    async refreshTokenNoCache(y) {
      var b;
      if (!y)
        throw new Error("No refresh token is set.");
      const _ = this.endpoints.oauth2TokenUrl.toString(), C = {
        refresh_token: y,
        client_id: this._clientId,
        client_secret: this._clientSecret,
        grant_type: "refresh_token"
      };
      let A;
      try {
        const N = {
          ...p.RETRY_CONFIG,
          method: "POST",
          url: _,
          data: new URLSearchParams((0, o.removeUndefinedValuesInObject)(C))
        };
        l.AuthClient.setMethodName(N, "refreshTokenNoCache"), A = await this.transporter.request(N);
      } catch (N) {
        throw N instanceof t.GaxiosError && N.message === "invalid_grant" && ((b = N.response) != null && b.data) && /ReAuth/i.test(N.response.data.error_description) && (N.message = JSON.stringify(N.response.data)), N;
      }
      const k = A.data;
      return A.data && A.data.expires_in && (k.expiry_date = (/* @__PURE__ */ new Date()).getTime() + A.data.expires_in * 1e3, delete k.expires_in), this.emit("tokens", k), { tokens: k, res: A };
    }
    refreshAccessToken(y) {
      if (y)
        this.refreshAccessTokenAsync().then((_) => y(null, _.credentials, _.res), y);
      else
        return this.refreshAccessTokenAsync();
    }
    async refreshAccessTokenAsync() {
      const y = await this.refreshToken(this.credentials.refresh_token), _ = y.tokens;
      return _.refresh_token = this.credentials.refresh_token, this.credentials = _, { credentials: this.credentials, res: y.res };
    }
    getAccessToken(y) {
      if (y)
        this.getAccessTokenAsync().then((_) => y(null, _.token, _.res), y);
      else
        return this.getAccessTokenAsync();
    }
    async getAccessTokenAsync() {
      if (!this.credentials.access_token || this.isTokenExpiring()) {
        if (!this.credentials.refresh_token)
          if (this.refreshHandler) {
            const C = await this.processAndValidateRefreshHandler();
            if (C != null && C.access_token)
              return this.setCredentials(C), { token: this.credentials.access_token };
          } else
            throw new Error("No refresh token or refresh handler callback is set.");
        const _ = await this.refreshAccessTokenAsync();
        if (!_.credentials || _.credentials && !_.credentials.access_token)
          throw new Error("Could not refresh access token.");
        return { token: _.credentials.access_token, res: _.res };
      } else
        return { token: this.credentials.access_token };
    }
    /**
     * The main authentication interface.  It takes an optional url which when
     * present is the endpoint being accessed, and returns a Promise which
     * resolves with authorization header fields.
     *
     * In OAuth2Client, the result has the form:
     * { authorization: 'Bearer <access_token_value>' }
     */
    async getRequestHeaders(y) {
      return (await this.getRequestMetadataAsync(y)).headers;
    }
    async getRequestMetadataAsync(y) {
      const _ = this.credentials;
      if (!_.access_token && !_.refresh_token && !this.apiKey && !this.refreshHandler)
        throw new Error("No access, refresh token, API key or refresh handler callback is set.");
      if (_.access_token && !this.isTokenExpiring()) {
        _.token_type = _.token_type || "Bearer";
        const N = new Headers({
          authorization: _.token_type + " " + _.access_token
        });
        return { headers: this.addSharedMetadataHeaders(N) };
      }
      if (this.refreshHandler) {
        const N = await this.processAndValidateRefreshHandler();
        if (N != null && N.access_token) {
          this.setCredentials(N);
          const M = new Headers({
            authorization: "Bearer " + this.credentials.access_token
          });
          return { headers: this.addSharedMetadataHeaders(M) };
        }
      }
      if (this.apiKey)
        return { headers: new Headers({ "X-Goog-Api-Key": this.apiKey }) };
      let C = null, A = null;
      try {
        C = await this.refreshToken(_.refresh_token), A = C.tokens;
      } catch (N) {
        const M = N;
        throw M.response && (M.response.status === 403 || M.response.status === 404) && (M.message = `Could not refresh access token: ${M.message}`), M;
      }
      const k = this.credentials;
      k.token_type = k.token_type || "Bearer", A.refresh_token = k.refresh_token, this.credentials = A;
      const b = new Headers({
        authorization: k.token_type + " " + A.access_token
      });
      return { headers: this.addSharedMetadataHeaders(b), res: C.res };
    }
    /**
     * Generates an URL to revoke the given token.
     * @param token The existing token to be revoked.
     *
     * @deprecated use instance method {@link OAuth2Client.getRevokeTokenURL}
     */
    static getRevokeTokenUrl(y) {
      return new p().getRevokeTokenURL(y).toString();
    }
    /**
     * Generates a URL to revoke the given token.
     *
     * @param token The existing token to be revoked.
     */
    getRevokeTokenURL(y) {
      const _ = new URL(this.endpoints.oauth2RevokeUrl);
      return _.searchParams.append("token", y), _;
    }
    revokeToken(y, _) {
      const C = {
        ...p.RETRY_CONFIG,
        url: this.getRevokeTokenURL(y).toString(),
        method: "POST"
      };
      if (l.AuthClient.setMethodName(C, "revokeToken"), _)
        this.transporter.request(C).then((A) => _(null, A), _);
      else
        return this.transporter.request(C);
    }
    revokeCredentials(y) {
      if (y)
        this.revokeCredentialsAsync().then((_) => y(null, _), y);
      else
        return this.revokeCredentialsAsync();
    }
    async revokeCredentialsAsync() {
      const y = this.credentials.access_token;
      if (this.credentials = {}, y)
        return this.revokeToken(y);
      throw new Error("No access token to revoke.");
    }
    request(y, _) {
      if (_)
        this.requestAsync(y).then((C) => _(null, C), (C) => _(C, C.response));
      else
        return this.requestAsync(y);
    }
    async requestAsync(y, _ = !1) {
      try {
        const C = await this.getRequestMetadataAsync();
        return y.headers = t.Gaxios.mergeHeaders(y.headers), this.addUserProjectAndAuthHeaders(y.headers, C.headers), this.apiKey && y.headers.set("X-Goog-Api-Key", this.apiKey), await this.transporter.request(y);
      } catch (C) {
        const A = C.response;
        if (A) {
          const k = A.status, b = this.credentials && this.credentials.access_token && this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure), N = this.credentials && this.credentials.access_token && !this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure) && this.refreshHandler, M = A.config.data instanceof n.Readable, w = k === 401 || k === 403;
          if (!_ && w && !M && b)
            return await this.refreshAccessTokenAsync(), this.requestAsync(y, !0);
          if (!_ && w && !M && N) {
            const D = await this.processAndValidateRefreshHandler();
            return D != null && D.access_token && this.setCredentials(D), this.requestAsync(y, !0);
          }
        }
        throw C;
      }
    }
    verifyIdToken(y, _) {
      if (_ && typeof _ != "function")
        throw new Error("This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.");
      if (_)
        this.verifyIdTokenAsync(y).then((C) => _(null, C), _);
      else
        return this.verifyIdTokenAsync(y);
    }
    async verifyIdTokenAsync(y) {
      if (!y.idToken)
        throw new Error("The verifyIdToken method requires an ID Token");
      const _ = await this.getFederatedSignonCertsAsync();
      return await this.verifySignedJwtWithCertsAsync(y.idToken, _.certs, y.audience, this.issuers, y.maxExpiry);
    }
    /**
     * Obtains information about the provisioned access token.  Especially useful
     * if you want to check the scopes that were provisioned to a given token.
     *
     * @param accessToken Required.  The Access Token for which you want to get
     * user info.
     */
    async getTokenInfo(y) {
      const { data: _ } = await this.transporter.request({
        ...p.RETRY_CONFIG,
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${y}`
        },
        url: this.endpoints.tokenInfoUrl.toString()
      }), C = Object.assign({
        expiry_date: (/* @__PURE__ */ new Date()).getTime() + _.expires_in * 1e3,
        scopes: _.scope.split(" ")
      }, _);
      return delete C.expires_in, delete C.scope, C;
    }
    getFederatedSignonCerts(y) {
      if (y)
        this.getFederatedSignonCertsAsync().then((_) => y(null, _.certs, _.res), y);
      else
        return this.getFederatedSignonCertsAsync();
    }
    async getFederatedSignonCertsAsync() {
      var w, D;
      const y = (/* @__PURE__ */ new Date()).getTime(), _ = (0, r.hasBrowserCrypto)() ? c.JWK : c.PEM;
      if (this.certificateExpiry && y < this.certificateExpiry.getTime() && this.certificateCacheFormat === _)
        return { certs: this.certificateCache, format: _ };
      let C, A;
      switch (_) {
        case c.PEM:
          A = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
          break;
        case c.JWK:
          A = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
          break;
        default:
          throw new Error(`Unsupported certificate format ${_}`);
      }
      try {
        const g = {
          ...p.RETRY_CONFIG,
          url: A
        };
        l.AuthClient.setMethodName(g, "getFederatedSignonCertsAsync"), C = await this.transporter.request(g);
      } catch (g) {
        throw g instanceof Error && (g.message = `Failed to retrieve verification certificates: ${g.message}`), g;
      }
      const k = C == null ? void 0 : C.headers.get("cache-control");
      let b = -1;
      if (k) {
        const g = (D = (w = /max-age=(?<maxAge>[0-9]+)/.exec(k)) == null ? void 0 : w.groups) == null ? void 0 : D.maxAge;
        g && (b = Number(g) * 1e3);
      }
      let N = {};
      switch (_) {
        case c.PEM:
          N = C.data;
          break;
        case c.JWK:
          for (const g of C.data.keys)
            N[g.kid] = g;
          break;
        default:
          throw new Error(`Unsupported certificate format ${_}`);
      }
      const M = /* @__PURE__ */ new Date();
      return this.certificateExpiry = b === -1 ? null : new Date(M.getTime() + b), this.certificateCache = N, this.certificateCacheFormat = _, { certs: N, format: _, res: C };
    }
    getIapPublicKeys(y) {
      if (y)
        this.getIapPublicKeysAsync().then((_) => y(null, _.pubkeys, _.res), y);
      else
        return this.getIapPublicKeysAsync();
    }
    async getIapPublicKeysAsync() {
      let y;
      const _ = this.endpoints.oauth2IapPublicKeyUrl.toString();
      try {
        const C = {
          ...p.RETRY_CONFIG,
          url: _
        };
        l.AuthClient.setMethodName(C, "getIapPublicKeysAsync"), y = await this.transporter.request(C);
      } catch (C) {
        throw C instanceof Error && (C.message = `Failed to retrieve verification certificates: ${C.message}`), C;
      }
      return { pubkeys: y.data, res: y };
    }
    verifySignedJwtWithCerts() {
      throw new Error("verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.");
    }
    /**
     * Verify the id token is signed with the correct certificate
     * and is from the correct audience.
     * @param jwt The jwt to verify (The ID Token in this case).
     * @param certs The array of certs to test the jwt against.
     * @param requiredAudience The audience to test the jwt against.
     * @param issuers The allowed issuers of the jwt (Optional).
     * @param maxExpiry The max expiry the certificate can be (Optional).
     * @return Returns a promise resolving to LoginTicket on verification.
     */
    async verifySignedJwtWithCertsAsync(y, _, C, A, k) {
      const b = (0, r.createCrypto)();
      k || (k = p.DEFAULT_MAX_TOKEN_LIFETIME_SECS_);
      const N = y.split(".");
      if (N.length !== 3)
        throw new Error("Wrong number of segments in token: " + y);
      const M = N[0] + "." + N[1];
      let w = N[2], D, g;
      try {
        D = JSON.parse(b.decodeBase64StringUtf8(N[0]));
      } catch (Q) {
        throw Q instanceof Error && (Q.message = `Can't parse token envelope: ${N[0]}': ${Q.message}`), Q;
      }
      if (!D)
        throw new Error("Can't parse token envelope: " + N[0]);
      try {
        g = JSON.parse(b.decodeBase64StringUtf8(N[1]));
      } catch (Q) {
        throw Q instanceof Error && (Q.message = `Can't parse token payload '${N[0]}`), Q;
      }
      if (!g)
        throw new Error("Can't parse token payload: " + N[1]);
      if (!Object.prototype.hasOwnProperty.call(_, D.kid))
        throw new Error("No pem found for envelope: " + JSON.stringify(D));
      const E = _[D.kid];
      if (D.alg === "ES256" && (w = i.joseToDer(w, "ES256").toString("base64")), !await b.verify(E, M, w))
        throw new Error("Invalid token signature: " + y);
      if (!g.iat)
        throw new Error("No issue time in token: " + JSON.stringify(g));
      if (!g.exp)
        throw new Error("No expiration time in token: " + JSON.stringify(g));
      const H = Number(g.iat);
      if (isNaN(H))
        throw new Error("iat field using invalid format");
      const q = Number(g.exp);
      if (isNaN(q))
        throw new Error("exp field using invalid format");
      const J = (/* @__PURE__ */ new Date()).getTime() / 1e3;
      if (q >= J + k)
        throw new Error("Expiration time too far in future: " + JSON.stringify(g));
      const W = H - p.CLOCK_SKEW_SECS_, Z = q + p.CLOCK_SKEW_SECS_;
      if (J < W)
        throw new Error("Token used too early, " + J + " < " + W + ": " + JSON.stringify(g));
      if (J > Z)
        throw new Error("Token used too late, " + J + " > " + Z + ": " + JSON.stringify(g));
      if (A && A.indexOf(g.iss) < 0)
        throw new Error("Invalid issuer, expected one of [" + A + "], but got " + g.iss);
      if (typeof C < "u" && C !== null) {
        const Q = g.aud;
        let ee = !1;
        if (C.constructor === Array ? ee = C.indexOf(Q) > -1 : ee = Q === C, !ee)
          throw new Error("Wrong recipient, payload audience != requiredAudience");
      }
      return new u.LoginTicket(D, g);
    }
    /**
     * Returns a promise that resolves with AccessTokenResponse type if
     * refreshHandler is defined.
     * If not, nothing is returned.
     */
    async processAndValidateRefreshHandler() {
      if (this.refreshHandler) {
        const y = await this.refreshHandler();
        if (!y.access_token)
          throw new Error("No access token is returned by the refreshHandler callback.");
        return y;
      }
    }
    /**
     * Returns true if a token is expired or will expire within
     * eagerRefreshThresholdMillismilliseconds.
     * If there is no expiry time, assumes the token is not expired or expiring.
     */
    isTokenExpiring() {
      const y = this.credentials.expiry_date;
      return y ? y <= (/* @__PURE__ */ new Date()).getTime() + this.eagerRefreshThresholdMillis : !1;
    }
  };
  /**
   * @deprecated use instance's {@link OAuth2Client.endpoints}
   */
  V(p, "GOOGLE_TOKEN_INFO_URL", "https://oauth2.googleapis.com/tokeninfo"), /**
   * Clock skew - five minutes in seconds
   */
  V(p, "CLOCK_SKEW_SECS_", 300), /**
   * The default max Token Lifetime is one day in seconds
   */
  V(p, "DEFAULT_MAX_TOKEN_LIFETIME_SECS_", 86400);
  let h = p;
  return Me.OAuth2Client = h, Me;
}
var Ki;
function fs() {
  if (Ki) return Ut;
  Ki = 1, Object.defineProperty(Ut, "__esModule", { value: !0 }), Ut.Compute = void 0;
  const t = Ee(), e = gn(), n = vt();
  class i extends n.OAuth2Client {
    /**
     * Google Compute Engine service account credentials.
     *
     * Retrieve access token from the metadata server.
     * See: https://cloud.google.com/compute/docs/access/authenticate-workloads#applications
     */
    constructor(l = {}) {
      super(l);
      V(this, "serviceAccountEmail");
      V(this, "scopes");
      this.credentials = { expiry_date: 1, refresh_token: "compute-placeholder" }, this.serviceAccountEmail = l.serviceAccountEmail || "default", this.scopes = Array.isArray(l.scopes) ? l.scopes : l.scopes ? [l.scopes] : [];
    }
    /**
     * Refreshes the access token.
     * @param refreshToken Unused parameter
     */
    async refreshTokenNoCache() {
      const l = `service-accounts/${this.serviceAccountEmail}/token`;
      let u;
      try {
        const c = {
          property: l
        };
        this.scopes.length > 0 && (c.params = {
          scopes: this.scopes.join(",")
        }), u = await e.instance(c);
      } catch (c) {
        throw c instanceof t.GaxiosError && (c.message = `Could not refresh access token: ${c.message}`, this.wrapError(c)), c;
      }
      const d = u;
      return u && u.expires_in && (d.expiry_date = (/* @__PURE__ */ new Date()).getTime() + u.expires_in * 1e3, delete d.expires_in), this.emit("tokens", d), { tokens: d, res: null };
    }
    /**
     * Fetches an ID token.
     * @param targetAudience the audience for the fetched ID token.
     */
    async fetchIdToken(l) {
      const u = `service-accounts/${this.serviceAccountEmail}/identity?format=full&audience=${l}`;
      let d;
      try {
        const c = {
          property: u
        };
        d = await e.instance(c);
      } catch (c) {
        throw c instanceof Error && (c.message = `Could not fetch ID token: ${c.message}`), c;
      }
      return d;
    }
    wrapError(l) {
      const u = l.response;
      u && u.status && (l.status = u.status, u.status === 403 ? l.message = "A Forbidden error was returned while attempting to retrieve an access token for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have the correct permission scopes specified: " + l.message : u.status === 404 && (l.message = "A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: " + l.message));
    }
  }
  return Ut.Compute = i, Ut;
}
var xt = {}, Wi;
function hs() {
  if (Wi) return xt;
  Wi = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.IdTokenClient = void 0;
  const t = vt();
  class e extends t.OAuth2Client {
    /**
     * Google ID Token client
     *
     * Retrieve ID token from the metadata server.
     * See: https://cloud.google.com/docs/authentication/get-id-token#metadata-server
     */
    constructor(o) {
      super(o);
      V(this, "targetAudience");
      V(this, "idTokenProvider");
      this.targetAudience = o.targetAudience, this.idTokenProvider = o.idTokenProvider;
    }
    async getRequestMetadataAsync() {
      if (!this.credentials.id_token || !this.credentials.expiry_date || this.isTokenExpiring()) {
        const r = await this.idTokenProvider.fetchIdToken(this.targetAudience);
        this.credentials = {
          id_token: r,
          expiry_date: this.getIdTokenExpiryDate(r)
        };
      }
      return { headers: new Headers({
        authorization: "Bearer " + this.credentials.id_token
      }) };
    }
    getIdTokenExpiryDate(o) {
      const r = o.split(".")[1];
      if (r)
        return JSON.parse(Buffer.from(r, "base64").toString("ascii")).exp * 1e3;
    }
  }
  return xt.IdTokenClient = e, xt;
}
var ze = {}, Yi;
function ps() {
  if (Yi) return ze;
  Yi = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.GCPEnv = void 0, ze.clear = i, ze.getEnv = o;
  const t = gn();
  var e;
  (function(p) {
    p.APP_ENGINE = "APP_ENGINE", p.KUBERNETES_ENGINE = "KUBERNETES_ENGINE", p.CLOUD_FUNCTIONS = "CLOUD_FUNCTIONS", p.COMPUTE_ENGINE = "COMPUTE_ENGINE", p.CLOUD_RUN = "CLOUD_RUN", p.CLOUD_RUN_JOBS = "CLOUD_RUN_JOBS", p.NONE = "NONE";
  })(e || (ze.GCPEnv = e = {}));
  let n;
  function i() {
    n = void 0;
  }
  async function o() {
    return n || (n = r(), n);
  }
  async function r() {
    let p = e.NONE;
    return l() ? p = e.APP_ENGINE : u() ? p = e.CLOUD_FUNCTIONS : await h() ? await f() ? p = e.KUBERNETES_ENGINE : d() ? p = e.CLOUD_RUN : c() ? p = e.CLOUD_RUN_JOBS : p = e.COMPUTE_ENGINE : p = e.NONE, p;
  }
  function l() {
    return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
  }
  function u() {
    return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
  }
  function d() {
    return !!process.env.K_CONFIGURATION;
  }
  function c() {
    return !!process.env.CLOUD_RUN_JOB;
  }
  async function f() {
    try {
      return await t.instance("attributes/cluster-name"), !0;
    } catch {
      return !1;
    }
  }
  async function h() {
    return t.isAvailable();
  }
  return ze;
}
var Lt = {}, bt = {}, Oe = {}, Dn, zi;
function gs() {
  if (zi) return Dn;
  zi = 1;
  var t = Zt().Buffer, e = Ve, n = it;
  function i(o) {
    if (this.buffer = null, this.writable = !0, this.readable = !0, !o)
      return this.buffer = t.alloc(0), this;
    if (typeof o.pipe == "function")
      return this.buffer = t.alloc(0), o.pipe(this), this;
    if (o.length || typeof o == "object")
      return this.buffer = o, this.writable = !1, process.nextTick((function() {
        this.emit("end", o), this.readable = !1, this.emit("close");
      }).bind(this)), this;
    throw new TypeError("Unexpected data type (" + typeof o + ")");
  }
  return n.inherits(i, e), i.prototype.write = function(r) {
    this.buffer = t.concat([this.buffer, t.from(r)]), this.emit("data", r);
  }, i.prototype.end = function(r) {
    r && this.write(r), this.emit("end", r), this.emit("close"), this.writable = !1, this.readable = !1;
  }, Dn = i, Dn;
}
var xn, Xi;
function ml() {
  if (Xi) return xn;
  Xi = 1;
  var t = dn.Buffer, e = dn.SlowBuffer;
  xn = n;
  function n(r, l) {
    if (!t.isBuffer(r) || !t.isBuffer(l) || r.length !== l.length)
      return !1;
    for (var u = 0, d = 0; d < r.length; d++)
      u |= r[d] ^ l[d];
    return u === 0;
  }
  n.install = function() {
    t.prototype.equal = e.prototype.equal = function(l) {
      return n(this, l);
    };
  };
  var i = t.prototype.equal, o = e.prototype.equal;
  return n.restore = function() {
    t.prototype.equal = i, e.prototype.equal = o;
  }, xn;
}
var Ln, Qi;
function ms() {
  if (Qi) return Ln;
  Qi = 1;
  var t = Zt().Buffer, e = oi, n = us(), i = it, o = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`, r = "secret must be a string or buffer", l = "key must be a string or a buffer", u = "key must be a string, a buffer or an object", d = typeof e.createPublicKey == "function";
  d && (l += " or a KeyObject", r += "or a KeyObject");
  function c(q) {
    if (!t.isBuffer(q) && typeof q != "string" && (!d || typeof q != "object" || typeof q.type != "string" || typeof q.asymmetricKeyType != "string" || typeof q.export != "function"))
      throw v(l);
  }
  function f(q) {
    if (!t.isBuffer(q) && typeof q != "string" && typeof q != "object")
      throw v(u);
  }
  function h(q) {
    if (!t.isBuffer(q)) {
      if (typeof q == "string")
        return q;
      if (!d || typeof q != "object" || q.type !== "secret" || typeof q.export != "function")
        throw v(r);
    }
  }
  function p(q) {
    return q.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function m(q) {
    q = q.toString();
    var J = 4 - q.length % 4;
    if (J !== 4)
      for (var W = 0; W < J; ++W)
        q += "=";
    return q.replace(/\-/g, "+").replace(/_/g, "/");
  }
  function v(q) {
    var J = [].slice.call(arguments, 1), W = i.format.bind(i, q).apply(null, J);
    return new TypeError(W);
  }
  function y(q) {
    return t.isBuffer(q) || typeof q == "string";
  }
  function _(q) {
    return y(q) || (q = JSON.stringify(q)), q;
  }
  function C(q) {
    return function(W, Z) {
      h(Z), W = _(W);
      var Q = e.createHmac("sha" + q, Z), ee = (Q.update(W), Q.digest("base64"));
      return p(ee);
    };
  }
  var A, k = "timingSafeEqual" in e ? function(J, W) {
    return J.byteLength !== W.byteLength ? !1 : e.timingSafeEqual(J, W);
  } : function(J, W) {
    return A || (A = ml()), A(J, W);
  };
  function b(q) {
    return function(W, Z, Q) {
      var ee = C(q)(W, Q);
      return k(t.from(Z), t.from(ee));
    };
  }
  function N(q) {
    return function(W, Z) {
      f(Z), W = _(W);
      var Q = e.createSign("RSA-SHA" + q), ee = (Q.update(W), Q.sign(Z, "base64"));
      return p(ee);
    };
  }
  function M(q) {
    return function(W, Z, Q) {
      c(Q), W = _(W), Z = m(Z);
      var ee = e.createVerify("RSA-SHA" + q);
      return ee.update(W), ee.verify(Q, Z, "base64");
    };
  }
  function w(q) {
    return function(W, Z) {
      f(Z), W = _(W);
      var Q = e.createSign("RSA-SHA" + q), ee = (Q.update(W), Q.sign({
        key: Z,
        padding: e.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: e.constants.RSA_PSS_SALTLEN_DIGEST
      }, "base64"));
      return p(ee);
    };
  }
  function D(q) {
    return function(W, Z, Q) {
      c(Q), W = _(W), Z = m(Z);
      var ee = e.createVerify("RSA-SHA" + q);
      return ee.update(W), ee.verify({
        key: Q,
        padding: e.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: e.constants.RSA_PSS_SALTLEN_DIGEST
      }, Z, "base64");
    };
  }
  function g(q) {
    var J = N(q);
    return function() {
      var Z = J.apply(null, arguments);
      return Z = n.derToJose(Z, "ES" + q), Z;
    };
  }
  function E(q) {
    var J = M(q);
    return function(Z, Q, ee) {
      Q = n.joseToDer(Q, "ES" + q).toString("base64");
      var ge = J(Z, Q, ee);
      return ge;
    };
  }
  function G() {
    return function() {
      return "";
    };
  }
  function H() {
    return function(J, W) {
      return W === "";
    };
  }
  return Ln = function(J) {
    var W = {
      hs: C,
      rs: N,
      ps: w,
      es: g,
      none: G
    }, Z = {
      hs: b,
      rs: M,
      ps: D,
      es: E,
      none: H
    }, Q = J.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
    if (!Q)
      throw v(o, J);
    var ee = (Q[1] || Q[3]).toLowerCase(), ge = Q[2];
    return {
      sign: W[ee](ge),
      verify: Z[ee](ge)
    };
  }, Ln;
}
var bn, Zi;
function ys() {
  if (Zi) return bn;
  Zi = 1;
  var t = dn.Buffer;
  return bn = function(n) {
    return typeof n == "string" ? n : typeof n == "number" || t.isBuffer(n) ? n.toString() : JSON.stringify(n);
  }, bn;
}
var Fn, ji;
function yl() {
  if (ji) return Fn;
  ji = 1;
  var t = Zt().Buffer, e = gs(), n = ms(), i = Ve, o = ys(), r = it;
  function l(f, h) {
    return t.from(f, h).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function u(f, h, p) {
    p = p || "utf8";
    var m = l(o(f), "binary"), v = l(o(h), p);
    return r.format("%s.%s", m, v);
  }
  function d(f) {
    var h = f.header, p = f.payload, m = f.secret || f.privateKey, v = f.encoding, y = n(h.alg), _ = u(h, p, v), C = y.sign(_, m);
    return r.format("%s.%s", _, C);
  }
  function c(f) {
    var h = f.secret || f.privateKey || f.key, p = new e(h);
    this.readable = !0, this.header = f.header, this.encoding = f.encoding, this.secret = this.privateKey = this.key = p, this.payload = new e(f.payload), this.secret.once("close", (function() {
      !this.payload.writable && this.readable && this.sign();
    }).bind(this)), this.payload.once("close", (function() {
      !this.secret.writable && this.readable && this.sign();
    }).bind(this));
  }
  return r.inherits(c, i), c.prototype.sign = function() {
    try {
      var h = d({
        header: this.header,
        payload: this.payload.buffer,
        secret: this.secret.buffer,
        encoding: this.encoding
      });
      return this.emit("done", h), this.emit("data", h), this.emit("end"), this.readable = !1, h;
    } catch (p) {
      this.readable = !1, this.emit("error", p), this.emit("close");
    }
  }, c.sign = d, Fn = c, Fn;
}
var Gn, eo;
function vl() {
  if (eo) return Gn;
  eo = 1;
  var t = Zt().Buffer, e = gs(), n = ms(), i = Ve, o = ys(), r = it, l = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
  function u(C) {
    return Object.prototype.toString.call(C) === "[object Object]";
  }
  function d(C) {
    if (u(C))
      return C;
    try {
      return JSON.parse(C);
    } catch {
      return;
    }
  }
  function c(C) {
    var A = C.split(".", 1)[0];
    return d(t.from(A, "base64").toString("binary"));
  }
  function f(C) {
    return C.split(".", 2).join(".");
  }
  function h(C) {
    return C.split(".")[2];
  }
  function p(C, A) {
    A = A || "utf8";
    var k = C.split(".")[1];
    return t.from(k, "base64").toString(A);
  }
  function m(C) {
    return l.test(C) && !!c(C);
  }
  function v(C, A, k) {
    if (!A) {
      var b = new Error("Missing algorithm parameter for jws.verify");
      throw b.code = "MISSING_ALGORITHM", b;
    }
    C = o(C);
    var N = h(C), M = f(C), w = n(A);
    return w.verify(M, N, k);
  }
  function y(C, A) {
    if (A = A || {}, C = o(C), !m(C))
      return null;
    var k = c(C);
    if (!k)
      return null;
    var b = p(C);
    return (k.typ === "JWT" || A.json) && (b = JSON.parse(b, A.encoding)), {
      header: k,
      payload: b,
      signature: h(C)
    };
  }
  function _(C) {
    C = C || {};
    var A = C.secret || C.publicKey || C.key, k = new e(A);
    this.readable = !0, this.algorithm = C.algorithm, this.encoding = C.encoding, this.secret = this.publicKey = this.key = k, this.signature = new e(C.signature), this.secret.once("close", (function() {
      !this.signature.writable && this.readable && this.verify();
    }).bind(this)), this.signature.once("close", (function() {
      !this.secret.writable && this.readable && this.verify();
    }).bind(this));
  }
  return r.inherits(_, i), _.prototype.verify = function() {
    try {
      var A = v(this.signature.buffer, this.algorithm, this.key.buffer), k = y(this.signature.buffer, this.encoding);
      return this.emit("done", A, k), this.emit("data", A), this.emit("end"), this.readable = !1, A;
    } catch (b) {
      this.readable = !1, this.emit("error", b), this.emit("close");
    }
  }, _.decode = y, _.isValid = m, _.verify = v, Gn = _, Gn;
}
var to;
function vs() {
  if (to) return Oe;
  to = 1;
  var t = yl(), e = vl(), n = [
    "HS256",
    "HS384",
    "HS512",
    "RS256",
    "RS384",
    "RS512",
    "PS256",
    "PS384",
    "PS512",
    "ES256",
    "ES384",
    "ES512"
  ];
  return Oe.ALGORITHMS = n, Oe.sign = t.sign, Oe.verify = e.verify, Oe.decode = e.decode, Oe.isValid = e.isValid, Oe.createSign = function(o) {
    return new t(o);
  }, Oe.createVerify = function(o) {
    return new e(o);
  }, Oe;
}
var no;
function _l() {
  if (no) return bt;
  no = 1, Object.defineProperty(bt, "__esModule", {
    value: !0
  }), bt.GoogleToken = void 0;
  var t = r(nt), e = Ee(), n = r(vs()), i = r(ii), o = it;
  function r(I, T) {
    if (typeof WeakMap == "function") var P = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap();
    return (r = function(F, B) {
      if (!B && F && F.__esModule) return F;
      var O, $, Y = { __proto__: null, default: F };
      if (F === null || l(F) != "object" && typeof F != "function") return Y;
      if (O = B ? L : P) {
        if (O.has(F)) return O.get(F);
        O.set(F, Y);
      }
      for (var z in F) z !== "default" && {}.hasOwnProperty.call(F, z) && (($ = (O = Object.defineProperty) && Object.getOwnPropertyDescriptor(F, z)) && ($.get || $.set) ? O(Y, z, $) : Y[z] = F[z]);
      return Y;
    })(I, T);
  }
  function l(I) {
    "@babel/helpers - typeof";
    return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
      return typeof T;
    } : function(T) {
      return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
    }, l(I);
  }
  function u(I, T) {
    c(I, T), T.add(I);
  }
  function d(I, T, P) {
    c(I, T), T.set(I, P);
  }
  function c(I, T) {
    if (T.has(I)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function f(I, T, P) {
    return I.set(p(I, T), P), P;
  }
  function h(I, T) {
    return I.get(p(I, T));
  }
  function p(I, T, P) {
    if (typeof I == "function" ? I === T : I.has(T)) return arguments.length < 3 ? T : P;
    throw new TypeError("Private element is not present on this object");
  }
  function m(I, T) {
    for (var P = 0; P < T.length; P++) {
      var L = T[P];
      L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(I, G(L.key), L);
    }
  }
  function v(I, T, P) {
    return T && m(I.prototype, T), Object.defineProperty(I, "prototype", { writable: !1 }), I;
  }
  function y(I, T) {
    if (!(I instanceof T)) throw new TypeError("Cannot call a class as a function");
  }
  function _(I, T, P) {
    return T = g(T), C(I, M() ? Reflect.construct(T, P || [], g(I).constructor) : T.apply(I, P));
  }
  function C(I, T) {
    if (T && (l(T) == "object" || typeof T == "function")) return T;
    if (T !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return A(I);
  }
  function A(I) {
    if (I === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return I;
  }
  function k(I, T) {
    if (typeof T != "function" && T !== null) throw new TypeError("Super expression must either be null or a function");
    I.prototype = Object.create(T && T.prototype, { constructor: { value: I, writable: !0, configurable: !0 } }), Object.defineProperty(I, "prototype", { writable: !1 }), T && D(I, T);
  }
  function b(I) {
    var T = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return b = function(L) {
      if (L === null || !w(L)) return L;
      if (typeof L != "function") throw new TypeError("Super expression must either be null or a function");
      if (T !== void 0) {
        if (T.has(L)) return T.get(L);
        T.set(L, U);
      }
      function U() {
        return N(L, arguments, g(this).constructor);
      }
      return U.prototype = Object.create(L.prototype, { constructor: { value: U, enumerable: !1, writable: !0, configurable: !0 } }), D(U, L);
    }, b(I);
  }
  function N(I, T, P) {
    if (M()) return Reflect.construct.apply(null, arguments);
    var L = [null];
    L.push.apply(L, T);
    var U = new (I.bind.apply(I, L))();
    return P && D(U, P.prototype), U;
  }
  function M() {
    try {
      var I = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (M = function() {
      return !!I;
    })();
  }
  function w(I) {
    try {
      return Function.toString.call(I).indexOf("[native code]") !== -1;
    } catch {
      return typeof I == "function";
    }
  }
  function D(I, T) {
    return D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(P, L) {
      return P.__proto__ = L, P;
    }, D(I, T);
  }
  function g(I) {
    return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(T) {
      return T.__proto__ || Object.getPrototypeOf(T);
    }, g(I);
  }
  function E(I, T, P) {
    return (T = G(T)) in I ? Object.defineProperty(I, T, { value: P, enumerable: !0, configurable: !0, writable: !0 }) : I[T] = P, I;
  }
  function G(I) {
    var T = H(I, "string");
    return l(T) == "symbol" ? T : T + "";
  }
  function H(I, T) {
    if (l(I) != "object" || !I) return I;
    var P = I[Symbol.toPrimitive];
    if (P !== void 0) {
      var L = P.call(I, T);
      if (l(L) != "object") return L;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(I);
  }
  function q() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var I, T, P = typeof Symbol == "function" ? Symbol : {}, L = P.iterator || "@@iterator", U = P.toStringTag || "@@toStringTag";
    function F(le, te, ue, me) {
      var lt = te && te.prototype instanceof O ? te : O, ut = Object.create(lt.prototype);
      return J(ut, "_invoke", (function(St, we, $e) {
        var he, re, ie, en = 0, hi = $e || [], ct = !1, De = { p: 0, n: 0, v: I, a: tn, f: tn.bind(I, 4), d: function(Ae, xe) {
          return he = Ae, re = 0, ie = I, De.n = xe, B;
        } };
        function tn(Pe, Ae) {
          for (re = Pe, ie = Ae, T = 0; !ct && en && !xe && T < hi.length; T++) {
            var xe, Se = hi[T], Tn = De.p, nn = Se[2];
            Pe > 3 ? (xe = nn === Ae) && (ie = Se[(re = Se[4]) ? 5 : (re = 3, 3)], Se[4] = Se[5] = I) : Se[0] <= Tn && ((xe = Pe < 2 && Tn < Se[1]) ? (re = 0, De.v = Ae, De.n = Se[1]) : Tn < nn && (xe = Pe < 3 || Se[0] > Ae || Ae > nn) && (Se[4] = Pe, Se[5] = Ae, De.n = nn, re = 0));
          }
          if (xe || Pe > 1) return B;
          throw ct = !0, Ae;
        }
        return function(Pe, Ae, xe) {
          if (en > 1) throw TypeError("Generator is already running");
          for (ct && Ae === 1 && tn(Ae, xe), re = Ae, ie = xe; (T = re < 2 ? I : ie) || !ct; ) {
            he || (re ? re < 3 ? (re > 1 && (De.n = -1), tn(re, ie)) : De.n = ie : De.v = ie);
            try {
              if (en = 2, he) {
                if (re || (Pe = "next"), T = he[Pe]) {
                  if (!(T = T.call(he, ie))) throw TypeError("iterator result is not an object");
                  if (!T.done) return T;
                  ie = T.value, re < 2 && (re = 0);
                } else re === 1 && (T = he.return) && T.call(he), re < 2 && (ie = TypeError("The iterator does not provide a '" + Pe + "' method"), re = 1);
                he = I;
              } else if ((T = (ct = De.n < 0) ? ie : St.call(we, De)) !== B) break;
            } catch (Se) {
              he = I, re = 1, ie = Se;
            } finally {
              en = 1;
            }
          }
          return { value: T, done: ct };
        };
      })(le, ue, me), !0), ut;
    }
    var B = {};
    function O() {
    }
    function $() {
    }
    function Y() {
    }
    T = Object.getPrototypeOf;
    var z = [][L] ? T(T([][L]())) : (J(T = {}, L, function() {
      return this;
    }), T), j = Y.prototype = O.prototype = Object.create(z);
    function ne(le) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(le, Y) : (le.__proto__ = Y, J(le, U, "GeneratorFunction")), le.prototype = Object.create(j), le;
    }
    return $.prototype = Y, J(j, "constructor", Y), J(Y, "constructor", $), $.displayName = "GeneratorFunction", J(Y, U, "GeneratorFunction"), J(j), J(j, U, "Generator"), J(j, L, function() {
      return this;
    }), J(j, "toString", function() {
      return "[object Generator]";
    }), (q = function() {
      return { w: F, m: ne };
    })();
  }
  function J(I, T, P, L) {
    var U = Object.defineProperty;
    try {
      U({}, "", {});
    } catch {
      U = 0;
    }
    J = function(B, O, $, Y) {
      if (O) U ? U(B, O, { value: $, enumerable: !Y, configurable: !Y, writable: !Y }) : B[O] = $;
      else {
        var z = function(ne, le) {
          J(B, ne, function(te) {
            return this._invoke(ne, le, te);
          });
        };
        z("next", 0), z("throw", 1), z("return", 2);
      }
    }, J(I, T, P, L);
  }
  function W(I, T, P, L, U, F, B) {
    try {
      var O = I[F](B), $ = O.value;
    } catch (Y) {
      return void P(Y);
    }
    O.done ? T($) : Promise.resolve($).then(L, U);
  }
  function Z(I) {
    return function() {
      var T = this, P = arguments;
      return new Promise(function(L, U) {
        var F = I.apply(T, P);
        function B($) {
          W(F, L, U, B, O, "next", $);
        }
        function O($) {
          W(F, L, U, B, O, "throw", $);
        }
        B(void 0);
      });
    };
  }
  var Q = t.readFile ? (0, o.promisify)(t.readFile) : /* @__PURE__ */ Z(/* @__PURE__ */ q().m(function I() {
    return q().w(function(T) {
      for (; ; ) switch (T.n) {
        case 0:
          throw new oe("use key rather than keyFile.", "MISSING_CREDENTIALS");
        case 1:
          return T.a(2);
      }
    }, I);
  })), ee = "https://oauth2.googleapis.com/token", ge = "https://oauth2.googleapis.com/revoke?token=", oe = /* @__PURE__ */ (function(I) {
    function T(P, L) {
      var U;
      return y(this, T), U = _(this, T, [P]), E(U, "code", void 0), U.code = L, U;
    }
    return k(T, I), v(T);
  })(/* @__PURE__ */ b(Error)), ve = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakSet();
  bt.GoogleToken = /* @__PURE__ */ (function() {
    function I(T) {
      y(this, I), u(this, fe), E(this, "expiresAt", void 0), E(this, "key", void 0), E(this, "keyFile", void 0), E(this, "iss", void 0), E(this, "sub", void 0), E(this, "scope", void 0), E(this, "rawToken", void 0), E(this, "tokenExpires", void 0), E(this, "email", void 0), E(this, "additionalClaims", void 0), E(this, "eagerRefreshThresholdMillis", void 0), E(this, "transporter", {
        request: function(L) {
          return (0, e.request)(L);
        }
      }), d(this, ve, void 0), p(fe, this, S).call(this, T);
    }
    return v(I, [{
      key: "accessToken",
      get: function() {
        return this.rawToken ? this.rawToken.access_token : void 0;
      }
    }, {
      key: "idToken",
      get: function() {
        return this.rawToken ? this.rawToken.id_token : void 0;
      }
    }, {
      key: "tokenType",
      get: function() {
        return this.rawToken ? this.rawToken.token_type : void 0;
      }
    }, {
      key: "refreshToken",
      get: function() {
        return this.rawToken ? this.rawToken.refresh_token : void 0;
      }
    }, {
      key: "hasExpired",
      value: function() {
        var P = (/* @__PURE__ */ new Date()).getTime();
        return this.rawToken && this.expiresAt ? P >= this.expiresAt : !0;
      }
      /**
       * Returns whether the token will expire within eagerRefreshThresholdMillis
       *
       * @return true if the token will be expired within eagerRefreshThresholdMillis, false otherwise.
       */
    }, {
      key: "isTokenExpiring",
      value: function() {
        var P, L = (/* @__PURE__ */ new Date()).getTime(), U = (P = this.eagerRefreshThresholdMillis) !== null && P !== void 0 ? P : 0;
        return this.rawToken && this.expiresAt ? this.expiresAt <= L + U : !0;
      }
      /**
       * Returns a cached token or retrieves a new one from Google.
       *
       * @param callback The callback function.
       */
    }, {
      key: "getToken",
      value: function(P) {
        var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (l(P) === "object" && (L = P, P = void 0), L = Object.assign({
          forceRefresh: !1
        }, L), P) {
          var U = P;
          p(fe, this, st).call(this, L).then(function(F) {
            return U(null, F);
          }, P);
          return;
        }
        return p(fe, this, st).call(this, L);
      }
      /**
       * Given a keyFile, extract the key and client email if available
       * @param keyFile Path to a json, pem, or p12 file that contains the key.
       * @returns an object with privateKey and clientEmail properties
       */
    }, {
      key: "getCredentials",
      value: (function() {
        var T = Z(/* @__PURE__ */ q().m(function L(U) {
          var F, B, O, $, Y, z, j;
          return q().w(function(ne) {
            for (; ; ) switch (ne.n) {
              case 0:
                F = i.extname(U), j = F, ne.n = j === ".json" ? 1 : j === ".der" || j === ".crt" || j === ".pem" ? 4 : j === ".p12" || j === ".pfx" ? 6 : 7;
                break;
              case 1:
                return ne.n = 2, Q(U, "utf8");
              case 2:
                if (B = ne.v, O = JSON.parse(B), $ = O.private_key, Y = O.client_email, !(!$ || !Y)) {
                  ne.n = 3;
                  break;
                }
                throw new oe("private_key and client_email are required.", "MISSING_CREDENTIALS");
              case 3:
                return ne.a(2, {
                  privateKey: $,
                  clientEmail: Y
                });
              case 4:
                return ne.n = 5, Q(U, "utf8");
              case 5:
                return z = ne.v, ne.a(2, {
                  privateKey: z
                });
              case 6:
                throw new oe("*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.", "UNKNOWN_CERTIFICATE_TYPE");
              case 7:
                throw new oe("Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.", "UNKNOWN_CERTIFICATE_TYPE");
              case 8:
                return ne.a(2);
            }
          }, L);
        }));
        function P(L) {
          return T.apply(this, arguments);
        }
        return P;
      })()
    }, {
      key: "revokeToken",
      value: function(P) {
        if (P) {
          p(fe, this, Te).call(this).then(function() {
            return P();
          }, P);
          return;
        }
        return p(fe, this, Te).call(this);
      }
    }]);
  })();
  function st(I) {
    return K.apply(this, arguments);
  }
  function K() {
    return K = Z(/* @__PURE__ */ q().m(function I(T) {
      return q().w(function(P) {
        for (; ; ) switch (P.n) {
          case 0:
            if (!(h(ve, this) && !T.forceRefresh)) {
              P.n = 1;
              break;
            }
            return P.a(2, h(ve, this));
          case 1:
            return P.p = 1, P.n = 2, f(ve, this, p(fe, this, Ct).call(this, T));
          case 2:
            return P.a(2, P.v);
          case 3:
            return P.p = 3, f(ve, this, void 0), P.f(3);
          case 4:
            return P.a(2);
        }
      }, I, this, [[1, , 3, 4]]);
    })), K.apply(this, arguments);
  }
  function Ct(I) {
    return at.apply(this, arguments);
  }
  function at() {
    return at = Z(/* @__PURE__ */ q().m(function I(T) {
      var P;
      return q().w(function(L) {
        for (; ; ) switch (L.n) {
          case 0:
            if (!(this.isTokenExpiring() === !1 && T.forceRefresh === !1)) {
              L.n = 1;
              break;
            }
            return L.a(2, Promise.resolve(this.rawToken));
          case 1:
            if (!(!this.key && !this.keyFile)) {
              L.n = 2;
              break;
            }
            throw new Error("No key or keyFile set.");
          case 2:
            if (!(!this.key && this.keyFile)) {
              L.n = 4;
              break;
            }
            return L.n = 3, this.getCredentials(this.keyFile);
          case 3:
            P = L.v, this.key = P.privateKey, this.iss = P.clientEmail || this.iss, P.clientEmail || p(fe, this, At).call(this);
          case 4:
            return L.a(2, p(fe, this, R).call(this));
        }
      }, I, this);
    })), at.apply(this, arguments);
  }
  function At() {
    if (!this.iss)
      throw new oe("email is required.", "MISSING_CREDENTIALS");
  }
  function Te() {
    return Ce.apply(this, arguments);
  }
  function Ce() {
    return Ce = Z(/* @__PURE__ */ q().m(function I() {
      var T;
      return q().w(function(P) {
        for (; ; ) switch (P.n) {
          case 0:
            if (this.accessToken) {
              P.n = 1;
              break;
            }
            throw new Error("No token to revoke.");
          case 1:
            return T = ge + this.accessToken, P.n = 2, this.transporter.request({
              url: T,
              retry: !0
            });
          case 2:
            p(fe, this, S).call(this, {
              email: this.iss,
              sub: this.sub,
              key: this.key,
              keyFile: this.keyFile,
              scope: this.scope,
              additionalClaims: this.additionalClaims
            });
          case 3:
            return P.a(2);
        }
      }, I, this);
    })), Ce.apply(this, arguments);
  }
  function S() {
    var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.keyFile = I.keyFile, this.key = I.key, this.rawToken = void 0, this.iss = I.email || I.iss, this.sub = I.sub, this.additionalClaims = I.additionalClaims, l(I.scope) === "object" ? this.scope = I.scope.join(" ") : this.scope = I.scope, this.eagerRefreshThresholdMillis = I.eagerRefreshThresholdMillis, I.transporter && (this.transporter = I.transporter);
  }
  function R() {
    return x.apply(this, arguments);
  }
  function x() {
    return x = Z(/* @__PURE__ */ q().m(function I() {
      var T, P, L, U, F, B, O, $, Y, z;
      return q().w(function(j) {
        for (; ; ) switch (j.n) {
          case 0:
            return T = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3), P = this.additionalClaims || {}, L = Object.assign({
              iss: this.iss,
              scope: this.scope,
              aud: ee,
              exp: T + 3600,
              iat: T,
              sub: this.sub
            }, P), U = n.sign({
              header: {
                alg: "RS256"
              },
              payload: L,
              secret: this.key
            }), j.p = 1, j.n = 2, this.transporter.request({
              method: "POST",
              url: ee,
              data: new URLSearchParams({
                grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
                assertion: U
              }),
              responseType: "json",
              retryConfig: {
                httpMethodsToRetry: ["POST"]
              }
            });
          case 2:
            return F = j.v, this.rawToken = F.data, this.expiresAt = F.data.expires_in === null || F.data.expires_in === void 0 ? void 0 : (T + F.data.expires_in) * 1e3, j.a(2, this.rawToken);
          case 3:
            throw j.p = 3, z = j.v, this.rawToken = void 0, this.tokenExpires = void 0, $ = z.response && (B = z.response) !== null && B !== void 0 && B.data ? (O = z.response) === null || O === void 0 ? void 0 : O.data : {}, $.error && (Y = $.error_description ? ": ".concat($.error_description) : "", z.message = "".concat($.error).concat(Y)), z;
          case 4:
            return j.a(2);
        }
      }, I, this, [[1, 3]]);
    })), x.apply(this, arguments);
  }
  return bt;
}
var Ft = {}, io;
function _s() {
  if (io) return Ft;
  io = 1, Object.defineProperty(Ft, "__esModule", { value: !0 }), Ft.JWTAccess = void 0;
  const t = vs(), e = be(), n = {
    alg: "RS256",
    typ: "JWT"
  };
  class i {
    /**
     * JWTAccess service account credentials.
     *
     * Create a new access token by using the credential to create a new JWT token
     * that's recognized as the access token.
     *
     * @param email the service account email address.
     * @param key the private key that will be used to sign the token.
     * @param keyId the ID of the private key used to sign the token.
     */
    constructor(r, l, u, d) {
      V(this, "email");
      V(this, "key");
      V(this, "keyId");
      V(this, "projectId");
      V(this, "eagerRefreshThresholdMillis");
      V(this, "cache", new e.LRUCache({
        capacity: 500,
        maxAge: 3600 * 1e3
      }));
      this.email = r, this.key = l, this.keyId = u, this.eagerRefreshThresholdMillis = d ?? 300 * 1e3;
    }
    /**
     * Ensures that we're caching a key appropriately, giving precedence to scopes vs. url
     *
     * @param url The URI being authorized.
     * @param scopes The scope or scopes being authorized
     * @returns A string that returns the cached key.
     */
    getCachedKey(r, l) {
      let u = r;
      if (l && Array.isArray(l) && l.length ? u = r ? `${r}_${l.join("_")}` : `${l.join("_")}` : typeof l == "string" && (u = r ? `${r}_${l}` : l), !u)
        throw Error("Scopes or url must be provided");
      return u;
    }
    /**
     * Get a non-expired access token, after refreshing if necessary.
     *
     * @param url The URI being authorized.
     * @param additionalClaims An object with a set of additional claims to
     * include in the payload.
     * @returns An object that includes the authorization header.
     */
    getRequestHeaders(r, l, u) {
      const d = this.getCachedKey(r, u), c = this.cache.get(d), f = Date.now();
      if (c && c.expiration - f > this.eagerRefreshThresholdMillis)
        return new Headers(c.headers);
      const h = Math.floor(Date.now() / 1e3), p = i.getExpirationTime(h);
      let m;
      if (Array.isArray(u) && (u = u.join(" ")), u ? m = {
        iss: this.email,
        sub: this.email,
        scope: u,
        exp: p,
        iat: h
      } : m = {
        iss: this.email,
        sub: this.email,
        aud: r,
        exp: p,
        iat: h
      }, l) {
        for (const A in m)
          if (l[A])
            throw new Error(`The '${A}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`);
      }
      const v = this.keyId ? { ...n, kid: this.keyId } : n, y = Object.assign(m, l), _ = t.sign({ header: v, payload: y, secret: this.key }), C = new Headers({ authorization: `Bearer ${_}` });
      return this.cache.set(d, {
        expiration: p * 1e3,
        headers: C
      }), C;
    }
    /**
     * Returns an expiration time for the JWT token.
     *
     * @param iat The issued at time for the JWT.
     * @returns An expiration time for the JWT.
     */
    static getExpirationTime(r) {
      return r + 3600;
    }
    /**
     * Create a JWTAccess credentials instance using the given input options.
     * @param json The input object.
     */
    fromJSON(r) {
      if (!r)
        throw new Error("Must pass in a JSON object containing the service account auth settings.");
      if (!r.client_email)
        throw new Error("The incoming JSON object does not contain a client_email field");
      if (!r.private_key)
        throw new Error("The incoming JSON object does not contain a private_key field");
      this.email = r.client_email, this.key = r.private_key, this.keyId = r.private_key_id, this.projectId = r.project_id;
    }
    fromStream(r, l) {
      if (l)
        this.fromStreamAsync(r).then(() => l(), l);
      else
        return this.fromStreamAsync(r);
    }
    fromStreamAsync(r) {
      return new Promise((l, u) => {
        r || u(new Error("Must pass in a stream containing the service account auth settings."));
        let d = "";
        r.setEncoding("utf8").on("data", (c) => d += c).on("error", u).on("end", () => {
          try {
            const c = JSON.parse(d);
            this.fromJSON(c), l();
          } catch (c) {
            u(c);
          }
        });
      });
    }
  }
  return Ft.JWTAccess = i, Ft;
}
var oo;
function Es() {
  if (oo) return Lt;
  oo = 1, Object.defineProperty(Lt, "__esModule", { value: !0 }), Lt.JWT = void 0;
  const t = _l(), e = _s(), n = vt(), i = Re();
  class o extends n.OAuth2Client {
    /**
     * JWT service account credentials.
     *
     * Retrieve access token using gtoken.
     *
     * @param options the
     */
    constructor(u = {}) {
      super(u);
      V(this, "email");
      V(this, "keyFile");
      V(this, "key");
      V(this, "keyId");
      V(this, "defaultScopes");
      V(this, "scopes");
      V(this, "scope");
      V(this, "subject");
      V(this, "gtoken");
      V(this, "additionalClaims");
      V(this, "useJWTAccessWithScope");
      V(this, "defaultServicePath");
      V(this, "access");
      this.email = u.email, this.keyFile = u.keyFile, this.key = u.key, this.keyId = u.keyId, this.scopes = u.scopes, this.subject = u.subject, this.additionalClaims = u.additionalClaims, this.credentials = { refresh_token: "jwt-placeholder", expiry_date: 1 };
    }
    /**
     * Creates a copy of the credential with the specified scopes.
     * @param scopes List of requested scopes or a single scope.
     * @return The cloned instance.
     */
    createScoped(u) {
      const d = new o(this);
      return d.scopes = u, d;
    }
    /**
     * Obtains the metadata to be sent with the request.
     *
     * @param url the URI being authorized.
     */
    async getRequestMetadataAsync(u) {
      u = this.defaultServicePath ? `https://${this.defaultServicePath}/` : u;
      const d = !this.hasUserScopes() && u || this.useJWTAccessWithScope && this.hasAnyScopes() || this.universeDomain !== i.DEFAULT_UNIVERSE;
      if (this.subject && this.universeDomain !== i.DEFAULT_UNIVERSE)
        throw new RangeError(`Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${i.DEFAULT_UNIVERSE}`);
      if (!this.apiKey && d)
        if (this.additionalClaims && this.additionalClaims.target_audience) {
          const { tokens: c } = await this.refreshToken();
          return {
            headers: this.addSharedMetadataHeaders(new Headers({
              authorization: `Bearer ${c.id_token}`
            }))
          };
        } else {
          this.access || (this.access = new e.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis));
          let c;
          this.hasUserScopes() ? c = this.scopes : u || (c = this.defaultScopes);
          const f = this.useJWTAccessWithScope || this.universeDomain !== i.DEFAULT_UNIVERSE, h = await this.access.getRequestHeaders(
            u ?? void 0,
            this.additionalClaims,
            // Scopes take precedent over audience for signing,
            // so we only provide them if `useJWTAccessWithScope` is on or
            // if we are in a non-default universe
            f ? c : void 0
          );
          return { headers: this.addSharedMetadataHeaders(h) };
        }
      else return this.hasAnyScopes() || this.apiKey ? super.getRequestMetadataAsync(u) : { headers: new Headers() };
    }
    /**
     * Fetches an ID token.
     * @param targetAudience the audience for the fetched ID token.
     */
    async fetchIdToken(u) {
      const d = new t.GoogleToken({
        iss: this.email,
        sub: this.subject,
        scope: this.scopes || this.defaultScopes,
        keyFile: this.keyFile,
        key: this.key,
        additionalClaims: { target_audience: u },
        transporter: this.transporter
      });
      if (await d.getToken({
        forceRefresh: !0
      }), !d.idToken)
        throw new Error("Unknown error: Failed to fetch ID token");
      return d.idToken;
    }
    /**
     * Determine if there are currently scopes available.
     */
    hasUserScopes() {
      return this.scopes ? this.scopes.length > 0 : !1;
    }
    /**
     * Are there any default or user scopes defined.
     */
    hasAnyScopes() {
      return !!(this.scopes && this.scopes.length > 0 || this.defaultScopes && this.defaultScopes.length > 0);
    }
    authorize(u) {
      if (u)
        this.authorizeAsync().then((d) => u(null, d), u);
      else
        return this.authorizeAsync();
    }
    async authorizeAsync() {
      const u = await this.refreshToken();
      if (!u)
        throw new Error("No result returned");
      return this.credentials = u.tokens, this.credentials.refresh_token = "jwt-placeholder", this.key = this.gtoken.key, this.email = this.gtoken.iss, u.tokens;
    }
    /**
     * Refreshes the access token.
     * @param refreshToken ignored
     * @private
     */
    async refreshTokenNoCache() {
      const u = this.createGToken(), c = {
        access_token: (await u.getToken({
          forceRefresh: this.isTokenExpiring()
        })).access_token,
        token_type: "Bearer",
        expiry_date: u.expiresAt,
        id_token: u.idToken
      };
      return this.emit("tokens", c), { res: null, tokens: c };
    }
    /**
     * Create a gToken if it doesn't already exist.
     */
    createGToken() {
      return this.gtoken || (this.gtoken = new t.GoogleToken({
        iss: this.email,
        sub: this.subject,
        scope: this.scopes || this.defaultScopes,
        keyFile: this.keyFile,
        key: this.key,
        additionalClaims: this.additionalClaims,
        transporter: this.transporter
      })), this.gtoken;
    }
    /**
     * Create a JWT credentials instance using the given input options.
     * @param json The input object.
     *
     * @remarks
     *
     * **Important**: If you accept a credential configuration (credential JSON/File/Stream) from an external source for authentication to Google Cloud, you must validate it before providing it to any Google API or library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information, refer to {@link https://cloud.google.com/docs/authentication/external/externally-sourced-credentials Validate credential configurations from external sources}.
     */
    fromJSON(u) {
      if (!u)
        throw new Error("Must pass in a JSON object containing the service account auth settings.");
      if (!u.client_email)
        throw new Error("The incoming JSON object does not contain a client_email field");
      if (!u.private_key)
        throw new Error("The incoming JSON object does not contain a private_key field");
      this.email = u.client_email, this.key = u.private_key, this.keyId = u.private_key_id, this.projectId = u.project_id, this.quotaProjectId = u.quota_project_id, this.universeDomain = u.universe_domain || this.universeDomain;
    }
    fromStream(u, d) {
      if (d)
        this.fromStreamAsync(u).then(() => d(), d);
      else
        return this.fromStreamAsync(u);
    }
    fromStreamAsync(u) {
      return new Promise((d, c) => {
        if (!u)
          throw new Error("Must pass in a stream containing the service account auth settings.");
        let f = "";
        u.setEncoding("utf8").on("error", c).on("data", (h) => f += h).on("end", () => {
          try {
            const h = JSON.parse(f);
            this.fromJSON(h), d();
          } catch (h) {
            c(h);
          }
        });
      });
    }
    /**
     * Creates a JWT credentials instance using an API Key for authentication.
     * @param apiKey The API Key in string form.
     */
    fromAPIKey(u) {
      if (typeof u != "string")
        throw new Error("Must provide an API Key string.");
      this.apiKey = u;
    }
    /**
     * Using the key or keyFile on the JWT client, obtain an object that contains
     * the key and the client email.
     */
    async getCredentials() {
      if (this.key)
        return { private_key: this.key, client_email: this.email };
      if (this.keyFile) {
        const d = await this.createGToken().getCredentials(this.keyFile);
        return { private_key: d.privateKey, client_email: d.clientEmail };
      }
      throw new Error("A key or a keyFile must be provided to getCredentials.");
    }
  }
  return Lt.JWT = o, Lt;
}
var Xe = {}, ro;
function Ts() {
  if (ro) return Xe;
  ro = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.UserRefreshClient = Xe.USER_REFRESH_ACCOUNT_TYPE = void 0;
  const t = vt(), e = Re();
  Xe.USER_REFRESH_ACCOUNT_TYPE = "authorized_user";
  class n extends t.OAuth2Client {
    /**
     * The User Refresh Token client.
     *
     * @param optionsOrClientId The User Refresh Token client options. Passing an `clientId` directly is **@DEPRECATED**.
     * @param clientSecret **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
     * @param refreshToken **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
     * @param eagerRefreshThresholdMillis **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
     * @param forceRefreshOnFailure **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
     */
    constructor(r, l, u, d, c) {
      const f = r && typeof r == "object" ? r : {
        clientId: r,
        clientSecret: l,
        refreshToken: u,
        eagerRefreshThresholdMillis: d,
        forceRefreshOnFailure: c
      };
      super(f);
      // TODO: refactor tests to make this private
      // In a future gts release, the _propertyName rule will be lifted.
      // This is also a hard one because `this.refreshToken` is a function.
      V(this, "_refreshToken");
      this._refreshToken = f.refreshToken, this.credentials.refresh_token = f.refreshToken;
    }
    /**
     * Refreshes the access token.
     * @param refreshToken An ignored refreshToken..
     * @param callback Optional callback.
     */
    async refreshTokenNoCache() {
      return super.refreshTokenNoCache(this._refreshToken);
    }
    async fetchIdToken(r) {
      const l = {
        ...n.RETRY_CONFIG,
        url: this.endpoints.oauth2TokenUrl,
        method: "POST",
        data: new URLSearchParams({
          client_id: this._clientId,
          client_secret: this._clientSecret,
          grant_type: "refresh_token",
          refresh_token: this._refreshToken,
          target_audience: r
        })
      };
      return e.AuthClient.setMethodName(l, "fetchIdToken"), (await this.transporter.request(l)).data.id_token;
    }
    /**
     * Create a UserRefreshClient credentials instance using the given input
     * options.
     * @param json The input object.
     */
    fromJSON(r) {
      if (!r)
        throw new Error("Must pass in a JSON object containing the user refresh token");
      if (r.type !== "authorized_user")
        throw new Error('The incoming JSON object does not have the "authorized_user" type');
      if (!r.client_id)
        throw new Error("The incoming JSON object does not contain a client_id field");
      if (!r.client_secret)
        throw new Error("The incoming JSON object does not contain a client_secret field");
      if (!r.refresh_token)
        throw new Error("The incoming JSON object does not contain a refresh_token field");
      this._clientId = r.client_id, this._clientSecret = r.client_secret, this._refreshToken = r.refresh_token, this.credentials.refresh_token = r.refresh_token, this.quotaProjectId = r.quota_project_id, this.universeDomain = r.universe_domain || this.universeDomain;
    }
    fromStream(r, l) {
      if (l)
        this.fromStreamAsync(r).then(() => l(), l);
      else
        return this.fromStreamAsync(r);
    }
    async fromStreamAsync(r) {
      return new Promise((l, u) => {
        if (!r)
          return u(new Error("Must pass in a stream containing the user refresh token."));
        let d = "";
        r.setEncoding("utf8").on("error", u).on("data", (c) => d += c).on("end", () => {
          try {
            const c = JSON.parse(d);
            return this.fromJSON(c), l();
          } catch (c) {
            return u(c);
          }
        });
      });
    }
    /**
     * Create a UserRefreshClient credentials instance using the given input
     * options.
     * @param json The input object.
     */
    static fromJSON(r) {
      const l = new n();
      return l.fromJSON(r), l;
    }
  }
  return Xe.UserRefreshClient = n, Xe;
}
var Qe = {}, so;
function Cs() {
  if (so) return Qe;
  so = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.Impersonated = Qe.IMPERSONATED_ACCOUNT_TYPE = void 0;
  const t = vt(), e = Ee(), n = be();
  Qe.IMPERSONATED_ACCOUNT_TYPE = "impersonated_service_account";
  class i extends t.OAuth2Client {
    /**
     * Impersonated service account credentials.
     *
     * Create a new access token by impersonating another service account.
     *
     * Impersonated Credentials allowing credentials issued to a user or
     * service account to impersonate another. The source project using
     * Impersonated Credentials must enable the "IAMCredentials" API.
     * Also, the target service account must grant the orginating principal
     * the "Service Account Token Creator" IAM role.
     *
     * **IMPORTANT**: This method does not validate the credential configuration.
     * A security risk occurs when a credential configuration configured with
     * malicious URLs is used. When the credential configuration is accepted from
     * an untrusted source, you should validate it before using it with this
     * method. For more details, see
     * https://cloud.google.com/docs/authentication/external/externally-sourced-credentials.
     *
     * @param {object} options - The configuration object.
     * @param {object} [options.sourceClient] the source credential used as to
     * acquire the impersonated credentials.
     * @param {string} [options.targetPrincipal] the service account to
     * impersonate.
     * @param {string[]} [options.delegates] the chained list of delegates
     * required to grant the final access_token. If set, the sequence of
     * identities must have "Service Account Token Creator" capability granted to
     * the preceding identity. For example, if set to [serviceAccountB,
     * serviceAccountC], the sourceCredential must have the Token Creator role on
     * serviceAccountB. serviceAccountB must have the Token Creator on
     * serviceAccountC. Finally, C must have Token Creator on target_principal.
     * If left unset, sourceCredential must have that role on targetPrincipal.
     * @param {string[]} [options.targetScopes] scopes to request during the
     * authorization grant.
     * @param {number} [options.lifetime] number of seconds the delegated
     * credential should be valid for up to 3600 seconds by default, or 43,200
     * seconds by extending the token's lifetime, see:
     * https://cloud.google.com/iam/docs/creating-short-lived-service-account-credentials#sa-credentials-oauth
     * @param {string} [options.endpoint] api endpoint override.
     */
    constructor(l = {}) {
      super(l);
      V(this, "sourceClient");
      V(this, "targetPrincipal");
      V(this, "targetScopes");
      V(this, "delegates");
      V(this, "lifetime");
      V(this, "endpoint");
      if (this.credentials = {
        expiry_date: 1,
        refresh_token: "impersonated-placeholder"
      }, this.sourceClient = l.sourceClient ?? new t.OAuth2Client(), this.targetPrincipal = l.targetPrincipal ?? "", this.delegates = l.delegates ?? [], this.targetScopes = l.targetScopes ?? [], this.lifetime = l.lifetime ?? 3600, !!!(0, n.originalOrCamelOptions)(l).get("universe_domain"))
        this.universeDomain = this.sourceClient.universeDomain;
      else if (this.sourceClient.universeDomain !== this.universeDomain)
        throw new RangeError(`Universe domain ${this.sourceClient.universeDomain} in source credentials does not match ${this.universeDomain} universe domain set for impersonated credentials.`);
      this.endpoint = l.endpoint ?? `https://iamcredentials.${this.universeDomain}`;
    }
    /**
     * Signs some bytes.
     *
     * {@link https://cloud.google.com/iam/docs/reference/credentials/rest/v1/projects.serviceAccounts/signBlob Reference Documentation}
     * @param blobToSign String to sign.
     *
     * @returns A {@link SignBlobResponse} denoting the keyID and signedBlob in base64 string
     */
    async sign(l) {
      await this.sourceClient.getAccessToken();
      const u = `projects/-/serviceAccounts/${this.targetPrincipal}`, d = `${this.endpoint}/v1/${u}:signBlob`, c = {
        delegates: this.delegates,
        payload: Buffer.from(l).toString("base64")
      };
      return (await this.sourceClient.request({
        ...i.RETRY_CONFIG,
        url: d,
        data: c,
        method: "POST"
      })).data;
    }
    /** The service account email to be impersonated. */
    getTargetPrincipal() {
      return this.targetPrincipal;
    }
    /**
     * Refreshes the access token.
     */
    async refreshToken() {
      var l, u, d, c, f, h;
      try {
        await this.sourceClient.getAccessToken();
        const p = "projects/-/serviceAccounts/" + this.targetPrincipal, m = `${this.endpoint}/v1/${p}:generateAccessToken`, v = {
          delegates: this.delegates,
          scope: this.targetScopes,
          lifetime: this.lifetime + "s"
        }, y = await this.sourceClient.request({
          ...i.RETRY_CONFIG,
          url: m,
          data: v,
          method: "POST"
        }), _ = y.data;
        return this.credentials.access_token = _.accessToken, this.credentials.expiry_date = Date.parse(_.expireTime), {
          tokens: this.credentials,
          res: y
        };
      } catch (p) {
        if (!(p instanceof Error))
          throw p;
        let m = 0, v = "";
        throw p instanceof e.GaxiosError && (m = (d = (u = (l = p == null ? void 0 : p.response) == null ? void 0 : l.data) == null ? void 0 : u.error) == null ? void 0 : d.status, v = (h = (f = (c = p == null ? void 0 : p.response) == null ? void 0 : c.data) == null ? void 0 : f.error) == null ? void 0 : h.message), m && v ? (p.message = `${m}: unable to impersonate: ${v}`, p) : (p.message = `unable to impersonate: ${p}`, p);
      }
    }
    /**
     * Generates an OpenID Connect ID token for a service account.
     *
     * {@link https://cloud.google.com/iam/docs/reference/credentials/rest/v1/projects.serviceAccounts/generateIdToken Reference Documentation}
     *
     * @param targetAudience the audience for the fetched ID token.
     * @param options the for the request
     * @return an OpenID Connect ID token
     */
    async fetchIdToken(l, u) {
      await this.sourceClient.getAccessToken();
      const d = `projects/-/serviceAccounts/${this.targetPrincipal}`, c = `${this.endpoint}/v1/${d}:generateIdToken`, f = {
        delegates: this.delegates,
        audience: l,
        includeEmail: (u == null ? void 0 : u.includeEmail) ?? !0,
        useEmailAzp: (u == null ? void 0 : u.includeEmail) ?? !0
      };
      return (await this.sourceClient.request({
        ...i.RETRY_CONFIG,
        url: c,
        data: f,
        method: "POST"
      })).data.token;
    }
  }
  return Qe.Impersonated = i, Qe;
}
var Gt = {}, On = {}, Ot = {}, dt = {}, ao;
function As() {
  var r, l;
  if (ao) return dt;
  ao = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.OAuthClientAuthHandler = void 0, dt.getErrorFromOAuthErrorResponse = o;
  const t = Ee(), e = mn(), n = ["PUT", "POST", "PATCH"];
  class i {
    /**
     * Instantiates an OAuth client authentication handler.
     * @param options The OAuth Client Auth Handler instance options. Passing an `ClientAuthentication` directly is **@DEPRECATED**.
     */
    constructor(d) {
      ye(this, r, (0, e.createCrypto)());
      ye(this, l);
      V(this, "transporter");
      d && "clientId" in d ? (Ne(this, l, d), this.transporter = new t.Gaxios()) : (Ne(this, l, d == null ? void 0 : d.clientAuthentication), this.transporter = (d == null ? void 0 : d.transporter) || new t.Gaxios());
    }
    /**
     * Applies client authentication on the OAuth request's headers or POST
     * body but does not process the request.
     * @param opts The GaxiosOptions whose headers or data are to be modified
     *   depending on the client authentication mechanism to be used.
     * @param bearerToken The optional bearer token to use for authentication.
     *   When this is used, no client authentication credentials are needed.
     */
    applyClientAuthenticationOptions(d, c) {
      d.headers = t.Gaxios.mergeHeaders(d.headers), this.injectAuthenticatedHeaders(d, c), c || this.injectAuthenticatedRequestBody(d);
    }
    /**
     * Applies client authentication on the request's header if either
     * basic authentication or bearer token authentication is selected.
     *
     * @param opts The GaxiosOptions whose headers or data are to be modified
     *   depending on the client authentication mechanism to be used.
     * @param bearerToken The optional bearer token to use for authentication.
     *   When this is used, no client authentication credentials are needed.
     */
    injectAuthenticatedHeaders(d, c) {
      var f;
      if (c)
        d.headers = t.Gaxios.mergeHeaders(d.headers, {
          authorization: `Bearer ${c}`
        });
      else if (((f = se(this, l)) == null ? void 0 : f.confidentialClientType) === "basic") {
        d.headers = t.Gaxios.mergeHeaders(d.headers);
        const h = se(this, l).clientId, p = se(this, l).clientSecret || "", m = se(this, r).encodeBase64StringUtf8(`${h}:${p}`);
        t.Gaxios.mergeHeaders(d.headers, {
          authorization: `Basic ${m}`
        });
      }
    }
    /**
     * Applies client authentication on the request's body if request-body
     * client authentication is selected.
     *
     * @param opts The GaxiosOptions whose headers or data are to be modified
     *   depending on the client authentication mechanism to be used.
     */
    injectAuthenticatedRequestBody(d) {
      var c;
      if (((c = se(this, l)) == null ? void 0 : c.confidentialClientType) === "request-body") {
        const f = (d.method || "GET").toUpperCase();
        if (!n.includes(f))
          throw new Error(`${f} HTTP method does not support ${se(this, l).confidentialClientType} client authentication`);
        const p = new Headers(d.headers).get("content-type");
        if (p != null && p.startsWith("application/x-www-form-urlencoded") || d.data instanceof URLSearchParams) {
          const m = new URLSearchParams(d.data ?? "");
          m.append("client_id", se(this, l).clientId), m.append("client_secret", se(this, l).clientSecret || ""), d.data = m;
        } else if (p != null && p.startsWith("application/json"))
          d.data = d.data || {}, Object.assign(d.data, {
            client_id: se(this, l).clientId,
            client_secret: se(this, l).clientSecret || ""
          });
        else
          throw new Error(`${p} content-types are not supported with ${se(this, l).confidentialClientType} client authentication`);
      }
    }
    /**
     * Retry config for Auth-related requests.
     *
     * @remarks
     *
     * This is not a part of the default {@link AuthClient.transporter transporter/gaxios}
     * config as some downstream APIs would prefer if customers explicitly enable retries,
     * such as GCS.
     */
    static get RETRY_CONFIG() {
      return {
        retry: !0,
        retryConfig: {
          httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
        }
      };
    }
  }
  r = new WeakMap(), l = new WeakMap(), dt.OAuthClientAuthHandler = i;
  function o(u, d) {
    const c = u.error, f = u.error_description, h = u.error_uri;
    let p = `Error code ${c}`;
    typeof f < "u" && (p += `: ${f}`), typeof h < "u" && (p += ` - ${h}`);
    const m = new Error(p);
    if (d) {
      const v = Object.keys(d);
      d.stack && v.push("stack"), v.forEach((y) => {
        y !== "message" && Object.defineProperty(m, y, {
          value: d[y],
          writable: !1,
          enumerable: !0
        });
      });
    }
    return m;
  }
  return dt;
}
var lo;
function ri() {
  var r;
  if (lo) return Ot;
  lo = 1, Object.defineProperty(Ot, "__esModule", { value: !0 }), Ot.StsCredentials = void 0;
  const t = Ee(), e = Re(), n = As(), i = be(), l = class l extends n.OAuthClientAuthHandler {
    /**
     * Initializes an STS credentials instance.
     *
     * @param options The STS credentials instance options. Passing an `tokenExchangeEndpoint` directly is **@DEPRECATED**.
     * @param clientAuthentication **@DEPRECATED**. Provide a {@link StsCredentialsConstructionOptions `StsCredentialsConstructionOptions`} object in the first parameter instead.
     */
    constructor(c = {
      tokenExchangeEndpoint: ""
    }, f) {
      (typeof c != "object" || c instanceof URL) && (c = {
        tokenExchangeEndpoint: c,
        clientAuthentication: f
      });
      super(c);
      ye(this, r);
      Ne(this, r, c.tokenExchangeEndpoint);
    }
    /**
     * Exchanges the provided token for another type of token based on the
     * rfc8693 spec.
     * @param stsCredentialsOptions The token exchange options used to populate
     *   the token exchange request.
     * @param additionalHeaders Optional additional headers to pass along the
     *   request.
     * @param options Optional additional GCP-specific non-spec defined options
     *   to send with the request.
     *   Example: `&options=${encodeUriComponent(JSON.stringified(options))}`
     * @return A promise that resolves with the token exchange response containing
     *   the requested token and its expiration time.
     */
    async exchangeToken(c, f, h) {
      var v, y, _;
      const p = {
        grant_type: c.grantType,
        resource: c.resource,
        audience: c.audience,
        scope: (v = c.scope) == null ? void 0 : v.join(" "),
        requested_token_type: c.requestedTokenType,
        subject_token: c.subjectToken,
        subject_token_type: c.subjectTokenType,
        actor_token: (y = c.actingParty) == null ? void 0 : y.actorToken,
        actor_token_type: (_ = c.actingParty) == null ? void 0 : _.actorTokenType,
        // Non-standard GCP-specific options.
        options: h && JSON.stringify(h)
      }, m = {
        ...l.RETRY_CONFIG,
        url: se(this, r).toString(),
        method: "POST",
        headers: f,
        data: new URLSearchParams((0, i.removeUndefinedValuesInObject)(p))
      };
      e.AuthClient.setMethodName(m, "exchangeToken"), this.applyClientAuthenticationOptions(m);
      try {
        const C = await this.transporter.request(m), A = C.data;
        return A.res = C, A;
      } catch (C) {
        throw C instanceof t.GaxiosError && C.response ? (0, n.getErrorFromOAuthErrorResponse)(
          C.response.data,
          // Preserve other fields from the original error.
          C
        ) : C;
      }
    }
  };
  r = new WeakMap();
  let o = l;
  return Ot.StsCredentials = o, Ot;
}
var uo;
function ot() {
  return uo || (uo = 1, (function(t) {
    var v, y, Ss;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.BaseExternalAccountClient = t.CLOUD_RESOURCE_MANAGER = t.EXTERNAL_ACCOUNT_TYPE = t.EXPIRATION_TIME_OFFSET = void 0;
    const e = Ee(), n = Ve, i = Re(), o = ri(), r = be(), l = cs(), u = "urn:ietf:params:oauth:grant-type:token-exchange", d = "urn:ietf:params:oauth:token-type:access_token", c = "https://www.googleapis.com/auth/cloud-platform", f = 3600;
    t.EXPIRATION_TIME_OFFSET = 300 * 1e3, t.EXTERNAL_ACCOUNT_TYPE = "external_account", t.CLOUD_RESOURCE_MANAGER = "https://cloudresourcemanager.googleapis.com/v1/projects/";
    const h = "//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+", p = "https://sts.{universeDomain}/v1/token", C = class C extends i.AuthClient {
      /**
       * Instantiate a BaseExternalAccountClient instance using the provided JSON
       * object loaded from an external account credentials file.
       * @param options The external account options object typically loaded
       *   from the external account JSON credential file. The camelCased options
       *   are aliases for the snake_cased options.
       */
      constructor(b) {
        super(b);
        ye(this, y);
        /**
         * OAuth scopes for the GCP access token to use. When not provided,
         * the default https://www.googleapis.com/auth/cloud-platform is
         * used.
         */
        V(this, "scopes");
        V(this, "projectNumber");
        V(this, "audience");
        V(this, "subjectTokenType");
        V(this, "stsCredential");
        V(this, "clientAuth");
        V(this, "credentialSourceType");
        V(this, "cachedAccessToken");
        V(this, "serviceAccountImpersonationUrl");
        V(this, "serviceAccountImpersonationLifetime");
        V(this, "workforcePoolUserProject");
        V(this, "configLifetimeRequested");
        V(this, "tokenUrl");
        /**
         * @example
         * ```ts
         * new URL('https://cloudresourcemanager.googleapis.com/v1/projects/');
         * ```
         */
        V(this, "cloudResourceManagerURL");
        V(this, "supplierContext");
        /**
         * A pending access token request. Used for concurrent calls.
         */
        ye(this, v, null);
        const N = (0, r.originalOrCamelOptions)(b), M = N.get("type");
        if (M && M !== t.EXTERNAL_ACCOUNT_TYPE)
          throw new Error(`Expected "${t.EXTERNAL_ACCOUNT_TYPE}" type but received "${b.type}"`);
        const w = N.get("client_id"), D = N.get("client_secret");
        this.tokenUrl = N.get("token_url") ?? p.replace("{universeDomain}", this.universeDomain);
        const g = N.get("subject_token_type"), E = N.get("workforce_pool_user_project"), G = N.get("service_account_impersonation_url"), H = N.get("service_account_impersonation"), q = (0, r.originalOrCamelOptions)(H).get("token_lifetime_seconds");
        this.cloudResourceManagerURL = new URL(N.get("cloud_resource_manager_url") || `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`), w && (this.clientAuth = {
          confidentialClientType: "basic",
          clientId: w,
          clientSecret: D
        }), this.stsCredential = new o.StsCredentials({
          tokenExchangeEndpoint: this.tokenUrl,
          clientAuthentication: this.clientAuth
        }), this.scopes = N.get("scopes") || [c], this.cachedAccessToken = null, this.audience = N.get("audience"), this.subjectTokenType = g, this.workforcePoolUserProject = E;
        const J = new RegExp(h);
        if (this.workforcePoolUserProject && !this.audience.match(J))
          throw new Error("workforcePoolUserProject should not be set for non-workforce pool credentials.");
        this.serviceAccountImpersonationUrl = G, this.serviceAccountImpersonationLifetime = q, this.serviceAccountImpersonationLifetime ? this.configLifetimeRequested = !0 : (this.configLifetimeRequested = !1, this.serviceAccountImpersonationLifetime = f), this.projectNumber = this.getProjectNumber(this.audience), this.supplierContext = {
          audience: this.audience,
          subjectTokenType: this.subjectTokenType,
          transporter: this.transporter
        };
      }
      /** The service account email to be impersonated, if available. */
      getServiceAccountEmail() {
        var b;
        if (this.serviceAccountImpersonationUrl) {
          if (this.serviceAccountImpersonationUrl.length > 256)
            throw new RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
          const M = /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/.exec(this.serviceAccountImpersonationUrl);
          return ((b = M == null ? void 0 : M.groups) == null ? void 0 : b.email) || null;
        }
        return null;
      }
      /**
       * Provides a mechanism to inject GCP access tokens directly.
       * When the provided credential expires, a new credential, using the
       * external account options, is retrieved.
       * @param credentials The Credentials object to set on the current client.
       */
      setCredentials(b) {
        super.setCredentials(b), this.cachedAccessToken = b;
      }
      /**
       * @return A promise that resolves with the current GCP access token
       *   response. If the current credential is expired, a new one is retrieved.
       */
      async getAccessToken() {
        return (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) && await this.refreshAccessTokenAsync(), {
          token: this.cachedAccessToken.access_token,
          res: this.cachedAccessToken.res
        };
      }
      /**
       * The main authentication interface. It takes an optional url which when
       * present is the endpoint being accessed, and returns a Promise which
       * resolves with authorization header fields.
       *
       * The result has the form:
       * { authorization: 'Bearer <access_token_value>' }
       */
      async getRequestHeaders() {
        const b = await this.getAccessToken(), N = new Headers({
          authorization: `Bearer ${b.token}`
        });
        return this.addSharedMetadataHeaders(N);
      }
      request(b, N) {
        if (N)
          this.requestAsync(b).then((M) => N(null, M), (M) => N(M, M.response));
        else
          return this.requestAsync(b);
      }
      /**
       * @return A promise that resolves with the project ID corresponding to the
       *   current workload identity pool or current workforce pool if
       *   determinable. For workforce pool credential, it returns the project ID
       *   corresponding to the workforcePoolUserProject.
       *   This is introduced to match the current pattern of using the Auth
       *   library:
       *   const projectId = await auth.getProjectId();
       *   const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
       *   const res = await client.request({ url });
       *   The resource may not have permission
       *   (resourcemanager.projects.get) to call this API or the required
       *   scopes may not be selected:
       *   https://cloud.google.com/resource-manager/reference/rest/v1/projects/get#authorization-scopes
       */
      async getProjectId() {
        const b = this.projectNumber || this.workforcePoolUserProject;
        if (this.projectId)
          return this.projectId;
        if (b) {
          const N = await this.getRequestHeaders(), M = {
            ...C.RETRY_CONFIG,
            headers: N,
            url: `${this.cloudResourceManagerURL.toString()}${b}`
          };
          i.AuthClient.setMethodName(M, "getProjectId");
          const w = await this.transporter.request(M);
          return this.projectId = w.data.projectId, this.projectId;
        }
        return null;
      }
      /**
       * Authenticates the provided HTTP request, processes it and resolves with the
       * returned response.
       * @param opts The HTTP request options.
       * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure.
       * @return A promise that resolves with the successful response.
       */
      async requestAsync(b, N = !1) {
        let M;
        try {
          const w = await this.getRequestHeaders();
          b.headers = e.Gaxios.mergeHeaders(b.headers), this.addUserProjectAndAuthHeaders(b.headers, w), M = await this.transporter.request(b);
        } catch (w) {
          const D = w.response;
          if (D) {
            const g = D.status, E = D.config.data instanceof n.Readable;
            if (!N && (g === 401 || g === 403) && !E && this.forceRefreshOnFailure)
              return await this.refreshAccessTokenAsync(), await this.requestAsync(b, !0);
          }
          throw w;
        }
        return M;
      }
      /**
       * Forces token refresh, even if unexpired tokens are currently cached.
       * External credentials are exchanged for GCP access tokens via the token
       * exchange endpoint and other settings provided in the client options
       * object.
       * If the service_account_impersonation_url is provided, an additional
       * step to exchange the external account GCP access token for a service
       * account impersonated token is performed.
       * @return A promise that resolves with the fresh GCP access tokens.
       */
      async refreshAccessTokenAsync() {
        Ne(this, v, se(this, v) || ce(this, y, Ss).call(this));
        try {
          return await se(this, v);
        } finally {
          Ne(this, v, null);
        }
      }
      /**
       * Returns the workload identity pool project number if it is determinable
       * from the audience resource name.
       * @param audience The STS audience used to determine the project number.
       * @return The project number associated with the workload identity pool, if
       *   this can be determined from the STS audience field. Otherwise, null is
       *   returned.
       */
      getProjectNumber(b) {
        const N = b.match(/\/projects\/([^/]+)/);
        return N ? N[1] : null;
      }
      /**
       * Exchanges an external account GCP access token for a service
       * account impersonated access token using iamcredentials
       * GenerateAccessToken API.
       * @param token The access token to exchange for a service account access
       *   token.
       * @return A promise that resolves with the service account impersonated
       *   credentials response.
       */
      async getImpersonatedAccessToken(b) {
        const N = {
          ...C.RETRY_CONFIG,
          url: this.serviceAccountImpersonationUrl,
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${b}`
          },
          data: {
            scope: this.getScopesArray(),
            lifetime: this.serviceAccountImpersonationLifetime + "s"
          }
        };
        i.AuthClient.setMethodName(N, "getImpersonatedAccessToken");
        const M = await this.transporter.request(N), w = M.data;
        return {
          access_token: w.accessToken,
          // Convert from ISO format to timestamp.
          expiry_date: new Date(w.expireTime).getTime(),
          res: M
        };
      }
      /**
       * Returns whether the provided credentials are expired or not.
       * If there is no expiry time, assumes the token is not expired or expiring.
       * @param accessToken The credentials to check for expiration.
       * @return Whether the credentials are expired or not.
       */
      isExpired(b) {
        const N = (/* @__PURE__ */ new Date()).getTime();
        return b.expiry_date ? N >= b.expiry_date - this.eagerRefreshThresholdMillis : !1;
      }
      /**
       * @return The list of scopes for the requested GCP access token.
       */
      getScopesArray() {
        return typeof this.scopes == "string" ? [this.scopes] : this.scopes || [c];
      }
      getMetricsHeaderValue() {
        const b = process.version.replace(/^v/, ""), N = this.serviceAccountImpersonationUrl !== void 0, M = this.credentialSourceType ? this.credentialSourceType : "unknown";
        return `gl-node/${b} auth/${l.pkg.version} google-byoid-sdk source/${M} sa-impersonation/${N} config-lifetime/${this.configLifetimeRequested}`;
      }
      getTokenUrl() {
        return this.tokenUrl;
      }
    };
    v = new WeakMap(), y = new WeakSet(), Ss = async function() {
      const b = await this.retrieveSubjectToken(), N = {
        grantType: u,
        audience: this.audience,
        requestedTokenType: d,
        subjectToken: b,
        subjectTokenType: this.subjectTokenType,
        // generateAccessToken requires the provided access token to have
        // scopes:
        // https://www.googleapis.com/auth/iam or
        // https://www.googleapis.com/auth/cloud-platform
        // The new service account access token scopes will match the user
        // provided ones.
        scope: this.serviceAccountImpersonationUrl ? [c] : this.getScopesArray()
      }, M = !this.clientAuth && this.workforcePoolUserProject ? { userProject: this.workforcePoolUserProject } : void 0, w = new Headers({
        "x-goog-api-client": this.getMetricsHeaderValue()
      }), D = await this.stsCredential.exchangeToken(N, w, M);
      return this.serviceAccountImpersonationUrl ? this.cachedAccessToken = await this.getImpersonatedAccessToken(D.access_token) : D.expires_in ? this.cachedAccessToken = {
        access_token: D.access_token,
        expiry_date: (/* @__PURE__ */ new Date()).getTime() + D.expires_in * 1e3,
        res: D.res
      } : this.cachedAccessToken = {
        access_token: D.access_token,
        res: D.res
      }, this.credentials = {}, Object.assign(this.credentials, this.cachedAccessToken), delete this.credentials.res, this.emit("tokens", {
        refresh_token: null,
        expiry_date: this.cachedAccessToken.expiry_date,
        access_token: this.cachedAccessToken.access_token,
        token_type: "Bearer",
        id_token: null
      }), this.cachedAccessToken;
    };
    let m = C;
    t.BaseExternalAccountClient = m;
  })(On)), On;
}
var qt = {}, Bt = {}, co;
function El() {
  if (co) return Bt;
  co = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.FileSubjectTokenSupplier = void 0;
  const t = it, e = nt, n = (0, t.promisify)(e.readFile ?? (() => {
  })), i = (0, t.promisify)(e.realpath ?? (() => {
  })), o = (0, t.promisify)(e.lstat ?? (() => {
  }));
  class r {
    /**
     * Instantiates a new file based subject token supplier.
     * @param opts The file subject token supplier options to build the supplier
     *   with.
     */
    constructor(u) {
      V(this, "filePath");
      V(this, "formatType");
      V(this, "subjectTokenFieldName");
      this.filePath = u.filePath, this.formatType = u.formatType, this.subjectTokenFieldName = u.subjectTokenFieldName;
    }
    /**
     * Returns the subject token stored at the file specified in the constructor.
     * @param context {@link ExternalAccountSupplierContext} from the calling
     *   {@link IdentityPoolClient}, contains the requested audience and subject
     *   token type for the external account identity. Not used.
     */
    async getSubjectToken() {
      let u = this.filePath;
      try {
        if (u = await i(u), !(await o(u)).isFile())
          throw new Error();
      } catch (f) {
        throw f instanceof Error && (f.message = `The file at ${u} does not exist, or it is not a file. ${f.message}`), f;
      }
      let d;
      const c = await n(u, { encoding: "utf8" });
      if (this.formatType === "text" ? d = c : this.formatType === "json" && this.subjectTokenFieldName && (d = JSON.parse(c)[this.subjectTokenFieldName]), !d)
        throw new Error("Unable to parse the subject_token from the credential_source file");
      return d;
    }
  }
  return Bt.FileSubjectTokenSupplier = r, Bt;
}
var Vt = {}, fo;
function Tl() {
  if (fo) return Vt;
  fo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.UrlSubjectTokenSupplier = void 0;
  const t = Re();
  class e {
    /**
     * Instantiates a URL subject token supplier.
     * @param opts The URL subject token supplier options to build the supplier with.
     */
    constructor(i) {
      V(this, "url");
      V(this, "headers");
      V(this, "formatType");
      V(this, "subjectTokenFieldName");
      V(this, "additionalGaxiosOptions");
      this.url = i.url, this.formatType = i.formatType, this.subjectTokenFieldName = i.subjectTokenFieldName, this.headers = i.headers, this.additionalGaxiosOptions = i.additionalGaxiosOptions;
    }
    /**
     * Sends a GET request to the URL provided in the constructor and resolves
     * with the returned external subject token.
     * @param context {@link ExternalAccountSupplierContext} from the calling
     *   {@link IdentityPoolClient}, contains the requested audience and subject
     *   token type for the external account identity. Not used.
     */
    async getSubjectToken(i) {
      const o = {
        ...this.additionalGaxiosOptions,
        url: this.url,
        method: "GET",
        headers: this.headers
      };
      t.AuthClient.setMethodName(o, "getSubjectToken");
      let r;
      if (this.formatType === "text" ? r = (await i.transporter.request(o)).data : this.formatType === "json" && this.subjectTokenFieldName && (r = (await i.transporter.request(o)).data[this.subjectTokenFieldName]), !r)
        throw new Error("Unable to parse the subject_token from the credential_source URL");
      return r;
    }
  }
  return Vt.UrlSubjectTokenSupplier = e, Vt;
}
var qn = {}, ho;
function Cl() {
  return ho || (ho = 1, (function(t) {
    var d, ws, Is, Rs, Ps;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.CertificateSubjectTokenSupplier = t.InvalidConfigurationError = t.CertificateSourceUnavailableError = t.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = void 0;
    const e = be(), n = nt, i = oi, o = zr;
    t.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = "GOOGLE_API_CERTIFICATE_CONFIG";
    class r extends Error {
      constructor(v) {
        super(v), this.name = "CertificateSourceUnavailableError";
      }
    }
    t.CertificateSourceUnavailableError = r;
    class l extends Error {
      constructor(v) {
        super(v), this.name = "InvalidConfigurationError";
      }
    }
    t.InvalidConfigurationError = l;
    class u {
      /**
       * Initializes a new instance of the CertificateSubjectTokenSupplier.
       * @param opts The configuration options for the supplier.
       */
      constructor(v) {
        ye(this, d);
        V(this, "certificateConfigPath");
        V(this, "trustChainPath");
        V(this, "cert");
        V(this, "key");
        if (!v.useDefaultCertificateConfig && !v.certificateConfigLocation)
          throw new l("Either `useDefaultCertificateConfig` must be true or a `certificateConfigLocation` must be provided.");
        if (v.useDefaultCertificateConfig && v.certificateConfigLocation)
          throw new l("Both `useDefaultCertificateConfig` and `certificateConfigLocation` cannot be provided.");
        this.trustChainPath = v.trustChainPath, this.certificateConfigPath = v.certificateConfigLocation ?? "";
      }
      /**
       * Creates an HTTPS agent configured with the client certificate and private key for mTLS.
       * @returns An mTLS-configured https.Agent.
       */
      async createMtlsHttpsAgent() {
        if (!this.key || !this.cert)
          throw new l("Cannot create mTLS Agent with missing certificate or key");
        return new o.Agent({ key: this.key, cert: this.cert });
      }
      /**
       * Constructs the subject token, which is the base64-encoded certificate chain.
       * @returns A promise that resolves with the subject token.
       */
      async getSubjectToken() {
        this.certificateConfigPath = await ce(this, d, ws).call(this);
        const { certPath: v, keyPath: y } = await ce(this, d, Is).call(this);
        return { cert: this.cert, key: this.key } = await ce(this, d, Rs).call(this, v, y), await ce(this, d, Ps).call(this, this.cert);
      }
    }
    d = new WeakSet(), ws = async function() {
      const v = this.certificateConfigPath;
      if (v) {
        if (await (0, e.isValidFile)(v))
          return v;
        throw new r(`Provided certificate config path is invalid: ${v}`);
      }
      const y = process.env[t.CERTIFICATE_CONFIGURATION_ENV_VARIABLE];
      if (y) {
        if (await (0, e.isValidFile)(y))
          return y;
        throw new r(`Path from environment variable "${t.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" is invalid: ${y}`);
      }
      const _ = (0, e.getWellKnownCertificateConfigFileLocation)();
      if (await (0, e.isValidFile)(_))
        return _;
      throw new r(`Could not find certificate configuration file. Searched override path, the "${t.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" env var, and the gcloud path (${_}).`);
    }, Is = async function() {
      var _, C, A, k;
      const v = this.certificateConfigPath;
      let y;
      try {
        y = await n.promises.readFile(v, "utf8");
      } catch {
        throw new r(`Failed to read certificate config file at: ${v}`);
      }
      try {
        const b = JSON.parse(y), N = (C = (_ = b == null ? void 0 : b.cert_configs) == null ? void 0 : _.workload) == null ? void 0 : C.cert_path, M = (k = (A = b == null ? void 0 : b.cert_configs) == null ? void 0 : A.workload) == null ? void 0 : k.key_path;
        if (!N || !M)
          throw new l(`Certificate config file (${v}) is missing required "cert_path" or "key_path" in the workload config.`);
        return { certPath: N, keyPath: M };
      } catch (b) {
        throw b instanceof l ? b : new l(`Failed to parse certificate config from ${v}: ${b.message}`);
      }
    }, Rs = async function(v, y) {
      let _, C;
      try {
        _ = await n.promises.readFile(v), new i.X509Certificate(_);
      } catch (A) {
        const k = A instanceof Error ? A.message : String(A);
        throw new r(`Failed to read certificate file at ${v}: ${k}`);
      }
      try {
        C = await n.promises.readFile(y), (0, i.createPrivateKey)(C);
      } catch (A) {
        const k = A instanceof Error ? A.message : String(A);
        throw new r(`Failed to read private key file at ${y}: ${k}`);
      }
      return { cert: _, key: C };
    }, Ps = async function(v) {
      const y = new i.X509Certificate(v);
      if (!this.trustChainPath)
        return JSON.stringify([y.raw.toString("base64")]);
      try {
        const A = ((await n.promises.readFile(this.trustChainPath, "utf8")).match(/-----BEGIN CERTIFICATE-----[^-]+-----END CERTIFICATE-----/g) ?? []).map((N, M) => {
          try {
            return new i.X509Certificate(N);
          } catch (w) {
            const D = w instanceof Error ? w.message : String(w);
            throw new l(`Failed to parse certificate at index ${M} in trust chain file ${this.trustChainPath}: ${D}`);
          }
        }), k = A.findIndex((N) => y.raw.equals(N.raw));
        let b;
        if (k === -1)
          b = [y, ...A];
        else if (k === 0)
          b = A;
        else
          throw new l(`Leaf certificate exists in the trust chain but is not the first entry (found at index ${k}).`);
        return JSON.stringify(b.map((N) => N.raw.toString("base64")));
      } catch (_) {
        if (_ instanceof l)
          throw _;
        const C = _ instanceof Error ? _.message : String(_);
        throw new r(`Failed to process certificate chain from ${this.trustChainPath}: ${C}`);
      }
    }, t.CertificateSubjectTokenSupplier = u;
  })(qn)), qn;
}
var po;
function Ns() {
  if (po) return qt;
  po = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.IdentityPoolClient = void 0;
  const t = ot(), e = be(), n = El(), i = Tl(), o = Cl(), r = ri(), l = Ee();
  class u extends t.BaseExternalAccountClient {
    /**
     * Instantiate an IdentityPoolClient instance using the provided JSON
     * object loaded from an external account credentials file.
     * An error is thrown if the credential is not a valid file-sourced or
     * url-sourced credential or a workforce pool user project is provided
     * with a non workforce audience.
     * @param options The external account options object typically loaded
     *   from the external account JSON credential file. The camelCased options
     *   are aliases for the snake_cased options.
     */
    constructor(f) {
      super(f);
      V(this, "subjectTokenSupplier");
      const h = (0, e.originalOrCamelOptions)(f), p = h.get("credential_source"), m = h.get("subject_token_supplier");
      if (!p && !m)
        throw new Error("A credential source or subject token supplier must be specified.");
      if (p && m)
        throw new Error("Only one of credential source or subject token supplier can be specified.");
      if (m)
        this.subjectTokenSupplier = m, this.credentialSourceType = "programmatic";
      else {
        const v = (0, e.originalOrCamelOptions)(p), y = (0, e.originalOrCamelOptions)(v.get("format")), _ = y.get("type") || "text", C = y.get("subject_token_field_name");
        if (_ !== "json" && _ !== "text")
          throw new Error(`Invalid credential_source format "${_}"`);
        if (_ === "json" && !C)
          throw new Error("Missing subject_token_field_name for JSON credential_source format");
        const A = v.get("file"), k = v.get("url"), b = v.get("certificate"), N = v.get("headers");
        if (A && k || k && b || A && b)
          throw new Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
        if (A)
          this.credentialSourceType = "file", this.subjectTokenSupplier = new n.FileSubjectTokenSupplier({
            filePath: A,
            formatType: _,
            subjectTokenFieldName: C
          });
        else if (k)
          this.credentialSourceType = "url", this.subjectTokenSupplier = new i.UrlSubjectTokenSupplier({
            url: k,
            formatType: _,
            subjectTokenFieldName: C,
            headers: N,
            additionalGaxiosOptions: u.RETRY_CONFIG
          });
        else if (b) {
          this.credentialSourceType = "certificate";
          const M = new o.CertificateSubjectTokenSupplier({
            useDefaultCertificateConfig: b.use_default_certificate_config,
            certificateConfigLocation: b.certificate_config_location,
            trustChainPath: b.trust_chain_path
          });
          this.subjectTokenSupplier = M;
        } else
          throw new Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
      }
    }
    /**
     * Triggered when a external subject token is needed to be exchanged for a GCP
     * access token via GCP STS endpoint. Gets a subject token by calling
     * the configured {@link SubjectTokenSupplier}
     * @return A promise that resolves with the external subject token.
     */
    async retrieveSubjectToken() {
      const f = await this.subjectTokenSupplier.getSubjectToken(this.supplierContext);
      if (this.subjectTokenSupplier instanceof o.CertificateSubjectTokenSupplier) {
        const h = await this.subjectTokenSupplier.createMtlsHttpsAgent();
        this.stsCredential = new r.StsCredentials({
          tokenExchangeEndpoint: this.getTokenUrl(),
          clientAuthentication: this.clientAuth,
          transporter: new l.Gaxios({ agent: h })
        }), this.transporter = new l.Gaxios({
          ...this.transporter.defaults || {},
          agent: h
        });
      }
      return f;
    }
  }
  return qt.IdentityPoolClient = u, qt;
}
var Ht = {}, $t = {}, go;
function ks() {
  if (go) return $t;
  go = 1, Object.defineProperty($t, "__esModule", { value: !0 }), $t.AwsRequestSigner = void 0;
  const t = Ee(), e = mn(), n = "AWS4-HMAC-SHA256", i = "aws4_request";
  class o {
    /**
     * Instantiates an AWS API request signer used to send authenticated signed
     * requests to AWS APIs based on the AWS Signature Version 4 signing process.
     * This also provides a mechanism to generate the signed request without
     * sending it.
     * @param getCredentials A mechanism to retrieve AWS security credentials
     *   when needed.
     * @param region The AWS region to use.
     */
    constructor(c, f) {
      V(this, "getCredentials");
      V(this, "region");
      V(this, "crypto");
      this.getCredentials = c, this.region = f, this.crypto = (0, e.createCrypto)();
    }
    /**
     * Generates the signed request for the provided HTTP request for calling
     * an AWS API. This follows the steps described at:
     * https://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html
     * @param amzOptions The AWS request options that need to be signed.
     * @return A promise that resolves with the GaxiosOptions containing the
     *   signed HTTP request parameters.
     */
    async getRequestOptions(c) {
      if (!c.url)
        throw new RangeError('"url" is required in "amzOptions"');
      const f = typeof c.data == "object" ? JSON.stringify(c.data) : c.data, h = c.url, p = c.method || "GET", m = c.body || f, v = c.headers, y = await this.getCredentials(), _ = new URL(h);
      if (typeof m != "string" && m !== void 0)
        throw new TypeError(`'requestPayload' is expected to be a string if provided. Got: ${m}`);
      const C = await u({
        crypto: this.crypto,
        host: _.host,
        canonicalUri: _.pathname,
        canonicalQuerystring: _.search.slice(1),
        method: p,
        region: this.region,
        securityCredentials: y,
        requestPayload: m,
        additionalAmzHeaders: v
      }), A = t.Gaxios.mergeHeaders(
        // Add x-amz-date if available.
        C.amzDate ? { "x-amz-date": C.amzDate } : {},
        {
          authorization: C.authorizationHeader,
          host: _.host
        },
        v || {}
      );
      y.token && t.Gaxios.mergeHeaders(A, {
        "x-amz-security-token": y.token
      });
      const k = {
        url: h,
        method: p,
        headers: A
      };
      return m !== void 0 && (k.body = m), k;
    }
  }
  $t.AwsRequestSigner = o;
  async function r(d, c, f) {
    return await d.signWithHmacSha256(c, f);
  }
  async function l(d, c, f, h, p) {
    const m = await r(d, `AWS4${c}`, f), v = await r(d, m, h), y = await r(d, v, p);
    return await r(d, y, "aws4_request");
  }
  async function u(d) {
    const c = t.Gaxios.mergeHeaders(d.additionalAmzHeaders), f = d.requestPayload || "", h = d.host.split(".")[0], p = /* @__PURE__ */ new Date(), m = p.toISOString().replace(/[-:]/g, "").replace(/\.[0-9]+/, ""), v = p.toISOString().replace(/[-]/g, "").replace(/T.*/, "");
    d.securityCredentials.token && c.set("x-amz-security-token", d.securityCredentials.token);
    const y = t.Gaxios.mergeHeaders(
      {
        host: d.host
      },
      // Previously the date was not fixed with x-amz- and could be provided manually.
      // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-header-value-trim.req
      c.has("date") ? {} : { "x-amz-date": m },
      c
    );
    let _ = "";
    const C = [
      ...y.keys()
    ].sort();
    C.forEach((E) => {
      _ += `${E}:${y.get(E)}
`;
    });
    const A = C.join(";"), k = await d.crypto.sha256DigestHex(f), b = `${d.method.toUpperCase()}
${d.canonicalUri}
${d.canonicalQuerystring}
${_}
${A}
${k}`, N = `${v}/${d.region}/${h}/${i}`, M = `${n}
${m}
${N}
` + await d.crypto.sha256DigestHex(b), w = await l(d.crypto, d.securityCredentials.secretAccessKey, v, d.region, h), D = await r(d.crypto, w, M), g = `${n} Credential=${d.securityCredentials.accessKeyId}/${N}, SignedHeaders=${A}, Signature=${(0, e.fromArrayBufferToHex)(D)}`;
    return {
      // Do not return x-amz-date if date is available.
      amzDate: c.has("date") ? void 0 : m,
      authorizationHeader: g,
      canonicalQuerystring: d.canonicalQuerystring
    };
  }
  return $t;
}
var Jt = {}, mo;
function Al() {
  var n, Kn, Ms, Us, ln, Wn;
  if (mo) return Jt;
  mo = 1, Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.DefaultAwsSecurityCredentialsSupplier = void 0;
  const t = Re();
  class e {
    /**
     * Instantiates a new DefaultAwsSecurityCredentialsSupplier using information
     * from the credential_source stored in the ADC file.
     * @param opts The default aws security credentials supplier options object to
     *   build the supplier with.
     */
    constructor(c) {
      ye(this, n);
      V(this, "regionUrl");
      V(this, "securityCredentialsUrl");
      V(this, "imdsV2SessionTokenUrl");
      V(this, "additionalGaxiosOptions");
      this.regionUrl = c.regionUrl, this.securityCredentialsUrl = c.securityCredentialsUrl, this.imdsV2SessionTokenUrl = c.imdsV2SessionTokenUrl, this.additionalGaxiosOptions = c.additionalGaxiosOptions;
    }
    /**
     * Returns the active AWS region. This first checks to see if the region
     * is available as an environment variable. If it is not, then the supplier
     * will call the region URL.
     * @param context {@link ExternalAccountSupplierContext} from the calling
     *   {@link AwsClient}, contains the requested audience and subject token type
     *   for the external account identity.
     * @return A promise that resolves with the AWS region string.
     */
    async getAwsRegion(c) {
      if (se(this, n, ln))
        return se(this, n, ln);
      const f = new Headers();
      if (!se(this, n, ln) && this.imdsV2SessionTokenUrl && f.set("x-aws-ec2-metadata-token", await ce(this, n, Kn).call(this, c.transporter)), !this.regionUrl)
        throw new RangeError('Unable to determine AWS region due to missing "options.credential_source.region_url"');
      const h = {
        ...this.additionalGaxiosOptions,
        url: this.regionUrl,
        method: "GET",
        headers: f
      };
      t.AuthClient.setMethodName(h, "getAwsRegion");
      const p = await c.transporter.request(h);
      return p.data.substr(0, p.data.length - 1);
    }
    /**
     * Returns AWS security credentials. This first checks to see if the credentials
     * is available as environment variables. If it is not, then the supplier
     * will call the security credentials URL.
     * @param context {@link ExternalAccountSupplierContext} from the calling
     *   {@link AwsClient}, contains the requested audience and subject token type
     *   for the external account identity.
     * @return A promise that resolves with the AWS security credentials.
     */
    async getAwsSecurityCredentials(c) {
      if (se(this, n, Wn))
        return se(this, n, Wn);
      const f = new Headers();
      this.imdsV2SessionTokenUrl && f.set("x-aws-ec2-metadata-token", await ce(this, n, Kn).call(this, c.transporter));
      const h = await ce(this, n, Ms).call(this, f, c.transporter), p = await ce(this, n, Us).call(this, h, f, c.transporter);
      return {
        accessKeyId: p.AccessKeyId,
        secretAccessKey: p.SecretAccessKey,
        token: p.Token
      };
    }
  }
  return n = new WeakSet(), Kn = async function(c) {
    const f = {
      ...this.additionalGaxiosOptions,
      url: this.imdsV2SessionTokenUrl,
      method: "PUT",
      headers: { "x-aws-ec2-metadata-token-ttl-seconds": "300" }
    };
    return t.AuthClient.setMethodName(f, "#getImdsV2SessionToken"), (await c.request(f)).data;
  }, Ms = async function(c, f) {
    if (!this.securityCredentialsUrl)
      throw new Error('Unable to determine AWS role name due to missing "options.credential_source.url"');
    const h = {
      ...this.additionalGaxiosOptions,
      url: this.securityCredentialsUrl,
      method: "GET",
      headers: c
    };
    return t.AuthClient.setMethodName(h, "#getAwsRoleName"), (await f.request(h)).data;
  }, Us = async function(c, f, h) {
    const p = {
      ...this.additionalGaxiosOptions,
      url: `${this.securityCredentialsUrl}/${c}`,
      headers: f
    };
    return t.AuthClient.setMethodName(p, "#retrieveAwsSecurityCredentials"), (await h.request(p)).data;
  }, ln = function() {
    return process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || null;
  }, Wn = function() {
    return process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY ? {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      token: process.env.AWS_SESSION_TOKEN
    } : null;
  }, Jt.DefaultAwsSecurityCredentialsSupplier = e, Jt;
}
var yo;
function Ds() {
  var l;
  if (yo) return Ht;
  yo = 1, Object.defineProperty(Ht, "__esModule", { value: !0 }), Ht.AwsClient = void 0;
  const t = ks(), e = ot(), n = Al(), i = be(), o = Ee(), u = class u extends e.BaseExternalAccountClient {
    /**
     * Instantiates an AwsClient instance using the provided JSON
     * object loaded from an external account credentials file.
     * An error is thrown if the credential is not a valid AWS credential.
     * @param options The external account options object typically loaded
     *   from the external account JSON credential file.
     */
    constructor(f) {
      super(f);
      V(this, "environmentId");
      V(this, "awsSecurityCredentialsSupplier");
      V(this, "regionalCredVerificationUrl");
      V(this, "awsRequestSigner");
      V(this, "region");
      const h = (0, i.originalOrCamelOptions)(f), p = h.get("credential_source"), m = h.get("aws_security_credentials_supplier");
      if (!p && !m)
        throw new Error("A credential source or AWS security credentials supplier must be specified.");
      if (p && m)
        throw new Error("Only one of credential source or AWS security credentials supplier can be specified.");
      if (m)
        this.awsSecurityCredentialsSupplier = m, this.regionalCredVerificationUrl = se(u, l), this.credentialSourceType = "programmatic";
      else {
        const v = (0, i.originalOrCamelOptions)(p);
        this.environmentId = v.get("environment_id");
        const y = v.get("region_url"), _ = v.get("url"), C = v.get("imdsv2_session_token_url");
        this.awsSecurityCredentialsSupplier = new n.DefaultAwsSecurityCredentialsSupplier({
          regionUrl: y,
          securityCredentialsUrl: _,
          imdsV2SessionTokenUrl: C
        }), this.regionalCredVerificationUrl = v.get("regional_cred_verification_url"), this.credentialSourceType = "aws", this.validateEnvironmentId();
      }
      this.awsRequestSigner = null, this.region = "";
    }
    validateEnvironmentId() {
      var h;
      const f = (h = this.environmentId) == null ? void 0 : h.match(/^(aws)(\d+)$/);
      if (!f || !this.regionalCredVerificationUrl)
        throw new Error('No valid AWS "credential_source" provided');
      if (parseInt(f[2], 10) !== 1)
        throw new Error(`aws version "${f[2]}" is not supported in the current build.`);
    }
    /**
     * Triggered when an external subject token is needed to be exchanged for a
     * GCP access token via GCP STS endpoint. This will call the
     * {@link AwsSecurityCredentialsSupplier} to retrieve an AWS region and AWS
     * Security Credentials, then use them to create a signed AWS STS request that
     * can be exchanged for a GCP access token.
     * @return A promise that resolves with the external subject token.
     */
    async retrieveSubjectToken() {
      this.awsRequestSigner || (this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext), this.awsRequestSigner = new t.AwsRequestSigner(async () => this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(this.supplierContext), this.region));
      const f = await this.awsRequestSigner.getRequestOptions({
        ...u.RETRY_CONFIG,
        url: this.regionalCredVerificationUrl.replace("{region}", this.region),
        method: "POST"
      }), h = [];
      return o.Gaxios.mergeHeaders({
        // The full, canonical resource name of the workload identity pool
        // provider, with or without the HTTPS prefix.
        // Including this header as part of the signature is recommended to
        // ensure data integrity.
        "x-goog-cloud-target-resource": this.audience
      }, f.headers).forEach((m, v) => h.push({ key: v, value: m })), encodeURIComponent(JSON.stringify({
        url: f.url,
        method: f.method,
        headers: h
      }));
    }
  };
  l = new WeakMap(), ye(u, l, "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15"), /**
   * @deprecated AWS client no validates the EC2 metadata address.
   **/
  V(u, "AWS_EC2_METADATA_IPV4_ADDRESS", "169.254.169.254"), /**
   * @deprecated AWS client no validates the EC2 metadata address.
   **/
  V(u, "AWS_EC2_METADATA_IPV6_ADDRESS", "fd00:ec2::254");
  let r = u;
  return Ht.AwsClient = r, Ht;
}
var Bn = {}, pe = {}, vo;
function xs() {
  if (vo) return pe;
  vo = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.InvalidSubjectTokenError = pe.InvalidMessageFieldError = pe.InvalidCodeFieldError = pe.InvalidTokenTypeFieldError = pe.InvalidExpirationTimeFieldError = pe.InvalidSuccessFieldError = pe.InvalidVersionFieldError = pe.ExecutableResponseError = pe.ExecutableResponse = void 0;
  const t = "urn:ietf:params:oauth:token-type:saml2", e = "urn:ietf:params:oauth:token-type:id_token", n = "urn:ietf:params:oauth:token-type:jwt";
  class i {
    /**
     * Instantiates an ExecutableResponse instance using the provided JSON object
     * from the output of the executable.
     * @param responseJson Response from a 3rd party executable, loaded from a
     * run of the executable or a cached output file.
     */
    constructor(m) {
      /**
       * The version of the Executable response. Only version 1 is currently supported.
       */
      V(this, "version");
      /**
       * Whether the executable ran successfully.
       */
      V(this, "success");
      /**
       * The epoch time for expiration of the token in seconds.
       */
      V(this, "expirationTime");
      /**
       * The type of subject token in the response, currently supported values are:
       * urn:ietf:params:oauth:token-type:saml2
       * urn:ietf:params:oauth:token-type:id_token
       * urn:ietf:params:oauth:token-type:jwt
       */
      V(this, "tokenType");
      /**
       * The error code from the executable.
       */
      V(this, "errorCode");
      /**
       * The error message from the executable.
       */
      V(this, "errorMessage");
      /**
       * The subject token from the executable, format depends on tokenType.
       */
      V(this, "subjectToken");
      if (!m.version)
        throw new r("Executable response must contain a 'version' field.");
      if (m.success === void 0)
        throw new l("Executable response must contain a 'success' field.");
      if (this.version = m.version, this.success = m.success, this.success) {
        if (this.expirationTime = m.expiration_time, this.tokenType = m.token_type, this.tokenType !== t && this.tokenType !== e && this.tokenType !== n)
          throw new d(`Executable response must contain a 'token_type' field when successful and it must be one of ${e}, ${n}, or ${t}.`);
        if (this.tokenType === t) {
          if (!m.saml_response)
            throw new h(`Executable response must contain a 'saml_response' field when token_type=${t}.`);
          this.subjectToken = m.saml_response;
        } else {
          if (!m.id_token)
            throw new h(`Executable response must contain a 'id_token' field when token_type=${e} or ${n}.`);
          this.subjectToken = m.id_token;
        }
      } else {
        if (!m.code)
          throw new c("Executable response must contain a 'code' field when unsuccessful.");
        if (!m.message)
          throw new f("Executable response must contain a 'message' field when unsuccessful.");
        this.errorCode = m.code, this.errorMessage = m.message;
      }
    }
    /**
     * @return A boolean representing if the response has a valid token. Returns
     * true when the response was successful and the token is not expired.
     */
    isValid() {
      return !this.isExpired() && this.success;
    }
    /**
     * @return A boolean representing if the response is expired. Returns true if the
     * provided timeout has passed.
     */
    isExpired() {
      return this.expirationTime !== void 0 && this.expirationTime < Math.round(Date.now() / 1e3);
    }
  }
  pe.ExecutableResponse = i;
  class o extends Error {
    constructor(m) {
      super(m), Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  pe.ExecutableResponseError = o;
  class r extends o {
  }
  pe.InvalidVersionFieldError = r;
  class l extends o {
  }
  pe.InvalidSuccessFieldError = l;
  class u extends o {
  }
  pe.InvalidExpirationTimeFieldError = u;
  class d extends o {
  }
  pe.InvalidTokenTypeFieldError = d;
  class c extends o {
  }
  pe.InvalidCodeFieldError = c;
  class f extends o {
  }
  pe.InvalidMessageFieldError = f;
  class h extends o {
  }
  return pe.InvalidSubjectTokenError = h, pe;
}
var Ze = {}, _o;
function Eo() {
  if (_o) return Ze;
  _o = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.PluggableAuthHandler = Ze.ExecutableError = void 0;
  const t = xs(), e = Yr, n = nt;
  class i extends Error {
    constructor(u, d) {
      super(`The executable failed with exit code: ${d} and error message: ${u}.`);
      /**
       * The exit code returned by the executable.
       */
      V(this, "code");
      this.code = d, Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  Ze.ExecutableError = i;
  class o {
    /**
     * Instantiates a PluggableAuthHandler instance using the provided
     * PluggableAuthHandlerOptions object.
     */
    constructor(l) {
      V(this, "commandComponents");
      V(this, "timeoutMillis");
      V(this, "outputFile");
      if (!l.command)
        throw new Error("No command provided.");
      if (this.commandComponents = o.parseCommand(l.command), this.timeoutMillis = l.timeoutMillis, !this.timeoutMillis)
        throw new Error("No timeoutMillis provided.");
      this.outputFile = l.outputFile;
    }
    /**
     * Calls user provided executable to get a 3rd party subject token and
     * returns the response.
     * @param envMap a Map of additional Environment Variables required for
     *   the executable.
     * @return A promise that resolves with the executable response.
     */
    retrieveResponseFromExecutable(l) {
      return new Promise((u, d) => {
        const c = e.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
          env: { ...process.env, ...Object.fromEntries(l) }
        });
        let f = "";
        c.stdout.on("data", (p) => {
          f += p;
        }), c.stderr.on("data", (p) => {
          f += p;
        });
        const h = setTimeout(() => (c.removeAllListeners(), c.kill(), d(new Error("The executable failed to finish within the timeout specified."))), this.timeoutMillis);
        c.on("close", (p) => {
          if (clearTimeout(h), p === 0)
            try {
              const m = JSON.parse(f), v = new t.ExecutableResponse(m);
              return u(v);
            } catch (m) {
              return m instanceof t.ExecutableResponseError ? d(m) : d(new t.ExecutableResponseError(`The executable returned an invalid response: ${f}`));
            }
          else
            return d(new i(f, p.toString()));
        });
      });
    }
    /**
     * Checks user provided output file for response from previous run of
     * executable and return the response if it exists, is formatted correctly, and is not expired.
     */
    async retrieveCachedResponse() {
      if (!this.outputFile || this.outputFile.length === 0)
        return;
      let l;
      try {
        l = await n.promises.realpath(this.outputFile);
      } catch {
        return;
      }
      if (!(await n.promises.lstat(l)).isFile())
        return;
      const u = await n.promises.readFile(l, {
        encoding: "utf8"
      });
      if (u !== "")
        try {
          const d = JSON.parse(u);
          return new t.ExecutableResponse(d).isValid() ? new t.ExecutableResponse(d) : void 0;
        } catch (d) {
          throw d instanceof t.ExecutableResponseError ? d : new t.ExecutableResponseError(`The output file contained an invalid response: ${u}`);
        }
    }
    /**
     * Parses given command string into component array, splitting on spaces unless
     * spaces are between quotation marks.
     */
    static parseCommand(l) {
      const u = l.match(/(?:[^\s"]+|"[^"]*")+/g);
      if (!u)
        throw new Error(`Provided command: "${l}" could not be parsed.`);
      for (let d = 0; d < u.length; d++)
        u[d][0] === '"' && u[d].slice(-1) === '"' && (u[d] = u[d].slice(1, -1));
      return u;
    }
  }
  return Ze.PluggableAuthHandler = o, Ze;
}
var To;
function Ls() {
  return To || (To = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.PluggableAuthClient = t.ExecutableError = void 0;
    const e = ot(), n = xs(), i = Eo();
    var o = Eo();
    Object.defineProperty(t, "ExecutableError", { enumerable: !0, get: function() {
      return o.ExecutableError;
    } });
    const r = 30 * 1e3, l = 5 * 1e3, u = 120 * 1e3, d = "GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES", c = 1;
    class f extends e.BaseExternalAccountClient {
      /**
       * Instantiates a PluggableAuthClient instance using the provided JSON
       * object loaded from an external account credentials file.
       * An error is thrown if the credential is not a valid pluggable auth credential.
       * @param options The external account options object typically loaded from
       *   the external account JSON credential file.
       */
      constructor(m) {
        super(m);
        /**
         * The command used to retrieve the third party token.
         */
        V(this, "command");
        /**
         * The timeout in milliseconds for running executable,
         * set to default if none provided.
         */
        V(this, "timeoutMillis");
        /**
         * The path to file to check for cached executable response.
         */
        V(this, "outputFile");
        /**
         * Executable and output file handler.
         */
        V(this, "handler");
        if (!m.credential_source.executable)
          throw new Error('No valid Pluggable Auth "credential_source" provided.');
        if (this.command = m.credential_source.executable.command, !this.command)
          throw new Error('No valid Pluggable Auth "credential_source" provided.');
        if (m.credential_source.executable.timeout_millis === void 0)
          this.timeoutMillis = r;
        else if (this.timeoutMillis = m.credential_source.executable.timeout_millis, this.timeoutMillis < l || this.timeoutMillis > u)
          throw new Error(`Timeout must be between ${l} and ${u} milliseconds.`);
        this.outputFile = m.credential_source.executable.output_file, this.handler = new i.PluggableAuthHandler({
          command: this.command,
          timeoutMillis: this.timeoutMillis,
          outputFile: this.outputFile
        }), this.credentialSourceType = "executable";
      }
      /**
       * Triggered when an external subject token is needed to be exchanged for a
       * GCP access token via GCP STS endpoint.
       * This uses the `options.credential_source` object to figure out how
       * to retrieve the token using the current environment. In this case,
       * this calls a user provided executable which returns the subject token.
       * The logic is summarized as:
       * 1. Validated that the executable is allowed to run. The
       *    GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment must be set to
       *    1 for security reasons.
       * 2. If an output file is specified by the user, check the file location
       *    for a response. If the file exists and contains a valid response,
       *    return the subject token from the file.
       * 3. Call the provided executable and return response.
       * @return A promise that resolves with the external subject token.
       */
      async retrieveSubjectToken() {
        if (process.env[d] !== "1")
          throw new Error("Pluggable Auth executables need to be explicitly allowed to run by setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment Variable to 1.");
        let m;
        if (this.outputFile && (m = await this.handler.retrieveCachedResponse()), !m) {
          const v = /* @__PURE__ */ new Map();
          v.set("GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE", this.audience), v.set("GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE", this.subjectTokenType), v.set("GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE", "0"), this.outputFile && v.set("GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE", this.outputFile);
          const y = this.getServiceAccountEmail();
          y && v.set("GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL", y), m = await this.handler.retrieveResponseFromExecutable(v);
        }
        if (m.version > c)
          throw new Error(`Version of executable is not currently supported, maximum supported version is ${c}.`);
        if (!m.success)
          throw new i.ExecutableError(m.errorMessage, m.errorCode);
        if (this.outputFile && !m.expirationTime)
          throw new n.InvalidExpirationTimeFieldError("The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.");
        if (m.isExpired())
          throw new Error("Executable response is expired.");
        return m.subjectToken;
      }
    }
    t.PluggableAuthClient = f;
  })(Bn)), Bn;
}
var Co;
function bs() {
  if (Co) return Gt;
  Co = 1, Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.ExternalAccountClient = void 0;
  const t = ot(), e = Ns(), n = Ds(), i = Ls();
  class o {
    constructor() {
      throw new Error("ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()");
    }
    /**
     * This static method will instantiate the
     * corresponding type of external account credential depending on the
     * underlying credential source.
     *
     * **IMPORTANT**: This method does not validate the credential configuration.
     * A security risk occurs when a credential configuration configured with
     * malicious URLs is used. When the credential configuration is accepted from
     * an untrusted source, you should validate it before using it with this
     * method. For more details, see
     * https://cloud.google.com/docs/authentication/external/externally-sourced-credentials.
     *
     * @param options The external account options object typically loaded
     *   from the external account JSON credential file.
     * @return A BaseExternalAccountClient instance or null if the options
     *   provided do not correspond to an external account credential.
     */
    static fromJSON(l) {
      var u, d;
      return l && l.type === t.EXTERNAL_ACCOUNT_TYPE ? (u = l.credential_source) != null && u.environment_id ? new n.AwsClient(l) : (d = l.credential_source) != null && d.executable ? new i.PluggableAuthClient(l) : new e.IdentityPoolClient(l) : null;
    }
  }
  return Gt.ExternalAccountClient = o, Gt;
}
var je = {}, Ao;
function Fs() {
  var d;
  if (Ao) return je;
  Ao = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.ExternalAccountAuthorizedUserClient = je.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = void 0;
  const t = Re(), e = As(), n = Ee(), i = Ve, o = ot();
  je.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = "external_account_authorized_user";
  const r = "https://sts.{universeDomain}/v1/oauthtoken", c = class c extends e.OAuthClientAuthHandler {
    /**
     * Initializes an ExternalAccountAuthorizedUserHandler instance.
     * @param url The URL of the token refresh endpoint.
     * @param transporter The transporter to use for the refresh request.
     * @param clientAuthentication The client authentication credentials to use
     *   for the refresh request.
     */
    constructor(p) {
      super(p);
      ye(this, d);
      Ne(this, d, p.tokenRefreshEndpoint);
    }
    /**
     * Requests a new access token from the token_url endpoint using the provided
     *   refresh token.
     * @param refreshToken The refresh token to use to generate a new access token.
     * @param additionalHeaders Optional additional headers to pass along the
     *   request.
     * @return A promise that resolves with the token refresh response containing
     *   the requested access token and its expiration time.
     */
    async refreshToken(p, m) {
      const v = {
        ...c.RETRY_CONFIG,
        url: se(this, d),
        method: "POST",
        headers: m,
        data: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: p
        })
      };
      t.AuthClient.setMethodName(v, "refreshToken"), this.applyClientAuthenticationOptions(v);
      try {
        const y = await this.transporter.request(v), _ = y.data;
        return _.res = y, _;
      } catch (y) {
        throw y instanceof n.GaxiosError && y.response ? (0, e.getErrorFromOAuthErrorResponse)(
          y.response.data,
          // Preserve other fields from the original error.
          y
        ) : y;
      }
    }
  };
  d = new WeakMap();
  let l = c;
  class u extends t.AuthClient {
    /**
     * Instantiates an ExternalAccountAuthorizedUserClient instances using the
     * provided JSON object loaded from a credentials files.
     * An error is throws if the credential is not valid.
     * @param options The external account authorized user option object typically
     *   from the external accoutn authorized user JSON credential file.
     */
    constructor(p) {
      super(p);
      V(this, "cachedAccessToken");
      V(this, "externalAccountAuthorizedUserHandler");
      V(this, "refreshToken");
      p.universe_domain && (this.universeDomain = p.universe_domain), this.refreshToken = p.refresh_token;
      const m = {
        confidentialClientType: "basic",
        clientId: p.client_id,
        clientSecret: p.client_secret
      };
      this.externalAccountAuthorizedUserHandler = new l({
        tokenRefreshEndpoint: p.token_url ?? r.replace("{universeDomain}", this.universeDomain),
        transporter: this.transporter,
        clientAuthentication: m
      }), this.cachedAccessToken = null, this.quotaProjectId = p.quota_project_id, typeof (p == null ? void 0 : p.eagerRefreshThresholdMillis) != "number" ? this.eagerRefreshThresholdMillis = o.EXPIRATION_TIME_OFFSET : this.eagerRefreshThresholdMillis = p.eagerRefreshThresholdMillis, this.forceRefreshOnFailure = !!(p != null && p.forceRefreshOnFailure);
    }
    async getAccessToken() {
      return (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) && await this.refreshAccessTokenAsync(), {
        token: this.cachedAccessToken.access_token,
        res: this.cachedAccessToken.res
      };
    }
    async getRequestHeaders() {
      const p = await this.getAccessToken(), m = new Headers({
        authorization: `Bearer ${p.token}`
      });
      return this.addSharedMetadataHeaders(m);
    }
    request(p, m) {
      if (m)
        this.requestAsync(p).then((v) => m(null, v), (v) => m(v, v.response));
      else
        return this.requestAsync(p);
    }
    /**
     * Authenticates the provided HTTP request, processes it and resolves with the
     * returned response.
     * @param opts The HTTP request options.
     * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure.
     * @return A promise that resolves with the successful response.
     */
    async requestAsync(p, m = !1) {
      let v;
      try {
        const y = await this.getRequestHeaders();
        p.headers = n.Gaxios.mergeHeaders(p.headers), this.addUserProjectAndAuthHeaders(p.headers, y), v = await this.transporter.request(p);
      } catch (y) {
        const _ = y.response;
        if (_) {
          const C = _.status, A = _.config.data instanceof i.Readable;
          if (!m && (C === 401 || C === 403) && !A && this.forceRefreshOnFailure)
            return await this.refreshAccessTokenAsync(), await this.requestAsync(p, !0);
        }
        throw y;
      }
      return v;
    }
    /**
     * Forces token refresh, even if unexpired tokens are currently cached.
     * @return A promise that resolves with the refreshed credential.
     */
    async refreshAccessTokenAsync() {
      const p = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
      return this.cachedAccessToken = {
        access_token: p.access_token,
        expiry_date: (/* @__PURE__ */ new Date()).getTime() + p.expires_in * 1e3,
        res: p.res
      }, p.refresh_token !== void 0 && (this.refreshToken = p.refresh_token), this.cachedAccessToken;
    }
    /**
     * Returns whether the provided credentials are expired or not.
     * If there is no expiry time, assumes the token is not expired or expiring.
     * @param credentials The credentials to check for expiration.
     * @return Whether the credentials are expired or not.
     */
    isExpired(p) {
      const m = (/* @__PURE__ */ new Date()).getTime();
      return p.expiry_date ? m >= p.expiry_date - this.eagerRefreshThresholdMillis : !1;
    }
  }
  return je.ExternalAccountAuthorizedUserClient = u, je;
}
var So;
function Sl() {
  return So || (So = 1, (function(t) {
    var b, N, ft, Gs;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.GoogleAuth = t.GoogleAuthExceptionMessages = void 0;
    const e = Yr, n = nt, i = Ee(), o = gn(), r = ni, l = ii, u = mn(), d = fs(), c = hs(), f = ps(), h = Es(), p = Ts(), m = Cs(), v = bs(), y = ot(), _ = Re(), C = Fs(), A = be();
    t.GoogleAuthExceptionMessages = {
      API_KEY_WITH_CREDENTIALS: "API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.",
      NO_PROJECT_ID_FOUND: `Unable to detect a Project Id in the current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
      NO_CREDENTIALS_FOUND: `Unable to find credentials in current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
      NO_ADC_FOUND: "Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.",
      NO_UNIVERSE_DOMAIN_FOUND: `Unable to detect a Universe Domain in the current environment.
To learn more about Universe Domain retrieval, visit: 
https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys`
    };
    class k {
      /**
       * Configuration is resolved in the following order of precedence:
       * - {@link GoogleAuthOptions.credentials `credentials`}
       * - {@link GoogleAuthOptions.keyFilename `keyFilename`}
       * - {@link GoogleAuthOptions.keyFile `keyFile`}
       *
       * {@link GoogleAuthOptions.clientOptions `clientOptions`} are passed to the
       * {@link AuthClient `AuthClient`s}.
       *
       * @param opts
       */
      constructor(g = {}) {
        ye(this, N);
        /**
         * Caches a value indicating whether the auth layer is running on Google
         * Compute Engine.
         * @private
         */
        V(this, "checkIsGCE");
        V(this, "useJWTAccessWithScope");
        V(this, "defaultServicePath");
        V(this, "_findProjectIdPromise");
        V(this, "_cachedProjectId");
        // To save the contents of the JSON credential file
        V(this, "jsonContent", null);
        V(this, "apiKey");
        V(this, "cachedCredential", null);
        /**
         * A pending {@link AuthClient}. Used for concurrent {@link GoogleAuth.getClient} calls.
         */
        ye(this, b, null);
        /**
         * Scopes populated by the client library by default. We differentiate between
         * these and user defined scopes when deciding whether to use a self-signed JWT.
         */
        V(this, "defaultScopes");
        V(this, "keyFilename");
        V(this, "scopes");
        V(this, "clientOptions", {});
        if (this._cachedProjectId = g.projectId || null, this.cachedCredential = g.authClient || null, this.keyFilename = g.keyFilename || g.keyFile, this.scopes = g.scopes, this.clientOptions = g.clientOptions || {}, this.jsonContent = g.credentials || null, this.apiKey = g.apiKey || this.clientOptions.apiKey || null, this.apiKey && (this.jsonContent || this.clientOptions.credentials))
          throw new RangeError(t.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
        g.universeDomain && (this.clientOptions.universeDomain = g.universeDomain);
      }
      // Note:  this properly is only public to satisfy unit tests.
      // https://github.com/Microsoft/TypeScript/issues/5228
      get isGCE() {
        return this.checkIsGCE;
      }
      // GAPIC client libraries should always use self-signed JWTs. The following
      // variables are set on the JWT client in order to indicate the type of library,
      // and sign the JWT with the correct audience and scopes (if not supplied).
      setGapicJWTValues(g) {
        g.defaultServicePath = this.defaultServicePath, g.useJWTAccessWithScope = this.useJWTAccessWithScope, g.defaultScopes = this.defaultScopes;
      }
      getProjectId(g) {
        if (g)
          this.getProjectIdAsync().then((E) => g(null, E), g);
        else
          return this.getProjectIdAsync();
      }
      /**
       * A temporary method for internal `getProjectId` usages where `null` is
       * acceptable. In a future major release, `getProjectId` should return `null`
       * (as the `Promise<string | null>` base signature describes) and this private
       * method should be removed.
       *
       * @returns Promise that resolves with project id (or `null`)
       */
      async getProjectIdOptional() {
        try {
          return await this.getProjectId();
        } catch (g) {
          if (g instanceof Error && g.message === t.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND)
            return null;
          throw g;
        }
      }
      /**
       * A private method for finding and caching a projectId.
       *
       * Supports environments in order of precedence:
       * - GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT environment variable
       * - GOOGLE_APPLICATION_CREDENTIALS JSON file
       * - Cloud SDK: `gcloud config config-helper --format json`
       * - GCE project ID from metadata server
       *
       * @returns projectId
       */
      async findAndCacheProjectId() {
        let g = null;
        if (g || (g = await this.getProductionProjectId()), g || (g = await this.getFileProjectId()), g || (g = await this.getDefaultServiceProjectId()), g || (g = await this.getGCEProjectId()), g || (g = await this.getExternalAccountClientProjectId()), g)
          return this._cachedProjectId = g, g;
        throw new Error(t.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
      }
      async getProjectIdAsync() {
        return this._cachedProjectId ? this._cachedProjectId : (this._findProjectIdPromise || (this._findProjectIdPromise = this.findAndCacheProjectId()), this._findProjectIdPromise);
      }
      /**
       * Retrieves a universe domain from the metadata server via
       * {@link gcpMetadata.universe}.
       *
       * @returns a universe domain
       */
      async getUniverseDomainFromMetadataServer() {
        var E;
        let g;
        try {
          g = await o.universe("universe-domain"), g || (g = _.DEFAULT_UNIVERSE);
        } catch (G) {
          if (G && ((E = G == null ? void 0 : G.response) == null ? void 0 : E.status) === 404)
            g = _.DEFAULT_UNIVERSE;
          else
            throw G;
        }
        return g;
      }
      /**
       * Retrieves, caches, and returns the universe domain in the following order
       * of precedence:
       * - The universe domain in {@link GoogleAuth.clientOptions}
       * - An existing or ADC {@link AuthClient}'s universe domain
       * - {@link gcpMetadata.universe}, if {@link Compute} client
       *
       * @returns The universe domain
       */
      async getUniverseDomain() {
        let g = (0, A.originalOrCamelOptions)(this.clientOptions).get("universe_domain");
        try {
          g ?? (g = (await this.getClient()).universeDomain);
        } catch {
          g ?? (g = _.DEFAULT_UNIVERSE);
        }
        return g;
      }
      /**
       * @returns Any scopes (user-specified or default scopes specified by the
       *   client library) that need to be set on the current Auth client.
       */
      getAnyScopes() {
        return this.scopes || this.defaultScopes;
      }
      getApplicationDefault(g = {}, E) {
        let G;
        if (typeof g == "function" ? E = g : G = g, E)
          this.getApplicationDefaultAsync(G).then((H) => E(null, H.credential, H.projectId), E);
        else
          return this.getApplicationDefaultAsync(G);
      }
      async getApplicationDefaultAsync(g = {}) {
        if (this.cachedCredential)
          return await ce(this, N, ft).call(this, this.cachedCredential, null);
        let E;
        if (E = await this._tryGetApplicationCredentialsFromEnvironmentVariable(g), E)
          return E instanceof h.JWT ? E.scopes = this.scopes : E instanceof y.BaseExternalAccountClient && (E.scopes = this.getAnyScopes()), await ce(this, N, ft).call(this, E);
        if (E = await this._tryGetApplicationCredentialsFromWellKnownFile(g), E)
          return E instanceof h.JWT ? E.scopes = this.scopes : E instanceof y.BaseExternalAccountClient && (E.scopes = this.getAnyScopes()), await ce(this, N, ft).call(this, E);
        if (await this._checkIsGCE())
          return g.scopes = this.getAnyScopes(), await ce(this, N, ft).call(this, new d.Compute(g));
        throw new Error(t.GoogleAuthExceptionMessages.NO_ADC_FOUND);
      }
      /**
       * Determines whether the auth layer is running on Google Compute Engine.
       * Checks for GCP Residency, then fallback to checking if metadata server
       * is available.
       *
       * @returns A promise that resolves with the boolean.
       * @api private
       */
      async _checkIsGCE() {
        return this.checkIsGCE === void 0 && (this.checkIsGCE = o.getGCPResidency() || await o.isAvailable()), this.checkIsGCE;
      }
      /**
       * Attempts to load default credentials from the environment variable path..
       * @returns Promise that resolves with the OAuth2Client or null.
       * @api private
       */
      async _tryGetApplicationCredentialsFromEnvironmentVariable(g) {
        const E = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials;
        if (!E || E.length === 0)
          return null;
        try {
          return this._getApplicationCredentialsFromFilePath(E, g);
        } catch (G) {
          throw G instanceof Error && (G.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${G.message}`), G;
        }
      }
      /**
       * Attempts to load default credentials from a well-known file location
       * @return Promise that resolves with the OAuth2Client or null.
       * @api private
       */
      async _tryGetApplicationCredentialsFromWellKnownFile(g) {
        let E = null;
        if (this._isWindows())
          E = process.env.APPDATA;
        else {
          const H = process.env.HOME;
          H && (E = l.join(H, ".config"));
        }
        return E && (E = l.join(E, "gcloud", "application_default_credentials.json"), n.existsSync(E) || (E = null)), E ? await this._getApplicationCredentialsFromFilePath(E, g) : null;
      }
      /**
       * Attempts to load default credentials from a file at the given path..
       * @param filePath The path to the file to read.
       * @returns Promise that resolves with the OAuth2Client
       * @api private
       */
      async _getApplicationCredentialsFromFilePath(g, E = {}) {
        if (!g || g.length === 0)
          throw new Error("The file path is invalid.");
        try {
          if (g = n.realpathSync(g), !n.lstatSync(g).isFile())
            throw new Error();
        } catch (H) {
          throw H instanceof Error && (H.message = `The file at ${g} does not exist, or it is not a file. ${H.message}`), H;
        }
        const G = n.createReadStream(g);
        return this.fromStream(G, E);
      }
      /**
       * Create a credentials instance using a given impersonated input options.
       * @param json The impersonated input object.
       * @returns JWT or UserRefresh Client with data
       */
      fromImpersonatedJSON(g) {
        var q, J, W;
        if (!g)
          throw new Error("Must pass in a JSON object containing an  impersonated refresh token");
        if (g.type !== m.IMPERSONATED_ACCOUNT_TYPE)
          throw new Error(`The incoming JSON object does not have the "${m.IMPERSONATED_ACCOUNT_TYPE}" type`);
        if (!g.source_credentials)
          throw new Error("The incoming JSON object does not contain a source_credentials field");
        if (!g.service_account_impersonation_url)
          throw new Error("The incoming JSON object does not contain a service_account_impersonation_url field");
        const E = this.fromJSON(g.source_credentials);
        if (((q = g.service_account_impersonation_url) == null ? void 0 : q.length) > 256)
          throw new RangeError(`Target principal is too long: ${g.service_account_impersonation_url}`);
        const G = (W = (J = /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(g.service_account_impersonation_url)) == null ? void 0 : J.groups) == null ? void 0 : W.target;
        if (!G)
          throw new RangeError(`Cannot extract target principal from ${g.service_account_impersonation_url}`);
        const H = (this.scopes || g.scopes || this.defaultScopes) ?? [];
        return new m.Impersonated({
          ...g,
          sourceClient: E,
          targetPrincipal: G,
          targetScopes: Array.isArray(H) ? H : [H]
        });
      }
      /**
       * Create a credentials instance using the given input options.
       * This client is not cached.
       *
       * **Important**: If you accept a credential configuration (credential JSON/File/Stream) from an external source for authentication to Google Cloud, you must validate it before providing it to any Google API or library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information, refer to {@link https://cloud.google.com/docs/authentication/external/externally-sourced-credentials Validate credential configurations from external sources}.
       *
       * @deprecated This method is being deprecated because of a potential security risk.
       *
       * This method does not validate the credential configuration. The security
       * risk occurs when a credential configuration is accepted from a source that
       * is not under your control and used without validation on your side.
       *
       * If you know that you will be loading credential configurations of a
       * specific type, it is recommended to use a credential-type-specific
       * constructor. This will ensure that an unexpected credential type with
       * potential for malicious intent is not loaded unintentionally. You might
       * still have to do validation for certain credential types. Please follow
       * the recommendation for that method. For example, if you want to load only
       * service accounts, you can use the `JWT` constructor:
       * ```
       * const {JWT} = require('google-auth-library');
       * const keys = require('/path/to/key.json');
       * const client = new JWT({
       *   email: keys.client_email,
       *   key: keys.private_key,
       *   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
       * });
       * ```
       *
       * If you are loading your credential configuration from an untrusted source and have
       * not mitigated the risks (e.g. by validating the configuration yourself), make
       * these changes as soon as possible to prevent security risks to your environment.
       *
       * Regardless of the method used, it is always your responsibility to validate
       * configurations received from external sources.
       *
       * For more details, see https://cloud.google.com/docs/authentication/external/externally-sourced-credentials.
       *
       * @param json The input object.
       * @param options The JWT or UserRefresh options for the client
       * @returns JWT or UserRefresh Client with data
       */
      fromJSON(g, E = {}) {
        let G;
        const H = (0, A.originalOrCamelOptions)(E).get("universe_domain");
        return g.type === p.USER_REFRESH_ACCOUNT_TYPE ? (G = new p.UserRefreshClient(E), G.fromJSON(g)) : g.type === m.IMPERSONATED_ACCOUNT_TYPE ? G = this.fromImpersonatedJSON(g) : g.type === y.EXTERNAL_ACCOUNT_TYPE ? (G = v.ExternalAccountClient.fromJSON({
          ...g,
          ...E
        }), G.scopes = this.getAnyScopes()) : g.type === C.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE ? G = new C.ExternalAccountAuthorizedUserClient({
          ...g,
          ...E
        }) : (E.scopes = this.scopes, G = new h.JWT(E), this.setGapicJWTValues(G), G.fromJSON(g)), H && (G.universeDomain = H), G;
      }
      /**
       * Return a JWT or UserRefreshClient from JavaScript object, caching both the
       * object used to instantiate and the client.
       * @param json The input object.
       * @param options The JWT or UserRefresh options for the client
       * @returns JWT or UserRefresh Client with data
       */
      _cacheClientFromJSON(g, E) {
        const G = this.fromJSON(g, E);
        return this.jsonContent = g, this.cachedCredential = G, G;
      }
      fromStream(g, E = {}, G) {
        let H = {};
        if (typeof E == "function" ? G = E : H = E, G)
          this.fromStreamAsync(g, H).then((q) => G(null, q), G);
        else
          return this.fromStreamAsync(g, H);
      }
      fromStreamAsync(g, E) {
        return new Promise((G, H) => {
          if (!g)
            throw new Error("Must pass in a stream containing the Google auth settings.");
          const q = [];
          g.setEncoding("utf8").on("error", H).on("data", (J) => q.push(J)).on("end", () => {
            try {
              try {
                const J = JSON.parse(q.join("")), W = this._cacheClientFromJSON(J, E);
                return G(W);
              } catch (J) {
                if (!this.keyFilename)
                  throw J;
                const W = new h.JWT({
                  ...this.clientOptions,
                  keyFile: this.keyFilename
                });
                return this.cachedCredential = W, this.setGapicJWTValues(W), G(W);
              }
            } catch (J) {
              return H(J);
            }
          });
        });
      }
      /**
       * Create a credentials instance using the given API key string.
       * The created client is not cached. In order to create and cache it use the {@link GoogleAuth.getClient `getClient`} method after first providing an {@link GoogleAuth.apiKey `apiKey`}.
       *
       * @param apiKey The API key string
       * @param options An optional options object.
       * @returns A JWT loaded from the key
       */
      fromAPIKey(g, E = {}) {
        return new h.JWT({ ...E, apiKey: g });
      }
      /**
       * Determines whether the current operating system is Windows.
       * @api private
       */
      _isWindows() {
        const g = r.platform();
        return !!(g && g.length >= 3 && g.substring(0, 3).toLowerCase() === "win");
      }
      /**
       * Run the Google Cloud SDK command that prints the default project ID
       */
      async getDefaultServiceProjectId() {
        return new Promise((g) => {
          (0, e.exec)("gcloud config config-helper --format json", (E, G) => {
            if (!E && G)
              try {
                const H = JSON.parse(G).configuration.properties.core.project;
                g(H);
                return;
              } catch {
              }
            g(null);
          });
        });
      }
      /**
       * Loads the project id from environment variables.
       * @api private
       */
      getProductionProjectId() {
        return process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT || process.env.gcloud_project || process.env.google_cloud_project;
      }
      /**
       * Loads the project id from the GOOGLE_APPLICATION_CREDENTIALS json file.
       * @api private
       */
      async getFileProjectId() {
        if (this.cachedCredential)
          return this.cachedCredential.projectId;
        if (this.keyFilename) {
          const E = await this.getClient();
          if (E && E.projectId)
            return E.projectId;
        }
        const g = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
        return g ? g.projectId : null;
      }
      /**
       * Gets the project ID from external account client if available.
       */
      async getExternalAccountClientProjectId() {
        return !this.jsonContent || this.jsonContent.type !== y.EXTERNAL_ACCOUNT_TYPE ? null : await (await this.getClient()).getProjectId();
      }
      /**
       * Gets the Compute Engine project ID if it can be inferred.
       */
      async getGCEProjectId() {
        try {
          return await o.project("project-id");
        } catch {
          return null;
        }
      }
      getCredentials(g) {
        if (g)
          this.getCredentialsAsync().then((E) => g(null, E), g);
        else
          return this.getCredentialsAsync();
      }
      async getCredentialsAsync() {
        const g = await this.getClient();
        if (g instanceof m.Impersonated)
          return { client_email: g.getTargetPrincipal() };
        if (g instanceof y.BaseExternalAccountClient) {
          const E = g.getServiceAccountEmail();
          if (E)
            return {
              client_email: E,
              universe_domain: g.universeDomain
            };
        }
        if (this.jsonContent)
          return {
            client_email: this.jsonContent.client_email,
            private_key: this.jsonContent.private_key,
            universe_domain: this.jsonContent.universe_domain
          };
        if (await this._checkIsGCE()) {
          const [E, G] = await Promise.all([
            o.instance("service-accounts/default/email"),
            this.getUniverseDomain()
          ]);
          return { client_email: E, universe_domain: G };
        }
        throw new Error(t.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
      }
      /**
       * Automatically obtain an {@link AuthClient `AuthClient`} based on the
       * provided configuration. If no options were passed, use Application
       * Default Credentials.
       */
      async getClient() {
        if (this.cachedCredential)
          return this.cachedCredential;
        Ne(this, b, se(this, b) || ce(this, N, Gs).call(this));
        try {
          return await se(this, b);
        } finally {
          Ne(this, b, null);
        }
      }
      /**
       * Creates a client which will fetch an ID token for authorization.
       * @param targetAudience the audience for the fetched ID token.
       * @returns IdTokenClient for making HTTP calls authenticated with ID tokens.
       */
      async getIdTokenClient(g) {
        const E = await this.getClient();
        if (!("fetchIdToken" in E))
          throw new Error("Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.");
        return new c.IdTokenClient({ targetAudience: g, idTokenProvider: E });
      }
      /**
       * Automatically obtain application default credentials, and return
       * an access token for making requests.
       */
      async getAccessToken() {
        return (await (await this.getClient()).getAccessToken()).token;
      }
      /**
       * Obtain the HTTP headers that will provide authorization for a given
       * request.
       */
      async getRequestHeaders(g) {
        return (await this.getClient()).getRequestHeaders(g);
      }
      /**
       * Obtain credentials for a request, then attach the appropriate headers to
       * the request options.
       * @param opts Axios or Request options on which to attach the headers
       */
      async authorizeRequest(g = {}) {
        const E = g.url, H = await (await this.getClient()).getRequestHeaders(E);
        return g.headers = i.Gaxios.mergeHeaders(g.headers, H), g;
      }
      /**
       * A {@link fetch `fetch`} compliant API for {@link GoogleAuth}.
       *
       * @see {@link GoogleAuth.request} for the classic method.
       *
       * @remarks
       *
       * This is useful as a drop-in replacement for `fetch` API usage.
       *
       * @example
       *
       * ```ts
       * const auth = new GoogleAuth();
       * const fetchWithAuth: typeof fetch = (...args) => auth.fetch(...args);
       * await fetchWithAuth('https://example.com');
       * ```
       *
       * @param args `fetch` API or {@link Gaxios.fetch `Gaxios#fetch`} parameters
       * @returns the {@link GaxiosResponse} with Gaxios-added properties
       */
      async fetch(...g) {
        return (await this.getClient()).fetch(...g);
      }
      /**
       * Automatically obtain application default credentials, and make an
       * HTTP request using the given options.
       *
       * @see {@link GoogleAuth.fetch} for the modern method.
       *
       * @param opts Axios request options for the HTTP request.
       */
      async request(g) {
        return (await this.getClient()).request(g);
      }
      /**
       * Determine the compute environment in which the code is running.
       */
      getEnv() {
        return (0, f.getEnv)();
      }
      /**
       * Sign the given data with the current private key, or go out
       * to the IAM API to sign it.
       * @param data The data to be signed.
       * @param endpoint A custom endpoint to use.
       *
       * @example
       * ```
       * sign('data', 'https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/');
       * ```
       */
      async sign(g, E) {
        const G = await this.getClient(), H = await this.getUniverseDomain();
        if (E = E || `https://iamcredentials.${H}/v1/projects/-/serviceAccounts/`, G instanceof m.Impersonated)
          return (await G.sign(g)).signedBlob;
        const q = (0, u.createCrypto)();
        if (G instanceof h.JWT && G.key)
          return await q.sign(G.key, g);
        const J = await this.getCredentials();
        if (!J.client_email)
          throw new Error("Cannot sign data without `client_email`.");
        return this.signBlob(q, J.client_email, g, E);
      }
      async signBlob(g, E, G, H) {
        const q = new URL(H + `${E}:signBlob`);
        return (await this.request({
          method: "POST",
          url: q.href,
          data: {
            payload: g.encodeBase64StringUtf8(G)
          },
          retry: !0,
          retryConfig: {
            httpMethodsToRetry: ["POST"]
          }
        })).data.signedBlob;
      }
    }
    b = new WeakMap(), N = new WeakSet(), ft = async function(g, E = process.env.GOOGLE_CLOUD_QUOTA_PROJECT || null) {
      const G = await this.getProjectIdOptional();
      return E && (g.quotaProjectId = E), this.cachedCredential = g, { credential: g, projectId: G };
    }, Gs = async function() {
      if (this.jsonContent)
        return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
      if (this.keyFilename) {
        const g = l.resolve(this.keyFilename), E = n.createReadStream(g);
        return await this.fromStreamAsync(E, this.clientOptions);
      } else if (this.apiKey) {
        const g = await this.fromAPIKey(this.apiKey, this.clientOptions);
        g.scopes = this.scopes;
        const { credential: E } = await ce(this, N, ft).call(this, g);
        return E;
      } else {
        const { credential: g } = await this.getApplicationDefaultAsync(this.clientOptions);
        return g;
      }
    }, t.GoogleAuth = k;
  })(Sn)), Sn;
}
var Kt = {}, wo;
function wl() {
  if (wo) return Kt;
  wo = 1, Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.IAMAuth = void 0;
  class t {
    /**
     * IAM credentials.
     *
     * @param selector the iam authority selector
     * @param token the token
     * @constructor
     */
    constructor(n, i) {
      V(this, "selector");
      V(this, "token");
      this.selector = n, this.token = i, this.selector = n, this.token = i;
    }
    /**
     * Acquire the HTTP headers required to make an authenticated request.
     */
    getRequestHeaders() {
      return {
        "x-goog-iam-authority-selector": this.selector,
        "x-goog-iam-authorization-token": this.token
      };
    }
  }
  return Kt.IAMAuth = t, Kt;
}
var Vn = {}, Io;
function Il() {
  return Io || (Io = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.DownscopedClient = t.EXPIRATION_TIME_OFFSET = t.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;
    const e = Ee(), n = Ve, i = Re(), o = ri(), r = "urn:ietf:params:oauth:grant-type:token-exchange", l = "urn:ietf:params:oauth:token-type:access_token", u = "urn:ietf:params:oauth:token-type:access_token";
    t.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10, t.EXPIRATION_TIME_OFFSET = 300 * 1e3;
    class d extends i.AuthClient {
      /**
       * Instantiates a downscoped client object using the provided source
       * AuthClient and credential access boundary rules.
       * To downscope permissions of a source AuthClient, a Credential Access
       * Boundary that specifies which resources the new credential can access, as
       * well as an upper bound on the permissions that are available on each
       * resource, has to be defined. A downscoped client can then be instantiated
       * using the source AuthClient and the Credential Access Boundary.
       * @param options the {@link DownscopedClientOptions `DownscopedClientOptions`} to use. Passing an `AuthClient` directly is **@DEPRECATED**.
       * @param credentialAccessBoundary **@DEPRECATED**. Provide a {@link DownscopedClientOptions `DownscopedClientOptions`} object in the first parameter instead.
       */
      constructor(h, p = {
        accessBoundary: {
          accessBoundaryRules: []
        }
      }) {
        super(h instanceof i.AuthClient ? {} : h);
        V(this, "authClient");
        V(this, "credentialAccessBoundary");
        V(this, "cachedDownscopedAccessToken");
        V(this, "stsCredential");
        if (h instanceof i.AuthClient ? (this.authClient = h, this.credentialAccessBoundary = p) : (this.authClient = h.authClient, this.credentialAccessBoundary = h.credentialAccessBoundary), this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length === 0)
          throw new Error("At least one access boundary rule needs to be defined.");
        if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length > t.MAX_ACCESS_BOUNDARY_RULES_COUNT)
          throw new Error(`The provided access boundary has more than ${t.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
        for (const m of this.credentialAccessBoundary.accessBoundary.accessBoundaryRules)
          if (m.availablePermissions.length === 0)
            throw new Error("At least one permission should be defined in access boundary rules.");
        this.stsCredential = new o.StsCredentials({
          tokenExchangeEndpoint: `https://sts.${this.universeDomain}/v1/token`
        }), this.cachedDownscopedAccessToken = null;
      }
      /**
       * Provides a mechanism to inject Downscoped access tokens directly.
       * The expiry_date field is required to facilitate determination of the token
       * expiration which would make it easier for the token consumer to handle.
       * @param credentials The Credentials object to set on the current client.
       */
      setCredentials(h) {
        if (!h.expiry_date)
          throw new Error("The access token expiry_date field is missing in the provided credentials.");
        super.setCredentials(h), this.cachedDownscopedAccessToken = h;
      }
      async getAccessToken() {
        return (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken)) && await this.refreshAccessTokenAsync(), {
          token: this.cachedDownscopedAccessToken.access_token,
          expirationTime: this.cachedDownscopedAccessToken.expiry_date,
          res: this.cachedDownscopedAccessToken.res
        };
      }
      /**
       * The main authentication interface. It takes an optional url which when
       * present is the endpoint being accessed, and returns a Promise which
       * resolves with authorization header fields.
       *
       * The result has the form:
       * { authorization: 'Bearer <access_token_value>' }
       */
      async getRequestHeaders() {
        const h = await this.getAccessToken(), p = new Headers({
          authorization: `Bearer ${h.token}`
        });
        return this.addSharedMetadataHeaders(p);
      }
      request(h, p) {
        if (p)
          this.requestAsync(h).then((m) => p(null, m), (m) => p(m, m.response));
        else
          return this.requestAsync(h);
      }
      /**
       * Authenticates the provided HTTP request, processes it and resolves with the
       * returned response.
       * @param opts The HTTP request options.
       * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure
       * @return A promise that resolves with the successful response.
       */
      async requestAsync(h, p = !1) {
        let m;
        try {
          const v = await this.getRequestHeaders();
          h.headers = e.Gaxios.mergeHeaders(h.headers), this.addUserProjectAndAuthHeaders(h.headers, v), m = await this.transporter.request(h);
        } catch (v) {
          const y = v.response;
          if (y) {
            const _ = y.status, C = y.config.data instanceof n.Readable;
            if (!p && (_ === 401 || _ === 403) && !C && this.forceRefreshOnFailure)
              return await this.refreshAccessTokenAsync(), await this.requestAsync(h, !0);
          }
          throw v;
        }
        return m;
      }
      /**
       * Forces token refresh, even if unexpired tokens are currently cached.
       * GCP access tokens are retrieved from authclient object/source credential.
       * Then GCP access tokens are exchanged for downscoped access tokens via the
       * token exchange endpoint.
       * @return A promise that resolves with the fresh downscoped access token.
       */
      async refreshAccessTokenAsync() {
        var _;
        const h = (await this.authClient.getAccessToken()).token, p = {
          grantType: r,
          requestedTokenType: l,
          subjectToken: h,
          subjectTokenType: u
        }, m = await this.stsCredential.exchangeToken(p, void 0, this.credentialAccessBoundary), v = ((_ = this.authClient.credentials) == null ? void 0 : _.expiry_date) || null, y = m.expires_in ? (/* @__PURE__ */ new Date()).getTime() + m.expires_in * 1e3 : v;
        return this.cachedDownscopedAccessToken = {
          access_token: m.access_token,
          expiry_date: y,
          res: m.res
        }, this.credentials = {}, Object.assign(this.credentials, this.cachedDownscopedAccessToken), delete this.credentials.res, this.emit("tokens", {
          refresh_token: null,
          expiry_date: this.cachedDownscopedAccessToken.expiry_date,
          access_token: this.cachedDownscopedAccessToken.access_token,
          token_type: "Bearer",
          id_token: null
        }), this.cachedDownscopedAccessToken;
      }
      /**
       * Returns whether the provided credentials are expired or not.
       * If there is no expiry time, assumes the token is not expired or expiring.
       * @param downscopedAccessToken The credentials to check for expiration.
       * @return Whether the credentials are expired or not.
       */
      isExpired(h) {
        const p = (/* @__PURE__ */ new Date()).getTime();
        return h.expiry_date ? p >= h.expiry_date - this.eagerRefreshThresholdMillis : !1;
      }
    }
    t.DownscopedClient = d;
  })(Vn)), Vn;
}
var Wt = {}, Ro;
function Rl() {
  if (Ro) return Wt;
  Ro = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.PassThroughClient = void 0;
  const t = Re();
  class e extends t.AuthClient {
    /**
     * Creates a request without any authentication headers or checks.
     *
     * @remarks
     *
     * In testing environments it may be useful to change the provided
     * {@link AuthClient.transporter} for any desired request overrides/handling.
     *
     * @param opts
     * @returns The response of the request.
     */
    async request(i) {
      return this.transporter.request(i);
    }
    /**
     * A required method of the base class.
     * Always will return an empty object.
     *
     * @returns {}
     */
    async getAccessToken() {
      return {};
    }
    /**
     * A required method of the base class.
     * Always will return an empty object.
     *
     * @returns {}
     */
    async getRequestHeaders() {
      return new Headers();
    }
  }
  return Wt.PassThroughClient = e, Wt;
}
var Po;
function Pl() {
  return Po || (Po = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.GoogleAuth = t.auth = t.PassThroughClient = t.ExternalAccountAuthorizedUserClient = t.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = t.ExecutableError = t.PluggableAuthClient = t.DownscopedClient = t.BaseExternalAccountClient = t.ExternalAccountClient = t.IdentityPoolClient = t.AwsRequestSigner = t.AwsClient = t.UserRefreshClient = t.LoginTicket = t.ClientAuthentication = t.OAuth2Client = t.CodeChallengeMethod = t.Impersonated = t.JWT = t.JWTAccess = t.IdTokenClient = t.IAMAuth = t.GCPEnv = t.Compute = t.DEFAULT_UNIVERSE = t.AuthClient = t.gaxios = t.gcpMetadata = void 0;
    const e = Sl();
    Object.defineProperty(t, "GoogleAuth", { enumerable: !0, get: function() {
      return e.GoogleAuth;
    } }), t.gcpMetadata = gn(), t.gaxios = Ee();
    var n = Re();
    Object.defineProperty(t, "AuthClient", { enumerable: !0, get: function() {
      return n.AuthClient;
    } }), Object.defineProperty(t, "DEFAULT_UNIVERSE", { enumerable: !0, get: function() {
      return n.DEFAULT_UNIVERSE;
    } });
    var i = fs();
    Object.defineProperty(t, "Compute", { enumerable: !0, get: function() {
      return i.Compute;
    } });
    var o = ps();
    Object.defineProperty(t, "GCPEnv", { enumerable: !0, get: function() {
      return o.GCPEnv;
    } });
    var r = wl();
    Object.defineProperty(t, "IAMAuth", { enumerable: !0, get: function() {
      return r.IAMAuth;
    } });
    var l = hs();
    Object.defineProperty(t, "IdTokenClient", { enumerable: !0, get: function() {
      return l.IdTokenClient;
    } });
    var u = _s();
    Object.defineProperty(t, "JWTAccess", { enumerable: !0, get: function() {
      return u.JWTAccess;
    } });
    var d = Es();
    Object.defineProperty(t, "JWT", { enumerable: !0, get: function() {
      return d.JWT;
    } });
    var c = Cs();
    Object.defineProperty(t, "Impersonated", { enumerable: !0, get: function() {
      return c.Impersonated;
    } });
    var f = vt();
    Object.defineProperty(t, "CodeChallengeMethod", { enumerable: !0, get: function() {
      return f.CodeChallengeMethod;
    } }), Object.defineProperty(t, "OAuth2Client", { enumerable: !0, get: function() {
      return f.OAuth2Client;
    } }), Object.defineProperty(t, "ClientAuthentication", { enumerable: !0, get: function() {
      return f.ClientAuthentication;
    } });
    var h = ds();
    Object.defineProperty(t, "LoginTicket", { enumerable: !0, get: function() {
      return h.LoginTicket;
    } });
    var p = Ts();
    Object.defineProperty(t, "UserRefreshClient", { enumerable: !0, get: function() {
      return p.UserRefreshClient;
    } });
    var m = Ds();
    Object.defineProperty(t, "AwsClient", { enumerable: !0, get: function() {
      return m.AwsClient;
    } });
    var v = ks();
    Object.defineProperty(t, "AwsRequestSigner", { enumerable: !0, get: function() {
      return v.AwsRequestSigner;
    } });
    var y = Ns();
    Object.defineProperty(t, "IdentityPoolClient", { enumerable: !0, get: function() {
      return y.IdentityPoolClient;
    } });
    var _ = bs();
    Object.defineProperty(t, "ExternalAccountClient", { enumerable: !0, get: function() {
      return _.ExternalAccountClient;
    } });
    var C = ot();
    Object.defineProperty(t, "BaseExternalAccountClient", { enumerable: !0, get: function() {
      return C.BaseExternalAccountClient;
    } });
    var A = Il();
    Object.defineProperty(t, "DownscopedClient", { enumerable: !0, get: function() {
      return A.DownscopedClient;
    } });
    var k = Ls();
    Object.defineProperty(t, "PluggableAuthClient", { enumerable: !0, get: function() {
      return k.PluggableAuthClient;
    } }), Object.defineProperty(t, "ExecutableError", { enumerable: !0, get: function() {
      return k.ExecutableError;
    } });
    var b = Fs();
    Object.defineProperty(t, "EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE", { enumerable: !0, get: function() {
      return b.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE;
    } }), Object.defineProperty(t, "ExternalAccountAuthorizedUserClient", { enumerable: !0, get: function() {
      return b.ExternalAccountAuthorizedUserClient;
    } });
    var N = Rl();
    Object.defineProperty(t, "PassThroughClient", { enumerable: !0, get: function() {
      return N.PassThroughClient;
    } });
    const M = new e.GoogleAuth();
    t.auth = M;
  })(An)), An;
}
var Nl = Pl();
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let kl, Ml;
function Ul() {
  return {
    geminiUrl: kl,
    vertexUrl: Ml
  };
}
function Dl(t, e, n, i) {
  var o, r;
  if (!(t != null && t.baseUrl)) {
    const l = Ul();
    return e ? (o = l.vertexUrl) !== null && o !== void 0 ? o : n : (r = l.geminiUrl) !== null && r !== void 0 ? r : i;
  }
  return t.baseUrl;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class rt {
}
function X(t, e) {
  const n = /\{([^}]+)\}/g;
  return t.replace(n, (i, o) => {
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const r = e[o];
      return r != null ? String(r) : "";
    } else
      throw new Error(`Key '${o}' not found in valueMap.`);
  });
}
function a(t, e, n) {
  for (let r = 0; r < e.length - 1; r++) {
    const l = e[r];
    if (l.endsWith("[]")) {
      const u = l.slice(0, -2);
      if (!(u in t))
        if (Array.isArray(n))
          t[u] = Array.from({ length: n.length }, () => ({}));
        else
          throw new Error(`Value must be a list given an array path ${l}`);
      if (Array.isArray(t[u])) {
        const d = t[u];
        if (Array.isArray(n))
          for (let c = 0; c < d.length; c++) {
            const f = d[c];
            a(f, e.slice(r + 1), n[c]);
          }
        else
          for (const c of d)
            a(c, e.slice(r + 1), n);
      }
      return;
    } else if (l.endsWith("[0]")) {
      const u = l.slice(0, -3);
      u in t || (t[u] = [{}]);
      const d = t[u];
      a(d[0], e.slice(r + 1), n);
      return;
    }
    (!t[l] || typeof t[l] != "object") && (t[l] = {}), t = t[l];
  }
  const i = e[e.length - 1], o = t[i];
  if (o !== void 0) {
    if (!n || typeof n == "object" && Object.keys(n).length === 0 || n === o)
      return;
    if (typeof o == "object" && typeof n == "object" && o !== null && n !== null)
      Object.assign(o, n);
    else
      throw new Error(`Cannot set value for an existing key. Key: ${i}`);
  } else
    i === "_self" && typeof n == "object" && n !== null && !Array.isArray(n) ? Object.assign(t, n) : t[i] = n;
}
function s(t, e, n = void 0) {
  try {
    if (e.length === 1 && e[0] === "_self")
      return t;
    for (let i = 0; i < e.length; i++) {
      if (typeof t != "object" || t === null)
        return n;
      const o = e[i];
      if (o.endsWith("[]")) {
        const r = o.slice(0, -2);
        if (r in t) {
          const l = t[r];
          return Array.isArray(l) ? l.map((u) => s(u, e.slice(i + 1), n)) : n;
        } else
          return n;
      } else
        t = t[o];
    }
    return t;
  } catch (i) {
    if (i instanceof TypeError)
      return n;
    throw i;
  }
}
function xl(t, e) {
  for (const [n, i] of Object.entries(e)) {
    const o = n.split("."), r = i.split("."), l = /* @__PURE__ */ new Set();
    let u = -1;
    for (let d = 0; d < o.length; d++)
      if (o[d] === "*") {
        u = d;
        break;
      }
    if (u !== -1 && r.length > u)
      for (let d = u; d < r.length; d++) {
        const c = r[d];
        c !== "*" && !c.endsWith("[]") && !c.endsWith("[0]") && l.add(c);
      }
    Yn(t, o, r, 0, l);
  }
}
function Yn(t, e, n, i, o) {
  if (i >= e.length || typeof t != "object" || t === null)
    return;
  const r = e[i];
  if (r.endsWith("[]")) {
    const l = r.slice(0, -2), u = t;
    if (l in u && Array.isArray(u[l]))
      for (const d of u[l])
        Yn(d, e, n, i + 1, o);
  } else if (r === "*") {
    if (typeof t == "object" && t !== null && !Array.isArray(t)) {
      const l = t, u = Object.keys(l).filter((c) => !c.startsWith("_") && !o.has(c)), d = {};
      for (const c of u)
        d[c] = l[c];
      for (const [c, f] of Object.entries(d)) {
        const h = [];
        for (const p of n.slice(i))
          p === "*" ? h.push(c) : h.push(p);
        a(l, h, f);
      }
      for (const c of u)
        delete l[c];
    }
  } else {
    const l = t;
    r in l && Yn(l[r], e, n, i + 1, o);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function si(t) {
  if (typeof t != "string")
    throw new Error("fromImageBytes must be a string");
  return t;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ll(t) {
  const e = {}, n = s(t, [
    "operationName"
  ]);
  n != null && a(e, ["operationName"], n);
  const i = s(t, ["resourceName"]);
  return i != null && a(e, ["_url", "resourceName"], i), e;
}
function bl(t) {
  const e = {}, n = s(t, ["name"]);
  n != null && a(e, ["name"], n);
  const i = s(t, ["metadata"]);
  i != null && a(e, ["metadata"], i);
  const o = s(t, ["done"]);
  o != null && a(e, ["done"], o);
  const r = s(t, ["error"]);
  r != null && a(e, ["error"], r);
  const l = s(t, [
    "response",
    "generateVideoResponse"
  ]);
  return l != null && a(e, ["response"], Gl(l)), e;
}
function Fl(t) {
  const e = {}, n = s(t, ["name"]);
  n != null && a(e, ["name"], n);
  const i = s(t, ["metadata"]);
  i != null && a(e, ["metadata"], i);
  const o = s(t, ["done"]);
  o != null && a(e, ["done"], o);
  const r = s(t, ["error"]);
  r != null && a(e, ["error"], r);
  const l = s(t, ["response"]);
  return l != null && a(e, ["response"], Ol(l)), e;
}
function Gl(t) {
  const e = {}, n = s(t, [
    "generatedSamples"
  ]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => ql(l))), a(e, ["generatedVideos"], r);
  }
  const i = s(t, [
    "raiMediaFilteredCount"
  ]);
  i != null && a(e, ["raiMediaFilteredCount"], i);
  const o = s(t, [
    "raiMediaFilteredReasons"
  ]);
  return o != null && a(e, ["raiMediaFilteredReasons"], o), e;
}
function Ol(t) {
  const e = {}, n = s(t, ["videos"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => Bl(l))), a(e, ["generatedVideos"], r);
  }
  const i = s(t, [
    "raiMediaFilteredCount"
  ]);
  i != null && a(e, ["raiMediaFilteredCount"], i);
  const o = s(t, [
    "raiMediaFilteredReasons"
  ]);
  return o != null && a(e, ["raiMediaFilteredReasons"], o), e;
}
function ql(t) {
  const e = {}, n = s(t, ["video"]);
  return n != null && a(e, ["video"], $l(n)), e;
}
function Bl(t) {
  const e = {}, n = s(t, ["_self"]);
  return n != null && a(e, ["video"], Jl(n)), e;
}
function Vl(t) {
  const e = {}, n = s(t, [
    "operationName"
  ]);
  return n != null && a(e, ["_url", "operationName"], n), e;
}
function Hl(t) {
  const e = {}, n = s(t, [
    "operationName"
  ]);
  return n != null && a(e, ["_url", "operationName"], n), e;
}
function $l(t) {
  const e = {}, n = s(t, ["uri"]);
  n != null && a(e, ["uri"], n);
  const i = s(t, ["encodedVideo"]);
  i != null && a(e, ["videoBytes"], si(i));
  const o = s(t, ["encoding"]);
  return o != null && a(e, ["mimeType"], o), e;
}
function Jl(t) {
  const e = {}, n = s(t, ["gcsUri"]);
  n != null && a(e, ["uri"], n);
  const i = s(t, [
    "bytesBase64Encoded"
  ]);
  i != null && a(e, ["videoBytes"], si(i));
  const o = s(t, ["mimeType"]);
  return o != null && a(e, ["mimeType"], o), e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var No;
(function(t) {
  t.OUTCOME_UNSPECIFIED = "OUTCOME_UNSPECIFIED", t.OUTCOME_OK = "OUTCOME_OK", t.OUTCOME_FAILED = "OUTCOME_FAILED", t.OUTCOME_DEADLINE_EXCEEDED = "OUTCOME_DEADLINE_EXCEEDED";
})(No || (No = {}));
var ko;
(function(t) {
  t.LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED", t.PYTHON = "PYTHON";
})(ko || (ko = {}));
var Mo;
(function(t) {
  t.SCHEDULING_UNSPECIFIED = "SCHEDULING_UNSPECIFIED", t.SILENT = "SILENT", t.WHEN_IDLE = "WHEN_IDLE", t.INTERRUPT = "INTERRUPT";
})(Mo || (Mo = {}));
var Be;
(function(t) {
  t.TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED", t.STRING = "STRING", t.NUMBER = "NUMBER", t.INTEGER = "INTEGER", t.BOOLEAN = "BOOLEAN", t.ARRAY = "ARRAY", t.OBJECT = "OBJECT", t.NULL = "NULL";
})(Be || (Be = {}));
var Uo;
(function(t) {
  t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", t.MODE_DYNAMIC = "MODE_DYNAMIC";
})(Uo || (Uo = {}));
var Do;
(function(t) {
  t.AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED", t.NO_AUTH = "NO_AUTH", t.API_KEY_AUTH = "API_KEY_AUTH", t.HTTP_BASIC_AUTH = "HTTP_BASIC_AUTH", t.GOOGLE_SERVICE_ACCOUNT_AUTH = "GOOGLE_SERVICE_ACCOUNT_AUTH", t.OAUTH = "OAUTH", t.OIDC_AUTH = "OIDC_AUTH";
})(Do || (Do = {}));
var xo;
(function(t) {
  t.API_SPEC_UNSPECIFIED = "API_SPEC_UNSPECIFIED", t.SIMPLE_SEARCH = "SIMPLE_SEARCH", t.ELASTIC_SEARCH = "ELASTIC_SEARCH";
})(xo || (xo = {}));
var Lo;
(function(t) {
  t.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED", t.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT", t.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH", t.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT", t.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT", t.HARM_CATEGORY_CIVIC_INTEGRITY = "HARM_CATEGORY_CIVIC_INTEGRITY", t.HARM_CATEGORY_IMAGE_HATE = "HARM_CATEGORY_IMAGE_HATE", t.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT = "HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT", t.HARM_CATEGORY_IMAGE_HARASSMENT = "HARM_CATEGORY_IMAGE_HARASSMENT", t.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT = "HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT", t.HARM_CATEGORY_JAILBREAK = "HARM_CATEGORY_JAILBREAK";
})(Lo || (Lo = {}));
var bo;
(function(t) {
  t.HARM_BLOCK_METHOD_UNSPECIFIED = "HARM_BLOCK_METHOD_UNSPECIFIED", t.SEVERITY = "SEVERITY", t.PROBABILITY = "PROBABILITY";
})(bo || (bo = {}));
var Fo;
(function(t) {
  t.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED", t.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", t.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", t.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", t.BLOCK_NONE = "BLOCK_NONE", t.OFF = "OFF";
})(Fo || (Fo = {}));
var Go;
(function(t) {
  t.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED", t.STOP = "STOP", t.MAX_TOKENS = "MAX_TOKENS", t.SAFETY = "SAFETY", t.RECITATION = "RECITATION", t.LANGUAGE = "LANGUAGE", t.OTHER = "OTHER", t.BLOCKLIST = "BLOCKLIST", t.PROHIBITED_CONTENT = "PROHIBITED_CONTENT", t.SPII = "SPII", t.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL", t.IMAGE_SAFETY = "IMAGE_SAFETY", t.UNEXPECTED_TOOL_CALL = "UNEXPECTED_TOOL_CALL", t.IMAGE_PROHIBITED_CONTENT = "IMAGE_PROHIBITED_CONTENT", t.NO_IMAGE = "NO_IMAGE";
})(Go || (Go = {}));
var Oo;
(function(t) {
  t.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED", t.NEGLIGIBLE = "NEGLIGIBLE", t.LOW = "LOW", t.MEDIUM = "MEDIUM", t.HIGH = "HIGH";
})(Oo || (Oo = {}));
var qo;
(function(t) {
  t.HARM_SEVERITY_UNSPECIFIED = "HARM_SEVERITY_UNSPECIFIED", t.HARM_SEVERITY_NEGLIGIBLE = "HARM_SEVERITY_NEGLIGIBLE", t.HARM_SEVERITY_LOW = "HARM_SEVERITY_LOW", t.HARM_SEVERITY_MEDIUM = "HARM_SEVERITY_MEDIUM", t.HARM_SEVERITY_HIGH = "HARM_SEVERITY_HIGH";
})(qo || (qo = {}));
var Bo;
(function(t) {
  t.URL_RETRIEVAL_STATUS_UNSPECIFIED = "URL_RETRIEVAL_STATUS_UNSPECIFIED", t.URL_RETRIEVAL_STATUS_SUCCESS = "URL_RETRIEVAL_STATUS_SUCCESS", t.URL_RETRIEVAL_STATUS_ERROR = "URL_RETRIEVAL_STATUS_ERROR", t.URL_RETRIEVAL_STATUS_PAYWALL = "URL_RETRIEVAL_STATUS_PAYWALL", t.URL_RETRIEVAL_STATUS_UNSAFE = "URL_RETRIEVAL_STATUS_UNSAFE";
})(Bo || (Bo = {}));
var Vo;
(function(t) {
  t.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED", t.SAFETY = "SAFETY", t.OTHER = "OTHER", t.BLOCKLIST = "BLOCKLIST", t.PROHIBITED_CONTENT = "PROHIBITED_CONTENT", t.IMAGE_SAFETY = "IMAGE_SAFETY", t.MODEL_ARMOR = "MODEL_ARMOR", t.JAILBREAK = "JAILBREAK";
})(Vo || (Vo = {}));
var Ho;
(function(t) {
  t.TRAFFIC_TYPE_UNSPECIFIED = "TRAFFIC_TYPE_UNSPECIFIED", t.ON_DEMAND = "ON_DEMAND", t.PROVISIONED_THROUGHPUT = "PROVISIONED_THROUGHPUT";
})(Ho || (Ho = {}));
var fn;
(function(t) {
  t.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED", t.TEXT = "TEXT", t.IMAGE = "IMAGE", t.AUDIO = "AUDIO";
})(fn || (fn = {}));
var $o;
(function(t) {
  t.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED", t.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW", t.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM", t.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH";
})($o || ($o = {}));
var Jo;
(function(t) {
  t.TUNING_MODE_UNSPECIFIED = "TUNING_MODE_UNSPECIFIED", t.TUNING_MODE_FULL = "TUNING_MODE_FULL", t.TUNING_MODE_PEFT_ADAPTER = "TUNING_MODE_PEFT_ADAPTER";
})(Jo || (Jo = {}));
var Ko;
(function(t) {
  t.ADAPTER_SIZE_UNSPECIFIED = "ADAPTER_SIZE_UNSPECIFIED", t.ADAPTER_SIZE_ONE = "ADAPTER_SIZE_ONE", t.ADAPTER_SIZE_TWO = "ADAPTER_SIZE_TWO", t.ADAPTER_SIZE_FOUR = "ADAPTER_SIZE_FOUR", t.ADAPTER_SIZE_EIGHT = "ADAPTER_SIZE_EIGHT", t.ADAPTER_SIZE_SIXTEEN = "ADAPTER_SIZE_SIXTEEN", t.ADAPTER_SIZE_THIRTY_TWO = "ADAPTER_SIZE_THIRTY_TWO";
})(Ko || (Ko = {}));
var zn;
(function(t) {
  t.JOB_STATE_UNSPECIFIED = "JOB_STATE_UNSPECIFIED", t.JOB_STATE_QUEUED = "JOB_STATE_QUEUED", t.JOB_STATE_PENDING = "JOB_STATE_PENDING", t.JOB_STATE_RUNNING = "JOB_STATE_RUNNING", t.JOB_STATE_SUCCEEDED = "JOB_STATE_SUCCEEDED", t.JOB_STATE_FAILED = "JOB_STATE_FAILED", t.JOB_STATE_CANCELLING = "JOB_STATE_CANCELLING", t.JOB_STATE_CANCELLED = "JOB_STATE_CANCELLED", t.JOB_STATE_PAUSED = "JOB_STATE_PAUSED", t.JOB_STATE_EXPIRED = "JOB_STATE_EXPIRED", t.JOB_STATE_UPDATING = "JOB_STATE_UPDATING", t.JOB_STATE_PARTIALLY_SUCCEEDED = "JOB_STATE_PARTIALLY_SUCCEEDED";
})(zn || (zn = {}));
var Wo;
(function(t) {
  t.TUNING_TASK_UNSPECIFIED = "TUNING_TASK_UNSPECIFIED", t.TUNING_TASK_I2V = "TUNING_TASK_I2V", t.TUNING_TASK_T2V = "TUNING_TASK_T2V";
})(Wo || (Wo = {}));
var Yo;
(function(t) {
  t.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED = "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED", t.PRIORITIZE_QUALITY = "PRIORITIZE_QUALITY", t.BALANCED = "BALANCED", t.PRIORITIZE_COST = "PRIORITIZE_COST";
})(Yo || (Yo = {}));
var zo;
(function(t) {
  t.UNSPECIFIED = "UNSPECIFIED", t.BLOCKING = "BLOCKING", t.NON_BLOCKING = "NON_BLOCKING";
})(zo || (zo = {}));
var Xo;
(function(t) {
  t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", t.MODE_DYNAMIC = "MODE_DYNAMIC";
})(Xo || (Xo = {}));
var Qo;
(function(t) {
  t.ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED", t.ENVIRONMENT_BROWSER = "ENVIRONMENT_BROWSER";
})(Qo || (Qo = {}));
var Zo;
(function(t) {
  t.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", t.AUTO = "AUTO", t.ANY = "ANY", t.NONE = "NONE", t.VALIDATED = "VALIDATED";
})(Zo || (Zo = {}));
var jo;
(function(t) {
  t.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", t.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", t.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", t.BLOCK_NONE = "BLOCK_NONE";
})(jo || (jo = {}));
var er;
(function(t) {
  t.DONT_ALLOW = "DONT_ALLOW", t.ALLOW_ADULT = "ALLOW_ADULT", t.ALLOW_ALL = "ALLOW_ALL";
})(er || (er = {}));
var tr;
(function(t) {
  t.auto = "auto", t.en = "en", t.ja = "ja", t.ko = "ko", t.hi = "hi", t.zh = "zh", t.pt = "pt", t.es = "es";
})(tr || (tr = {}));
var nr;
(function(t) {
  t.MASK_MODE_DEFAULT = "MASK_MODE_DEFAULT", t.MASK_MODE_USER_PROVIDED = "MASK_MODE_USER_PROVIDED", t.MASK_MODE_BACKGROUND = "MASK_MODE_BACKGROUND", t.MASK_MODE_FOREGROUND = "MASK_MODE_FOREGROUND", t.MASK_MODE_SEMANTIC = "MASK_MODE_SEMANTIC";
})(nr || (nr = {}));
var ir;
(function(t) {
  t.CONTROL_TYPE_DEFAULT = "CONTROL_TYPE_DEFAULT", t.CONTROL_TYPE_CANNY = "CONTROL_TYPE_CANNY", t.CONTROL_TYPE_SCRIBBLE = "CONTROL_TYPE_SCRIBBLE", t.CONTROL_TYPE_FACE_MESH = "CONTROL_TYPE_FACE_MESH";
})(ir || (ir = {}));
var or;
(function(t) {
  t.SUBJECT_TYPE_DEFAULT = "SUBJECT_TYPE_DEFAULT", t.SUBJECT_TYPE_PERSON = "SUBJECT_TYPE_PERSON", t.SUBJECT_TYPE_ANIMAL = "SUBJECT_TYPE_ANIMAL", t.SUBJECT_TYPE_PRODUCT = "SUBJECT_TYPE_PRODUCT";
})(or || (or = {}));
var rr;
(function(t) {
  t.EDIT_MODE_DEFAULT = "EDIT_MODE_DEFAULT", t.EDIT_MODE_INPAINT_REMOVAL = "EDIT_MODE_INPAINT_REMOVAL", t.EDIT_MODE_INPAINT_INSERTION = "EDIT_MODE_INPAINT_INSERTION", t.EDIT_MODE_OUTPAINT = "EDIT_MODE_OUTPAINT", t.EDIT_MODE_CONTROLLED_EDITING = "EDIT_MODE_CONTROLLED_EDITING", t.EDIT_MODE_STYLE = "EDIT_MODE_STYLE", t.EDIT_MODE_BGSWAP = "EDIT_MODE_BGSWAP", t.EDIT_MODE_PRODUCT_IMAGE = "EDIT_MODE_PRODUCT_IMAGE";
})(rr || (rr = {}));
var sr;
(function(t) {
  t.FOREGROUND = "FOREGROUND", t.BACKGROUND = "BACKGROUND", t.PROMPT = "PROMPT", t.SEMANTIC = "SEMANTIC", t.INTERACTIVE = "INTERACTIVE";
})(sr || (sr = {}));
var ar;
(function(t) {
  t.ASSET = "ASSET", t.STYLE = "STYLE";
})(ar || (ar = {}));
var lr;
(function(t) {
  t.INSERT = "INSERT", t.REMOVE = "REMOVE", t.REMOVE_STATIC = "REMOVE_STATIC", t.OUTPAINT = "OUTPAINT";
})(lr || (lr = {}));
var ur;
(function(t) {
  t.OPTIMIZED = "OPTIMIZED", t.LOSSLESS = "LOSSLESS";
})(ur || (ur = {}));
var cr;
(function(t) {
  t.SUPERVISED_FINE_TUNING = "SUPERVISED_FINE_TUNING", t.PREFERENCE_TUNING = "PREFERENCE_TUNING";
})(cr || (cr = {}));
var dr;
(function(t) {
  t.STATE_UNSPECIFIED = "STATE_UNSPECIFIED", t.PROCESSING = "PROCESSING", t.ACTIVE = "ACTIVE", t.FAILED = "FAILED";
})(dr || (dr = {}));
var fr;
(function(t) {
  t.SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED", t.UPLOADED = "UPLOADED", t.GENERATED = "GENERATED";
})(fr || (fr = {}));
var hr;
(function(t) {
  t.TURN_COMPLETE_REASON_UNSPECIFIED = "TURN_COMPLETE_REASON_UNSPECIFIED", t.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL", t.RESPONSE_REJECTED = "RESPONSE_REJECTED", t.NEED_MORE_INPUT = "NEED_MORE_INPUT";
})(hr || (hr = {}));
var pr;
(function(t) {
  t.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED", t.TEXT = "TEXT", t.IMAGE = "IMAGE", t.VIDEO = "VIDEO", t.AUDIO = "AUDIO", t.DOCUMENT = "DOCUMENT";
})(pr || (pr = {}));
var gr;
(function(t) {
  t.START_SENSITIVITY_UNSPECIFIED = "START_SENSITIVITY_UNSPECIFIED", t.START_SENSITIVITY_HIGH = "START_SENSITIVITY_HIGH", t.START_SENSITIVITY_LOW = "START_SENSITIVITY_LOW";
})(gr || (gr = {}));
var mr;
(function(t) {
  t.END_SENSITIVITY_UNSPECIFIED = "END_SENSITIVITY_UNSPECIFIED", t.END_SENSITIVITY_HIGH = "END_SENSITIVITY_HIGH", t.END_SENSITIVITY_LOW = "END_SENSITIVITY_LOW";
})(mr || (mr = {}));
var yr;
(function(t) {
  t.ACTIVITY_HANDLING_UNSPECIFIED = "ACTIVITY_HANDLING_UNSPECIFIED", t.START_OF_ACTIVITY_INTERRUPTS = "START_OF_ACTIVITY_INTERRUPTS", t.NO_INTERRUPTION = "NO_INTERRUPTION";
})(yr || (yr = {}));
var vr;
(function(t) {
  t.TURN_COVERAGE_UNSPECIFIED = "TURN_COVERAGE_UNSPECIFIED", t.TURN_INCLUDES_ONLY_ACTIVITY = "TURN_INCLUDES_ONLY_ACTIVITY", t.TURN_INCLUDES_ALL_INPUT = "TURN_INCLUDES_ALL_INPUT";
})(vr || (vr = {}));
var _r;
(function(t) {
  t.SCALE_UNSPECIFIED = "SCALE_UNSPECIFIED", t.C_MAJOR_A_MINOR = "C_MAJOR_A_MINOR", t.D_FLAT_MAJOR_B_FLAT_MINOR = "D_FLAT_MAJOR_B_FLAT_MINOR", t.D_MAJOR_B_MINOR = "D_MAJOR_B_MINOR", t.E_FLAT_MAJOR_C_MINOR = "E_FLAT_MAJOR_C_MINOR", t.E_MAJOR_D_FLAT_MINOR = "E_MAJOR_D_FLAT_MINOR", t.F_MAJOR_D_MINOR = "F_MAJOR_D_MINOR", t.G_FLAT_MAJOR_E_FLAT_MINOR = "G_FLAT_MAJOR_E_FLAT_MINOR", t.G_MAJOR_E_MINOR = "G_MAJOR_E_MINOR", t.A_FLAT_MAJOR_F_MINOR = "A_FLAT_MAJOR_F_MINOR", t.A_MAJOR_G_FLAT_MINOR = "A_MAJOR_G_FLAT_MINOR", t.B_FLAT_MAJOR_G_MINOR = "B_FLAT_MAJOR_G_MINOR", t.B_MAJOR_A_FLAT_MINOR = "B_MAJOR_A_FLAT_MINOR";
})(_r || (_r = {}));
var Er;
(function(t) {
  t.MUSIC_GENERATION_MODE_UNSPECIFIED = "MUSIC_GENERATION_MODE_UNSPECIFIED", t.QUALITY = "QUALITY", t.DIVERSITY = "DIVERSITY", t.VOCALIZATION = "VOCALIZATION";
})(Er || (Er = {}));
var ht;
(function(t) {
  t.PLAYBACK_CONTROL_UNSPECIFIED = "PLAYBACK_CONTROL_UNSPECIFIED", t.PLAY = "PLAY", t.PAUSE = "PAUSE", t.STOP = "STOP", t.RESET_CONTEXT = "RESET_CONTEXT";
})(ht || (ht = {}));
class Qt {
  constructor(e) {
    const n = {};
    for (const i of e.headers.entries())
      n[i[0]] = i[1];
    this.headers = n, this.responseInternal = e;
  }
  json() {
    return this.responseInternal.json();
  }
}
class Yt {
  /**
   * Returns the concatenation of all text parts from the first candidate in the response.
   *
   * @remarks
   * If there are multiple candidates in the response, the text from the first
   * one will be returned.
   * If there are non-text parts in the response, the concatenation of all text
   * parts will be returned, and a warning will be logged.
   * If there are thought parts in the response, the concatenation of all text
   * parts excluding the thought parts will be returned.
   *
   * @example
   * ```ts
   * const response = await ai.models.generateContent({
   *   model: 'gemini-2.0-flash',
   *   contents:
   *     'Why is the sky blue?',
   * });
   *
   * console.debug(response.text);
   * ```
   */
  get text() {
    var e, n, i, o, r, l, u, d;
    if (((o = (i = (n = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || n === void 0 ? void 0 : n.content) === null || i === void 0 ? void 0 : i.parts) === null || o === void 0 ? void 0 : o.length) === 0)
      return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning text from the first one.");
    let c = "", f = !1;
    const h = [];
    for (const p of (d = (u = (l = (r = this.candidates) === null || r === void 0 ? void 0 : r[0]) === null || l === void 0 ? void 0 : l.content) === null || u === void 0 ? void 0 : u.parts) !== null && d !== void 0 ? d : []) {
      for (const [m, v] of Object.entries(p))
        m !== "text" && m !== "thought" && (v !== null || v !== void 0) && h.push(m);
      if (typeof p.text == "string") {
        if (typeof p.thought == "boolean" && p.thought)
          continue;
        f = !0, c += p.text;
      }
    }
    return h.length > 0 && console.warn(`there are non-text parts ${h} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`), f ? c : void 0;
  }
  /**
   * Returns the concatenation of all inline data parts from the first candidate
   * in the response.
   *
   * @remarks
   * If there are multiple candidates in the response, the inline data from the
   * first one will be returned. If there are non-inline data parts in the
   * response, the concatenation of all inline data parts will be returned, and
   * a warning will be logged.
   */
  get data() {
    var e, n, i, o, r, l, u, d;
    if (((o = (i = (n = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || n === void 0 ? void 0 : n.content) === null || i === void 0 ? void 0 : i.parts) === null || o === void 0 ? void 0 : o.length) === 0)
      return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning data from the first one.");
    let c = "";
    const f = [];
    for (const h of (d = (u = (l = (r = this.candidates) === null || r === void 0 ? void 0 : r[0]) === null || l === void 0 ? void 0 : l.content) === null || u === void 0 ? void 0 : u.parts) !== null && d !== void 0 ? d : []) {
      for (const [p, m] of Object.entries(h))
        p !== "inlineData" && (m !== null || m !== void 0) && f.push(p);
      h.inlineData && typeof h.inlineData.data == "string" && (c += atob(h.inlineData.data));
    }
    return f.length > 0 && console.warn(`there are non-data parts ${f} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`), c.length > 0 ? btoa(c) : void 0;
  }
  /**
   * Returns the function calls from the first candidate in the response.
   *
   * @remarks
   * If there are multiple candidates in the response, the function calls from
   * the first one will be returned.
   * If there are no function calls in the response, undefined will be returned.
   *
   * @example
   * ```ts
   * const controlLightFunctionDeclaration: FunctionDeclaration = {
   *   name: 'controlLight',
   *   parameters: {
   *   type: Type.OBJECT,
   *   description: 'Set the brightness and color temperature of a room light.',
   *   properties: {
   *     brightness: {
   *       type: Type.NUMBER,
   *       description:
   *         'Light level from 0 to 100. Zero is off and 100 is full brightness.',
   *     },
   *     colorTemperature: {
   *       type: Type.STRING,
   *       description:
   *         'Color temperature of the light fixture which can be `daylight`, `cool` or `warm`.',
   *     },
   *   },
   *   required: ['brightness', 'colorTemperature'],
   *  };
   *  const response = await ai.models.generateContent({
   *     model: 'gemini-2.0-flash',
   *     contents: 'Dim the lights so the room feels cozy and warm.',
   *     config: {
   *       tools: [{functionDeclarations: [controlLightFunctionDeclaration]}],
   *       toolConfig: {
   *         functionCallingConfig: {
   *           mode: FunctionCallingConfigMode.ANY,
   *           allowedFunctionNames: ['controlLight'],
   *         },
   *       },
   *     },
   *   });
   *  console.debug(JSON.stringify(response.functionCalls));
   * ```
   */
  get functionCalls() {
    var e, n, i, o, r, l, u, d;
    if (((o = (i = (n = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || n === void 0 ? void 0 : n.content) === null || i === void 0 ? void 0 : i.parts) === null || o === void 0 ? void 0 : o.length) === 0)
      return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning function calls from the first one.");
    const c = (d = (u = (l = (r = this.candidates) === null || r === void 0 ? void 0 : r[0]) === null || l === void 0 ? void 0 : l.content) === null || u === void 0 ? void 0 : u.parts) === null || d === void 0 ? void 0 : d.filter((f) => f.functionCall).map((f) => f.functionCall).filter((f) => f !== void 0);
    if ((c == null ? void 0 : c.length) !== 0)
      return c;
  }
  /**
   * Returns the first executable code from the first candidate in the response.
   *
   * @remarks
   * If there are multiple candidates in the response, the executable code from
   * the first one will be returned.
   * If there are no executable code in the response, undefined will be
   * returned.
   *
   * @example
   * ```ts
   * const response = await ai.models.generateContent({
   *   model: 'gemini-2.0-flash',
   *   contents:
   *     'What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50.'
   *   config: {
   *     tools: [{codeExecution: {}}],
   *   },
   * });
   *
   * console.debug(response.executableCode);
   * ```
   */
  get executableCode() {
    var e, n, i, o, r, l, u, d, c;
    if (((o = (i = (n = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || n === void 0 ? void 0 : n.content) === null || i === void 0 ? void 0 : i.parts) === null || o === void 0 ? void 0 : o.length) === 0)
      return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning executable code from the first one.");
    const f = (d = (u = (l = (r = this.candidates) === null || r === void 0 ? void 0 : r[0]) === null || l === void 0 ? void 0 : l.content) === null || u === void 0 ? void 0 : u.parts) === null || d === void 0 ? void 0 : d.filter((h) => h.executableCode).map((h) => h.executableCode).filter((h) => h !== void 0);
    if ((f == null ? void 0 : f.length) !== 0)
      return (c = f == null ? void 0 : f[0]) === null || c === void 0 ? void 0 : c.code;
  }
  /**
   * Returns the first code execution result from the first candidate in the response.
   *
   * @remarks
   * If there are multiple candidates in the response, the code execution result from
   * the first one will be returned.
   * If there are no code execution result in the response, undefined will be returned.
   *
   * @example
   * ```ts
   * const response = await ai.models.generateContent({
   *   model: 'gemini-2.0-flash',
   *   contents:
   *     'What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50.'
   *   config: {
   *     tools: [{codeExecution: {}}],
   *   },
   * });
   *
   * console.debug(response.codeExecutionResult);
   * ```
   */
  get codeExecutionResult() {
    var e, n, i, o, r, l, u, d, c;
    if (((o = (i = (n = (e = this.candidates) === null || e === void 0 ? void 0 : e[0]) === null || n === void 0 ? void 0 : n.content) === null || i === void 0 ? void 0 : i.parts) === null || o === void 0 ? void 0 : o.length) === 0)
      return;
    this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning code execution result from the first one.");
    const f = (d = (u = (l = (r = this.candidates) === null || r === void 0 ? void 0 : r[0]) === null || l === void 0 ? void 0 : l.content) === null || u === void 0 ? void 0 : u.parts) === null || d === void 0 ? void 0 : d.filter((h) => h.codeExecutionResult).map((h) => h.codeExecutionResult).filter((h) => h !== void 0);
    if ((f == null ? void 0 : f.length) !== 0)
      return (c = f == null ? void 0 : f[0]) === null || c === void 0 ? void 0 : c.output;
  }
}
class Tr {
}
class Cr {
}
class Kl {
}
class Wl {
}
class Yl {
}
class zl {
}
class Ar {
}
class Sr {
}
class wr {
}
class Xl {
}
class hn {
  /**
   * Instantiates an Operation of the same type as the one being called with the fields set from the API response.
   * @internal
   */
  _fromAPIResponse({ apiResponse: e, isVertexAI: n }) {
    const i = new hn();
    let o;
    const r = e;
    return n ? o = Fl(r) : o = bl(r), Object.assign(i, o), i;
  }
}
class Ir {
}
class Rr {
}
class Pr {
}
class Ql {
}
class Zl {
}
class jl {
}
class Nr {
}
class eu {
  /**
   * Returns the concatenation of all text parts from the server content if present.
   *
   * @remarks
   * If there are non-text parts in the response, the concatenation of all text
   * parts will be returned, and a warning will be logged.
   */
  get text() {
    var e, n, i;
    let o = "", r = !1;
    const l = [];
    for (const u of (i = (n = (e = this.serverContent) === null || e === void 0 ? void 0 : e.modelTurn) === null || n === void 0 ? void 0 : n.parts) !== null && i !== void 0 ? i : []) {
      for (const [d, c] of Object.entries(u))
        d !== "text" && d !== "thought" && c !== null && l.push(d);
      if (typeof u.text == "string") {
        if (typeof u.thought == "boolean" && u.thought)
          continue;
        r = !0, o += u.text;
      }
    }
    return l.length > 0 && console.warn(`there are non-text parts ${l} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`), r ? o : void 0;
  }
  /**
   * Returns the concatenation of all inline data parts from the server content if present.
   *
   * @remarks
   * If there are non-inline data parts in the
   * response, the concatenation of all inline data parts will be returned, and
   * a warning will be logged.
   */
  get data() {
    var e, n, i;
    let o = "";
    const r = [];
    for (const l of (i = (n = (e = this.serverContent) === null || e === void 0 ? void 0 : e.modelTurn) === null || n === void 0 ? void 0 : n.parts) !== null && i !== void 0 ? i : []) {
      for (const [u, d] of Object.entries(l))
        u !== "inlineData" && d !== null && r.push(u);
      l.inlineData && typeof l.inlineData.data == "string" && (o += atob(l.inlineData.data));
    }
    return r.length > 0 && console.warn(`there are non-data parts ${r} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`), o.length > 0 ? btoa(o) : void 0;
  }
}
class tu {
  /**
   * Returns the first audio chunk from the server content, if present.
   *
   * @remarks
   * If there are no audio chunks in the response, undefined will be returned.
   */
  get audioChunk() {
    if (this.serverContent && this.serverContent.audioChunks && this.serverContent.audioChunks.length > 0)
      return this.serverContent.audioChunks[0];
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function ae(t, e) {
  if (!e || typeof e != "string")
    throw new Error("model is required and must be a string");
  if (t.isVertexAI()) {
    if (e.startsWith("publishers/") || e.startsWith("projects/") || e.startsWith("models/"))
      return e;
    if (e.indexOf("/") >= 0) {
      const n = e.split("/", 2);
      return `publishers/${n[0]}/models/${n[1]}`;
    } else
      return `publishers/google/models/${e}`;
  } else
    return e.startsWith("models/") || e.startsWith("tunedModels/") ? e : `models/${e}`;
}
function Os(t, e) {
  const n = ae(t, e);
  return n ? n.startsWith("publishers/") && t.isVertexAI() ? `projects/${t.getProject()}/locations/${t.getLocation()}/${n}` : n.startsWith("models/") && t.isVertexAI() ? `projects/${t.getProject()}/locations/${t.getLocation()}/publishers/google/${n}` : n : "";
}
function qs(t) {
  return Array.isArray(t) ? t.map((e) => pn(e)) : [pn(t)];
}
function pn(t) {
  if (typeof t == "object" && t !== null)
    return t;
  throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof t}`);
}
function Bs(t) {
  const e = pn(t);
  if (e.mimeType && e.mimeType.startsWith("image/"))
    return e;
  throw new Error(`Unsupported mime type: ${e.mimeType}`);
}
function Vs(t) {
  const e = pn(t);
  if (e.mimeType && e.mimeType.startsWith("audio/"))
    return e;
  throw new Error(`Unsupported mime type: ${e.mimeType}`);
}
function kr(t) {
  if (t == null)
    throw new Error("PartUnion is required");
  if (typeof t == "object")
    return t;
  if (typeof t == "string")
    return { text: t };
  throw new Error(`Unsupported part type: ${typeof t}`);
}
function Hs(t) {
  if (t == null || Array.isArray(t) && t.length === 0)
    throw new Error("PartListUnion is required");
  return Array.isArray(t) ? t.map((e) => kr(e)) : [kr(t)];
}
function Xn(t) {
  return t != null && typeof t == "object" && "parts" in t && Array.isArray(t.parts);
}
function Mr(t) {
  return t != null && typeof t == "object" && "functionCall" in t;
}
function Ur(t) {
  return t != null && typeof t == "object" && "functionResponse" in t;
}
function _e(t) {
  if (t == null)
    throw new Error("ContentUnion is required");
  return Xn(t) ? t : {
    role: "user",
    parts: Hs(t)
  };
}
function ai(t, e) {
  if (!e)
    return [];
  if (t.isVertexAI() && Array.isArray(e))
    return e.flatMap((n) => {
      const i = _e(n);
      return i.parts && i.parts.length > 0 && i.parts[0].text !== void 0 ? [i.parts[0].text] : [];
    });
  if (t.isVertexAI()) {
    const n = _e(e);
    return n.parts && n.parts.length > 0 && n.parts[0].text !== void 0 ? [n.parts[0].text] : [];
  }
  return Array.isArray(e) ? e.map((n) => _e(n)) : [_e(e)];
}
function Ie(t) {
  if (t == null || Array.isArray(t) && t.length === 0)
    throw new Error("contents are required");
  if (!Array.isArray(t)) {
    if (Mr(t) || Ur(t))
      throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");
    return [_e(t)];
  }
  const e = [], n = [], i = Xn(t[0]);
  for (const o of t) {
    const r = Xn(o);
    if (r != i)
      throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");
    if (r)
      e.push(o);
    else {
      if (Mr(o) || Ur(o))
        throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");
      n.push(o);
    }
  }
  return i || e.push({ role: "user", parts: Hs(n) }), e;
}
function nu(t, e) {
  t.includes("null") && (e.nullable = !0);
  const n = t.filter((i) => i !== "null");
  if (n.length === 1)
    e.type = Object.values(Be).includes(n[0].toUpperCase()) ? n[0].toUpperCase() : Be.TYPE_UNSPECIFIED;
  else {
    e.anyOf = [];
    for (const i of n)
      e.anyOf.push({
        type: Object.values(Be).includes(i.toUpperCase()) ? i.toUpperCase() : Be.TYPE_UNSPECIFIED
      });
  }
}
function pt(t) {
  const e = {}, n = ["items"], i = ["anyOf"], o = ["properties"];
  if (t.type && t.anyOf)
    throw new Error("type and anyOf cannot be both populated.");
  const r = t.anyOf;
  r != null && r.length == 2 && (r[0].type === "null" ? (e.nullable = !0, t = r[1]) : r[1].type === "null" && (e.nullable = !0, t = r[0])), t.type instanceof Array && nu(t.type, e);
  for (const [l, u] of Object.entries(t))
    if (u != null)
      if (l == "type") {
        if (u === "null")
          throw new Error("type: null can not be the only possible type for the field.");
        if (u instanceof Array)
          continue;
        e.type = Object.values(Be).includes(u.toUpperCase()) ? u.toUpperCase() : Be.TYPE_UNSPECIFIED;
      } else if (n.includes(l))
        e[l] = pt(u);
      else if (i.includes(l)) {
        const d = [];
        for (const c of u) {
          if (c.type == "null") {
            e.nullable = !0;
            continue;
          }
          d.push(pt(c));
        }
        e[l] = d;
      } else if (o.includes(l)) {
        const d = {};
        for (const [c, f] of Object.entries(u))
          d[c] = pt(f);
        e[l] = d;
      } else {
        if (l === "additionalProperties")
          continue;
        e[l] = u;
      }
  return e;
}
function li(t) {
  return pt(t);
}
function ui(t) {
  if (typeof t == "object")
    return t;
  if (typeof t == "string")
    return {
      voiceConfig: {
        prebuiltVoiceConfig: {
          voiceName: t
        }
      }
    };
  throw new Error(`Unsupported speechConfig type: ${typeof t}`);
}
function ci(t) {
  if ("multiSpeakerVoiceConfig" in t)
    throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");
  return t;
}
function _t(t) {
  if (t.functionDeclarations)
    for (const e of t.functionDeclarations)
      e.parameters && (Object.keys(e.parameters).includes("$schema") ? e.parametersJsonSchema || (e.parametersJsonSchema = e.parameters, delete e.parameters) : e.parameters = pt(e.parameters)), e.response && (Object.keys(e.response).includes("$schema") ? e.responseJsonSchema || (e.responseJsonSchema = e.response, delete e.response) : e.response = pt(e.response));
  return t;
}
function Et(t) {
  if (t == null)
    throw new Error("tools is required");
  if (!Array.isArray(t))
    throw new Error("tools is required and must be an array of Tools");
  const e = [];
  for (const n of t)
    e.push(n);
  return e;
}
function iu(t, e, n, i = 1) {
  const o = !e.startsWith(`${n}/`) && e.split("/").length === i;
  return t.isVertexAI() ? e.startsWith("projects/") ? e : e.startsWith("locations/") ? `projects/${t.getProject()}/${e}` : e.startsWith(`${n}/`) ? `projects/${t.getProject()}/locations/${t.getLocation()}/${e}` : o ? `projects/${t.getProject()}/locations/${t.getLocation()}/${n}/${e}` : e : o ? `${n}/${e}` : e;
}
function qe(t, e) {
  if (typeof e != "string")
    throw new Error("name must be a string");
  return iu(t, e, "cachedContents");
}
function $s(t) {
  switch (t) {
    case "STATE_UNSPECIFIED":
      return "JOB_STATE_UNSPECIFIED";
    case "CREATING":
      return "JOB_STATE_RUNNING";
    case "ACTIVE":
      return "JOB_STATE_SUCCEEDED";
    case "FAILED":
      return "JOB_STATE_FAILED";
    default:
      return t;
  }
}
function He(t) {
  return si(t);
}
function ou(t) {
  return t != null && typeof t == "object" && "name" in t;
}
function Js(t) {
  return t != null && typeof t == "object" && "video" in t;
}
function Ks(t) {
  return t != null && typeof t == "object" && "uri" in t;
}
function di(t) {
  var e;
  let n;
  if (ou(t) && (n = t.name), !(Ks(t) && (n = t.uri, n === void 0)) && !(Js(t) && (n = (e = t.video) === null || e === void 0 ? void 0 : e.uri, n === void 0))) {
    if (typeof t == "string" && (n = t), n === void 0)
      throw new Error("Could not extract file name from the provided input.");
    if (n.startsWith("https://")) {
      const o = n.split("files/")[1].match(/[a-z0-9]+/);
      if (o === null)
        throw new Error(`Could not extract file name from URI ${n}`);
      n = o[0];
    } else n.startsWith("files/") && (n = n.split("files/")[1]);
    return n;
  }
}
function Ws(t, e) {
  let n;
  return t.isVertexAI() ? n = e ? "publishers/google/models" : "models" : n = e ? "models" : "tunedModels", n;
}
function Ys(t) {
  for (const e of ["models", "tunedModels", "publisherModels"])
    if (ru(t, e))
      return t[e];
  return [];
}
function ru(t, e) {
  return t !== null && typeof t == "object" && e in t;
}
function su(t, e = {}) {
  const n = t, i = {
    name: n.name,
    description: n.description,
    parametersJsonSchema: n.inputSchema
  };
  return n.outputSchema && (i.responseJsonSchema = n.outputSchema), e.behavior && (i.behavior = e.behavior), {
    functionDeclarations: [
      i
    ]
  };
}
function au(t, e = {}) {
  const n = [], i = /* @__PURE__ */ new Set();
  for (const o of t) {
    const r = o.name;
    if (i.has(r))
      throw new Error(`Duplicate function name ${r} found in MCP tools. Please ensure function names are unique.`);
    i.add(r);
    const l = su(o, e);
    l.functionDeclarations && n.push(...l.functionDeclarations);
  }
  return { functionDeclarations: n };
}
function zs(t, e) {
  let n;
  if (typeof e == "string")
    if (t.isVertexAI())
      if (e.startsWith("gs://"))
        n = { format: "jsonl", gcsUri: [e] };
      else if (e.startsWith("bq://"))
        n = { format: "bigquery", bigqueryUri: e };
      else
        throw new Error(`Unsupported string source for Vertex AI: ${e}`);
    else if (e.startsWith("files/"))
      n = { fileName: e };
    else
      throw new Error(`Unsupported string source for Gemini API: ${e}`);
  else if (Array.isArray(e)) {
    if (t.isVertexAI())
      throw new Error("InlinedRequest[] is not supported in Vertex AI.");
    n = { inlinedRequests: e };
  } else
    n = e;
  const i = [n.gcsUri, n.bigqueryUri].filter(Boolean).length, o = [
    n.inlinedRequests,
    n.fileName
  ].filter(Boolean).length;
  if (t.isVertexAI()) {
    if (o > 0 || i !== 1)
      throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.");
  } else if (i > 0 || o !== 1)
    throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");
  return n;
}
function lu(t) {
  if (typeof t != "string")
    return t;
  const e = t;
  if (e.startsWith("gs://"))
    return {
      format: "jsonl",
      gcsUri: e
    };
  if (e.startsWith("bq://"))
    return {
      format: "bigquery",
      bigqueryUri: e
    };
  throw new Error(`Unsupported destination: ${e}`);
}
function Xs(t) {
  if (typeof t != "object" || t === null)
    return {};
  const e = t, n = e.inlinedResponses;
  if (typeof n != "object" || n === null)
    return t;
  const o = n.inlinedResponses;
  if (!Array.isArray(o) || o.length === 0)
    return t;
  let r = !1;
  for (const l of o) {
    if (typeof l != "object" || l === null)
      continue;
    const d = l.response;
    if (typeof d != "object" || d === null)
      continue;
    if (d.embedding !== void 0) {
      r = !0;
      break;
    }
  }
  return r && (e.inlinedEmbedContentResponses = e.inlinedResponses, delete e.inlinedResponses), t;
}
function Tt(t, e) {
  const n = e;
  if (!t.isVertexAI()) {
    if (/batches\/[^/]+$/.test(n))
      return n.split("/").pop();
    throw new Error(`Invalid batch job name: ${n}.`);
  }
  if (/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(n))
    return n.split("/").pop();
  if (/^\d+$/.test(n))
    return n;
  throw new Error(`Invalid batch job name: ${n}.`);
}
function Qs(t) {
  const e = t;
  return e === "BATCH_STATE_UNSPECIFIED" ? "JOB_STATE_UNSPECIFIED" : e === "BATCH_STATE_PENDING" ? "JOB_STATE_PENDING" : e === "BATCH_STATE_RUNNING" ? "JOB_STATE_RUNNING" : e === "BATCH_STATE_SUCCEEDED" ? "JOB_STATE_SUCCEEDED" : e === "BATCH_STATE_FAILED" ? "JOB_STATE_FAILED" : e === "BATCH_STATE_CANCELLED" ? "JOB_STATE_CANCELLED" : e === "BATCH_STATE_EXPIRED" ? "JOB_STATE_EXPIRED" : e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function uu(t) {
  const e = {}, n = s(t, ["responsesFile"]);
  n != null && a(e, ["fileName"], n);
  const i = s(t, [
    "inlinedResponses",
    "inlinedResponses"
  ]);
  if (i != null) {
    let r = i;
    Array.isArray(r) && (r = r.map((l) => qu(l))), a(e, ["inlinedResponses"], r);
  }
  const o = s(t, [
    "inlinedEmbedContentResponses",
    "inlinedResponses"
  ]);
  if (o != null) {
    let r = o;
    Array.isArray(r) && (r = r.map((l) => l)), a(e, ["inlinedEmbedContentResponses"], r);
  }
  return e;
}
function cu(t) {
  const e = {}, n = s(t, ["predictionsFormat"]);
  n != null && a(e, ["format"], n);
  const i = s(t, [
    "gcsDestination",
    "outputUriPrefix"
  ]);
  i != null && a(e, ["gcsUri"], i);
  const o = s(t, [
    "bigqueryDestination",
    "outputUri"
  ]);
  return o != null && a(e, ["bigqueryUri"], o), e;
}
function du(t) {
  const e = {}, n = s(t, ["format"]);
  n != null && a(e, ["predictionsFormat"], n);
  const i = s(t, ["gcsUri"]);
  i != null && a(e, ["gcsDestination", "outputUriPrefix"], i);
  const o = s(t, ["bigqueryUri"]);
  if (o != null && a(e, ["bigqueryDestination", "outputUri"], o), s(t, ["fileName"]) !== void 0)
    throw new Error("fileName parameter is not supported in Vertex AI.");
  if (s(t, ["inlinedResponses"]) !== void 0)
    throw new Error("inlinedResponses parameter is not supported in Vertex AI.");
  if (s(t, ["inlinedEmbedContentResponses"]) !== void 0)
    throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");
  return e;
}
function un(t) {
  const e = {}, n = s(t, ["name"]);
  n != null && a(e, ["name"], n);
  const i = s(t, [
    "metadata",
    "displayName"
  ]);
  i != null && a(e, ["displayName"], i);
  const o = s(t, ["metadata", "state"]);
  o != null && a(e, ["state"], Qs(o));
  const r = s(t, [
    "metadata",
    "createTime"
  ]);
  r != null && a(e, ["createTime"], r);
  const l = s(t, [
    "metadata",
    "endTime"
  ]);
  l != null && a(e, ["endTime"], l);
  const u = s(t, [
    "metadata",
    "updateTime"
  ]);
  u != null && a(e, ["updateTime"], u);
  const d = s(t, ["metadata", "model"]);
  d != null && a(e, ["model"], d);
  const c = s(t, ["metadata", "output"]);
  return c != null && a(e, ["dest"], uu(Xs(c))), e;
}
function Qn(t) {
  const e = {}, n = s(t, ["name"]);
  n != null && a(e, ["name"], n);
  const i = s(t, ["displayName"]);
  i != null && a(e, ["displayName"], i);
  const o = s(t, ["state"]);
  o != null && a(e, ["state"], Qs(o));
  const r = s(t, ["error"]);
  r != null && a(e, ["error"], r);
  const l = s(t, ["createTime"]);
  l != null && a(e, ["createTime"], l);
  const u = s(t, ["startTime"]);
  u != null && a(e, ["startTime"], u);
  const d = s(t, ["endTime"]);
  d != null && a(e, ["endTime"], d);
  const c = s(t, ["updateTime"]);
  c != null && a(e, ["updateTime"], c);
  const f = s(t, ["model"]);
  f != null && a(e, ["model"], f);
  const h = s(t, ["inputConfig"]);
  h != null && a(e, ["src"], fu(h));
  const p = s(t, ["outputConfig"]);
  return p != null && a(e, ["dest"], cu(Xs(p))), e;
}
function fu(t) {
  const e = {}, n = s(t, ["instancesFormat"]);
  n != null && a(e, ["format"], n);
  const i = s(t, ["gcsSource", "uris"]);
  i != null && a(e, ["gcsUri"], i);
  const o = s(t, [
    "bigquerySource",
    "inputUri"
  ]);
  return o != null && a(e, ["bigqueryUri"], o), e;
}
function hu(t, e) {
  const n = {};
  if (s(e, ["format"]) !== void 0)
    throw new Error("format parameter is not supported in Gemini API.");
  if (s(e, ["gcsUri"]) !== void 0)
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  if (s(e, ["bigqueryUri"]) !== void 0)
    throw new Error("bigqueryUri parameter is not supported in Gemini API.");
  const i = s(e, ["fileName"]);
  i != null && a(n, ["fileName"], i);
  const o = s(e, [
    "inlinedRequests"
  ]);
  if (o != null) {
    let r = o;
    Array.isArray(r) && (r = r.map((l) => Ou(t, l))), a(n, ["requests", "requests"], r);
  }
  return n;
}
function pu(t) {
  const e = {}, n = s(t, ["format"]);
  n != null && a(e, ["instancesFormat"], n);
  const i = s(t, ["gcsUri"]);
  i != null && a(e, ["gcsSource", "uris"], i);
  const o = s(t, ["bigqueryUri"]);
  if (o != null && a(e, ["bigquerySource", "inputUri"], o), s(t, ["fileName"]) !== void 0)
    throw new Error("fileName parameter is not supported in Vertex AI.");
  if (s(t, ["inlinedRequests"]) !== void 0)
    throw new Error("inlinedRequests parameter is not supported in Vertex AI.");
  return e;
}
function gu(t) {
  const e = {}, n = s(t, ["data"]);
  if (n != null && a(e, ["data"], n), s(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const i = s(t, ["mimeType"]);
  return i != null && a(e, ["mimeType"], i), e;
}
function mu(t, e) {
  const n = {}, i = s(e, ["name"]);
  return i != null && a(n, ["_url", "name"], Tt(t, i)), n;
}
function yu(t, e) {
  const n = {}, i = s(e, ["name"]);
  return i != null && a(n, ["_url", "name"], Tt(t, i)), n;
}
function vu(t) {
  const e = {}, n = s(t, ["content"]);
  n != null && a(e, ["content"], n);
  const i = s(t, [
    "citationMetadata"
  ]);
  i != null && a(e, ["citationMetadata"], _u(i));
  const o = s(t, ["tokenCount"]);
  o != null && a(e, ["tokenCount"], o);
  const r = s(t, ["finishReason"]);
  r != null && a(e, ["finishReason"], r);
  const l = s(t, ["avgLogprobs"]);
  l != null && a(e, ["avgLogprobs"], l);
  const u = s(t, [
    "groundingMetadata"
  ]);
  u != null && a(e, ["groundingMetadata"], u);
  const d = s(t, ["index"]);
  d != null && a(e, ["index"], d);
  const c = s(t, [
    "logprobsResult"
  ]);
  c != null && a(e, ["logprobsResult"], c);
  const f = s(t, [
    "safetyRatings"
  ]);
  if (f != null) {
    let p = f;
    Array.isArray(p) && (p = p.map((m) => m)), a(e, ["safetyRatings"], p);
  }
  const h = s(t, [
    "urlContextMetadata"
  ]);
  return h != null && a(e, ["urlContextMetadata"], h), e;
}
function _u(t) {
  const e = {}, n = s(t, ["citationSources"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((o) => o)), a(e, ["citations"], i);
  }
  return e;
}
function Zs(t) {
  const e = {}, n = s(t, ["parts"]);
  if (n != null) {
    let o = n;
    Array.isArray(o) && (o = o.map((r) => Wu(r))), a(e, ["parts"], o);
  }
  const i = s(t, ["role"]);
  return i != null && a(e, ["role"], i), e;
}
function Eu(t, e) {
  const n = {}, i = s(t, ["displayName"]);
  if (e !== void 0 && i != null && a(e, ["batch", "displayName"], i), s(t, ["dest"]) !== void 0)
    throw new Error("dest parameter is not supported in Gemini API.");
  return n;
}
function Tu(t, e) {
  const n = {}, i = s(t, ["displayName"]);
  e !== void 0 && i != null && a(e, ["displayName"], i);
  const o = s(t, ["dest"]);
  return e !== void 0 && o != null && a(e, ["outputConfig"], du(lu(o))), n;
}
function Dr(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["src"]);
  o != null && a(n, ["batch", "inputConfig"], hu(t, zs(t, o)));
  const r = s(e, ["config"]);
  return r != null && Eu(r, n), n;
}
function Cu(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["model"], ae(t, i));
  const o = s(e, ["src"]);
  o != null && a(n, ["inputConfig"], pu(zs(t, o)));
  const r = s(e, ["config"]);
  return r != null && Tu(r, n), n;
}
function Au(t, e) {
  const n = {}, i = s(t, ["displayName"]);
  return e !== void 0 && i != null && a(e, ["batch", "displayName"], i), n;
}
function Su(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["src"]);
  o != null && a(n, ["batch", "inputConfig"], Mu(t, o));
  const r = s(e, ["config"]);
  return r != null && Au(r, n), n;
}
function wu(t, e) {
  const n = {}, i = s(e, ["name"]);
  return i != null && a(n, ["_url", "name"], Tt(t, i)), n;
}
function Iu(t, e) {
  const n = {}, i = s(e, ["name"]);
  return i != null && a(n, ["_url", "name"], Tt(t, i)), n;
}
function Ru(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, ["name"]);
  i != null && a(e, ["name"], i);
  const o = s(t, ["done"]);
  o != null && a(e, ["done"], o);
  const r = s(t, ["error"]);
  return r != null && a(e, ["error"], r), e;
}
function Pu(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, ["name"]);
  i != null && a(e, ["name"], i);
  const o = s(t, ["done"]);
  o != null && a(e, ["done"], o);
  const r = s(t, ["error"]);
  return r != null && a(e, ["error"], r), e;
}
function Nu(t, e) {
  const n = {}, i = s(e, ["contents"]);
  if (i != null) {
    let r = ai(t, i);
    Array.isArray(r) && (r = r.map((l) => l)), a(n, ["requests[]", "request", "content"], r);
  }
  const o = s(e, ["config"]);
  return o != null && (a(n, ["_self"], ku(o, n)), xl(n, { "requests[].*": "requests[].request.*" })), n;
}
function ku(t, e) {
  const n = {}, i = s(t, ["taskType"]);
  e !== void 0 && i != null && a(e, ["requests[]", "taskType"], i);
  const o = s(t, ["title"]);
  e !== void 0 && o != null && a(e, ["requests[]", "title"], o);
  const r = s(t, [
    "outputDimensionality"
  ]);
  if (e !== void 0 && r != null && a(e, ["requests[]", "outputDimensionality"], r), s(t, ["mimeType"]) !== void 0)
    throw new Error("mimeType parameter is not supported in Gemini API.");
  if (s(t, ["autoTruncate"]) !== void 0)
    throw new Error("autoTruncate parameter is not supported in Gemini API.");
  return n;
}
function Mu(t, e) {
  const n = {}, i = s(e, ["fileName"]);
  i != null && a(n, ["file_name"], i);
  const o = s(e, [
    "inlinedRequests"
  ]);
  return o != null && a(n, ["requests"], Nu(t, o)), n;
}
function Uu(t) {
  const e = {};
  if (s(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const n = s(t, ["fileUri"]);
  n != null && a(e, ["fileUri"], n);
  const i = s(t, ["mimeType"]);
  return i != null && a(e, ["mimeType"], i), e;
}
function Du(t, e, n) {
  const i = {}, o = s(e, [
    "systemInstruction"
  ]);
  n !== void 0 && o != null && a(n, ["systemInstruction"], Zs(_e(o)));
  const r = s(e, ["temperature"]);
  r != null && a(i, ["temperature"], r);
  const l = s(e, ["topP"]);
  l != null && a(i, ["topP"], l);
  const u = s(e, ["topK"]);
  u != null && a(i, ["topK"], u);
  const d = s(e, [
    "candidateCount"
  ]);
  d != null && a(i, ["candidateCount"], d);
  const c = s(e, [
    "maxOutputTokens"
  ]);
  c != null && a(i, ["maxOutputTokens"], c);
  const f = s(e, [
    "stopSequences"
  ]);
  f != null && a(i, ["stopSequences"], f);
  const h = s(e, [
    "responseLogprobs"
  ]);
  h != null && a(i, ["responseLogprobs"], h);
  const p = s(e, ["logprobs"]);
  p != null && a(i, ["logprobs"], p);
  const m = s(e, [
    "presencePenalty"
  ]);
  m != null && a(i, ["presencePenalty"], m);
  const v = s(e, [
    "frequencyPenalty"
  ]);
  v != null && a(i, ["frequencyPenalty"], v);
  const y = s(e, ["seed"]);
  y != null && a(i, ["seed"], y);
  const _ = s(e, [
    "responseMimeType"
  ]);
  _ != null && a(i, ["responseMimeType"], _);
  const C = s(e, [
    "responseSchema"
  ]);
  C != null && a(i, ["responseSchema"], li(C));
  const A = s(e, [
    "responseJsonSchema"
  ]);
  if (A != null && a(i, ["responseJsonSchema"], A), s(e, ["routingConfig"]) !== void 0)
    throw new Error("routingConfig parameter is not supported in Gemini API.");
  if (s(e, ["modelSelectionConfig"]) !== void 0)
    throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");
  const k = s(e, [
    "safetySettings"
  ]);
  if (n !== void 0 && k != null) {
    let H = k;
    Array.isArray(H) && (H = H.map((q) => Yu(q))), a(n, ["safetySettings"], H);
  }
  const b = s(e, ["tools"]);
  if (n !== void 0 && b != null) {
    let H = Et(b);
    Array.isArray(H) && (H = H.map((q) => zu(_t(q)))), a(n, ["tools"], H);
  }
  const N = s(e, ["toolConfig"]);
  if (n !== void 0 && N != null && a(n, ["toolConfig"], N), s(e, ["labels"]) !== void 0)
    throw new Error("labels parameter is not supported in Gemini API.");
  const M = s(e, [
    "cachedContent"
  ]);
  n !== void 0 && M != null && a(n, ["cachedContent"], qe(t, M));
  const w = s(e, [
    "responseModalities"
  ]);
  w != null && a(i, ["responseModalities"], w);
  const D = s(e, [
    "mediaResolution"
  ]);
  D != null && a(i, ["mediaResolution"], D);
  const g = s(e, ["speechConfig"]);
  if (g != null && a(i, ["speechConfig"], ui(g)), s(e, ["audioTimestamp"]) !== void 0)
    throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  const E = s(e, [
    "thinkingConfig"
  ]);
  E != null && a(i, ["thinkingConfig"], E);
  const G = s(e, ["imageConfig"]);
  return G != null && a(i, ["imageConfig"], G), i;
}
function xu(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, ["candidates"]);
  if (i != null) {
    let d = i;
    Array.isArray(d) && (d = d.map((c) => vu(c))), a(e, ["candidates"], d);
  }
  const o = s(t, ["modelVersion"]);
  o != null && a(e, ["modelVersion"], o);
  const r = s(t, [
    "promptFeedback"
  ]);
  r != null && a(e, ["promptFeedback"], r);
  const l = s(t, ["responseId"]);
  l != null && a(e, ["responseId"], l);
  const u = s(t, [
    "usageMetadata"
  ]);
  return u != null && a(e, ["usageMetadata"], u), e;
}
function Lu(t, e) {
  const n = {}, i = s(e, ["name"]);
  return i != null && a(n, ["_url", "name"], Tt(t, i)), n;
}
function bu(t, e) {
  const n = {}, i = s(e, ["name"]);
  return i != null && a(n, ["_url", "name"], Tt(t, i)), n;
}
function Fu(t) {
  const e = {};
  if (s(t, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const n = s(t, ["enableWidget"]);
  return n != null && a(e, ["enableWidget"], n), e;
}
function Gu(t) {
  const e = {};
  if (s(t, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  const n = s(t, [
    "timeRangeFilter"
  ]);
  return n != null && a(e, ["timeRangeFilter"], n), e;
}
function Ou(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["request", "model"], ae(t, i));
  const o = s(e, ["contents"]);
  if (o != null) {
    let u = Ie(o);
    Array.isArray(u) && (u = u.map((d) => Zs(d))), a(n, ["request", "contents"], u);
  }
  const r = s(e, ["metadata"]);
  r != null && a(n, ["metadata"], r);
  const l = s(e, ["config"]);
  return l != null && a(n, ["request", "generationConfig"], Du(t, l, s(n, ["request"], {}))), n;
}
function qu(t) {
  const e = {}, n = s(t, ["response"]);
  n != null && a(e, ["response"], xu(n));
  const i = s(t, ["error"]);
  return i != null && a(e, ["error"], i), e;
}
function Bu(t, e) {
  const n = {}, i = s(t, ["pageSize"]);
  e !== void 0 && i != null && a(e, ["_query", "pageSize"], i);
  const o = s(t, ["pageToken"]);
  if (e !== void 0 && o != null && a(e, ["_query", "pageToken"], o), s(t, ["filter"]) !== void 0)
    throw new Error("filter parameter is not supported in Gemini API.");
  return n;
}
function Vu(t, e) {
  const n = {}, i = s(t, ["pageSize"]);
  e !== void 0 && i != null && a(e, ["_query", "pageSize"], i);
  const o = s(t, ["pageToken"]);
  e !== void 0 && o != null && a(e, ["_query", "pageToken"], o);
  const r = s(t, ["filter"]);
  return e !== void 0 && r != null && a(e, ["_query", "filter"], r), n;
}
function Hu(t) {
  const e = {}, n = s(t, ["config"]);
  return n != null && Bu(n, e), e;
}
function $u(t) {
  const e = {}, n = s(t, ["config"]);
  return n != null && Vu(n, e), e;
}
function Ju(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, [
    "nextPageToken"
  ]);
  i != null && a(e, ["nextPageToken"], i);
  const o = s(t, ["operations"]);
  if (o != null) {
    let r = o;
    Array.isArray(r) && (r = r.map((l) => un(l))), a(e, ["batchJobs"], r);
  }
  return e;
}
function Ku(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, [
    "nextPageToken"
  ]);
  i != null && a(e, ["nextPageToken"], i);
  const o = s(t, [
    "batchPredictionJobs"
  ]);
  if (o != null) {
    let r = o;
    Array.isArray(r) && (r = r.map((l) => Qn(l))), a(e, ["batchJobs"], r);
  }
  return e;
}
function Wu(t) {
  const e = {}, n = s(t, ["functionCall"]);
  n != null && a(e, ["functionCall"], n);
  const i = s(t, [
    "codeExecutionResult"
  ]);
  i != null && a(e, ["codeExecutionResult"], i);
  const o = s(t, [
    "executableCode"
  ]);
  o != null && a(e, ["executableCode"], o);
  const r = s(t, ["fileData"]);
  r != null && a(e, ["fileData"], Uu(r));
  const l = s(t, [
    "functionResponse"
  ]);
  l != null && a(e, ["functionResponse"], l);
  const u = s(t, ["inlineData"]);
  u != null && a(e, ["inlineData"], gu(u));
  const d = s(t, ["text"]);
  d != null && a(e, ["text"], d);
  const c = s(t, ["thought"]);
  c != null && a(e, ["thought"], c);
  const f = s(t, [
    "thoughtSignature"
  ]);
  f != null && a(e, ["thoughtSignature"], f);
  const h = s(t, [
    "videoMetadata"
  ]);
  return h != null && a(e, ["videoMetadata"], h), e;
}
function Yu(t) {
  const e = {}, n = s(t, ["category"]);
  if (n != null && a(e, ["category"], n), s(t, ["method"]) !== void 0)
    throw new Error("method parameter is not supported in Gemini API.");
  const i = s(t, ["threshold"]);
  return i != null && a(e, ["threshold"], i), e;
}
function zu(t) {
  const e = {}, n = s(t, [
    "functionDeclarations"
  ]);
  if (n != null) {
    let c = n;
    Array.isArray(c) && (c = c.map((f) => f)), a(e, ["functionDeclarations"], c);
  }
  if (s(t, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const i = s(t, [
    "googleSearchRetrieval"
  ]);
  i != null && a(e, ["googleSearchRetrieval"], i);
  const o = s(t, ["googleMaps"]);
  o != null && a(e, ["googleMaps"], Fu(o));
  const r = s(t, ["computerUse"]);
  r != null && a(e, ["computerUse"], r);
  const l = s(t, [
    "codeExecution"
  ]);
  if (l != null && a(e, ["codeExecution"], l), s(t, ["enterpriseWebSearch"]) !== void 0)
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const u = s(t, ["googleSearch"]);
  u != null && a(e, ["googleSearch"], Gu(u));
  const d = s(t, ["urlContext"]);
  return d != null && a(e, ["urlContext"], d), e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var tt;
(function(t) {
  t.PAGED_ITEM_BATCH_JOBS = "batchJobs", t.PAGED_ITEM_MODELS = "models", t.PAGED_ITEM_TUNING_JOBS = "tuningJobs", t.PAGED_ITEM_FILES = "files", t.PAGED_ITEM_CACHED_CONTENTS = "cachedContents", t.PAGED_ITEM_RAG_STORES = "ragStores", t.PAGED_ITEM_DOCUMENTS = "documents";
})(tt || (tt = {}));
class jt {
  constructor(e, n, i, o) {
    this.pageInternal = [], this.paramsInternal = {}, this.requestInternal = n, this.init(e, i, o);
  }
  init(e, n, i) {
    var o, r;
    this.nameInternal = e, this.pageInternal = n[this.nameInternal] || [], this.sdkHttpResponseInternal = n == null ? void 0 : n.sdkHttpResponse, this.idxInternal = 0;
    let l = { config: {} };
    !i || Object.keys(i).length === 0 ? l = { config: {} } : typeof i == "object" ? l = Object.assign({}, i) : l = i, l.config && (l.config.pageToken = n.nextPageToken), this.paramsInternal = l, this.pageInternalSize = (r = (o = l.config) === null || o === void 0 ? void 0 : o.pageSize) !== null && r !== void 0 ? r : this.pageInternal.length;
  }
  initNextPage(e) {
    this.init(this.nameInternal, e, this.paramsInternal);
  }
  /**
   * Returns the current page, which is a list of items.
   *
   * @remarks
   * The first page is retrieved when the pager is created. The returned list of
   * items could be a subset of the entire list.
   */
  get page() {
    return this.pageInternal;
  }
  /**
   * Returns the type of paged item (for example, ``batch_jobs``).
   */
  get name() {
    return this.nameInternal;
  }
  /**
   * Returns the length of the page fetched each time by this pager.
   *
   * @remarks
   * The number of items in the page is less than or equal to the page length.
   */
  get pageSize() {
    return this.pageInternalSize;
  }
  /**
   * Returns the headers of the API response.
   */
  get sdkHttpResponse() {
    return this.sdkHttpResponseInternal;
  }
  /**
   * Returns the parameters when making the API request for the next page.
   *
   * @remarks
   * Parameters contain a set of optional configs that can be
   * used to customize the API request. For example, the `pageToken` parameter
   * contains the token to request the next page.
   */
  get params() {
    return this.paramsInternal;
  }
  /**
   * Returns the total number of items in the current page.
   */
  get pageLength() {
    return this.pageInternal.length;
  }
  /**
   * Returns the item at the given index.
   */
  getItem(e) {
    return this.pageInternal[e];
  }
  /**
   * Returns an async iterator that support iterating through all items
   * retrieved from the API.
   *
   * @remarks
   * The iterator will automatically fetch the next page if there are more items
   * to fetch from the API.
   *
   * @example
   *
   * ```ts
   * const pager = await ai.files.list({config: {pageSize: 10}});
   * for await (const file of pager) {
   *   console.log(file.name);
   * }
   * ```
   */
  [Symbol.asyncIterator]() {
    return {
      next: async () => {
        if (this.idxInternal >= this.pageLength)
          if (this.hasNextPage())
            await this.nextPage();
          else
            return { value: void 0, done: !0 };
        const e = this.getItem(this.idxInternal);
        return this.idxInternal += 1, { value: e, done: !1 };
      },
      return: async () => ({ value: void 0, done: !0 })
    };
  }
  /**
   * Fetches the next page of items. This makes a new API request.
   *
   * @throws {Error} If there are no more pages to fetch.
   *
   * @example
   *
   * ```ts
   * const pager = await ai.files.list({config: {pageSize: 10}});
   * let page = pager.page;
   * while (true) {
   *   for (const file of page) {
   *     console.log(file.name);
   *   }
   *   if (!pager.hasNextPage()) {
   *     break;
   *   }
   *   page = await pager.nextPage();
   * }
   * ```
   */
  async nextPage() {
    if (!this.hasNextPage())
      throw new Error("No more pages to fetch.");
    const e = await this.requestInternal(this.params);
    return this.initNextPage(e), this.page;
  }
  /**
   * Returns true if there are more pages to fetch from the API.
   */
  hasNextPage() {
    var e;
    return ((e = this.params.config) === null || e === void 0 ? void 0 : e.pageToken) !== void 0;
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Xu extends rt {
  constructor(e) {
    super(), this.apiClient = e, this.create = async (n) => (this.apiClient.isVertexAI() && (n.config = this.formatDestination(n.src, n.config)), this.createInternal(n)), this.createEmbeddings = async (n) => {
      if (console.warn("batches.createEmbeddings() is experimental and may change without notice."), this.apiClient.isVertexAI())
        throw new Error("Vertex AI does not support batches.createEmbeddings.");
      return this.createEmbeddingsInternal(n);
    }, this.list = async (n = {}) => new jt(tt.PAGED_ITEM_BATCH_JOBS, (i) => this.listInternal(i), await this.listInternal(n), n);
  }
  // Helper function to handle inlined generate content requests
  createInlinedGenerateContentRequest(e) {
    const n = Dr(
      this.apiClient,
      // Use instance apiClient
      e
    ), i = n._url, o = X("{model}:batchGenerateContent", i), u = n.batch.inputConfig.requests, d = u.requests, c = [];
    for (const f of d) {
      const h = Object.assign({}, f);
      if (h.systemInstruction) {
        const p = h.systemInstruction;
        delete h.systemInstruction;
        const m = h.request;
        m.systemInstruction = p, h.request = m;
      }
      c.push(h);
    }
    return u.requests = c, delete n.config, delete n._url, delete n._query, { path: o, body: n };
  }
  // Helper function to get the first GCS URI
  getGcsUri(e) {
    if (typeof e == "string")
      return e.startsWith("gs://") ? e : void 0;
    if (!Array.isArray(e) && e.gcsUri && e.gcsUri.length > 0)
      return e.gcsUri[0];
  }
  // Helper function to get the BigQuery URI
  getBigqueryUri(e) {
    if (typeof e == "string")
      return e.startsWith("bq://") ? e : void 0;
    if (!Array.isArray(e))
      return e.bigqueryUri;
  }
  // Function to format the destination configuration for Vertex AI
  formatDestination(e, n) {
    const i = n ? Object.assign({}, n) : {}, o = Date.now().toString();
    if (i.displayName || (i.displayName = `genaiBatchJob_${o}`), i.dest === void 0) {
      const r = this.getGcsUri(e), l = this.getBigqueryUri(e);
      if (r)
        r.endsWith(".jsonl") ? i.dest = `${r.slice(0, -6)}/dest` : i.dest = `${r}_dest_${o}`;
      else if (l)
        i.dest = `${l}_dest_${o}`;
      else
        throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.");
    }
    return i;
  }
  /**
   * Internal method to create batch job.
   *
   * @param params - The parameters for create batch job request.
   * @return The created batch job.
   *
   */
  async createInternal(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = Cu(this.apiClient, e);
      return u = X("batchPredictionJobs", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json()), l.then((f) => Qn(f));
    } else {
      const c = Dr(this.apiClient, e);
      return u = X("{model}:batchGenerateContent", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json()), l.then((f) => un(f));
    }
  }
  /**
   * Internal method to create batch job.
   *
   * @param params - The parameters for create batch job request.
   * @return The created batch job.
   *
   */
  async createEmbeddingsInternal(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const u = Su(this.apiClient, e);
      return r = X("{model}:asyncBatchEmbedContent", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json()), o.then((d) => un(d));
    }
  }
  /**
   * Gets batch job configurations.
   *
   * @param params - The parameters for the get request.
   * @return The batch job.
   *
   * @example
   * ```ts
   * await ai.batches.get({name: '...'}); // The server-generated resource name.
   * ```
   */
  async get(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = bu(this.apiClient, e);
      return u = X("batchPredictionJobs/{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json()), l.then((f) => Qn(f));
    } else {
      const c = Lu(this.apiClient, e);
      return u = X("batches/{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json()), l.then((f) => un(f));
    }
  }
  /**
   * Cancels a batch job.
   *
   * @param params - The parameters for the cancel request.
   * @return The empty response returned by the API.
   *
   * @example
   * ```ts
   * await ai.batches.cancel({name: '...'}); // The server-generated resource name.
   * ```
   */
  async cancel(e) {
    var n, i, o, r;
    let l = "", u = {};
    if (this.apiClient.isVertexAI()) {
      const d = yu(this.apiClient, e);
      l = X("batchPredictionJobs/{name}:cancel", d._url), u = d._query, delete d._url, delete d._query, await this.apiClient.request({
        path: l,
        queryParams: u,
        body: JSON.stringify(d),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      });
    } else {
      const d = mu(this.apiClient, e);
      l = X("batches/{name}:cancel", d._url), u = d._query, delete d._url, delete d._query, await this.apiClient.request({
        path: l,
        queryParams: u,
        body: JSON.stringify(d),
        httpMethod: "POST",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      });
    }
  }
  async listInternal(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = $u(e);
      return u = X("batchPredictionJobs", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = Ku(f), p = new Nr();
        return Object.assign(p, h), p;
      });
    } else {
      const c = Hu(e);
      return u = X("batches", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = Ju(f), p = new Nr();
        return Object.assign(p, h), p;
      });
    }
  }
  /**
   * Deletes a batch job.
   *
   * @param params - The parameters for the delete request.
   * @return The empty response returned by the API.
   *
   * @example
   * ```ts
   * await ai.batches.delete({name: '...'}); // The server-generated resource name.
   * ```
   */
  async delete(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = Iu(this.apiClient, e);
      return u = X("batchPredictionJobs/{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "DELETE",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => Pu(f));
    } else {
      const c = wu(this.apiClient, e);
      return u = X("batches/{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "DELETE",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => Ru(f));
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Qu(t) {
  const e = {}, n = s(t, ["data"]);
  if (n != null && a(e, ["data"], n), s(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const i = s(t, ["mimeType"]);
  return i != null && a(e, ["mimeType"], i), e;
}
function xr(t) {
  const e = {}, n = s(t, ["parts"]);
  if (n != null) {
    let o = n;
    Array.isArray(o) && (o = o.map((r) => vc(r))), a(e, ["parts"], o);
  }
  const i = s(t, ["role"]);
  return i != null && a(e, ["role"], i), e;
}
function Zu(t, e) {
  const n = {}, i = s(t, ["ttl"]);
  e !== void 0 && i != null && a(e, ["ttl"], i);
  const o = s(t, ["expireTime"]);
  e !== void 0 && o != null && a(e, ["expireTime"], o);
  const r = s(t, ["displayName"]);
  e !== void 0 && r != null && a(e, ["displayName"], r);
  const l = s(t, ["contents"]);
  if (e !== void 0 && l != null) {
    let f = Ie(l);
    Array.isArray(f) && (f = f.map((h) => xr(h))), a(e, ["contents"], f);
  }
  const u = s(t, [
    "systemInstruction"
  ]);
  e !== void 0 && u != null && a(e, ["systemInstruction"], xr(_e(u)));
  const d = s(t, ["tools"]);
  if (e !== void 0 && d != null) {
    let f = d;
    Array.isArray(f) && (f = f.map((h) => _c(h))), a(e, ["tools"], f);
  }
  const c = s(t, ["toolConfig"]);
  if (e !== void 0 && c != null && a(e, ["toolConfig"], c), s(t, ["kmsKeyName"]) !== void 0)
    throw new Error("kmsKeyName parameter is not supported in Gemini API.");
  return n;
}
function ju(t, e) {
  const n = {}, i = s(t, ["ttl"]);
  e !== void 0 && i != null && a(e, ["ttl"], i);
  const o = s(t, ["expireTime"]);
  e !== void 0 && o != null && a(e, ["expireTime"], o);
  const r = s(t, ["displayName"]);
  e !== void 0 && r != null && a(e, ["displayName"], r);
  const l = s(t, ["contents"]);
  if (e !== void 0 && l != null) {
    let h = Ie(l);
    Array.isArray(h) && (h = h.map((p) => p)), a(e, ["contents"], h);
  }
  const u = s(t, [
    "systemInstruction"
  ]);
  e !== void 0 && u != null && a(e, ["systemInstruction"], _e(u));
  const d = s(t, ["tools"]);
  if (e !== void 0 && d != null) {
    let h = d;
    Array.isArray(h) && (h = h.map((p) => Ec(p))), a(e, ["tools"], h);
  }
  const c = s(t, ["toolConfig"]);
  e !== void 0 && c != null && a(e, ["toolConfig"], c);
  const f = s(t, ["kmsKeyName"]);
  return e !== void 0 && f != null && a(e, ["encryption_spec", "kmsKeyName"], f), n;
}
function ec(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["model"], Os(t, i));
  const o = s(e, ["config"]);
  return o != null && Zu(o, n), n;
}
function tc(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["model"], Os(t, i));
  const o = s(e, ["config"]);
  return o != null && ju(o, n), n;
}
function nc(t, e) {
  const n = {}, i = s(e, ["name"]);
  return i != null && a(n, ["_url", "name"], qe(t, i)), n;
}
function ic(t, e) {
  const n = {}, i = s(e, ["name"]);
  return i != null && a(n, ["_url", "name"], qe(t, i)), n;
}
function oc(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  return n != null && a(e, ["sdkHttpResponse"], n), e;
}
function rc(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  return n != null && a(e, ["sdkHttpResponse"], n), e;
}
function sc(t) {
  const e = {};
  if (s(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const n = s(t, ["fileUri"]);
  n != null && a(e, ["fileUri"], n);
  const i = s(t, ["mimeType"]);
  return i != null && a(e, ["mimeType"], i), e;
}
function ac(t) {
  const e = {};
  if (s(t, ["behavior"]) !== void 0)
    throw new Error("behavior parameter is not supported in Vertex AI.");
  const n = s(t, ["description"]);
  n != null && a(e, ["description"], n);
  const i = s(t, ["name"]);
  i != null && a(e, ["name"], i);
  const o = s(t, ["parameters"]);
  o != null && a(e, ["parameters"], o);
  const r = s(t, [
    "parametersJsonSchema"
  ]);
  r != null && a(e, ["parametersJsonSchema"], r);
  const l = s(t, ["response"]);
  l != null && a(e, ["response"], l);
  const u = s(t, [
    "responseJsonSchema"
  ]);
  return u != null && a(e, ["responseJsonSchema"], u), e;
}
function lc(t, e) {
  const n = {}, i = s(e, ["name"]);
  return i != null && a(n, ["_url", "name"], qe(t, i)), n;
}
function uc(t, e) {
  const n = {}, i = s(e, ["name"]);
  return i != null && a(n, ["_url", "name"], qe(t, i)), n;
}
function cc(t) {
  const e = {};
  if (s(t, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const n = s(t, ["enableWidget"]);
  return n != null && a(e, ["enableWidget"], n), e;
}
function dc(t) {
  const e = {};
  if (s(t, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  const n = s(t, [
    "timeRangeFilter"
  ]);
  return n != null && a(e, ["timeRangeFilter"], n), e;
}
function fc(t, e) {
  const n = {}, i = s(t, ["pageSize"]);
  e !== void 0 && i != null && a(e, ["_query", "pageSize"], i);
  const o = s(t, ["pageToken"]);
  return e !== void 0 && o != null && a(e, ["_query", "pageToken"], o), n;
}
function hc(t, e) {
  const n = {}, i = s(t, ["pageSize"]);
  e !== void 0 && i != null && a(e, ["_query", "pageSize"], i);
  const o = s(t, ["pageToken"]);
  return e !== void 0 && o != null && a(e, ["_query", "pageToken"], o), n;
}
function pc(t) {
  const e = {}, n = s(t, ["config"]);
  return n != null && fc(n, e), e;
}
function gc(t) {
  const e = {}, n = s(t, ["config"]);
  return n != null && hc(n, e), e;
}
function mc(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, [
    "nextPageToken"
  ]);
  i != null && a(e, ["nextPageToken"], i);
  const o = s(t, [
    "cachedContents"
  ]);
  if (o != null) {
    let r = o;
    Array.isArray(r) && (r = r.map((l) => l)), a(e, ["cachedContents"], r);
  }
  return e;
}
function yc(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, [
    "nextPageToken"
  ]);
  i != null && a(e, ["nextPageToken"], i);
  const o = s(t, [
    "cachedContents"
  ]);
  if (o != null) {
    let r = o;
    Array.isArray(r) && (r = r.map((l) => l)), a(e, ["cachedContents"], r);
  }
  return e;
}
function vc(t) {
  const e = {}, n = s(t, ["functionCall"]);
  n != null && a(e, ["functionCall"], n);
  const i = s(t, [
    "codeExecutionResult"
  ]);
  i != null && a(e, ["codeExecutionResult"], i);
  const o = s(t, [
    "executableCode"
  ]);
  o != null && a(e, ["executableCode"], o);
  const r = s(t, ["fileData"]);
  r != null && a(e, ["fileData"], sc(r));
  const l = s(t, [
    "functionResponse"
  ]);
  l != null && a(e, ["functionResponse"], l);
  const u = s(t, ["inlineData"]);
  u != null && a(e, ["inlineData"], Qu(u));
  const d = s(t, ["text"]);
  d != null && a(e, ["text"], d);
  const c = s(t, ["thought"]);
  c != null && a(e, ["thought"], c);
  const f = s(t, [
    "thoughtSignature"
  ]);
  f != null && a(e, ["thoughtSignature"], f);
  const h = s(t, [
    "videoMetadata"
  ]);
  return h != null && a(e, ["videoMetadata"], h), e;
}
function _c(t) {
  const e = {}, n = s(t, [
    "functionDeclarations"
  ]);
  if (n != null) {
    let c = n;
    Array.isArray(c) && (c = c.map((f) => f)), a(e, ["functionDeclarations"], c);
  }
  if (s(t, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const i = s(t, [
    "googleSearchRetrieval"
  ]);
  i != null && a(e, ["googleSearchRetrieval"], i);
  const o = s(t, ["googleMaps"]);
  o != null && a(e, ["googleMaps"], cc(o));
  const r = s(t, ["computerUse"]);
  r != null && a(e, ["computerUse"], r);
  const l = s(t, [
    "codeExecution"
  ]);
  if (l != null && a(e, ["codeExecution"], l), s(t, ["enterpriseWebSearch"]) !== void 0)
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const u = s(t, ["googleSearch"]);
  u != null && a(e, ["googleSearch"], dc(u));
  const d = s(t, ["urlContext"]);
  return d != null && a(e, ["urlContext"], d), e;
}
function Ec(t) {
  const e = {}, n = s(t, [
    "functionDeclarations"
  ]);
  if (n != null) {
    let h = n;
    Array.isArray(h) && (h = h.map((p) => ac(p))), a(e, ["functionDeclarations"], h);
  }
  const i = s(t, ["retrieval"]);
  i != null && a(e, ["retrieval"], i);
  const o = s(t, [
    "googleSearchRetrieval"
  ]);
  o != null && a(e, ["googleSearchRetrieval"], o);
  const r = s(t, ["googleMaps"]);
  r != null && a(e, ["googleMaps"], r);
  const l = s(t, ["computerUse"]);
  l != null && a(e, ["computerUse"], l);
  const u = s(t, [
    "codeExecution"
  ]);
  u != null && a(e, ["codeExecution"], u);
  const d = s(t, [
    "enterpriseWebSearch"
  ]);
  d != null && a(e, ["enterpriseWebSearch"], d);
  const c = s(t, ["googleSearch"]);
  c != null && a(e, ["googleSearch"], c);
  const f = s(t, ["urlContext"]);
  return f != null && a(e, ["urlContext"], f), e;
}
function Tc(t, e) {
  const n = {}, i = s(t, ["ttl"]);
  e !== void 0 && i != null && a(e, ["ttl"], i);
  const o = s(t, ["expireTime"]);
  return e !== void 0 && o != null && a(e, ["expireTime"], o), n;
}
function Cc(t, e) {
  const n = {}, i = s(t, ["ttl"]);
  e !== void 0 && i != null && a(e, ["ttl"], i);
  const o = s(t, ["expireTime"]);
  return e !== void 0 && o != null && a(e, ["expireTime"], o), n;
}
function Ac(t, e) {
  const n = {}, i = s(e, ["name"]);
  i != null && a(n, ["_url", "name"], qe(t, i));
  const o = s(e, ["config"]);
  return o != null && Tc(o, n), n;
}
function Sc(t, e) {
  const n = {}, i = s(e, ["name"]);
  i != null && a(n, ["_url", "name"], qe(t, i));
  const o = s(e, ["config"]);
  return o != null && Cc(o, n), n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class wc extends rt {
  constructor(e) {
    super(), this.apiClient = e, this.list = async (n = {}) => new jt(tt.PAGED_ITEM_CACHED_CONTENTS, (i) => this.listInternal(i), await this.listInternal(n), n);
  }
  /**
   * Creates a cached contents resource.
   *
   * @remarks
   * Context caching is only supported for specific models. See [Gemini
   * Developer API reference](https://ai.google.dev/gemini-api/docs/caching?lang=node/context-cac)
   * and [Vertex AI reference](https://cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview#supported_models)
   * for more information.
   *
   * @param params - The parameters for the create request.
   * @return The created cached content.
   *
   * @example
   * ```ts
   * const contents = ...; // Initialize the content to cache.
   * const response = await ai.caches.create({
   *   model: 'gemini-2.0-flash-001',
   *   config: {
   *    'contents': contents,
   *    'displayName': 'test cache',
   *    'systemInstruction': 'What is the sum of the two pdfs?',
   *    'ttl': '86400s',
   *  }
   * });
   * ```
   */
  async create(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = tc(this.apiClient, e);
      return u = X("cachedContents", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json()), l.then((f) => f);
    } else {
      const c = ec(this.apiClient, e);
      return u = X("cachedContents", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json()), l.then((f) => f);
    }
  }
  /**
   * Gets cached content configurations.
   *
   * @param params - The parameters for the get request.
   * @return The cached content.
   *
   * @example
   * ```ts
   * await ai.caches.get({name: '...'}); // The server-generated resource name.
   * ```
   */
  async get(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = uc(this.apiClient, e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json()), l.then((f) => f);
    } else {
      const c = lc(this.apiClient, e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json()), l.then((f) => f);
    }
  }
  /**
   * Deletes cached content.
   *
   * @param params - The parameters for the delete request.
   * @return The empty response returned by the API.
   *
   * @example
   * ```ts
   * await ai.caches.delete({name: '...'}); // The server-generated resource name.
   * ```
   */
  async delete(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = ic(this.apiClient, e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "DELETE",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = rc(f), p = new Rr();
        return Object.assign(p, h), p;
      });
    } else {
      const c = nc(this.apiClient, e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "DELETE",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = oc(f), p = new Rr();
        return Object.assign(p, h), p;
      });
    }
  }
  /**
   * Updates cached content configurations.
   *
   * @param params - The parameters for the update request.
   * @return The updated cached content.
   *
   * @example
   * ```ts
   * const response = await ai.caches.update({
   *   name: '...',  // The server-generated resource name.
   *   config: {'ttl': '7600s'}
   * });
   * ```
   */
  async update(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = Sc(this.apiClient, e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "PATCH",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json()), l.then((f) => f);
    } else {
      const c = Ac(this.apiClient, e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "PATCH",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json()), l.then((f) => f);
    }
  }
  async listInternal(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = gc(e);
      return u = X("cachedContents", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = yc(f), p = new Pr();
        return Object.assign(p, h), p;
      });
    } else {
      const c = pc(e);
      return u = X("cachedContents", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = mc(f), p = new Pr();
        return Object.assign(p, h), p;
      });
    }
  }
}
function Lr(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], i = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function de(t) {
  return this instanceof de ? (this.v = t, this) : new de(t);
}
function gt(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = n.apply(t, e || []), o, r = [];
  return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", l), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function l(m) {
    return function(v) {
      return Promise.resolve(v).then(m, h);
    };
  }
  function u(m, v) {
    i[m] && (o[m] = function(y) {
      return new Promise(function(_, C) {
        r.push([m, y, _, C]) > 1 || d(m, y);
      });
    }, v && (o[m] = v(o[m])));
  }
  function d(m, v) {
    try {
      c(i[m](v));
    } catch (y) {
      p(r[0][3], y);
    }
  }
  function c(m) {
    m.value instanceof de ? Promise.resolve(m.value.v).then(f, h) : p(r[0][2], m);
  }
  function f(m) {
    d("next", m);
  }
  function h(m) {
    d("throw", m);
  }
  function p(m, v) {
    m(v), r.shift(), r.length && d(r[0][0], r[0][1]);
  }
}
function Xt(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Lr == "function" ? Lr(t) : t[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function i(r) {
    n[r] = t[r] && function(l) {
      return new Promise(function(u, d) {
        l = t[r](l), o(u, d, l.done, l.value);
      });
    };
  }
  function o(r, l, u, d) {
    Promise.resolve(d).then(function(c) {
      r({ value: c, done: u });
    }, l);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Ic(t) {
  var e;
  if (t.candidates == null || t.candidates.length === 0)
    return !1;
  const n = (e = t.candidates[0]) === null || e === void 0 ? void 0 : e.content;
  return n === void 0 ? !1 : js(n);
}
function js(t) {
  if (t.parts === void 0 || t.parts.length === 0)
    return !1;
  for (const e of t.parts)
    if (e === void 0 || Object.keys(e).length === 0)
      return !1;
  return !0;
}
function Rc(t) {
  if (t.length !== 0) {
    for (const e of t)
      if (e.role !== "user" && e.role !== "model")
        throw new Error(`Role must be user or model, but got ${e.role}.`);
  }
}
function br(t) {
  if (t === void 0 || t.length === 0)
    return [];
  const e = [], n = t.length;
  let i = 0;
  for (; i < n; )
    if (t[i].role === "user")
      e.push(t[i]), i++;
    else {
      const o = [];
      let r = !0;
      for (; i < n && t[i].role === "model"; )
        o.push(t[i]), r && !js(t[i]) && (r = !1), i++;
      r ? e.push(...o) : e.pop();
    }
  return e;
}
class Pc {
  constructor(e, n) {
    this.modelsModule = e, this.apiClient = n;
  }
  /**
   * Creates a new chat session.
   *
   * @remarks
   * The config in the params will be used for all requests within the chat
   * session unless overridden by a per-request `config` in
   * @see {@link types.SendMessageParameters#config}.
   *
   * @param params - Parameters for creating a chat session.
   * @returns A new chat session.
   *
   * @example
   * ```ts
   * const chat = ai.chats.create({
   *   model: 'gemini-2.0-flash'
   *   config: {
   *     temperature: 0.5,
   *     maxOutputTokens: 1024,
   *   }
   * });
   * ```
   */
  create(e) {
    return new Nc(
      this.apiClient,
      this.modelsModule,
      e.model,
      e.config,
      // Deep copy the history to avoid mutating the history outside of the
      // chat session.
      structuredClone(e.history)
    );
  }
}
class Nc {
  constructor(e, n, i, o = {}, r = []) {
    this.apiClient = e, this.modelsModule = n, this.model = i, this.config = o, this.history = r, this.sendPromise = Promise.resolve(), Rc(r);
  }
  /**
   * Sends a message to the model and returns the response.
   *
   * @remarks
   * This method will wait for the previous message to be processed before
   * sending the next message.
   *
   * @see {@link Chat#sendMessageStream} for streaming method.
   * @param params - parameters for sending messages within a chat session.
   * @returns The model's response.
   *
   * @example
   * ```ts
   * const chat = ai.chats.create({model: 'gemini-2.0-flash'});
   * const response = await chat.sendMessage({
   *   message: 'Why is the sky blue?'
   * });
   * console.log(response.text);
   * ```
   */
  async sendMessage(e) {
    var n;
    await this.sendPromise;
    const i = _e(e.message), o = this.modelsModule.generateContent({
      model: this.model,
      contents: this.getHistory(!0).concat(i),
      config: (n = e.config) !== null && n !== void 0 ? n : this.config
    });
    return this.sendPromise = (async () => {
      var r, l, u;
      const d = await o, c = (l = (r = d.candidates) === null || r === void 0 ? void 0 : r[0]) === null || l === void 0 ? void 0 : l.content, f = d.automaticFunctionCallingHistory, h = this.getHistory(!0).length;
      let p = [];
      f != null && (p = (u = f.slice(h)) !== null && u !== void 0 ? u : []);
      const m = c ? [c] : [];
      this.recordHistory(i, m, p);
    })(), await this.sendPromise.catch(() => {
      this.sendPromise = Promise.resolve();
    }), o;
  }
  /**
   * Sends a message to the model and returns the response in chunks.
   *
   * @remarks
   * This method will wait for the previous message to be processed before
   * sending the next message.
   *
   * @see {@link Chat#sendMessage} for non-streaming method.
   * @param params - parameters for sending the message.
   * @return The model's response.
   *
   * @example
   * ```ts
   * const chat = ai.chats.create({model: 'gemini-2.0-flash'});
   * const response = await chat.sendMessageStream({
   *   message: 'Why is the sky blue?'
   * });
   * for await (const chunk of response) {
   *   console.log(chunk.text);
   * }
   * ```
   */
  async sendMessageStream(e) {
    var n;
    await this.sendPromise;
    const i = _e(e.message), o = this.modelsModule.generateContentStream({
      model: this.model,
      contents: this.getHistory(!0).concat(i),
      config: (n = e.config) !== null && n !== void 0 ? n : this.config
    });
    this.sendPromise = o.then(() => {
    }).catch(() => {
    });
    const r = await o;
    return this.processStreamResponse(r, i);
  }
  /**
   * Returns the chat history.
   *
   * @remarks
   * The history is a list of contents alternating between user and model.
   *
   * There are two types of history:
   * - The `curated history` contains only the valid turns between user and
   * model, which will be included in the subsequent requests sent to the model.
   * - The `comprehensive history` contains all turns, including invalid or
   *   empty model outputs, providing a complete record of the history.
   *
   * The history is updated after receiving the response from the model,
   * for streaming response, it means receiving the last chunk of the response.
   *
   * The `comprehensive history` is returned by default. To get the `curated
   * history`, set the `curated` parameter to `true`.
   *
   * @param curated - whether to return the curated history or the comprehensive
   *     history.
   * @return History contents alternating between user and model for the entire
   *     chat session.
   */
  getHistory(e = !1) {
    const n = e ? br(this.history) : this.history;
    return structuredClone(n);
  }
  processStreamResponse(e, n) {
    var i, o;
    return gt(this, arguments, function* () {
      var l, u, d, c;
      const f = [];
      try {
        for (var h = !0, p = Xt(e), m; m = yield de(p.next()), l = m.done, !l; h = !0) {
          c = m.value, h = !1;
          const v = c;
          if (Ic(v)) {
            const y = (o = (i = v.candidates) === null || i === void 0 ? void 0 : i[0]) === null || o === void 0 ? void 0 : o.content;
            y !== void 0 && f.push(y);
          }
          yield yield de(v);
        }
      } catch (v) {
        u = { error: v };
      } finally {
        try {
          !h && !l && (d = p.return) && (yield de(d.call(p)));
        } finally {
          if (u) throw u.error;
        }
      }
      this.recordHistory(n, f);
    });
  }
  recordHistory(e, n, i) {
    let o = [];
    n.length > 0 && n.every((r) => r.role !== void 0) ? o = n : o.push({
      role: "model",
      parts: []
    }), i && i.length > 0 ? this.history.push(...br(i)) : this.history.push(e), this.history.push(...o);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class yn extends Error {
  constructor(e) {
    super(e.message), this.name = "ApiError", this.status = e.status, Object.setPrototypeOf(this, yn.prototype);
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function kc(t) {
  const e = {}, n = s(t, ["file"]);
  return n != null && a(e, ["file"], n), e;
}
function Mc(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  return n != null && a(e, ["sdkHttpResponse"], n), e;
}
function Uc(t) {
  const e = {}, n = s(t, ["name"]);
  return n != null && a(e, ["_url", "file"], di(n)), e;
}
function Dc(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  return n != null && a(e, ["sdkHttpResponse"], n), e;
}
function xc(t) {
  const e = {}, n = s(t, ["name"]);
  return n != null && a(e, ["_url", "file"], di(n)), e;
}
function Lc(t, e) {
  const n = {}, i = s(t, ["pageSize"]);
  e !== void 0 && i != null && a(e, ["_query", "pageSize"], i);
  const o = s(t, ["pageToken"]);
  return e !== void 0 && o != null && a(e, ["_query", "pageToken"], o), n;
}
function bc(t) {
  const e = {}, n = s(t, ["config"]);
  return n != null && Lc(n, e), e;
}
function Fc(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, [
    "nextPageToken"
  ]);
  i != null && a(e, ["nextPageToken"], i);
  const o = s(t, ["files"]);
  if (o != null) {
    let r = o;
    Array.isArray(r) && (r = r.map((l) => l)), a(e, ["files"], r);
  }
  return e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Gc extends rt {
  constructor(e) {
    super(), this.apiClient = e, this.list = async (n = {}) => new jt(tt.PAGED_ITEM_FILES, (i) => this.listInternal(i), await this.listInternal(n), n);
  }
  /**
   * Uploads a file asynchronously to the Gemini API.
   * This method is not available in Vertex AI.
   * Supported upload sources:
   * - Node.js: File path (string) or Blob object.
   * - Browser: Blob object (e.g., File).
   *
   * @remarks
   * The `mimeType` can be specified in the `config` parameter. If omitted:
   *  - For file path (string) inputs, the `mimeType` will be inferred from the
   *     file extension.
   *  - For Blob object inputs, the `mimeType` will be set to the Blob's `type`
   *     property.
   * Somex eamples for file extension to mimeType mapping:
   * .txt -> text/plain
   * .json -> application/json
   * .jpg  -> image/jpeg
   * .png -> image/png
   * .mp3 -> audio/mpeg
   * .mp4 -> video/mp4
   *
   * This section can contain multiple paragraphs and code examples.
   *
   * @param params - Optional parameters specified in the
   *        `types.UploadFileParameters` interface.
   *         @see {@link types.UploadFileParameters#config} for the optional
   *         config in the parameters.
   * @return A promise that resolves to a `types.File` object.
   * @throws An error if called on a Vertex AI client.
   * @throws An error if the `mimeType` is not provided and can not be inferred,
   * the `mimeType` can be provided in the `params.config` parameter.
   * @throws An error occurs if a suitable upload location cannot be established.
   *
   * @example
   * The following code uploads a file to Gemini API.
   *
   * ```ts
   * const file = await ai.files.upload({file: 'file.txt', config: {
   *   mimeType: 'text/plain',
   * }});
   * console.log(file.name);
   * ```
   */
  async upload(e) {
    if (this.apiClient.isVertexAI())
      throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");
    return this.apiClient.uploadFile(e.file, e.config).then((n) => n);
  }
  /**
   * Downloads a remotely stored file asynchronously to a location specified in
   * the `params` object. This method only works on Node environment, to
   * download files in the browser, use a browser compliant method like an <a>
   * tag.
   *
   * @param params - The parameters for the download request.
   *
   * @example
   * The following code downloads an example file named "files/mehozpxf877d" as
   * "file.txt".
   *
   * ```ts
   * await ai.files.download({file: file.name, downloadPath: 'file.txt'});
   * ```
   */
  async download(e) {
    await this.apiClient.downloadFile(e);
  }
  async listInternal(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const u = bc(e);
      return r = X("files", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "GET",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json().then((c) => {
        const f = c;
        return f.sdkHttpResponse = {
          headers: d.headers
        }, f;
      })), o.then((d) => {
        const c = Fc(d), f = new Ql();
        return Object.assign(f, c), f;
      });
    }
  }
  async createInternal(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const u = kc(e);
      return r = X("upload/v1beta/files", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json()), o.then((d) => {
        const c = Mc(d), f = new Zl();
        return Object.assign(f, c), f;
      });
    }
  }
  /**
   * Retrieves the file information from the service.
   *
   * @param params - The parameters for the get request
   * @return The Promise that resolves to the types.File object requested.
   *
   * @example
   * ```ts
   * const config: GetFileParameters = {
   *   name: fileName,
   * };
   * file = await ai.files.get(config);
   * console.log(file.name);
   * ```
   */
  async get(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const u = xc(e);
      return r = X("files/{file}", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "GET",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json()), o.then((d) => d);
    }
  }
  /**
   * Deletes a remotely stored file.
   *
   * @param params - The parameters for the delete request.
   * @return The DeleteFileResponse, the response for the delete method.
   *
   * @example
   * The following code deletes an example file named "files/mehozpxf877d".
   *
   * ```ts
   * await ai.files.delete({name: file.name});
   * ```
   */
  async delete(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const u = Uc(e);
      return r = X("files/{file}", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "DELETE",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json().then((c) => {
        const f = c;
        return f.sdkHttpResponse = {
          headers: d.headers
        }, f;
      })), o.then((d) => {
        const c = Dc(d), f = new jl();
        return Object.assign(f, c), f;
      });
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function cn(t) {
  const e = {}, n = s(t, ["data"]);
  if (n != null && a(e, ["data"], n), s(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const i = s(t, ["mimeType"]);
  return i != null && a(e, ["mimeType"], i), e;
}
function Oc(t) {
  const e = {}, n = s(t, ["parts"]);
  if (n != null) {
    let o = n;
    Array.isArray(o) && (o = o.map((r) => ed(r))), a(e, ["parts"], o);
  }
  const i = s(t, ["role"]);
  return i != null && a(e, ["role"], i), e;
}
function qc(t) {
  const e = {};
  if (s(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const n = s(t, ["fileUri"]);
  n != null && a(e, ["fileUri"], n);
  const i = s(t, ["mimeType"]);
  return i != null && a(e, ["mimeType"], i), e;
}
function Bc(t) {
  const e = {};
  if (s(t, ["behavior"]) !== void 0)
    throw new Error("behavior parameter is not supported in Vertex AI.");
  const n = s(t, ["description"]);
  n != null && a(e, ["description"], n);
  const i = s(t, ["name"]);
  i != null && a(e, ["name"], i);
  const o = s(t, ["parameters"]);
  o != null && a(e, ["parameters"], o);
  const r = s(t, [
    "parametersJsonSchema"
  ]);
  r != null && a(e, ["parametersJsonSchema"], r);
  const l = s(t, ["response"]);
  l != null && a(e, ["response"], l);
  const u = s(t, [
    "responseJsonSchema"
  ]);
  return u != null && a(e, ["responseJsonSchema"], u), e;
}
function Vc(t) {
  const e = {}, n = s(t, [
    "modelSelectionConfig"
  ]);
  n != null && a(e, ["modelConfig"], n);
  const i = s(t, [
    "audioTimestamp"
  ]);
  i != null && a(e, ["audioTimestamp"], i);
  const o = s(t, [
    "candidateCount"
  ]);
  o != null && a(e, ["candidateCount"], o);
  const r = s(t, [
    "enableAffectiveDialog"
  ]);
  r != null && a(e, ["enableAffectiveDialog"], r);
  const l = s(t, [
    "frequencyPenalty"
  ]);
  l != null && a(e, ["frequencyPenalty"], l);
  const u = s(t, ["logprobs"]);
  u != null && a(e, ["logprobs"], u);
  const d = s(t, [
    "maxOutputTokens"
  ]);
  d != null && a(e, ["maxOutputTokens"], d);
  const c = s(t, [
    "mediaResolution"
  ]);
  c != null && a(e, ["mediaResolution"], c);
  const f = s(t, [
    "presencePenalty"
  ]);
  f != null && a(e, ["presencePenalty"], f);
  const h = s(t, [
    "responseJsonSchema"
  ]);
  h != null && a(e, ["responseJsonSchema"], h);
  const p = s(t, [
    "responseLogprobs"
  ]);
  p != null && a(e, ["responseLogprobs"], p);
  const m = s(t, [
    "responseMimeType"
  ]);
  m != null && a(e, ["responseMimeType"], m);
  const v = s(t, [
    "responseModalities"
  ]);
  v != null && a(e, ["responseModalities"], v);
  const y = s(t, [
    "responseSchema"
  ]);
  y != null && a(e, ["responseSchema"], y);
  const _ = s(t, [
    "routingConfig"
  ]);
  _ != null && a(e, ["routingConfig"], _);
  const C = s(t, ["seed"]);
  C != null && a(e, ["seed"], C);
  const A = s(t, ["speechConfig"]);
  A != null && a(e, ["speechConfig"], ea(A));
  const k = s(t, [
    "stopSequences"
  ]);
  k != null && a(e, ["stopSequences"], k);
  const b = s(t, ["temperature"]);
  b != null && a(e, ["temperature"], b);
  const N = s(t, [
    "thinkingConfig"
  ]);
  N != null && a(e, ["thinkingConfig"], N);
  const M = s(t, ["topK"]);
  M != null && a(e, ["topK"], M);
  const w = s(t, ["topP"]);
  if (w != null && a(e, ["topP"], w), s(t, ["enableEnhancedCivicAnswers"]) !== void 0)
    throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");
  return e;
}
function Hc(t) {
  const e = {};
  if (s(t, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const n = s(t, ["enableWidget"]);
  return n != null && a(e, ["enableWidget"], n), e;
}
function $c(t) {
  const e = {};
  if (s(t, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  const n = s(t, [
    "timeRangeFilter"
  ]);
  return n != null && a(e, ["timeRangeFilter"], n), e;
}
function Jc(t, e) {
  const n = {}, i = s(t, [
    "generationConfig"
  ]);
  e !== void 0 && i != null && a(e, ["setup", "generationConfig"], i);
  const o = s(t, [
    "responseModalities"
  ]);
  e !== void 0 && o != null && a(e, ["setup", "generationConfig", "responseModalities"], o);
  const r = s(t, ["temperature"]);
  e !== void 0 && r != null && a(e, ["setup", "generationConfig", "temperature"], r);
  const l = s(t, ["topP"]);
  e !== void 0 && l != null && a(e, ["setup", "generationConfig", "topP"], l);
  const u = s(t, ["topK"]);
  e !== void 0 && u != null && a(e, ["setup", "generationConfig", "topK"], u);
  const d = s(t, [
    "maxOutputTokens"
  ]);
  e !== void 0 && d != null && a(e, ["setup", "generationConfig", "maxOutputTokens"], d);
  const c = s(t, [
    "mediaResolution"
  ]);
  e !== void 0 && c != null && a(e, ["setup", "generationConfig", "mediaResolution"], c);
  const f = s(t, ["seed"]);
  e !== void 0 && f != null && a(e, ["setup", "generationConfig", "seed"], f);
  const h = s(t, ["speechConfig"]);
  e !== void 0 && h != null && a(e, ["setup", "generationConfig", "speechConfig"], ci(h));
  const p = s(t, [
    "thinkingConfig"
  ]);
  e !== void 0 && p != null && a(e, ["setup", "generationConfig", "thinkingConfig"], p);
  const m = s(t, [
    "enableAffectiveDialog"
  ]);
  e !== void 0 && m != null && a(e, ["setup", "generationConfig", "enableAffectiveDialog"], m);
  const v = s(t, [
    "systemInstruction"
  ]);
  e !== void 0 && v != null && a(e, ["setup", "systemInstruction"], Oc(_e(v)));
  const y = s(t, ["tools"]);
  if (e !== void 0 && y != null) {
    let M = Et(y);
    Array.isArray(M) && (M = M.map((w) => nd(_t(w)))), a(e, ["setup", "tools"], M);
  }
  const _ = s(t, [
    "sessionResumption"
  ]);
  e !== void 0 && _ != null && a(e, ["setup", "sessionResumption"], td(_));
  const C = s(t, [
    "inputAudioTranscription"
  ]);
  e !== void 0 && C != null && a(e, ["setup", "inputAudioTranscription"], C);
  const A = s(t, [
    "outputAudioTranscription"
  ]);
  e !== void 0 && A != null && a(e, ["setup", "outputAudioTranscription"], A);
  const k = s(t, [
    "realtimeInputConfig"
  ]);
  e !== void 0 && k != null && a(e, ["setup", "realtimeInputConfig"], k);
  const b = s(t, [
    "contextWindowCompression"
  ]);
  e !== void 0 && b != null && a(e, ["setup", "contextWindowCompression"], b);
  const N = s(t, ["proactivity"]);
  return e !== void 0 && N != null && a(e, ["setup", "proactivity"], N), n;
}
function Kc(t, e) {
  const n = {}, i = s(t, [
    "generationConfig"
  ]);
  e !== void 0 && i != null && a(e, ["setup", "generationConfig"], Vc(i));
  const o = s(t, [
    "responseModalities"
  ]);
  e !== void 0 && o != null && a(e, ["setup", "generationConfig", "responseModalities"], o);
  const r = s(t, ["temperature"]);
  e !== void 0 && r != null && a(e, ["setup", "generationConfig", "temperature"], r);
  const l = s(t, ["topP"]);
  e !== void 0 && l != null && a(e, ["setup", "generationConfig", "topP"], l);
  const u = s(t, ["topK"]);
  e !== void 0 && u != null && a(e, ["setup", "generationConfig", "topK"], u);
  const d = s(t, [
    "maxOutputTokens"
  ]);
  e !== void 0 && d != null && a(e, ["setup", "generationConfig", "maxOutputTokens"], d);
  const c = s(t, [
    "mediaResolution"
  ]);
  e !== void 0 && c != null && a(e, ["setup", "generationConfig", "mediaResolution"], c);
  const f = s(t, ["seed"]);
  e !== void 0 && f != null && a(e, ["setup", "generationConfig", "seed"], f);
  const h = s(t, ["speechConfig"]);
  e !== void 0 && h != null && a(e, ["setup", "generationConfig", "speechConfig"], ea(ci(h)));
  const p = s(t, [
    "thinkingConfig"
  ]);
  e !== void 0 && p != null && a(e, ["setup", "generationConfig", "thinkingConfig"], p);
  const m = s(t, [
    "enableAffectiveDialog"
  ]);
  e !== void 0 && m != null && a(e, ["setup", "generationConfig", "enableAffectiveDialog"], m);
  const v = s(t, [
    "systemInstruction"
  ]);
  e !== void 0 && v != null && a(e, ["setup", "systemInstruction"], _e(v));
  const y = s(t, ["tools"]);
  if (e !== void 0 && y != null) {
    let M = Et(y);
    Array.isArray(M) && (M = M.map((w) => id(_t(w)))), a(e, ["setup", "tools"], M);
  }
  const _ = s(t, [
    "sessionResumption"
  ]);
  e !== void 0 && _ != null && a(e, ["setup", "sessionResumption"], _);
  const C = s(t, [
    "inputAudioTranscription"
  ]);
  e !== void 0 && C != null && a(e, ["setup", "inputAudioTranscription"], C);
  const A = s(t, [
    "outputAudioTranscription"
  ]);
  e !== void 0 && A != null && a(e, ["setup", "outputAudioTranscription"], A);
  const k = s(t, [
    "realtimeInputConfig"
  ]);
  e !== void 0 && k != null && a(e, ["setup", "realtimeInputConfig"], k);
  const b = s(t, [
    "contextWindowCompression"
  ]);
  e !== void 0 && b != null && a(e, ["setup", "contextWindowCompression"], b);
  const N = s(t, ["proactivity"]);
  return e !== void 0 && N != null && a(e, ["setup", "proactivity"], N), n;
}
function Wc(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["setup", "model"], ae(t, i));
  const o = s(e, ["config"]);
  return o != null && a(n, ["config"], Jc(o, n)), n;
}
function Yc(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["setup", "model"], ae(t, i));
  const o = s(e, ["config"]);
  return o != null && a(n, ["config"], Kc(o, n)), n;
}
function zc(t) {
  const e = {}, n = s(t, [
    "musicGenerationConfig"
  ]);
  return n != null && a(e, ["musicGenerationConfig"], n), e;
}
function Xc(t) {
  const e = {}, n = s(t, [
    "weightedPrompts"
  ]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((o) => o)), a(e, ["weightedPrompts"], i);
  }
  return e;
}
function Qc(t) {
  const e = {}, n = s(t, ["media"]);
  if (n != null) {
    let c = qs(n);
    Array.isArray(c) && (c = c.map((f) => cn(f))), a(e, ["mediaChunks"], c);
  }
  const i = s(t, ["audio"]);
  i != null && a(e, ["audio"], cn(Vs(i)));
  const o = s(t, [
    "audioStreamEnd"
  ]);
  o != null && a(e, ["audioStreamEnd"], o);
  const r = s(t, ["video"]);
  r != null && a(e, ["video"], cn(Bs(r)));
  const l = s(t, ["text"]);
  l != null && a(e, ["text"], l);
  const u = s(t, [
    "activityStart"
  ]);
  u != null && a(e, ["activityStart"], u);
  const d = s(t, ["activityEnd"]);
  return d != null && a(e, ["activityEnd"], d), e;
}
function Zc(t) {
  const e = {}, n = s(t, ["media"]);
  if (n != null) {
    let c = qs(n);
    Array.isArray(c) && (c = c.map((f) => f)), a(e, ["mediaChunks"], c);
  }
  const i = s(t, ["audio"]);
  i != null && a(e, ["audio"], Vs(i));
  const o = s(t, [
    "audioStreamEnd"
  ]);
  o != null && a(e, ["audioStreamEnd"], o);
  const r = s(t, ["video"]);
  r != null && a(e, ["video"], Bs(r));
  const l = s(t, ["text"]);
  l != null && a(e, ["text"], l);
  const u = s(t, [
    "activityStart"
  ]);
  u != null && a(e, ["activityStart"], u);
  const d = s(t, ["activityEnd"]);
  return d != null && a(e, ["activityEnd"], d), e;
}
function jc(t) {
  const e = {}, n = s(t, [
    "setupComplete"
  ]);
  n != null && a(e, ["setupComplete"], n);
  const i = s(t, [
    "serverContent"
  ]);
  i != null && a(e, ["serverContent"], i);
  const o = s(t, ["toolCall"]);
  o != null && a(e, ["toolCall"], o);
  const r = s(t, [
    "toolCallCancellation"
  ]);
  r != null && a(e, ["toolCallCancellation"], r);
  const l = s(t, [
    "usageMetadata"
  ]);
  l != null && a(e, ["usageMetadata"], od(l));
  const u = s(t, ["goAway"]);
  u != null && a(e, ["goAway"], u);
  const d = s(t, [
    "sessionResumptionUpdate"
  ]);
  return d != null && a(e, ["sessionResumptionUpdate"], d), e;
}
function ed(t) {
  const e = {}, n = s(t, ["functionCall"]);
  n != null && a(e, ["functionCall"], n);
  const i = s(t, [
    "codeExecutionResult"
  ]);
  i != null && a(e, ["codeExecutionResult"], i);
  const o = s(t, [
    "executableCode"
  ]);
  o != null && a(e, ["executableCode"], o);
  const r = s(t, ["fileData"]);
  r != null && a(e, ["fileData"], qc(r));
  const l = s(t, [
    "functionResponse"
  ]);
  l != null && a(e, ["functionResponse"], l);
  const u = s(t, ["inlineData"]);
  u != null && a(e, ["inlineData"], cn(u));
  const d = s(t, ["text"]);
  d != null && a(e, ["text"], d);
  const c = s(t, ["thought"]);
  c != null && a(e, ["thought"], c);
  const f = s(t, [
    "thoughtSignature"
  ]);
  f != null && a(e, ["thoughtSignature"], f);
  const h = s(t, [
    "videoMetadata"
  ]);
  return h != null && a(e, ["videoMetadata"], h), e;
}
function td(t) {
  const e = {}, n = s(t, ["handle"]);
  if (n != null && a(e, ["handle"], n), s(t, ["transparent"]) !== void 0)
    throw new Error("transparent parameter is not supported in Gemini API.");
  return e;
}
function ea(t) {
  const e = {}, n = s(t, ["languageCode"]);
  n != null && a(e, ["languageCode"], n);
  const i = s(t, ["voiceConfig"]);
  if (i != null && a(e, ["voiceConfig"], i), s(t, ["multiSpeakerVoiceConfig"]) !== void 0)
    throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");
  return e;
}
function nd(t) {
  const e = {}, n = s(t, [
    "functionDeclarations"
  ]);
  if (n != null) {
    let c = n;
    Array.isArray(c) && (c = c.map((f) => f)), a(e, ["functionDeclarations"], c);
  }
  if (s(t, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const i = s(t, [
    "googleSearchRetrieval"
  ]);
  i != null && a(e, ["googleSearchRetrieval"], i);
  const o = s(t, ["googleMaps"]);
  o != null && a(e, ["googleMaps"], Hc(o));
  const r = s(t, ["computerUse"]);
  r != null && a(e, ["computerUse"], r);
  const l = s(t, [
    "codeExecution"
  ]);
  if (l != null && a(e, ["codeExecution"], l), s(t, ["enterpriseWebSearch"]) !== void 0)
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const u = s(t, ["googleSearch"]);
  u != null && a(e, ["googleSearch"], $c(u));
  const d = s(t, ["urlContext"]);
  return d != null && a(e, ["urlContext"], d), e;
}
function id(t) {
  const e = {}, n = s(t, [
    "functionDeclarations"
  ]);
  if (n != null) {
    let h = n;
    Array.isArray(h) && (h = h.map((p) => Bc(p))), a(e, ["functionDeclarations"], h);
  }
  const i = s(t, ["retrieval"]);
  i != null && a(e, ["retrieval"], i);
  const o = s(t, [
    "googleSearchRetrieval"
  ]);
  o != null && a(e, ["googleSearchRetrieval"], o);
  const r = s(t, ["googleMaps"]);
  r != null && a(e, ["googleMaps"], r);
  const l = s(t, ["computerUse"]);
  l != null && a(e, ["computerUse"], l);
  const u = s(t, [
    "codeExecution"
  ]);
  u != null && a(e, ["codeExecution"], u);
  const d = s(t, [
    "enterpriseWebSearch"
  ]);
  d != null && a(e, ["enterpriseWebSearch"], d);
  const c = s(t, ["googleSearch"]);
  c != null && a(e, ["googleSearch"], c);
  const f = s(t, ["urlContext"]);
  return f != null && a(e, ["urlContext"], f), e;
}
function od(t) {
  const e = {}, n = s(t, [
    "promptTokenCount"
  ]);
  n != null && a(e, ["promptTokenCount"], n);
  const i = s(t, [
    "cachedContentTokenCount"
  ]);
  i != null && a(e, ["cachedContentTokenCount"], i);
  const o = s(t, [
    "candidatesTokenCount"
  ]);
  o != null && a(e, ["responseTokenCount"], o);
  const r = s(t, [
    "toolUsePromptTokenCount"
  ]);
  r != null && a(e, ["toolUsePromptTokenCount"], r);
  const l = s(t, [
    "thoughtsTokenCount"
  ]);
  l != null && a(e, ["thoughtsTokenCount"], l);
  const u = s(t, [
    "totalTokenCount"
  ]);
  u != null && a(e, ["totalTokenCount"], u);
  const d = s(t, [
    "promptTokensDetails"
  ]);
  if (d != null) {
    let m = d;
    Array.isArray(m) && (m = m.map((v) => v)), a(e, ["promptTokensDetails"], m);
  }
  const c = s(t, [
    "cacheTokensDetails"
  ]);
  if (c != null) {
    let m = c;
    Array.isArray(m) && (m = m.map((v) => v)), a(e, ["cacheTokensDetails"], m);
  }
  const f = s(t, [
    "candidatesTokensDetails"
  ]);
  if (f != null) {
    let m = f;
    Array.isArray(m) && (m = m.map((v) => v)), a(e, ["responseTokensDetails"], m);
  }
  const h = s(t, [
    "toolUsePromptTokensDetails"
  ]);
  if (h != null) {
    let m = h;
    Array.isArray(m) && (m = m.map((v) => v)), a(e, ["toolUsePromptTokensDetails"], m);
  }
  const p = s(t, ["trafficType"]);
  return p != null && a(e, ["trafficType"], p), e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function rd(t) {
  const e = {}, n = s(t, ["data"]);
  if (n != null && a(e, ["data"], n), s(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const i = s(t, ["mimeType"]);
  return i != null && a(e, ["mimeType"], i), e;
}
function sd(t) {
  const e = {}, n = s(t, ["content"]);
  n != null && a(e, ["content"], n);
  const i = s(t, [
    "citationMetadata"
  ]);
  i != null && a(e, ["citationMetadata"], ad(i));
  const o = s(t, ["tokenCount"]);
  o != null && a(e, ["tokenCount"], o);
  const r = s(t, ["finishReason"]);
  r != null && a(e, ["finishReason"], r);
  const l = s(t, ["avgLogprobs"]);
  l != null && a(e, ["avgLogprobs"], l);
  const u = s(t, [
    "groundingMetadata"
  ]);
  u != null && a(e, ["groundingMetadata"], u);
  const d = s(t, ["index"]);
  d != null && a(e, ["index"], d);
  const c = s(t, [
    "logprobsResult"
  ]);
  c != null && a(e, ["logprobsResult"], c);
  const f = s(t, [
    "safetyRatings"
  ]);
  if (f != null) {
    let p = f;
    Array.isArray(p) && (p = p.map((m) => m)), a(e, ["safetyRatings"], p);
  }
  const h = s(t, [
    "urlContextMetadata"
  ]);
  return h != null && a(e, ["urlContextMetadata"], h), e;
}
function ad(t) {
  const e = {}, n = s(t, ["citationSources"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((o) => o)), a(e, ["citations"], i);
  }
  return e;
}
function ld(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["contents"]);
  if (o != null) {
    let r = Ie(o);
    Array.isArray(r) && (r = r.map((l) => l)), a(n, ["contents"], r);
  }
  return n;
}
function ud(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, ["tokensInfo"]);
  if (i != null) {
    let o = i;
    Array.isArray(o) && (o = o.map((r) => r)), a(e, ["tokensInfo"], o);
  }
  return e;
}
function cd(t) {
  const e = {}, n = s(t, ["values"]);
  n != null && a(e, ["values"], n);
  const i = s(t, ["statistics"]);
  return i != null && a(e, ["statistics"], dd(i)), e;
}
function dd(t) {
  const e = {}, n = s(t, ["truncated"]);
  n != null && a(e, ["truncated"], n);
  const i = s(t, ["token_count"]);
  return i != null && a(e, ["tokenCount"], i), e;
}
function vn(t) {
  const e = {}, n = s(t, ["parts"]);
  if (n != null) {
    let o = n;
    Array.isArray(o) && (o = o.map((r) => yf(r))), a(e, ["parts"], o);
  }
  const i = s(t, ["role"]);
  return i != null && a(e, ["role"], i), e;
}
function fd(t) {
  const e = {}, n = s(t, ["controlType"]);
  n != null && a(e, ["controlType"], n);
  const i = s(t, [
    "enableControlImageComputation"
  ]);
  return i != null && a(e, ["computeControl"], i), e;
}
function hd(t) {
  const e = {};
  if (s(t, ["systemInstruction"]) !== void 0)
    throw new Error("systemInstruction parameter is not supported in Gemini API.");
  if (s(t, ["tools"]) !== void 0)
    throw new Error("tools parameter is not supported in Gemini API.");
  if (s(t, ["generationConfig"]) !== void 0)
    throw new Error("generationConfig parameter is not supported in Gemini API.");
  return e;
}
function pd(t, e) {
  const n = {}, i = s(t, [
    "systemInstruction"
  ]);
  e !== void 0 && i != null && a(e, ["systemInstruction"], _e(i));
  const o = s(t, ["tools"]);
  if (e !== void 0 && o != null) {
    let l = o;
    Array.isArray(l) && (l = l.map((u) => ra(u))), a(e, ["tools"], l);
  }
  const r = s(t, [
    "generationConfig"
  ]);
  return e !== void 0 && r != null && a(e, ["generationConfig"], of(r)), n;
}
function gd(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["contents"]);
  if (o != null) {
    let l = Ie(o);
    Array.isArray(l) && (l = l.map((u) => vn(u))), a(n, ["contents"], l);
  }
  const r = s(e, ["config"]);
  return r != null && hd(r), n;
}
function md(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["contents"]);
  if (o != null) {
    let l = Ie(o);
    Array.isArray(l) && (l = l.map((u) => u)), a(n, ["contents"], l);
  }
  const r = s(e, ["config"]);
  return r != null && pd(r, n), n;
}
function yd(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, ["totalTokens"]);
  i != null && a(e, ["totalTokens"], i);
  const o = s(t, [
    "cachedContentTokenCount"
  ]);
  return o != null && a(e, ["cachedContentTokenCount"], o), e;
}
function vd(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, ["totalTokens"]);
  return i != null && a(e, ["totalTokens"], i), e;
}
function _d(t, e) {
  const n = {}, i = s(e, ["model"]);
  return i != null && a(n, ["_url", "name"], ae(t, i)), n;
}
function Ed(t, e) {
  const n = {}, i = s(e, ["model"]);
  return i != null && a(n, ["_url", "name"], ae(t, i)), n;
}
function Td(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  return n != null && a(e, ["sdkHttpResponse"], n), e;
}
function Cd(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  return n != null && a(e, ["sdkHttpResponse"], n), e;
}
function Ad(t, e) {
  const n = {}, i = s(t, ["outputGcsUri"]);
  e !== void 0 && i != null && a(e, ["parameters", "storageUri"], i);
  const o = s(t, [
    "negativePrompt"
  ]);
  e !== void 0 && o != null && a(e, ["parameters", "negativePrompt"], o);
  const r = s(t, [
    "numberOfImages"
  ]);
  e !== void 0 && r != null && a(e, ["parameters", "sampleCount"], r);
  const l = s(t, ["aspectRatio"]);
  e !== void 0 && l != null && a(e, ["parameters", "aspectRatio"], l);
  const u = s(t, [
    "guidanceScale"
  ]);
  e !== void 0 && u != null && a(e, ["parameters", "guidanceScale"], u);
  const d = s(t, ["seed"]);
  e !== void 0 && d != null && a(e, ["parameters", "seed"], d);
  const c = s(t, [
    "safetyFilterLevel"
  ]);
  e !== void 0 && c != null && a(e, ["parameters", "safetySetting"], c);
  const f = s(t, [
    "personGeneration"
  ]);
  e !== void 0 && f != null && a(e, ["parameters", "personGeneration"], f);
  const h = s(t, [
    "includeSafetyAttributes"
  ]);
  e !== void 0 && h != null && a(e, ["parameters", "includeSafetyAttributes"], h);
  const p = s(t, [
    "includeRaiReason"
  ]);
  e !== void 0 && p != null && a(e, ["parameters", "includeRaiReason"], p);
  const m = s(t, ["language"]);
  e !== void 0 && m != null && a(e, ["parameters", "language"], m);
  const v = s(t, [
    "outputMimeType"
  ]);
  e !== void 0 && v != null && a(e, ["parameters", "outputOptions", "mimeType"], v);
  const y = s(t, [
    "outputCompressionQuality"
  ]);
  e !== void 0 && y != null && a(e, ["parameters", "outputOptions", "compressionQuality"], y);
  const _ = s(t, ["addWatermark"]);
  e !== void 0 && _ != null && a(e, ["parameters", "addWatermark"], _);
  const C = s(t, ["labels"]);
  e !== void 0 && C != null && a(e, ["labels"], C);
  const A = s(t, ["editMode"]);
  e !== void 0 && A != null && a(e, ["parameters", "editMode"], A);
  const k = s(t, ["baseSteps"]);
  return e !== void 0 && k != null && a(e, ["parameters", "editConfig", "baseSteps"], k), n;
}
function Sd(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["prompt"]);
  o != null && a(n, ["instances[0]", "prompt"], o);
  const r = s(e, [
    "referenceImages"
  ]);
  if (r != null) {
    let u = r;
    Array.isArray(u) && (u = u.map((d) => Af(d))), a(n, ["instances[0]", "referenceImages"], u);
  }
  const l = s(e, ["config"]);
  return l != null && Ad(l, n), n;
}
function wd(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, [
    "predictions"
  ]);
  if (i != null) {
    let o = i;
    Array.isArray(o) && (o = o.map((r) => _n(r))), a(e, ["generatedImages"], o);
  }
  return e;
}
function Id(t, e) {
  const n = {}, i = s(t, ["taskType"]);
  e !== void 0 && i != null && a(e, ["requests[]", "taskType"], i);
  const o = s(t, ["title"]);
  e !== void 0 && o != null && a(e, ["requests[]", "title"], o);
  const r = s(t, [
    "outputDimensionality"
  ]);
  if (e !== void 0 && r != null && a(e, ["requests[]", "outputDimensionality"], r), s(t, ["mimeType"]) !== void 0)
    throw new Error("mimeType parameter is not supported in Gemini API.");
  if (s(t, ["autoTruncate"]) !== void 0)
    throw new Error("autoTruncate parameter is not supported in Gemini API.");
  return n;
}
function Rd(t, e) {
  const n = {}, i = s(t, ["taskType"]);
  e !== void 0 && i != null && a(e, ["instances[]", "task_type"], i);
  const o = s(t, ["title"]);
  e !== void 0 && o != null && a(e, ["instances[]", "title"], o);
  const r = s(t, [
    "outputDimensionality"
  ]);
  e !== void 0 && r != null && a(e, ["parameters", "outputDimensionality"], r);
  const l = s(t, ["mimeType"]);
  e !== void 0 && l != null && a(e, ["instances[]", "mimeType"], l);
  const u = s(t, ["autoTruncate"]);
  return e !== void 0 && u != null && a(e, ["parameters", "autoTruncate"], u), n;
}
function Pd(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["contents"]);
  if (o != null) {
    let u = ai(t, o);
    Array.isArray(u) && (u = u.map((d) => d)), a(n, ["requests[]", "content"], u);
  }
  const r = s(e, ["config"]);
  r != null && Id(r, n);
  const l = s(e, ["model"]);
  return l !== void 0 && a(n, ["requests[]", "model"], ae(t, l)), n;
}
function Nd(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["contents"]);
  if (o != null) {
    let l = ai(t, o);
    Array.isArray(l) && (l = l.map((u) => u)), a(n, ["instances[]", "content"], l);
  }
  const r = s(e, ["config"]);
  return r != null && Rd(r, n), n;
}
function kd(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, ["embeddings"]);
  if (i != null) {
    let r = i;
    Array.isArray(r) && (r = r.map((l) => l)), a(e, ["embeddings"], r);
  }
  const o = s(t, ["metadata"]);
  return o != null && a(e, ["metadata"], o), e;
}
function Md(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, [
    "predictions[]",
    "embeddings"
  ]);
  if (i != null) {
    let r = i;
    Array.isArray(r) && (r = r.map((l) => cd(l))), a(e, ["embeddings"], r);
  }
  const o = s(t, ["metadata"]);
  return o != null && a(e, ["metadata"], o), e;
}
function Ud(t) {
  const e = {}, n = s(t, ["endpoint"]);
  n != null && a(e, ["name"], n);
  const i = s(t, [
    "deployedModelId"
  ]);
  return i != null && a(e, ["deployedModelId"], i), e;
}
function Dd(t) {
  const e = {};
  if (s(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const n = s(t, ["fileUri"]);
  n != null && a(e, ["fileUri"], n);
  const i = s(t, ["mimeType"]);
  return i != null && a(e, ["mimeType"], i), e;
}
function xd(t) {
  const e = {};
  if (s(t, ["behavior"]) !== void 0)
    throw new Error("behavior parameter is not supported in Vertex AI.");
  const n = s(t, ["description"]);
  n != null && a(e, ["description"], n);
  const i = s(t, ["name"]);
  i != null && a(e, ["name"], i);
  const o = s(t, ["parameters"]);
  o != null && a(e, ["parameters"], o);
  const r = s(t, [
    "parametersJsonSchema"
  ]);
  r != null && a(e, ["parametersJsonSchema"], r);
  const l = s(t, ["response"]);
  l != null && a(e, ["response"], l);
  const u = s(t, [
    "responseJsonSchema"
  ]);
  return u != null && a(e, ["responseJsonSchema"], u), e;
}
function Ld(t, e, n) {
  const i = {}, o = s(e, [
    "systemInstruction"
  ]);
  n !== void 0 && o != null && a(n, ["systemInstruction"], vn(_e(o)));
  const r = s(e, ["temperature"]);
  r != null && a(i, ["temperature"], r);
  const l = s(e, ["topP"]);
  l != null && a(i, ["topP"], l);
  const u = s(e, ["topK"]);
  u != null && a(i, ["topK"], u);
  const d = s(e, [
    "candidateCount"
  ]);
  d != null && a(i, ["candidateCount"], d);
  const c = s(e, [
    "maxOutputTokens"
  ]);
  c != null && a(i, ["maxOutputTokens"], c);
  const f = s(e, [
    "stopSequences"
  ]);
  f != null && a(i, ["stopSequences"], f);
  const h = s(e, [
    "responseLogprobs"
  ]);
  h != null && a(i, ["responseLogprobs"], h);
  const p = s(e, ["logprobs"]);
  p != null && a(i, ["logprobs"], p);
  const m = s(e, [
    "presencePenalty"
  ]);
  m != null && a(i, ["presencePenalty"], m);
  const v = s(e, [
    "frequencyPenalty"
  ]);
  v != null && a(i, ["frequencyPenalty"], v);
  const y = s(e, ["seed"]);
  y != null && a(i, ["seed"], y);
  const _ = s(e, [
    "responseMimeType"
  ]);
  _ != null && a(i, ["responseMimeType"], _);
  const C = s(e, [
    "responseSchema"
  ]);
  C != null && a(i, ["responseSchema"], li(C));
  const A = s(e, [
    "responseJsonSchema"
  ]);
  if (A != null && a(i, ["responseJsonSchema"], A), s(e, ["routingConfig"]) !== void 0)
    throw new Error("routingConfig parameter is not supported in Gemini API.");
  if (s(e, ["modelSelectionConfig"]) !== void 0)
    throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");
  const k = s(e, [
    "safetySettings"
  ]);
  if (n !== void 0 && k != null) {
    let H = k;
    Array.isArray(H) && (H = H.map((q) => Sf(q))), a(n, ["safetySettings"], H);
  }
  const b = s(e, ["tools"]);
  if (n !== void 0 && b != null) {
    let H = Et(b);
    Array.isArray(H) && (H = H.map((q) => kf(_t(q)))), a(n, ["tools"], H);
  }
  const N = s(e, ["toolConfig"]);
  if (n !== void 0 && N != null && a(n, ["toolConfig"], N), s(e, ["labels"]) !== void 0)
    throw new Error("labels parameter is not supported in Gemini API.");
  const M = s(e, [
    "cachedContent"
  ]);
  n !== void 0 && M != null && a(n, ["cachedContent"], qe(t, M));
  const w = s(e, [
    "responseModalities"
  ]);
  w != null && a(i, ["responseModalities"], w);
  const D = s(e, [
    "mediaResolution"
  ]);
  D != null && a(i, ["mediaResolution"], D);
  const g = s(e, ["speechConfig"]);
  if (g != null && a(i, ["speechConfig"], ui(g)), s(e, ["audioTimestamp"]) !== void 0)
    throw new Error("audioTimestamp parameter is not supported in Gemini API.");
  const E = s(e, [
    "thinkingConfig"
  ]);
  E != null && a(i, ["thinkingConfig"], E);
  const G = s(e, ["imageConfig"]);
  return G != null && a(i, ["imageConfig"], G), i;
}
function bd(t, e, n) {
  const i = {}, o = s(e, [
    "systemInstruction"
  ]);
  n !== void 0 && o != null && a(n, ["systemInstruction"], _e(o));
  const r = s(e, ["temperature"]);
  r != null && a(i, ["temperature"], r);
  const l = s(e, ["topP"]);
  l != null && a(i, ["topP"], l);
  const u = s(e, ["topK"]);
  u != null && a(i, ["topK"], u);
  const d = s(e, [
    "candidateCount"
  ]);
  d != null && a(i, ["candidateCount"], d);
  const c = s(e, [
    "maxOutputTokens"
  ]);
  c != null && a(i, ["maxOutputTokens"], c);
  const f = s(e, [
    "stopSequences"
  ]);
  f != null && a(i, ["stopSequences"], f);
  const h = s(e, [
    "responseLogprobs"
  ]);
  h != null && a(i, ["responseLogprobs"], h);
  const p = s(e, ["logprobs"]);
  p != null && a(i, ["logprobs"], p);
  const m = s(e, [
    "presencePenalty"
  ]);
  m != null && a(i, ["presencePenalty"], m);
  const v = s(e, [
    "frequencyPenalty"
  ]);
  v != null && a(i, ["frequencyPenalty"], v);
  const y = s(e, ["seed"]);
  y != null && a(i, ["seed"], y);
  const _ = s(e, [
    "responseMimeType"
  ]);
  _ != null && a(i, ["responseMimeType"], _);
  const C = s(e, [
    "responseSchema"
  ]);
  C != null && a(i, ["responseSchema"], li(C));
  const A = s(e, [
    "responseJsonSchema"
  ]);
  A != null && a(i, ["responseJsonSchema"], A);
  const k = s(e, [
    "routingConfig"
  ]);
  k != null && a(i, ["routingConfig"], k);
  const b = s(e, [
    "modelSelectionConfig"
  ]);
  b != null && a(i, ["modelConfig"], b);
  const N = s(e, [
    "safetySettings"
  ]);
  if (n !== void 0 && N != null) {
    let Z = N;
    Array.isArray(Z) && (Z = Z.map((Q) => Q)), a(n, ["safetySettings"], Z);
  }
  const M = s(e, ["tools"]);
  if (n !== void 0 && M != null) {
    let Z = Et(M);
    Array.isArray(Z) && (Z = Z.map((Q) => ra(_t(Q)))), a(n, ["tools"], Z);
  }
  const w = s(e, ["toolConfig"]);
  n !== void 0 && w != null && a(n, ["toolConfig"], w);
  const D = s(e, ["labels"]);
  n !== void 0 && D != null && a(n, ["labels"], D);
  const g = s(e, [
    "cachedContent"
  ]);
  n !== void 0 && g != null && a(n, ["cachedContent"], qe(t, g));
  const E = s(e, [
    "responseModalities"
  ]);
  E != null && a(i, ["responseModalities"], E);
  const G = s(e, [
    "mediaResolution"
  ]);
  G != null && a(i, ["mediaResolution"], G);
  const H = s(e, ["speechConfig"]);
  H != null && a(i, ["speechConfig"], oa(ui(H)));
  const q = s(e, [
    "audioTimestamp"
  ]);
  q != null && a(i, ["audioTimestamp"], q);
  const J = s(e, [
    "thinkingConfig"
  ]);
  J != null && a(i, ["thinkingConfig"], J);
  const W = s(e, ["imageConfig"]);
  return W != null && a(i, ["imageConfig"], W), i;
}
function Fr(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["contents"]);
  if (o != null) {
    let l = Ie(o);
    Array.isArray(l) && (l = l.map((u) => vn(u))), a(n, ["contents"], l);
  }
  const r = s(e, ["config"]);
  return r != null && a(n, ["generationConfig"], Ld(t, r, n)), n;
}
function Gr(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["contents"]);
  if (o != null) {
    let l = Ie(o);
    Array.isArray(l) && (l = l.map((u) => u)), a(n, ["contents"], l);
  }
  const r = s(e, ["config"]);
  return r != null && a(n, ["generationConfig"], bd(t, r, n)), n;
}
function Or(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, ["candidates"]);
  if (i != null) {
    let d = i;
    Array.isArray(d) && (d = d.map((c) => sd(c))), a(e, ["candidates"], d);
  }
  const o = s(t, ["modelVersion"]);
  o != null && a(e, ["modelVersion"], o);
  const r = s(t, [
    "promptFeedback"
  ]);
  r != null && a(e, ["promptFeedback"], r);
  const l = s(t, ["responseId"]);
  l != null && a(e, ["responseId"], l);
  const u = s(t, [
    "usageMetadata"
  ]);
  return u != null && a(e, ["usageMetadata"], u), e;
}
function qr(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, ["candidates"]);
  if (i != null) {
    let c = i;
    Array.isArray(c) && (c = c.map((f) => f)), a(e, ["candidates"], c);
  }
  const o = s(t, ["createTime"]);
  o != null && a(e, ["createTime"], o);
  const r = s(t, ["modelVersion"]);
  r != null && a(e, ["modelVersion"], r);
  const l = s(t, [
    "promptFeedback"
  ]);
  l != null && a(e, ["promptFeedback"], l);
  const u = s(t, ["responseId"]);
  u != null && a(e, ["responseId"], u);
  const d = s(t, [
    "usageMetadata"
  ]);
  return d != null && a(e, ["usageMetadata"], d), e;
}
function Fd(t, e) {
  const n = {};
  if (s(t, ["outputGcsUri"]) !== void 0)
    throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  if (s(t, ["negativePrompt"]) !== void 0)
    throw new Error("negativePrompt parameter is not supported in Gemini API.");
  const i = s(t, [
    "numberOfImages"
  ]);
  e !== void 0 && i != null && a(e, ["parameters", "sampleCount"], i);
  const o = s(t, ["aspectRatio"]);
  e !== void 0 && o != null && a(e, ["parameters", "aspectRatio"], o);
  const r = s(t, [
    "guidanceScale"
  ]);
  if (e !== void 0 && r != null && a(e, ["parameters", "guidanceScale"], r), s(t, ["seed"]) !== void 0)
    throw new Error("seed parameter is not supported in Gemini API.");
  const l = s(t, [
    "safetyFilterLevel"
  ]);
  e !== void 0 && l != null && a(e, ["parameters", "safetySetting"], l);
  const u = s(t, [
    "personGeneration"
  ]);
  e !== void 0 && u != null && a(e, ["parameters", "personGeneration"], u);
  const d = s(t, [
    "includeSafetyAttributes"
  ]);
  e !== void 0 && d != null && a(e, ["parameters", "includeSafetyAttributes"], d);
  const c = s(t, [
    "includeRaiReason"
  ]);
  e !== void 0 && c != null && a(e, ["parameters", "includeRaiReason"], c);
  const f = s(t, ["language"]);
  e !== void 0 && f != null && a(e, ["parameters", "language"], f);
  const h = s(t, [
    "outputMimeType"
  ]);
  e !== void 0 && h != null && a(e, ["parameters", "outputOptions", "mimeType"], h);
  const p = s(t, [
    "outputCompressionQuality"
  ]);
  if (e !== void 0 && p != null && a(e, ["parameters", "outputOptions", "compressionQuality"], p), s(t, ["addWatermark"]) !== void 0)
    throw new Error("addWatermark parameter is not supported in Gemini API.");
  if (s(t, ["labels"]) !== void 0)
    throw new Error("labels parameter is not supported in Gemini API.");
  const m = s(t, ["imageSize"]);
  if (e !== void 0 && m != null && a(e, ["parameters", "sampleImageSize"], m), s(t, ["enhancePrompt"]) !== void 0)
    throw new Error("enhancePrompt parameter is not supported in Gemini API.");
  return n;
}
function Gd(t, e) {
  const n = {}, i = s(t, ["outputGcsUri"]);
  e !== void 0 && i != null && a(e, ["parameters", "storageUri"], i);
  const o = s(t, [
    "negativePrompt"
  ]);
  e !== void 0 && o != null && a(e, ["parameters", "negativePrompt"], o);
  const r = s(t, [
    "numberOfImages"
  ]);
  e !== void 0 && r != null && a(e, ["parameters", "sampleCount"], r);
  const l = s(t, ["aspectRatio"]);
  e !== void 0 && l != null && a(e, ["parameters", "aspectRatio"], l);
  const u = s(t, [
    "guidanceScale"
  ]);
  e !== void 0 && u != null && a(e, ["parameters", "guidanceScale"], u);
  const d = s(t, ["seed"]);
  e !== void 0 && d != null && a(e, ["parameters", "seed"], d);
  const c = s(t, [
    "safetyFilterLevel"
  ]);
  e !== void 0 && c != null && a(e, ["parameters", "safetySetting"], c);
  const f = s(t, [
    "personGeneration"
  ]);
  e !== void 0 && f != null && a(e, ["parameters", "personGeneration"], f);
  const h = s(t, [
    "includeSafetyAttributes"
  ]);
  e !== void 0 && h != null && a(e, ["parameters", "includeSafetyAttributes"], h);
  const p = s(t, [
    "includeRaiReason"
  ]);
  e !== void 0 && p != null && a(e, ["parameters", "includeRaiReason"], p);
  const m = s(t, ["language"]);
  e !== void 0 && m != null && a(e, ["parameters", "language"], m);
  const v = s(t, [
    "outputMimeType"
  ]);
  e !== void 0 && v != null && a(e, ["parameters", "outputOptions", "mimeType"], v);
  const y = s(t, [
    "outputCompressionQuality"
  ]);
  e !== void 0 && y != null && a(e, ["parameters", "outputOptions", "compressionQuality"], y);
  const _ = s(t, ["addWatermark"]);
  e !== void 0 && _ != null && a(e, ["parameters", "addWatermark"], _);
  const C = s(t, ["labels"]);
  e !== void 0 && C != null && a(e, ["labels"], C);
  const A = s(t, ["imageSize"]);
  e !== void 0 && A != null && a(e, ["parameters", "sampleImageSize"], A);
  const k = s(t, [
    "enhancePrompt"
  ]);
  return e !== void 0 && k != null && a(e, ["parameters", "enhancePrompt"], k), n;
}
function Od(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["prompt"]);
  o != null && a(n, ["instances[0]", "prompt"], o);
  const r = s(e, ["config"]);
  return r != null && Fd(r, n), n;
}
function qd(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["prompt"]);
  o != null && a(n, ["instances[0]", "prompt"], o);
  const r = s(e, ["config"]);
  return r != null && Gd(r, n), n;
}
function Bd(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, [
    "predictions"
  ]);
  if (i != null) {
    let r = i;
    Array.isArray(r) && (r = r.map((l) => jd(l))), a(e, ["generatedImages"], r);
  }
  const o = s(t, [
    "positivePromptSafetyAttributes"
  ]);
  return o != null && a(e, ["positivePromptSafetyAttributes"], na(o)), e;
}
function Vd(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, [
    "predictions"
  ]);
  if (i != null) {
    let r = i;
    Array.isArray(r) && (r = r.map((l) => _n(l))), a(e, ["generatedImages"], r);
  }
  const o = s(t, [
    "positivePromptSafetyAttributes"
  ]);
  return o != null && a(e, ["positivePromptSafetyAttributes"], ia(o)), e;
}
function Hd(t, e) {
  const n = {}, i = s(t, [
    "numberOfVideos"
  ]);
  if (e !== void 0 && i != null && a(e, ["parameters", "sampleCount"], i), s(t, ["outputGcsUri"]) !== void 0)
    throw new Error("outputGcsUri parameter is not supported in Gemini API.");
  if (s(t, ["fps"]) !== void 0)
    throw new Error("fps parameter is not supported in Gemini API.");
  const o = s(t, [
    "durationSeconds"
  ]);
  if (e !== void 0 && o != null && a(e, ["parameters", "durationSeconds"], o), s(t, ["seed"]) !== void 0)
    throw new Error("seed parameter is not supported in Gemini API.");
  const r = s(t, ["aspectRatio"]);
  e !== void 0 && r != null && a(e, ["parameters", "aspectRatio"], r);
  const l = s(t, ["resolution"]);
  e !== void 0 && l != null && a(e, ["parameters", "resolution"], l);
  const u = s(t, [
    "personGeneration"
  ]);
  if (e !== void 0 && u != null && a(e, ["parameters", "personGeneration"], u), s(t, ["pubsubTopic"]) !== void 0)
    throw new Error("pubsubTopic parameter is not supported in Gemini API.");
  const d = s(t, [
    "negativePrompt"
  ]);
  e !== void 0 && d != null && a(e, ["parameters", "negativePrompt"], d);
  const c = s(t, [
    "enhancePrompt"
  ]);
  if (e !== void 0 && c != null && a(e, ["parameters", "enhancePrompt"], c), s(t, ["generateAudio"]) !== void 0)
    throw new Error("generateAudio parameter is not supported in Gemini API.");
  const f = s(t, ["lastFrame"]);
  e !== void 0 && f != null && a(e, ["instances[0]", "lastFrame"], En(f));
  const h = s(t, [
    "referenceImages"
  ]);
  if (e !== void 0 && h != null) {
    let p = h;
    Array.isArray(p) && (p = p.map((m) => Hf(m))), a(e, ["instances[0]", "referenceImages"], p);
  }
  if (s(t, ["mask"]) !== void 0)
    throw new Error("mask parameter is not supported in Gemini API.");
  if (s(t, ["compressionQuality"]) !== void 0)
    throw new Error("compressionQuality parameter is not supported in Gemini API.");
  return n;
}
function $d(t, e) {
  const n = {}, i = s(t, [
    "numberOfVideos"
  ]);
  e !== void 0 && i != null && a(e, ["parameters", "sampleCount"], i);
  const o = s(t, ["outputGcsUri"]);
  e !== void 0 && o != null && a(e, ["parameters", "storageUri"], o);
  const r = s(t, ["fps"]);
  e !== void 0 && r != null && a(e, ["parameters", "fps"], r);
  const l = s(t, [
    "durationSeconds"
  ]);
  e !== void 0 && l != null && a(e, ["parameters", "durationSeconds"], l);
  const u = s(t, ["seed"]);
  e !== void 0 && u != null && a(e, ["parameters", "seed"], u);
  const d = s(t, ["aspectRatio"]);
  e !== void 0 && d != null && a(e, ["parameters", "aspectRatio"], d);
  const c = s(t, ["resolution"]);
  e !== void 0 && c != null && a(e, ["parameters", "resolution"], c);
  const f = s(t, [
    "personGeneration"
  ]);
  e !== void 0 && f != null && a(e, ["parameters", "personGeneration"], f);
  const h = s(t, ["pubsubTopic"]);
  e !== void 0 && h != null && a(e, ["parameters", "pubsubTopic"], h);
  const p = s(t, [
    "negativePrompt"
  ]);
  e !== void 0 && p != null && a(e, ["parameters", "negativePrompt"], p);
  const m = s(t, [
    "enhancePrompt"
  ]);
  e !== void 0 && m != null && a(e, ["parameters", "enhancePrompt"], m);
  const v = s(t, [
    "generateAudio"
  ]);
  e !== void 0 && v != null && a(e, ["parameters", "generateAudio"], v);
  const y = s(t, ["lastFrame"]);
  e !== void 0 && y != null && a(e, ["instances[0]", "lastFrame"], Ue(y));
  const _ = s(t, [
    "referenceImages"
  ]);
  if (e !== void 0 && _ != null) {
    let k = _;
    Array.isArray(k) && (k = k.map((b) => $f(b))), a(e, ["instances[0]", "referenceImages"], k);
  }
  const C = s(t, ["mask"]);
  e !== void 0 && C != null && a(e, ["instances[0]", "mask"], Vf(C));
  const A = s(t, [
    "compressionQuality"
  ]);
  return e !== void 0 && A != null && a(e, ["parameters", "compressionQuality"], A), n;
}
function Jd(t) {
  const e = {}, n = s(t, ["name"]);
  n != null && a(e, ["name"], n);
  const i = s(t, ["metadata"]);
  i != null && a(e, ["metadata"], i);
  const o = s(t, ["done"]);
  o != null && a(e, ["done"], o);
  const r = s(t, ["error"]);
  r != null && a(e, ["error"], r);
  const l = s(t, [
    "response",
    "generateVideoResponse"
  ]);
  return l != null && a(e, ["response"], zd(l)), e;
}
function Kd(t) {
  const e = {}, n = s(t, ["name"]);
  n != null && a(e, ["name"], n);
  const i = s(t, ["metadata"]);
  i != null && a(e, ["metadata"], i);
  const o = s(t, ["done"]);
  o != null && a(e, ["done"], o);
  const r = s(t, ["error"]);
  r != null && a(e, ["error"], r);
  const l = s(t, ["response"]);
  return l != null && a(e, ["response"], Xd(l)), e;
}
function Wd(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["prompt"]);
  o != null && a(n, ["instances[0]", "prompt"], o);
  const r = s(e, ["image"]);
  r != null && a(n, ["instances[0]", "image"], En(r));
  const l = s(e, ["video"]);
  l != null && a(n, ["instances[0]", "video"], sa(l));
  const u = s(e, ["source"]);
  u != null && Qd(u, n);
  const d = s(e, ["config"]);
  return d != null && Hd(d, n), n;
}
function Yd(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["prompt"]);
  o != null && a(n, ["instances[0]", "prompt"], o);
  const r = s(e, ["image"]);
  r != null && a(n, ["instances[0]", "image"], Ue(r));
  const l = s(e, ["video"]);
  l != null && a(n, ["instances[0]", "video"], aa(l));
  const u = s(e, ["source"]);
  u != null && Zd(u, n);
  const d = s(e, ["config"]);
  return d != null && $d(d, n), n;
}
function zd(t) {
  const e = {}, n = s(t, [
    "generatedSamples"
  ]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => tf(l))), a(e, ["generatedVideos"], r);
  }
  const i = s(t, [
    "raiMediaFilteredCount"
  ]);
  i != null && a(e, ["raiMediaFilteredCount"], i);
  const o = s(t, [
    "raiMediaFilteredReasons"
  ]);
  return o != null && a(e, ["raiMediaFilteredReasons"], o), e;
}
function Xd(t) {
  const e = {}, n = s(t, ["videos"]);
  if (n != null) {
    let r = n;
    Array.isArray(r) && (r = r.map((l) => nf(l))), a(e, ["generatedVideos"], r);
  }
  const i = s(t, [
    "raiMediaFilteredCount"
  ]);
  i != null && a(e, ["raiMediaFilteredCount"], i);
  const o = s(t, [
    "raiMediaFilteredReasons"
  ]);
  return o != null && a(e, ["raiMediaFilteredReasons"], o), e;
}
function Qd(t, e) {
  const n = {}, i = s(t, ["prompt"]);
  e !== void 0 && i != null && a(e, ["instances[0]", "prompt"], i);
  const o = s(t, ["image"]);
  e !== void 0 && o != null && a(e, ["instances[0]", "image"], En(o));
  const r = s(t, ["video"]);
  return e !== void 0 && r != null && a(e, ["instances[0]", "video"], sa(r)), n;
}
function Zd(t, e) {
  const n = {}, i = s(t, ["prompt"]);
  e !== void 0 && i != null && a(e, ["instances[0]", "prompt"], i);
  const o = s(t, ["image"]);
  e !== void 0 && o != null && a(e, ["instances[0]", "image"], Ue(o));
  const r = s(t, ["video"]);
  return e !== void 0 && r != null && a(e, ["instances[0]", "video"], aa(r)), n;
}
function jd(t) {
  const e = {}, n = s(t, ["_self"]);
  n != null && a(e, ["image"], uf(n));
  const i = s(t, [
    "raiFilteredReason"
  ]);
  i != null && a(e, ["raiFilteredReason"], i);
  const o = s(t, ["_self"]);
  return o != null && a(e, ["safetyAttributes"], na(o)), e;
}
function _n(t) {
  const e = {}, n = s(t, ["_self"]);
  n != null && a(e, ["image"], ta(n));
  const i = s(t, [
    "raiFilteredReason"
  ]);
  i != null && a(e, ["raiFilteredReason"], i);
  const o = s(t, ["_self"]);
  o != null && a(e, ["safetyAttributes"], ia(o));
  const r = s(t, ["prompt"]);
  return r != null && a(e, ["enhancedPrompt"], r), e;
}
function ef(t) {
  const e = {}, n = s(t, ["_self"]);
  n != null && a(e, ["mask"], ta(n));
  const i = s(t, ["labels"]);
  if (i != null) {
    let o = i;
    Array.isArray(o) && (o = o.map((r) => r)), a(e, ["labels"], o);
  }
  return e;
}
function tf(t) {
  const e = {}, n = s(t, ["video"]);
  return n != null && a(e, ["video"], qf(n)), e;
}
function nf(t) {
  const e = {}, n = s(t, ["_self"]);
  return n != null && a(e, ["video"], Bf(n)), e;
}
function of(t) {
  const e = {}, n = s(t, [
    "modelSelectionConfig"
  ]);
  n != null && a(e, ["modelConfig"], n);
  const i = s(t, [
    "audioTimestamp"
  ]);
  i != null && a(e, ["audioTimestamp"], i);
  const o = s(t, [
    "candidateCount"
  ]);
  o != null && a(e, ["candidateCount"], o);
  const r = s(t, [
    "enableAffectiveDialog"
  ]);
  r != null && a(e, ["enableAffectiveDialog"], r);
  const l = s(t, [
    "frequencyPenalty"
  ]);
  l != null && a(e, ["frequencyPenalty"], l);
  const u = s(t, ["logprobs"]);
  u != null && a(e, ["logprobs"], u);
  const d = s(t, [
    "maxOutputTokens"
  ]);
  d != null && a(e, ["maxOutputTokens"], d);
  const c = s(t, [
    "mediaResolution"
  ]);
  c != null && a(e, ["mediaResolution"], c);
  const f = s(t, [
    "presencePenalty"
  ]);
  f != null && a(e, ["presencePenalty"], f);
  const h = s(t, [
    "responseJsonSchema"
  ]);
  h != null && a(e, ["responseJsonSchema"], h);
  const p = s(t, [
    "responseLogprobs"
  ]);
  p != null && a(e, ["responseLogprobs"], p);
  const m = s(t, [
    "responseMimeType"
  ]);
  m != null && a(e, ["responseMimeType"], m);
  const v = s(t, [
    "responseModalities"
  ]);
  v != null && a(e, ["responseModalities"], v);
  const y = s(t, [
    "responseSchema"
  ]);
  y != null && a(e, ["responseSchema"], y);
  const _ = s(t, [
    "routingConfig"
  ]);
  _ != null && a(e, ["routingConfig"], _);
  const C = s(t, ["seed"]);
  C != null && a(e, ["seed"], C);
  const A = s(t, ["speechConfig"]);
  A != null && a(e, ["speechConfig"], oa(A));
  const k = s(t, [
    "stopSequences"
  ]);
  k != null && a(e, ["stopSequences"], k);
  const b = s(t, ["temperature"]);
  b != null && a(e, ["temperature"], b);
  const N = s(t, [
    "thinkingConfig"
  ]);
  N != null && a(e, ["thinkingConfig"], N);
  const M = s(t, ["topK"]);
  M != null && a(e, ["topK"], M);
  const w = s(t, ["topP"]);
  if (w != null && a(e, ["topP"], w), s(t, ["enableEnhancedCivicAnswers"]) !== void 0)
    throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");
  return e;
}
function rf(t, e) {
  const n = {}, i = s(e, ["model"]);
  return i != null && a(n, ["_url", "name"], ae(t, i)), n;
}
function sf(t, e) {
  const n = {}, i = s(e, ["model"]);
  return i != null && a(n, ["_url", "name"], ae(t, i)), n;
}
function af(t) {
  const e = {};
  if (s(t, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const n = s(t, ["enableWidget"]);
  return n != null && a(e, ["enableWidget"], n), e;
}
function lf(t) {
  const e = {};
  if (s(t, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  const n = s(t, [
    "timeRangeFilter"
  ]);
  return n != null && a(e, ["timeRangeFilter"], n), e;
}
function uf(t) {
  const e = {}, n = s(t, [
    "bytesBase64Encoded"
  ]);
  n != null && a(e, ["imageBytes"], He(n));
  const i = s(t, ["mimeType"]);
  return i != null && a(e, ["mimeType"], i), e;
}
function ta(t) {
  const e = {}, n = s(t, ["gcsUri"]);
  n != null && a(e, ["gcsUri"], n);
  const i = s(t, [
    "bytesBase64Encoded"
  ]);
  i != null && a(e, ["imageBytes"], He(i));
  const o = s(t, ["mimeType"]);
  return o != null && a(e, ["mimeType"], o), e;
}
function En(t) {
  const e = {};
  if (s(t, ["gcsUri"]) !== void 0)
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  const n = s(t, ["imageBytes"]);
  n != null && a(e, ["bytesBase64Encoded"], He(n));
  const i = s(t, ["mimeType"]);
  return i != null && a(e, ["mimeType"], i), e;
}
function Ue(t) {
  const e = {}, n = s(t, ["gcsUri"]);
  n != null && a(e, ["gcsUri"], n);
  const i = s(t, ["imageBytes"]);
  i != null && a(e, ["bytesBase64Encoded"], He(i));
  const o = s(t, ["mimeType"]);
  return o != null && a(e, ["mimeType"], o), e;
}
function cf(t, e, n) {
  const i = {}, o = s(e, ["pageSize"]);
  n !== void 0 && o != null && a(n, ["_query", "pageSize"], o);
  const r = s(e, ["pageToken"]);
  n !== void 0 && r != null && a(n, ["_query", "pageToken"], r);
  const l = s(e, ["filter"]);
  n !== void 0 && l != null && a(n, ["_query", "filter"], l);
  const u = s(e, ["queryBase"]);
  return n !== void 0 && u != null && a(n, ["_url", "models_url"], Ws(t, u)), i;
}
function df(t, e, n) {
  const i = {}, o = s(e, ["pageSize"]);
  n !== void 0 && o != null && a(n, ["_query", "pageSize"], o);
  const r = s(e, ["pageToken"]);
  n !== void 0 && r != null && a(n, ["_query", "pageToken"], r);
  const l = s(e, ["filter"]);
  n !== void 0 && l != null && a(n, ["_query", "filter"], l);
  const u = s(e, ["queryBase"]);
  return n !== void 0 && u != null && a(n, ["_url", "models_url"], Ws(t, u)), i;
}
function ff(t, e) {
  const n = {}, i = s(e, ["config"]);
  return i != null && cf(t, i, n), n;
}
function hf(t, e) {
  const n = {}, i = s(e, ["config"]);
  return i != null && df(t, i, n), n;
}
function pf(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, [
    "nextPageToken"
  ]);
  i != null && a(e, ["nextPageToken"], i);
  const o = s(t, ["_self"]);
  if (o != null) {
    let r = Ys(o);
    Array.isArray(r) && (r = r.map((l) => Zn(l))), a(e, ["models"], r);
  }
  return e;
}
function gf(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, [
    "nextPageToken"
  ]);
  i != null && a(e, ["nextPageToken"], i);
  const o = s(t, ["_self"]);
  if (o != null) {
    let r = Ys(o);
    Array.isArray(r) && (r = r.map((l) => jn(l))), a(e, ["models"], r);
  }
  return e;
}
function mf(t) {
  const e = {}, n = s(t, ["maskMode"]);
  n != null && a(e, ["maskMode"], n);
  const i = s(t, [
    "segmentationClasses"
  ]);
  i != null && a(e, ["maskClasses"], i);
  const o = s(t, ["maskDilation"]);
  return o != null && a(e, ["dilation"], o), e;
}
function Zn(t) {
  const e = {}, n = s(t, ["name"]);
  n != null && a(e, ["name"], n);
  const i = s(t, ["displayName"]);
  i != null && a(e, ["displayName"], i);
  const o = s(t, ["description"]);
  o != null && a(e, ["description"], o);
  const r = s(t, ["version"]);
  r != null && a(e, ["version"], r);
  const l = s(t, ["_self"]);
  l != null && a(e, ["tunedModelInfo"], Mf(l));
  const u = s(t, [
    "inputTokenLimit"
  ]);
  u != null && a(e, ["inputTokenLimit"], u);
  const d = s(t, [
    "outputTokenLimit"
  ]);
  d != null && a(e, ["outputTokenLimit"], d);
  const c = s(t, [
    "supportedGenerationMethods"
  ]);
  return c != null && a(e, ["supportedActions"], c), e;
}
function jn(t) {
  const e = {}, n = s(t, ["name"]);
  n != null && a(e, ["name"], n);
  const i = s(t, ["displayName"]);
  i != null && a(e, ["displayName"], i);
  const o = s(t, ["description"]);
  o != null && a(e, ["description"], o);
  const r = s(t, ["versionId"]);
  r != null && a(e, ["version"], r);
  const l = s(t, ["deployedModels"]);
  if (l != null) {
    let h = l;
    Array.isArray(h) && (h = h.map((p) => Ud(p))), a(e, ["endpoints"], h);
  }
  const u = s(t, ["labels"]);
  u != null && a(e, ["labels"], u);
  const d = s(t, ["_self"]);
  d != null && a(e, ["tunedModelInfo"], Uf(d));
  const c = s(t, [
    "defaultCheckpointId"
  ]);
  c != null && a(e, ["defaultCheckpointId"], c);
  const f = s(t, ["checkpoints"]);
  if (f != null) {
    let h = f;
    Array.isArray(h) && (h = h.map((p) => p)), a(e, ["checkpoints"], h);
  }
  return e;
}
function yf(t) {
  const e = {}, n = s(t, ["functionCall"]);
  n != null && a(e, ["functionCall"], n);
  const i = s(t, [
    "codeExecutionResult"
  ]);
  i != null && a(e, ["codeExecutionResult"], i);
  const o = s(t, [
    "executableCode"
  ]);
  o != null && a(e, ["executableCode"], o);
  const r = s(t, ["fileData"]);
  r != null && a(e, ["fileData"], Dd(r));
  const l = s(t, [
    "functionResponse"
  ]);
  l != null && a(e, ["functionResponse"], l);
  const u = s(t, ["inlineData"]);
  u != null && a(e, ["inlineData"], rd(u));
  const d = s(t, ["text"]);
  d != null && a(e, ["text"], d);
  const c = s(t, ["thought"]);
  c != null && a(e, ["thought"], c);
  const f = s(t, [
    "thoughtSignature"
  ]);
  f != null && a(e, ["thoughtSignature"], f);
  const h = s(t, [
    "videoMetadata"
  ]);
  return h != null && a(e, ["videoMetadata"], h), e;
}
function vf(t) {
  const e = {}, n = s(t, ["productImage"]);
  return n != null && a(e, ["image"], Ue(n)), e;
}
function _f(t, e) {
  const n = {}, i = s(t, [
    "numberOfImages"
  ]);
  e !== void 0 && i != null && a(e, ["parameters", "sampleCount"], i);
  const o = s(t, ["baseSteps"]);
  e !== void 0 && o != null && a(e, ["parameters", "editConfig", "baseSteps"], o);
  const r = s(t, ["outputGcsUri"]);
  e !== void 0 && r != null && a(e, ["parameters", "storageUri"], r);
  const l = s(t, ["seed"]);
  e !== void 0 && l != null && a(e, ["parameters", "seed"], l);
  const u = s(t, [
    "safetyFilterLevel"
  ]);
  e !== void 0 && u != null && a(e, ["parameters", "safetySetting"], u);
  const d = s(t, [
    "personGeneration"
  ]);
  e !== void 0 && d != null && a(e, ["parameters", "personGeneration"], d);
  const c = s(t, ["addWatermark"]);
  e !== void 0 && c != null && a(e, ["parameters", "addWatermark"], c);
  const f = s(t, [
    "outputMimeType"
  ]);
  e !== void 0 && f != null && a(e, ["parameters", "outputOptions", "mimeType"], f);
  const h = s(t, [
    "outputCompressionQuality"
  ]);
  e !== void 0 && h != null && a(e, ["parameters", "outputOptions", "compressionQuality"], h);
  const p = s(t, [
    "enhancePrompt"
  ]);
  e !== void 0 && p != null && a(e, ["parameters", "enhancePrompt"], p);
  const m = s(t, ["labels"]);
  return e !== void 0 && m != null && a(e, ["labels"], m), n;
}
function Ef(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["source"]);
  o != null && Cf(o, n);
  const r = s(e, ["config"]);
  return r != null && _f(r, n), n;
}
function Tf(t) {
  const e = {}, n = s(t, [
    "predictions"
  ]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((o) => _n(o))), a(e, ["generatedImages"], i);
  }
  return e;
}
function Cf(t, e) {
  const n = {}, i = s(t, ["prompt"]);
  e !== void 0 && i != null && a(e, ["instances[0]", "prompt"], i);
  const o = s(t, ["personImage"]);
  e !== void 0 && o != null && a(e, ["instances[0]", "personImage", "image"], Ue(o));
  const r = s(t, [
    "productImages"
  ]);
  if (e !== void 0 && r != null) {
    let l = r;
    Array.isArray(l) && (l = l.map((u) => vf(u))), a(e, ["instances[0]", "productImages"], l);
  }
  return n;
}
function Af(t) {
  const e = {}, n = s(t, [
    "referenceImage"
  ]);
  n != null && a(e, ["referenceImage"], Ue(n));
  const i = s(t, ["referenceId"]);
  i != null && a(e, ["referenceId"], i);
  const o = s(t, [
    "referenceType"
  ]);
  o != null && a(e, ["referenceType"], o);
  const r = s(t, [
    "maskImageConfig"
  ]);
  r != null && a(e, ["maskImageConfig"], mf(r));
  const l = s(t, [
    "controlImageConfig"
  ]);
  l != null && a(e, ["controlImageConfig"], fd(l));
  const u = s(t, [
    "styleImageConfig"
  ]);
  u != null && a(e, ["styleImageConfig"], u);
  const d = s(t, [
    "subjectImageConfig"
  ]);
  return d != null && a(e, ["subjectImageConfig"], d), e;
}
function na(t) {
  const e = {}, n = s(t, [
    "safetyAttributes",
    "categories"
  ]);
  n != null && a(e, ["categories"], n);
  const i = s(t, [
    "safetyAttributes",
    "scores"
  ]);
  i != null && a(e, ["scores"], i);
  const o = s(t, ["contentType"]);
  return o != null && a(e, ["contentType"], o), e;
}
function ia(t) {
  const e = {}, n = s(t, [
    "safetyAttributes",
    "categories"
  ]);
  n != null && a(e, ["categories"], n);
  const i = s(t, [
    "safetyAttributes",
    "scores"
  ]);
  i != null && a(e, ["scores"], i);
  const o = s(t, ["contentType"]);
  return o != null && a(e, ["contentType"], o), e;
}
function Sf(t) {
  const e = {}, n = s(t, ["category"]);
  if (n != null && a(e, ["category"], n), s(t, ["method"]) !== void 0)
    throw new Error("method parameter is not supported in Gemini API.");
  const i = s(t, ["threshold"]);
  return i != null && a(e, ["threshold"], i), e;
}
function wf(t) {
  const e = {}, n = s(t, ["image"]);
  return n != null && a(e, ["image"], Ue(n)), e;
}
function If(t, e) {
  const n = {}, i = s(t, ["mode"]);
  e !== void 0 && i != null && a(e, ["parameters", "mode"], i);
  const o = s(t, [
    "maxPredictions"
  ]);
  e !== void 0 && o != null && a(e, ["parameters", "maxPredictions"], o);
  const r = s(t, [
    "confidenceThreshold"
  ]);
  e !== void 0 && r != null && a(e, ["parameters", "confidenceThreshold"], r);
  const l = s(t, ["maskDilation"]);
  e !== void 0 && l != null && a(e, ["parameters", "maskDilation"], l);
  const u = s(t, [
    "binaryColorThreshold"
  ]);
  e !== void 0 && u != null && a(e, ["parameters", "binaryColorThreshold"], u);
  const d = s(t, ["labels"]);
  return e !== void 0 && d != null && a(e, ["labels"], d), n;
}
function Rf(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["source"]);
  o != null && Nf(o, n);
  const r = s(e, ["config"]);
  return r != null && If(r, n), n;
}
function Pf(t) {
  const e = {}, n = s(t, ["predictions"]);
  if (n != null) {
    let i = n;
    Array.isArray(i) && (i = i.map((o) => ef(o))), a(e, ["generatedMasks"], i);
  }
  return e;
}
function Nf(t, e) {
  const n = {}, i = s(t, ["prompt"]);
  e !== void 0 && i != null && a(e, ["instances[0]", "prompt"], i);
  const o = s(t, ["image"]);
  e !== void 0 && o != null && a(e, ["instances[0]", "image"], Ue(o));
  const r = s(t, [
    "scribbleImage"
  ]);
  return e !== void 0 && r != null && a(e, ["instances[0]", "scribble"], wf(r)), n;
}
function oa(t) {
  const e = {}, n = s(t, ["languageCode"]);
  n != null && a(e, ["languageCode"], n);
  const i = s(t, ["voiceConfig"]);
  if (i != null && a(e, ["voiceConfig"], i), s(t, ["multiSpeakerVoiceConfig"]) !== void 0)
    throw new Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");
  return e;
}
function kf(t) {
  const e = {}, n = s(t, [
    "functionDeclarations"
  ]);
  if (n != null) {
    let c = n;
    Array.isArray(c) && (c = c.map((f) => f)), a(e, ["functionDeclarations"], c);
  }
  if (s(t, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const i = s(t, [
    "googleSearchRetrieval"
  ]);
  i != null && a(e, ["googleSearchRetrieval"], i);
  const o = s(t, ["googleMaps"]);
  o != null && a(e, ["googleMaps"], af(o));
  const r = s(t, ["computerUse"]);
  r != null && a(e, ["computerUse"], r);
  const l = s(t, [
    "codeExecution"
  ]);
  if (l != null && a(e, ["codeExecution"], l), s(t, ["enterpriseWebSearch"]) !== void 0)
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const u = s(t, ["googleSearch"]);
  u != null && a(e, ["googleSearch"], lf(u));
  const d = s(t, ["urlContext"]);
  return d != null && a(e, ["urlContext"], d), e;
}
function ra(t) {
  const e = {}, n = s(t, [
    "functionDeclarations"
  ]);
  if (n != null) {
    let h = n;
    Array.isArray(h) && (h = h.map((p) => xd(p))), a(e, ["functionDeclarations"], h);
  }
  const i = s(t, ["retrieval"]);
  i != null && a(e, ["retrieval"], i);
  const o = s(t, [
    "googleSearchRetrieval"
  ]);
  o != null && a(e, ["googleSearchRetrieval"], o);
  const r = s(t, ["googleMaps"]);
  r != null && a(e, ["googleMaps"], r);
  const l = s(t, ["computerUse"]);
  l != null && a(e, ["computerUse"], l);
  const u = s(t, [
    "codeExecution"
  ]);
  u != null && a(e, ["codeExecution"], u);
  const d = s(t, [
    "enterpriseWebSearch"
  ]);
  d != null && a(e, ["enterpriseWebSearch"], d);
  const c = s(t, ["googleSearch"]);
  c != null && a(e, ["googleSearch"], c);
  const f = s(t, ["urlContext"]);
  return f != null && a(e, ["urlContext"], f), e;
}
function Mf(t) {
  const e = {}, n = s(t, ["baseModel"]);
  n != null && a(e, ["baseModel"], n);
  const i = s(t, ["createTime"]);
  i != null && a(e, ["createTime"], i);
  const o = s(t, ["updateTime"]);
  return o != null && a(e, ["updateTime"], o), e;
}
function Uf(t) {
  const e = {}, n = s(t, [
    "labels",
    "google-vertex-llm-tuning-base-model-id"
  ]);
  n != null && a(e, ["baseModel"], n);
  const i = s(t, ["createTime"]);
  i != null && a(e, ["createTime"], i);
  const o = s(t, ["updateTime"]);
  return o != null && a(e, ["updateTime"], o), e;
}
function Df(t, e) {
  const n = {}, i = s(t, ["displayName"]);
  e !== void 0 && i != null && a(e, ["displayName"], i);
  const o = s(t, ["description"]);
  e !== void 0 && o != null && a(e, ["description"], o);
  const r = s(t, [
    "defaultCheckpointId"
  ]);
  return e !== void 0 && r != null && a(e, ["defaultCheckpointId"], r), n;
}
function xf(t, e) {
  const n = {}, i = s(t, ["displayName"]);
  e !== void 0 && i != null && a(e, ["displayName"], i);
  const o = s(t, ["description"]);
  e !== void 0 && o != null && a(e, ["description"], o);
  const r = s(t, [
    "defaultCheckpointId"
  ]);
  return e !== void 0 && r != null && a(e, ["defaultCheckpointId"], r), n;
}
function Lf(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "name"], ae(t, i));
  const o = s(e, ["config"]);
  return o != null && Df(o, n), n;
}
function bf(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["config"]);
  return o != null && xf(o, n), n;
}
function Ff(t, e) {
  const n = {}, i = s(t, ["outputGcsUri"]);
  e !== void 0 && i != null && a(e, ["parameters", "storageUri"], i);
  const o = s(t, [
    "safetyFilterLevel"
  ]);
  e !== void 0 && o != null && a(e, ["parameters", "safetySetting"], o);
  const r = s(t, [
    "personGeneration"
  ]);
  e !== void 0 && r != null && a(e, ["parameters", "personGeneration"], r);
  const l = s(t, [
    "includeRaiReason"
  ]);
  e !== void 0 && l != null && a(e, ["parameters", "includeRaiReason"], l);
  const u = s(t, [
    "outputMimeType"
  ]);
  e !== void 0 && u != null && a(e, ["parameters", "outputOptions", "mimeType"], u);
  const d = s(t, [
    "outputCompressionQuality"
  ]);
  e !== void 0 && d != null && a(e, ["parameters", "outputOptions", "compressionQuality"], d);
  const c = s(t, [
    "enhanceInputImage"
  ]);
  e !== void 0 && c != null && a(e, ["parameters", "upscaleConfig", "enhanceInputImage"], c);
  const f = s(t, [
    "imagePreservationFactor"
  ]);
  e !== void 0 && f != null && a(e, ["parameters", "upscaleConfig", "imagePreservationFactor"], f);
  const h = s(t, ["labels"]);
  e !== void 0 && h != null && a(e, ["labels"], h);
  const p = s(t, [
    "numberOfImages"
  ]);
  e !== void 0 && p != null && a(e, ["parameters", "sampleCount"], p);
  const m = s(t, ["mode"]);
  return e !== void 0 && m != null && a(e, ["parameters", "mode"], m), n;
}
function Gf(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["_url", "model"], ae(t, i));
  const o = s(e, ["image"]);
  o != null && a(n, ["instances[0]", "image"], Ue(o));
  const r = s(e, [
    "upscaleFactor"
  ]);
  r != null && a(n, ["parameters", "upscaleConfig", "upscaleFactor"], r);
  const l = s(e, ["config"]);
  return l != null && Ff(l, n), n;
}
function Of(t) {
  const e = {}, n = s(t, [
    "sdkHttpResponse"
  ]);
  n != null && a(e, ["sdkHttpResponse"], n);
  const i = s(t, [
    "predictions"
  ]);
  if (i != null) {
    let o = i;
    Array.isArray(o) && (o = o.map((r) => _n(r))), a(e, ["generatedImages"], o);
  }
  return e;
}
function qf(t) {
  const e = {}, n = s(t, ["uri"]);
  n != null && a(e, ["uri"], n);
  const i = s(t, ["encodedVideo"]);
  i != null && a(e, ["videoBytes"], He(i));
  const o = s(t, ["encoding"]);
  return o != null && a(e, ["mimeType"], o), e;
}
function Bf(t) {
  const e = {}, n = s(t, ["gcsUri"]);
  n != null && a(e, ["uri"], n);
  const i = s(t, [
    "bytesBase64Encoded"
  ]);
  i != null && a(e, ["videoBytes"], He(i));
  const o = s(t, ["mimeType"]);
  return o != null && a(e, ["mimeType"], o), e;
}
function Vf(t) {
  const e = {}, n = s(t, ["image"]);
  n != null && a(e, ["_self"], Ue(n));
  const i = s(t, ["maskMode"]);
  return i != null && a(e, ["maskMode"], i), e;
}
function Hf(t) {
  const e = {}, n = s(t, ["image"]);
  n != null && a(e, ["image"], En(n));
  const i = s(t, [
    "referenceType"
  ]);
  return i != null && a(e, ["referenceType"], i), e;
}
function $f(t) {
  const e = {}, n = s(t, ["image"]);
  n != null && a(e, ["image"], Ue(n));
  const i = s(t, [
    "referenceType"
  ]);
  return i != null && a(e, ["referenceType"], i), e;
}
function sa(t) {
  const e = {}, n = s(t, ["uri"]);
  n != null && a(e, ["uri"], n);
  const i = s(t, ["videoBytes"]);
  i != null && a(e, ["encodedVideo"], He(i));
  const o = s(t, ["mimeType"]);
  return o != null && a(e, ["encoding"], o), e;
}
function aa(t) {
  const e = {}, n = s(t, ["uri"]);
  n != null && a(e, ["gcsUri"], n);
  const i = s(t, ["videoBytes"]);
  i != null && a(e, ["bytesBase64Encoded"], He(i));
  const o = s(t, ["mimeType"]);
  return o != null && a(e, ["mimeType"], o), e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Jf = "Content-Type", Kf = "X-Server-Timeout", Wf = "User-Agent", ei = "x-goog-api-client", Yf = "1.28.0", zf = `google-genai-sdk/${Yf}`, Xf = "v1beta1", Qf = "v1beta", Br = /^\s*data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
class Zf {
  constructor(e) {
    var n, i;
    this.clientOptions = Object.assign(Object.assign({}, e), { project: e.project, location: e.location, apiKey: e.apiKey, vertexai: e.vertexai });
    const o = {};
    this.clientOptions.vertexai ? (o.apiVersion = (n = this.clientOptions.apiVersion) !== null && n !== void 0 ? n : Xf, o.baseUrl = this.baseUrlFromProjectLocation(), this.normalizeAuthParameters()) : (o.apiVersion = (i = this.clientOptions.apiVersion) !== null && i !== void 0 ? i : Qf, o.baseUrl = "https://generativelanguage.googleapis.com/"), o.headers = this.getDefaultHeaders(), this.clientOptions.httpOptions = o, e.httpOptions && (this.clientOptions.httpOptions = this.patchHttpOptions(o, e.httpOptions));
  }
  /**
   * Determines the base URL for Vertex AI based on project and location.
   * Uses the global endpoint if location is 'global' or if project/location
   * are not specified (implying API key usage).
   * @private
   */
  baseUrlFromProjectLocation() {
    return this.clientOptions.project && this.clientOptions.location && this.clientOptions.location !== "global" ? `https://${this.clientOptions.location}-aiplatform.googleapis.com/` : "https://aiplatform.googleapis.com/";
  }
  /**
   * Normalizes authentication parameters for Vertex AI.
   * If project and location are provided, API key is cleared.
   * If project and location are not provided (implying API key usage),
   * project and location are cleared.
   * @private
   */
  normalizeAuthParameters() {
    if (this.clientOptions.project && this.clientOptions.location) {
      this.clientOptions.apiKey = void 0;
      return;
    }
    this.clientOptions.project = void 0, this.clientOptions.location = void 0;
  }
  isVertexAI() {
    var e;
    return (e = this.clientOptions.vertexai) !== null && e !== void 0 ? e : !1;
  }
  getProject() {
    return this.clientOptions.project;
  }
  getLocation() {
    return this.clientOptions.location;
  }
  getApiVersion() {
    if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.apiVersion !== void 0)
      return this.clientOptions.httpOptions.apiVersion;
    throw new Error("API version is not set.");
  }
  getBaseUrl() {
    if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.baseUrl !== void 0)
      return this.clientOptions.httpOptions.baseUrl;
    throw new Error("Base URL is not set.");
  }
  getRequestUrl() {
    return this.getRequestUrlInternal(this.clientOptions.httpOptions);
  }
  getHeaders() {
    if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.headers !== void 0)
      return this.clientOptions.httpOptions.headers;
    throw new Error("Headers are not set.");
  }
  getRequestUrlInternal(e) {
    if (!e || e.baseUrl === void 0 || e.apiVersion === void 0)
      throw new Error("HTTP options are not correctly set.");
    const i = [e.baseUrl.endsWith("/") ? e.baseUrl.slice(0, -1) : e.baseUrl];
    return e.apiVersion && e.apiVersion !== "" && i.push(e.apiVersion), i.join("/");
  }
  getBaseResourcePath() {
    return `projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`;
  }
  getApiKey() {
    return this.clientOptions.apiKey;
  }
  getWebsocketBaseUrl() {
    const e = this.getBaseUrl(), n = new URL(e);
    return n.protocol = n.protocol == "http:" ? "ws" : "wss", n.toString();
  }
  setBaseUrl(e) {
    if (this.clientOptions.httpOptions)
      this.clientOptions.httpOptions.baseUrl = e;
    else
      throw new Error("HTTP options are not correctly set.");
  }
  constructUrl(e, n, i) {
    const o = [this.getRequestUrlInternal(n)];
    return i && o.push(this.getBaseResourcePath()), e !== "" && o.push(e), new URL(`${o.join("/")}`);
  }
  shouldPrependVertexProjectPath(e) {
    return !(this.clientOptions.apiKey || !this.clientOptions.vertexai || e.path.startsWith("projects/") || e.httpMethod === "GET" && e.path.startsWith("publishers/google/models"));
  }
  async request(e) {
    let n = this.clientOptions.httpOptions;
    e.httpOptions && (n = this.patchHttpOptions(this.clientOptions.httpOptions, e.httpOptions));
    const i = this.shouldPrependVertexProjectPath(e), o = this.constructUrl(e.path, n, i);
    if (e.queryParams)
      for (const [l, u] of Object.entries(e.queryParams))
        o.searchParams.append(l, String(u));
    let r = {};
    if (e.httpMethod === "GET") {
      if (e.body && e.body !== "{}")
        throw new Error("Request body should be empty for GET request, but got non empty request body");
    } else
      r.body = e.body;
    return r = await this.includeExtraHttpOptionsToRequestInit(r, n, o.toString(), e.abortSignal), this.unaryApiCall(o, r, e.httpMethod);
  }
  patchHttpOptions(e, n) {
    const i = JSON.parse(JSON.stringify(e));
    for (const [o, r] of Object.entries(n))
      typeof r == "object" ? i[o] = Object.assign(Object.assign({}, i[o]), r) : r !== void 0 && (i[o] = r);
    return i;
  }
  async requestStream(e) {
    let n = this.clientOptions.httpOptions;
    e.httpOptions && (n = this.patchHttpOptions(this.clientOptions.httpOptions, e.httpOptions));
    const i = this.shouldPrependVertexProjectPath(e), o = this.constructUrl(e.path, n, i);
    (!o.searchParams.has("alt") || o.searchParams.get("alt") !== "sse") && o.searchParams.set("alt", "sse");
    let r = {};
    return r.body = e.body, r = await this.includeExtraHttpOptionsToRequestInit(r, n, o.toString(), e.abortSignal), this.streamApiCall(o, r, e.httpMethod);
  }
  async includeExtraHttpOptionsToRequestInit(e, n, i, o) {
    if (n && n.timeout || o) {
      const r = new AbortController(), l = r.signal;
      if (n.timeout && (n == null ? void 0 : n.timeout) > 0) {
        const u = setTimeout(() => r.abort(), n.timeout);
        u && typeof u.unref == "function" && u.unref();
      }
      o && o.addEventListener("abort", () => {
        r.abort();
      }), e.signal = l;
    }
    return n && n.extraBody !== null && jf(e, n.extraBody), e.headers = await this.getHeadersInternal(n, i), e;
  }
  async unaryApiCall(e, n, i) {
    return this.apiCall(e.toString(), Object.assign(Object.assign({}, n), { method: i })).then(async (o) => (await Vr(o), new Qt(o))).catch((o) => {
      throw o instanceof Error ? o : new Error(JSON.stringify(o));
    });
  }
  async streamApiCall(e, n, i) {
    return this.apiCall(e.toString(), Object.assign(Object.assign({}, n), { method: i })).then(async (o) => (await Vr(o), this.processStreamResponse(o))).catch((o) => {
      throw o instanceof Error ? o : new Error(JSON.stringify(o));
    });
  }
  processStreamResponse(e) {
    var n;
    return gt(this, arguments, function* () {
      const o = (n = e == null ? void 0 : e.body) === null || n === void 0 ? void 0 : n.getReader(), r = new TextDecoder("utf-8");
      if (!o)
        throw new Error("Response body is empty");
      try {
        let l = "";
        for (; ; ) {
          const { done: u, value: d } = yield de(o.read());
          if (u) {
            if (l.trim().length > 0)
              throw new Error("Incomplete JSON segment at the end");
            break;
          }
          const c = r.decode(d, { stream: !0 });
          try {
            const h = JSON.parse(c);
            if ("error" in h) {
              const p = JSON.parse(JSON.stringify(h.error)), m = p.status, v = p.code, y = `got status: ${m}. ${JSON.stringify(h)}`;
              if (v >= 400 && v < 600)
                throw new yn({
                  message: y,
                  status: v
                });
            }
          } catch (h) {
            if (h.name === "ApiError")
              throw h;
          }
          l += c;
          let f = l.match(Br);
          for (; f; ) {
            const h = f[1];
            try {
              const p = new Response(h, {
                headers: e == null ? void 0 : e.headers,
                status: e == null ? void 0 : e.status,
                statusText: e == null ? void 0 : e.statusText
              });
              yield yield de(new Qt(p)), l = l.slice(f[0].length), f = l.match(Br);
            } catch (p) {
              throw new Error(`exception parsing stream chunk ${h}. ${p}`);
            }
          }
        }
      } finally {
        o.releaseLock();
      }
    });
  }
  async apiCall(e, n) {
    return fetch(e, n).catch((i) => {
      throw new Error(`exception ${i} sending request`);
    });
  }
  getDefaultHeaders() {
    const e = {}, n = zf + " " + this.clientOptions.userAgentExtra;
    return e[Wf] = n, e[ei] = n, e[Jf] = "application/json", e;
  }
  async getHeadersInternal(e, n) {
    const i = new Headers();
    if (e && e.headers) {
      for (const [o, r] of Object.entries(e.headers))
        i.append(o, r);
      e.timeout && e.timeout > 0 && i.append(Kf, String(Math.ceil(e.timeout / 1e3)));
    }
    return await this.clientOptions.auth.addAuthHeaders(i, n), i;
  }
  /**
   * Uploads a file asynchronously using Gemini API only, this is not supported
   * in Vertex AI.
   *
   * @param file The string path to the file to be uploaded or a Blob object.
   * @param config Optional parameters specified in the `UploadFileConfig`
   *     interface. @see {@link types.UploadFileConfig}
   * @return A promise that resolves to a `File` object.
   * @throws An error if called on a Vertex AI client.
   * @throws An error if the `mimeType` is not provided and can not be inferred,
   */
  async uploadFile(e, n) {
    var i, o;
    const r = {};
    n != null && (r.mimeType = n.mimeType, r.name = n.name, r.displayName = n.displayName), r.name && !r.name.startsWith("files/") && (r.name = `files/${r.name}`);
    const l = this.clientOptions.uploader, u = await l.stat(e);
    r.sizeBytes = String(u.size);
    const d = (i = n == null ? void 0 : n.mimeType) !== null && i !== void 0 ? i : u.type;
    if (d === void 0 || d === "")
      throw new Error("Can not determine mimeType. Please provide mimeType in the config.");
    r.mimeType = d;
    let c = "";
    typeof e == "string" && (c = e.replace(/[/\\]+$/, ""), c = (o = c.split(/[/\\]/).pop()) !== null && o !== void 0 ? o : "");
    const f = await this.fetchUploadUrl(r, c, n);
    return l.upload(e, f, this);
  }
  /**
   * Downloads a file asynchronously to the specified path.
   *
   * @params params - The parameters for the download request, see {@link
   * types.DownloadFileParameters}
   */
  async downloadFile(e) {
    await this.clientOptions.downloader.download(e, this);
  }
  async fetchUploadUrl(e, n, i) {
    var o;
    let r = {};
    i != null && i.httpOptions ? r = i.httpOptions : r = {
      apiVersion: "",
      headers: Object.assign({ "Content-Type": "application/json", "X-Goog-Upload-Protocol": "resumable", "X-Goog-Upload-Command": "start", "X-Goog-Upload-Header-Content-Length": `${e.sizeBytes}`, "X-Goog-Upload-Header-Content-Type": `${e.mimeType}` }, n ? { "X-Goog-Upload-File-Name": n } : {})
    };
    const l = {
      file: e
    }, u = await this.request({
      path: X("upload/v1beta/files", l._url),
      body: JSON.stringify(l),
      httpMethod: "POST",
      httpOptions: r
    });
    if (!u || !(u != null && u.headers))
      throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");
    const d = (o = u == null ? void 0 : u.headers) === null || o === void 0 ? void 0 : o["x-goog-upload-url"];
    if (d === void 0)
      throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");
    return d;
  }
}
async function Vr(t) {
  var e;
  if (t === void 0)
    throw new Error("response is undefined");
  if (!t.ok) {
    const n = t.status;
    let i;
    !((e = t.headers.get("content-type")) === null || e === void 0) && e.includes("application/json") ? i = await t.json() : i = {
      error: {
        message: await t.text(),
        code: t.status,
        status: t.statusText
      }
    };
    const o = JSON.stringify(i);
    throw n >= 400 && n < 600 ? new yn({
      message: o,
      status: n
    }) : new Error(o);
  }
}
function jf(t, e) {
  if (!e || Object.keys(e).length === 0)
    return;
  if (t.body instanceof Blob) {
    console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");
    return;
  }
  let n = {};
  if (typeof t.body == "string" && t.body.length > 0)
    try {
      const r = JSON.parse(t.body);
      if (typeof r == "object" && r !== null && !Array.isArray(r))
        n = r;
      else {
        console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");
        return;
      }
    } catch {
      console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");
      return;
    }
  function i(r, l) {
    const u = Object.assign({}, r);
    for (const d in l)
      if (Object.prototype.hasOwnProperty.call(l, d)) {
        const c = l[d], f = u[d];
        c && typeof c == "object" && !Array.isArray(c) && f && typeof f == "object" && !Array.isArray(f) ? u[d] = i(f, c) : (f && c && typeof f != typeof c && console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${d}". Original type: ${typeof f}, New type: ${typeof c}. Overwriting.`), u[d] = c);
      }
    return u;
  }
  const o = i(n, e);
  t.body = JSON.stringify(o);
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const eh = "mcp_used/unknown";
let th = !1;
function la(t) {
  for (const e of t)
    if (nh(e) || typeof e == "object" && "inputSchema" in e)
      return !0;
  return th;
}
function ua(t) {
  var e;
  const n = (e = t[ei]) !== null && e !== void 0 ? e : "";
  t[ei] = (n + ` ${eh}`).trimStart();
}
function nh(t) {
  return t !== null && typeof t == "object" && t instanceof fi;
}
function ih(t, e = 100) {
  return gt(this, arguments, function* () {
    let i, o = 0;
    for (; o < e; ) {
      const r = yield de(t.listTools({ cursor: i }));
      for (const l of r.tools)
        yield yield de(l), o++;
      if (!r.nextCursor)
        break;
      i = r.nextCursor;
    }
  });
}
class fi {
  constructor(e = [], n) {
    this.mcpTools = [], this.functionNameToMcpClient = {}, this.mcpClients = e, this.config = n;
  }
  /**
   * Creates a McpCallableTool.
   */
  static create(e, n) {
    return new fi(e, n);
  }
  /**
   * Validates the function names are not duplicate and initialize the function
   * name to MCP client mapping.
   *
   * @throws {Error} if the MCP tools from the MCP clients have duplicate tool
   *     names.
   */
  async initialize() {
    var e, n, i, o;
    if (this.mcpTools.length > 0)
      return;
    const r = {}, l = [];
    for (const f of this.mcpClients)
      try {
        for (var u = !0, d = (n = void 0, Xt(ih(f))), c; c = await d.next(), e = c.done, !e; u = !0) {
          o = c.value, u = !1;
          const h = o;
          l.push(h);
          const p = h.name;
          if (r[p])
            throw new Error(`Duplicate function name ${p} found in MCP tools. Please ensure function names are unique.`);
          r[p] = f;
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          !u && !e && (i = d.return) && await i.call(d);
        } finally {
          if (n) throw n.error;
        }
      }
    this.mcpTools = l, this.functionNameToMcpClient = r;
  }
  async tool() {
    return await this.initialize(), au(this.mcpTools, this.config);
  }
  async callTool(e) {
    await this.initialize();
    const n = [];
    for (const i of e)
      if (i.name in this.functionNameToMcpClient) {
        const o = this.functionNameToMcpClient[i.name];
        let r;
        this.config.timeout && (r = {
          timeout: this.config.timeout
        });
        const l = await o.callTool(
          {
            name: i.name,
            arguments: i.args
          },
          // Set the result schema to undefined to allow MCP to rely on the
          // default schema.
          void 0,
          r
        );
        n.push({
          functionResponse: {
            name: i.name,
            response: l.isError ? { error: l } : l
          }
        });
      }
    return n;
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
async function oh(t, e, n) {
  const i = new tu();
  let o;
  n.data instanceof Blob ? o = JSON.parse(await n.data.text()) : o = JSON.parse(n.data), Object.assign(i, o), e(i);
}
class rh {
  constructor(e, n, i) {
    this.apiClient = e, this.auth = n, this.webSocketFactory = i;
  }
  /**
       Establishes a connection to the specified model and returns a
       LiveMusicSession object representing that connection.
  
       @experimental
  
       @remarks
  
       @param params - The parameters for establishing a connection to the model.
       @return A live session.
  
       @example
       ```ts
       let model = 'models/lyria-realtime-exp';
       const session = await ai.live.music.connect({
         model: model,
         callbacks: {
           onmessage: (e: MessageEvent) => {
             console.log('Received message from the server: %s\n', debug(e.data));
           },
           onerror: (e: ErrorEvent) => {
             console.log('Error occurred: %s\n', debug(e.error));
           },
           onclose: (e: CloseEvent) => {
             console.log('Connection closed.');
           },
         },
       });
       ```
      */
  async connect(e) {
    var n, i;
    if (this.apiClient.isVertexAI())
      throw new Error("Live music is not supported for Vertex AI.");
    console.warn("Live music generation is experimental and may change in future versions.");
    const o = this.apiClient.getWebsocketBaseUrl(), r = this.apiClient.getApiVersion(), l = lh(this.apiClient.getDefaultHeaders()), u = this.apiClient.getApiKey(), d = `${o}/ws/google.ai.generativelanguage.${r}.GenerativeService.BidiGenerateMusic?key=${u}`;
    let c = () => {
    };
    const f = new Promise((k) => {
      c = k;
    }), h = e.callbacks, p = function() {
      c({});
    }, m = this.apiClient, v = {
      onopen: p,
      onmessage: (k) => {
        oh(m, h.onmessage, k);
      },
      onerror: (n = h == null ? void 0 : h.onerror) !== null && n !== void 0 ? n : function(k) {
      },
      onclose: (i = h == null ? void 0 : h.onclose) !== null && i !== void 0 ? i : function(k) {
      }
    }, y = this.webSocketFactory.create(d, ah(l), v);
    y.connect(), await f;
    const A = { setup: { model: ae(this.apiClient, e.model) } };
    return y.send(JSON.stringify(A)), new sh(y, this.apiClient);
  }
}
class sh {
  constructor(e, n) {
    this.conn = e, this.apiClient = n;
  }
  /**
      Sets inputs to steer music generation. Updates the session's current
      weighted prompts.
  
      @param params - Contains one property, `weightedPrompts`.
  
        - `weightedPrompts` to send to the model; weights are normalized to
          sum to 1.0.
  
      @experimental
     */
  async setWeightedPrompts(e) {
    if (!e.weightedPrompts || Object.keys(e.weightedPrompts).length === 0)
      throw new Error("Weighted prompts must be set and contain at least one entry.");
    const n = Xc(e);
    this.conn.send(JSON.stringify({ clientContent: n }));
  }
  /**
      Sets a configuration to the model. Updates the session's current
      music generation config.
  
      @param params - Contains one property, `musicGenerationConfig`.
  
        - `musicGenerationConfig` to set in the model. Passing an empty or
      undefined config to the model will reset the config to defaults.
  
      @experimental
     */
  async setMusicGenerationConfig(e) {
    e.musicGenerationConfig || (e.musicGenerationConfig = {});
    const n = zc(e);
    this.conn.send(JSON.stringify(n));
  }
  sendPlaybackControl(e) {
    const n = { playbackControl: e };
    this.conn.send(JSON.stringify(n));
  }
  /**
   * Start the music stream.
   *
   * @experimental
   */
  play() {
    this.sendPlaybackControl(ht.PLAY);
  }
  /**
   * Temporarily halt the music stream. Use `play` to resume from the current
   * position.
   *
   * @experimental
   */
  pause() {
    this.sendPlaybackControl(ht.PAUSE);
  }
  /**
   * Stop the music stream and reset the state. Retains the current prompts
   * and config.
   *
   * @experimental
   */
  stop() {
    this.sendPlaybackControl(ht.STOP);
  }
  /**
   * Resets the context of the music generation without stopping it.
   * Retains the current prompts and config.
   *
   * @experimental
   */
  resetContext() {
    this.sendPlaybackControl(ht.RESET_CONTEXT);
  }
  /**
       Terminates the WebSocket connection.
  
       @experimental
     */
  close() {
    this.conn.close();
  }
}
function ah(t) {
  const e = {};
  return t.forEach((n, i) => {
    e[i] = n;
  }), e;
}
function lh(t) {
  const e = new Headers();
  for (const [n, i] of Object.entries(t))
    e.append(n, i);
  return e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const uh = "FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";
async function ch(t, e, n) {
  const i = new eu();
  let o;
  n.data instanceof Blob ? o = await n.data.text() : n.data instanceof ArrayBuffer ? o = new TextDecoder().decode(n.data) : o = n.data;
  const r = JSON.parse(o);
  if (t.isVertexAI()) {
    const l = jc(r);
    Object.assign(i, l);
  } else
    Object.assign(i, r);
  e(i);
}
class dh {
  constructor(e, n, i) {
    this.apiClient = e, this.auth = n, this.webSocketFactory = i, this.music = new rh(this.apiClient, this.auth, this.webSocketFactory);
  }
  /**
       Establishes a connection to the specified model with the given
       configuration and returns a Session object representing that connection.
  
       @experimental Built-in MCP support is an experimental feature, may change in
       future versions.
  
       @remarks
  
       @param params - The parameters for establishing a connection to the model.
       @return A live session.
  
       @example
       ```ts
       let model: string;
       if (GOOGLE_GENAI_USE_VERTEXAI) {
         model = 'gemini-2.0-flash-live-preview-04-09';
       } else {
         model = 'gemini-live-2.5-flash-preview';
       }
       const session = await ai.live.connect({
         model: model,
         config: {
           responseModalities: [Modality.AUDIO],
         },
         callbacks: {
           onopen: () => {
             console.log('Connected to the socket.');
           },
           onmessage: (e: MessageEvent) => {
             console.log('Received message from the server: %s\n', debug(e.data));
           },
           onerror: (e: ErrorEvent) => {
             console.log('Error occurred: %s\n', debug(e.error));
           },
           onclose: (e: CloseEvent) => {
             console.log('Connection closed.');
           },
         },
       });
       ```
      */
  async connect(e) {
    var n, i, o, r, l, u;
    if (e.config && e.config.httpOptions)
      throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");
    const d = this.apiClient.getWebsocketBaseUrl(), c = this.apiClient.getApiVersion();
    let f;
    const h = this.apiClient.getHeaders();
    e.config && e.config.tools && la(e.config.tools) && ua(h);
    const p = gh(h);
    if (this.apiClient.isVertexAI())
      f = `${d}/ws/google.cloud.aiplatform.${c}.LlmBidiService/BidiGenerateContent`, await this.auth.addAuthHeaders(p, f);
    else {
      const g = this.apiClient.getApiKey();
      let E = "BidiGenerateContent", G = "key";
      g != null && g.startsWith("auth_tokens/") && (console.warn("Warning: Ephemeral token support is experimental and may change in future versions."), c !== "v1alpha" && console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."), E = "BidiGenerateContentConstrained", G = "access_token"), f = `${d}/ws/google.ai.generativelanguage.${c}.GenerativeService.${E}?${G}=${g}`;
    }
    let m = () => {
    };
    const v = new Promise((g) => {
      m = g;
    }), y = e.callbacks, _ = function() {
      var g;
      (g = y == null ? void 0 : y.onopen) === null || g === void 0 || g.call(y), m({});
    }, C = this.apiClient, A = {
      onopen: _,
      onmessage: (g) => {
        ch(C, y.onmessage, g);
      },
      onerror: (n = y == null ? void 0 : y.onerror) !== null && n !== void 0 ? n : function(g) {
      },
      onclose: (i = y == null ? void 0 : y.onclose) !== null && i !== void 0 ? i : function(g) {
      }
    }, k = this.webSocketFactory.create(f, ph(p), A);
    k.connect(), await v;
    let b = ae(this.apiClient, e.model);
    if (this.apiClient.isVertexAI() && b.startsWith("publishers/")) {
      const g = this.apiClient.getProject(), E = this.apiClient.getLocation();
      b = `projects/${g}/locations/${E}/` + b;
    }
    let N = {};
    this.apiClient.isVertexAI() && ((o = e.config) === null || o === void 0 ? void 0 : o.responseModalities) === void 0 && (e.config === void 0 ? e.config = { responseModalities: [fn.AUDIO] } : e.config.responseModalities = [fn.AUDIO]), !((r = e.config) === null || r === void 0) && r.generationConfig && console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");
    const M = (u = (l = e.config) === null || l === void 0 ? void 0 : l.tools) !== null && u !== void 0 ? u : [], w = [];
    for (const g of M)
      if (this.isCallableTool(g)) {
        const E = g;
        w.push(await E.tool());
      } else
        w.push(g);
    w.length > 0 && (e.config.tools = w);
    const D = {
      model: b,
      config: e.config,
      callbacks: e.callbacks
    };
    return this.apiClient.isVertexAI() ? N = Yc(this.apiClient, D) : N = Wc(this.apiClient, D), delete N.config, k.send(JSON.stringify(N)), new hh(k, this.apiClient);
  }
  // TODO: b/416041229 - Abstract this method to a common place.
  isCallableTool(e) {
    return "callTool" in e && typeof e.callTool == "function";
  }
}
const fh = {
  turnComplete: !0
};
class hh {
  constructor(e, n) {
    this.conn = e, this.apiClient = n;
  }
  tLiveClientContent(e, n) {
    if (n.turns !== null && n.turns !== void 0) {
      let i = [];
      try {
        i = Ie(n.turns), e.isVertexAI() || (i = i.map((o) => vn(o)));
      } catch {
        throw new Error(`Failed to parse client content "turns", type: '${typeof n.turns}'`);
      }
      return {
        clientContent: { turns: i, turnComplete: n.turnComplete }
      };
    }
    return {
      clientContent: { turnComplete: n.turnComplete }
    };
  }
  tLiveClienttToolResponse(e, n) {
    let i = [];
    if (n.functionResponses == null)
      throw new Error("functionResponses is required.");
    if (Array.isArray(n.functionResponses) ? i = n.functionResponses : i = [n.functionResponses], i.length === 0)
      throw new Error("functionResponses is required.");
    for (const r of i) {
      if (typeof r != "object" || r === null || !("name" in r) || !("response" in r))
        throw new Error(`Could not parse function response, type '${typeof r}'.`);
      if (!e.isVertexAI() && !("id" in r))
        throw new Error(uh);
    }
    return {
      toolResponse: { functionResponses: i }
    };
  }
  /**
      Send a message over the established connection.
  
      @param params - Contains two **optional** properties, `turns` and
          `turnComplete`.
  
        - `turns` will be converted to a `Content[]`
        - `turnComplete: true` [default] indicates that you are done sending
          content and expect a response. If `turnComplete: false`, the server
          will wait for additional messages before starting generation.
  
      @experimental
  
      @remarks
      There are two ways to send messages to the live API:
      `sendClientContent` and `sendRealtimeInput`.
  
      `sendClientContent` messages are added to the model context **in order**.
      Having a conversation using `sendClientContent` messages is roughly
      equivalent to using the `Chat.sendMessageStream`, except that the state of
      the `chat` history is stored on the API server instead of locally.
  
      Because of `sendClientContent`'s order guarantee, the model cannot respons
      as quickly to `sendClientContent` messages as to `sendRealtimeInput`
      messages. This makes the biggest difference when sending objects that have
      significant preprocessing time (typically images).
  
      The `sendClientContent` message sends a `Content[]`
      which has more options than the `Blob` sent by `sendRealtimeInput`.
  
      So the main use-cases for `sendClientContent` over `sendRealtimeInput` are:
  
      - Sending anything that can't be represented as a `Blob` (text,
      `sendClientContent({turns="Hello?"}`)).
      - Managing turns when not using audio input and voice activity detection.
        (`sendClientContent({turnComplete:true})` or the short form
      `sendClientContent()`)
      - Prefilling a conversation context
        ```
        sendClientContent({
            turns: [
              Content({role:user, parts:...}),
              Content({role:user, parts:...}),
              ...
            ]
        })
        ```
      @experimental
     */
  sendClientContent(e) {
    e = Object.assign(Object.assign({}, fh), e);
    const n = this.tLiveClientContent(this.apiClient, e);
    this.conn.send(JSON.stringify(n));
  }
  /**
      Send a realtime message over the established connection.
  
      @param params - Contains one property, `media`.
  
        - `media` will be converted to a `Blob`
  
      @experimental
  
      @remarks
      Use `sendRealtimeInput` for realtime audio chunks and video frames (images).
  
      With `sendRealtimeInput` the api will respond to audio automatically
      based on voice activity detection (VAD).
  
      `sendRealtimeInput` is optimized for responsivness at the expense of
      deterministic ordering guarantees. Audio and video tokens are to the
      context when they become available.
  
      Note: The Call signature expects a `Blob` object, but only a subset
      of audio and image mimetypes are allowed.
     */
  sendRealtimeInput(e) {
    let n = {};
    this.apiClient.isVertexAI() ? n = {
      realtimeInput: Zc(e)
    } : n = {
      realtimeInput: Qc(e)
    }, this.conn.send(JSON.stringify(n));
  }
  /**
      Send a function response message over the established connection.
  
      @param params - Contains property `functionResponses`.
  
        - `functionResponses` will be converted to a `functionResponses[]`
  
      @remarks
      Use `sendFunctionResponse` to reply to `LiveServerToolCall` from the server.
  
      Use {@link types.LiveConnectConfig#tools} to configure the callable functions.
  
      @experimental
     */
  sendToolResponse(e) {
    if (e.functionResponses == null)
      throw new Error("Tool response parameters are required.");
    const n = this.tLiveClienttToolResponse(this.apiClient, e);
    this.conn.send(JSON.stringify(n));
  }
  /**
       Terminates the WebSocket connection.
  
       @experimental
  
       @example
       ```ts
       let model: string;
       if (GOOGLE_GENAI_USE_VERTEXAI) {
         model = 'gemini-2.0-flash-live-preview-04-09';
       } else {
         model = 'gemini-live-2.5-flash-preview';
       }
       const session = await ai.live.connect({
         model: model,
         config: {
           responseModalities: [Modality.AUDIO],
         }
       });
  
       session.close();
       ```
     */
  close() {
    this.conn.close();
  }
}
function ph(t) {
  const e = {};
  return t.forEach((n, i) => {
    e[i] = n;
  }), e;
}
function gh(t) {
  const e = new Headers();
  for (const [n, i] of Object.entries(t))
    e.append(n, i);
  return e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Hr = 10;
function $r(t) {
  var e, n, i;
  if (!((e = t == null ? void 0 : t.automaticFunctionCalling) === null || e === void 0) && e.disable)
    return !0;
  let o = !1;
  for (const l of (n = t == null ? void 0 : t.tools) !== null && n !== void 0 ? n : [])
    if (mt(l)) {
      o = !0;
      break;
    }
  if (!o)
    return !0;
  const r = (i = t == null ? void 0 : t.automaticFunctionCalling) === null || i === void 0 ? void 0 : i.maximumRemoteCalls;
  return r && (r < 0 || !Number.isInteger(r)) || r == 0 ? (console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:", r), !0) : !1;
}
function mt(t) {
  return "callTool" in t && typeof t.callTool == "function";
}
function mh(t) {
  var e, n, i;
  return (i = (n = (e = t.config) === null || e === void 0 ? void 0 : e.tools) === null || n === void 0 ? void 0 : n.some((o) => mt(o))) !== null && i !== void 0 ? i : !1;
}
function yh(t) {
  var e, n, i;
  return (i = (n = (e = t.config) === null || e === void 0 ? void 0 : e.tools) === null || n === void 0 ? void 0 : n.some((o) => !mt(o))) !== null && i !== void 0 ? i : !1;
}
function Jr(t) {
  var e;
  return !(!((e = t == null ? void 0 : t.automaticFunctionCalling) === null || e === void 0) && e.ignoreCallHistory);
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class vh extends rt {
  constructor(e) {
    super(), this.apiClient = e, this.generateContent = async (n) => {
      var i, o, r, l, u;
      const d = await this.processParamsMaybeAddMcpUsage(n);
      if (this.maybeMoveToResponseJsonSchem(n), !mh(n) || $r(n.config))
        return await this.generateContentInternal(d);
      if (yh(n))
        throw new Error("Automatic function calling with CallableTools and Tools is not yet supported.");
      let c, f;
      const h = Ie(d.contents), p = (r = (o = (i = d.config) === null || i === void 0 ? void 0 : i.automaticFunctionCalling) === null || o === void 0 ? void 0 : o.maximumRemoteCalls) !== null && r !== void 0 ? r : Hr;
      let m = 0;
      for (; m < p && (c = await this.generateContentInternal(d), !(!c.functionCalls || c.functionCalls.length === 0)); ) {
        const v = c.candidates[0].content, y = [];
        for (const _ of (u = (l = n.config) === null || l === void 0 ? void 0 : l.tools) !== null && u !== void 0 ? u : [])
          if (mt(_)) {
            const A = await _.callTool(c.functionCalls);
            y.push(...A);
          }
        m++, f = {
          role: "user",
          parts: y
        }, d.contents = Ie(d.contents), d.contents.push(v), d.contents.push(f), Jr(d.config) && (h.push(v), h.push(f));
      }
      return Jr(d.config) && (c.automaticFunctionCallingHistory = h), c;
    }, this.generateContentStream = async (n) => {
      if (this.maybeMoveToResponseJsonSchem(n), $r(n.config)) {
        const i = await this.processParamsMaybeAddMcpUsage(n);
        return await this.generateContentStreamInternal(i);
      } else
        return await this.processAfcStream(n);
    }, this.generateImages = async (n) => await this.generateImagesInternal(n).then((i) => {
      var o;
      let r;
      const l = [];
      if (i != null && i.generatedImages)
        for (const d of i.generatedImages)
          d && (d != null && d.safetyAttributes) && ((o = d == null ? void 0 : d.safetyAttributes) === null || o === void 0 ? void 0 : o.contentType) === "Positive Prompt" ? r = d == null ? void 0 : d.safetyAttributes : l.push(d);
      let u;
      return r ? u = {
        generatedImages: l,
        positivePromptSafetyAttributes: r,
        sdkHttpResponse: i.sdkHttpResponse
      } : u = {
        generatedImages: l,
        sdkHttpResponse: i.sdkHttpResponse
      }, u;
    }), this.list = async (n) => {
      var i;
      const l = {
        config: Object.assign(Object.assign({}, {
          queryBase: !0
        }), n == null ? void 0 : n.config)
      };
      if (this.apiClient.isVertexAI() && !l.config.queryBase) {
        if (!((i = l.config) === null || i === void 0) && i.filter)
          throw new Error("Filtering tuned models list for Vertex AI is not currently supported");
        l.config.filter = "labels.tune-type:*";
      }
      return new jt(tt.PAGED_ITEM_MODELS, (u) => this.listInternal(u), await this.listInternal(l), l);
    }, this.editImage = async (n) => {
      const i = {
        model: n.model,
        prompt: n.prompt,
        referenceImages: [],
        config: n.config
      };
      return n.referenceImages && n.referenceImages && (i.referenceImages = n.referenceImages.map((o) => o.toReferenceImageAPI())), await this.editImageInternal(i);
    }, this.upscaleImage = async (n) => {
      let i = {
        numberOfImages: 1,
        mode: "upscale"
      };
      n.config && (i = Object.assign(Object.assign({}, i), n.config));
      const o = {
        model: n.model,
        image: n.image,
        upscaleFactor: n.upscaleFactor,
        config: i
      };
      return await this.upscaleImageInternal(o);
    }, this.generateVideos = async (n) => {
      var i, o, r, l, u, d;
      if ((n.prompt || n.image || n.video) && n.source)
        throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");
      return this.apiClient.isVertexAI() || (!((i = n.video) === null || i === void 0) && i.uri && (!((o = n.video) === null || o === void 0) && o.videoBytes) ? n.video = {
        uri: n.video.uri,
        mimeType: n.video.mimeType
      } : !((l = (r = n.source) === null || r === void 0 ? void 0 : r.video) === null || l === void 0) && l.uri && (!((d = (u = n.source) === null || u === void 0 ? void 0 : u.video) === null || d === void 0) && d.videoBytes) && (n.source.video = {
        uri: n.source.video.uri,
        mimeType: n.source.video.mimeType
      })), await this.generateVideosInternal(n);
    };
  }
  /**
   * This logic is needed for GenerateContentConfig only.
   * Previously we made GenerateContentConfig.responseSchema field to accept
   * unknown. Since v1.9.0, we switch to use backend JSON schema support.
   * To maintain backward compatibility, we move the data that was treated as
   * JSON schema from the responseSchema field to the responseJsonSchema field.
   */
  maybeMoveToResponseJsonSchem(e) {
    e.config && e.config.responseSchema && (e.config.responseJsonSchema || Object.keys(e.config.responseSchema).includes("$schema") && (e.config.responseJsonSchema = e.config.responseSchema, delete e.config.responseSchema));
  }
  /**
   * Transforms the CallableTools in the parameters to be simply Tools, it
   * copies the params into a new object and replaces the tools, it does not
   * modify the original params. Also sets the MCP usage header if there are
   * MCP tools in the parameters.
   */
  async processParamsMaybeAddMcpUsage(e) {
    var n, i, o;
    const r = (n = e.config) === null || n === void 0 ? void 0 : n.tools;
    if (!r)
      return e;
    const l = await Promise.all(r.map(async (d) => mt(d) ? await d.tool() : d)), u = {
      model: e.model,
      contents: e.contents,
      config: Object.assign(Object.assign({}, e.config), { tools: l })
    };
    if (u.config.tools = l, e.config && e.config.tools && la(e.config.tools)) {
      const d = (o = (i = e.config.httpOptions) === null || i === void 0 ? void 0 : i.headers) !== null && o !== void 0 ? o : {};
      let c = Object.assign({}, d);
      Object.keys(c).length === 0 && (c = this.apiClient.getDefaultHeaders()), ua(c), u.config.httpOptions = Object.assign(Object.assign({}, e.config.httpOptions), { headers: c });
    }
    return u;
  }
  async initAfcToolsMap(e) {
    var n, i, o;
    const r = /* @__PURE__ */ new Map();
    for (const l of (i = (n = e.config) === null || n === void 0 ? void 0 : n.tools) !== null && i !== void 0 ? i : [])
      if (mt(l)) {
        const u = l, d = await u.tool();
        for (const c of (o = d.functionDeclarations) !== null && o !== void 0 ? o : []) {
          if (!c.name)
            throw new Error("Function declaration name is required.");
          if (r.has(c.name))
            throw new Error(`Duplicate tool declaration name: ${c.name}`);
          r.set(c.name, u);
        }
      }
    return r;
  }
  async processAfcStream(e) {
    var n, i, o;
    const r = (o = (i = (n = e.config) === null || n === void 0 ? void 0 : n.automaticFunctionCalling) === null || i === void 0 ? void 0 : i.maximumRemoteCalls) !== null && o !== void 0 ? o : Hr;
    let l = !1, u = 0;
    const d = await this.initAfcToolsMap(e);
    return (function(c, f, h) {
      var p, m;
      return gt(this, arguments, function* () {
        for (var v, y, _, C; u < r; ) {
          l && (u++, l = !1);
          const N = yield de(c.processParamsMaybeAddMcpUsage(h)), M = yield de(c.generateContentStreamInternal(N)), w = [], D = [];
          try {
            for (var A = !0, k = (y = void 0, Xt(M)), b; b = yield de(k.next()), v = b.done, !v; A = !0) {
              C = b.value, A = !1;
              const g = C;
              if (yield yield de(g), g.candidates && (!((p = g.candidates[0]) === null || p === void 0) && p.content)) {
                D.push(g.candidates[0].content);
                for (const E of (m = g.candidates[0].content.parts) !== null && m !== void 0 ? m : [])
                  if (u < r && E.functionCall) {
                    if (!E.functionCall.name)
                      throw new Error("Function call name was not returned by the model.");
                    if (f.has(E.functionCall.name)) {
                      const G = yield de(f.get(E.functionCall.name).callTool([E.functionCall]));
                      w.push(...G);
                    } else
                      throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${f.keys()}, mising tool: ${E.functionCall.name}`);
                  }
              }
            }
          } catch (g) {
            y = { error: g };
          } finally {
            try {
              !A && !v && (_ = k.return) && (yield de(_.call(k)));
            } finally {
              if (y) throw y.error;
            }
          }
          if (w.length > 0) {
            l = !0;
            const g = new Yt();
            g.candidates = [
              {
                content: {
                  role: "user",
                  parts: w
                }
              }
            ], yield yield de(g);
            const E = [];
            E.push(...D), E.push({
              role: "user",
              parts: w
            });
            const G = Ie(h.contents).concat(E);
            h.contents = G;
          } else
            break;
        }
      });
    })(this, d, e);
  }
  async generateContentInternal(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = Gr(this.apiClient, e);
      return u = X("{model}:generateContent", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = qr(f), p = new Yt();
        return Object.assign(p, h), p;
      });
    } else {
      const c = Fr(this.apiClient, e);
      return u = X("{model}:generateContent", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = Or(f), p = new Yt();
        return Object.assign(p, h), p;
      });
    }
  }
  async generateContentStreamInternal(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = Gr(this.apiClient, e);
      return u = X("{model}:streamGenerateContent?alt=sse", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.requestStream({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }), l.then(function(h) {
        return gt(this, arguments, function* () {
          var p, m, v, y;
          try {
            for (var _ = !0, C = Xt(h), A; A = yield de(C.next()), p = A.done, !p; _ = !0) {
              y = A.value, _ = !1;
              const k = y, b = qr(yield de(k.json()));
              b.sdkHttpResponse = {
                headers: k.headers
              };
              const N = new Yt();
              Object.assign(N, b), yield yield de(N);
            }
          } catch (k) {
            m = { error: k };
          } finally {
            try {
              !_ && !p && (v = C.return) && (yield de(v.call(C)));
            } finally {
              if (m) throw m.error;
            }
          }
        });
      });
    } else {
      const c = Fr(this.apiClient, e);
      return u = X("{model}:streamGenerateContent?alt=sse", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.requestStream({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }), l.then(function(h) {
        return gt(this, arguments, function* () {
          var p, m, v, y;
          try {
            for (var _ = !0, C = Xt(h), A; A = yield de(C.next()), p = A.done, !p; _ = !0) {
              y = A.value, _ = !1;
              const k = y, b = Or(yield de(k.json()));
              b.sdkHttpResponse = {
                headers: k.headers
              };
              const N = new Yt();
              Object.assign(N, b), yield yield de(N);
            }
          } catch (k) {
            m = { error: k };
          } finally {
            try {
              !_ && !p && (v = C.return) && (yield de(v.call(C)));
            } finally {
              if (m) throw m.error;
            }
          }
        });
      });
    }
  }
  /**
   * Calculates embeddings for the given contents. Only text is supported.
   *
   * @param params - The parameters for embedding contents.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response = await ai.models.embedContent({
   *  model: 'text-embedding-004',
   *  contents: [
   *    'What is your name?',
   *    'What is your favorite color?',
   *  ],
   *  config: {
   *    outputDimensionality: 64,
   *  },
   * });
   * console.log(response);
   * ```
   */
  async embedContent(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = Nd(this.apiClient, e);
      return u = X("{model}:predict", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = Md(f), p = new Tr();
        return Object.assign(p, h), p;
      });
    } else {
      const c = Pd(this.apiClient, e);
      return u = X("{model}:batchEmbedContents", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = kd(f), p = new Tr();
        return Object.assign(p, h), p;
      });
    }
  }
  /**
   * Private method for generating images.
   */
  async generateImagesInternal(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = qd(this.apiClient, e);
      return u = X("{model}:predict", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = Vd(f), p = new Cr();
        return Object.assign(p, h), p;
      });
    } else {
      const c = Od(this.apiClient, e);
      return u = X("{model}:predict", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = Bd(f), p = new Cr();
        return Object.assign(p, h), p;
      });
    }
  }
  /**
   * Private method for editing an image.
   */
  async editImageInternal(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI()) {
      const u = Sd(this.apiClient, e);
      return r = X("{model}:predict", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json().then((c) => {
        const f = c;
        return f.sdkHttpResponse = {
          headers: d.headers
        }, f;
      })), o.then((d) => {
        const c = wd(d), f = new Kl();
        return Object.assign(f, c), f;
      });
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
  /**
   * Private method for upscaling an image.
   */
  async upscaleImageInternal(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI()) {
      const u = Gf(this.apiClient, e);
      return r = X("{model}:predict", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json().then((c) => {
        const f = c;
        return f.sdkHttpResponse = {
          headers: d.headers
        }, f;
      })), o.then((d) => {
        const c = Of(d), f = new Wl();
        return Object.assign(f, c), f;
      });
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
  /**
   * Recontextualizes an image.
   *
   * There are two types of recontextualization currently supported:
   * 1) Imagen Product Recontext - Generate images of products in new scenes
   *    and contexts.
   * 2) Virtual Try-On: Generate images of persons modeling fashion products.
   *
   * @param params - The parameters for recontextualizing an image.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response1 = await ai.models.recontextImage({
   *  model: 'imagen-product-recontext-preview-06-30',
   *  source: {
   *    prompt: 'In a modern kitchen setting.',
   *    productImages: [productImage],
   *  },
   *  config: {
   *    numberOfImages: 1,
   *  },
   * });
   * console.log(response1?.generatedImages?.[0]?.image?.imageBytes);
   *
   * const response2 = await ai.models.recontextImage({
   *  model: 'virtual-try-on-preview-08-04',
   *  source: {
   *    personImage: personImage,
   *    productImages: [productImage],
   *  },
   *  config: {
   *    numberOfImages: 1,
   *  },
   * });
   * console.log(response2?.generatedImages?.[0]?.image?.imageBytes);
   * ```
   */
  async recontextImage(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI()) {
      const u = Ef(this.apiClient, e);
      return r = X("{model}:predict", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json()), o.then((d) => {
        const c = Tf(d), f = new Yl();
        return Object.assign(f, c), f;
      });
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
  /**
   * Segments an image, creating a mask of a specified area.
   *
   * @param params - The parameters for segmenting an image.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response = await ai.models.segmentImage({
   *  model: 'image-segmentation-001',
   *  source: {
   *    image: image,
   *  },
   *  config: {
   *    mode: 'foreground',
   *  },
   * });
   * console.log(response?.generatedMasks?.[0]?.mask?.imageBytes);
   * ```
   */
  async segmentImage(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI()) {
      const u = Rf(this.apiClient, e);
      return r = X("{model}:predict", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json()), o.then((d) => {
        const c = Pf(d), f = new zl();
        return Object.assign(f, c), f;
      });
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
  /**
   * Fetches information about a model by name.
   *
   * @example
   * ```ts
   * const modelInfo = await ai.models.get({model: 'gemini-2.0-flash'});
   * ```
   */
  async get(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = sf(this.apiClient, e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json()), l.then((f) => jn(f));
    } else {
      const c = rf(this.apiClient, e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json()), l.then((f) => Zn(f));
    }
  }
  async listInternal(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = hf(this.apiClient, e);
      return u = X("{models_url}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = gf(f), p = new Ar();
        return Object.assign(p, h), p;
      });
    } else {
      const c = ff(this.apiClient, e);
      return u = X("{models_url}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = pf(f), p = new Ar();
        return Object.assign(p, h), p;
      });
    }
  }
  /**
   * Updates a tuned model by its name.
   *
   * @param params - The parameters for updating the model.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response = await ai.models.update({
   *   model: 'tuned-model-name',
   *   config: {
   *     displayName: 'New display name',
   *     description: 'New description',
   *   },
   * });
   * ```
   */
  async update(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = bf(this.apiClient, e);
      return u = X("{model}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "PATCH",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json()), l.then((f) => jn(f));
    } else {
      const c = Lf(this.apiClient, e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "PATCH",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json()), l.then((f) => Zn(f));
    }
  }
  /**
   * Deletes a tuned model by its name.
   *
   * @param params - The parameters for deleting the model.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response = await ai.models.delete({model: 'tuned-model-name'});
   * ```
   */
  async delete(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = Ed(this.apiClient, e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "DELETE",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = Cd(f), p = new Sr();
        return Object.assign(p, h), p;
      });
    } else {
      const c = _d(this.apiClient, e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "DELETE",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = Td(f), p = new Sr();
        return Object.assign(p, h), p;
      });
    }
  }
  /**
   * Counts the number of tokens in the given contents. Multimodal input is
   * supported for Gemini models.
   *
   * @param params - The parameters for counting tokens.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response = await ai.models.countTokens({
   *  model: 'gemini-2.0-flash',
   *  contents: 'The quick brown fox jumps over the lazy dog.'
   * });
   * console.log(response);
   * ```
   */
  async countTokens(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = md(this.apiClient, e);
      return u = X("{model}:countTokens", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = vd(f), p = new wr();
        return Object.assign(p, h), p;
      });
    } else {
      const c = gd(this.apiClient, e);
      return u = X("{model}:countTokens", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = yd(f), p = new wr();
        return Object.assign(p, h), p;
      });
    }
  }
  /**
   * Given a list of contents, returns a corresponding TokensInfo containing
   * the list of tokens and list of token ids.
   *
   * This method is not supported by the Gemini Developer API.
   *
   * @param params - The parameters for computing tokens.
   * @return The response from the API.
   *
   * @example
   * ```ts
   * const response = await ai.models.computeTokens({
   *  model: 'gemini-2.0-flash',
   *  contents: 'What is your name?'
   * });
   * console.log(response);
   * ```
   */
  async computeTokens(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI()) {
      const u = ld(this.apiClient, e);
      return r = X("{model}:computeTokens", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json().then((c) => {
        const f = c;
        return f.sdkHttpResponse = {
          headers: d.headers
        }, f;
      })), o.then((d) => {
        const c = ud(d), f = new Xl();
        return Object.assign(f, c), f;
      });
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
  /**
   * Private method for generating videos.
   */
  async generateVideosInternal(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = Yd(this.apiClient, e);
      return u = X("{model}:predictLongRunning", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json()), l.then((f) => {
        const h = Kd(f), p = new hn();
        return Object.assign(p, h), p;
      });
    } else {
      const c = Wd(this.apiClient, e);
      return u = X("{model}:predictLongRunning", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "POST",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json()), l.then((f) => {
        const h = Jd(f), p = new hn();
        return Object.assign(p, h), p;
      });
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class _h extends rt {
  constructor(e) {
    super(), this.apiClient = e;
  }
  /**
   * Gets the status of a long-running operation.
   *
   * @param parameters The parameters for the get operation request.
   * @return The updated Operation object, with the latest status or result.
   */
  async getVideosOperation(e) {
    const n = e.operation, i = e.config;
    if (n.name === void 0 || n.name === "")
      throw new Error("Operation name is required.");
    if (this.apiClient.isVertexAI()) {
      const o = n.name.split("/operations/")[0];
      let r;
      i && "httpOptions" in i && (r = i.httpOptions);
      const l = await this.fetchPredictVideosOperationInternal({
        operationName: n.name,
        resourceName: o,
        config: { httpOptions: r }
      });
      return n._fromAPIResponse({
        apiResponse: l,
        isVertexAI: !0
      });
    } else {
      const o = await this.getVideosOperationInternal({
        operationName: n.name,
        config: i
      });
      return n._fromAPIResponse({
        apiResponse: o,
        isVertexAI: !1
      });
    }
  }
  /**
   * Gets the status of a long-running operation.
   *
   * @param parameters The parameters for the get operation request.
   * @return The updated Operation object, with the latest status or result.
   */
  async get(e) {
    const n = e.operation, i = e.config;
    if (n.name === void 0 || n.name === "")
      throw new Error("Operation name is required.");
    if (this.apiClient.isVertexAI()) {
      const o = n.name.split("/operations/")[0];
      let r;
      i && "httpOptions" in i && (r = i.httpOptions);
      const l = await this.fetchPredictVideosOperationInternal({
        operationName: n.name,
        resourceName: o,
        config: { httpOptions: r }
      });
      return n._fromAPIResponse({
        apiResponse: l,
        isVertexAI: !0
      });
    } else {
      const o = await this.getVideosOperationInternal({
        operationName: n.name,
        config: i
      });
      return n._fromAPIResponse({
        apiResponse: o,
        isVertexAI: !1
      });
    }
  }
  async getVideosOperationInternal(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = Hl(e);
      return u = X("{operationName}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json()), l;
    } else {
      const c = Vl(e);
      return u = X("{operationName}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json()), l;
    }
  }
  async fetchPredictVideosOperationInternal(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI()) {
      const u = Ll(e);
      return r = X("{resourceName}:fetchPredictOperation", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json()), o;
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Eh(t) {
  const e = {}, n = s(t, ["data"]);
  if (n != null && a(e, ["data"], n), s(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const i = s(t, ["mimeType"]);
  return i != null && a(e, ["mimeType"], i), e;
}
function Th(t) {
  const e = {}, n = s(t, ["parts"]);
  if (n != null) {
    let o = n;
    Array.isArray(o) && (o = o.map((r) => Nh(r))), a(e, ["parts"], o);
  }
  const i = s(t, ["role"]);
  return i != null && a(e, ["role"], i), e;
}
function Ch(t, e, n) {
  const i = {}, o = s(e, ["expireTime"]);
  n !== void 0 && o != null && a(n, ["expireTime"], o);
  const r = s(e, [
    "newSessionExpireTime"
  ]);
  n !== void 0 && r != null && a(n, ["newSessionExpireTime"], r);
  const l = s(e, ["uses"]);
  n !== void 0 && l != null && a(n, ["uses"], l);
  const u = s(e, [
    "liveConnectConstraints"
  ]);
  n !== void 0 && u != null && a(n, ["bidiGenerateContentSetup"], Ph(t, u));
  const d = s(e, [
    "lockAdditionalFields"
  ]);
  return n !== void 0 && d != null && a(n, ["fieldMask"], d), i;
}
function Ah(t, e) {
  const n = {}, i = s(e, ["config"]);
  return i != null && a(n, ["config"], Ch(t, i, n)), n;
}
function Sh(t) {
  const e = {};
  if (s(t, ["displayName"]) !== void 0)
    throw new Error("displayName parameter is not supported in Gemini API.");
  const n = s(t, ["fileUri"]);
  n != null && a(e, ["fileUri"], n);
  const i = s(t, ["mimeType"]);
  return i != null && a(e, ["mimeType"], i), e;
}
function wh(t) {
  const e = {};
  if (s(t, ["authConfig"]) !== void 0)
    throw new Error("authConfig parameter is not supported in Gemini API.");
  const n = s(t, ["enableWidget"]);
  return n != null && a(e, ["enableWidget"], n), e;
}
function Ih(t) {
  const e = {};
  if (s(t, ["excludeDomains"]) !== void 0)
    throw new Error("excludeDomains parameter is not supported in Gemini API.");
  const n = s(t, [
    "timeRangeFilter"
  ]);
  return n != null && a(e, ["timeRangeFilter"], n), e;
}
function Rh(t, e) {
  const n = {}, i = s(t, [
    "generationConfig"
  ]);
  e !== void 0 && i != null && a(e, ["setup", "generationConfig"], i);
  const o = s(t, [
    "responseModalities"
  ]);
  e !== void 0 && o != null && a(e, ["setup", "generationConfig", "responseModalities"], o);
  const r = s(t, ["temperature"]);
  e !== void 0 && r != null && a(e, ["setup", "generationConfig", "temperature"], r);
  const l = s(t, ["topP"]);
  e !== void 0 && l != null && a(e, ["setup", "generationConfig", "topP"], l);
  const u = s(t, ["topK"]);
  e !== void 0 && u != null && a(e, ["setup", "generationConfig", "topK"], u);
  const d = s(t, [
    "maxOutputTokens"
  ]);
  e !== void 0 && d != null && a(e, ["setup", "generationConfig", "maxOutputTokens"], d);
  const c = s(t, [
    "mediaResolution"
  ]);
  e !== void 0 && c != null && a(e, ["setup", "generationConfig", "mediaResolution"], c);
  const f = s(t, ["seed"]);
  e !== void 0 && f != null && a(e, ["setup", "generationConfig", "seed"], f);
  const h = s(t, ["speechConfig"]);
  e !== void 0 && h != null && a(e, ["setup", "generationConfig", "speechConfig"], ci(h));
  const p = s(t, [
    "thinkingConfig"
  ]);
  e !== void 0 && p != null && a(e, ["setup", "generationConfig", "thinkingConfig"], p);
  const m = s(t, [
    "enableAffectiveDialog"
  ]);
  e !== void 0 && m != null && a(e, ["setup", "generationConfig", "enableAffectiveDialog"], m);
  const v = s(t, [
    "systemInstruction"
  ]);
  e !== void 0 && v != null && a(e, ["setup", "systemInstruction"], Th(_e(v)));
  const y = s(t, ["tools"]);
  if (e !== void 0 && y != null) {
    let M = Et(y);
    Array.isArray(M) && (M = M.map((w) => Mh(_t(w)))), a(e, ["setup", "tools"], M);
  }
  const _ = s(t, [
    "sessionResumption"
  ]);
  e !== void 0 && _ != null && a(e, ["setup", "sessionResumption"], kh(_));
  const C = s(t, [
    "inputAudioTranscription"
  ]);
  e !== void 0 && C != null && a(e, ["setup", "inputAudioTranscription"], C);
  const A = s(t, [
    "outputAudioTranscription"
  ]);
  e !== void 0 && A != null && a(e, ["setup", "outputAudioTranscription"], A);
  const k = s(t, [
    "realtimeInputConfig"
  ]);
  e !== void 0 && k != null && a(e, ["setup", "realtimeInputConfig"], k);
  const b = s(t, [
    "contextWindowCompression"
  ]);
  e !== void 0 && b != null && a(e, ["setup", "contextWindowCompression"], b);
  const N = s(t, ["proactivity"]);
  return e !== void 0 && N != null && a(e, ["setup", "proactivity"], N), n;
}
function Ph(t, e) {
  const n = {}, i = s(e, ["model"]);
  i != null && a(n, ["setup", "model"], ae(t, i));
  const o = s(e, ["config"]);
  return o != null && a(n, ["config"], Rh(o, n)), n;
}
function Nh(t) {
  const e = {}, n = s(t, ["functionCall"]);
  n != null && a(e, ["functionCall"], n);
  const i = s(t, [
    "codeExecutionResult"
  ]);
  i != null && a(e, ["codeExecutionResult"], i);
  const o = s(t, [
    "executableCode"
  ]);
  o != null && a(e, ["executableCode"], o);
  const r = s(t, ["fileData"]);
  r != null && a(e, ["fileData"], Sh(r));
  const l = s(t, [
    "functionResponse"
  ]);
  l != null && a(e, ["functionResponse"], l);
  const u = s(t, ["inlineData"]);
  u != null && a(e, ["inlineData"], Eh(u));
  const d = s(t, ["text"]);
  d != null && a(e, ["text"], d);
  const c = s(t, ["thought"]);
  c != null && a(e, ["thought"], c);
  const f = s(t, [
    "thoughtSignature"
  ]);
  f != null && a(e, ["thoughtSignature"], f);
  const h = s(t, [
    "videoMetadata"
  ]);
  return h != null && a(e, ["videoMetadata"], h), e;
}
function kh(t) {
  const e = {}, n = s(t, ["handle"]);
  if (n != null && a(e, ["handle"], n), s(t, ["transparent"]) !== void 0)
    throw new Error("transparent parameter is not supported in Gemini API.");
  return e;
}
function Mh(t) {
  const e = {}, n = s(t, [
    "functionDeclarations"
  ]);
  if (n != null) {
    let c = n;
    Array.isArray(c) && (c = c.map((f) => f)), a(e, ["functionDeclarations"], c);
  }
  if (s(t, ["retrieval"]) !== void 0)
    throw new Error("retrieval parameter is not supported in Gemini API.");
  const i = s(t, [
    "googleSearchRetrieval"
  ]);
  i != null && a(e, ["googleSearchRetrieval"], i);
  const o = s(t, ["googleMaps"]);
  o != null && a(e, ["googleMaps"], wh(o));
  const r = s(t, ["computerUse"]);
  r != null && a(e, ["computerUse"], r);
  const l = s(t, [
    "codeExecution"
  ]);
  if (l != null && a(e, ["codeExecution"], l), s(t, ["enterpriseWebSearch"]) !== void 0)
    throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");
  const u = s(t, ["googleSearch"]);
  u != null && a(e, ["googleSearch"], Ih(u));
  const d = s(t, ["urlContext"]);
  return d != null && a(e, ["urlContext"], d), e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Uh(t) {
  const e = [];
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      const i = t[n];
      if (typeof i == "object" && i != null && Object.keys(i).length > 0) {
        const o = Object.keys(i).map((r) => `${n}.${r}`);
        e.push(...o);
      } else
        e.push(n);
    }
  return e.join(",");
}
function Dh(t, e) {
  let n = null;
  const i = t.bidiGenerateContentSetup;
  if (typeof i == "object" && i !== null && "setup" in i) {
    const r = i.setup;
    typeof r == "object" && r !== null ? (t.bidiGenerateContentSetup = r, n = r) : delete t.bidiGenerateContentSetup;
  } else i !== void 0 && delete t.bidiGenerateContentSetup;
  const o = t.fieldMask;
  if (n) {
    const r = Uh(n);
    if (Array.isArray(e == null ? void 0 : e.lockAdditionalFields) && (e == null ? void 0 : e.lockAdditionalFields.length) === 0)
      r ? t.fieldMask = r : delete t.fieldMask;
    else if (e != null && e.lockAdditionalFields && e.lockAdditionalFields.length > 0 && o !== null && Array.isArray(o) && o.length > 0) {
      const l = [
        "temperature",
        "topK",
        "topP",
        "maxOutputTokens",
        "responseModalities",
        "seed",
        "speechConfig"
      ];
      let u = [];
      o.length > 0 && (u = o.map((c) => l.includes(c) ? `generationConfig.${c}` : c));
      const d = [];
      r && d.push(r), u.length > 0 && d.push(...u), d.length > 0 ? t.fieldMask = d.join(",") : delete t.fieldMask;
    } else
      delete t.fieldMask;
  } else
    o !== null && Array.isArray(o) && o.length > 0 ? t.fieldMask = o.join(",") : delete t.fieldMask;
  return t;
}
class xh extends rt {
  constructor(e) {
    super(), this.apiClient = e;
  }
  /**
   * Creates an ephemeral auth token resource.
   *
   * @experimental
   *
   * @remarks
   * Ephemeral auth tokens is only supported in the Gemini Developer API.
   * It can be used for the session connection to the Live constrained API.
   * Support in v1alpha only.
   *
   * @param params - The parameters for the create request.
   * @return The created auth token.
   *
   * @example
   * ```ts
   * const ai = new GoogleGenAI({
   *     apiKey: token.name,
   *     httpOptions: { apiVersion: 'v1alpha' }  // Support in v1alpha only.
   * });
   *
   * // Case 1: If LiveEphemeralParameters is unset, unlock LiveConnectConfig
   * // when using the token in Live API sessions. Each session connection can
   * // use a different configuration.
   * const config: CreateAuthTokenConfig = {
   *     uses: 3,
   *     expireTime: '2025-05-01T00:00:00Z',
   * }
   * const token = await ai.tokens.create(config);
   *
   * // Case 2: If LiveEphemeralParameters is set, lock all fields in
   * // LiveConnectConfig when using the token in Live API sessions. For
   * // example, changing `outputAudioTranscription` in the Live API
   * // connection will be ignored by the API.
   * const config: CreateAuthTokenConfig =
   *     uses: 3,
   *     expireTime: '2025-05-01T00:00:00Z',
   *     LiveEphemeralParameters: {
   *        model: 'gemini-2.0-flash-001',
   *        config: {
   *           'responseModalities': ['AUDIO'],
   *           'systemInstruction': 'Always answer in English.',
   *        }
   *     }
   * }
   * const token = await ai.tokens.create(config);
   *
   * // Case 3: If LiveEphemeralParameters is set and lockAdditionalFields is
   * // set, lock LiveConnectConfig with set and additional fields (e.g.
   * // responseModalities, systemInstruction, temperature in this example) when
   * // using the token in Live API sessions.
   * const config: CreateAuthTokenConfig =
   *     uses: 3,
   *     expireTime: '2025-05-01T00:00:00Z',
   *     LiveEphemeralParameters: {
   *        model: 'gemini-2.0-flash-001',
   *        config: {
   *           'responseModalities': ['AUDIO'],
   *           'systemInstruction': 'Always answer in English.',
   *        }
   *     },
   *     lockAdditionalFields: ['temperature'],
   * }
   * const token = await ai.tokens.create(config);
   *
   * // Case 4: If LiveEphemeralParameters is set and lockAdditionalFields is
   * // empty array, lock LiveConnectConfig with set fields (e.g.
   * // responseModalities, systemInstruction in this example) when using the
   * // token in Live API sessions.
   * const config: CreateAuthTokenConfig =
   *     uses: 3,
   *     expireTime: '2025-05-01T00:00:00Z',
   *     LiveEphemeralParameters: {
   *        model: 'gemini-2.0-flash-001',
   *        config: {
   *           'responseModalities': ['AUDIO'],
   *           'systemInstruction': 'Always answer in English.',
   *        }
   *     },
   *     lockAdditionalFields: [],
   * }
   * const token = await ai.tokens.create(config);
   * ```
   */
  async create(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI())
      throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");
    {
      const u = Ah(this.apiClient, e);
      r = X("auth_tokens", u._url), l = u._query, delete u.config, delete u._url, delete u._query;
      const d = Dh(u, e.config);
      return o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(d),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((c) => c.json()), o.then((c) => c);
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Kr = "x-goog-api-key", zt = "https://www.googleapis.com/auth/cloud-platform";
class Lh {
  constructor(e) {
    if (e.apiKey !== void 0) {
      this.apiKey = e.apiKey;
      return;
    }
    const n = bh(e.googleAuthOptions);
    this.googleAuth = new Nl.GoogleAuth(n);
  }
  async addAuthHeaders(e, n) {
    if (this.apiKey !== void 0) {
      if (this.apiKey.startsWith("auth_tokens/"))
        throw new Error("Ephemeral tokens are only supported by the live API.");
      this.addKeyHeader(e);
      return;
    }
    return this.addGoogleAuthHeaders(e, n);
  }
  addKeyHeader(e) {
    if (e.get(Kr) === null) {
      if (this.apiKey === void 0)
        throw new Error("Trying to set API key header but apiKey is not set");
      e.append(Kr, this.apiKey);
    }
  }
  async addGoogleAuthHeaders(e, n) {
    if (this.googleAuth === void 0)
      throw new Error("Trying to set google-auth headers but googleAuth is unset");
    const i = await this.googleAuth.getRequestHeaders(n);
    for (const [o, r] of i)
      e.get(o) === null && e.append(o, r);
  }
}
function bh(t) {
  let e;
  if (t) {
    if (e = t, e.scopes) {
      if (typeof e.scopes == "string" && e.scopes !== zt || Array.isArray(e.scopes) && e.scopes.indexOf(zt) < 0)
        throw new Error(`Invalid auth scopes. Scopes must include: ${zt}`);
    } else return e.scopes = [zt], e;
    return e;
  } else
    return e = {
      scopes: [zt]
    }, e;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Fh {
  async download(e, n) {
    if (e.downloadPath) {
      const i = await Gh(e, n);
      if (i instanceof Qt) {
        const o = va(e.downloadPath);
        Ca.fromWeb(i.responseInternal.body).pipe(o), await Aa(o);
      } else
        try {
          await Ta(e.downloadPath, i, {
            encoding: "base64"
          });
        } catch (o) {
          throw new Error(`Failed to write file to ${e.downloadPath}: ${o}`);
        }
    }
  }
}
async function Gh(t, e) {
  var n, i, o;
  const r = di(t.file);
  if (r !== void 0)
    return await e.request({
      path: `files/${r}:download`,
      httpMethod: "GET",
      queryParams: {
        alt: "media"
      },
      httpOptions: (n = t.config) === null || n === void 0 ? void 0 : n.httpOptions,
      abortSignal: (i = t.config) === null || i === void 0 ? void 0 : i.abortSignal
    });
  if (Js(t.file)) {
    const l = (o = t.file.video) === null || o === void 0 ? void 0 : o.videoBytes;
    if (typeof l == "string")
      return l;
    throw new Error("Failed to download generated video, Uri or videoBytes not found.");
  } else if (Ks(t.file)) {
    const l = t.file.videoBytes;
    if (typeof l == "string")
      return l;
    throw new Error("Failed to download video, Uri or videoBytes not found.");
  } else
    throw new Error("Unsupported file type");
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Oh {
  create(e, n, i) {
    return new qh(e, n, i);
  }
}
class qh {
  constructor(e, n, i) {
    this.url = e, this.headers = n, this.callbacks = i;
  }
  connect() {
    this.ws = new Sa(this.url, { headers: this.headers }), this.ws.onopen = this.callbacks.onopen, this.ws.onerror = this.callbacks.onerror, this.ws.onclose = this.callbacks.onclose, this.ws.onmessage = this.callbacks.onmessage;
  }
  send(e) {
    if (this.ws === void 0)
      throw new Error("WebSocket is not connected");
    this.ws.send(e);
  }
  close() {
    if (this.ws === void 0)
      throw new Error("WebSocket is not connected");
    this.ws.close();
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Bh(t, e) {
  const n = {}, i = s(t, ["name"]);
  return i != null && a(n, ["_url", "name"], i), n;
}
function Vh(t, e) {
  const n = {}, i = s(t, ["name"]);
  return i != null && a(n, ["_url", "name"], i), n;
}
function Hh(t, e, n) {
  const i = {};
  if (s(t, ["validationDataset"]) !== void 0)
    throw new Error("validationDataset parameter is not supported in Gemini API.");
  const o = s(t, [
    "tunedModelDisplayName"
  ]);
  if (e !== void 0 && o != null && a(e, ["displayName"], o), s(t, ["description"]) !== void 0)
    throw new Error("description parameter is not supported in Gemini API.");
  const r = s(t, ["epochCount"]);
  e !== void 0 && r != null && a(e, ["tuningTask", "hyperparameters", "epochCount"], r);
  const l = s(t, [
    "learningRateMultiplier"
  ]);
  if (l != null && a(i, ["tuningTask", "hyperparameters", "learningRateMultiplier"], l), s(t, ["exportLastCheckpointOnly"]) !== void 0)
    throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");
  if (s(t, ["preTunedModelCheckpointId"]) !== void 0)
    throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");
  if (s(t, ["adapterSize"]) !== void 0)
    throw new Error("adapterSize parameter is not supported in Gemini API.");
  const u = s(t, ["batchSize"]);
  e !== void 0 && u != null && a(e, ["tuningTask", "hyperparameters", "batchSize"], u);
  const d = s(t, ["learningRate"]);
  if (e !== void 0 && d != null && a(e, ["tuningTask", "hyperparameters", "learningRate"], d), s(t, ["labels"]) !== void 0)
    throw new Error("labels parameter is not supported in Gemini API.");
  if (s(t, ["beta"]) !== void 0)
    throw new Error("beta parameter is not supported in Gemini API.");
  return i;
}
function $h(t, e, n) {
  const i = {};
  let o = s(n, [
    "config",
    "method"
  ]);
  if (o === void 0 && (o = "SUPERVISED_FINE_TUNING"), o === "SUPERVISED_FINE_TUNING") {
    const m = s(t, [
      "validationDataset"
    ]);
    e !== void 0 && m != null && a(e, ["supervisedTuningSpec"], Wr(m));
  } else if (o === "PREFERENCE_TUNING") {
    const m = s(t, [
      "validationDataset"
    ]);
    e !== void 0 && m != null && a(e, ["preferenceOptimizationSpec"], Wr(m));
  }
  const r = s(t, [
    "tunedModelDisplayName"
  ]);
  e !== void 0 && r != null && a(e, ["tunedModelDisplayName"], r);
  const l = s(t, ["description"]);
  e !== void 0 && l != null && a(e, ["description"], l);
  let u = s(n, [
    "config",
    "method"
  ]);
  if (u === void 0 && (u = "SUPERVISED_FINE_TUNING"), u === "SUPERVISED_FINE_TUNING") {
    const m = s(t, ["epochCount"]);
    e !== void 0 && m != null && a(e, ["supervisedTuningSpec", "hyperParameters", "epochCount"], m);
  } else if (u === "PREFERENCE_TUNING") {
    const m = s(t, ["epochCount"]);
    e !== void 0 && m != null && a(e, ["preferenceOptimizationSpec", "hyperParameters", "epochCount"], m);
  }
  let d = s(n, [
    "config",
    "method"
  ]);
  if (d === void 0 && (d = "SUPERVISED_FINE_TUNING"), d === "SUPERVISED_FINE_TUNING") {
    const m = s(t, [
      "learningRateMultiplier"
    ]);
    e !== void 0 && m != null && a(e, ["supervisedTuningSpec", "hyperParameters", "learningRateMultiplier"], m);
  } else if (d === "PREFERENCE_TUNING") {
    const m = s(t, [
      "learningRateMultiplier"
    ]);
    e !== void 0 && m != null && a(e, [
      "preferenceOptimizationSpec",
      "hyperParameters",
      "learningRateMultiplier"
    ], m);
  }
  let c = s(n, ["config", "method"]);
  if (c === void 0 && (c = "SUPERVISED_FINE_TUNING"), c === "SUPERVISED_FINE_TUNING") {
    const m = s(t, [
      "exportLastCheckpointOnly"
    ]);
    e !== void 0 && m != null && a(e, ["supervisedTuningSpec", "exportLastCheckpointOnly"], m);
  } else if (c === "PREFERENCE_TUNING") {
    const m = s(t, [
      "exportLastCheckpointOnly"
    ]);
    e !== void 0 && m != null && a(e, ["preferenceOptimizationSpec", "exportLastCheckpointOnly"], m);
  }
  let f = s(n, [
    "config",
    "method"
  ]);
  if (f === void 0 && (f = "SUPERVISED_FINE_TUNING"), f === "SUPERVISED_FINE_TUNING") {
    const m = s(t, ["adapterSize"]);
    e !== void 0 && m != null && a(e, ["supervisedTuningSpec", "hyperParameters", "adapterSize"], m);
  } else if (f === "PREFERENCE_TUNING") {
    const m = s(t, ["adapterSize"]);
    e !== void 0 && m != null && a(e, ["preferenceOptimizationSpec", "hyperParameters", "adapterSize"], m);
  }
  if (s(t, ["batchSize"]) !== void 0)
    throw new Error("batchSize parameter is not supported in Vertex AI.");
  if (s(t, ["learningRate"]) !== void 0)
    throw new Error("learningRate parameter is not supported in Vertex AI.");
  const h = s(t, ["labels"]);
  e !== void 0 && h != null && a(e, ["labels"], h);
  const p = s(t, ["beta"]);
  return e !== void 0 && p != null && a(e, ["preferenceOptimizationSpec", "hyperParameters", "beta"], p), i;
}
function Jh(t, e) {
  const n = {}, i = s(t, ["baseModel"]);
  i != null && a(n, ["baseModel"], i);
  const o = s(t, [
    "preTunedModel"
  ]);
  o != null && a(n, ["preTunedModel"], o);
  const r = s(t, [
    "trainingDataset"
  ]);
  r != null && np(r);
  const l = s(t, ["config"]);
  return l != null && Hh(l, n), n;
}
function Kh(t, e) {
  const n = {}, i = s(t, ["baseModel"]);
  i != null && a(n, ["baseModel"], i);
  const o = s(t, [
    "preTunedModel"
  ]);
  o != null && a(n, ["preTunedModel"], o);
  const r = s(t, [
    "trainingDataset"
  ]);
  r != null && ip(r, n, e);
  const l = s(t, ["config"]);
  return l != null && $h(l, n, e), n;
}
function Wh(t, e) {
  const n = {}, i = s(t, ["name"]);
  return i != null && a(n, ["_url", "name"], i), n;
}
function Yh(t, e) {
  const n = {}, i = s(t, ["name"]);
  return i != null && a(n, ["_url", "name"], i), n;
}
function zh(t, e, n) {
  const i = {}, o = s(t, ["pageSize"]);
  e !== void 0 && o != null && a(e, ["_query", "pageSize"], o);
  const r = s(t, ["pageToken"]);
  e !== void 0 && r != null && a(e, ["_query", "pageToken"], r);
  const l = s(t, ["filter"]);
  return e !== void 0 && l != null && a(e, ["_query", "filter"], l), i;
}
function Xh(t, e, n) {
  const i = {}, o = s(t, ["pageSize"]);
  e !== void 0 && o != null && a(e, ["_query", "pageSize"], o);
  const r = s(t, ["pageToken"]);
  e !== void 0 && r != null && a(e, ["_query", "pageToken"], r);
  const l = s(t, ["filter"]);
  return e !== void 0 && l != null && a(e, ["_query", "filter"], l), i;
}
function Qh(t, e) {
  const n = {}, i = s(t, ["config"]);
  return i != null && zh(i, n), n;
}
function Zh(t, e) {
  const n = {}, i = s(t, ["config"]);
  return i != null && Xh(i, n), n;
}
function jh(t, e) {
  const n = {}, i = s(t, [
    "sdkHttpResponse"
  ]);
  i != null && a(n, ["sdkHttpResponse"], i);
  const o = s(t, [
    "nextPageToken"
  ]);
  o != null && a(n, ["nextPageToken"], o);
  const r = s(t, ["tunedModels"]);
  if (r != null) {
    let l = r;
    Array.isArray(l) && (l = l.map((u) => ca(u))), a(n, ["tuningJobs"], l);
  }
  return n;
}
function ep(t, e) {
  const n = {}, i = s(t, [
    "sdkHttpResponse"
  ]);
  i != null && a(n, ["sdkHttpResponse"], i);
  const o = s(t, [
    "nextPageToken"
  ]);
  o != null && a(n, ["nextPageToken"], o);
  const r = s(t, ["tuningJobs"]);
  if (r != null) {
    let l = r;
    Array.isArray(l) && (l = l.map((u) => ti(u))), a(n, ["tuningJobs"], l);
  }
  return n;
}
function tp(t, e) {
  const n = {}, i = s(t, ["name"]);
  i != null && a(n, ["model"], i);
  const o = s(t, ["name"]);
  return o != null && a(n, ["endpoint"], o), n;
}
function np(t, e) {
  const n = {};
  if (s(t, ["gcsUri"]) !== void 0)
    throw new Error("gcsUri parameter is not supported in Gemini API.");
  if (s(t, ["vertexDatasetResource"]) !== void 0)
    throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");
  const i = s(t, ["examples"]);
  if (i != null) {
    let o = i;
    Array.isArray(o) && (o = o.map((r) => r)), a(n, ["examples", "examples"], o);
  }
  return n;
}
function ip(t, e, n) {
  const i = {};
  let o = s(n, [
    "config",
    "method"
  ]);
  if (o === void 0 && (o = "SUPERVISED_FINE_TUNING"), o === "SUPERVISED_FINE_TUNING") {
    const l = s(t, ["gcsUri"]);
    e !== void 0 && l != null && a(e, ["supervisedTuningSpec", "trainingDatasetUri"], l);
  } else if (o === "PREFERENCE_TUNING") {
    const l = s(t, ["gcsUri"]);
    e !== void 0 && l != null && a(e, ["preferenceOptimizationSpec", "trainingDatasetUri"], l);
  }
  let r = s(n, [
    "config",
    "method"
  ]);
  if (r === void 0 && (r = "SUPERVISED_FINE_TUNING"), r === "SUPERVISED_FINE_TUNING") {
    const l = s(t, [
      "vertexDatasetResource"
    ]);
    e !== void 0 && l != null && a(e, ["supervisedTuningSpec", "trainingDatasetUri"], l);
  } else if (r === "PREFERENCE_TUNING") {
    const l = s(t, [
      "vertexDatasetResource"
    ]);
    e !== void 0 && l != null && a(e, ["preferenceOptimizationSpec", "trainingDatasetUri"], l);
  }
  if (s(t, ["examples"]) !== void 0)
    throw new Error("examples parameter is not supported in Vertex AI.");
  return i;
}
function ca(t, e) {
  const n = {}, i = s(t, [
    "sdkHttpResponse"
  ]);
  i != null && a(n, ["sdkHttpResponse"], i);
  const o = s(t, ["name"]);
  o != null && a(n, ["name"], o);
  const r = s(t, ["state"]);
  r != null && a(n, ["state"], $s(r));
  const l = s(t, ["createTime"]);
  l != null && a(n, ["createTime"], l);
  const u = s(t, [
    "tuningTask",
    "startTime"
  ]);
  u != null && a(n, ["startTime"], u);
  const d = s(t, [
    "tuningTask",
    "completeTime"
  ]);
  d != null && a(n, ["endTime"], d);
  const c = s(t, ["updateTime"]);
  c != null && a(n, ["updateTime"], c);
  const f = s(t, ["description"]);
  f != null && a(n, ["description"], f);
  const h = s(t, ["baseModel"]);
  h != null && a(n, ["baseModel"], h);
  const p = s(t, ["_self"]);
  return p != null && a(n, ["tunedModel"], tp(p)), n;
}
function ti(t, e) {
  const n = {}, i = s(t, [
    "sdkHttpResponse"
  ]);
  i != null && a(n, ["sdkHttpResponse"], i);
  const o = s(t, ["name"]);
  o != null && a(n, ["name"], o);
  const r = s(t, ["state"]);
  r != null && a(n, ["state"], $s(r));
  const l = s(t, ["createTime"]);
  l != null && a(n, ["createTime"], l);
  const u = s(t, ["startTime"]);
  u != null && a(n, ["startTime"], u);
  const d = s(t, ["endTime"]);
  d != null && a(n, ["endTime"], d);
  const c = s(t, ["updateTime"]);
  c != null && a(n, ["updateTime"], c);
  const f = s(t, ["error"]);
  f != null && a(n, ["error"], f);
  const h = s(t, ["description"]);
  h != null && a(n, ["description"], h);
  const p = s(t, ["baseModel"]);
  p != null && a(n, ["baseModel"], p);
  const m = s(t, ["tunedModel"]);
  m != null && a(n, ["tunedModel"], m);
  const v = s(t, [
    "preTunedModel"
  ]);
  v != null && a(n, ["preTunedModel"], v);
  const y = s(t, [
    "supervisedTuningSpec"
  ]);
  y != null && a(n, ["supervisedTuningSpec"], y);
  const _ = s(t, [
    "preferenceOptimizationSpec"
  ]);
  _ != null && a(n, ["preferenceOptimizationSpec"], _);
  const C = s(t, [
    "tuningDataStats"
  ]);
  C != null && a(n, ["tuningDataStats"], C);
  const A = s(t, [
    "encryptionSpec"
  ]);
  A != null && a(n, ["encryptionSpec"], A);
  const k = s(t, [
    "partnerModelTuningSpec"
  ]);
  k != null && a(n, ["partnerModelTuningSpec"], k);
  const b = s(t, [
    "customBaseModel"
  ]);
  b != null && a(n, ["customBaseModel"], b);
  const N = s(t, ["experiment"]);
  N != null && a(n, ["experiment"], N);
  const M = s(t, ["labels"]);
  M != null && a(n, ["labels"], M);
  const w = s(t, ["outputUri"]);
  w != null && a(n, ["outputUri"], w);
  const D = s(t, ["pipelineJob"]);
  D != null && a(n, ["pipelineJob"], D);
  const g = s(t, [
    "serviceAccount"
  ]);
  g != null && a(n, ["serviceAccount"], g);
  const E = s(t, [
    "tunedModelDisplayName"
  ]);
  E != null && a(n, ["tunedModelDisplayName"], E);
  const G = s(t, [
    "veoTuningSpec"
  ]);
  return G != null && a(n, ["veoTuningSpec"], G), n;
}
function op(t, e) {
  const n = {}, i = s(t, [
    "sdkHttpResponse"
  ]);
  i != null && a(n, ["sdkHttpResponse"], i);
  const o = s(t, ["name"]);
  o != null && a(n, ["name"], o);
  const r = s(t, ["metadata"]);
  r != null && a(n, ["metadata"], r);
  const l = s(t, ["done"]);
  l != null && a(n, ["done"], l);
  const u = s(t, ["error"]);
  return u != null && a(n, ["error"], u), n;
}
function Wr(t, e) {
  const n = {}, i = s(t, ["gcsUri"]);
  i != null && a(n, ["validationDatasetUri"], i);
  const o = s(t, [
    "vertexDatasetResource"
  ]);
  return o != null && a(n, ["validationDatasetUri"], o), n;
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class rp extends rt {
  constructor(e) {
    super(), this.apiClient = e, this.get = async (n) => await this.getInternal(n), this.list = async (n = {}) => new jt(tt.PAGED_ITEM_TUNING_JOBS, (i) => this.listInternal(i), await this.listInternal(n), n), this.tune = async (n) => {
      var i;
      if (this.apiClient.isVertexAI())
        if (n.baseModel.startsWith("projects/")) {
          const o = {
            tunedModelName: n.baseModel
          };
          !((i = n.config) === null || i === void 0) && i.preTunedModelCheckpointId && (o.checkpointId = n.config.preTunedModelCheckpointId);
          const r = Object.assign(Object.assign({}, n), { preTunedModel: o });
          return r.baseModel = void 0, await this.tuneInternal(r);
        } else {
          const o = Object.assign({}, n);
          return await this.tuneInternal(o);
        }
      else {
        const o = Object.assign({}, n), r = await this.tuneMldevInternal(o);
        let l = "";
        return r.metadata !== void 0 && r.metadata.tunedModel !== void 0 ? l = r.metadata.tunedModel : r.name !== void 0 && r.name.includes("/operations/") && (l = r.name.split("/operations/")[0]), {
          name: l,
          state: zn.JOB_STATE_QUEUED
        };
      }
    };
  }
  async getInternal(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = Yh(e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => ti(f));
    } else {
      const c = Wh(e);
      return u = X("{name}", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => ca(f));
    }
  }
  async listInternal(e) {
    var n, i, o, r;
    let l, u = "", d = {};
    if (this.apiClient.isVertexAI()) {
      const c = Zh(e);
      return u = X("tuningJobs", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = ep(f), p = new Ir();
        return Object.assign(p, h), p;
      });
    } else {
      const c = Qh(e);
      return u = X("tunedModels", c._url), d = c._query, delete c._url, delete c._query, l = this.apiClient.request({
        path: u,
        queryParams: d,
        body: JSON.stringify(c),
        httpMethod: "GET",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      }).then((f) => f.json().then((h) => {
        const p = h;
        return p.sdkHttpResponse = {
          headers: f.headers
        }, p;
      })), l.then((f) => {
        const h = jh(f), p = new Ir();
        return Object.assign(p, h), p;
      });
    }
  }
  /**
   * Cancels a tuning job.
   *
   * @param params - The parameters for the cancel request.
   * @return The empty response returned by the API.
   *
   * @example
   * ```ts
   * await ai.tunings.cancel({name: '...'}); // The server-generated resource name.
   * ```
   */
  async cancel(e) {
    var n, i, o, r;
    let l = "", u = {};
    if (this.apiClient.isVertexAI()) {
      const d = Vh(e);
      l = X("{name}:cancel", d._url), u = d._query, delete d._url, delete d._query, await this.apiClient.request({
        path: l,
        queryParams: u,
        body: JSON.stringify(d),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      });
    } else {
      const d = Bh(e);
      l = X("{name}:cancel", d._url), u = d._query, delete d._url, delete d._query, await this.apiClient.request({
        path: l,
        queryParams: u,
        body: JSON.stringify(d),
        httpMethod: "POST",
        httpOptions: (o = e.config) === null || o === void 0 ? void 0 : o.httpOptions,
        abortSignal: (r = e.config) === null || r === void 0 ? void 0 : r.abortSignal
      });
    }
  }
  async tuneInternal(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI()) {
      const u = Kh(e, e);
      return r = X("tuningJobs", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json().then((c) => {
        const f = c;
        return f.sdkHttpResponse = {
          headers: d.headers
        }, f;
      })), o.then((d) => ti(d));
    } else
      throw new Error("This method is only supported by the Vertex AI.");
  }
  async tuneMldevInternal(e) {
    var n, i;
    let o, r = "", l = {};
    if (this.apiClient.isVertexAI())
      throw new Error("This method is only supported by the Gemini Developer API.");
    {
      const u = Jh(e);
      return r = X("tunedModels", u._url), l = u._query, delete u._url, delete u._query, o = this.apiClient.request({
        path: r,
        queryParams: l,
        body: JSON.stringify(u),
        httpMethod: "POST",
        httpOptions: (n = e.config) === null || n === void 0 ? void 0 : n.httpOptions,
        abortSignal: (i = e.config) === null || i === void 0 ? void 0 : i.abortSignal
      }).then((d) => d.json().then((c) => {
        const f = c;
        return f.sdkHttpResponse = {
          headers: d.headers
        }, f;
      })), o.then((d) => op(d));
    }
  }
}
const da = 1024 * 1024 * 8, fa = 3, ha = 1e3, pa = 2, yt = "x-goog-upload-status";
async function sp(t, e, n) {
  var i, o, r;
  let l = 0, u = 0, d = new Qt(new Response()), c = "upload";
  for (l = t.size; u < l; ) {
    const h = Math.min(da, l - u), p = t.slice(u, u + h);
    u + h >= l && (c += ", finalize");
    let m = 0, v = ha;
    for (; m < fa && (d = await n.request({
      path: "",
      body: p,
      httpMethod: "POST",
      httpOptions: {
        apiVersion: "",
        baseUrl: e,
        headers: {
          "X-Goog-Upload-Command": c,
          "X-Goog-Upload-Offset": String(u),
          "Content-Length": String(h)
        }
      }
    }), !(!((i = d == null ? void 0 : d.headers) === null || i === void 0) && i[yt])); )
      m++, await ga(v), v = v * pa;
    if (u += h, ((o = d == null ? void 0 : d.headers) === null || o === void 0 ? void 0 : o[yt]) !== "active")
      break;
    if (l <= u)
      throw new Error("All content has been uploaded, but the upload status is not finalized.");
  }
  const f = await (d == null ? void 0 : d.json());
  if (((r = d == null ? void 0 : d.headers) === null || r === void 0 ? void 0 : r[yt]) !== "final")
    throw new Error("Failed to upload file: Upload status is not finalized.");
  return f.file;
}
async function ap(t) {
  return { size: t.size, type: t.type };
}
function ga(t) {
  return new Promise((e) => setTimeout(e, t));
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class lp {
  async stat(e) {
    const n = { size: 0, type: void 0 };
    if (typeof e == "string") {
      const i = await gi.stat(e);
      return n.size = i.size, n.type = this.inferMimeType(e), n;
    } else
      return await ap(e);
  }
  async upload(e, n, i) {
    return typeof e == "string" ? await this.uploadFileFromPath(e, n, i) : sp(e, n, i);
  }
  /**
   * Infers the MIME type of a file based on its extension.
   *
   * @param filePath The path to the file.
   * @returns The MIME type of the file, or undefined if it cannot be inferred.
   */
  inferMimeType(e) {
    const n = e.slice(e.lastIndexOf(".") + 1);
    return {
      aac: "audio/aac",
      abw: "application/x-abiword",
      arc: "application/x-freearc",
      avi: "video/x-msvideo",
      azw: "application/vnd.amazon.ebook",
      bin: "application/octet-stream",
      bmp: "image/bmp",
      bz: "application/x-bzip",
      bz2: "application/x-bzip2",
      csh: "application/x-csh",
      css: "text/css",
      csv: "text/csv",
      doc: "application/msword",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      eot: "application/vnd.ms-fontobject",
      epub: "application/epub+zip",
      gz: "application/gzip",
      gif: "image/gif",
      htm: "text/html",
      html: "text/html",
      ico: "image/vnd.microsoft.icon",
      ics: "text/calendar",
      jar: "application/java-archive",
      jpeg: "image/jpeg",
      jpg: "image/jpeg",
      js: "text/javascript",
      json: "application/json",
      jsonld: "application/ld+json",
      kml: "application/vnd.google-earth.kml+xml",
      kmz: "application/vnd.google-earth.kmz+xml",
      mjs: "text/javascript",
      mp3: "audio/mpeg",
      mp4: "video/mp4",
      mpeg: "video/mpeg",
      mpkg: "application/vnd.apple.installer+xml",
      odt: "application/vnd.oasis.opendocument.text",
      oga: "audio/ogg",
      ogv: "video/ogg",
      ogx: "application/ogg",
      opus: "audio/opus",
      otf: "font/otf",
      png: "image/png",
      pdf: "application/pdf",
      php: "application/x-httpd-php",
      ppt: "application/vnd.ms-powerpoint",
      pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      rar: "application/vnd.rar",
      rtf: "application/rtf",
      sh: "application/x-sh",
      svg: "image/svg+xml",
      swf: "application/x-shockwave-flash",
      tar: "application/x-tar",
      tif: "image/tiff",
      tiff: "image/tiff",
      ts: "video/mp2t",
      ttf: "font/ttf",
      txt: "text/plain",
      vsd: "application/vnd.visio",
      wav: "audio/wav",
      weba: "audio/webm",
      webm: "video/webm",
      webp: "image/webp",
      woff: "font/woff",
      woff2: "font/woff2",
      xhtml: "application/xhtml+xml",
      xls: "application/vnd.ms-excel",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      xml: "application/xml",
      xul: "application/vnd.mozilla.xul+xml",
      zip: "application/zip",
      "3gp": "video/3gpp",
      "3g2": "video/3gpp2",
      "7z": "application/x-7z-compressed"
    }[n.toLowerCase()];
  }
  async uploadFileFromPath(e, n, i) {
    var o, r, l;
    let u = 0, d = 0, c = new Qt(new Response()), f = "upload", h;
    try {
      if (h = await gi.open(e, "r"), !h)
        throw new Error("Failed to open file");
      for (u = (await h.stat()).size; d < u; ) {
        const m = Math.min(da, u - d);
        d + m >= u && (f += ", finalize");
        const v = new Uint8Array(m), { bytesRead: y } = await h.read(v, 0, m, d);
        if (y !== m)
          throw new Error(`Failed to read ${m} bytes from file at offset ${d}. bytes actually read: ${y}`);
        const _ = new Blob([v]);
        let C = 0, A = ha;
        for (; C < fa && (c = await i.request({
          path: "",
          body: _,
          httpMethod: "POST",
          httpOptions: {
            apiVersion: "",
            baseUrl: n,
            headers: {
              "X-Goog-Upload-Command": f,
              "X-Goog-Upload-Offset": String(d),
              "Content-Length": String(y)
            }
          }
        }), !(!((o = c == null ? void 0 : c.headers) === null || o === void 0) && o[yt])); )
          C++, await ga(A), A = A * pa;
        if (d += y, ((r = c == null ? void 0 : c.headers) === null || r === void 0 ? void 0 : r[yt]) !== "active")
          break;
        if (u <= d)
          throw new Error("All content has been uploaded, but the upload status is not finalized.");
      }
      const p = await (c == null ? void 0 : c.json());
      if (((l = c == null ? void 0 : c.headers) === null || l === void 0 ? void 0 : l[yt]) !== "final")
        throw new Error("Failed to upload file: Upload status is not finalized.");
      return p.file;
    } finally {
      h && await h.close();
    }
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const up = "gl-node/";
class kp {
  constructor(e) {
    var n, i, o, r, l, u;
    if ((e.project || e.location) && e.apiKey)
      throw new Error("Project/location and API key are mutually exclusive in the client initializer.");
    this.vertexai = (i = (n = e.vertexai) !== null && n !== void 0 ? n : cp("GOOGLE_GENAI_USE_VERTEXAI")) !== null && i !== void 0 ? i : !1;
    const d = fp(), c = et("GOOGLE_CLOUD_PROJECT"), f = et("GOOGLE_CLOUD_LOCATION");
    this.apiKey = (o = e.apiKey) !== null && o !== void 0 ? o : d, this.project = (r = e.project) !== null && r !== void 0 ? r : c, this.location = (l = e.location) !== null && l !== void 0 ? l : f, e.vertexai && (!((u = e.googleAuthOptions) === null || u === void 0) && u.credentials && (console.debug("The user provided Google Cloud credentials will take precedence over the API key from the environment variable."), this.apiKey = void 0), (c || f) && e.apiKey ? (console.debug("The user provided Vertex AI API key will take precedence over the project/location from the environment variables."), this.project = void 0, this.location = void 0) : (e.project || e.location) && d ? (console.debug("The user provided project/location will take precedence over the API key from the environment variables."), this.apiKey = void 0) : (c || f) && d && (console.debug("The project/location from the environment variables will take precedence over the API key from the environment variables."), this.apiKey = void 0), !this.location && !this.apiKey && (this.location = "global"));
    const h = Dl(e.httpOptions, e.vertexai, et("GOOGLE_VERTEX_BASE_URL"), et("GOOGLE_GEMINI_BASE_URL"));
    h && (e.httpOptions ? e.httpOptions.baseUrl = h : e.httpOptions = { baseUrl: h }), this.apiVersion = e.apiVersion;
    const p = new Lh({
      apiKey: this.apiKey,
      googleAuthOptions: e.googleAuthOptions
    });
    this.apiClient = new Zf({
      auth: p,
      project: this.project,
      location: this.location,
      apiVersion: this.apiVersion,
      apiKey: this.apiKey,
      vertexai: this.vertexai,
      httpOptions: e.httpOptions,
      userAgentExtra: up + process.version,
      uploader: new lp(),
      downloader: new Fh()
    }), this.models = new vh(this.apiClient), this.live = new dh(this.apiClient, p, new Oh()), this.batches = new Xu(this.apiClient), this.chats = new Pc(this.models, this.apiClient), this.caches = new wc(this.apiClient), this.files = new Gc(this.apiClient), this.operations = new _h(this.apiClient), this.authTokens = new xh(this.apiClient), this.tunings = new rp(this.apiClient);
  }
}
function et(t) {
  var e, n, i;
  return (i = (n = (e = process == null ? void 0 : process.env) === null || e === void 0 ? void 0 : e[t]) === null || n === void 0 ? void 0 : n.trim()) !== null && i !== void 0 ? i : void 0;
}
function cp(t) {
  return dp(et(t));
}
function dp(t) {
  return t === void 0 ? !1 : t.toLowerCase() === "true";
}
function fp() {
  const t = et("GOOGLE_API_KEY"), e = et("GEMINI_API_KEY");
  return t && e && console.warn("Both GOOGLE_API_KEY and GEMINI_API_KEY are set. Using GOOGLE_API_KEY."), t || e || void 0;
}
export {
  yr as ActivityHandling,
  Ko as AdapterSize,
  yn as ApiError,
  xo as ApiSpec,
  Do as AuthType,
  Xu as Batches,
  zo as Behavior,
  Vo as BlockedReason,
  wc as Caches,
  Nc as Chat,
  Pc as Chats,
  Xl as ComputeTokensResponse,
  ir as ControlReferenceType,
  wr as CountTokensResponse,
  Zl as CreateFileResponse,
  Rr as DeleteCachedContentResponse,
  jl as DeleteFileResponse,
  Sr as DeleteModelResponse,
  Xo as DynamicRetrievalConfigMode,
  Kl as EditImageResponse,
  rr as EditMode,
  Tr as EmbedContentResponse,
  mr as EndSensitivity,
  Qo as Environment,
  Yo as FeatureSelectionPreference,
  fr as FileSource,
  dr as FileState,
  Gc as Files,
  Go as FinishReason,
  Zo as FunctionCallingConfigMode,
  Mo as FunctionResponseScheduling,
  Yt as GenerateContentResponse,
  Cr as GenerateImagesResponse,
  hn as GenerateVideosOperation,
  kp as GoogleGenAI,
  bo as HarmBlockMethod,
  Fo as HarmBlockThreshold,
  Lo as HarmCategory,
  Oo as HarmProbability,
  qo as HarmSeverity,
  Qt as HttpResponse,
  tr as ImagePromptLanguage,
  zn as JobState,
  ko as Language,
  Nr as ListBatchJobsResponse,
  Pr as ListCachedContentsResponse,
  Ql as ListFilesResponse,
  Ar as ListModelsResponse,
  Ir as ListTuningJobsResponse,
  dh as Live,
  ht as LiveMusicPlaybackControl,
  tu as LiveMusicServerMessage,
  eu as LiveServerMessage,
  nr as MaskReferenceMode,
  pr as MediaModality,
  $o as MediaResolution,
  fn as Modality,
  Uo as Mode,
  vh as Models,
  Er as MusicGenerationMode,
  _h as Operations,
  No as Outcome,
  tt as PagedItem,
  jt as Pager,
  er as PersonGeneration,
  Yl as RecontextImageResponse,
  jo as SafetyFilterLevel,
  _r as Scale,
  zl as SegmentImageResponse,
  sr as SegmentMode,
  hh as Session,
  gr as StartSensitivity,
  or as SubjectReferenceType,
  xh as Tokens,
  Ho as TrafficType,
  cr as TuningMethod,
  Jo as TuningMode,
  Wo as TuningTask,
  hr as TurnCompleteReason,
  vr as TurnCoverage,
  Be as Type,
  Wl as UpscaleImageResponse,
  Bo as UrlRetrievalStatus,
  ur as VideoCompressionQuality,
  lr as VideoGenerationMaskMode,
  ar as VideoGenerationReferenceType
};
