import { n as i } from "./main-CHQQFXN8.js";
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
var r, t;
function c() {
  if (t) return r;
  if (t = 1, !globalThis.DOMException)
    try {
      const { MessageChannel: e } = require("worker_threads"), n = new e().port1, o = new ArrayBuffer();
      n.postMessage(o, [o, o]);
    } catch (e) {
      e.constructor.name === "DOMException" && (globalThis.DOMException = e.constructor);
    }
  return r = globalThis.DOMException, r;
}
var a = c();
const p = /* @__PURE__ */ i(a);
export {
  p as D
};
