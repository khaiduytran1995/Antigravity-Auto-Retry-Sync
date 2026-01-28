import { promises as h, createReadStream as m } from "fs";
import { basename as u } from "path";
import { D as w } from "./index-D4z4sSv2.js";
import { F as p } from "./main-CHQQFXN8.js";
import { q as v } from "./main-CHQQFXN8.js";
const y = (e) => Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
function b(e) {
  if (y(e) !== "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t == null ? !0 : (t.constructor && t.constructor.toString()) === Object.toString();
}
var f = function(e, t, r, i, o) {
  if (i === "m") throw new TypeError("Private method is not writable");
  if (i === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
}, s = function(e, t, r, i) {
  if (r === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? i : r === "a" ? i.call(e) : i ? i.value : t.get(e);
}, a, d;
const F = "The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.";
class l {
  constructor(t) {
    a.set(this, void 0), d.set(this, void 0), f(this, a, t.path, "f"), f(this, d, t.start || 0, "f"), this.name = u(s(this, a, "f")), this.size = t.size, this.lastModified = t.lastModified;
  }
  slice(t, r) {
    return new l({
      path: s(this, a, "f"),
      lastModified: this.lastModified,
      size: r - t,
      start: t
    });
  }
  async *stream() {
    const { mtimeMs: t } = await h.stat(s(this, a, "f"));
    if (t > this.lastModified)
      throw new w(F, "NotReadableError");
    this.size && (yield* m(s(this, a, "f"), {
      start: s(this, d, "f"),
      end: s(this, d, "f") + this.size - 1
    }));
  }
  get [(a = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), Symbol.toStringTag)]() {
    return "File";
  }
}
function M(e, { mtimeMs: t, size: r }, i, o = {}) {
  let n;
  b(i) ? [o, n] = [i, void 0] : n = i;
  const c = new l({ path: e, size: r, lastModified: t });
  return n || (n = c.name), new p([c], n, {
    ...o,
    lastModified: c.lastModified
  });
}
async function E(e, t, r) {
  const i = await h.stat(e);
  return M(e, i, t, r);
}
export {
  E as fileFromPath,
  v as isFile
};
