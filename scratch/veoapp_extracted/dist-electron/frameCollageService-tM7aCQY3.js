var $t = Object.defineProperty;
var Vt = (e, t, i) => t in e ? $t(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var Je = (e, t, i) => Vt(e, typeof t != "symbol" ? t + "" : t, i);
import { n as getDefaultExportFromCjs, aX as commonjsRequire } from "./main-CHQQFXN8.js";
import fs__default, { promises, existsSync } from "fs";
import require$$0 from "util";
import Stream from "stream";
import zlib from "zlib";
import require$$2 from "assert";
import require$$0$1 from "buffer";
var HeaderTypes;
(function(e) {
  e[e.BITMAP_INFO_HEADER = 40] = "BITMAP_INFO_HEADER", e[e.BITMAP_V2_INFO_HEADER = 52] = "BITMAP_V2_INFO_HEADER", e[e.BITMAP_V3_INFO_HEADER = 56] = "BITMAP_V3_INFO_HEADER", e[e.BITMAP_V4_HEADER = 108] = "BITMAP_V4_HEADER", e[e.BITMAP_V5_HEADER = 124] = "BITMAP_V5_HEADER";
})(HeaderTypes || (HeaderTypes = {}));
function maskColor(e, t, i, a) {
  const r = ~e + 1 & e, o = ~t + 1 & t, n = ~i + 1 & i, s = ~a + 1 & a, l = e / r + 1, h = t / o + 1, u = i / n + 1, d = a / s + 1;
  return {
    shiftRed: (m) => (m & e) / r * 256 / l,
    shiftGreen: (m) => (m & t) / o * 256 / h,
    shiftBlue: (m) => (m & i) / n * 256 / u,
    shiftAlpha: a !== 0 ? (m) => (m & a) / s * 256 / d : () => 255
  };
}
var BmpCompression;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.BI_RLE8 = 1] = "BI_RLE8", e[e.BI_RLE4 = 2] = "BI_RLE4", e[e.BI_BIT_FIELDS = 3] = "BI_BIT_FIELDS", e[e.BI_ALPHA_BIT_FIELDS = 6] = "BI_ALPHA_BIT_FIELDS";
})(BmpCompression || (BmpCompression = {}));
class BmpDecoder {
  constructor(t, { toRGBA: i } = { toRGBA: !1 }) {
    // Header
    Je(this, "flag");
    Je(this, "fileSize");
    Je(this, "reserved1");
    Je(this, "reserved2");
    Je(this, "offset");
    Je(this, "headerSize");
    Je(this, "width");
    Je(this, "height");
    Je(this, "planes");
    Je(this, "bitPP");
    Je(this, "compression");
    Je(this, "rawSize");
    Je(this, "hr");
    Je(this, "vr");
    Je(this, "colors");
    Je(this, "importantColors");
    Je(this, "palette");
    Je(this, "data");
    Je(this, "maskRed");
    Je(this, "maskGreen");
    Je(this, "maskBlue");
    Je(this, "maskAlpha");
    Je(this, "toRGBA");
    Je(this, "pos");
    Je(this, "bottomUp");
    Je(this, "buffer");
    Je(this, "locRed");
    Je(this, "locGreen");
    Je(this, "locBlue");
    Je(this, "locAlpha");
    Je(this, "shiftRed");
    Je(this, "shiftGreen");
    Je(this, "shiftBlue");
    Je(this, "shiftAlpha");
    if (this.buffer = t, this.toRGBA = !!i, this.pos = 0, this.bottomUp = !0, this.flag = this.buffer.toString("utf-8", 0, this.pos += 2), this.flag !== "BM")
      throw new Error("Invalid BMP File");
    this.locRed = this.toRGBA ? 0 : 3, this.locGreen = this.toRGBA ? 1 : 2, this.locBlue = this.toRGBA ? 2 : 1, this.locAlpha = this.toRGBA ? 3 : 0, this.parseHeader(), this.parseRGBA();
  }
  parseHeader() {
    if (this.fileSize = this.readUInt32LE(), this.reserved1 = this.buffer.readUInt16LE(this.pos), this.pos += 2, this.reserved2 = this.buffer.readUInt16LE(this.pos), this.pos += 2, this.offset = this.readUInt32LE(), this.headerSize = this.readUInt32LE(), !(this.headerSize in HeaderTypes))
      throw new Error(`Unsupported BMP header size ${this.headerSize}`);
    if (this.width = this.readUInt32LE(), this.height = this.readUInt32LE(), this.height = this.height > 2147483647 ? this.height - 4294967296 : this.height, this.planes = this.buffer.readUInt16LE(this.pos), this.pos += 2, this.bitPP = this.buffer.readUInt16LE(this.pos), this.pos += 2, this.compression = this.readUInt32LE(), this.rawSize = this.readUInt32LE(), this.hr = this.readUInt32LE(), this.vr = this.readUInt32LE(), this.colors = this.readUInt32LE(), this.importantColors = this.readUInt32LE(), this.bitPP === 32 ? (this.maskAlpha = 0, this.maskRed = 16711680, this.maskGreen = 65280, this.maskBlue = 255) : this.bitPP === 16 && (this.maskAlpha = 0, this.maskRed = 31744, this.maskGreen = 992, this.maskBlue = 31), (this.headerSize > HeaderTypes.BITMAP_INFO_HEADER || this.compression === BmpCompression.BI_BIT_FIELDS || this.compression === BmpCompression.BI_ALPHA_BIT_FIELDS) && (this.maskRed = this.readUInt32LE(), this.maskGreen = this.readUInt32LE(), this.maskBlue = this.readUInt32LE()), (this.headerSize > HeaderTypes.BITMAP_V2_INFO_HEADER || this.compression === BmpCompression.BI_ALPHA_BIT_FIELDS) && (this.maskAlpha = this.readUInt32LE()), this.headerSize > HeaderTypes.BITMAP_V3_INFO_HEADER && (this.pos += HeaderTypes.BITMAP_V4_HEADER - HeaderTypes.BITMAP_V3_INFO_HEADER), this.headerSize > HeaderTypes.BITMAP_V4_HEADER && (this.pos += HeaderTypes.BITMAP_V5_HEADER - HeaderTypes.BITMAP_V4_HEADER), this.bitPP <= 8 || this.colors > 0) {
      const i = this.colors === 0 ? 1 << this.bitPP : this.colors;
      this.palette = new Array(i);
      for (let a = 0; a < i; a++) {
        const r = this.buffer.readUInt8(this.pos++), o = this.buffer.readUInt8(this.pos++), n = this.buffer.readUInt8(this.pos++), s = this.buffer.readUInt8(this.pos++);
        this.palette[a] = {
          red: n,
          green: o,
          blue: r,
          quad: s
        };
      }
    }
    this.height < 0 && (this.height *= -1, this.bottomUp = !1);
    const t = maskColor(this.maskRed, this.maskGreen, this.maskBlue, this.maskAlpha);
    this.shiftRed = t.shiftRed, this.shiftGreen = t.shiftGreen, this.shiftBlue = t.shiftBlue, this.shiftAlpha = t.shiftAlpha;
  }
  parseRGBA() {
    switch (this.data = Buffer.alloc(this.width * this.height * 4), this.bitPP) {
      case 1:
        this.bit1();
        break;
      case 4:
        this.bit4();
        break;
      case 8:
        this.bit8();
        break;
      case 16:
        this.bit16();
        break;
      case 24:
        this.bit24();
        break;
      default:
        this.bit32();
    }
  }
  bit1() {
    const t = Math.ceil(this.width / 8), i = t % 4, a = i !== 0 ? 4 - i : 0;
    this.scanImage(a, t, (r, o) => {
      const n = this.buffer.readUInt8(this.pos++), s = o * this.width * 4 + r * 8 * 4;
      for (let l = 0; l < 8 && r * 8 + l < this.width; l++) {
        const h = this.palette[n >> 7 - l & 1];
        this.data[s + l * this.locAlpha] = 0, this.data[s + l * 4 + this.locBlue] = h.blue, this.data[s + l * 4 + this.locGreen] = h.green, this.data[s + l * 4 + this.locRed] = h.red;
      }
    });
  }
  bit4() {
    if (this.compression === BmpCompression.BI_RLE4) {
      this.data.fill(0);
      let t = !1, i = this.bottomUp ? this.height - 1 : 0, a = 0;
      for (; a < this.data.length; ) {
        const r = this.buffer.readUInt8(this.pos++), o = this.buffer.readUInt8(this.pos++);
        if (r === 0) {
          if (o === 0) {
            i += this.bottomUp ? -1 : 1, a = i * this.width * 4, t = !1;
            continue;
          }
          if (o === 1)
            break;
          if (o === 2) {
            const n = this.buffer.readUInt8(this.pos++), s = this.buffer.readUInt8(this.pos++);
            i += this.bottomUp ? -s : s, a += s * this.width * 4 + n * 4;
          } else {
            let n = this.buffer.readUInt8(this.pos++);
            for (let s = 0; s < o; s++)
              a = this.setPixelData(a, t ? n & 15 : (n & 240) >> 4), s & 1 && s + 1 < o && (n = this.buffer.readUInt8(this.pos++)), t = !t;
            (o + 1 >> 1 & 1) === 1 && this.pos++;
          }
        } else
          for (let n = 0; n < r; n++)
            a = this.setPixelData(a, t ? o & 15 : (o & 240) >> 4), t = !t;
      }
    } else {
      const t = Math.ceil(this.width / 2), i = t % 4, a = i !== 0 ? 4 - i : 0;
      this.scanImage(a, t, (r, o) => {
        const n = this.buffer.readUInt8(this.pos++), s = o * this.width * 4 + r * 2 * 4, l = n >> 4;
        let h = this.palette[l];
        if (this.data[s] = 0, this.data[s + 1] = h.blue, this.data[s + 2] = h.green, this.data[s + 3] = h.red, r * 2 + 1 >= this.width)
          return !1;
        const u = n & 15;
        h = this.palette[u], this.data[s + 4] = 0, this.data[s + 4 + 1] = h.blue, this.data[s + 4 + 2] = h.green, this.data[s + 4 + 3] = h.red;
      });
    }
  }
  bit8() {
    if (this.compression === BmpCompression.BI_RLE8) {
      this.data.fill(0);
      let t = this.bottomUp ? this.height - 1 : 0, i = 0;
      for (; i < this.data.length; ) {
        const a = this.buffer.readUInt8(this.pos++), r = this.buffer.readUInt8(this.pos++);
        if (a === 0) {
          if (r === 0) {
            t += this.bottomUp ? -1 : 1, i = t * this.width * 4;
            continue;
          }
          if (r === 1)
            break;
          if (r === 2) {
            const o = this.buffer.readUInt8(this.pos++), n = this.buffer.readUInt8(this.pos++);
            t += this.bottomUp ? -n : n, i += n * this.width * 4 + o * 4;
          } else {
            for (let n = 0; n < r; n++) {
              const s = this.buffer.readUInt8(this.pos++);
              i = this.setPixelData(i, s);
            }
            r & !0 && this.pos++;
          }
        } else
          for (let o = 0; o < a; o++)
            i = this.setPixelData(i, r);
      }
    } else {
      const t = this.width % 4, i = t !== 0 ? 4 - t : 0;
      this.scanImage(i, this.width, (a, r) => {
        const o = this.buffer.readUInt8(this.pos++), n = r * this.width * 4 + a * 4;
        if (o < this.palette.length) {
          const s = this.palette[o];
          this.data[n] = 0, this.data[n + 1] = s.blue, this.data[n + 2] = s.green, this.data[n + 3] = s.red;
        } else
          this.data[n] = 0, this.data[n + 1] = 255, this.data[n + 2] = 255, this.data[n + 3] = 255;
      });
    }
  }
  bit16() {
    const t = this.width % 2 * 2;
    this.scanImage(t, this.width, (i, a) => {
      const r = a * this.width * 4 + i * 4, o = this.buffer.readUInt16LE(this.pos);
      this.pos += 2, this.data[r + this.locRed] = this.shiftRed(o), this.data[r + this.locGreen] = this.shiftGreen(o), this.data[r + this.locBlue] = this.shiftBlue(o), this.data[r + this.locAlpha] = this.shiftAlpha(o);
    });
  }
  bit24() {
    const t = this.width % 4;
    this.scanImage(t, this.width, (i, a) => {
      const r = a * this.width * 4 + i * 4, o = this.buffer.readUInt8(this.pos++), n = this.buffer.readUInt8(this.pos++), s = this.buffer.readUInt8(this.pos++);
      this.data[r + this.locRed] = s, this.data[r + this.locGreen] = n, this.data[r + this.locBlue] = o, this.data[r + this.locAlpha] = 0;
    });
  }
  bit32() {
    this.scanImage(0, this.width, (t, i) => {
      const a = i * this.width * 4 + t * 4, r = this.readUInt32LE();
      this.data[a + this.locRed] = this.shiftRed(r), this.data[a + this.locGreen] = this.shiftGreen(r), this.data[a + this.locBlue] = this.shiftBlue(r), this.data[a + this.locAlpha] = this.shiftAlpha(r);
    });
  }
  scanImage(t = 0, i = this.width, a) {
    for (let r = this.height - 1; r >= 0; r--) {
      const o = this.bottomUp ? r : this.height - 1 - r;
      for (let n = 0; n < i; n++)
        if (a.call(this, n, o) === !1)
          return;
      this.pos += t;
    }
  }
  readUInt32LE() {
    const t = this.buffer.readUInt32LE(this.pos);
    return this.pos += 4, t;
  }
  setPixelData(t, i) {
    const { blue: a, green: r, red: o } = this.palette[i];
    return this.data[t + this.locAlpha] = 0, this.data[t + 1 + this.locBlue] = a, this.data[t + 2 + this.locGreen] = r, this.data[t + 3 + this.locRed] = o, t + 4;
  }
}
function createInteger(e) {
  return e.reduce((t, i) => t << 1 | i, 0);
}
function createColor(e) {
  return e.quad << 24 | e.red << 16 | e.green << 8 | e.blue;
}
class BmpEncoder {
  constructor(t) {
    Je(this, "fileSize");
    Je(this, "reserved1");
    Je(this, "reserved2");
    Je(this, "offset");
    Je(this, "width");
    Je(this, "flag");
    Je(this, "height");
    Je(this, "planes");
    Je(this, "bitPP");
    Je(this, "compress");
    Je(this, "hr");
    Je(this, "vr");
    Je(this, "colors");
    Je(this, "importantColors");
    Je(this, "rawSize");
    Je(this, "headerSize");
    Je(this, "data");
    Je(this, "palette");
    Je(this, "extraBytes");
    Je(this, "buffer");
    Je(this, "bytesInColor");
    Je(this, "pos");
    switch (this.buffer = t.data, this.width = t.width, this.height = t.height, this.headerSize = HeaderTypes.BITMAP_INFO_HEADER, this.flag = "BM", this.bitPP = t.bitPP || 24, this.offset = 54, this.reserved1 = t.reserved1 || 0, this.reserved2 = t.reserved2 || 0, this.planes = 1, this.compress = 0, this.hr = t.hr || 0, this.vr = t.vr || 0, this.importantColors = t.importantColors || 0, this.colors = Math.min(2 ** (this.bitPP - 1 || 1), t.colors || 1 / 0), this.palette = t.palette || [], this.colors && this.bitPP < 16 ? this.offset += this.colors * 4 : this.colors = 0, this.bitPP) {
      case 32:
        this.bytesInColor = 4;
        break;
      case 16:
        this.bytesInColor = 2;
        break;
      case 8:
        this.bytesInColor = 1;
        break;
      case 4:
        this.bytesInColor = 1 / 2;
        break;
      case 1:
        this.bytesInColor = 1 / 8;
        break;
      default:
        this.bytesInColor = 3, this.bitPP = 24;
    }
    const i = this.width * this.bitPP / 32, a = Math.ceil(i);
    this.extraBytes = (a - i) * 4, this.rawSize = this.height * a * 4 + 2, this.fileSize = this.rawSize + this.offset, this.data = Buffer.alloc(this.fileSize, 1), this.pos = 0, this.encode();
  }
  encode() {
    switch (this.pos = 0, this.writeHeader(), this.bitPP) {
      case 32:
        this.bit32();
        break;
      case 16:
        this.bit16();
        break;
      case 8:
        this.bit8();
        break;
      case 4:
        this.bit4();
        break;
      case 1:
        this.bit1();
        break;
      default:
        this.bit24();
    }
  }
  writeHeader() {
    this.data.write(this.flag, this.pos, 2), this.pos += 2, this.writeUInt32LE(this.fileSize), this.writeUInt32LE(this.reserved1 << 16 | this.reserved2), this.writeUInt32LE(this.offset), this.writeUInt32LE(this.headerSize), this.writeUInt32LE(this.width), this.writeUInt32LE(this.height), this.data.writeUInt16LE(this.planes, this.pos), this.pos += 2, this.data.writeUInt16LE(this.bitPP, this.pos), this.pos += 2, this.writeUInt32LE(this.compress), this.writeUInt32LE(this.rawSize), this.writeUInt32LE(this.hr), this.writeUInt32LE(this.vr), this.writeUInt32LE(this.colors), this.writeUInt32LE(this.importantColors);
  }
  bit1() {
    this.palette.length && this.colors === 2 ? this.initColors(1) : (this.writeUInt32LE(16777215), this.writeUInt32LE(0)), this.pos += 1;
    let t = [];
    this.writeImage((i, a, r) => {
      let o = a;
      o++;
      const n = this.buffer[o++], s = this.buffer[o++], h = this.buffer[o++] * 0.2126 + s * 0.7152 + n * 0.0722;
      return t.push(h > 127 ? 0 : 1), (r + 1) % 8 === 0 ? (this.data[i - 1] = createInteger(t), t = []) : r === this.width - 1 && t.length > 0 && (this.data[i - 1] = createInteger(t) << 4, t = []), o;
    });
  }
  bit4() {
    const t = this.initColors(4);
    let i = [];
    this.writeImage((a, r, o) => {
      let n = r;
      const s = createColor({
        quad: this.buffer[n++],
        blue: this.buffer[n++],
        green: this.buffer[n++],
        red: this.buffer[n++]
      }), l = t.findIndex((h) => h === s);
      return l !== -1 ? i.push(l) : i.push(0), (o + 1) % 2 === 0 && (this.data[a] = i[0] << 4 | i[1], i = []), n;
    });
  }
  bit8() {
    const t = this.initColors(8);
    this.writeImage((i, a) => {
      let r = a;
      const o = createColor({
        quad: this.buffer[r++],
        blue: this.buffer[r++],
        green: this.buffer[r++],
        red: this.buffer[r++]
      }), n = t.findIndex((s) => s === o);
      return n !== -1 ? this.data[i] = n : this.data[i] = 0, r;
    });
  }
  bit16() {
    this.writeImage((t, i) => {
      let a = i + 1;
      const r = this.buffer[a++] / 8, o = this.buffer[a++] / 8, s = this.buffer[a++] / 8 << 10 | o << 5 | r;
      return this.data[t] = s & 255, this.data[t + 1] = (s & 65280) >> 8, a;
    });
  }
  bit24() {
    this.writeImage((t, i) => {
      let a = i + 1;
      return this.data[t] = this.buffer[a++], this.data[t + 1] = this.buffer[a++], this.data[t + 2] = this.buffer[a++], a;
    });
  }
  bit32() {
    this.writeImage((t, i) => {
      let a = i;
      return this.data[t + 3] = this.buffer[a++], this.data[t] = this.buffer[a++], this.data[t + 1] = this.buffer[a++], this.data[t + 2] = this.buffer[a++], a;
    });
  }
  writeImage(t) {
    const i = this.extraBytes + this.width * this.bytesInColor;
    let a = 0;
    for (let r = 0; r < this.height; r++)
      for (let o = 0; o < this.width; o++) {
        const n = Math.floor(this.pos + (this.height - 1 - r) * i + o * this.bytesInColor);
        a = t.call(this, n, a, o, r);
      }
  }
  initColors(t) {
    const i = [];
    if (this.palette.length)
      for (let a = 0; a < this.colors; a++) {
        const r = createColor(this.palette[a]);
        this.writeUInt32LE(r), i.push(r);
      }
    else
      throw new Error(`To encode ${t}-bit BMPs a pallette is needed. Please choose up to ${this.colors} colors. Colors must be 32-bit integers.`);
    return i;
  }
  writeUInt32LE(t) {
    this.data.writeUInt32LE(t, this.pos), this.pos += 4;
  }
}
function decode$1(e, t) {
  return new BmpDecoder(e, t);
}
function encode$1(e) {
  return new BmpEncoder(e);
}
function _typeof(e) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _typeof(e);
}
var trimLeft = /^\s+/, trimRight = /\s+$/;
function tinycolor(e, t) {
  if (e = e || "", t = t || {}, e instanceof tinycolor)
    return e;
  if (!(this instanceof tinycolor))
    return new tinycolor(e, t);
  var i = inputToRGB(e);
  this._originalInput = e, this._r = i.r, this._g = i.g, this._b = i.b, this._a = i.a, this._roundA = Math.round(100 * this._a) / 100, this._format = t.format || i.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = i.ok;
}
tinycolor.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  },
  getLuminance: function() {
    var t = this.toRgb(), i, a, r, o, n, s;
    return i = t.r / 255, a = t.g / 255, r = t.b / 255, i <= 0.03928 ? o = i / 12.92 : o = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), r <= 0.03928 ? s = r / 12.92 : s = Math.pow((r + 0.055) / 1.055, 2.4), 0.2126 * o + 0.7152 * n + 0.0722 * s;
  },
  setAlpha: function(t) {
    return this._a = boundAlpha(t), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var t = rgbToHsv(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      v: t.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var t = rgbToHsv(this._r, this._g, this._b), i = Math.round(t.h * 360), a = Math.round(t.s * 100), r = Math.round(t.v * 100);
    return this._a == 1 ? "hsv(" + i + ", " + a + "%, " + r + "%)" : "hsva(" + i + ", " + a + "%, " + r + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var t = rgbToHsl(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      l: t.l,
      a: this._a
    };
  },
  toHslString: function() {
    var t = rgbToHsl(this._r, this._g, this._b), i = Math.round(t.h * 360), a = Math.round(t.s * 100), r = Math.round(t.l * 100);
    return this._a == 1 ? "hsl(" + i + ", " + a + "%, " + r + "%)" : "hsla(" + i + ", " + a + "%, " + r + "%, " + this._roundA + ")";
  },
  toHex: function(t) {
    return rgbToHex(this._r, this._g, this._b, t);
  },
  toHexString: function(t) {
    return "#" + this.toHex(t);
  },
  toHex8: function(t) {
    return rgbaToHex(this._r, this._g, this._b, this._a, t);
  },
  toHex8String: function(t) {
    return "#" + this.toHex8(t);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(bound01(this._r, 255) * 100) + "%",
      g: Math.round(bound01(this._g, 255) * 100) + "%",
      b: Math.round(bound01(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : hexNames[rgbToHex(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(t) {
    var i = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a), a = i, r = this._gradientType ? "GradientType = 1, " : "";
    if (t) {
      var o = tinycolor(t);
      a = "#" + rgbaToArgbHex(o._r, o._g, o._b, o._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + i + ",endColorstr=" + a + ")";
  },
  toString: function(t) {
    var i = !!t;
    t = t || this._format;
    var a = !1, r = this._a < 1 && this._a >= 0, o = !i && r && (t === "hex" || t === "hex6" || t === "hex3" || t === "hex4" || t === "hex8" || t === "name");
    return o ? t === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (a = this.toRgbString()), t === "prgb" && (a = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (a = this.toHexString()), t === "hex3" && (a = this.toHexString(!0)), t === "hex4" && (a = this.toHex8String(!0)), t === "hex8" && (a = this.toHex8String()), t === "name" && (a = this.toName()), t === "hsl" && (a = this.toHslString()), t === "hsv" && (a = this.toHsvString()), a || this.toHexString());
  },
  clone: function() {
    return tinycolor(this.toString());
  },
  _applyModification: function(t, i) {
    var a = t.apply(null, [this].concat([].slice.call(i)));
    return this._r = a._r, this._g = a._g, this._b = a._b, this.setAlpha(a._a), this;
  },
  lighten: function() {
    return this._applyModification(_lighten, arguments);
  },
  brighten: function() {
    return this._applyModification(_brighten, arguments);
  },
  darken: function() {
    return this._applyModification(_darken, arguments);
  },
  desaturate: function() {
    return this._applyModification(_desaturate, arguments);
  },
  saturate: function() {
    return this._applyModification(_saturate, arguments);
  },
  greyscale: function() {
    return this._applyModification(_greyscale, arguments);
  },
  spin: function() {
    return this._applyModification(_spin, arguments);
  },
  _applyCombination: function(t, i) {
    return t.apply(null, [this].concat([].slice.call(i)));
  },
  analogous: function() {
    return this._applyCombination(_analogous, arguments);
  },
  complement: function() {
    return this._applyCombination(_complement, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(_monochromatic, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(_splitcomplement, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(polyad, [3]);
  },
  tetrad: function() {
    return this._applyCombination(polyad, [4]);
  }
};
tinycolor.fromRatio = function(e, t) {
  if (_typeof(e) == "object") {
    var i = {};
    for (var a in e)
      e.hasOwnProperty(a) && (a === "a" ? i[a] = e[a] : i[a] = convertToPercentage(e[a]));
    e = i;
  }
  return tinycolor(e, t);
};
function inputToRGB(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  }, i = 1, a = null, r = null, o = null, n = !1, s = !1;
  return typeof e == "string" && (e = stringInputToObject(e)), _typeof(e) == "object" && (isValidCSSUnit(e.r) && isValidCSSUnit(e.g) && isValidCSSUnit(e.b) ? (t = rgbToRgb(e.r, e.g, e.b), n = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : isValidCSSUnit(e.h) && isValidCSSUnit(e.s) && isValidCSSUnit(e.v) ? (a = convertToPercentage(e.s), r = convertToPercentage(e.v), t = hsvToRgb(e.h, a, r), n = !0, s = "hsv") : isValidCSSUnit(e.h) && isValidCSSUnit(e.s) && isValidCSSUnit(e.l) && (a = convertToPercentage(e.s), o = convertToPercentage(e.l), t = hslToRgb(e.h, a, o), n = !0, s = "hsl"), e.hasOwnProperty("a") && (i = e.a)), i = boundAlpha(i), {
    ok: n,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: i
  };
}
function rgbToRgb(e, t, i) {
  return {
    r: bound01(e, 255) * 255,
    g: bound01(t, 255) * 255,
    b: bound01(i, 255) * 255
  };
}
function rgbToHsl(e, t, i) {
  e = bound01(e, 255), t = bound01(t, 255), i = bound01(i, 255);
  var a = Math.max(e, t, i), r = Math.min(e, t, i), o, n, s = (a + r) / 2;
  if (a == r)
    o = n = 0;
  else {
    var l = a - r;
    switch (n = s > 0.5 ? l / (2 - a - r) : l / (a + r), a) {
      case e:
        o = (t - i) / l + (t < i ? 6 : 0);
        break;
      case t:
        o = (i - e) / l + 2;
        break;
      case i:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return {
    h: o,
    s: n,
    l: s
  };
}
function hslToRgb(e, t, i) {
  var a, r, o;
  e = bound01(e, 360), t = bound01(t, 100), i = bound01(i, 100);
  function n(h, u, d) {
    return d < 0 && (d += 1), d > 1 && (d -= 1), d < 1 / 6 ? h + (u - h) * 6 * d : d < 1 / 2 ? u : d < 2 / 3 ? h + (u - h) * (2 / 3 - d) * 6 : h;
  }
  if (t === 0)
    a = r = o = i;
  else {
    var s = i < 0.5 ? i * (1 + t) : i + t - i * t, l = 2 * i - s;
    a = n(l, s, e + 1 / 3), r = n(l, s, e), o = n(l, s, e - 1 / 3);
  }
  return {
    r: a * 255,
    g: r * 255,
    b: o * 255
  };
}
function rgbToHsv(e, t, i) {
  e = bound01(e, 255), t = bound01(t, 255), i = bound01(i, 255);
  var a = Math.max(e, t, i), r = Math.min(e, t, i), o, n, s = a, l = a - r;
  if (n = a === 0 ? 0 : l / a, a == r)
    o = 0;
  else {
    switch (a) {
      case e:
        o = (t - i) / l + (t < i ? 6 : 0);
        break;
      case t:
        o = (i - e) / l + 2;
        break;
      case i:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return {
    h: o,
    s: n,
    v: s
  };
}
function hsvToRgb(e, t, i) {
  e = bound01(e, 360) * 6, t = bound01(t, 100), i = bound01(i, 100);
  var a = Math.floor(e), r = e - a, o = i * (1 - t), n = i * (1 - r * t), s = i * (1 - (1 - r) * t), l = a % 6, h = [i, n, o, o, s, i][l], u = [s, i, i, n, o, o][l], d = [o, o, s, i, i, n][l];
  return {
    r: h * 255,
    g: u * 255,
    b: d * 255
  };
}
function rgbToHex(e, t, i, a) {
  var r = [pad2(Math.round(e).toString(16)), pad2(Math.round(t).toString(16)), pad2(Math.round(i).toString(16))];
  return a && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function rgbaToHex(e, t, i, a, r) {
  var o = [pad2(Math.round(e).toString(16)), pad2(Math.round(t).toString(16)), pad2(Math.round(i).toString(16)), pad2(convertDecimalToHex(a))];
  return r && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function rgbaToArgbHex(e, t, i, a) {
  var r = [pad2(convertDecimalToHex(a)), pad2(Math.round(e).toString(16)), pad2(Math.round(t).toString(16)), pad2(Math.round(i).toString(16))];
  return r.join("");
}
tinycolor.equals = function(e, t) {
  return !e || !t ? !1 : tinycolor(e).toRgbString() == tinycolor(t).toRgbString();
};
tinycolor.random = function() {
  return tinycolor.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function _desaturate(e, t) {
  t = t === 0 ? 0 : t || 10;
  var i = tinycolor(e).toHsl();
  return i.s -= t / 100, i.s = clamp01(i.s), tinycolor(i);
}
function _saturate(e, t) {
  t = t === 0 ? 0 : t || 10;
  var i = tinycolor(e).toHsl();
  return i.s += t / 100, i.s = clamp01(i.s), tinycolor(i);
}
function _greyscale(e) {
  return tinycolor(e).desaturate(100);
}
function _lighten(e, t) {
  t = t === 0 ? 0 : t || 10;
  var i = tinycolor(e).toHsl();
  return i.l += t / 100, i.l = clamp01(i.l), tinycolor(i);
}
function _brighten(e, t) {
  t = t === 0 ? 0 : t || 10;
  var i = tinycolor(e).toRgb();
  return i.r = Math.max(0, Math.min(255, i.r - Math.round(255 * -(t / 100)))), i.g = Math.max(0, Math.min(255, i.g - Math.round(255 * -(t / 100)))), i.b = Math.max(0, Math.min(255, i.b - Math.round(255 * -(t / 100)))), tinycolor(i);
}
function _darken(e, t) {
  t = t === 0 ? 0 : t || 10;
  var i = tinycolor(e).toHsl();
  return i.l -= t / 100, i.l = clamp01(i.l), tinycolor(i);
}
function _spin(e, t) {
  var i = tinycolor(e).toHsl(), a = (i.h + t) % 360;
  return i.h = a < 0 ? 360 + a : a, tinycolor(i);
}
function _complement(e) {
  var t = tinycolor(e).toHsl();
  return t.h = (t.h + 180) % 360, tinycolor(t);
}
function polyad(e, t) {
  if (isNaN(t) || t <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var i = tinycolor(e).toHsl(), a = [tinycolor(e)], r = 360 / t, o = 1; o < t; o++)
    a.push(tinycolor({
      h: (i.h + o * r) % 360,
      s: i.s,
      l: i.l
    }));
  return a;
}
function _splitcomplement(e) {
  var t = tinycolor(e).toHsl(), i = t.h;
  return [tinycolor(e), tinycolor({
    h: (i + 72) % 360,
    s: t.s,
    l: t.l
  }), tinycolor({
    h: (i + 216) % 360,
    s: t.s,
    l: t.l
  })];
}
function _analogous(e, t, i) {
  t = t || 6, i = i || 30;
  var a = tinycolor(e).toHsl(), r = 360 / i, o = [tinycolor(e)];
  for (a.h = (a.h - (r * t >> 1) + 720) % 360; --t; )
    a.h = (a.h + r) % 360, o.push(tinycolor(a));
  return o;
}
function _monochromatic(e, t) {
  t = t || 6;
  for (var i = tinycolor(e).toHsv(), a = i.h, r = i.s, o = i.v, n = [], s = 1 / t; t--; )
    n.push(tinycolor({
      h: a,
      s: r,
      v: o
    })), o = (o + s) % 1;
  return n;
}
tinycolor.mix = function(e, t, i) {
  i = i === 0 ? 0 : i || 50;
  var a = tinycolor(e).toRgb(), r = tinycolor(t).toRgb(), o = i / 100, n = {
    r: (r.r - a.r) * o + a.r,
    g: (r.g - a.g) * o + a.g,
    b: (r.b - a.b) * o + a.b,
    a: (r.a - a.a) * o + a.a
  };
  return tinycolor(n);
};
tinycolor.readability = function(e, t) {
  var i = tinycolor(e), a = tinycolor(t);
  return (Math.max(i.getLuminance(), a.getLuminance()) + 0.05) / (Math.min(i.getLuminance(), a.getLuminance()) + 0.05);
};
tinycolor.isReadable = function(e, t, i) {
  var a = tinycolor.readability(e, t), r, o;
  switch (o = !1, r = validateWCAG2Parms(i), r.level + r.size) {
    case "AAsmall":
    case "AAAlarge":
      o = a >= 4.5;
      break;
    case "AAlarge":
      o = a >= 3;
      break;
    case "AAAsmall":
      o = a >= 7;
      break;
  }
  return o;
};
tinycolor.mostReadable = function(e, t, i) {
  var a = null, r = 0, o, n, s, l;
  i = i || {}, n = i.includeFallbackColors, s = i.level, l = i.size;
  for (var h = 0; h < t.length; h++)
    o = tinycolor.readability(e, t[h]), o > r && (r = o, a = tinycolor(t[h]));
  return tinycolor.isReadable(e, a, {
    level: s,
    size: l
  }) || !n ? a : (i.includeFallbackColors = !1, tinycolor.mostReadable(e, ["#fff", "#000"], i));
};
var names$1 = tinycolor.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, hexNames = tinycolor.hexNames = flip(names$1);
function flip(e) {
  var t = {};
  for (var i in e)
    e.hasOwnProperty(i) && (t[e[i]] = i);
  return t;
}
function boundAlpha(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function bound01(e, t) {
  isOnePointZero(e) && (e = "100%");
  var i = isPercentage(e);
  return e = Math.min(t, Math.max(0, parseFloat(e))), i && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function clamp01(e) {
  return Math.min(1, Math.max(0, e));
}
function parseIntFromHex(e) {
  return parseInt(e, 16);
}
function isOnePointZero(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function isPercentage(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function pad2(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function convertToPercentage(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function convertDecimalToHex(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function convertHexToDecimal(e) {
  return parseIntFromHex(e) / 255;
}
var matchers = (function() {
  var e = "[-\\+]?\\d+%?", t = "[-\\+]?\\d*\\.\\d+%?", i = "(?:" + t + ")|(?:" + e + ")", a = "[\\s|\\(]+(" + i + ")[,|\\s]+(" + i + ")[,|\\s]+(" + i + ")\\s*\\)?", r = "[\\s|\\(]+(" + i + ")[,|\\s]+(" + i + ")[,|\\s]+(" + i + ")[,|\\s]+(" + i + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(i),
    rgb: new RegExp("rgb" + a),
    rgba: new RegExp("rgba" + r),
    hsl: new RegExp("hsl" + a),
    hsla: new RegExp("hsla" + r),
    hsv: new RegExp("hsv" + a),
    hsva: new RegExp("hsva" + r),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
})();
function isValidCSSUnit(e) {
  return !!matchers.CSS_UNIT.exec(e);
}
function stringInputToObject(e) {
  e = e.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  var t = !1;
  if (names$1[e])
    e = names$1[e], t = !0;
  else if (e == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var i;
  return (i = matchers.rgb.exec(e)) ? {
    r: i[1],
    g: i[2],
    b: i[3]
  } : (i = matchers.rgba.exec(e)) ? {
    r: i[1],
    g: i[2],
    b: i[3],
    a: i[4]
  } : (i = matchers.hsl.exec(e)) ? {
    h: i[1],
    s: i[2],
    l: i[3]
  } : (i = matchers.hsla.exec(e)) ? {
    h: i[1],
    s: i[2],
    l: i[3],
    a: i[4]
  } : (i = matchers.hsv.exec(e)) ? {
    h: i[1],
    s: i[2],
    v: i[3]
  } : (i = matchers.hsva.exec(e)) ? {
    h: i[1],
    s: i[2],
    v: i[3],
    a: i[4]
  } : (i = matchers.hex8.exec(e)) ? {
    r: parseIntFromHex(i[1]),
    g: parseIntFromHex(i[2]),
    b: parseIntFromHex(i[3]),
    a: convertHexToDecimal(i[4]),
    format: t ? "name" : "hex8"
  } : (i = matchers.hex6.exec(e)) ? {
    r: parseIntFromHex(i[1]),
    g: parseIntFromHex(i[2]),
    b: parseIntFromHex(i[3]),
    format: t ? "name" : "hex"
  } : (i = matchers.hex4.exec(e)) ? {
    r: parseIntFromHex(i[1] + "" + i[1]),
    g: parseIntFromHex(i[2] + "" + i[2]),
    b: parseIntFromHex(i[3] + "" + i[3]),
    a: convertHexToDecimal(i[4] + "" + i[4]),
    format: t ? "name" : "hex8"
  } : (i = matchers.hex3.exec(e)) ? {
    r: parseIntFromHex(i[1] + "" + i[1]),
    g: parseIntFromHex(i[2] + "" + i[2]),
    b: parseIntFromHex(i[3] + "" + i[3]),
    format: t ? "name" : "hex"
  } : !1;
}
function validateWCAG2Parms(e) {
  var t, i;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), i = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), i !== "small" && i !== "large" && (i = "small"), {
    level: t,
    size: i
  };
}
function clone(e) {
  const t = {
    width: e.bitmap.width,
    height: e.bitmap.height,
    data: Buffer.from(e.bitmap.data)
  };
  return new e.constructor(t);
}
function scan(e, t, i, a, r, o) {
  let n, s, l, h, u;
  if (typeof t == "function")
    u = t, n = 0, s = 0, l = e.bitmap.width, h = e.bitmap.height;
  else {
    if (n = t, typeof i != "number")
      throw new Error("y must be a number");
    if (s = i, typeof a != "number")
      throw new Error("w must be a number");
    if (l = a, typeof r != "number")
      throw new Error("h must be a number");
    if (h = r, typeof o != "function")
      throw new Error("cb must be a function");
    u = o;
  }
  n = Math.round(n), s = Math.round(s), l = Math.round(l), h = Math.round(h);
  const d = u.bind(e);
  for (let m = s; m < s + h; m++)
    for (let p = n; p < n + l; p++) {
      const g = e.bitmap.width * m + p << 2;
      d(p, m, g);
    }
  return e;
}
function* scanIterator(e, t, i, a, r) {
  t = Math.round(t), i = Math.round(i), a = Math.round(a), r = Math.round(r);
  for (let o = i; o < i + r; o++)
    for (let n = t; n < t + a; n++) {
      const s = e.bitmap.width * o + n << 2;
      yield { x: n, y: o, idx: s, image: e };
    }
}
function intToRGBA$1(e) {
  if (typeof e != "number")
    throw new Error("i must be a number");
  const t = {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  };
  return t.r = Math.floor(e / Math.pow(256, 3)), t.g = Math.floor((e - t.r * Math.pow(256, 3)) / Math.pow(256, 2)), t.b = Math.floor((e - t.r * Math.pow(256, 3) - t.g * Math.pow(256, 2)) / Math.pow(256, 1)), t.a = Math.floor((e - t.r * Math.pow(256, 3) - t.g * Math.pow(256, 2) - t.b * Math.pow(256, 1)) / Math.pow(256, 0)), t;
}
function colorDiff(e, t) {
  const i = (s) => Math.pow(s, 2), { max: a } = Math, r = 65025 * 3, o = "a" in e ? e.a : 255, n = "a" in t ? t.a : 255;
  return (a(i(e.r - t.r), i(e.r - t.r - o + n)) + a(i(e.g - t.g), i(e.g - t.g - o + n)) + a(i(e.b - t.b), i(e.b - t.b - o + n))) / r;
}
function limit255(e) {
  return e = Math.max(e, 0), e = Math.min(e, 255), e;
}
function cssColorToHex(e) {
  return typeof e == "number" ? e : parseInt(tinycolor(e).toHex8(), 16);
}
function encode(e, t = {}) {
  return scan({ bitmap: e }, 0, 0, e.width, e.height, function(i, a, r) {
    const o = e.data[r + 0], n = e.data[r + 1], s = e.data[r + 2], l = e.data[r + 3];
    e.data[r + 0] = l, e.data[r + 1] = s, e.data[r + 2] = n, e.data[r + 3] = o;
  }), encode$1({ ...e, ...t }).data;
}
function decode(e, t) {
  const i = decode$1(e, t);
  return scan({ bitmap: i }, 0, 0, i.width, i.height, function(a, r, o) {
    const n = i.data[o + 1], s = i.data[o + 2], l = i.data[o + 3];
    i.data[o + 0] = l, i.data[o + 1] = s, i.data[o + 2] = n, i.data[o + 3] = 255;
  }), i;
}
function msBmp() {
  return {
    mime: "image/x-ms-bmp",
    encode,
    decode
  };
}
function bmp() {
  return {
    mime: "image/bmp",
    encode,
    decode
  };
}
var omggif = {}, hasRequiredOmggif;
function requireOmggif() {
  if (hasRequiredOmggif) return omggif;
  hasRequiredOmggif = 1;
  function e(r, o, n, h) {
    var l = 0, h = h === void 0 ? {} : h, u = h.loop === void 0 ? null : h.loop, d = h.palette === void 0 ? null : h.palette;
    if (o <= 0 || n <= 0 || o > 65535 || n > 65535)
      throw new Error("Width/Height invalid.");
    function m(B) {
      var A = B.length;
      if (A < 2 || A > 256 || A & A - 1)
        throw new Error(
          "Invalid code/color length, must be power of 2 and 2 .. 256."
        );
      return A;
    }
    r[l++] = 71, r[l++] = 73, r[l++] = 70, r[l++] = 56, r[l++] = 57, r[l++] = 97;
    var p = 0, g = 0;
    if (d !== null) {
      for (var M = m(d); M >>= 1; ) ++p;
      if (M = 1 << p, --p, h.background !== void 0) {
        if (g = h.background, g >= M)
          throw new Error("Background index out of range.");
        if (g === 0)
          throw new Error("Background index explicitly passed as 0.");
      }
    }
    if (r[l++] = o & 255, r[l++] = o >> 8 & 255, r[l++] = n & 255, r[l++] = n >> 8 & 255, r[l++] = (d !== null ? 128 : 0) | // Global Color Table Flag.
    p, r[l++] = g, r[l++] = 0, d !== null)
      for (var k = 0, w = d.length; k < w; ++k) {
        var v = d[k];
        r[l++] = v >> 16 & 255, r[l++] = v >> 8 & 255, r[l++] = v & 255;
      }
    if (u !== null) {
      if (u < 0 || u > 65535)
        throw new Error("Loop count invalid.");
      r[l++] = 33, r[l++] = 255, r[l++] = 11, r[l++] = 78, r[l++] = 69, r[l++] = 84, r[l++] = 83, r[l++] = 67, r[l++] = 65, r[l++] = 80, r[l++] = 69, r[l++] = 50, r[l++] = 46, r[l++] = 48, r[l++] = 3, r[l++] = 1, r[l++] = u & 255, r[l++] = u >> 8 & 255, r[l++] = 0;
    }
    var C = !1;
    this.addFrame = function(B, A, S, b, E, F) {
      if (C === !0 && (--l, C = !1), F = F === void 0 ? {} : F, B < 0 || A < 0 || B > 65535 || A > 65535)
        throw new Error("x/y invalid.");
      if (S <= 0 || b <= 0 || S > 65535 || b > 65535)
        throw new Error("Width/Height invalid.");
      if (E.length < S * b)
        throw new Error("Not enough pixels for the frame size.");
      var Z = !0, P = F.palette;
      if (P == null && (Z = !1, P = d), P == null)
        throw new Error("Must supply either a local or global palette.");
      for (var D = m(P), L = 0; D >>= 1; ) ++L;
      D = 1 << L;
      var q = F.delay === void 0 ? 0 : F.delay, j = F.disposal === void 0 ? 0 : F.disposal;
      if (j < 0 || j > 3)
        throw new Error("Disposal out of range.");
      var J = !1, ie = 0;
      if (F.transparent !== void 0 && F.transparent !== null && (J = !0, ie = F.transparent, ie < 0 || ie >= D))
        throw new Error("Transparent color index.");
      if ((j !== 0 || J || q !== 0) && (r[l++] = 33, r[l++] = 249, r[l++] = 4, r[l++] = j << 2 | (J === !0 ? 1 : 0), r[l++] = q & 255, r[l++] = q >> 8 & 255, r[l++] = ie, r[l++] = 0), r[l++] = 44, r[l++] = B & 255, r[l++] = B >> 8 & 255, r[l++] = A & 255, r[l++] = A >> 8 & 255, r[l++] = S & 255, r[l++] = S >> 8 & 255, r[l++] = b & 255, r[l++] = b >> 8 & 255, r[l++] = Z === !0 ? 128 | L - 1 : 0, Z === !0)
        for (var V = 0, Q = P.length; V < Q; ++V) {
          var ee = P[V];
          r[l++] = ee >> 16 & 255, r[l++] = ee >> 8 & 255, r[l++] = ee & 255;
        }
      return l = t(
        r,
        l,
        L < 2 ? 2 : L,
        E
      ), l;
    }, this.end = function() {
      return C === !1 && (r[l++] = 59, C = !0), l;
    }, this.getOutputBuffer = function() {
      return r;
    }, this.setOutputBuffer = function(B) {
      r = B;
    }, this.getOutputBufferPosition = function() {
      return l;
    }, this.setOutputBufferPosition = function(B) {
      l = B;
    };
  }
  function t(r, o, n, s) {
    r[o++] = n;
    var l = o++, h = 1 << n, u = h - 1, d = h + 1, m = d + 1, p = n + 1, g = 0, M = 0;
    function k(F) {
      for (; g >= F; )
        r[o++] = M & 255, M >>= 8, g -= 8, o === l + 256 && (r[l] = 255, l = o++);
    }
    function w(F) {
      M |= F << g, g += p, k(8);
    }
    var v = s[0] & u, C = {};
    w(h);
    for (var B = 1, A = s.length; B < A; ++B) {
      var S = s[B] & u, b = v << 8 | S, E = C[b];
      if (E === void 0) {
        for (M |= v << g, g += p; g >= 8; )
          r[o++] = M & 255, M >>= 8, g -= 8, o === l + 256 && (r[l] = 255, l = o++);
        m === 4096 ? (w(h), m = d + 1, p = n + 1, C = {}) : (m >= 1 << p && ++p, C[b] = m++), v = S;
      } else
        v = E;
    }
    return w(v), w(d), k(1), l + 1 === o ? r[l] = 0 : (r[l] = o - l - 1, r[o++] = 0), o;
  }
  function i(r) {
    var o = 0;
    if (r[o++] !== 71 || r[o++] !== 73 || r[o++] !== 70 || r[o++] !== 56 || (r[o++] + 1 & 253) !== 56 || r[o++] !== 97)
      throw new Error("Invalid GIF 87a/89a header.");
    var n = r[o++] | r[o++] << 8, s = r[o++] | r[o++] << 8, l = r[o++], h = l >> 7, u = l & 7, d = 1 << u + 1;
    r[o++], r[o++];
    var m = null, p = null;
    h && (m = o, p = d, o += d * 3);
    var g = !0, M = [], k = 0, w = null, v = 0, C = null;
    for (this.width = n, this.height = s; g && o < r.length; )
      switch (r[o++]) {
        case 33:
          switch (r[o++]) {
            case 255:
              if (r[o] !== 11 || // 21 FF already read, check block size.
              // NETSCAPE2.0
              r[o + 1] == 78 && r[o + 2] == 69 && r[o + 3] == 84 && r[o + 4] == 83 && r[o + 5] == 67 && r[o + 6] == 65 && r[o + 7] == 80 && r[o + 8] == 69 && r[o + 9] == 50 && r[o + 10] == 46 && r[o + 11] == 48 && // Sub-block
              r[o + 12] == 3 && r[o + 13] == 1 && r[o + 16] == 0)
                o += 14, C = r[o++] | r[o++] << 8, o++;
              else
                for (o += 12; ; ) {
                  var B = r[o++];
                  if (!(B >= 0)) throw Error("Invalid block size");
                  if (B === 0) break;
                  o += B;
                }
              break;
            case 249:
              if (r[o++] !== 4 || r[o + 4] !== 0)
                throw new Error("Invalid graphics extension block.");
              var A = r[o++];
              k = r[o++] | r[o++] << 8, w = r[o++], (A & 1) === 0 && (w = null), v = A >> 2 & 7, o++;
              break;
            case 254:
              for (; ; ) {
                var B = r[o++];
                if (!(B >= 0)) throw Error("Invalid block size");
                if (B === 0) break;
                o += B;
              }
              break;
            default:
              throw new Error(
                "Unknown graphic control label: 0x" + r[o - 1].toString(16)
              );
          }
          break;
        case 44:
          var S = r[o++] | r[o++] << 8, b = r[o++] | r[o++] << 8, E = r[o++] | r[o++] << 8, F = r[o++] | r[o++] << 8, Z = r[o++], P = Z >> 7, D = Z >> 6 & 1, L = Z & 7, q = 1 << L + 1, j = m, J = p, ie = !1;
          if (P) {
            var ie = !0;
            j = o, J = q, o += q * 3;
          }
          var V = o;
          for (o++; ; ) {
            var B = r[o++];
            if (!(B >= 0)) throw Error("Invalid block size");
            if (B === 0) break;
            o += B;
          }
          M.push({
            x: S,
            y: b,
            width: E,
            height: F,
            has_local_palette: ie,
            palette_offset: j,
            palette_size: J,
            data_offset: V,
            data_length: o - V,
            transparent_index: w,
            interlaced: !!D,
            delay: k,
            disposal: v
          });
          break;
        case 59:
          g = !1;
          break;
        default:
          throw new Error("Unknown gif block: 0x" + r[o - 1].toString(16));
      }
    this.numFrames = function() {
      return M.length;
    }, this.loopCount = function() {
      return C;
    }, this.frameInfo = function(Q) {
      if (Q < 0 || Q >= M.length)
        throw new Error("Frame index out of range.");
      return M[Q];
    }, this.decodeAndBlitFrameBGRA = function(Q, ee) {
      var xe = this.frameInfo(Q), ke = xe.width * xe.height, ve = new Uint8Array(ke);
      a(
        r,
        xe.data_offset,
        ve,
        ke
      );
      var H = xe.palette_offset, W = xe.transparent_index;
      W === null && (W = 256);
      var U = xe.width, re = n - U, ae = U, we = (xe.y * n + xe.x) * 4, Ae = ((xe.y + xe.height) * n + xe.x) * 4, he = we, ue = re * 4;
      xe.interlaced === !0 && (ue += n * 4 * 7);
      for (var ce = 8, ye = 0, Se = ve.length; ye < Se; ++ye) {
        var Ie = ve[ye];
        if (ae === 0 && (he += ue, ae = U, he >= Ae && (ue = re * 4 + n * 4 * (ce - 1), he = we + (U + re) * (ce << 1), ce >>= 1)), Ie === W)
          he += 4;
        else {
          var Be = r[H + Ie * 3], Ce = r[H + Ie * 3 + 1], se = r[H + Ie * 3 + 2];
          ee[he++] = se, ee[he++] = Ce, ee[he++] = Be, ee[he++] = 255;
        }
        --ae;
      }
    }, this.decodeAndBlitFrameRGBA = function(Q, ee) {
      var xe = this.frameInfo(Q), ke = xe.width * xe.height, ve = new Uint8Array(ke);
      a(
        r,
        xe.data_offset,
        ve,
        ke
      );
      var H = xe.palette_offset, W = xe.transparent_index;
      W === null && (W = 256);
      var U = xe.width, re = n - U, ae = U, we = (xe.y * n + xe.x) * 4, Ae = ((xe.y + xe.height) * n + xe.x) * 4, he = we, ue = re * 4;
      xe.interlaced === !0 && (ue += n * 4 * 7);
      for (var ce = 8, ye = 0, Se = ve.length; ye < Se; ++ye) {
        var Ie = ve[ye];
        if (ae === 0 && (he += ue, ae = U, he >= Ae && (ue = re * 4 + n * 4 * (ce - 1), he = we + (U + re) * (ce << 1), ce >>= 1)), Ie === W)
          he += 4;
        else {
          var Be = r[H + Ie * 3], Ce = r[H + Ie * 3 + 1], se = r[H + Ie * 3 + 2];
          ee[he++] = Be, ee[he++] = Ce, ee[he++] = se, ee[he++] = 255;
        }
        --ae;
      }
    };
  }
  function a(r, o, n, s) {
    for (var l = r[o++], h = 1 << l, u = h + 1, d = u + 1, m = l + 1, p = (1 << m) - 1, g = 0, M = 0, k = 0, w = r[o++], v = new Int32Array(4096), C = null; ; ) {
      for (; g < 16 && w !== 0; )
        M |= r[o++] << g, g += 8, w === 1 ? w = r[o++] : --w;
      if (g < m)
        break;
      var B = M & p;
      if (M >>= m, g -= m, B === h) {
        d = u + 1, m = l + 1, p = (1 << m) - 1, C = null;
        continue;
      } else if (B === u)
        break;
      for (var A = B < d ? B : C, S = 0, b = A; b > h; )
        b = v[b] >> 8, ++S;
      var E = b, F = k + S + (A !== B ? 1 : 0);
      if (F > s) {
        console.log("Warning, gif stream longer than expected.");
        return;
      }
      n[k++] = E, k += S;
      var Z = k;
      for (A !== B && (n[k++] = E), b = A; S--; )
        b = v[b], n[--Z] = b & 255, b >>= 8;
      C !== null && d < 4096 && (v[d++] = C << 8 | E, d >= p + 1 && m < 12 && (++m, p = p << 1 | 1)), C = B;
    }
    return k !== s && console.log("Warning, gif stream shorter than expected."), n;
  }
  try {
    omggif.GifWriter = e, omggif.GifReader = i;
  } catch {
  }
  return omggif;
}
var omggifExports = requireOmggif();
const GIF = /* @__PURE__ */ getDefaultExportFromCjs(omggifExports);
var bitmapimage, hasRequiredBitmapimage;
function requireBitmapimage() {
  if (hasRequiredBitmapimage) return bitmapimage;
  hasRequiredBitmapimage = 1;
  class e {
    /**
     * BitmapImage is a class that hold an RGBA (red, green, blue, alpha) representation of an image. It's shape is borrowed from the Jimp package to make it easy to transfer GIF image frames into Jimp and Jimp images into GIF image frames. Each instance has a `bitmap` property having the following properties:
     * 
     * Property | Description
     * --- | ---
     * bitmap.width | width of image in pixels
     * bitmap.height | height of image in pixels
     * bitmap.data | a Buffer whose every four bytes represents a pixel, each sequential byte of a pixel corresponding to the red, green, blue, and alpha values of the pixel
     *
     * Its constructor supports the following signatures:
     *
     * * new BitmapImage(bitmap: { width: number, height: number, data: Buffer })
     * * new BitmapImage(bitmapImage: BitmapImage)
     * * new BitmapImage(width: number, height: number, buffer: Buffer)
     * * new BitmapImage(width: number, height: number, backgroundRGBA?: number)
     * 
     * When a `BitmapImage` is provided, the constructed `BitmapImage` is a deep clone of the provided one, so that each image's pixel data can subsequently be modified without affecting each other.
     *
     * `backgroundRGBA` is an optional parameter representing a pixel as a single number. In hex, the number is as follows: 0xRRGGBBAA, where RR is the red byte, GG the green byte, BB, the blue byte, and AA the alpha value. An AA of 0x00 is considered transparent, and all non-zero AA values are treated as opaque.
     */
    constructor(...i) {
      if (i.length === 0)
        throw new Error("constructor requires parameters");
      const a = i[0];
      if (a !== null && typeof a == "object")
        if (a instanceof e) {
          const r = a.bitmap;
          this.bitmap = {
            width: r.width,
            height: r.height,
            data: new Buffer(r.width * r.height * 4)
          }, r.data.copy(this.bitmap.data);
        } else if (a.width && a.height && a.data)
          this.bitmap = a;
        else
          throw new Error("unrecognized constructor parameters");
      else if (typeof a == "number" && typeof i[1] == "number") {
        const r = a, o = i[1], n = i[2];
        this.bitmap = { width: r, height: o }, Buffer.isBuffer(n) ? this.bitmap.data = n : (this.bitmap.data = new Buffer(r * o * 4), typeof n == "number" && this.fillRGBA(n));
      } else
        throw new Error("unrecognized constructor parameters");
    }
    /**
     * Copy a square portion of this image into another image. 
     * 
     * @param {BitmapImage} toImage Image into which to copy the square
     * @param {number} toX x-coord in toImage of upper-left corner of receiving square
     * @param {number} toY y-coord in toImage of upper-left corner of receiving square
     * @param {number} fromX x-coord in this image of upper-left corner of source square
     * @param {number} fromY y-coord in this image of upper-left corner of source square
     * @return {BitmapImage} The present image to allow for chaining.
     */
    blit(i, a, r, o, n, s, l) {
      if (o + s > this.bitmap.width)
        throw new Error("copy exceeds width of source bitmap");
      if (a + s > i.bitmap.width)
        throw new Error("copy exceeds width of target bitmap");
      if (n + l > this.bitmap.height)
        throw new Error("copy exceeds height of source bitmap");
      if (r + l > i.bitmap.height)
        throw new Erro("copy exceeds height of target bitmap");
      const h = this.bitmap.data, u = i.bitmap.data, d = this.bitmap.width * 4, m = i.bitmap.width * 4, p = s * 4;
      let g = n * d + o * 4, M = r * m + a * 4;
      for (; --l >= 0; )
        h.copy(u, M, g, g + p), g += d, M += m;
      return this;
    }
    /**
     * Fills the image with a single color.
     * 
     * @param {number} rgba Color with which to fill image, expressed as a singlenumber in the form 0xRRGGBBAA, where AA is 0x00 for transparent and any other value for opaque.
     * @return {BitmapImage} The present image to allow for chaining.
     */
    fillRGBA(i) {
      const a = this.bitmap.data, r = this.bitmap.height * 4;
      let o = 0;
      for (; o < r; )
        a.writeUInt32BE(i, o), o += 4;
      for (; o < a.length; )
        a.copy(a, o, 0, r), o += r;
      return this;
    }
    /**
     * Gets the RGBA number of the pixel at the given coordinate in the form 0xRRGGBBAA, where AA is the alpha value, with alpha 0x00 encoding to transparency in GIFs.
     * 
     * @param {number} x x-coord of pixel
     * @param {number} y y-coord of pixel
     * @return {number} RGBA of pixel in 0xRRGGBBAA form
     */
    getRGBA(i, a) {
      const r = (a * this.bitmap.width + i) * 4;
      return this.bitmap.data.readUInt32BE(r);
    }
    /**
     * Gets a set of all RGBA colors found within the image.
     * 
     * @return {Set} Set of all RGBA colors that the image contains.
     */
    getRGBASet() {
      const i = /* @__PURE__ */ new Set(), a = this.bitmap.data;
      for (let r = 0; r < a.length; r += 4)
        i.add(a.readUInt32BE(r, !0));
      return i;
    }
    /**
     * Converts the image to greyscale using inferred Adobe metrics.
     * 
     * @return {BitmapImage} The present image to allow for chaining.
     */
    greyscale() {
      const i = this.bitmap.data;
      return this.scan(0, 0, this.bitmap.width, this.bitmap.height, (a, r, o) => {
        const n = Math.round(
          0.299 * i[o] + 0.587 * i[o + 1] + 0.114 * i[o + 2]
        );
        i[o] = n, i[o + 1] = n, i[o + 2] = n;
      }), this;
    }
    /**
     * Reframes the image as if placing a frame around the original image and replacing the original image with the newly framed image. When the new frame is strictly within the boundaries of the original image, this method crops the image. When any of the new boundaries exceed those of the original image, the `fillRGBA` must be provided to indicate the color with which to fill the extra space added to the image.
     * 
     * @param {number} xOffset The x-coord offset of the upper-left pixel of the desired image relative to the present image.
     * @param {number} yOffset The y-coord offset of the upper-left pixel of the desired image relative to the present image.
     * @param {number} width The width of the new image after reframing
     * @param {number} height The height of the new image after reframing
     * @param {number} fillRGBA The color with which to fill space added to the image as a result of the reframing, in 0xRRGGBBAA format, where AA is 0x00 to indicate transparent and a non-zero value to indicate opaque. This parameter is only required when the reframing exceeds the original boundaries (i.e. does not simply perform a crop).
     * @return {BitmapImage} The present image to allow for chaining.
     */
    reframe(i, a, r, o, n) {
      const s = i < 0 ? 0 : i, l = a < 0 ? 0 : a, h = r + s > this.bitmap.width ? this.bitmap.width - s : r, u = o + l > this.bitmap.height ? this.bitmap.height - l : o, d = i < 0 ? -i : 0, m = a < 0 ? -a : 0;
      let p;
      if (n === void 0) {
        if (s !== i || l != a || h !== r || u !== o)
          throw new GifError("fillRGBA required for this reframing");
        p = new e(r, o);
      } else
        p = new e(r, o, n);
      return this.blit(p, d, m, s, l, h, u), this.bitmap = p.bitmap, this;
    }
    /**
     * Scales the image size up by an integer factor. Each pixel of the original image becomes a square of the same color in the new image having a size of `factor` x `factor` pixels.
     * 
     * @param {number} factor The factor by which to scale up the image. Must be an integer >= 1.
     * @return {BitmapImage} The present image to allow for chaining.
     */
    scale(i) {
      if (i === 1)
        return;
      if (!Number.isInteger(i) || i < 1)
        throw new Error("the scale must be an integer >= 1");
      const a = this.bitmap.width, r = this.bitmap.height, o = a * i * 4, n = this.bitmap.data, s = new Buffer(r * o * i);
      let l = 0, h, u = 0;
      for (let d = 0; d < r; ++d) {
        h = u;
        for (let m = 0; m < a; ++m) {
          const p = n.readUInt32BE(l, !0);
          for (let g = 0; g < i; ++g)
            s.writeUInt32BE(p, u), u += 4;
          l += 4;
        }
        for (let m = 1; m < i; ++m)
          s.copy(s, u, h, u), u += o, h += o;
      }
      return this.bitmap = {
        width: a * i,
        height: r * i,
        data: s
      }, this;
    }
    /**
     * Scans all coordinates of the image, handing each in turn to the provided handler function.
     *
     * @param {function} scanHandler A function(x: number, y: number, bi: number) to be called for each pixel of the image with that pixel's x-coord, y-coord, and index into the `data` buffer. The function accesses the pixel at this coordinate by accessing the `this.data` at index `bi`.
     * @see scanAllIndexes
     */
    scanAllCoords(i) {
      const a = this.bitmap.width, r = this.bitmap.data.length;
      let o = 0, n = 0;
      for (let s = 0; s < r; s += 4)
        i(o, n, s), ++o === a && (o = 0, ++n);
    }
    /**
     * Scans all pixels of the image, handing the index of each in turn to the provided handler function. Runs a bit faster than `scanAllCoords()`, should the handler not need pixel coordinates.
     *
     * @param {function} scanHandler A function(bi: number) to be called for each pixel of the image with that pixel's index into the `data` buffer. The pixels is found at index 'bi' within `this.data`.
     * @see scanAllCoords
     */
    scanAllIndexes(i) {
      const a = this.bitmap.data.length;
      for (let r = 0; r < a; r += 4)
        i(r);
    }
  }
  return bitmapimage = e, bitmapimage;
}
var gif$1 = {}, hasRequiredGif;
function requireGif() {
  if (hasRequiredGif) return gif$1;
  hasRequiredGif = 1;
  class e {
    // width - width of GIF in pixels
    // height - height of GIF in pixels
    // loops - 0 = unending; (n > 0) = iterate n times
    // usesTransparency - whether any frames have transparent pixels
    // colorScope - scope of color tables in GIF
    // frames - array of frames
    // buffer - GIF-formatted data
    /**
     * Gif is a class representing an encoded GIF. It is intended to be a read-only representation of a byte-encoded GIF. Only encoders and decoders should be creating instances of this class.
     * 
     * Property | Description
     * --- | ---
     * width | width of the GIF at its widest
     * height | height of the GIF at its highest
     * loops | the number of times the GIF should loop before stopping; 0 => loop indefinitely
     * usesTransparency | boolean indicating whether at least one frame contains at least one transparent pixel
     * colorScope | the scope of the color tables as encoded within the GIF; either Gif.GlobalColorsOnly (== 1) or Gif.LocalColorsOnly (== 2).
     * frames | a array of GifFrame instances, one for each frame of the GIF
     * buffer | a Buffer holding the encoding's byte data
     * 
     * Its constructor should only ever be called by the GIF encoder or decoder.
     *
     * @param {Buffer} buffer A Buffer containing the encoded bytes
     * @param {GifFrame[]} frames Array of frames found in the encoding
     * @param {object} spec Properties of the encoding as listed above
     */
    constructor(a, r, o) {
      this.width = o.width, this.height = o.height, this.loops = o.loops, this.usesTransparency = o.usesTransparency, this.colorScope = o.colorScope, this.frames = r, this.buffer = a;
    }
  }
  e.GlobalColorsPreferred = 0, e.GlobalColorsOnly = 1, e.LocalColorsOnly = 2;
  class t extends Error {
    /**
     * GifError is a class representing a GIF-related error
     * 
     * @param {string|Error} messageOrError
     */
    constructor(a) {
      super(a), a instanceof Error && (this.stack = "Gif" + a.stack);
    }
  }
  return gif$1.Gif = e, gif$1.GifError = t, gif$1;
}
var gifcodec = {}, gifutil = {}, imageQ, hasRequiredImageQ;
function requireImageQ() {
  if (hasRequiredImageQ) return imageQ;
  hasRequiredImageQ = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.prototype.hasOwnProperty, r = (f, T, N) => T in f ? e(f, T, { enumerable: !0, configurable: !0, writable: !0, value: N }) : f[T] = N, o = (f) => e(f, "__esModule", { value: !0 }), n = (f, T) => {
    for (var N in T)
      e(f, N, { get: T[N], enumerable: !0 });
  }, s = (f, T, N, G) => {
    if (T && typeof T == "object" || typeof T == "function")
      for (let X of i(T))
        !a.call(f, X) && N && e(f, X, { get: () => T[X], enumerable: !(G = t(T, X)) || G.enumerable });
    return f;
  }, l = /* @__PURE__ */ ((f) => (T, N) => f && f.get(T) || (N = s(o({}), T, 1), f && f.set(T, N), N))(typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : 0), h = (f, T, N) => (r(f, typeof T != "symbol" ? T + "" : T, N), N), u = {};
  n(u, {
    applyPalette: () => Wt,
    applyPaletteSync: () => jt,
    buildPalette: () => Ht,
    buildPaletteSync: () => Gt,
    constants: () => d,
    conversion: () => k,
    distance: () => U,
    image: () => pt,
    palette: () => ze,
    quality: () => Et,
    utils: () => Ke
  });
  var d = {};
  n(d, {
    bt709: () => m
  });
  var m = {};
  n(m, {
    Y: () => p,
    x: () => g,
    y: () => M
  });
  var p = /* @__PURE__ */ ((f) => (f[f.RED = 0.2126] = "RED", f[f.GREEN = 0.7152] = "GREEN", f[f.BLUE = 0.0722] = "BLUE", f[f.WHITE = 1] = "WHITE", f))(p || {}), g = /* @__PURE__ */ ((f) => (f[f.RED = 0.64] = "RED", f[f.GREEN = 0.3] = "GREEN", f[f.BLUE = 0.15] = "BLUE", f[f.WHITE = 0.3127] = "WHITE", f))(g || {}), M = /* @__PURE__ */ ((f) => (f[f.RED = 0.33] = "RED", f[f.GREEN = 0.6] = "GREEN", f[f.BLUE = 0.06] = "BLUE", f[f.WHITE = 0.329] = "WHITE", f))(M || {}), k = {};
  n(k, {
    lab2rgb: () => W,
    lab2xyz: () => ke,
    rgb2hsl: () => P,
    rgb2lab: () => ie,
    rgb2xyz: () => v,
    xyz2lab: () => J,
    xyz2rgb: () => H
  });
  function w(f) {
    return f > 0.04045 ? ((f + 0.055) / 1.055) ** 2.4 : f / 12.92;
  }
  function v(f, T, N) {
    return f = w(f / 255), T = w(T / 255), N = w(N / 255), {
      x: f * 0.4124 + T * 0.3576 + N * 0.1805,
      y: f * 0.2126 + T * 0.7152 + N * 0.0722,
      z: f * 0.0193 + T * 0.1192 + N * 0.9505
    };
  }
  var C = {};
  n(C, {
    degrees2radians: () => B,
    inRange0to255: () => F,
    inRange0to255Rounded: () => E,
    intInRange: () => b,
    max3: () => A,
    min3: () => S,
    stableSort: () => Z
  });
  function B(f) {
    return f * (Math.PI / 180);
  }
  function A(f, T, N) {
    let G = f;
    return G < T && (G = T), G < N && (G = N), G;
  }
  function S(f, T, N) {
    let G = f;
    return G > T && (G = T), G > N && (G = N), G;
  }
  function b(f, T, N) {
    return f > N && (f = N), f < T && (f = T), f | 0;
  }
  function E(f) {
    return f = Math.round(f), f > 255 ? f = 255 : f < 0 && (f = 0), f;
  }
  function F(f) {
    return f > 255 ? f = 255 : f < 0 && (f = 0), f;
  }
  function Z(f, T) {
    const N = typeof f[0];
    let G;
    if (N === "number" || N === "string") {
      const X = /* @__PURE__ */ Object.create(null);
      for (let le = 0, ne = f.length; le < ne; le++) {
        const de = f[le];
        X[de] || X[de] === 0 || (X[de] = le);
      }
      G = f.sort((le, ne) => T(le, ne) || X[le] - X[ne]);
    } else {
      const X = f.slice(0);
      G = f.sort((le, ne) => T(le, ne) || X.indexOf(le) - X.indexOf(ne));
    }
    return G;
  }
  function P(f, T, N) {
    const G = S(f, T, N), X = A(f, T, N), le = X - G, ne = (G + X) / 510;
    let de = 0;
    ne > 0 && ne < 1 && (de = le / (ne < 0.5 ? X + G : 510 - X - G));
    let Me = 0;
    return le > 0 && (X === f ? Me = (T - N) / le : X === T ? Me = 2 + (N - f) / le : Me = 4 + (f - T) / le, Me *= 60, Me < 0 && (Me += 360)), { h: Me, s: de, l: ne };
  }
  var D = 0.95047, L = 1, q = 1.08883;
  function j(f) {
    return f > 8856e-6 ? f ** (1 / 3) : 7.787 * f + 16 / 116;
  }
  function J(f, T, N) {
    if (f = j(f / D), T = j(T / L), N = j(N / q), 116 * T - 16 < 0)
      throw new Error("xxx");
    return {
      L: Math.max(0, 116 * T - 16),
      a: 500 * (f - T),
      b: 200 * (T - N)
    };
  }
  function ie(f, T, N) {
    const G = v(f, T, N);
    return J(G.x, G.y, G.z);
  }
  var V = 0.95047, Q = 1, ee = 1.08883;
  function xe(f) {
    return f > 0.206893034 ? f ** 3 : (f - 16 / 116) / 7.787;
  }
  function ke(f, T, N) {
    const G = (f + 16) / 116, X = T / 500 + G, le = G - N / 200;
    return {
      x: V * xe(X),
      y: Q * xe(G),
      z: ee * xe(le)
    };
  }
  function ve(f) {
    return f > 31308e-7 ? 1.055 * f ** (1 / 2.4) - 0.055 : 12.92 * f;
  }
  function H(f, T, N) {
    const G = ve(f * 3.2406 + T * -1.5372 + N * -0.4986), X = ve(f * -0.9689 + T * 1.8758 + N * 0.0415), le = ve(f * 0.0557 + T * -0.204 + N * 1.057);
    return {
      r: E(G * 255),
      g: E(X * 255),
      b: E(le * 255)
    };
  }
  function W(f, T, N) {
    const G = ke(f, T, N);
    return H(G.x, G.y, G.z);
  }
  var U = {};
  n(U, {
    AbstractDistanceCalculator: () => re,
    AbstractEuclidean: () => ye,
    AbstractManhattan: () => Ce,
    CIE94GraphicArts: () => Ae,
    CIE94Textiles: () => we,
    CIEDE2000: () => ue,
    CMetric: () => ce,
    Euclidean: () => Se,
    EuclideanBT709: () => Ie,
    EuclideanBT709NoAlpha: () => Be,
    Manhattan: () => se,
    ManhattanBT709: () => Pe,
    ManhattanNommyde: () => Fe,
    PNGQuant: () => Te
  });
  var re = class {
    constructor() {
      h(this, "_maxDistance"), h(this, "_whitePoint"), this._setDefaults(), this.setWhitePoint(255, 255, 255, 255);
    }
    setWhitePoint(f, T, N, G) {
      this._whitePoint = {
        r: f > 0 ? 255 / f : 0,
        g: T > 0 ? 255 / T : 0,
        b: N > 0 ? 255 / N : 0,
        a: G > 0 ? 255 / G : 0
      }, this._maxDistance = this.calculateRaw(f, T, N, G, 0, 0, 0, 0);
    }
    calculateNormalized(f, T) {
      return this.calculateRaw(f.r, f.g, f.b, f.a, T.r, T.g, T.b, T.a) / this._maxDistance;
    }
  }, ae = class extends re {
    calculateRaw(f, T, N, G, X, le, ne, de) {
      const Me = ie(F(f * this._whitePoint.r), F(T * this._whitePoint.g), F(N * this._whitePoint.b)), Re = ie(F(X * this._whitePoint.r), F(le * this._whitePoint.g), F(ne * this._whitePoint.b)), Ee = Me.L - Re.L, De = Me.a - Re.a, Ze = Me.b - Re.b, et = Math.sqrt(Me.a * Me.a + Me.b * Me.b), it = Math.sqrt(Re.a * Re.a + Re.b * Re.b), $e = et - it;
      let Qe = De * De + Ze * Ze - $e * $e;
      Qe = Qe < 0 ? 0 : Math.sqrt(Qe);
      const at = (de - G) * this._whitePoint.a * this._kA;
      return Math.sqrt((Ee / this._Kl) ** 2 + ($e / (1 + this._K1 * et)) ** 2 + (Qe / (1 + this._K2 * et)) ** 2 + at ** 2);
    }
  }, we = class extends ae {
    _setDefaults() {
      this._Kl = 2, this._K1 = 0.048, this._K2 = 0.014, this._kA = 0.25 * 50 / 255;
    }
  }, Ae = class extends ae {
    _setDefaults() {
      this._Kl = 1, this._K1 = 0.045, this._K2 = 0.015, this._kA = 0.25 * 100 / 255;
    }
  }, he = class extends re {
    _setDefaults() {
    }
    static _calculatehp(f, T) {
      const N = Math.atan2(f, T);
      return N >= 0 ? N : N + he._deg360InRad;
    }
    static _calculateRT(f, T) {
      const N = T ** 7, G = 2 * Math.sqrt(N / (N + he._pow25to7)), X = he._deg30InRad * Math.exp(-(((f - he._deg275InRad) / he._deg25InRad) ** 2));
      return -Math.sin(2 * X) * G;
    }
    static _calculateT(f) {
      return 1 - 0.17 * Math.cos(f - he._deg30InRad) + 0.24 * Math.cos(f * 2) + 0.32 * Math.cos(f * 3 + he._deg6InRad) - 0.2 * Math.cos(f * 4 - he._deg63InRad);
    }
    static _calculate_ahp(f, T, N, G) {
      const X = N + G;
      return f === 0 ? X : T <= he._deg180InRad ? X / 2 : X < he._deg360InRad ? (X + he._deg360InRad) / 2 : (X - he._deg360InRad) / 2;
    }
    static _calculate_dHp(f, T, N, G) {
      let X;
      return f === 0 ? X = 0 : T <= he._deg180InRad ? X = N - G : N <= G ? X = N - G + he._deg360InRad : X = N - G - he._deg360InRad, 2 * Math.sqrt(f) * Math.sin(X / 2);
    }
    calculateRaw(f, T, N, G, X, le, ne, de) {
      const Me = ie(F(f * this._whitePoint.r), F(T * this._whitePoint.g), F(N * this._whitePoint.b)), Re = ie(F(X * this._whitePoint.r), F(le * this._whitePoint.g), F(ne * this._whitePoint.b)), Ee = (de - G) * this._whitePoint.a * he._kA, De = this.calculateRawInLab(Me, Re);
      return Math.sqrt(De + Ee * Ee);
    }
    calculateRawInLab(f, T) {
      const N = f.L, G = f.a, X = f.b, le = T.L, ne = T.a, de = T.b, Me = Math.sqrt(G * G + X * X), Re = Math.sqrt(ne * ne + de * de), Ee = ((Me + Re) / 2) ** 7, De = 0.5 * (1 - Math.sqrt(Ee / (Ee + he._pow25to7))), Ze = (1 + De) * G, et = (1 + De) * ne, it = Math.sqrt(Ze * Ze + X * X), $e = Math.sqrt(et * et + de * de), Qe = it * $e, at = he._calculatehp(X, Ze), nt = he._calculatehp(de, et), lt = Math.abs(at - nt), _t = le - N, gt = $e - it, bt = he._calculate_dHp(Qe, lt, nt, at), Xe = he._calculate_ahp(Qe, lt, at, nt), It = he._calculateT(Xe), Tt = (it + $e) / 2, Nt = ((N + le) / 2 - 50) ** 2, St = 1 + 0.015 * Nt / Math.sqrt(20 + Nt), Bt = 1 + 0.045 * Tt, Pt = 1 + 0.015 * It * Tt, Mt = he._calculateRT(Xe, Tt), kt = _t / St, qt = gt / Bt, Ut = bt / Pt;
      return kt ** 2 + qt ** 2 + Ut ** 2 + Mt * qt * Ut;
    }
  }, ue = he;
  h(ue, "_kA", 0.25 * 100 / 255), h(ue, "_pow25to7", 25 ** 7), h(ue, "_deg360InRad", B(360)), h(ue, "_deg180InRad", B(180)), h(ue, "_deg30InRad", B(30)), h(ue, "_deg6InRad", B(6)), h(ue, "_deg63InRad", B(63)), h(ue, "_deg275InRad", B(275)), h(ue, "_deg25InRad", B(25));
  var ce = class extends re {
    calculateRaw(f, T, N, G, X, le, ne, de) {
      const Me = (f + X) / 2 * this._whitePoint.r, Re = (f - X) * this._whitePoint.r, Ee = (T - le) * this._whitePoint.g, De = (N - ne) * this._whitePoint.b, Ze = ((512 + Me) * Re * Re >> 8) + 4 * Ee * Ee + ((767 - Me) * De * De >> 8), et = (de - G) * this._whitePoint.a;
      return Math.sqrt(Ze + et * et);
    }
    _setDefaults() {
    }
  }, ye = class extends re {
    calculateRaw(f, T, N, G, X, le, ne, de) {
      const Me = X - f, Re = le - T, Ee = ne - N, De = de - G;
      return Math.sqrt(this._kR * Me * Me + this._kG * Re * Re + this._kB * Ee * Ee + this._kA * De * De);
    }
  }, Se = class extends ye {
    _setDefaults() {
      this._kR = 1, this._kG = 1, this._kB = 1, this._kA = 1;
    }
  }, Ie = class extends ye {
    _setDefaults() {
      this._kR = 0.2126, this._kG = 0.7152, this._kB = 0.0722, this._kA = 1;
    }
  }, Be = class extends ye {
    _setDefaults() {
      this._kR = 0.2126, this._kG = 0.7152, this._kB = 0.0722, this._kA = 0;
    }
  }, Ce = class extends re {
    calculateRaw(f, T, N, G, X, le, ne, de) {
      let Me = X - f, Re = le - T, Ee = ne - N, De = de - G;
      return Me < 0 && (Me = 0 - Me), Re < 0 && (Re = 0 - Re), Ee < 0 && (Ee = 0 - Ee), De < 0 && (De = 0 - De), this._kR * Me + this._kG * Re + this._kB * Ee + this._kA * De;
    }
  }, se = class extends Ce {
    _setDefaults() {
      this._kR = 1, this._kG = 1, this._kB = 1, this._kA = 1;
    }
  }, Fe = class extends Ce {
    _setDefaults() {
      this._kR = 0.4984, this._kG = 0.8625, this._kB = 0.2979, this._kA = 1;
    }
  }, Pe = class extends Ce {
    _setDefaults() {
      this._kR = 0.2126, this._kG = 0.7152, this._kB = 0.0722, this._kA = 1;
    }
  }, Te = class extends re {
    calculateRaw(f, T, N, G, X, le, ne, de) {
      const Me = (de - G) * this._whitePoint.a;
      return this._colordifferenceCh(f * this._whitePoint.r, X * this._whitePoint.r, Me) + this._colordifferenceCh(T * this._whitePoint.g, le * this._whitePoint.g, Me) + this._colordifferenceCh(N * this._whitePoint.b, ne * this._whitePoint.b, Me);
    }
    _colordifferenceCh(f, T, N) {
      const G = f - T, X = G + N;
      return G * G + X * X;
    }
    _setDefaults() {
    }
  }, ze = {};
  n(ze, {
    AbstractPaletteQuantizer: () => We,
    ColorHistogram: () => K,
    NeuQuant: () => me,
    NeuQuantFloat: () => fe,
    RGBQuant: () => Ye,
    WuColorCube: () => rt,
    WuQuant: () => ht
  });
  var We = class {
    quantizeSync() {
      for (const f of this.quantize())
        if (f.palette)
          return f.palette;
      throw new Error("unreachable");
    }
  }, He = class {
    constructor() {
      h(this, "r"), h(this, "g"), h(this, "b"), h(this, "a"), h(this, "uint32"), h(this, "rgba"), this.uint32 = -1 >>> 0, this.r = this.g = this.b = this.a = 0, this.rgba = new Array(4), this.rgba[0] = 0, this.rgba[1] = 0, this.rgba[2] = 0, this.rgba[3] = 0;
    }
    static createByQuadruplet(f) {
      const T = new He();
      return T.r = f[0] | 0, T.g = f[1] | 0, T.b = f[2] | 0, T.a = f[3] | 0, T._loadUINT32(), T._loadQuadruplet(), T;
    }
    static createByRGBA(f, T, N, G) {
      const X = new He();
      return X.r = f | 0, X.g = T | 0, X.b = N | 0, X.a = G | 0, X._loadUINT32(), X._loadQuadruplet(), X;
    }
    static createByUint32(f) {
      const T = new He();
      return T.uint32 = f >>> 0, T._loadRGBA(), T._loadQuadruplet(), T;
    }
    from(f) {
      this.r = f.r, this.g = f.g, this.b = f.b, this.a = f.a, this.uint32 = f.uint32, this.rgba[0] = f.r, this.rgba[1] = f.g, this.rgba[2] = f.b, this.rgba[3] = f.a;
    }
    getLuminosity(f) {
      let T = this.r, N = this.g, G = this.b;
      return f && (T = Math.min(255, 255 - this.a + this.a * T / 255), N = Math.min(255, 255 - this.a + this.a * N / 255), G = Math.min(255, 255 - this.a + this.a * G / 255)), T * 0.2126 + N * 0.7152 + G * 0.0722;
    }
    _loadUINT32() {
      this.uint32 = (this.a << 24 | this.b << 16 | this.g << 8 | this.r) >>> 0;
    }
    _loadRGBA() {
      this.r = this.uint32 & 255, this.g = this.uint32 >>> 8 & 255, this.b = this.uint32 >>> 16 & 255, this.a = this.uint32 >>> 24 & 255;
    }
    _loadQuadruplet() {
      this.rgba[0] = this.r, this.rgba[1] = this.g, this.rgba[2] = this.b, this.rgba[3] = this.a;
    }
  }, Ne = class {
    constructor() {
      h(this, "_pointArray"), h(this, "_width"), h(this, "_height"), this._width = 0, this._height = 0, this._pointArray = [];
    }
    getWidth() {
      return this._width;
    }
    getHeight() {
      return this._height;
    }
    setWidth(f) {
      this._width = f;
    }
    setHeight(f) {
      this._height = f;
    }
    getPointArray() {
      return this._pointArray;
    }
    clone() {
      const f = new Ne();
      f._width = this._width, f._height = this._height;
      for (let T = 0, N = this._pointArray.length; T < N; T++)
        f._pointArray[T] = He.createByUint32(this._pointArray[T].uint32 | 0);
      return f;
    }
    toUint32Array() {
      const f = this._pointArray.length, T = new Uint32Array(f);
      for (let N = 0; N < f; N++)
        T[N] = this._pointArray[N].uint32;
      return T;
    }
    toUint8Array() {
      return new Uint8Array(this.toUint32Array().buffer);
    }
    static fromHTMLImageElement(f) {
      const T = f.naturalWidth, N = f.naturalHeight, G = document.createElement("canvas");
      return G.width = T, G.height = N, G.getContext("2d").drawImage(f, 0, 0, T, N, 0, 0, T, N), Ne.fromHTMLCanvasElement(G);
    }
    static fromHTMLCanvasElement(f) {
      const T = f.width, N = f.height, X = f.getContext("2d").getImageData(0, 0, T, N);
      return Ne.fromImageData(X);
    }
    static fromImageData(f) {
      const T = f.width, N = f.height;
      return Ne.fromUint8Array(f.data, T, N);
    }
    static fromUint8Array(f, T, N) {
      switch (Object.prototype.toString.call(f)) {
        case "[object Uint8ClampedArray]":
        case "[object Uint8Array]":
          break;
        default:
          f = new Uint8Array(f);
      }
      const G = new Uint32Array(f.buffer);
      return Ne.fromUint32Array(G, T, N);
    }
    static fromUint32Array(f, T, N) {
      const G = new Ne();
      G._width = T, G._height = N;
      for (let X = 0, le = f.length; X < le; X++)
        G._pointArray[X] = He.createByUint32(f[X] | 0);
      return G;
    }
    static fromBuffer(f, T, N) {
      const G = new Uint32Array(f.buffer, f.byteOffset, f.byteLength / Uint32Array.BYTES_PER_ELEMENT);
      return Ne.fromUint32Array(G, T, N);
    }
  }, Ge = 10;
  function Le(f, T) {
    const G = 360 / T, X = G / 2;
    for (let le = 1, ne = G - X; le < T; le++, ne += G)
      if (f >= ne && f < ne + G)
        return le;
    return 0;
  }
  var Oe = class {
    constructor() {
      h(this, "_pointContainer"), h(this, "_pointArray", []), h(this, "_i32idx", {}), this._pointContainer = new Ne(), this._pointContainer.setHeight(1), this._pointArray = this._pointContainer.getPointArray();
    }
    add(f) {
      this._pointArray.push(f), this._pointContainer.setWidth(this._pointArray.length);
    }
    has(f) {
      for (let T = this._pointArray.length - 1; T >= 0; T--)
        if (f.uint32 === this._pointArray[T].uint32)
          return !0;
      return !1;
    }
    getNearestColor(f, T) {
      return this._pointArray[this._getNearestIndex(f, T) | 0];
    }
    getPointContainer() {
      return this._pointContainer;
    }
    _nearestPointFromCache(f) {
      return typeof this._i32idx[f] == "number" ? this._i32idx[f] : -1;
    }
    _getNearestIndex(f, T) {
      let N = this._nearestPointFromCache("" + T.uint32);
      if (N >= 0)
        return N;
      let G = Number.MAX_VALUE;
      N = 0;
      for (let X = 0, le = this._pointArray.length; X < le; X++) {
        const ne = this._pointArray[X], de = f.calculateRaw(T.r, T.g, T.b, T.a, ne.r, ne.g, ne.b, ne.a);
        de < G && (G = de, N = X);
      }
      return this._i32idx[T.uint32] = N, N;
    }
    sort() {
      this._i32idx = {}, this._pointArray.sort((f, T) => {
        const N = P(f.r, f.g, f.b), G = P(T.r, T.g, T.b), X = f.r === f.g && f.g === f.b ? 0 : 1 + Le(N.h, Ge), ne = (T.r === T.g && T.g === T.b ? 0 : 1 + Le(G.h, Ge)) - X;
        if (ne)
          return -ne;
        const de = f.getLuminosity(!0), Me = T.getLuminosity(!0);
        if (Me - de !== 0)
          return Me - de;
        const Re = (G.s * 100 | 0) - (N.s * 100 | 0);
        return Re ? -Re : 0;
      });
    }
  }, Ke = {};
  n(Ke, {
    HueStatistics: () => ge,
    Palette: () => Oe,
    Point: () => He,
    PointContainer: () => Ne,
    ProgressTracker: () => be,
    arithmetic: () => C
  });
  var O = class {
    constructor() {
      h(this, "num", 0), h(this, "cols", []);
    }
  }, ge = class {
    constructor(f, T) {
      h(this, "_numGroups"), h(this, "_minCols"), h(this, "_stats"), h(this, "_groupsFull"), this._numGroups = f, this._minCols = T, this._stats = [];
      for (let N = 0; N <= f; N++)
        this._stats[N] = new O();
      this._groupsFull = 0;
    }
    check(f) {
      this._groupsFull === this._numGroups + 1 && (this.check = () => {
      });
      const T = f & 255, N = f >>> 8 & 255, G = f >>> 16 & 255, X = T === N && N === G ? 0 : 1 + Le(P(T, N, G).h, this._numGroups), le = this._stats[X], ne = this._minCols;
      le.num++, !(le.num > ne) && (le.num === ne && this._groupsFull++, le.num <= ne && this._stats[X].cols.push(f));
    }
    injectIntoDictionary(f) {
      for (let T = 0; T <= this._numGroups; T++)
        this._stats[T].num <= this._minCols && this._stats[T].cols.forEach((N) => {
          f[N] ? f[N]++ : f[N] = 1;
        });
    }
    injectIntoArray(f) {
      for (let T = 0; T <= this._numGroups; T++)
        this._stats[T].num <= this._minCols && this._stats[T].cols.forEach((N) => {
          f.indexOf(N) === -1 && f.push(N);
        });
    }
  }, oe = class {
    constructor(f, T) {
      h(this, "progress"), h(this, "_step"), h(this, "_range"), h(this, "_last"), h(this, "_progressRange"), this._range = f, this._progressRange = T, this._step = Math.max(1, this._range / (oe.steps + 1) | 0), this._last = -this._step, this.progress = 0;
    }
    shouldNotify(f) {
      return f - this._last >= this._step ? (this._last = f, this.progress = Math.min(this._progressRange * this._last / this._range, this._progressRange), !0) : !1;
    }
  }, be = oe;
  h(be, "steps", 100);
  var $ = 3, pe = class {
    constructor(f) {
      h(this, "r"), h(this, "g"), h(this, "b"), h(this, "a"), this.r = this.g = this.b = this.a = f;
    }
    toPoint() {
      return He.createByRGBA(this.r >> $, this.g >> $, this.b >> $, this.a >> $);
    }
    subtract(f, T, N, G) {
      this.r -= f | 0, this.g -= T | 0, this.b -= N | 0, this.a -= G | 0;
    }
  }, I = class extends We {
    constructor(f, T = 256) {
      super(), h(this, "_pointArray"), h(this, "_networkSize"), h(this, "_network"), h(this, "_sampleFactor"), h(this, "_radPower"), h(this, "_freq"), h(this, "_bias"), h(this, "_distance"), this._distance = f, this._pointArray = [], this._sampleFactor = 1, this._networkSize = T, this._distance.setWhitePoint(255 << $, 255 << $, 255 << $, 255 << $);
    }
    sample(f) {
      this._pointArray = this._pointArray.concat(f.getPointArray());
    }
    *quantize() {
      this._init(), yield* this._learn(), yield {
        palette: this._buildPalette(),
        progress: 100
      };
    }
    _init() {
      this._freq = [], this._bias = [], this._radPower = [], this._network = [];
      for (let f = 0; f < this._networkSize; f++)
        this._network[f] = new pe((f << $ + 8) / this._networkSize | 0), this._freq[f] = I._initialBias / this._networkSize | 0, this._bias[f] = 0;
    }
    *_learn() {
      let f = this._sampleFactor;
      const T = this._pointArray.length;
      T < I._minpicturebytes && (f = 1);
      const N = 30 + (f - 1) / 3 | 0, G = T / f | 0;
      let X = G / I._nCycles | 0, le = I._initAlpha, ne = (this._networkSize >> 3) * I._radiusBias, de = ne >> I._radiusBiasShift;
      de <= 1 && (de = 0);
      for (let Ee = 0; Ee < de; Ee++)
        this._radPower[Ee] = le * ((de * de - Ee * Ee) * I._radBias / (de * de)) >>> 0;
      let Me;
      T < I._minpicturebytes ? Me = 1 : T % I._prime1 !== 0 ? Me = I._prime1 : T % I._prime2 !== 0 ? Me = I._prime2 : T % I._prime3 !== 0 ? Me = I._prime3 : Me = I._prime4;
      const Re = new be(G, 99);
      for (let Ee = 0, De = 0; Ee < G; ) {
        Re.shouldNotify(Ee) && (yield {
          progress: Re.progress
        });
        const Ze = this._pointArray[De], et = Ze.b << $, it = Ze.g << $, $e = Ze.r << $, Qe = Ze.a << $, at = this._contest(et, it, $e, Qe);
        if (this._alterSingle(le, at, et, it, $e, Qe), de !== 0 && this._alterNeighbour(de, at, et, it, $e, Qe), De += Me, De >= T && (De -= T), Ee++, X === 0 && (X = 1), Ee % X === 0) {
          le -= le / N | 0, ne -= ne / I._radiusDecrease | 0, de = ne >> I._radiusBiasShift, de <= 1 && (de = 0);
          for (let nt = 0; nt < de; nt++)
            this._radPower[nt] = le * ((de * de - nt * nt) * I._radBias / (de * de)) >>> 0;
        }
      }
    }
    _buildPalette() {
      const f = new Oe();
      return this._network.forEach((T) => {
        f.add(T.toPoint());
      }), f.sort(), f;
    }
    _alterNeighbour(f, T, N, G, X, le) {
      let ne = T - f;
      ne < -1 && (ne = -1);
      let de = T + f;
      de > this._networkSize && (de = this._networkSize);
      let Me = T + 1, Re = T - 1, Ee = 1;
      for (; Me < de || Re > ne; ) {
        const De = this._radPower[Ee++] / I._alphaRadBias;
        if (Me < de) {
          const Ze = this._network[Me++];
          Ze.subtract(De * (Ze.r - X), De * (Ze.g - G), De * (Ze.b - N), De * (Ze.a - le));
        }
        if (Re > ne) {
          const Ze = this._network[Re--];
          Ze.subtract(De * (Ze.r - X), De * (Ze.g - G), De * (Ze.b - N), De * (Ze.a - le));
        }
      }
    }
    _alterSingle(f, T, N, G, X, le) {
      f /= I._initAlpha;
      const ne = this._network[T];
      ne.subtract(f * (ne.r - X), f * (ne.g - G), f * (ne.b - N), f * (ne.a - le));
    }
    _contest(f, T, N, G) {
      const X = 1020 << $;
      let le = 2147483647, ne = le, de = -1, Me = de;
      for (let Re = 0; Re < this._networkSize; Re++) {
        const Ee = this._network[Re], De = this._distance.calculateNormalized(Ee, { r: N, g: T, b: f, a: G }) * X | 0;
        De < le && (le = De, de = Re);
        const Ze = De - (this._bias[Re] >> I._initialBiasShift - $);
        Ze < ne && (ne = Ze, Me = Re);
        const et = this._freq[Re] >> I._betaShift;
        this._freq[Re] -= et, this._bias[Re] += et << I._gammaShift;
      }
      return this._freq[de] += I._beta, this._bias[de] -= I._betaGamma, Me;
    }
  }, me = I;
  h(me, "_prime1", 499), h(me, "_prime2", 491), h(me, "_prime3", 487), h(me, "_prime4", 503), h(me, "_minpicturebytes", I._prime4), h(me, "_nCycles", 100), h(me, "_initialBiasShift", 16), h(me, "_initialBias", 1 << I._initialBiasShift), h(me, "_gammaShift", 10), h(me, "_betaShift", 10), h(me, "_beta", I._initialBias >> I._betaShift), h(me, "_betaGamma", I._initialBias << I._gammaShift - I._betaShift), h(me, "_radiusBiasShift", 6), h(me, "_radiusBias", 1 << I._radiusBiasShift), h(me, "_radiusDecrease", 30), h(me, "_alphaBiasShift", 10), h(me, "_initAlpha", 1 << I._alphaBiasShift), h(me, "_radBiasShift", 8), h(me, "_radBias", 1 << I._radBiasShift), h(me, "_alphaRadBiasShift", I._alphaBiasShift + I._radBiasShift), h(me, "_alphaRadBias", 1 << I._alphaRadBiasShift);
  var qe = 3, _ = class {
    constructor(f) {
      h(this, "r"), h(this, "g"), h(this, "b"), h(this, "a"), this.r = this.g = this.b = this.a = f;
    }
    toPoint() {
      return He.createByRGBA(this.r >> qe, this.g >> qe, this.b >> qe, this.a >> qe);
    }
    subtract(f, T, N, G) {
      this.r -= f, this.g -= T, this.b -= N, this.a -= G;
    }
  }, te = class extends We {
    constructor(f, T = 256) {
      super(), h(this, "_pointArray"), h(this, "_networkSize"), h(this, "_network"), h(this, "_sampleFactor"), h(this, "_radPower"), h(this, "_freq"), h(this, "_bias"), h(this, "_distance"), this._distance = f, this._pointArray = [], this._sampleFactor = 1, this._networkSize = T, this._distance.setWhitePoint(255 << qe, 255 << qe, 255 << qe, 255 << qe);
    }
    sample(f) {
      this._pointArray = this._pointArray.concat(f.getPointArray());
    }
    *quantize() {
      this._init(), yield* this._learn(), yield {
        palette: this._buildPalette(),
        progress: 100
      };
    }
    _init() {
      this._freq = [], this._bias = [], this._radPower = [], this._network = [];
      for (let f = 0; f < this._networkSize; f++)
        this._network[f] = new _((f << qe + 8) / this._networkSize), this._freq[f] = te._initialBias / this._networkSize, this._bias[f] = 0;
    }
    *_learn() {
      let f = this._sampleFactor;
      const T = this._pointArray.length;
      T < te._minpicturebytes && (f = 1);
      const N = 30 + (f - 1) / 3, G = T / f;
      let X = G / te._nCycles | 0, le = te._initAlpha, ne = (this._networkSize >> 3) * te._radiusBias, de = ne >> te._radiusBiasShift;
      de <= 1 && (de = 0);
      for (let Ee = 0; Ee < de; Ee++)
        this._radPower[Ee] = le * ((de * de - Ee * Ee) * te._radBias / (de * de));
      let Me;
      T < te._minpicturebytes ? Me = 1 : T % te._prime1 !== 0 ? Me = te._prime1 : T % te._prime2 !== 0 ? Me = te._prime2 : T % te._prime3 !== 0 ? Me = te._prime3 : Me = te._prime4;
      const Re = new be(G, 99);
      for (let Ee = 0, De = 0; Ee < G; ) {
        Re.shouldNotify(Ee) && (yield {
          progress: Re.progress
        });
        const Ze = this._pointArray[De], et = Ze.b << qe, it = Ze.g << qe, $e = Ze.r << qe, Qe = Ze.a << qe, at = this._contest(et, it, $e, Qe);
        if (this._alterSingle(le, at, et, it, $e, Qe), de !== 0 && this._alterNeighbour(de, at, et, it, $e, Qe), De += Me, De >= T && (De -= T), Ee++, X === 0 && (X = 1), Ee % X === 0) {
          le -= le / N, ne -= ne / te._radiusDecrease, de = ne >> te._radiusBiasShift, de <= 1 && (de = 0);
          for (let nt = 0; nt < de; nt++)
            this._radPower[nt] = le * ((de * de - nt * nt) * te._radBias / (de * de));
        }
      }
    }
    _buildPalette() {
      const f = new Oe();
      return this._network.forEach((T) => {
        f.add(T.toPoint());
      }), f.sort(), f;
    }
    _alterNeighbour(f, T, N, G, X, le) {
      let ne = T - f;
      ne < -1 && (ne = -1);
      let de = T + f;
      de > this._networkSize && (de = this._networkSize);
      let Me = T + 1, Re = T - 1, Ee = 1;
      for (; Me < de || Re > ne; ) {
        const De = this._radPower[Ee++] / te._alphaRadBias;
        if (Me < de) {
          const Ze = this._network[Me++];
          Ze.subtract(De * (Ze.r - X), De * (Ze.g - G), De * (Ze.b - N), De * (Ze.a - le));
        }
        if (Re > ne) {
          const Ze = this._network[Re--];
          Ze.subtract(De * (Ze.r - X), De * (Ze.g - G), De * (Ze.b - N), De * (Ze.a - le));
        }
      }
    }
    _alterSingle(f, T, N, G, X, le) {
      f /= te._initAlpha;
      const ne = this._network[T];
      ne.subtract(f * (ne.r - X), f * (ne.g - G), f * (ne.b - N), f * (ne.a - le));
    }
    _contest(f, T, N, G) {
      const X = 1020 << qe;
      let le = 2147483647, ne = le, de = -1, Me = de;
      for (let Re = 0; Re < this._networkSize; Re++) {
        const Ee = this._network[Re], De = this._distance.calculateNormalized(Ee, { r: N, g: T, b: f, a: G }) * X;
        De < le && (le = De, de = Re);
        const Ze = De - (this._bias[Re] >> te._initialBiasShift - qe);
        Ze < ne && (ne = Ze, Me = Re);
        const et = this._freq[Re] >> te._betaShift;
        this._freq[Re] -= et, this._bias[Re] += et << te._gammaShift;
      }
      return this._freq[de] += te._beta, this._bias[de] -= te._betaGamma, Me;
    }
  }, fe = te;
  h(fe, "_prime1", 499), h(fe, "_prime2", 491), h(fe, "_prime3", 487), h(fe, "_prime4", 503), h(fe, "_minpicturebytes", te._prime4), h(fe, "_nCycles", 100), h(fe, "_initialBiasShift", 16), h(fe, "_initialBias", 1 << te._initialBiasShift), h(fe, "_gammaShift", 10), h(fe, "_betaShift", 10), h(fe, "_beta", te._initialBias >> te._betaShift), h(fe, "_betaGamma", te._initialBias << te._gammaShift - te._betaShift), h(fe, "_radiusBiasShift", 6), h(fe, "_radiusBias", 1 << te._radiusBiasShift), h(fe, "_radiusDecrease", 30), h(fe, "_alphaBiasShift", 10), h(fe, "_initAlpha", 1 << te._alphaBiasShift), h(fe, "_radBiasShift", 8), h(fe, "_radBias", 1 << te._radBiasShift), h(fe, "_alphaRadBiasShift", te._alphaBiasShift + te._radBiasShift), h(fe, "_alphaRadBias", 1 << te._alphaRadBiasShift);
  var R = class {
    constructor(f, T) {
      h(this, "_method"), h(this, "_hueStats"), h(this, "_histogram"), h(this, "_initColors"), h(this, "_minHueCols"), this._method = f, this._minHueCols = T << 2, this._initColors = T << 2, this._hueStats = new ge(R._hueGroups, this._minHueCols), this._histogram = /* @__PURE__ */ Object.create(null);
    }
    sample(f) {
      switch (this._method) {
        case 1:
          this._colorStats1D(f);
          break;
        case 2:
          this._colorStats2D(f);
          break;
      }
    }
    getImportanceSortedColorsIDXI32() {
      const f = Z(Object.keys(this._histogram), (N, G) => this._histogram[G] - this._histogram[N]);
      if (f.length === 0)
        return [];
      let T;
      switch (this._method) {
        case 1:
          const N = Math.min(f.length, this._initColors), G = f[N - 1], X = this._histogram[G];
          T = f.slice(0, N);
          let le = N;
          const ne = f.length;
          for (; le < ne && this._histogram[f[le]] === X; )
            T.push(f[le++]);
          this._hueStats.injectIntoArray(T);
          break;
        case 2:
          T = f;
          break;
        default:
          throw new Error("Incorrect method");
      }
      return T.map((N) => +N);
    }
    _colorStats1D(f) {
      const T = this._histogram, N = f.getPointArray(), G = N.length;
      for (let X = 0; X < G; X++) {
        const le = N[X].uint32;
        this._hueStats.check(le), le in T ? T[le]++ : T[le] = 1;
      }
    }
    _colorStats2D(f) {
      const T = f.getWidth(), N = f.getHeight(), G = f.getPointArray(), X = R._boxSize[0], le = R._boxSize[1], ne = X * le, de = this._makeBoxes(T, N, X, le), Me = this._histogram;
      de.forEach((Re) => {
        let Ee = Math.round(Re.w * Re.h / ne) * R._boxPixels;
        Ee < 2 && (Ee = 2);
        const De = {};
        this._iterateBox(Re, T, (Ze) => {
          const et = G[Ze].uint32;
          this._hueStats.check(et), et in Me ? Me[et]++ : et in De ? ++De[et] >= Ee && (Me[et] = De[et]) : De[et] = 1;
        });
      }), this._hueStats.injectIntoDictionary(Me);
    }
    _iterateBox(f, T, N) {
      const G = f, X = G.y * T + G.x, le = (G.y + G.h - 1) * T + (G.x + G.w - 1), ne = T - G.w + 1;
      let de = 0, Me = X;
      do
        N.call(this, Me), Me += ++de % G.w === 0 ? ne : 1;
      while (Me <= le);
    }
    _makeBoxes(f, T, N, G) {
      const X = f % N, le = T % G, ne = f - X, de = T - le, Me = [];
      for (let Re = 0; Re < T; Re += G)
        for (let Ee = 0; Ee < f; Ee += N)
          Me.push({
            x: Ee,
            y: Re,
            w: Ee === ne ? X : N,
            h: Re === de ? le : G
          });
      return Me;
    }
  }, K = R;
  h(K, "_boxSize", [64, 64]), h(K, "_boxPixels", 2), h(K, "_hueGroups", 10);
  var _e = class {
    constructor(f, T, N) {
      h(this, "index"), h(this, "color"), h(this, "distance"), this.index = f, this.color = T, this.distance = N;
    }
  }, Ye = class extends We {
    constructor(f, T = 256, N = 2) {
      super(), h(this, "_colors"), h(this, "_initialDistance"), h(this, "_distanceIncrement"), h(this, "_histogram"), h(this, "_distance"), this._distance = f, this._colors = T, this._histogram = new K(N, T), this._initialDistance = 0.01, this._distanceIncrement = 5e-3;
    }
    sample(f) {
      this._histogram.sample(f);
    }
    *quantize() {
      const f = this._histogram.getImportanceSortedColorsIDXI32();
      if (f.length === 0)
        throw new Error("No colors in image");
      yield* this._buildPalette(f);
    }
    *_buildPalette(f) {
      const T = new Oe(), N = T.getPointContainer().getPointArray(), G = new Array(f.length);
      for (let Ee = 0; Ee < f.length; Ee++)
        N.push(He.createByUint32(f[Ee])), G[Ee] = 1;
      const X = N.length, le = [];
      let ne = X, de = this._initialDistance;
      const Me = new be(ne - this._colors, 99);
      for (; ne > this._colors; ) {
        le.length = 0;
        for (let Ee = 0; Ee < X; Ee++) {
          if (Me.shouldNotify(X - ne) && (yield {
            progress: Me.progress
          }), G[Ee] === 0)
            continue;
          const De = N[Ee];
          for (let Ze = Ee + 1; Ze < X; Ze++) {
            if (G[Ze] === 0)
              continue;
            const et = N[Ze], it = this._distance.calculateNormalized(De, et);
            it < de && (le.push(new _e(Ze, et, it)), G[Ze] = 0, ne--);
          }
        }
        de += ne > this._colors * 3 ? this._initialDistance : this._distanceIncrement;
      }
      if (ne < this._colors) {
        Z(le, (De, Ze) => Ze.distance - De.distance);
        let Ee = 0;
        for (; ne < this._colors && Ee < le.length; ) {
          const De = le[Ee];
          G[De.index] = 1, ne++, Ee++;
        }
      }
      let Re = N.length;
      for (let Ee = Re - 1; Ee >= 0; Ee--)
        G[Ee] === 0 && (Ee !== Re - 1 && (N[Ee] = N[Re - 1]), --Re);
      N.length = Re, T.sort(), yield {
        palette: T,
        progress: 100
      };
    }
  };
  function Ue(f) {
    const T = [];
    for (let N = 0; N < f; N++)
      T[N] = 0;
    return T;
  }
  function je(f, T, N, G) {
    const X = new Array(f);
    for (let le = 0; le < f; le++) {
      X[le] = new Array(T);
      for (let ne = 0; ne < T; ne++) {
        X[le][ne] = new Array(N);
        for (let de = 0; de < N; de++) {
          X[le][ne][de] = new Array(G);
          for (let Me = 0; Me < G; Me++)
            X[le][ne][de][Me] = 0;
        }
      }
    }
    return X;
  }
  function tt(f, T, N) {
    const G = new Array(f);
    for (let X = 0; X < f; X++) {
      G[X] = new Array(T);
      for (let le = 0; le < T; le++) {
        G[X][le] = new Array(N);
        for (let ne = 0; ne < N; ne++)
          G[X][le][ne] = 0;
      }
    }
    return G;
  }
  function mt(f, T, N, G, X) {
    for (let le = 0; le < T; le++) {
      f[le] = [];
      for (let ne = 0; ne < N; ne++) {
        f[le][ne] = [];
        for (let de = 0; de < G; de++)
          f[le][ne][de] = X;
      }
    }
  }
  function st(f, T, N) {
    for (let G = 0; G < T; G++)
      f[G] = N;
  }
  var rt = class {
    constructor() {
      h(this, "redMinimum"), h(this, "redMaximum"), h(this, "greenMinimum"), h(this, "greenMaximum"), h(this, "blueMinimum"), h(this, "blueMaximum"), h(this, "volume"), h(this, "alphaMinimum"), h(this, "alphaMaximum");
    }
  }, Ve = class extends We {
    constructor(f, T = 256, N = 5) {
      super(), h(this, "_reds"), h(this, "_greens"), h(this, "_blues"), h(this, "_alphas"), h(this, "_sums"), h(this, "_weights"), h(this, "_momentsRed"), h(this, "_momentsGreen"), h(this, "_momentsBlue"), h(this, "_momentsAlpha"), h(this, "_moments"), h(this, "_table"), h(this, "_pixels"), h(this, "_cubes"), h(this, "_colors"), h(this, "_significantBitsPerChannel"), h(this, "_maxSideIndex"), h(this, "_alphaMaxSideIndex"), h(this, "_sideSize"), h(this, "_alphaSideSize"), h(this, "_distance"), this._distance = f, this._setQuality(N), this._initialize(T);
    }
    sample(f) {
      const T = f.getPointArray();
      for (let N = 0, G = T.length; N < G; N++)
        this._addColor(T[N]);
      this._pixels = this._pixels.concat(T);
    }
    *quantize() {
      yield* this._preparePalette();
      const f = new Oe();
      for (let T = 0; T < this._colors; T++)
        if (this._sums[T] > 0) {
          const N = this._sums[T], G = this._reds[T] / N, X = this._greens[T] / N, le = this._blues[T] / N, ne = this._alphas[T] / N, de = He.createByRGBA(G | 0, X | 0, le | 0, ne | 0);
          f.add(de);
        }
      f.sort(), yield {
        palette: f,
        progress: 100
      };
    }
    *_preparePalette() {
      yield* this._calculateMoments();
      let f = 0;
      const T = Ue(this._colors);
      for (let ne = 1; ne < this._colors; ++ne) {
        this._cut(this._cubes[f], this._cubes[ne]) ? (T[f] = this._cubes[f].volume > 1 ? this._calculateVariance(this._cubes[f]) : 0, T[ne] = this._cubes[ne].volume > 1 ? this._calculateVariance(this._cubes[ne]) : 0) : (T[f] = 0, ne--), f = 0;
        let de = T[0];
        for (let Me = 1; Me <= ne; ++Me)
          T[Me] > de && (de = T[Me], f = Me);
        if (de <= 0) {
          this._colors = ne + 1;
          break;
        }
      }
      const N = [], G = [], X = [], le = [];
      for (let ne = 0; ne < this._colors; ++ne) {
        const de = Ve._volume(this._cubes[ne], this._weights);
        de > 0 ? (N[ne] = Ve._volume(this._cubes[ne], this._momentsRed) / de | 0, G[ne] = Ve._volume(this._cubes[ne], this._momentsGreen) / de | 0, X[ne] = Ve._volume(this._cubes[ne], this._momentsBlue) / de | 0, le[ne] = Ve._volume(this._cubes[ne], this._momentsAlpha) / de | 0) : (N[ne] = 0, G[ne] = 0, X[ne] = 0, le[ne] = 0);
      }
      this._reds = Ue(this._colors + 1), this._greens = Ue(this._colors + 1), this._blues = Ue(this._colors + 1), this._alphas = Ue(this._colors + 1), this._sums = Ue(this._colors + 1);
      for (let ne = 0, de = this._pixels.length; ne < de; ne++) {
        const Me = this._pixels[ne];
        let Ee = -1, De = Number.MAX_VALUE;
        for (let Ze = 0; Ze < this._colors; Ze++) {
          const et = N[Ze], it = G[Ze], $e = X[Ze], Qe = le[Ze], at = this._distance.calculateRaw(et, it, $e, Qe, Me.r, Me.g, Me.b, Me.a);
          at < De && (De = at, Ee = Ze);
        }
        this._reds[Ee] += Me.r, this._greens[Ee] += Me.g, this._blues[Ee] += Me.b, this._alphas[Ee] += Me.a, this._sums[Ee]++;
      }
    }
    _addColor(f) {
      const T = 8 - this._significantBitsPerChannel, N = (f.r >> T) + 1, G = (f.g >> T) + 1, X = (f.b >> T) + 1, le = (f.a >> T) + 1;
      this._weights[le][N][G][X]++, this._momentsRed[le][N][G][X] += f.r, this._momentsGreen[le][N][G][X] += f.g, this._momentsBlue[le][N][G][X] += f.b, this._momentsAlpha[le][N][G][X] += f.a, this._moments[le][N][G][X] += this._table[f.r] + this._table[f.g] + this._table[f.b] + this._table[f.a];
    }
    *_calculateMoments() {
      const f = [], T = [], N = [], G = [], X = [], le = [], ne = tt(this._sideSize, this._sideSize, this._sideSize), de = tt(this._sideSize, this._sideSize, this._sideSize), Me = tt(this._sideSize, this._sideSize, this._sideSize), Re = tt(this._sideSize, this._sideSize, this._sideSize), Ee = tt(this._sideSize, this._sideSize, this._sideSize), De = tt(this._sideSize, this._sideSize, this._sideSize);
      let Ze = 0;
      const et = new be(this._alphaMaxSideIndex * this._maxSideIndex, 99);
      for (let it = 1; it <= this._alphaMaxSideIndex; ++it) {
        mt(ne, this._sideSize, this._sideSize, this._sideSize, 0), mt(de, this._sideSize, this._sideSize, this._sideSize, 0), mt(Me, this._sideSize, this._sideSize, this._sideSize, 0), mt(Re, this._sideSize, this._sideSize, this._sideSize, 0), mt(Ee, this._sideSize, this._sideSize, this._sideSize, 0), mt(De, this._sideSize, this._sideSize, this._sideSize, 0);
        for (let $e = 1; $e <= this._maxSideIndex; ++$e, ++Ze) {
          et.shouldNotify(Ze) && (yield {
            progress: et.progress
          }), st(f, this._sideSize, 0), st(T, this._sideSize, 0), st(N, this._sideSize, 0), st(G, this._sideSize, 0), st(X, this._sideSize, 0), st(le, this._sideSize, 0);
          for (let Qe = 1; Qe <= this._maxSideIndex; ++Qe) {
            let at = 0, nt = 0, lt = 0, _t = 0, gt = 0, bt = 0;
            for (let Xe = 1; Xe <= this._maxSideIndex; ++Xe)
              at += this._weights[it][$e][Qe][Xe], nt += this._momentsRed[it][$e][Qe][Xe], lt += this._momentsGreen[it][$e][Qe][Xe], _t += this._momentsBlue[it][$e][Qe][Xe], gt += this._momentsAlpha[it][$e][Qe][Xe], bt += this._moments[it][$e][Qe][Xe], f[Xe] += at, T[Xe] += nt, N[Xe] += lt, G[Xe] += _t, X[Xe] += gt, le[Xe] += bt, ne[$e][Qe][Xe] = ne[$e - 1][Qe][Xe] + f[Xe], de[$e][Qe][Xe] = de[$e - 1][Qe][Xe] + T[Xe], Me[$e][Qe][Xe] = Me[$e - 1][Qe][Xe] + N[Xe], Re[$e][Qe][Xe] = Re[$e - 1][Qe][Xe] + G[Xe], Ee[$e][Qe][Xe] = Ee[$e - 1][Qe][Xe] + X[Xe], De[$e][Qe][Xe] = De[$e - 1][Qe][Xe] + le[Xe], this._weights[it][$e][Qe][Xe] = this._weights[it - 1][$e][Qe][Xe] + ne[$e][Qe][Xe], this._momentsRed[it][$e][Qe][Xe] = this._momentsRed[it - 1][$e][Qe][Xe] + de[$e][Qe][Xe], this._momentsGreen[it][$e][Qe][Xe] = this._momentsGreen[it - 1][$e][Qe][Xe] + Me[$e][Qe][Xe], this._momentsBlue[it][$e][Qe][Xe] = this._momentsBlue[it - 1][$e][Qe][Xe] + Re[$e][Qe][Xe], this._momentsAlpha[it][$e][Qe][Xe] = this._momentsAlpha[it - 1][$e][Qe][Xe] + Ee[$e][Qe][Xe], this._moments[it][$e][Qe][Xe] = this._moments[it - 1][$e][Qe][Xe] + De[$e][Qe][Xe];
          }
        }
      }
    }
    static _volumeFloat(f, T) {
      return T[f.alphaMaximum][f.redMaximum][f.greenMaximum][f.blueMaximum] - T[f.alphaMaximum][f.redMaximum][f.greenMinimum][f.blueMaximum] - T[f.alphaMaximum][f.redMinimum][f.greenMaximum][f.blueMaximum] + T[f.alphaMaximum][f.redMinimum][f.greenMinimum][f.blueMaximum] - T[f.alphaMinimum][f.redMaximum][f.greenMaximum][f.blueMaximum] + T[f.alphaMinimum][f.redMaximum][f.greenMinimum][f.blueMaximum] + T[f.alphaMinimum][f.redMinimum][f.greenMaximum][f.blueMaximum] - T[f.alphaMinimum][f.redMinimum][f.greenMinimum][f.blueMaximum] - (T[f.alphaMaximum][f.redMaximum][f.greenMaximum][f.blueMinimum] - T[f.alphaMinimum][f.redMaximum][f.greenMaximum][f.blueMinimum] - T[f.alphaMaximum][f.redMaximum][f.greenMinimum][f.blueMinimum] + T[f.alphaMinimum][f.redMaximum][f.greenMinimum][f.blueMinimum] - T[f.alphaMaximum][f.redMinimum][f.greenMaximum][f.blueMinimum] + T[f.alphaMinimum][f.redMinimum][f.greenMaximum][f.blueMinimum] + T[f.alphaMaximum][f.redMinimum][f.greenMinimum][f.blueMinimum] - T[f.alphaMinimum][f.redMinimum][f.greenMinimum][f.blueMinimum]);
    }
    static _volume(f, T) {
      return Ve._volumeFloat(f, T) | 0;
    }
    static _top(f, T, N, G) {
      let X;
      switch (T) {
        case Ve._alpha:
          X = G[N][f.redMaximum][f.greenMaximum][f.blueMaximum] - G[N][f.redMaximum][f.greenMinimum][f.blueMaximum] - G[N][f.redMinimum][f.greenMaximum][f.blueMaximum] + G[N][f.redMinimum][f.greenMinimum][f.blueMaximum] - (G[N][f.redMaximum][f.greenMaximum][f.blueMinimum] - G[N][f.redMaximum][f.greenMinimum][f.blueMinimum] - G[N][f.redMinimum][f.greenMaximum][f.blueMinimum] + G[N][f.redMinimum][f.greenMinimum][f.blueMinimum]);
          break;
        case Ve._red:
          X = G[f.alphaMaximum][N][f.greenMaximum][f.blueMaximum] - G[f.alphaMaximum][N][f.greenMinimum][f.blueMaximum] - G[f.alphaMinimum][N][f.greenMaximum][f.blueMaximum] + G[f.alphaMinimum][N][f.greenMinimum][f.blueMaximum] - (G[f.alphaMaximum][N][f.greenMaximum][f.blueMinimum] - G[f.alphaMaximum][N][f.greenMinimum][f.blueMinimum] - G[f.alphaMinimum][N][f.greenMaximum][f.blueMinimum] + G[f.alphaMinimum][N][f.greenMinimum][f.blueMinimum]);
          break;
        case Ve._green:
          X = G[f.alphaMaximum][f.redMaximum][N][f.blueMaximum] - G[f.alphaMaximum][f.redMinimum][N][f.blueMaximum] - G[f.alphaMinimum][f.redMaximum][N][f.blueMaximum] + G[f.alphaMinimum][f.redMinimum][N][f.blueMaximum] - (G[f.alphaMaximum][f.redMaximum][N][f.blueMinimum] - G[f.alphaMaximum][f.redMinimum][N][f.blueMinimum] - G[f.alphaMinimum][f.redMaximum][N][f.blueMinimum] + G[f.alphaMinimum][f.redMinimum][N][f.blueMinimum]);
          break;
        case Ve._blue:
          X = G[f.alphaMaximum][f.redMaximum][f.greenMaximum][N] - G[f.alphaMaximum][f.redMaximum][f.greenMinimum][N] - G[f.alphaMaximum][f.redMinimum][f.greenMaximum][N] + G[f.alphaMaximum][f.redMinimum][f.greenMinimum][N] - (G[f.alphaMinimum][f.redMaximum][f.greenMaximum][N] - G[f.alphaMinimum][f.redMaximum][f.greenMinimum][N] - G[f.alphaMinimum][f.redMinimum][f.greenMaximum][N] + G[f.alphaMinimum][f.redMinimum][f.greenMinimum][N]);
          break;
        default:
          throw new Error("impossible");
      }
      return X | 0;
    }
    static _bottom(f, T, N) {
      switch (T) {
        case Ve._alpha:
          return -N[f.alphaMinimum][f.redMaximum][f.greenMaximum][f.blueMaximum] + N[f.alphaMinimum][f.redMaximum][f.greenMinimum][f.blueMaximum] + N[f.alphaMinimum][f.redMinimum][f.greenMaximum][f.blueMaximum] - N[f.alphaMinimum][f.redMinimum][f.greenMinimum][f.blueMaximum] - (-N[f.alphaMinimum][f.redMaximum][f.greenMaximum][f.blueMinimum] + N[f.alphaMinimum][f.redMaximum][f.greenMinimum][f.blueMinimum] + N[f.alphaMinimum][f.redMinimum][f.greenMaximum][f.blueMinimum] - N[f.alphaMinimum][f.redMinimum][f.greenMinimum][f.blueMinimum]);
        case Ve._red:
          return -N[f.alphaMaximum][f.redMinimum][f.greenMaximum][f.blueMaximum] + N[f.alphaMaximum][f.redMinimum][f.greenMinimum][f.blueMaximum] + N[f.alphaMinimum][f.redMinimum][f.greenMaximum][f.blueMaximum] - N[f.alphaMinimum][f.redMinimum][f.greenMinimum][f.blueMaximum] - (-N[f.alphaMaximum][f.redMinimum][f.greenMaximum][f.blueMinimum] + N[f.alphaMaximum][f.redMinimum][f.greenMinimum][f.blueMinimum] + N[f.alphaMinimum][f.redMinimum][f.greenMaximum][f.blueMinimum] - N[f.alphaMinimum][f.redMinimum][f.greenMinimum][f.blueMinimum]);
        case Ve._green:
          return -N[f.alphaMaximum][f.redMaximum][f.greenMinimum][f.blueMaximum] + N[f.alphaMaximum][f.redMinimum][f.greenMinimum][f.blueMaximum] + N[f.alphaMinimum][f.redMaximum][f.greenMinimum][f.blueMaximum] - N[f.alphaMinimum][f.redMinimum][f.greenMinimum][f.blueMaximum] - (-N[f.alphaMaximum][f.redMaximum][f.greenMinimum][f.blueMinimum] + N[f.alphaMaximum][f.redMinimum][f.greenMinimum][f.blueMinimum] + N[f.alphaMinimum][f.redMaximum][f.greenMinimum][f.blueMinimum] - N[f.alphaMinimum][f.redMinimum][f.greenMinimum][f.blueMinimum]);
        case Ve._blue:
          return -N[f.alphaMaximum][f.redMaximum][f.greenMaximum][f.blueMinimum] + N[f.alphaMaximum][f.redMaximum][f.greenMinimum][f.blueMinimum] + N[f.alphaMaximum][f.redMinimum][f.greenMaximum][f.blueMinimum] - N[f.alphaMaximum][f.redMinimum][f.greenMinimum][f.blueMinimum] - (-N[f.alphaMinimum][f.redMaximum][f.greenMaximum][f.blueMinimum] + N[f.alphaMinimum][f.redMaximum][f.greenMinimum][f.blueMinimum] + N[f.alphaMinimum][f.redMinimum][f.greenMaximum][f.blueMinimum] - N[f.alphaMinimum][f.redMinimum][f.greenMinimum][f.blueMinimum]);
        default:
          return 0;
      }
    }
    _calculateVariance(f) {
      const T = Ve._volume(f, this._momentsRed), N = Ve._volume(f, this._momentsGreen), G = Ve._volume(f, this._momentsBlue), X = Ve._volume(f, this._momentsAlpha), le = Ve._volumeFloat(f, this._moments), ne = Ve._volume(f, this._weights), de = T * T + N * N + G * G + X * X;
      return le - de / ne;
    }
    _maximize(f, T, N, G, X, le, ne, de, Me) {
      const Re = Ve._bottom(f, T, this._momentsRed) | 0, Ee = Ve._bottom(f, T, this._momentsGreen) | 0, De = Ve._bottom(f, T, this._momentsBlue) | 0, Ze = Ve._bottom(f, T, this._momentsAlpha) | 0, et = Ve._bottom(f, T, this._weights) | 0;
      let it = 0, $e = -1;
      for (let Qe = N; Qe < G; ++Qe) {
        let at = Re + Ve._top(f, T, Qe, this._momentsRed), nt = Ee + Ve._top(f, T, Qe, this._momentsGreen), lt = De + Ve._top(f, T, Qe, this._momentsBlue), _t = Ze + Ve._top(f, T, Qe, this._momentsAlpha), gt = et + Ve._top(f, T, Qe, this._weights);
        if (gt !== 0) {
          let bt = at * at + nt * nt + lt * lt + _t * _t, Xe = bt / gt;
          at = X - at, nt = le - nt, lt = ne - lt, _t = de - _t, gt = Me - gt, gt !== 0 && (bt = at * at + nt * nt + lt * lt + _t * _t, Xe += bt / gt, Xe > it && (it = Xe, $e = Qe));
        }
      }
      return { max: it, position: $e };
    }
    _cut(f, T) {
      let N;
      const G = Ve._volume(f, this._momentsRed), X = Ve._volume(f, this._momentsGreen), le = Ve._volume(f, this._momentsBlue), ne = Ve._volume(f, this._momentsAlpha), de = Ve._volume(f, this._weights), Me = this._maximize(f, Ve._red, f.redMinimum + 1, f.redMaximum, G, X, le, ne, de), Re = this._maximize(f, Ve._green, f.greenMinimum + 1, f.greenMaximum, G, X, le, ne, de), Ee = this._maximize(f, Ve._blue, f.blueMinimum + 1, f.blueMaximum, G, X, le, ne, de), De = this._maximize(f, Ve._alpha, f.alphaMinimum + 1, f.alphaMaximum, G, X, le, ne, de);
      if (De.max >= Me.max && De.max >= Re.max && De.max >= Ee.max) {
        if (N = Ve._alpha, De.position < 0)
          return !1;
      } else Me.max >= De.max && Me.max >= Re.max && Me.max >= Ee.max ? N = Ve._red : Re.max >= De.max && Re.max >= Me.max && Re.max >= Ee.max ? N = Ve._green : N = Ve._blue;
      switch (T.redMaximum = f.redMaximum, T.greenMaximum = f.greenMaximum, T.blueMaximum = f.blueMaximum, T.alphaMaximum = f.alphaMaximum, N) {
        case Ve._red:
          T.redMinimum = f.redMaximum = Me.position, T.greenMinimum = f.greenMinimum, T.blueMinimum = f.blueMinimum, T.alphaMinimum = f.alphaMinimum;
          break;
        case Ve._green:
          T.greenMinimum = f.greenMaximum = Re.position, T.redMinimum = f.redMinimum, T.blueMinimum = f.blueMinimum, T.alphaMinimum = f.alphaMinimum;
          break;
        case Ve._blue:
          T.blueMinimum = f.blueMaximum = Ee.position, T.redMinimum = f.redMinimum, T.greenMinimum = f.greenMinimum, T.alphaMinimum = f.alphaMinimum;
          break;
        case Ve._alpha:
          T.alphaMinimum = f.alphaMaximum = De.position, T.blueMinimum = f.blueMinimum, T.redMinimum = f.redMinimum, T.greenMinimum = f.greenMinimum;
          break;
      }
      return f.volume = (f.redMaximum - f.redMinimum) * (f.greenMaximum - f.greenMinimum) * (f.blueMaximum - f.blueMinimum) * (f.alphaMaximum - f.alphaMinimum), T.volume = (T.redMaximum - T.redMinimum) * (T.greenMaximum - T.greenMinimum) * (T.blueMaximum - T.blueMinimum) * (T.alphaMaximum - T.alphaMinimum), !0;
    }
    _initialize(f) {
      this._colors = f, this._cubes = [];
      for (let T = 0; T < f; T++)
        this._cubes[T] = new rt();
      this._cubes[0].redMinimum = 0, this._cubes[0].greenMinimum = 0, this._cubes[0].blueMinimum = 0, this._cubes[0].alphaMinimum = 0, this._cubes[0].redMaximum = this._maxSideIndex, this._cubes[0].greenMaximum = this._maxSideIndex, this._cubes[0].blueMaximum = this._maxSideIndex, this._cubes[0].alphaMaximum = this._alphaMaxSideIndex, this._weights = je(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsRed = je(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsGreen = je(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsBlue = je(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsAlpha = je(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._moments = je(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._table = [];
      for (let T = 0; T < 256; ++T)
        this._table[T] = T * T;
      this._pixels = [];
    }
    _setQuality(f = 5) {
      this._significantBitsPerChannel = f, this._maxSideIndex = 1 << this._significantBitsPerChannel, this._alphaMaxSideIndex = this._maxSideIndex, this._sideSize = this._maxSideIndex + 1, this._alphaSideSize = this._alphaMaxSideIndex + 1;
    }
  }, ht = Ve;
  h(ht, "_alpha", 3), h(ht, "_red", 2), h(ht, "_green", 1), h(ht, "_blue", 0);
  var pt = {};
  n(pt, {
    AbstractImageQuantizer: () => xt,
    ErrorDiffusionArray: () => ft,
    ErrorDiffusionArrayKernel: () => ct,
    ErrorDiffusionRiemersma: () => yt,
    NearestColor: () => vt
  });
  var xt = class {
    quantizeSync(f, T) {
      for (const N of this.quantize(f, T))
        if (N.pointContainer)
          return N.pointContainer;
      throw new Error("unreachable");
    }
  }, vt = class extends xt {
    constructor(f) {
      super(), h(this, "_distance"), this._distance = f;
    }
    *quantize(f, T) {
      const N = f.getPointArray(), G = f.getWidth(), X = f.getHeight(), le = new be(X, 99);
      for (let ne = 0; ne < X; ne++) {
        le.shouldNotify(ne) && (yield {
          progress: le.progress
        });
        for (let de = 0, Me = ne * G; de < G; de++, Me++) {
          const Re = N[Me];
          Re.from(T.getNearestColor(this._distance, Re));
        }
      }
      yield {
        pointContainer: f,
        progress: 100
      };
    }
  }, ct = /* @__PURE__ */ ((f) => (f[f.FloydSteinberg = 0] = "FloydSteinberg", f[f.FalseFloydSteinberg = 1] = "FalseFloydSteinberg", f[f.Stucki = 2] = "Stucki", f[f.Atkinson = 3] = "Atkinson", f[f.Jarvis = 4] = "Jarvis", f[f.Burkes = 5] = "Burkes", f[f.Sierra = 6] = "Sierra", f[f.TwoSierra = 7] = "TwoSierra", f[f.SierraLite = 8] = "SierraLite", f))(ct || {}), ft = class extends xt {
    constructor(f, T, N = !0, G = 0, X = !1) {
      super(), h(this, "_minColorDistance"), h(this, "_serpentine"), h(this, "_kernel"), h(this, "_calculateErrorLikeGIMP"), h(this, "_distance"), this._setKernel(T), this._distance = f, this._minColorDistance = G, this._serpentine = N, this._calculateErrorLikeGIMP = X;
    }
    *quantize(f, T) {
      const N = f.getPointArray(), G = new He(), X = f.getWidth(), le = f.getHeight(), ne = [];
      let de = 1, Me = 1;
      for (const Ee of this._kernel) {
        const De = Ee[2] + 1;
        Me < De && (Me = De);
      }
      for (let Ee = 0; Ee < Me; Ee++)
        this._fillErrorLine(ne[Ee] = [], X);
      const Re = new be(le, 99);
      for (let Ee = 0; Ee < le; Ee++) {
        Re.shouldNotify(Ee) && (yield {
          progress: Re.progress
        }), this._serpentine && (de *= -1);
        const De = Ee * X, Ze = de === 1 ? 0 : X - 1, et = de === 1 ? X : -1;
        this._fillErrorLine(ne[0], X), ne.push(ne.shift());
        const it = ne[0];
        for (let $e = Ze, Qe = De + Ze; $e !== et; $e += de, Qe += de) {
          const at = N[Qe], nt = it[$e];
          G.from(at);
          const lt = He.createByRGBA(E(at.r + nt[0]), E(at.g + nt[1]), E(at.b + nt[2]), E(at.a + nt[3])), _t = T.getNearestColor(this._distance, lt);
          if (at.from(_t), this._minColorDistance && this._distance.calculateNormalized(G, _t) < this._minColorDistance)
            continue;
          let gt, bt, Xe, It;
          this._calculateErrorLikeGIMP ? (gt = lt.r - _t.r, bt = lt.g - _t.g, Xe = lt.b - _t.b, It = lt.a - _t.a) : (gt = G.r - _t.r, bt = G.g - _t.g, Xe = G.b - _t.b, It = G.a - _t.a);
          const Tt = de === 1 ? 0 : this._kernel.length - 1, Nt = de === 1 ? this._kernel.length : -1;
          for (let St = Tt; St !== Nt; St += de) {
            const Bt = this._kernel[St][1] * de, Pt = this._kernel[St][2];
            if (Bt + $e >= 0 && Bt + $e < X && Pt + Ee >= 0 && Pt + Ee < le) {
              const Mt = this._kernel[St][0], kt = ne[Pt][Bt + $e];
              kt[0] += gt * Mt, kt[1] += bt * Mt, kt[2] += Xe * Mt, kt[3] += It * Mt;
            }
          }
        }
      }
      yield {
        pointContainer: f,
        progress: 100
      };
    }
    _fillErrorLine(f, T) {
      f.length > T && (f.length = T);
      const N = f.length;
      for (let G = 0; G < N; G++) {
        const X = f[G];
        X[0] = X[1] = X[2] = X[3] = 0;
      }
      for (let G = N; G < T; G++)
        f[G] = [0, 0, 0, 0];
    }
    _setKernel(f) {
      switch (f) {
        case 0:
          this._kernel = [
            [7 / 16, 1, 0],
            [3 / 16, -1, 1],
            [5 / 16, 0, 1],
            [1 / 16, 1, 1]
          ];
          break;
        case 1:
          this._kernel = [
            [3 / 8, 1, 0],
            [3 / 8, 0, 1],
            [2 / 8, 1, 1]
          ];
          break;
        case 2:
          this._kernel = [
            [8 / 42, 1, 0],
            [4 / 42, 2, 0],
            [2 / 42, -2, 1],
            [4 / 42, -1, 1],
            [8 / 42, 0, 1],
            [4 / 42, 1, 1],
            [2 / 42, 2, 1],
            [1 / 42, -2, 2],
            [2 / 42, -1, 2],
            [4 / 42, 0, 2],
            [2 / 42, 1, 2],
            [1 / 42, 2, 2]
          ];
          break;
        case 3:
          this._kernel = [
            [1 / 8, 1, 0],
            [1 / 8, 2, 0],
            [1 / 8, -1, 1],
            [1 / 8, 0, 1],
            [1 / 8, 1, 1],
            [1 / 8, 0, 2]
          ];
          break;
        case 4:
          this._kernel = [
            [7 / 48, 1, 0],
            [5 / 48, 2, 0],
            [3 / 48, -2, 1],
            [5 / 48, -1, 1],
            [7 / 48, 0, 1],
            [5 / 48, 1, 1],
            [3 / 48, 2, 1],
            [1 / 48, -2, 2],
            [3 / 48, -1, 2],
            [5 / 48, 0, 2],
            [3 / 48, 1, 2],
            [1 / 48, 2, 2]
          ];
          break;
        case 5:
          this._kernel = [
            [8 / 32, 1, 0],
            [4 / 32, 2, 0],
            [2 / 32, -2, 1],
            [4 / 32, -1, 1],
            [8 / 32, 0, 1],
            [4 / 32, 1, 1],
            [2 / 32, 2, 1]
          ];
          break;
        case 6:
          this._kernel = [
            [5 / 32, 1, 0],
            [3 / 32, 2, 0],
            [2 / 32, -2, 1],
            [4 / 32, -1, 1],
            [5 / 32, 0, 1],
            [4 / 32, 1, 1],
            [2 / 32, 2, 1],
            [2 / 32, -1, 2],
            [3 / 32, 0, 2],
            [2 / 32, 1, 2]
          ];
          break;
        case 7:
          this._kernel = [
            [4 / 16, 1, 0],
            [3 / 16, 2, 0],
            [1 / 16, -2, 1],
            [2 / 16, -1, 1],
            [3 / 16, 0, 1],
            [2 / 16, 1, 1],
            [1 / 16, 2, 1]
          ];
          break;
        case 8:
          this._kernel = [
            [2 / 4, 1, 0],
            [1 / 4, -1, 1],
            [1 / 4, 0, 1]
          ];
          break;
        default:
          throw new Error(`ErrorDiffusionArray: unknown kernel = ${f}`);
      }
    }
  };
  function* dt(f, T, N) {
    const G = Math.max(f, T), X = Math.floor(Math.log(G) / Math.log(2) + 1), le = new be(f * T, 99), ne = {
      width: f,
      height: T,
      level: X,
      callback: N,
      tracker: le,
      index: 0,
      x: 0,
      y: 0
    };
    yield* ot(
      ne,
      1
      /* UP */
    ), ut(
      ne,
      0
      /* NONE */
    );
  }
  function* ot(f, T) {
    if (!(f.level < 1)) {
      switch (f.tracker.shouldNotify(f.index) && (yield { progress: f.tracker.progress }), f.level--, T) {
        case 2:
          yield* ot(
            f,
            1
            /* UP */
          ), ut(
            f,
            3
            /* RIGHT */
          ), yield* ot(
            f,
            2
            /* LEFT */
          ), ut(
            f,
            4
            /* DOWN */
          ), yield* ot(
            f,
            2
            /* LEFT */
          ), ut(
            f,
            2
            /* LEFT */
          ), yield* ot(
            f,
            4
            /* DOWN */
          );
          break;
        case 3:
          yield* ot(
            f,
            4
            /* DOWN */
          ), ut(
            f,
            2
            /* LEFT */
          ), yield* ot(
            f,
            3
            /* RIGHT */
          ), ut(
            f,
            1
            /* UP */
          ), yield* ot(
            f,
            3
            /* RIGHT */
          ), ut(
            f,
            3
            /* RIGHT */
          ), yield* ot(
            f,
            1
            /* UP */
          );
          break;
        case 1:
          yield* ot(
            f,
            2
            /* LEFT */
          ), ut(
            f,
            4
            /* DOWN */
          ), yield* ot(
            f,
            1
            /* UP */
          ), ut(
            f,
            3
            /* RIGHT */
          ), yield* ot(
            f,
            1
            /* UP */
          ), ut(
            f,
            1
            /* UP */
          ), yield* ot(
            f,
            3
            /* RIGHT */
          );
          break;
        case 4:
          yield* ot(
            f,
            3
            /* RIGHT */
          ), ut(
            f,
            1
            /* UP */
          ), yield* ot(
            f,
            4
            /* DOWN */
          ), ut(
            f,
            2
            /* LEFT */
          ), yield* ot(
            f,
            4
            /* DOWN */
          ), ut(
            f,
            4
            /* DOWN */
          ), yield* ot(
            f,
            2
            /* LEFT */
          );
          break;
      }
      f.level++;
    }
  }
  function ut(f, T) {
    switch (f.x >= 0 && f.x < f.width && f.y >= 0 && f.y < f.height && (f.callback(f.x, f.y), f.index++), T) {
      case 2:
        f.x--;
        break;
      case 3:
        f.x++;
        break;
      case 1:
        f.y--;
        break;
      case 4:
        f.y++;
        break;
    }
  }
  var yt = class extends xt {
    constructor(f, T = 16, N = 1) {
      super(), h(this, "_distance"), h(this, "_weights"), h(this, "_errorQueueSize"), this._distance = f, this._errorQueueSize = T, this._weights = yt._createWeights(N, T);
    }
    *quantize(f, T) {
      const N = f.getPointArray(), G = f.getWidth(), X = f.getHeight(), le = [];
      let ne = 0;
      for (let de = 0; de < this._errorQueueSize; de++)
        le[de] = { r: 0, g: 0, b: 0, a: 0 };
      yield* dt(G, X, (de, Me) => {
        const Re = N[de + Me * G];
        let { r: Ee, g: De, b: Ze, a: et } = Re;
        for (let at = 0; at < this._errorQueueSize; at++) {
          const nt = this._weights[at], lt = le[(at + ne) % this._errorQueueSize];
          Ee += lt.r * nt, De += lt.g * nt, Ze += lt.b * nt, et += lt.a * nt;
        }
        const it = He.createByRGBA(E(Ee), E(De), E(Ze), E(et)), $e = T.getNearestColor(this._distance, it);
        ne = (ne + 1) % this._errorQueueSize;
        const Qe = (ne + this._errorQueueSize - 1) % this._errorQueueSize;
        le[Qe].r = Re.r - $e.r, le[Qe].g = Re.g - $e.g, le[Qe].b = Re.b - $e.b, le[Qe].a = Re.a - $e.a, Re.from($e);
      }), yield {
        pointContainer: f,
        progress: 100
      };
    }
    static _createWeights(f, T) {
      const N = [], G = Math.exp(Math.log(T) / (T - 1));
      for (let X = 0, le = 1; X < T; X++)
        N[X] = (le + 0.5 | 0) / T * f, le *= G;
      return N;
    }
  }, Et = {};
  n(Et, {
    ssim: () => Dt
  });
  var Rt = 0.01, Ft = 0.03;
  function Dt(f, T) {
    if (f.getHeight() !== T.getHeight() || f.getWidth() !== T.getWidth())
      throw new Error("Images have different sizes!");
    const G = (1 << 8) - 1, X = (Rt * G) ** 2, le = (Ft * G) ** 2;
    let ne = 0, de = 0;
    return zt(f, T, (Me, Re, Ee, De) => {
      let Ze = 0, et = 0, it = 0;
      for (let lt = 0; lt < Me.length; lt++)
        et += (Me[lt] - Ee) ** 2, it += (Re[lt] - De) ** 2, Ze += (Me[lt] - Ee) * (Re[lt] - De);
      const $e = Me.length - 1;
      et /= $e, it /= $e, Ze /= $e;
      const Qe = (2 * Ee * De + X) * (2 * Ze + le), at = (Ee ** 2 + De ** 2 + X) * (et + it + le), nt = Qe / at;
      de += nt, ne++;
    }), de / ne;
  }
  function zt(f, T, N) {
    const X = f.getWidth(), le = f.getHeight();
    for (let ne = 0; ne < le; ne += 8)
      for (let de = 0; de < X; de += 8) {
        const Me = Math.min(8, X - de), Re = Math.min(8, le - ne), Ee = Ct(f, de, ne, Me, Re), De = Ct(T, de, ne, Me, Re), Ze = At(Ee), et = At(De);
        N(Ee, De, Ze, et);
      }
  }
  function Ct(f, T, N, G, X) {
    const le = f.getPointArray(), ne = [];
    let de = 0;
    for (let Me = N; Me < N + X; Me++) {
      const Re = Me * f.getWidth();
      for (let Ee = T; Ee < T + G; Ee++) {
        const De = le[Re + Ee];
        ne[de] = De.r * 0.2126 + De.g * 0.7152 + De.b * 0.0722, de++;
      }
    }
    return ne;
  }
  function At(f) {
    let T = 0;
    for (const N of f)
      T += N;
    return T / f.length;
  }
  var wt = typeof setImmediate == "function" ? setImmediate : typeof process < "u" && typeof (process == null ? void 0 : process.nextTick) == "function" ? (f) => process.nextTick(f) : (f) => setTimeout(f, 0);
  function Gt(f, {
    colorDistanceFormula: T,
    paletteQuantization: N,
    colors: G
  } = {}) {
    const X = Ot(T), le = Zt(X, N, G);
    return f.forEach((ne) => le.sample(ne)), le.quantizeSync();
  }
  async function Ht(f, {
    colorDistanceFormula: T,
    paletteQuantization: N,
    colors: G,
    onProgress: X
  } = {}) {
    return new Promise((le, ne) => {
      const de = Ot(T), Me = Zt(de, N, G);
      f.forEach((Ze) => Me.sample(Ze));
      let Re;
      const Ee = Me.quantize(), De = () => {
        try {
          const Ze = Ee.next();
          Ze.done ? le(Re) : (Ze.value.palette && (Re = Ze.value.palette), X && X(Ze.value.progress), wt(De));
        } catch (Ze) {
          ne(Ze);
        }
      };
      wt(De);
    });
  }
  function jt(f, T, { colorDistanceFormula: N, imageQuantization: G } = {}) {
    const X = Ot(N);
    return Lt(X, G).quantizeSync(f, T);
  }
  async function Wt(f, T, {
    colorDistanceFormula: N,
    imageQuantization: G,
    onProgress: X
  } = {}) {
    return new Promise((le, ne) => {
      const de = Ot(N), Me = Lt(de, G);
      let Re;
      const Ee = Me.quantize(f, T), De = () => {
        try {
          const Ze = Ee.next();
          Ze.done ? le(Re) : (Ze.value.pointContainer && (Re = Ze.value.pointContainer), X && X(Ze.value.progress), wt(De));
        } catch (Ze) {
          ne(Ze);
        }
      };
      wt(De);
    });
  }
  function Ot(f = "euclidean-bt709") {
    switch (f) {
      case "cie94-graphic-arts":
        return new Ae();
      case "cie94-textiles":
        return new we();
      case "ciede2000":
        return new ue();
      case "color-metric":
        return new ce();
      case "euclidean":
        return new Se();
      case "euclidean-bt709":
        return new Ie();
      case "euclidean-bt709-noalpha":
        return new Be();
      case "manhattan":
        return new se();
      case "manhattan-bt709":
        return new Pe();
      case "manhattan-nommyde":
        return new Fe();
      case "pngquant":
        return new Te();
      default:
        throw new Error(`Unknown colorDistanceFormula ${f}`);
    }
  }
  function Lt(f, T = "floyd-steinberg") {
    switch (T) {
      case "nearest":
        return new vt(f);
      case "riemersma":
        return new yt(f);
      case "floyd-steinberg":
        return new ft(
          f,
          0
          /* FloydSteinberg */
        );
      case "false-floyd-steinberg":
        return new ft(
          f,
          1
          /* FalseFloydSteinberg */
        );
      case "stucki":
        return new ft(
          f,
          2
          /* Stucki */
        );
      case "atkinson":
        return new ft(
          f,
          3
          /* Atkinson */
        );
      case "jarvis":
        return new ft(
          f,
          4
          /* Jarvis */
        );
      case "burkes":
        return new ft(
          f,
          5
          /* Burkes */
        );
      case "sierra":
        return new ft(
          f,
          6
          /* Sierra */
        );
      case "two-sierra":
        return new ft(
          f,
          7
          /* TwoSierra */
        );
      case "sierra-lite":
        return new ft(
          f,
          8
          /* SierraLite */
        );
      default:
        throw new Error(`Unknown imageQuantization ${T}`);
    }
  }
  function Zt(f, T = "wuquant", N = 256) {
    switch (T) {
      case "neuquant":
        return new me(f, N);
      case "rgbquant":
        return new Ye(f, N);
      case "wuquant":
        return new ht(f, N);
      case "neuquant-float":
        return new fe(f, N);
      default:
        throw new Error(`Unknown paletteQuantization ${T}`);
    }
  }
  imageQ = l(u);
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * cie94.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * ciede2000.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * cmetric.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * common.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * constants.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * ditherErrorDiffusionArray.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * euclidean.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * helper.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * hueStatistics.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * iq.ts - Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * lab2rgb.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * lab2xyz.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * manhattanNeuQuant.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * nearestColor.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * palette.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * pngQuant.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * point.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * pointContainer.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * rgb2hsl.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * rgb2lab.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * rgb2xyz.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * ssim.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * wuQuant.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * xyz2lab.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * xyz2rgb.ts - part of Image Quantization Library
   */
  /**
   * @preserve
   * MIT License
   *
   * Copyright 2015-2018 Igor Bezkrovnyi
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to
   * deal in the Software without restriction, including without limitation the
   * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
   * sell copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
   * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
   * IN THE SOFTWARE.
   *
   * riemersma.ts - part of Image Quantization Library
   */
  /**
   * @preserve TypeScript port:
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * colorHistogram.ts - part of Image Quantization Library
   */
  /**
   * @preserve TypeScript port:
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * neuquant.ts - part of Image Quantization Library
   */
  /**
   * @preserve TypeScript port:
   * Copyright 2015-2018 Igor Bezkrovnyi
   * All rights reserved. (MIT Licensed)
   *
   * rgbquant.ts - part of Image Quantization Library
   */
  return imageQ;
}
var gifframe = {}, hasRequiredGifframe;
function requireGifframe() {
  if (hasRequiredGifframe) return gifframe;
  hasRequiredGifframe = 1;
  const e = requireBitmapimage(), { GifError: t } = requireGif();
  class i extends e {
    // xOffset - x offset of bitmap on GIF (defaults to 0)
    // yOffset - y offset of bitmap on GIF (defaults to 0)
    // disposalMethod - pixel disposal method when handling partial images
    // delayCentisecs - duration of frame in hundredths of a second
    // interlaced - whether the image is interlaced (defaults to false)
    /**
     * GifFrame is a class representing an image frame of a GIF. GIFs contain one or more instances of GifFrame.
     * 
     * Property | Description
     * --- | ---
     * xOffset | x-coord of position within GIF at which to render the image (defaults to 0)
     * yOffset | y-coord of position within GIF at which to render the image (defaults to 0)
     * disposalMethod | GIF disposal method; only relevant when the frames aren't all the same size (defaults to 2, disposing to background color)
     * delayCentisecs | duration of the frame in hundreths of a second
     * interlaced | boolean indicating whether the frame renders interlaced
     * 
     * Its constructor supports the following signatures:
     * 
     * * new GifFrame(bitmap: {width: number, height: number, data: Buffer}, options?)
     * * new GifFrame(bitmapImage: BitmapImage, options?)
     * * new GifFrame(width: number, height: number, buffer: Buffer, options?)
     * * new GifFrame(width: number, height: number, backgroundRGBA?: number, options?)
     * * new GifFrame(frame: GifFrame)
     * 
     * See the base class BitmapImage for a discussion of all parameters but `options` and `frame`. `options` is an optional argument providing initial values for the above-listed GifFrame properties. Each property within option is itself optional.
     * 
     * Provide a `frame` to the constructor to create a clone of the provided frame. The new frame includes a copy of the provided frame's pixel data so that each can subsequently be modified without affecting each other.
     */
    constructor(...r) {
      if (super(...r), r[0] instanceof i) {
        const o = r[0];
        this.xOffset = o.xOffset, this.yOffset = o.yOffset, this.disposalMethod = o.disposalMethod, this.delayCentisecs = o.delayCentisecs, this.interlaced = o.interlaced;
      } else {
        const o = r[r.length - 1];
        let n = {};
        typeof o == "object" && !(o instanceof e) && (n = o), this.xOffset = n.xOffset || 0, this.yOffset = n.yOffset || 0, this.disposalMethod = n.disposalMethod !== void 0 ? n.disposalMethod : i.DisposeToBackgroundColor, this.delayCentisecs = n.delayCentisecs || 8, this.interlaced = n.interlaced || !1;
      }
    }
    /**
     * Get a summary of the colors found within the frame. The return value is an object of the following form:
     * 
     * Property | Description
     * --- | ---
     * colors | An array of all the opaque colors found within the frame. Each color is given as an RGB number of the form 0xRRGGBB. The array is sorted by increasing number. Will be an empty array when the image is completely transparent.
     * usesTransparency | boolean indicating whether there are any transparent pixels within the frame. A pixel is considered transparent if its alpha value is 0x00.
     * indexCount | The number of color indexes required to represent this palette of colors. It is equal to the number of opaque colors plus one if the image includes transparency.
     * 
     * @return {object} An object representing a color palette as described above.
     */
    getPalette() {
      const r = /* @__PURE__ */ new Set(), o = this.bitmap.data;
      let n = 0, s = !1;
      for (; n < o.length; ) {
        if (o[n + 3] === 0)
          s = !0;
        else {
          const d = o.readUInt32BE(n, !0) >> 8 & 16777215;
          r.add(d);
        }
        n += 4;
      }
      const l = new Array(r.size), h = r.values();
      for (n = 0; n < l.length; ++n)
        l[n] = h.next().value;
      l.sort((d, m) => d - m);
      let u = l.length;
      return s && ++u, { colors: l, usesTransparency: s, indexCount: u };
    }
  }
  return i.DisposeToAnything = 0, i.DisposeNothing = 1, i.DisposeToBackgroundColor = 2, i.DisposeToPrevious = 3, gifframe.GifFrame = i, gifframe;
}
var hasRequiredGifutil;
function requireGifutil() {
  return hasRequiredGifutil || (hasRequiredGifutil = 1, (function(e) {
    const t = fs__default, i = requireImageQ(), a = requireBitmapimage(), { GifFrame: r } = requireGifframe(), { GifError: o } = requireGif(), { GifCodec: n } = requireGifcodec(), s = [".jpg", ".jpeg", ".png", ".bmp"], l = new n();
    e.cloneFrames = function(m) {
      let p = [];
      return m.forEach((g) => {
        p.push(new r(g));
      }), p;
    }, e.getColorInfo = function(m, p) {
      let g = !1;
      const M = [];
      for (let B = 0; B < m.length; ++B) {
        let A = m[B].getPalette();
        if (A.usesTransparency && (g = !0), A.indexCount > 256)
          throw new o(`Frame ${B} uses more than 256 color indexes`);
        M.push(A);
      }
      if (p === 0)
        return { usesTransparency: g, palettes: M };
      const k = /* @__PURE__ */ new Set();
      M.forEach((B) => {
        B.colors.forEach((A) => {
          k.add(A);
        });
      });
      let w = k.size;
      if (g && ++w, p && w > p)
        return { usesTransparency: g, palettes: M };
      const v = new Array(k.size), C = k.values();
      for (let B = 0; B < v.length; ++B)
        v[B] = C.next().value;
      return v.sort((B, A) => B - A), { colors: v, indexCount: w, usesTransparency: g, palettes: M };
    }, e.copyAsJimp = function(m, p) {
      return e.shareAsJimp(m, new a(p));
    }, e.getMaxDimensions = function(m) {
      let p = 0, g = 0;
      return m.forEach((M) => {
        const k = M.xOffset + M.bitmap.width;
        k > p && (p = k);
        const w = M.yOffset + M.bitmap.height;
        w > g && (g = w);
      }), { maxWidth: p, maxHeight: g };
    }, e.quantizeDekker = function(m, p, g) {
      p = p || 256, h(m, "NeuQuantFloat", p, 0, g);
    }, e.quantizeSorokin = function(m, p, g, M) {
      p = p || 256, g = g || "min-pop";
      let k;
      switch (g) {
        case "min-pop":
          k = 2;
          break;
        case "top-pop":
          k = 1;
          break;
        default:
          throw new Error(`Invalid quantizeSorokin histogram '${g}'`);
      }
      h(m, "RGBQuant", p, k, M);
    }, e.quantizeWu = function(m, p, g, M) {
      if (p = p || 256, g = g || 5, g < 1 || g > 8)
        throw new Error("Invalid quantization quality");
      h(m, "WuQuant", p, g, M);
    }, e.read = function(m, p) {
      return p = p || l, Buffer.isBuffer(m) ? p.decodeGif(m) : u(m).then((g) => p.decodeGif(g));
    }, e.shareAsJimp = function(m, p) {
      const g = new m(
        p.bitmap.width,
        p.bitmap.height,
        0
      );
      return g.bitmap.data = p.bitmap.data, g;
    }, e.write = function(m, p, g, M) {
      M = M || l;
      const k = m.match(/\.[a-zA-Z]+$/);
      if (k !== null && s.includes(k[0].toLowerCase()))
        throw new Error(`GIF '${m}' has an unexpected suffix`);
      return M.encodeGif(p, g).then((w) => d(m, w.buffer).then(() => w));
    };
    function h(m, p, g, M, k) {
      const w = Array.isArray(m) ? m : [m], v = [
        "FloydSteinberg",
        "FalseFloydSteinberg",
        "Stucki",
        "Atkinson",
        "Jarvis",
        "Burkes",
        "Sierra",
        "TwoSierra",
        "SierraLite"
      ];
      if (k) {
        if (v.indexOf(k.ditherAlgorithm) < 0)
          throw new Error(`Invalid ditherAlgorithm '${k.ditherAlgorithm}'`);
        k.serpentine === void 0 && (k.serpentine = !0), k.minimumColorDistanceToDither === void 0 && (k.minimumColorDistanceToDither = 0), k.calculateErrorLikeGIMP === void 0 && (k.calculateErrorLikeGIMP = !1);
      }
      const C = new i.distance.Euclidean(), B = new i.palette[p](C, g, M);
      let A;
      k ? A = new i.image.ErrorDiffusionArray(
        C,
        i.image.ErrorDiffusionArrayKernel[k.ditherAlgorithm],
        k.serpentine,
        k.minimumColorDistanceToDither,
        k.calculateErrorLikeGIMP
      ) : A = new i.image.NearestColor(C);
      const S = [];
      w.forEach((E) => {
        const F = E.bitmap.data, Z = new ArrayBuffer(F.length), P = new Uint32Array(Z);
        for (let L = 0, q = 0; L < F.length; L += 4, ++q)
          P[q] = F.readUInt32LE(L, !0);
        const D = i.utils.PointContainer.fromUint32Array(
          P,
          E.bitmap.width,
          E.bitmap.height
        );
        B.sample(D), S.push(D);
      });
      const b = B.quantizeSync();
      for (let E = 0; E < w.length; ++E) {
        const F = w[E].bitmap.data, P = A.quantizeSync(S[E], b).toUint32Array();
        for (let D = 0, L = 0; D < F.length; D += 4, ++L)
          F.writeUInt32LE(P[L], D);
      }
    }
    function u(m) {
      return new Promise((p, g) => {
        t.readFile(m, (M, k) => M ? g(M) : p(k));
      });
    }
    function d(m, p) {
      return new Promise((g, M) => {
        t.writeFile(m, p, (k) => k ? M(k) : g());
      });
    }
  })(gifutil)), gifutil;
}
var hasRequiredGifcodec;
function requireGifcodec() {
  if (hasRequiredGifcodec) return gifcodec;
  hasRequiredGifcodec = 1;
  const e = requireOmggif(), { Gif: t, GifError: i } = requireGif();
  function a() {
    const w = requireGifutil();
    return a = function() {
      return w;
    }, w;
  }
  const { GifFrame: r } = requireGifframe(), o = 200, n = 100;
  class s {
    // _transparentRGBA - RGB given to transparent pixels (alpha=0) on decode; defaults to null indicating 0x000000, which is fastest
    /**
     * GifCodec is a class that both encodes and decodes GIFs. It implements both the `encode()` method expected of an encoder and the `decode()` method expected of a decoder, and it wraps the `omggif` GIF encoder/decoder package. GifCodec serves as this library's default encoder and decoder, but it's possible to wrap other GIF encoders and decoders for use by `gifwrap` as well. GifCodec will not encode GIFs with interlacing.
     * 
     * Instances of this class are stateless and can be shared across multiple encodings and decodings.
     * 
     * Its constructor takes one option argument:
     * 
     * @param {object} options Optionally takes an objection whose only possible property is `transparentRGB`. Images are internally represented in RGBA format, where A is the alpha value of a pixel. When `transparentRGB` is provided, this RGB value (excluding alpha) is assigned to transparent pixels, which are also given alpha value 0x00. (All opaque pixels are given alpha value 0xFF). The RGB color of transparent pixels shouldn't matter for most applications. Defaults to 0x000000.
     */
    constructor(v = {}) {
      this._transparentRGB = null, typeof v.transparentRGB == "number" && v.transparentRGB !== 0 && (this._transparentRGBA = v.transparentRGB * 256), this._testInitialBufferSize = 0;
    }
    /**
     * Decodes a GIF from a Buffer to yield an instance of Gif. Transparent pixels of the GIF are given alpha values of 0x00, and opaque pixels are given alpha values of 0xFF. The RGB values of transparent pixels default to 0x000000 but can be overridden by the constructor's `transparentRGB` option.
     * 
     * @param {Buffer} buffer Bytes of an encoded GIF to decode.
     * @return {Promise} A Promise that resolves to an instance of the Gif class, representing the encoded GIF.
     * @throws {GifError} Error upon encountered an encoding-related problem with a GIF, so that the caller can distinguish between software errors and problems with GIFs.
     */
    decodeGif(v) {
      try {
        let C;
        try {
          C = new e.GifReader(v);
        } catch (b) {
          throw new i(b);
        }
        const B = C.numFrames(), A = [], S = {
          width: C.width,
          height: C.height,
          loops: C.loopCount()
        };
        S.usesTransparency = !1;
        for (let b = 0; b < B; ++b) {
          const E = this._decodeFrame(C, b, S.usesTransparency);
          A.push(E.frame), E.usesTransparency && (S.usesTransparency = !0);
        }
        return Promise.resolve(new t(v, A, S));
      } catch (C) {
        return Promise.reject(C);
      }
    }
    /**
     * Encodes a GIF from provided frames. Each pixel having an alpha value of 0x00 renders as transparent within the encoding, while all pixels of non-zero alpha value render as opaque.
     * 
     * @param {GifFrame[]} frames Array of frames to encode
     * @param {object} spec An optional object that may provide values for `loops` and `colorScope`, as defined for the Gif class. However, `colorSpace` may also take the value Gif.GlobalColorsPreferred (== 0) to indicate that the encoder should attempt to create only a global color table. `loop` defaults to 0, looping indefinitely. Set `loop` to null to disable looping, playing only once. `colorScope` defaults to Gif.GlobalColorsPreferred.
     * @return {Promise} A Promise that resolves to an instance of the Gif class, representing the encoded GIF.
     * @throws {GifError} Error upon encountered an encoding-related problem with a GIF, so that the caller can distinguish between software errors and problems with GIFs.
     */
    encodeGif(v, C = {}) {
      try {
        if (v === null || v.length === 0)
          throw new i("there are no frames");
        const B = a().getMaxDimensions(v);
        return C = Object.assign({}, C), C.width = B.maxWidth, C.height = B.maxHeight, C.loops === void 0 && (C.loops = 0), C.colorScope = C.colorScope || t.GlobalColorsPreferred, Promise.resolve(this._encodeGif(v, C));
      } catch (B) {
        return Promise.reject(B);
      }
    }
    _decodeFrame(v, C, B) {
      let A, S;
      try {
        if (A = v.frameInfo(C), S = new Buffer(v.width * v.height * 4), v.decodeAndBlitFrameRGBA(C, S), A.width !== v.width || A.height !== v.height) {
          if (A.y && (S = S.slice(A.y * v.width * 4)), v.width > A.width)
            for (let F = 0; F < A.height; ++F)
              S.copy(
                S,
                F * A.width * 4,
                (A.x + F * v.width) * 4,
                (A.x + F * v.width) * 4 + A.width * 4
              );
          S = S.slice(0, A.width * A.height * 4);
        }
      } catch (F) {
        throw new i(F);
      }
      let b = !1;
      if (this._transparentRGBA === null) {
        if (!B)
          for (let F = 3; F < S.length; F += 4)
            S[F] === 0 && (b = !0, F = S.length);
      } else
        for (let F = 3; F < S.length; F += 4)
          S[F] === 0 && (S.writeUInt32BE(this._transparentRGBA, F - 3), b = !0);
      return { frame: new r(A.width, A.height, S, {
        xOffset: A.x,
        yOffset: A.y,
        disposalMethod: A.disposal,
        interlaced: A.interlaced,
        delayCentisecs: A.delay
      }), usesTransparency: b };
    }
    _encodeGif(v, C) {
      let B;
      if (C.colorScope === t.LocalColorsOnly)
        B = a().getColorInfo(v, 0);
      else if (B = a().getColorInfo(v, 256), !B.colors) {
        if (C.colorScope === t.GlobalColorsOnly)
          throw new i(
            "Too many color indexes for global color table"
          );
        C.colorScope = t.LocalColorsOnly;
      }
      C.usesTransparency = B.usesTransparency;
      const A = B.palettes;
      return C.colorScope === t.LocalColorsOnly ? d(v, C, 2e3, A) : u(v, C, 2e3, B);
    }
    _getSizeEstimateGlobal(v, C) {
      if (this._testInitialBufferSize > 0)
        return this._testInitialBufferSize;
      let B = o + 3 * 256;
      const A = M(v);
      return C.forEach((S) => {
        B += p(S, A);
      }), B;
    }
    _getSizeEstimateLocal(v, C) {
      if (this._testInitialBufferSize > 0)
        return this._testInitialBufferSize;
      let B = o;
      for (let A = 0; A < C.length; ++A) {
        const S = v[A], b = M(S);
        B += p(C[A], b);
      }
      return B;
    }
  }
  gifcodec.GifCodec = s;
  function l(w, v) {
    const C = w.indexOf(v);
    return C === -1 ? null : C;
  }
  function h(w, v) {
    for (var C = 0, B = w.length - 1, A; C <= B; )
      if (A = Math.floor((C + B) / 2), w[A] > v)
        B = A - 1;
      else if (w[A] < v)
        C = A + 1;
      else
        return A;
    return null;
  }
  function u(w, v, C, B) {
    const A = {
      colors: B.colors.slice(),
      usesTransparency: B.usesTransparency
    };
    m(A);
    const S = {
      palette: A.colors,
      loop: v.loops
    };
    let b = new Buffer(C), E;
    try {
      E = new e.GifWriter(
        b,
        v.width,
        v.height,
        S
      );
    } catch (F) {
      throw new i(F);
    }
    for (let F = 0; F < w.length; ++F)
      b = k(E, F, w[F], B, !1);
    return new t(b.slice(0, E.end()), w, v);
  }
  function d(w, v, C, B) {
    const A = {
      loop: v.loops
    };
    let S = new Buffer(C), b;
    try {
      b = new e.GifWriter(
        S,
        v.width,
        v.height,
        A
      );
    } catch (E) {
      throw new i(E);
    }
    for (let E = 0; E < w.length; ++E)
      S = k(b, E, w[E], B[E], !0);
    return new t(S.slice(0, b.end()), w, v);
  }
  function m(w) {
    const v = w.colors;
    w.usesTransparency && v.push(0);
    const C = v.length;
    let B = 2;
    for (; C > B; )
      B <<= 1;
    v.length = B, v.fill(0, C);
  }
  function p(w, v) {
    let C = w.bitmap.width * w.bitmap.height;
    return C = Math.ceil(C * v / 8), C += Math.ceil(C / 255), n + C + 3 * 256;
  }
  function g(w, v, C) {
    const B = C.colors, A = B.length <= 8 ? (
      // guess at the break-even
      l
    ) : h, S = v.bitmap.data, b = new Buffer(S.length / 4);
    let E = B.length, F = 0, Z = 0;
    for (; F < S.length; ) {
      if (S[F + 3] !== 0) {
        const P = S.readUInt32BE(F, !0) >> 8 & 16777215;
        b[Z] = A(B, P);
      } else
        b[Z] = E;
      F += 4, ++Z;
    }
    if (C.usesTransparency) {
      if (E === 256)
        throw new i(`Frame ${w} already has 256 colorsand so can't use transparency`);
    } else
      E = null;
    return { buffer: b, transparentIndex: E };
  }
  function M(w) {
    let v = w.indexCount, C = 0;
    for (--v; v; )
      ++C, v >>= 1;
    return C > 0 ? C : 1;
  }
  function k(w, v, C, B, A) {
    if (C.interlaced)
      throw new i("writing interlaced GIFs is not supported");
    const S = g(v, C, B), b = {
      delay: C.delayCentisecs,
      disposal: C.disposalMethod,
      transparent: S.transparentIndex
    };
    A && (m(B), b.palette = B.colors);
    try {
      let E = w.getOutputBuffer(), F = w.getOutputBufferPosition(), Z, P = !0;
      for (; P; )
        if (Z = w.addFrame(
          C.xOffset,
          C.yOffset,
          C.bitmap.width,
          C.bitmap.height,
          S.buffer,
          b
        ), P = !1, Z >= E.length - 1) {
          const D = new Buffer(E.length * 1.5);
          E.copy(D), w.setOutputBuffer(D), w.setOutputBufferPosition(F), E = D, P = !0;
        }
      return E;
    } catch (E) {
      throw new i(E);
    }
  }
  return gifcodec;
}
var src, hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src;
  hasRequiredSrc = 1;
  const e = requireBitmapimage(), { Gif: t, GifError: i } = requireGif(), { GifCodec: a } = requireGifcodec(), { GifFrame: r } = requireGifframe(), o = requireGifutil();
  return src = {
    BitmapImage: e,
    Gif: t,
    GifCodec: a,
    GifFrame: r,
    GifUtil: o,
    GifError: i
  }, src;
}
var srcExports = requireSrc();
function gif() {
  return {
    mime: "image/gif",
    encode: async (e) => {
      const t = new srcExports.BitmapImage(e);
      srcExports.GifUtil.quantizeDekker(t, 256);
      const i = new srcExports.GifFrame(e);
      return (await new srcExports.GifCodec().encodeGif([i], {})).buffer;
    },
    decode: (e) => {
      const t = new GIF.GifReader(e), i = Buffer.alloc(t.width * t.height * 4);
      return t.decodeAndBlitFrameRGBA(0, i), {
        data: i,
        width: t.width,
        height: t.height
      };
    }
  };
}
var encoder = { exports: {} }, hasRequiredEncoder;
function requireEncoder() {
  return hasRequiredEncoder || (hasRequiredEncoder = 1, (function(e) {
    function t(a) {
      var r = Math.floor, o = new Array(64), n = new Array(64), s = new Array(64), l = new Array(64), h, u, d, m, p = new Array(65535), g = new Array(65535), M = new Array(64), k = new Array(64), w = [], v = 0, C = 7, B = new Array(64), A = new Array(64), S = new Array(64), b = new Array(256), E = new Array(2048), F, Z = [
        0,
        1,
        5,
        6,
        14,
        15,
        27,
        28,
        2,
        4,
        7,
        13,
        16,
        26,
        29,
        42,
        3,
        8,
        12,
        17,
        25,
        30,
        41,
        43,
        9,
        11,
        18,
        24,
        31,
        40,
        44,
        53,
        10,
        19,
        23,
        32,
        39,
        45,
        52,
        54,
        20,
        22,
        33,
        38,
        46,
        51,
        55,
        60,
        21,
        34,
        37,
        47,
        50,
        56,
        59,
        61,
        35,
        36,
        48,
        49,
        57,
        58,
        62,
        63
      ], P = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], D = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], L = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], q = [
        1,
        2,
        3,
        0,
        4,
        17,
        5,
        18,
        33,
        49,
        65,
        6,
        19,
        81,
        97,
        7,
        34,
        113,
        20,
        50,
        129,
        145,
        161,
        8,
        35,
        66,
        177,
        193,
        21,
        82,
        209,
        240,
        36,
        51,
        98,
        114,
        130,
        9,
        10,
        22,
        23,
        24,
        25,
        26,
        37,
        38,
        39,
        40,
        41,
        42,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        225,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        241,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250
      ], j = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], J = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], ie = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], V = [
        0,
        1,
        2,
        3,
        17,
        4,
        5,
        33,
        49,
        6,
        18,
        65,
        81,
        7,
        97,
        113,
        19,
        34,
        50,
        129,
        8,
        20,
        66,
        145,
        161,
        177,
        193,
        9,
        35,
        51,
        82,
        240,
        21,
        98,
        114,
        209,
        10,
        22,
        36,
        52,
        225,
        37,
        241,
        23,
        24,
        25,
        26,
        38,
        39,
        40,
        41,
        42,
        53,
        54,
        55,
        56,
        57,
        58,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250
      ];
      function Q(se) {
        for (var Fe = [
          16,
          11,
          10,
          16,
          24,
          40,
          51,
          61,
          12,
          12,
          14,
          19,
          26,
          58,
          60,
          55,
          14,
          13,
          16,
          24,
          40,
          57,
          69,
          56,
          14,
          17,
          22,
          29,
          51,
          87,
          80,
          62,
          18,
          22,
          37,
          56,
          68,
          109,
          103,
          77,
          24,
          35,
          55,
          64,
          81,
          104,
          113,
          92,
          49,
          64,
          78,
          87,
          103,
          121,
          120,
          101,
          72,
          92,
          95,
          98,
          112,
          100,
          103,
          99
        ], Pe = 0; Pe < 64; Pe++) {
          var Te = r((Fe[Pe] * se + 50) / 100);
          Te < 1 ? Te = 1 : Te > 255 && (Te = 255), o[Z[Pe]] = Te;
        }
        for (var ze = [
          17,
          18,
          24,
          47,
          99,
          99,
          99,
          99,
          18,
          21,
          26,
          66,
          99,
          99,
          99,
          99,
          24,
          26,
          56,
          99,
          99,
          99,
          99,
          99,
          47,
          66,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99,
          99
        ], We = 0; We < 64; We++) {
          var He = r((ze[We] * se + 50) / 100);
          He < 1 ? He = 1 : He > 255 && (He = 255), n[Z[We]] = He;
        }
        for (var Ne = [
          1,
          1.387039845,
          1.306562965,
          1.175875602,
          1,
          0.785694958,
          0.5411961,
          0.275899379
        ], Ge = 0, Le = 0; Le < 8; Le++)
          for (var Oe = 0; Oe < 8; Oe++)
            s[Ge] = 1 / (o[Z[Ge]] * Ne[Le] * Ne[Oe] * 8), l[Ge] = 1 / (n[Z[Ge]] * Ne[Le] * Ne[Oe] * 8), Ge++;
      }
      function ee(se, Fe) {
        for (var Pe = 0, Te = 0, ze = new Array(), We = 1; We <= 16; We++) {
          for (var He = 1; He <= se[We]; He++)
            ze[Fe[Te]] = [], ze[Fe[Te]][0] = Pe, ze[Fe[Te]][1] = We, Te++, Pe++;
          Pe *= 2;
        }
        return ze;
      }
      function xe() {
        h = ee(P, D), u = ee(j, J), d = ee(L, q), m = ee(ie, V);
      }
      function ke() {
        for (var se = 1, Fe = 2, Pe = 1; Pe <= 15; Pe++) {
          for (var Te = se; Te < Fe; Te++)
            g[32767 + Te] = Pe, p[32767 + Te] = [], p[32767 + Te][1] = Pe, p[32767 + Te][0] = Te;
          for (var ze = -(Fe - 1); ze <= -se; ze++)
            g[32767 + ze] = Pe, p[32767 + ze] = [], p[32767 + ze][1] = Pe, p[32767 + ze][0] = Fe - 1 + ze;
          se <<= 1, Fe <<= 1;
        }
      }
      function ve() {
        for (var se = 0; se < 256; se++)
          E[se] = 19595 * se, E[se + 256 >> 0] = 38470 * se, E[se + 512 >> 0] = 7471 * se + 32768, E[se + 768 >> 0] = -11059 * se, E[se + 1024 >> 0] = -21709 * se, E[se + 1280 >> 0] = 32768 * se + 8421375, E[se + 1536 >> 0] = -27439 * se, E[se + 1792 >> 0] = -5329 * se;
      }
      function H(se) {
        for (var Fe = se[0], Pe = se[1] - 1; Pe >= 0; )
          Fe & 1 << Pe && (v |= 1 << C), Pe--, C--, C < 0 && (v == 255 ? (W(255), W(0)) : W(v), C = 7, v = 0);
      }
      function W(se) {
        w.push(se);
      }
      function U(se) {
        W(se >> 8 & 255), W(se & 255);
      }
      function re(se, Fe) {
        var Pe, Te, ze, We, He, Ne, Ge, Le, Oe = 0, Ke, O = 8, ge = 64;
        for (Ke = 0; Ke < O; ++Ke) {
          Pe = se[Oe], Te = se[Oe + 1], ze = se[Oe + 2], We = se[Oe + 3], He = se[Oe + 4], Ne = se[Oe + 5], Ge = se[Oe + 6], Le = se[Oe + 7];
          var oe = Pe + Le, be = Pe - Le, $ = Te + Ge, pe = Te - Ge, I = ze + Ne, me = ze - Ne, qe = We + He, _ = We - He, te = oe + qe, fe = oe - qe, R = $ + I, K = $ - I;
          se[Oe] = te + R, se[Oe + 4] = te - R;
          var _e = (K + fe) * 0.707106781;
          se[Oe + 2] = fe + _e, se[Oe + 6] = fe - _e, te = _ + me, R = me + pe, K = pe + be;
          var Ye = (te - K) * 0.382683433, Ue = 0.5411961 * te + Ye, je = 1.306562965 * K + Ye, tt = R * 0.707106781, mt = be + tt, st = be - tt;
          se[Oe + 5] = st + Ue, se[Oe + 3] = st - Ue, se[Oe + 1] = mt + je, se[Oe + 7] = mt - je, Oe += 8;
        }
        for (Oe = 0, Ke = 0; Ke < O; ++Ke) {
          Pe = se[Oe], Te = se[Oe + 8], ze = se[Oe + 16], We = se[Oe + 24], He = se[Oe + 32], Ne = se[Oe + 40], Ge = se[Oe + 48], Le = se[Oe + 56];
          var rt = Pe + Le, Ve = Pe - Le, ht = Te + Ge, pt = Te - Ge, xt = ze + Ne, vt = ze - Ne, ct = We + He, ft = We - He, dt = rt + ct, ot = rt - ct, ut = ht + xt, yt = ht - xt;
          se[Oe] = dt + ut, se[Oe + 32] = dt - ut;
          var Et = (yt + ot) * 0.707106781;
          se[Oe + 16] = ot + Et, se[Oe + 48] = ot - Et, dt = ft + vt, ut = vt + pt, yt = pt + Ve;
          var Rt = (dt - yt) * 0.382683433, Ft = 0.5411961 * dt + Rt, Dt = 1.306562965 * yt + Rt, zt = ut * 0.707106781, Ct = Ve + zt, At = Ve - zt;
          se[Oe + 40] = At + Ft, se[Oe + 24] = At - Ft, se[Oe + 8] = Ct + Dt, se[Oe + 56] = Ct - Dt, Oe++;
        }
        var wt;
        for (Ke = 0; Ke < ge; ++Ke)
          wt = se[Ke] * Fe[Ke], M[Ke] = wt > 0 ? wt + 0.5 | 0 : wt - 0.5 | 0;
        return M;
      }
      function ae() {
        U(65504), U(16), W(74), W(70), W(73), W(70), W(0), W(1), W(1), W(0), U(1), U(1), W(0), W(0);
      }
      function we(se) {
        if (se) {
          U(65505), se[0] === 69 && se[1] === 120 && se[2] === 105 && se[3] === 102 ? U(se.length + 2) : (U(se.length + 5 + 2), W(69), W(120), W(105), W(102), W(0));
          for (var Fe = 0; Fe < se.length; Fe++)
            W(se[Fe]);
        }
      }
      function Ae(se, Fe) {
        U(65472), U(17), W(8), U(Fe), U(se), W(3), W(1), W(17), W(0), W(2), W(17), W(1), W(3), W(17), W(1);
      }
      function he() {
        U(65499), U(132), W(0);
        for (var se = 0; se < 64; se++)
          W(o[se]);
        W(1);
        for (var Fe = 0; Fe < 64; Fe++)
          W(n[Fe]);
      }
      function ue() {
        U(65476), U(418), W(0);
        for (var se = 0; se < 16; se++)
          W(P[se + 1]);
        for (var Fe = 0; Fe <= 11; Fe++)
          W(D[Fe]);
        W(16);
        for (var Pe = 0; Pe < 16; Pe++)
          W(L[Pe + 1]);
        for (var Te = 0; Te <= 161; Te++)
          W(q[Te]);
        W(1);
        for (var ze = 0; ze < 16; ze++)
          W(j[ze + 1]);
        for (var We = 0; We <= 11; We++)
          W(J[We]);
        W(17);
        for (var He = 0; He < 16; He++)
          W(ie[He + 1]);
        for (var Ne = 0; Ne <= 161; Ne++)
          W(V[Ne]);
      }
      function ce(se) {
        typeof se > "u" || se.constructor !== Array || se.forEach((Fe) => {
          if (typeof Fe == "string") {
            U(65534);
            var Pe = Fe.length;
            U(Pe + 2);
            var Te;
            for (Te = 0; Te < Pe; Te++)
              W(Fe.charCodeAt(Te));
          }
        });
      }
      function ye() {
        U(65498), U(12), W(3), W(1), W(0), W(2), W(17), W(3), W(17), W(0), W(63), W(0);
      }
      function Se(se, Fe, Pe, Te, ze) {
        for (var We = ze[0], He = ze[240], Ne, Ge = 16, Le = 63, Oe = 64, Ke = re(se, Fe), O = 0; O < Oe; ++O)
          k[Z[O]] = Ke[O];
        var ge = k[0] - Pe;
        Pe = k[0], ge == 0 ? H(Te[0]) : (Ne = 32767 + ge, H(Te[g[Ne]]), H(p[Ne]));
        for (var oe = 63; oe > 0 && k[oe] == 0; oe--)
          ;
        if (oe == 0)
          return H(We), Pe;
        for (var be = 1, $; be <= oe; ) {
          for (var pe = be; k[be] == 0 && be <= oe; ++be)
            ;
          var I = be - pe;
          if (I >= Ge) {
            $ = I >> 4;
            for (var me = 1; me <= $; ++me)
              H(He);
            I = I & 15;
          }
          Ne = 32767 + k[be], H(ze[(I << 4) + g[Ne]]), H(p[Ne]), be++;
        }
        return oe != Le && H(We), Pe;
      }
      function Ie() {
        for (var se = String.fromCharCode, Fe = 0; Fe < 256; Fe++)
          b[Fe] = se(Fe);
      }
      this.encode = function(se, Fe) {
        (/* @__PURE__ */ new Date()).getTime(), Fe && Be(Fe), w = new Array(), v = 0, C = 7, U(65496), ae(), ce(se.comments), we(se.exifBuffer), he(), Ae(se.width, se.height), ue(), ye();
        var Pe = 0, Te = 0, ze = 0;
        v = 0, C = 7, this.encode.displayName = "_encode_";
        for (var We = se.data, He = se.width, Ne = se.height, Ge = He * 4, Le, Oe = 0, Ke, O, ge, oe, be, $, pe, I; Oe < Ne; ) {
          for (Le = 0; Le < Ge; ) {
            for (oe = Ge * Oe + Le, be = oe, $ = -1, pe = 0, I = 0; I < 64; I++)
              pe = I >> 3, $ = (I & 7) * 4, be = oe + pe * Ge + $, Oe + pe >= Ne && (be -= Ge * (Oe + 1 + pe - Ne)), Le + $ >= Ge && (be -= Le + $ - Ge + 4), Ke = We[be++], O = We[be++], ge = We[be++], B[I] = (E[Ke] + E[O + 256 >> 0] + E[ge + 512 >> 0] >> 16) - 128, A[I] = (E[Ke + 768 >> 0] + E[O + 1024 >> 0] + E[ge + 1280 >> 0] >> 16) - 128, S[I] = (E[Ke + 1280 >> 0] + E[O + 1536 >> 0] + E[ge + 1792 >> 0] >> 16) - 128;
            Pe = Se(B, s, Pe, h, d), Te = Se(A, l, Te, u, m), ze = Se(S, l, ze, u, m), Le += 32;
          }
          Oe += 8;
        }
        if (C >= 0) {
          var me = [];
          me[1] = C + 1, me[0] = (1 << C + 1) - 1, H(me);
        }
        return U(65497), Buffer.from(w);
      };
      function Be(se) {
        if (se <= 0 && (se = 1), se > 100 && (se = 100), F != se) {
          var Fe = 0;
          se < 50 ? Fe = Math.floor(5e3 / se) : Fe = Math.floor(200 - se * 2), Q(Fe), F = se;
        }
      }
      function Ce() {
        var se = (/* @__PURE__ */ new Date()).getTime();
        a || (a = 50), Ie(), xe(), ke(), ve(), Be(a), (/* @__PURE__ */ new Date()).getTime() - se;
      }
      Ce();
    }
    e.exports = i;
    function i(a, r) {
      typeof r > "u" && (r = 50);
      var o = new t(r), n = o.encode(a, r);
      return {
        data: n,
        width: a.width,
        height: a.height
      };
    }
  })(encoder)), encoder.exports;
}
var decoder = { exports: {} }, hasRequiredDecoder;
function requireDecoder() {
  return hasRequiredDecoder || (hasRequiredDecoder = 1, (function(e) {
    var t = (function() {
      var r = new Int32Array([
        0,
        1,
        8,
        16,
        9,
        2,
        3,
        10,
        17,
        24,
        32,
        25,
        18,
        11,
        4,
        5,
        12,
        19,
        26,
        33,
        40,
        48,
        41,
        34,
        27,
        20,
        13,
        6,
        7,
        14,
        21,
        28,
        35,
        42,
        49,
        56,
        57,
        50,
        43,
        36,
        29,
        22,
        15,
        23,
        30,
        37,
        44,
        51,
        58,
        59,
        52,
        45,
        38,
        31,
        39,
        46,
        53,
        60,
        61,
        54,
        47,
        55,
        62,
        63
      ]), o = 4017, n = 799, s = 3406, l = 2276, h = 1567, u = 3784, d = 5793, m = 2896;
      function p() {
      }
      function g(A, S) {
        for (var b = 0, E = [], F, Z, P = 16; P > 0 && !A[P - 1]; )
          P--;
        E.push({ children: [], index: 0 });
        var D = E[0], L;
        for (F = 0; F < P; F++) {
          for (Z = 0; Z < A[F]; Z++) {
            for (D = E.pop(), D.children[D.index] = S[b]; D.index > 0; ) {
              if (E.length === 0)
                throw new Error("Could not recreate Huffman Table");
              D = E.pop();
            }
            for (D.index++, E.push(D); E.length <= F; )
              E.push(L = { children: [], index: 0 }), D.children[D.index] = L.children, D = L;
            b++;
          }
          F + 1 < P && (E.push(L = { children: [], index: 0 }), D.children[D.index] = L.children, D = L);
        }
        return E[0].children;
      }
      function M(A, S, b, E, F, Z, P, D, L, q) {
        b.precision, b.samplesPerLine, b.scanLines;
        var j = b.mcusPerLine, J = b.progressive;
        b.maxH, b.maxV;
        var ie = S, V = 0, Q = 0;
        function ee() {
          if (Q > 0)
            return Q--, V >> Q & 1;
          if (V = A[S++], V == 255) {
            var Ne = A[S++];
            if (Ne)
              throw new Error("unexpected marker: " + (V << 8 | Ne).toString(16));
          }
          return Q = 7, V >>> 7;
        }
        function xe(Ne) {
          for (var Ge = Ne, Le; (Le = ee()) !== null; ) {
            if (Ge = Ge[Le], typeof Ge == "number")
              return Ge;
            if (typeof Ge != "object")
              throw new Error("invalid huffman sequence");
          }
          return null;
        }
        function ke(Ne) {
          for (var Ge = 0; Ne > 0; ) {
            var Le = ee();
            if (Le === null) return;
            Ge = Ge << 1 | Le, Ne--;
          }
          return Ge;
        }
        function ve(Ne) {
          var Ge = ke(Ne);
          return Ge >= 1 << Ne - 1 ? Ge : Ge + (-1 << Ne) + 1;
        }
        function H(Ne, Ge) {
          var Le = xe(Ne.huffmanTableDC), Oe = Le === 0 ? 0 : ve(Le);
          Ge[0] = Ne.pred += Oe;
          for (var Ke = 1; Ke < 64; ) {
            var O = xe(Ne.huffmanTableAC), ge = O & 15, oe = O >> 4;
            if (ge === 0) {
              if (oe < 15)
                break;
              Ke += 16;
              continue;
            }
            Ke += oe;
            var be = r[Ke];
            Ge[be] = ve(ge), Ke++;
          }
        }
        function W(Ne, Ge) {
          var Le = xe(Ne.huffmanTableDC), Oe = Le === 0 ? 0 : ve(Le) << L;
          Ge[0] = Ne.pred += Oe;
        }
        function U(Ne, Ge) {
          Ge[0] |= ee() << L;
        }
        var re = 0;
        function ae(Ne, Ge) {
          if (re > 0) {
            re--;
            return;
          }
          for (var Le = Z, Oe = P; Le <= Oe; ) {
            var Ke = xe(Ne.huffmanTableAC), O = Ke & 15, ge = Ke >> 4;
            if (O === 0) {
              if (ge < 15) {
                re = ke(ge) + (1 << ge) - 1;
                break;
              }
              Le += 16;
              continue;
            }
            Le += ge;
            var oe = r[Le];
            Ge[oe] = ve(O) * (1 << L), Le++;
          }
        }
        var we = 0, Ae;
        function he(Ne, Ge) {
          for (var Le = Z, Oe = P, Ke = 0; Le <= Oe; ) {
            var O = r[Le], ge = Ge[O] < 0 ? -1 : 1;
            switch (we) {
              case 0:
                var oe = xe(Ne.huffmanTableAC), be = oe & 15, Ke = oe >> 4;
                if (be === 0)
                  Ke < 15 ? (re = ke(Ke) + (1 << Ke), we = 4) : (Ke = 16, we = 1);
                else {
                  if (be !== 1)
                    throw new Error("invalid ACn encoding");
                  Ae = ve(be), we = Ke ? 2 : 3;
                }
                continue;
              case 1:
              // skipping r zero items
              case 2:
                Ge[O] ? Ge[O] += (ee() << L) * ge : (Ke--, Ke === 0 && (we = we == 2 ? 3 : 0));
                break;
              case 3:
                Ge[O] ? Ge[O] += (ee() << L) * ge : (Ge[O] = Ae << L, we = 0);
                break;
              case 4:
                Ge[O] && (Ge[O] += (ee() << L) * ge);
                break;
            }
            Le++;
          }
          we === 4 && (re--, re === 0 && (we = 0));
        }
        function ue(Ne, Ge, Le, Oe, Ke) {
          var O = Le / j | 0, ge = Le % j, oe = O * Ne.v + Oe, be = ge * Ne.h + Ke;
          Ne.blocks[oe] === void 0 && q.tolerantDecoding || Ge(Ne, Ne.blocks[oe][be]);
        }
        function ce(Ne, Ge, Le) {
          var Oe = Le / Ne.blocksPerLine | 0, Ke = Le % Ne.blocksPerLine;
          Ne.blocks[Oe] === void 0 && q.tolerantDecoding || Ge(Ne, Ne.blocks[Oe][Ke]);
        }
        var ye = E.length, Se, Ie, Be, Ce, se, Fe;
        J ? Z === 0 ? Fe = D === 0 ? W : U : Fe = D === 0 ? ae : he : Fe = H;
        var Pe = 0, Te, ze;
        ye == 1 ? ze = E[0].blocksPerLine * E[0].blocksPerColumn : ze = j * b.mcusPerColumn, F || (F = ze);
        for (var We, He; Pe < ze; ) {
          for (Ie = 0; Ie < ye; Ie++)
            E[Ie].pred = 0;
          if (re = 0, ye == 1)
            for (Se = E[0], se = 0; se < F; se++)
              ce(Se, Fe, Pe), Pe++;
          else
            for (se = 0; se < F; se++) {
              for (Ie = 0; Ie < ye; Ie++)
                for (Se = E[Ie], We = Se.h, He = Se.v, Be = 0; Be < He; Be++)
                  for (Ce = 0; Ce < We; Ce++)
                    ue(Se, Fe, Pe, Be, Ce);
              if (Pe++, Pe === ze) break;
            }
          if (Pe === ze)
            do {
              if (A[S] === 255 && A[S + 1] !== 0)
                break;
              S += 1;
            } while (S < A.length - 2);
          if (Q = 0, Te = A[S] << 8 | A[S + 1], Te < 65280)
            throw new Error("marker was not found");
          if (Te >= 65488 && Te <= 65495)
            S += 2;
          else
            break;
        }
        return S - ie;
      }
      function k(A, S) {
        var b = [], E = S.blocksPerLine, F = S.blocksPerColumn, Z = E << 3, P = new Int32Array(64), D = new Uint8Array(64);
        function L(ke, ve, H) {
          var W = S.quantizationTable, U, re, ae, we, Ae, he, ue, ce, ye, Se = H, Ie;
          for (Ie = 0; Ie < 64; Ie++)
            Se[Ie] = ke[Ie] * W[Ie];
          for (Ie = 0; Ie < 8; ++Ie) {
            var Be = 8 * Ie;
            if (Se[1 + Be] == 0 && Se[2 + Be] == 0 && Se[3 + Be] == 0 && Se[4 + Be] == 0 && Se[5 + Be] == 0 && Se[6 + Be] == 0 && Se[7 + Be] == 0) {
              ye = d * Se[0 + Be] + 512 >> 10, Se[0 + Be] = ye, Se[1 + Be] = ye, Se[2 + Be] = ye, Se[3 + Be] = ye, Se[4 + Be] = ye, Se[5 + Be] = ye, Se[6 + Be] = ye, Se[7 + Be] = ye;
              continue;
            }
            U = d * Se[0 + Be] + 128 >> 8, re = d * Se[4 + Be] + 128 >> 8, ae = Se[2 + Be], we = Se[6 + Be], Ae = m * (Se[1 + Be] - Se[7 + Be]) + 128 >> 8, ce = m * (Se[1 + Be] + Se[7 + Be]) + 128 >> 8, he = Se[3 + Be] << 4, ue = Se[5 + Be] << 4, ye = U - re + 1 >> 1, U = U + re + 1 >> 1, re = ye, ye = ae * u + we * h + 128 >> 8, ae = ae * h - we * u + 128 >> 8, we = ye, ye = Ae - ue + 1 >> 1, Ae = Ae + ue + 1 >> 1, ue = ye, ye = ce + he + 1 >> 1, he = ce - he + 1 >> 1, ce = ye, ye = U - we + 1 >> 1, U = U + we + 1 >> 1, we = ye, ye = re - ae + 1 >> 1, re = re + ae + 1 >> 1, ae = ye, ye = Ae * l + ce * s + 2048 >> 12, Ae = Ae * s - ce * l + 2048 >> 12, ce = ye, ye = he * n + ue * o + 2048 >> 12, he = he * o - ue * n + 2048 >> 12, ue = ye, Se[0 + Be] = U + ce, Se[7 + Be] = U - ce, Se[1 + Be] = re + ue, Se[6 + Be] = re - ue, Se[2 + Be] = ae + he, Se[5 + Be] = ae - he, Se[3 + Be] = we + Ae, Se[4 + Be] = we - Ae;
          }
          for (Ie = 0; Ie < 8; ++Ie) {
            var Ce = Ie;
            if (Se[8 + Ce] == 0 && Se[16 + Ce] == 0 && Se[24 + Ce] == 0 && Se[32 + Ce] == 0 && Se[40 + Ce] == 0 && Se[48 + Ce] == 0 && Se[56 + Ce] == 0) {
              ye = d * H[Ie + 0] + 8192 >> 14, Se[0 + Ce] = ye, Se[8 + Ce] = ye, Se[16 + Ce] = ye, Se[24 + Ce] = ye, Se[32 + Ce] = ye, Se[40 + Ce] = ye, Se[48 + Ce] = ye, Se[56 + Ce] = ye;
              continue;
            }
            U = d * Se[0 + Ce] + 2048 >> 12, re = d * Se[32 + Ce] + 2048 >> 12, ae = Se[16 + Ce], we = Se[48 + Ce], Ae = m * (Se[8 + Ce] - Se[56 + Ce]) + 2048 >> 12, ce = m * (Se[8 + Ce] + Se[56 + Ce]) + 2048 >> 12, he = Se[24 + Ce], ue = Se[40 + Ce], ye = U - re + 1 >> 1, U = U + re + 1 >> 1, re = ye, ye = ae * u + we * h + 2048 >> 12, ae = ae * h - we * u + 2048 >> 12, we = ye, ye = Ae - ue + 1 >> 1, Ae = Ae + ue + 1 >> 1, ue = ye, ye = ce + he + 1 >> 1, he = ce - he + 1 >> 1, ce = ye, ye = U - we + 1 >> 1, U = U + we + 1 >> 1, we = ye, ye = re - ae + 1 >> 1, re = re + ae + 1 >> 1, ae = ye, ye = Ae * l + ce * s + 2048 >> 12, Ae = Ae * s - ce * l + 2048 >> 12, ce = ye, ye = he * n + ue * o + 2048 >> 12, he = he * o - ue * n + 2048 >> 12, ue = ye, Se[0 + Ce] = U + ce, Se[56 + Ce] = U - ce, Se[8 + Ce] = re + ue, Se[48 + Ce] = re - ue, Se[16 + Ce] = ae + he, Se[40 + Ce] = ae - he, Se[24 + Ce] = we + Ae, Se[32 + Ce] = we - Ae;
          }
          for (Ie = 0; Ie < 64; ++Ie) {
            var se = 128 + (Se[Ie] + 8 >> 4);
            ve[Ie] = se < 0 ? 0 : se > 255 ? 255 : se;
          }
        }
        B(Z * F * 8);
        for (var q, j, J = 0; J < F; J++) {
          var ie = J << 3;
          for (q = 0; q < 8; q++)
            b.push(new Uint8Array(Z));
          for (var V = 0; V < E; V++) {
            L(S.blocks[J][V], D, P);
            var Q = 0, ee = V << 3;
            for (j = 0; j < 8; j++) {
              var xe = b[ie + j];
              for (q = 0; q < 8; q++)
                xe[ee + q] = D[Q++];
            }
          }
        }
        return b;
      }
      function w(A) {
        return A < 0 ? 0 : A > 255 ? 255 : A;
      }
      p.prototype = {
        load: function(S) {
          var b = new XMLHttpRequest();
          b.open("GET", S, !0), b.responseType = "arraybuffer", b.onload = (function() {
            var E = new Uint8Array(b.response || b.mozResponseArrayBuffer);
            this.parse(E), this.onload && this.onload();
          }).bind(this), b.send(null);
        },
        parse: function(S) {
          var b = this.opts.maxResolutionInMP * 1e3 * 1e3, E = 0;
          S.length;
          function F() {
            var ge = S[E] << 8 | S[E + 1];
            return E += 2, ge;
          }
          function Z() {
            var ge = F(), oe = S.subarray(E, E + ge - 2);
            return E += oe.length, oe;
          }
          function P(ge) {
            var oe = 1, be = 1, $, pe;
            for (pe in ge.components)
              ge.components.hasOwnProperty(pe) && ($ = ge.components[pe], oe < $.h && (oe = $.h), be < $.v && (be = $.v));
            var I = Math.ceil(ge.samplesPerLine / 8 / oe), me = Math.ceil(ge.scanLines / 8 / be);
            for (pe in ge.components)
              if (ge.components.hasOwnProperty(pe)) {
                $ = ge.components[pe];
                var qe = Math.ceil(Math.ceil(ge.samplesPerLine / 8) * $.h / oe), _ = Math.ceil(Math.ceil(ge.scanLines / 8) * $.v / be), te = I * $.h, fe = me * $.v, R = fe * te, K = [];
                B(R * 256);
                for (var _e = 0; _e < fe; _e++) {
                  for (var Ye = [], Ue = 0; Ue < te; Ue++)
                    Ye.push(new Int32Array(64));
                  K.push(Ye);
                }
                $.blocksPerLine = qe, $.blocksPerColumn = _, $.blocks = K;
              }
            ge.maxH = oe, ge.maxV = be, ge.mcusPerLine = I, ge.mcusPerColumn = me;
          }
          var D = null, L = null, q, j, J = [], ie = [], V = [], Q = [], ee = F(), xe = -1;
          if (this.comments = [], ee != 65496)
            throw new Error("SOI not found");
          for (ee = F(); ee != 65497; ) {
            var ke, ve;
            switch (ee) {
              case 65280:
                break;
              case 65504:
              // APP0 (Application Specific)
              case 65505:
              // APP1
              case 65506:
              // APP2
              case 65507:
              // APP3
              case 65508:
              // APP4
              case 65509:
              // APP5
              case 65510:
              // APP6
              case 65511:
              // APP7
              case 65512:
              // APP8
              case 65513:
              // APP9
              case 65514:
              // APP10
              case 65515:
              // APP11
              case 65516:
              // APP12
              case 65517:
              // APP13
              case 65518:
              // APP14
              case 65519:
              // APP15
              case 65534:
                var H = Z();
                if (ee === 65534) {
                  var W = String.fromCharCode.apply(null, H);
                  this.comments.push(W);
                }
                ee === 65504 && H[0] === 74 && H[1] === 70 && H[2] === 73 && H[3] === 70 && H[4] === 0 && (D = {
                  version: { major: H[5], minor: H[6] },
                  densityUnits: H[7],
                  xDensity: H[8] << 8 | H[9],
                  yDensity: H[10] << 8 | H[11],
                  thumbWidth: H[12],
                  thumbHeight: H[13],
                  thumbData: H.subarray(14, 14 + 3 * H[12] * H[13])
                }), ee === 65505 && H[0] === 69 && H[1] === 120 && H[2] === 105 && H[3] === 102 && H[4] === 0 && (this.exifBuffer = H.subarray(5, H.length)), ee === 65518 && H[0] === 65 && H[1] === 100 && H[2] === 111 && H[3] === 98 && H[4] === 101 && H[5] === 0 && (L = {
                  version: H[6],
                  flags0: H[7] << 8 | H[8],
                  flags1: H[9] << 8 | H[10],
                  transformCode: H[11]
                });
                break;
              case 65499:
                for (var U = F(), re = U + E - 2; E < re; ) {
                  var ae = S[E++];
                  B(256);
                  var we = new Int32Array(64);
                  if (ae >> 4 === 0)
                    for (ve = 0; ve < 64; ve++) {
                      var Ae = r[ve];
                      we[Ae] = S[E++];
                    }
                  else if (ae >> 4 === 1)
                    for (ve = 0; ve < 64; ve++) {
                      var Ae = r[ve];
                      we[Ae] = F();
                    }
                  else
                    throw new Error("DQT: invalid table spec");
                  J[ae & 15] = we;
                }
                break;
              case 65472:
              // SOF0 (Start of Frame, Baseline DCT)
              case 65473:
              // SOF1 (Start of Frame, Extended DCT)
              case 65474:
                F(), q = {}, q.extended = ee === 65473, q.progressive = ee === 65474, q.precision = S[E++], q.scanLines = F(), q.samplesPerLine = F(), q.components = {}, q.componentsOrder = [];
                var he = q.scanLines * q.samplesPerLine;
                if (he > b) {
                  var ue = Math.ceil((he - b) / 1e6);
                  throw new Error(`maxResolutionInMP limit exceeded by ${ue}MP`);
                }
                var ce = S[E++], ye;
                for (ke = 0; ke < ce; ke++) {
                  ye = S[E];
                  var Se = S[E + 1] >> 4, Ie = S[E + 1] & 15, Be = S[E + 2];
                  if (Se <= 0 || Ie <= 0)
                    throw new Error("Invalid sampling factor, expected values above 0");
                  q.componentsOrder.push(ye), q.components[ye] = {
                    h: Se,
                    v: Ie,
                    quantizationIdx: Be
                  }, E += 3;
                }
                P(q), ie.push(q);
                break;
              case 65476:
                var Ce = F();
                for (ke = 2; ke < Ce; ) {
                  var se = S[E++], Fe = new Uint8Array(16), Pe = 0;
                  for (ve = 0; ve < 16; ve++, E++)
                    Pe += Fe[ve] = S[E];
                  B(16 + Pe);
                  var Te = new Uint8Array(Pe);
                  for (ve = 0; ve < Pe; ve++, E++)
                    Te[ve] = S[E];
                  ke += 17 + Pe, (se >> 4 === 0 ? Q : V)[se & 15] = g(Fe, Te);
                }
                break;
              case 65501:
                F(), j = F();
                break;
              case 65500:
                F(), F();
                break;
              case 65498:
                F();
                var ze = S[E++], We = [], He;
                for (ke = 0; ke < ze; ke++) {
                  He = q.components[S[E++]];
                  var Ne = S[E++];
                  He.huffmanTableDC = Q[Ne >> 4], He.huffmanTableAC = V[Ne & 15], We.push(He);
                }
                var Ge = S[E++], Le = S[E++], Oe = S[E++], Ke = M(
                  S,
                  E,
                  q,
                  We,
                  j,
                  Ge,
                  Le,
                  Oe >> 4,
                  Oe & 15,
                  this.opts
                );
                E += Ke;
                break;
              case 65535:
                S[E] !== 255 && E--;
                break;
              default:
                if (S[E - 3] == 255 && S[E - 2] >= 192 && S[E - 2] <= 254) {
                  E -= 3;
                  break;
                } else if (ee === 224 || ee == 225) {
                  if (xe !== -1)
                    throw new Error(`first unknown JPEG marker at offset ${xe.toString(16)}, second unknown JPEG marker ${ee.toString(16)} at offset ${(E - 1).toString(16)}`);
                  xe = E - 1;
                  const ge = F();
                  if (S[E + ge - 2] === 255) {
                    E += ge - 2;
                    break;
                  }
                }
                throw new Error("unknown JPEG marker " + ee.toString(16));
            }
            ee = F();
          }
          if (ie.length != 1)
            throw new Error("only single frame JPEGs supported");
          for (var ke = 0; ke < ie.length; ke++) {
            var O = ie[ke].components;
            for (var ve in O)
              O[ve].quantizationTable = J[O[ve].quantizationIdx], delete O[ve].quantizationIdx;
          }
          this.width = q.samplesPerLine, this.height = q.scanLines, this.jfif = D, this.adobe = L, this.components = [];
          for (var ke = 0; ke < q.componentsOrder.length; ke++) {
            var He = q.components[q.componentsOrder[ke]];
            this.components.push({
              lines: k(q, He),
              scaleX: He.h / q.maxH,
              scaleY: He.v / q.maxV
            });
          }
        },
        getData: function(S, b) {
          var E = this.width / S, F = this.height / b, Z, P, D, L, q, j, J, ie, V, Q, ee = 0, xe, ke, ve, H, W, U, re, ae, we, Ae, he, ue = S * b * this.components.length;
          B(ue);
          var ce = new Uint8Array(ue);
          switch (this.components.length) {
            case 1:
              for (Z = this.components[0], Q = 0; Q < b; Q++)
                for (q = Z.lines[0 | Q * Z.scaleY * F], V = 0; V < S; V++)
                  xe = q[0 | V * Z.scaleX * E], ce[ee++] = xe;
              break;
            case 2:
              for (Z = this.components[0], P = this.components[1], Q = 0; Q < b; Q++)
                for (q = Z.lines[0 | Q * Z.scaleY * F], j = P.lines[0 | Q * P.scaleY * F], V = 0; V < S; V++)
                  xe = q[0 | V * Z.scaleX * E], ce[ee++] = xe, xe = j[0 | V * P.scaleX * E], ce[ee++] = xe;
              break;
            case 3:
              for (he = !0, this.adobe && this.adobe.transformCode ? he = !0 : typeof this.opts.colorTransform < "u" && (he = !!this.opts.colorTransform), Z = this.components[0], P = this.components[1], D = this.components[2], Q = 0; Q < b; Q++)
                for (q = Z.lines[0 | Q * Z.scaleY * F], j = P.lines[0 | Q * P.scaleY * F], J = D.lines[0 | Q * D.scaleY * F], V = 0; V < S; V++)
                  he ? (xe = q[0 | V * Z.scaleX * E], ke = j[0 | V * P.scaleX * E], ve = J[0 | V * D.scaleX * E], ae = w(xe + 1.402 * (ve - 128)), we = w(xe - 0.3441363 * (ke - 128) - 0.71413636 * (ve - 128)), Ae = w(xe + 1.772 * (ke - 128))) : (ae = q[0 | V * Z.scaleX * E], we = j[0 | V * P.scaleX * E], Ae = J[0 | V * D.scaleX * E]), ce[ee++] = ae, ce[ee++] = we, ce[ee++] = Ae;
              break;
            case 4:
              if (!this.adobe)
                throw new Error("Unsupported color mode (4 components)");
              for (he = !1, this.adobe && this.adobe.transformCode ? he = !0 : typeof this.opts.colorTransform < "u" && (he = !!this.opts.colorTransform), Z = this.components[0], P = this.components[1], D = this.components[2], L = this.components[3], Q = 0; Q < b; Q++)
                for (q = Z.lines[0 | Q * Z.scaleY * F], j = P.lines[0 | Q * P.scaleY * F], J = D.lines[0 | Q * D.scaleY * F], ie = L.lines[0 | Q * L.scaleY * F], V = 0; V < S; V++)
                  he ? (xe = q[0 | V * Z.scaleX * E], ke = j[0 | V * P.scaleX * E], ve = J[0 | V * D.scaleX * E], H = ie[0 | V * L.scaleX * E], W = 255 - w(xe + 1.402 * (ve - 128)), U = 255 - w(xe - 0.3441363 * (ke - 128) - 0.71413636 * (ve - 128)), re = 255 - w(xe + 1.772 * (ke - 128))) : (W = q[0 | V * Z.scaleX * E], U = j[0 | V * P.scaleX * E], re = J[0 | V * D.scaleX * E], H = ie[0 | V * L.scaleX * E]), ce[ee++] = 255 - W, ce[ee++] = 255 - U, ce[ee++] = 255 - re, ce[ee++] = 255 - H;
              break;
            default:
              throw new Error("Unsupported color mode");
          }
          return ce;
        },
        copyToImageData: function(S, b) {
          var E = S.width, F = S.height, Z = S.data, P = this.getData(E, F), D = 0, L = 0, q, j, J, ie, V, Q, ee, xe, ke;
          switch (this.components.length) {
            case 1:
              for (j = 0; j < F; j++)
                for (q = 0; q < E; q++)
                  J = P[D++], Z[L++] = J, Z[L++] = J, Z[L++] = J, b && (Z[L++] = 255);
              break;
            case 3:
              for (j = 0; j < F; j++)
                for (q = 0; q < E; q++)
                  ee = P[D++], xe = P[D++], ke = P[D++], Z[L++] = ee, Z[L++] = xe, Z[L++] = ke, b && (Z[L++] = 255);
              break;
            case 4:
              for (j = 0; j < F; j++)
                for (q = 0; q < E; q++)
                  V = P[D++], Q = P[D++], J = P[D++], ie = P[D++], ee = 255 - w(V * (1 - ie / 255) + ie), xe = 255 - w(Q * (1 - ie / 255) + ie), ke = 255 - w(J * (1 - ie / 255) + ie), Z[L++] = ee, Z[L++] = xe, Z[L++] = ke, b && (Z[L++] = 255);
              break;
            default:
              throw new Error("Unsupported color mode");
          }
        }
      };
      var v = 0, C = 0;
      function B(A = 0) {
        var S = v + A;
        if (S > C) {
          var b = Math.ceil((S - C) / 1024 / 1024);
          throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${b}MB`);
        }
        v = S;
      }
      return p.resetMaxMemoryUsage = function(A) {
        v = 0, C = A;
      }, p.getBytesAllocated = function() {
        return v;
      }, p.requestMemoryAllocation = B, p;
    })();
    e.exports = i;
    function i(a, r = {}) {
      var o = {
        // "undefined" means "Choose whether to transform colors based on the image’s color model."
        colorTransform: void 0,
        useTArray: !1,
        formatAsRGBA: !0,
        tolerantDecoding: !0,
        maxResolutionInMP: 100,
        // Don't decode more than 100 megapixels
        maxMemoryUsageInMB: 512
        // Don't decode if memory footprint is more than 512MB
      }, n = { ...o, ...r }, s = new Uint8Array(a), l = new t();
      l.opts = n, t.resetMaxMemoryUsage(n.maxMemoryUsageInMB * 1024 * 1024), l.parse(s);
      var h = n.formatAsRGBA ? 4 : 3, u = l.width * l.height * h;
      try {
        t.requestMemoryAllocation(u);
        var d = {
          width: l.width,
          height: l.height,
          exifBuffer: l.exifBuffer,
          data: n.useTArray ? new Uint8Array(u) : Buffer.alloc(u)
        };
        l.comments.length > 0 && (d.comments = l.comments);
      } catch (m) {
        throw m instanceof RangeError ? new Error("Could not allocate enough memory for the image. Required: " + u) : m instanceof ReferenceError && m.message === "Buffer is not defined" ? new Error("Buffer is not globally defined in this environment. Consider setting useTArray to true") : m;
      }
      return l.copyToImageData(d, n.formatAsRGBA), d;
    }
  })(decoder)), decoder.exports;
}
var jpegJs, hasRequiredJpegJs;
function requireJpegJs() {
  if (hasRequiredJpegJs) return jpegJs;
  hasRequiredJpegJs = 1;
  var e = requireEncoder(), t = requireDecoder();
  return jpegJs = {
    encode: e,
    decode: t
  }, jpegJs;
}
var jpegJsExports = requireJpegJs();
const JPEG = /* @__PURE__ */ getDefaultExportFromCjs(jpegJsExports);
function jpeg$1() {
  return {
    mime: "image/jpeg",
    encode: (e, { quality: t = 100 } = {}) => JPEG.encode(e, t).data,
    decode: (e, t) => JPEG.decode(e, t)
  };
}
var png$1 = {}, parserAsync = { exports: {} }, chunkstream = { exports: {} }, hasRequiredChunkstream;
function requireChunkstream() {
  if (hasRequiredChunkstream) return chunkstream.exports;
  hasRequiredChunkstream = 1;
  let e = require$$0, t = Stream, i = chunkstream.exports = function() {
    t.call(this), this._buffers = [], this._buffered = 0, this._reads = [], this._paused = !1, this._encoding = "utf8", this.writable = !0;
  };
  return e.inherits(i, t), i.prototype.read = function(a, r) {
    this._reads.push({
      length: Math.abs(a),
      // if length < 0 then at most this length
      allowLess: a < 0,
      func: r
    }), process.nextTick(
      (function() {
        this._process(), this._paused && this._reads && this._reads.length > 0 && (this._paused = !1, this.emit("drain"));
      }).bind(this)
    );
  }, i.prototype.write = function(a, r) {
    if (!this.writable)
      return this.emit("error", new Error("Stream not writable")), !1;
    let o;
    return Buffer.isBuffer(a) ? o = a : o = Buffer.from(a, r || this._encoding), this._buffers.push(o), this._buffered += o.length, this._process(), this._reads && this._reads.length === 0 && (this._paused = !0), this.writable && !this._paused;
  }, i.prototype.end = function(a, r) {
    a && this.write(a, r), this.writable = !1, this._buffers && (this._buffers.length === 0 ? this._end() : (this._buffers.push(null), this._process()));
  }, i.prototype.destroySoon = i.prototype.end, i.prototype._end = function() {
    this._reads.length > 0 && this.emit("error", new Error("Unexpected end of input")), this.destroy();
  }, i.prototype.destroy = function() {
    this._buffers && (this.writable = !1, this._reads = null, this._buffers = null, this.emit("close"));
  }, i.prototype._processReadAllowingLess = function(a) {
    this._reads.shift();
    let r = this._buffers[0];
    r.length > a.length ? (this._buffered -= a.length, this._buffers[0] = r.slice(a.length), a.func.call(this, r.slice(0, a.length))) : (this._buffered -= r.length, this._buffers.shift(), a.func.call(this, r));
  }, i.prototype._processRead = function(a) {
    this._reads.shift();
    let r = 0, o = 0, n = Buffer.alloc(a.length);
    for (; r < a.length; ) {
      let s = this._buffers[o++], l = Math.min(s.length, a.length - r);
      s.copy(n, r, 0, l), r += l, l !== s.length && (this._buffers[--o] = s.slice(l));
    }
    o > 0 && this._buffers.splice(0, o), this._buffered -= a.length, a.func.call(this, n);
  }, i.prototype._process = function() {
    try {
      for (; this._buffered > 0 && this._reads && this._reads.length > 0; ) {
        let a = this._reads[0];
        if (a.allowLess)
          this._processReadAllowingLess(a);
        else if (this._buffered >= a.length)
          this._processRead(a);
        else
          break;
      }
      this._buffers && !this.writable && this._end();
    } catch (a) {
      this.emit("error", a);
    }
  }, chunkstream.exports;
}
var filterParseAsync = { exports: {} }, filterParse = { exports: {} }, interlace = {}, hasRequiredInterlace;
function requireInterlace() {
  if (hasRequiredInterlace) return interlace;
  hasRequiredInterlace = 1;
  let e = [
    {
      // pass 1 - 1px
      x: [0],
      y: [0]
    },
    {
      // pass 2 - 1px
      x: [4],
      y: [0]
    },
    {
      // pass 3 - 2px
      x: [0, 4],
      y: [4]
    },
    {
      // pass 4 - 4px
      x: [2, 6],
      y: [0, 4]
    },
    {
      // pass 5 - 8px
      x: [0, 2, 4, 6],
      y: [2, 6]
    },
    {
      // pass 6 - 16px
      x: [1, 3, 5, 7],
      y: [0, 2, 4, 6]
    },
    {
      // pass 7 - 32px
      x: [0, 1, 2, 3, 4, 5, 6, 7],
      y: [1, 3, 5, 7]
    }
  ];
  return interlace.getImagePasses = function(t, i) {
    let a = [], r = t % 8, o = i % 8, n = (t - r) / 8, s = (i - o) / 8;
    for (let l = 0; l < e.length; l++) {
      let h = e[l], u = n * h.x.length, d = s * h.y.length;
      for (let m = 0; m < h.x.length && h.x[m] < r; m++)
        u++;
      for (let m = 0; m < h.y.length && h.y[m] < o; m++)
        d++;
      u > 0 && d > 0 && a.push({ width: u, height: d, index: l });
    }
    return a;
  }, interlace.getInterlaceIterator = function(t) {
    return function(i, a, r) {
      let o = i % e[r].x.length, n = (i - o) / e[r].x.length * 8 + e[r].x[o], s = a % e[r].y.length, l = (a - s) / e[r].y.length * 8 + e[r].y[s];
      return n * 4 + l * t * 4;
    };
  }, interlace;
}
var paethPredictor, hasRequiredPaethPredictor;
function requirePaethPredictor() {
  return hasRequiredPaethPredictor || (hasRequiredPaethPredictor = 1, paethPredictor = function(t, i, a) {
    let r = t + i - a, o = Math.abs(r - t), n = Math.abs(r - i), s = Math.abs(r - a);
    return o <= n && o <= s ? t : n <= s ? i : a;
  }), paethPredictor;
}
var hasRequiredFilterParse;
function requireFilterParse() {
  if (hasRequiredFilterParse) return filterParse.exports;
  hasRequiredFilterParse = 1;
  let e = requireInterlace(), t = requirePaethPredictor();
  function i(r, o, n) {
    let s = r * o;
    return n !== 8 && (s = Math.ceil(s / (8 / n))), s;
  }
  let a = filterParse.exports = function(r, o) {
    let n = r.width, s = r.height, l = r.interlace, h = r.bpp, u = r.depth;
    if (this.read = o.read, this.write = o.write, this.complete = o.complete, this._imageIndex = 0, this._images = [], l) {
      let d = e.getImagePasses(n, s);
      for (let m = 0; m < d.length; m++)
        this._images.push({
          byteWidth: i(d[m].width, h, u),
          height: d[m].height,
          lineIndex: 0
        });
    } else
      this._images.push({
        byteWidth: i(n, h, u),
        height: s,
        lineIndex: 0
      });
    u === 8 ? this._xComparison = h : u === 16 ? this._xComparison = h * 2 : this._xComparison = 1;
  };
  return a.prototype.start = function() {
    this.read(
      this._images[this._imageIndex].byteWidth + 1,
      this._reverseFilterLine.bind(this)
    );
  }, a.prototype._unFilterType1 = function(r, o, n) {
    let s = this._xComparison, l = s - 1;
    for (let h = 0; h < n; h++) {
      let u = r[1 + h], d = h > l ? o[h - s] : 0;
      o[h] = u + d;
    }
  }, a.prototype._unFilterType2 = function(r, o, n) {
    let s = this._lastLine;
    for (let l = 0; l < n; l++) {
      let h = r[1 + l], u = s ? s[l] : 0;
      o[l] = h + u;
    }
  }, a.prototype._unFilterType3 = function(r, o, n) {
    let s = this._xComparison, l = s - 1, h = this._lastLine;
    for (let u = 0; u < n; u++) {
      let d = r[1 + u], m = h ? h[u] : 0, p = u > l ? o[u - s] : 0, g = Math.floor((p + m) / 2);
      o[u] = d + g;
    }
  }, a.prototype._unFilterType4 = function(r, o, n) {
    let s = this._xComparison, l = s - 1, h = this._lastLine;
    for (let u = 0; u < n; u++) {
      let d = r[1 + u], m = h ? h[u] : 0, p = u > l ? o[u - s] : 0, g = u > l && h ? h[u - s] : 0, M = t(p, m, g);
      o[u] = d + M;
    }
  }, a.prototype._reverseFilterLine = function(r) {
    let o = r[0], n, s = this._images[this._imageIndex], l = s.byteWidth;
    if (o === 0)
      n = r.slice(1, l + 1);
    else
      switch (n = Buffer.alloc(l), o) {
        case 1:
          this._unFilterType1(r, n, l);
          break;
        case 2:
          this._unFilterType2(r, n, l);
          break;
        case 3:
          this._unFilterType3(r, n, l);
          break;
        case 4:
          this._unFilterType4(r, n, l);
          break;
        default:
          throw new Error("Unrecognised filter type - " + o);
      }
    this.write(n), s.lineIndex++, s.lineIndex >= s.height ? (this._lastLine = null, this._imageIndex++, s = this._images[this._imageIndex]) : this._lastLine = n, s ? this.read(s.byteWidth + 1, this._reverseFilterLine.bind(this)) : (this._lastLine = null, this.complete());
  }, filterParse.exports;
}
var hasRequiredFilterParseAsync;
function requireFilterParseAsync() {
  if (hasRequiredFilterParseAsync) return filterParseAsync.exports;
  hasRequiredFilterParseAsync = 1;
  let e = require$$0, t = requireChunkstream(), i = requireFilterParse(), a = filterParseAsync.exports = function(r) {
    t.call(this);
    let o = [], n = this;
    this._filter = new i(r, {
      read: this.read.bind(this),
      write: function(s) {
        o.push(s);
      },
      complete: function() {
        n.emit("complete", Buffer.concat(o));
      }
    }), this._filter.start();
  };
  return e.inherits(a, t), filterParseAsync.exports;
}
var parser$1 = { exports: {} }, constants$1, hasRequiredConstants$1;
function requireConstants$1() {
  return hasRequiredConstants$1 || (hasRequiredConstants$1 = 1, constants$1 = {
    PNG_SIGNATURE: [137, 80, 78, 71, 13, 10, 26, 10],
    TYPE_IHDR: 1229472850,
    TYPE_IEND: 1229278788,
    TYPE_IDAT: 1229209940,
    TYPE_PLTE: 1347179589,
    TYPE_tRNS: 1951551059,
    // eslint-disable-line camelcase
    TYPE_gAMA: 1732332865,
    // eslint-disable-line camelcase
    // color-type bits
    COLORTYPE_GRAYSCALE: 0,
    COLORTYPE_PALETTE: 1,
    COLORTYPE_COLOR: 2,
    COLORTYPE_ALPHA: 4,
    // e.g. grayscale and alpha
    // color-type combinations
    COLORTYPE_PALETTE_COLOR: 3,
    COLORTYPE_COLOR_ALPHA: 6,
    COLORTYPE_TO_BPP_MAP: {
      0: 1,
      2: 3,
      3: 1,
      4: 2,
      6: 4
    },
    GAMMA_DIVISION: 1e5
  }), constants$1;
}
var crc = { exports: {} }, hasRequiredCrc;
function requireCrc() {
  if (hasRequiredCrc) return crc.exports;
  hasRequiredCrc = 1;
  let e = [];
  (function() {
    for (let i = 0; i < 256; i++) {
      let a = i;
      for (let r = 0; r < 8; r++)
        a & 1 ? a = 3988292384 ^ a >>> 1 : a = a >>> 1;
      e[i] = a;
    }
  })();
  let t = crc.exports = function() {
    this._crc = -1;
  };
  return t.prototype.write = function(i) {
    for (let a = 0; a < i.length; a++)
      this._crc = e[(this._crc ^ i[a]) & 255] ^ this._crc >>> 8;
    return !0;
  }, t.prototype.crc32 = function() {
    return this._crc ^ -1;
  }, t.crc32 = function(i) {
    let a = -1;
    for (let r = 0; r < i.length; r++)
      a = e[(a ^ i[r]) & 255] ^ a >>> 8;
    return a ^ -1;
  }, crc.exports;
}
var hasRequiredParser$1;
function requireParser$1() {
  if (hasRequiredParser$1) return parser$1.exports;
  hasRequiredParser$1 = 1;
  let e = requireConstants$1(), t = requireCrc(), i = parser$1.exports = function(a, r) {
    this._options = a, a.checkCRC = a.checkCRC !== !1, this._hasIHDR = !1, this._hasIEND = !1, this._emittedHeadersFinished = !1, this._palette = [], this._colorType = 0, this._chunks = {}, this._chunks[e.TYPE_IHDR] = this._handleIHDR.bind(this), this._chunks[e.TYPE_IEND] = this._handleIEND.bind(this), this._chunks[e.TYPE_IDAT] = this._handleIDAT.bind(this), this._chunks[e.TYPE_PLTE] = this._handlePLTE.bind(this), this._chunks[e.TYPE_tRNS] = this._handleTRNS.bind(this), this._chunks[e.TYPE_gAMA] = this._handleGAMA.bind(this), this.read = r.read, this.error = r.error, this.metadata = r.metadata, this.gamma = r.gamma, this.transColor = r.transColor, this.palette = r.palette, this.parsed = r.parsed, this.inflateData = r.inflateData, this.finished = r.finished, this.simpleTransparency = r.simpleTransparency, this.headersFinished = r.headersFinished || function() {
    };
  };
  return i.prototype.start = function() {
    this.read(e.PNG_SIGNATURE.length, this._parseSignature.bind(this));
  }, i.prototype._parseSignature = function(a) {
    let r = e.PNG_SIGNATURE;
    for (let o = 0; o < r.length; o++)
      if (a[o] !== r[o]) {
        this.error(new Error("Invalid file signature"));
        return;
      }
    this.read(8, this._parseChunkBegin.bind(this));
  }, i.prototype._parseChunkBegin = function(a) {
    let r = a.readUInt32BE(0), o = a.readUInt32BE(4), n = "";
    for (let l = 4; l < 8; l++)
      n += String.fromCharCode(a[l]);
    let s = !!(a[4] & 32);
    if (!this._hasIHDR && o !== e.TYPE_IHDR) {
      this.error(new Error("Expected IHDR on beggining"));
      return;
    }
    if (this._crc = new t(), this._crc.write(Buffer.from(n)), this._chunks[o])
      return this._chunks[o](r);
    if (!s) {
      this.error(new Error("Unsupported critical chunk type " + n));
      return;
    }
    this.read(r + 4, this._skipChunk.bind(this));
  }, i.prototype._skipChunk = function() {
    this.read(8, this._parseChunkBegin.bind(this));
  }, i.prototype._handleChunkEnd = function() {
    this.read(4, this._parseChunkEnd.bind(this));
  }, i.prototype._parseChunkEnd = function(a) {
    let r = a.readInt32BE(0), o = this._crc.crc32();
    if (this._options.checkCRC && o !== r) {
      this.error(new Error("Crc error - " + r + " - " + o));
      return;
    }
    this._hasIEND || this.read(8, this._parseChunkBegin.bind(this));
  }, i.prototype._handleIHDR = function(a) {
    this.read(a, this._parseIHDR.bind(this));
  }, i.prototype._parseIHDR = function(a) {
    this._crc.write(a);
    let r = a.readUInt32BE(0), o = a.readUInt32BE(4), n = a[8], s = a[9], l = a[10], h = a[11], u = a[12];
    if (n !== 8 && n !== 4 && n !== 2 && n !== 1 && n !== 16) {
      this.error(new Error("Unsupported bit depth " + n));
      return;
    }
    if (!(s in e.COLORTYPE_TO_BPP_MAP)) {
      this.error(new Error("Unsupported color type"));
      return;
    }
    if (l !== 0) {
      this.error(new Error("Unsupported compression method"));
      return;
    }
    if (h !== 0) {
      this.error(new Error("Unsupported filter method"));
      return;
    }
    if (u !== 0 && u !== 1) {
      this.error(new Error("Unsupported interlace method"));
      return;
    }
    this._colorType = s;
    let d = e.COLORTYPE_TO_BPP_MAP[this._colorType];
    this._hasIHDR = !0, this.metadata({
      width: r,
      height: o,
      depth: n,
      interlace: !!u,
      palette: !!(s & e.COLORTYPE_PALETTE),
      color: !!(s & e.COLORTYPE_COLOR),
      alpha: !!(s & e.COLORTYPE_ALPHA),
      bpp: d,
      colorType: s
    }), this._handleChunkEnd();
  }, i.prototype._handlePLTE = function(a) {
    this.read(a, this._parsePLTE.bind(this));
  }, i.prototype._parsePLTE = function(a) {
    this._crc.write(a);
    let r = Math.floor(a.length / 3);
    for (let o = 0; o < r; o++)
      this._palette.push([a[o * 3], a[o * 3 + 1], a[o * 3 + 2], 255]);
    this.palette(this._palette), this._handleChunkEnd();
  }, i.prototype._handleTRNS = function(a) {
    this.simpleTransparency(), this.read(a, this._parseTRNS.bind(this));
  }, i.prototype._parseTRNS = function(a) {
    if (this._crc.write(a), this._colorType === e.COLORTYPE_PALETTE_COLOR) {
      if (this._palette.length === 0) {
        this.error(new Error("Transparency chunk must be after palette"));
        return;
      }
      if (a.length > this._palette.length) {
        this.error(new Error("More transparent colors than palette size"));
        return;
      }
      for (let r = 0; r < a.length; r++)
        this._palette[r][3] = a[r];
      this.palette(this._palette);
    }
    this._colorType === e.COLORTYPE_GRAYSCALE && this.transColor([a.readUInt16BE(0)]), this._colorType === e.COLORTYPE_COLOR && this.transColor([
      a.readUInt16BE(0),
      a.readUInt16BE(2),
      a.readUInt16BE(4)
    ]), this._handleChunkEnd();
  }, i.prototype._handleGAMA = function(a) {
    this.read(a, this._parseGAMA.bind(this));
  }, i.prototype._parseGAMA = function(a) {
    this._crc.write(a), this.gamma(a.readUInt32BE(0) / e.GAMMA_DIVISION), this._handleChunkEnd();
  }, i.prototype._handleIDAT = function(a) {
    this._emittedHeadersFinished || (this._emittedHeadersFinished = !0, this.headersFinished()), this.read(-a, this._parseIDAT.bind(this, a));
  }, i.prototype._parseIDAT = function(a, r) {
    if (this._crc.write(r), this._colorType === e.COLORTYPE_PALETTE_COLOR && this._palette.length === 0)
      throw new Error("Expected palette not found");
    this.inflateData(r);
    let o = a - r.length;
    o > 0 ? this._handleIDAT(o) : this._handleChunkEnd();
  }, i.prototype._handleIEND = function(a) {
    this.read(a, this._parseIEND.bind(this));
  }, i.prototype._parseIEND = function(a) {
    this._crc.write(a), this._hasIEND = !0, this._handleChunkEnd(), this.finished && this.finished();
  }, parser$1.exports;
}
var bitmapper = {}, hasRequiredBitmapper;
function requireBitmapper() {
  if (hasRequiredBitmapper) return bitmapper;
  hasRequiredBitmapper = 1;
  let e = requireInterlace(), t = [
    // 0 - dummy entry
    function() {
    },
    // 1 - L
    // 0: 0, 1: 0, 2: 0, 3: 0xff
    function(n, s, l, h) {
      if (h === s.length)
        throw new Error("Ran out of data");
      let u = s[h];
      n[l] = u, n[l + 1] = u, n[l + 2] = u, n[l + 3] = 255;
    },
    // 2 - LA
    // 0: 0, 1: 0, 2: 0, 3: 1
    function(n, s, l, h) {
      if (h + 1 >= s.length)
        throw new Error("Ran out of data");
      let u = s[h];
      n[l] = u, n[l + 1] = u, n[l + 2] = u, n[l + 3] = s[h + 1];
    },
    // 3 - RGB
    // 0: 0, 1: 1, 2: 2, 3: 0xff
    function(n, s, l, h) {
      if (h + 2 >= s.length)
        throw new Error("Ran out of data");
      n[l] = s[h], n[l + 1] = s[h + 1], n[l + 2] = s[h + 2], n[l + 3] = 255;
    },
    // 4 - RGBA
    // 0: 0, 1: 1, 2: 2, 3: 3
    function(n, s, l, h) {
      if (h + 3 >= s.length)
        throw new Error("Ran out of data");
      n[l] = s[h], n[l + 1] = s[h + 1], n[l + 2] = s[h + 2], n[l + 3] = s[h + 3];
    }
  ], i = [
    // 0 - dummy entry
    function() {
    },
    // 1 - L
    // 0: 0, 1: 0, 2: 0, 3: 0xff
    function(n, s, l, h) {
      let u = s[0];
      n[l] = u, n[l + 1] = u, n[l + 2] = u, n[l + 3] = h;
    },
    // 2 - LA
    // 0: 0, 1: 0, 2: 0, 3: 1
    function(n, s, l) {
      let h = s[0];
      n[l] = h, n[l + 1] = h, n[l + 2] = h, n[l + 3] = s[1];
    },
    // 3 - RGB
    // 0: 0, 1: 1, 2: 2, 3: 0xff
    function(n, s, l, h) {
      n[l] = s[0], n[l + 1] = s[1], n[l + 2] = s[2], n[l + 3] = h;
    },
    // 4 - RGBA
    // 0: 0, 1: 1, 2: 2, 3: 3
    function(n, s, l) {
      n[l] = s[0], n[l + 1] = s[1], n[l + 2] = s[2], n[l + 3] = s[3];
    }
  ];
  function a(n, s) {
    let l = [], h = 0;
    function u() {
      if (h === n.length)
        throw new Error("Ran out of data");
      let d = n[h];
      h++;
      let m, p, g, M, k, w, v, C;
      switch (s) {
        default:
          throw new Error("unrecognised depth");
        case 16:
          v = n[h], h++, l.push((d << 8) + v);
          break;
        case 4:
          v = d & 15, C = d >> 4, l.push(C, v);
          break;
        case 2:
          k = d & 3, w = d >> 2 & 3, v = d >> 4 & 3, C = d >> 6 & 3, l.push(C, v, w, k);
          break;
        case 1:
          m = d & 1, p = d >> 1 & 1, g = d >> 2 & 1, M = d >> 3 & 1, k = d >> 4 & 1, w = d >> 5 & 1, v = d >> 6 & 1, C = d >> 7 & 1, l.push(C, v, w, k, M, g, p, m);
          break;
      }
    }
    return {
      get: function(d) {
        for (; l.length < d; )
          u();
        let m = l.slice(0, d);
        return l = l.slice(d), m;
      },
      resetAfterLine: function() {
        l.length = 0;
      },
      end: function() {
        if (h !== n.length)
          throw new Error("extra data found");
      }
    };
  }
  function r(n, s, l, h, u, d) {
    let m = n.width, p = n.height, g = n.index;
    for (let M = 0; M < p; M++)
      for (let k = 0; k < m; k++) {
        let w = l(k, M, g);
        t[h](s, u, w, d), d += h;
      }
    return d;
  }
  function o(n, s, l, h, u, d) {
    let m = n.width, p = n.height, g = n.index;
    for (let M = 0; M < p; M++) {
      for (let k = 0; k < m; k++) {
        let w = u.get(h), v = l(k, M, g);
        i[h](s, w, v, d);
      }
      u.resetAfterLine();
    }
  }
  return bitmapper.dataToBitMap = function(n, s) {
    let l = s.width, h = s.height, u = s.depth, d = s.bpp, m = s.interlace, p;
    u !== 8 && (p = a(n, u));
    let g;
    u <= 8 ? g = Buffer.alloc(l * h * 4) : g = new Uint16Array(l * h * 4);
    let M = Math.pow(2, u) - 1, k = 0, w, v;
    if (m)
      w = e.getImagePasses(l, h), v = e.getInterlaceIterator(l, h);
    else {
      let C = 0;
      v = function() {
        let B = C;
        return C += 4, B;
      }, w = [{ width: l, height: h }];
    }
    for (let C = 0; C < w.length; C++)
      u === 8 ? k = r(
        w[C],
        g,
        v,
        d,
        n,
        k
      ) : o(
        w[C],
        g,
        v,
        d,
        p,
        M
      );
    if (u === 8) {
      if (k !== n.length)
        throw new Error("extra data found");
    } else
      p.end();
    return g;
  }, bitmapper;
}
var formatNormaliser, hasRequiredFormatNormaliser;
function requireFormatNormaliser() {
  if (hasRequiredFormatNormaliser) return formatNormaliser;
  hasRequiredFormatNormaliser = 1;
  function e(a, r, o, n, s) {
    let l = 0;
    for (let h = 0; h < n; h++)
      for (let u = 0; u < o; u++) {
        let d = s[a[l]];
        if (!d)
          throw new Error("index " + a[l] + " not in palette");
        for (let m = 0; m < 4; m++)
          r[l + m] = d[m];
        l += 4;
      }
  }
  function t(a, r, o, n, s) {
    let l = 0;
    for (let h = 0; h < n; h++)
      for (let u = 0; u < o; u++) {
        let d = !1;
        if (s.length === 1 ? s[0] === a[l] && (d = !0) : s[0] === a[l] && s[1] === a[l + 1] && s[2] === a[l + 2] && (d = !0), d)
          for (let m = 0; m < 4; m++)
            r[l + m] = 0;
        l += 4;
      }
  }
  function i(a, r, o, n, s) {
    let l = 255, h = Math.pow(2, s) - 1, u = 0;
    for (let d = 0; d < n; d++)
      for (let m = 0; m < o; m++) {
        for (let p = 0; p < 4; p++)
          r[u + p] = Math.floor(
            a[u + p] * l / h + 0.5
          );
        u += 4;
      }
  }
  return formatNormaliser = function(a, r, o = !1) {
    let n = r.depth, s = r.width, l = r.height, h = r.colorType, u = r.transColor, d = r.palette, m = a;
    return h === 3 ? e(a, m, s, l, d) : (u && t(a, m, s, l, u), n !== 8 && !o && (n === 16 && (m = Buffer.alloc(s * l * 4)), i(a, m, s, l, n))), m;
  }, formatNormaliser;
}
var hasRequiredParserAsync;
function requireParserAsync() {
  if (hasRequiredParserAsync) return parserAsync.exports;
  hasRequiredParserAsync = 1;
  let e = require$$0, t = zlib, i = requireChunkstream(), a = requireFilterParseAsync(), r = requireParser$1(), o = requireBitmapper(), n = requireFormatNormaliser(), s = parserAsync.exports = function(l) {
    i.call(this), this._parser = new r(l, {
      read: this.read.bind(this),
      error: this._handleError.bind(this),
      metadata: this._handleMetaData.bind(this),
      gamma: this.emit.bind(this, "gamma"),
      palette: this._handlePalette.bind(this),
      transColor: this._handleTransColor.bind(this),
      finished: this._finished.bind(this),
      inflateData: this._inflateData.bind(this),
      simpleTransparency: this._simpleTransparency.bind(this),
      headersFinished: this._headersFinished.bind(this)
    }), this._options = l, this.writable = !0, this._parser.start();
  };
  return e.inherits(s, i), s.prototype._handleError = function(l) {
    this.emit("error", l), this.writable = !1, this.destroy(), this._inflate && this._inflate.destroy && this._inflate.destroy(), this._filter && (this._filter.destroy(), this._filter.on("error", function() {
    })), this.errord = !0;
  }, s.prototype._inflateData = function(l) {
    if (!this._inflate)
      if (this._bitmapInfo.interlace)
        this._inflate = t.createInflate(), this._inflate.on("error", this.emit.bind(this, "error")), this._filter.on("complete", this._complete.bind(this)), this._inflate.pipe(this._filter);
      else {
        let u = ((this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3) + 1) * this._bitmapInfo.height, d = Math.max(u, t.Z_MIN_CHUNK);
        this._inflate = t.createInflate({ chunkSize: d });
        let m = u, p = this.emit.bind(this, "error");
        this._inflate.on("error", function(M) {
          m && p(M);
        }), this._filter.on("complete", this._complete.bind(this));
        let g = this._filter.write.bind(this._filter);
        this._inflate.on("data", function(M) {
          m && (M.length > m && (M = M.slice(0, m)), m -= M.length, g(M));
        }), this._inflate.on("end", this._filter.end.bind(this._filter));
      }
    this._inflate.write(l);
  }, s.prototype._handleMetaData = function(l) {
    this._metaData = l, this._bitmapInfo = Object.create(l), this._filter = new a(this._bitmapInfo);
  }, s.prototype._handleTransColor = function(l) {
    this._bitmapInfo.transColor = l;
  }, s.prototype._handlePalette = function(l) {
    this._bitmapInfo.palette = l;
  }, s.prototype._simpleTransparency = function() {
    this._metaData.alpha = !0;
  }, s.prototype._headersFinished = function() {
    this.emit("metadata", this._metaData);
  }, s.prototype._finished = function() {
    this.errord || (this._inflate ? this._inflate.end() : this.emit("error", "No Inflate block"));
  }, s.prototype._complete = function(l) {
    if (this.errord)
      return;
    let h;
    try {
      let u = o.dataToBitMap(l, this._bitmapInfo);
      h = n(
        u,
        this._bitmapInfo,
        this._options.skipRescale
      ), u = null;
    } catch (u) {
      this._handleError(u);
      return;
    }
    this.emit("parsed", h);
  }, parserAsync.exports;
}
var packerAsync = { exports: {} }, packer = { exports: {} }, bitpacker, hasRequiredBitpacker;
function requireBitpacker() {
  if (hasRequiredBitpacker) return bitpacker;
  hasRequiredBitpacker = 1;
  let e = requireConstants$1();
  return bitpacker = function(t, i, a, r) {
    let o = [e.COLORTYPE_COLOR_ALPHA, e.COLORTYPE_ALPHA].indexOf(
      r.colorType
    ) !== -1;
    if (r.colorType === r.inputColorType) {
      let M = (function() {
        let k = new ArrayBuffer(2);
        return new DataView(k).setInt16(
          0,
          256,
          !0
          /* littleEndian */
        ), new Int16Array(k)[0] !== 256;
      })();
      if (r.bitDepth === 8 || r.bitDepth === 16 && M)
        return t;
    }
    let n = r.bitDepth !== 16 ? t : new Uint16Array(t.buffer), s = 255, l = e.COLORTYPE_TO_BPP_MAP[r.inputColorType];
    l === 4 && !r.inputHasAlpha && (l = 3);
    let h = e.COLORTYPE_TO_BPP_MAP[r.colorType];
    r.bitDepth === 16 && (s = 65535, h *= 2);
    let u = Buffer.alloc(i * a * h), d = 0, m = 0, p = r.bgColor || {};
    p.red === void 0 && (p.red = s), p.green === void 0 && (p.green = s), p.blue === void 0 && (p.blue = s);
    function g() {
      let M, k, w, v = s;
      switch (r.inputColorType) {
        case e.COLORTYPE_COLOR_ALPHA:
          v = n[d + 3], M = n[d], k = n[d + 1], w = n[d + 2];
          break;
        case e.COLORTYPE_COLOR:
          M = n[d], k = n[d + 1], w = n[d + 2];
          break;
        case e.COLORTYPE_ALPHA:
          v = n[d + 1], M = n[d], k = M, w = M;
          break;
        case e.COLORTYPE_GRAYSCALE:
          M = n[d], k = M, w = M;
          break;
        default:
          throw new Error(
            "input color type:" + r.inputColorType + " is not supported at present"
          );
      }
      return r.inputHasAlpha && (o || (v /= s, M = Math.min(
        Math.max(Math.round((1 - v) * p.red + v * M), 0),
        s
      ), k = Math.min(
        Math.max(Math.round((1 - v) * p.green + v * k), 0),
        s
      ), w = Math.min(
        Math.max(Math.round((1 - v) * p.blue + v * w), 0),
        s
      ))), { red: M, green: k, blue: w, alpha: v };
    }
    for (let M = 0; M < a; M++)
      for (let k = 0; k < i; k++) {
        let w = g();
        switch (r.colorType) {
          case e.COLORTYPE_COLOR_ALPHA:
          case e.COLORTYPE_COLOR:
            r.bitDepth === 8 ? (u[m] = w.red, u[m + 1] = w.green, u[m + 2] = w.blue, o && (u[m + 3] = w.alpha)) : (u.writeUInt16BE(w.red, m), u.writeUInt16BE(w.green, m + 2), u.writeUInt16BE(w.blue, m + 4), o && u.writeUInt16BE(w.alpha, m + 6));
            break;
          case e.COLORTYPE_ALPHA:
          case e.COLORTYPE_GRAYSCALE: {
            let v = (w.red + w.green + w.blue) / 3;
            r.bitDepth === 8 ? (u[m] = v, o && (u[m + 1] = w.alpha)) : (u.writeUInt16BE(v, m), o && u.writeUInt16BE(w.alpha, m + 2));
            break;
          }
          default:
            throw new Error("unrecognised color Type " + r.colorType);
        }
        d += l, m += h;
      }
    return u;
  }, bitpacker;
}
var filterPack, hasRequiredFilterPack;
function requireFilterPack() {
  if (hasRequiredFilterPack) return filterPack;
  hasRequiredFilterPack = 1;
  let e = requirePaethPredictor();
  function t(p, g, M, k, w) {
    for (let v = 0; v < M; v++)
      k[w + v] = p[g + v];
  }
  function i(p, g, M) {
    let k = 0, w = g + M;
    for (let v = g; v < w; v++)
      k += Math.abs(p[v]);
    return k;
  }
  function a(p, g, M, k, w, v) {
    for (let C = 0; C < M; C++) {
      let B = C >= v ? p[g + C - v] : 0, A = p[g + C] - B;
      k[w + C] = A;
    }
  }
  function r(p, g, M, k) {
    let w = 0;
    for (let v = 0; v < M; v++) {
      let C = v >= k ? p[g + v - k] : 0, B = p[g + v] - C;
      w += Math.abs(B);
    }
    return w;
  }
  function o(p, g, M, k, w) {
    for (let v = 0; v < M; v++) {
      let C = g > 0 ? p[g + v - M] : 0, B = p[g + v] - C;
      k[w + v] = B;
    }
  }
  function n(p, g, M) {
    let k = 0, w = g + M;
    for (let v = g; v < w; v++) {
      let C = g > 0 ? p[v - M] : 0, B = p[v] - C;
      k += Math.abs(B);
    }
    return k;
  }
  function s(p, g, M, k, w, v) {
    for (let C = 0; C < M; C++) {
      let B = C >= v ? p[g + C - v] : 0, A = g > 0 ? p[g + C - M] : 0, S = p[g + C] - (B + A >> 1);
      k[w + C] = S;
    }
  }
  function l(p, g, M, k) {
    let w = 0;
    for (let v = 0; v < M; v++) {
      let C = v >= k ? p[g + v - k] : 0, B = g > 0 ? p[g + v - M] : 0, A = p[g + v] - (C + B >> 1);
      w += Math.abs(A);
    }
    return w;
  }
  function h(p, g, M, k, w, v) {
    for (let C = 0; C < M; C++) {
      let B = C >= v ? p[g + C - v] : 0, A = g > 0 ? p[g + C - M] : 0, S = g > 0 && C >= v ? p[g + C - (M + v)] : 0, b = p[g + C] - e(B, A, S);
      k[w + C] = b;
    }
  }
  function u(p, g, M, k) {
    let w = 0;
    for (let v = 0; v < M; v++) {
      let C = v >= k ? p[g + v - k] : 0, B = g > 0 ? p[g + v - M] : 0, A = g > 0 && v >= k ? p[g + v - (M + k)] : 0, S = p[g + v] - e(C, B, A);
      w += Math.abs(S);
    }
    return w;
  }
  let d = {
    0: t,
    1: a,
    2: o,
    3: s,
    4: h
  }, m = {
    0: i,
    1: r,
    2: n,
    3: l,
    4: u
  };
  return filterPack = function(p, g, M, k, w) {
    let v;
    if (!("filterType" in k) || k.filterType === -1)
      v = [0, 1, 2, 3, 4];
    else if (typeof k.filterType == "number")
      v = [k.filterType];
    else
      throw new Error("unrecognised filter types");
    k.bitDepth === 16 && (w *= 2);
    let C = g * w, B = 0, A = 0, S = Buffer.alloc((C + 1) * M), b = v[0];
    for (let E = 0; E < M; E++) {
      if (v.length > 1) {
        let F = 1 / 0;
        for (let Z = 0; Z < v.length; Z++) {
          let P = m[v[Z]](p, A, C, w);
          P < F && (b = v[Z], F = P);
        }
      }
      S[B] = b, B++, d[b](p, A, C, S, B, w), B += C, A += C;
    }
    return S;
  }, filterPack;
}
var hasRequiredPacker;
function requirePacker() {
  if (hasRequiredPacker) return packer.exports;
  hasRequiredPacker = 1;
  let e = requireConstants$1(), t = requireCrc(), i = requireBitpacker(), a = requireFilterPack(), r = zlib, o = packer.exports = function(n) {
    if (this._options = n, n.deflateChunkSize = n.deflateChunkSize || 32 * 1024, n.deflateLevel = n.deflateLevel != null ? n.deflateLevel : 9, n.deflateStrategy = n.deflateStrategy != null ? n.deflateStrategy : 3, n.inputHasAlpha = n.inputHasAlpha != null ? n.inputHasAlpha : !0, n.deflateFactory = n.deflateFactory || r.createDeflate, n.bitDepth = n.bitDepth || 8, n.colorType = typeof n.colorType == "number" ? n.colorType : e.COLORTYPE_COLOR_ALPHA, n.inputColorType = typeof n.inputColorType == "number" ? n.inputColorType : e.COLORTYPE_COLOR_ALPHA, [
      e.COLORTYPE_GRAYSCALE,
      e.COLORTYPE_COLOR,
      e.COLORTYPE_COLOR_ALPHA,
      e.COLORTYPE_ALPHA
    ].indexOf(n.colorType) === -1)
      throw new Error(
        "option color type:" + n.colorType + " is not supported at present"
      );
    if ([
      e.COLORTYPE_GRAYSCALE,
      e.COLORTYPE_COLOR,
      e.COLORTYPE_COLOR_ALPHA,
      e.COLORTYPE_ALPHA
    ].indexOf(n.inputColorType) === -1)
      throw new Error(
        "option input color type:" + n.inputColorType + " is not supported at present"
      );
    if (n.bitDepth !== 8 && n.bitDepth !== 16)
      throw new Error(
        "option bit depth:" + n.bitDepth + " is not supported at present"
      );
  };
  return o.prototype.getDeflateOptions = function() {
    return {
      chunkSize: this._options.deflateChunkSize,
      level: this._options.deflateLevel,
      strategy: this._options.deflateStrategy
    };
  }, o.prototype.createDeflate = function() {
    return this._options.deflateFactory(this.getDeflateOptions());
  }, o.prototype.filterData = function(n, s, l) {
    let h = i(n, s, l, this._options), u = e.COLORTYPE_TO_BPP_MAP[this._options.colorType];
    return a(h, s, l, this._options, u);
  }, o.prototype._packChunk = function(n, s) {
    let l = s ? s.length : 0, h = Buffer.alloc(l + 12);
    return h.writeUInt32BE(l, 0), h.writeUInt32BE(n, 4), s && s.copy(h, 8), h.writeInt32BE(
      t.crc32(h.slice(4, h.length - 4)),
      h.length - 4
    ), h;
  }, o.prototype.packGAMA = function(n) {
    let s = Buffer.alloc(4);
    return s.writeUInt32BE(Math.floor(n * e.GAMMA_DIVISION), 0), this._packChunk(e.TYPE_gAMA, s);
  }, o.prototype.packIHDR = function(n, s) {
    let l = Buffer.alloc(13);
    return l.writeUInt32BE(n, 0), l.writeUInt32BE(s, 4), l[8] = this._options.bitDepth, l[9] = this._options.colorType, l[10] = 0, l[11] = 0, l[12] = 0, this._packChunk(e.TYPE_IHDR, l);
  }, o.prototype.packIDAT = function(n) {
    return this._packChunk(e.TYPE_IDAT, n);
  }, o.prototype.packIEND = function() {
    return this._packChunk(e.TYPE_IEND, null);
  }, packer.exports;
}
var hasRequiredPackerAsync;
function requirePackerAsync() {
  if (hasRequiredPackerAsync) return packerAsync.exports;
  hasRequiredPackerAsync = 1;
  let e = require$$0, t = Stream, i = requireConstants$1(), a = requirePacker(), r = packerAsync.exports = function(o) {
    t.call(this);
    let n = o || {};
    this._packer = new a(n), this._deflate = this._packer.createDeflate(), this.readable = !0;
  };
  return e.inherits(r, t), r.prototype.pack = function(o, n, s, l) {
    this.emit("data", Buffer.from(i.PNG_SIGNATURE)), this.emit("data", this._packer.packIHDR(n, s)), l && this.emit("data", this._packer.packGAMA(l));
    let h = this._packer.filterData(o, n, s);
    this._deflate.on("error", this.emit.bind(this, "error")), this._deflate.on(
      "data",
      (function(u) {
        this.emit("data", this._packer.packIDAT(u));
      }).bind(this)
    ), this._deflate.on(
      "end",
      (function() {
        this.emit("data", this._packer.packIEND()), this.emit("end");
      }).bind(this)
    ), this._deflate.end(h);
  }, packerAsync.exports;
}
var pngSync = {}, syncInflate = { exports: {} }, hasRequiredSyncInflate;
function requireSyncInflate() {
  return hasRequiredSyncInflate || (hasRequiredSyncInflate = 1, (function(e, t) {
    let i = require$$2.ok, a = zlib, r = require$$0, o = require$$0$1.kMaxLength;
    function n(d) {
      if (!(this instanceof n))
        return new n(d);
      d && d.chunkSize < a.Z_MIN_CHUNK && (d.chunkSize = a.Z_MIN_CHUNK), a.Inflate.call(this, d), this._offset = this._offset === void 0 ? this._outOffset : this._offset, this._buffer = this._buffer || this._outBuffer, d && d.maxLength != null && (this._maxLength = d.maxLength);
    }
    function s(d) {
      return new n(d);
    }
    function l(d, m) {
      d._handle && (d._handle.close(), d._handle = null);
    }
    n.prototype._processChunk = function(d, m, p) {
      if (typeof p == "function")
        return a.Inflate._processChunk.call(this, d, m, p);
      let g = this, M = d && d.length, k = this._chunkSize - this._offset, w = this._maxLength, v = 0, C = [], B = 0, A;
      this.on("error", function(F) {
        A = F;
      });
      function S(F, Z) {
        if (g._hadError)
          return;
        let P = k - Z;
        if (i(P >= 0, "have should not go down"), P > 0) {
          let D = g._buffer.slice(g._offset, g._offset + P);
          if (g._offset += P, D.length > w && (D = D.slice(0, w)), C.push(D), B += D.length, w -= D.length, w === 0)
            return !1;
        }
        return (Z === 0 || g._offset >= g._chunkSize) && (k = g._chunkSize, g._offset = 0, g._buffer = Buffer.allocUnsafe(g._chunkSize)), Z === 0 ? (v += M - F, M = F, !0) : !1;
      }
      i(this._handle, "zlib binding closed");
      let b;
      do
        b = this._handle.writeSync(
          m,
          d,
          // in
          v,
          // in_off
          M,
          // in_len
          this._buffer,
          // out
          this._offset,
          //out_off
          k
        ), b = b || this._writeState;
      while (!this._hadError && S(b[0], b[1]));
      if (this._hadError)
        throw A;
      if (B >= o)
        throw l(this), new RangeError(
          "Cannot create final Buffer. It would be larger than 0x" + o.toString(16) + " bytes"
        );
      let E = Buffer.concat(C, B);
      return l(this), E;
    }, r.inherits(n, a.Inflate);
    function h(d, m) {
      if (typeof m == "string" && (m = Buffer.from(m)), !(m instanceof Buffer))
        throw new TypeError("Not a string or buffer");
      let p = d._finishFlushFlag;
      return p == null && (p = a.Z_FINISH), d._processChunk(m, p);
    }
    function u(d, m) {
      return h(new n(m), d);
    }
    e.exports = t = u, t.Inflate = n, t.createInflate = s, t.inflateSync = u;
  })(syncInflate, syncInflate.exports)), syncInflate.exports;
}
var syncReader = { exports: {} }, hasRequiredSyncReader;
function requireSyncReader() {
  if (hasRequiredSyncReader) return syncReader.exports;
  hasRequiredSyncReader = 1;
  let e = syncReader.exports = function(t) {
    this._buffer = t, this._reads = [];
  };
  return e.prototype.read = function(t, i) {
    this._reads.push({
      length: Math.abs(t),
      // if length < 0 then at most this length
      allowLess: t < 0,
      func: i
    });
  }, e.prototype.process = function() {
    for (; this._reads.length > 0 && this._buffer.length; ) {
      let t = this._reads[0];
      if (this._buffer.length && (this._buffer.length >= t.length || t.allowLess)) {
        this._reads.shift();
        let i = this._buffer;
        this._buffer = i.slice(t.length), t.func.call(this, i.slice(0, t.length));
      } else
        break;
    }
    if (this._reads.length > 0)
      throw new Error("There are some read requests waitng on finished stream");
    if (this._buffer.length > 0)
      throw new Error("unrecognised content at end of stream");
  }, syncReader.exports;
}
var filterParseSync = {}, hasRequiredFilterParseSync;
function requireFilterParseSync() {
  if (hasRequiredFilterParseSync) return filterParseSync;
  hasRequiredFilterParseSync = 1;
  let e = requireSyncReader(), t = requireFilterParse();
  return filterParseSync.process = function(i, a) {
    let r = [], o = new e(i);
    return new t(a, {
      read: o.read.bind(o),
      write: function(s) {
        r.push(s);
      },
      complete: function() {
      }
    }).start(), o.process(), Buffer.concat(r);
  }, filterParseSync;
}
var parserSync, hasRequiredParserSync;
function requireParserSync() {
  if (hasRequiredParserSync) return parserSync;
  hasRequiredParserSync = 1;
  let e = !0, t = zlib, i = requireSyncInflate();
  t.deflateSync || (e = !1);
  let a = requireSyncReader(), r = requireFilterParseSync(), o = requireParser$1(), n = requireBitmapper(), s = requireFormatNormaliser();
  return parserSync = function(l, h) {
    if (!e)
      throw new Error(
        "To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0"
      );
    let u;
    function d(D) {
      u = D;
    }
    let m;
    function p(D) {
      m = D;
    }
    function g(D) {
      m.transColor = D;
    }
    function M(D) {
      m.palette = D;
    }
    function k() {
      m.alpha = !0;
    }
    let w;
    function v(D) {
      w = D;
    }
    let C = [];
    function B(D) {
      C.push(D);
    }
    let A = new a(l);
    if (new o(h, {
      read: A.read.bind(A),
      error: d,
      metadata: p,
      gamma: v,
      palette: M,
      transColor: g,
      inflateData: B,
      simpleTransparency: k
    }).start(), A.process(), u)
      throw u;
    let b = Buffer.concat(C);
    C.length = 0;
    let E;
    if (m.interlace)
      E = t.inflateSync(b);
    else {
      let L = ((m.width * m.bpp * m.depth + 7 >> 3) + 1) * m.height;
      E = i(b, {
        chunkSize: L,
        maxLength: L
      });
    }
    if (b = null, !E || !E.length)
      throw new Error("bad png - invalid inflate data response");
    let F = r.process(E, m);
    b = null;
    let Z = n.dataToBitMap(F, m);
    F = null;
    let P = s(
      Z,
      m,
      h.skipRescale
    );
    return m.data = P, m.gamma = w || 0, m;
  }, parserSync;
}
var packerSync, hasRequiredPackerSync;
function requirePackerSync() {
  if (hasRequiredPackerSync) return packerSync;
  hasRequiredPackerSync = 1;
  let e = !0, t = zlib;
  t.deflateSync || (e = !1);
  let i = requireConstants$1(), a = requirePacker();
  return packerSync = function(r, o) {
    if (!e)
      throw new Error(
        "To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0"
      );
    let n = o || {}, s = new a(n), l = [];
    l.push(Buffer.from(i.PNG_SIGNATURE)), l.push(s.packIHDR(r.width, r.height)), r.gamma && l.push(s.packGAMA(r.gamma));
    let h = s.filterData(
      r.data,
      r.width,
      r.height
    ), u = t.deflateSync(
      h,
      s.getDeflateOptions()
    );
    if (h = null, !u || !u.length)
      throw new Error("bad png - invalid compressed data response");
    return l.push(s.packIDAT(u)), l.push(s.packIEND()), Buffer.concat(l);
  }, packerSync;
}
var hasRequiredPngSync;
function requirePngSync() {
  if (hasRequiredPngSync) return pngSync;
  hasRequiredPngSync = 1;
  let e = requireParserSync(), t = requirePackerSync();
  return pngSync.read = function(i, a) {
    return e(i, a || {});
  }, pngSync.write = function(i, a) {
    return t(i, a);
  }, pngSync;
}
var hasRequiredPng;
function requirePng() {
  if (hasRequiredPng) return png$1;
  hasRequiredPng = 1;
  let e = require$$0, t = Stream, i = requireParserAsync(), a = requirePackerAsync(), r = requirePngSync(), o = png$1.PNG = function(n) {
    t.call(this), n = n || {}, this.width = n.width | 0, this.height = n.height | 0, this.data = this.width > 0 && this.height > 0 ? Buffer.alloc(4 * this.width * this.height) : null, n.fill && this.data && this.data.fill(0), this.gamma = 0, this.readable = this.writable = !0, this._parser = new i(n), this._parser.on("error", this.emit.bind(this, "error")), this._parser.on("close", this._handleClose.bind(this)), this._parser.on("metadata", this._metadata.bind(this)), this._parser.on("gamma", this._gamma.bind(this)), this._parser.on(
      "parsed",
      (function(s) {
        this.data = s, this.emit("parsed", s);
      }).bind(this)
    ), this._packer = new a(n), this._packer.on("data", this.emit.bind(this, "data")), this._packer.on("end", this.emit.bind(this, "end")), this._parser.on("close", this._handleClose.bind(this)), this._packer.on("error", this.emit.bind(this, "error"));
  };
  return e.inherits(o, t), o.sync = r, o.prototype.pack = function() {
    return !this.data || !this.data.length ? (this.emit("error", "No data provided"), this) : (process.nextTick(
      (function() {
        this._packer.pack(this.data, this.width, this.height, this.gamma);
      }).bind(this)
    ), this);
  }, o.prototype.parse = function(n, s) {
    if (s) {
      let l, h;
      l = (function(u) {
        this.removeListener("error", h), this.data = u, s(null, this);
      }).bind(this), h = (function(u) {
        this.removeListener("parsed", l), s(u, null);
      }).bind(this), this.once("parsed", l), this.once("error", h);
    }
    return this.end(n), this;
  }, o.prototype.write = function(n) {
    return this._parser.write(n), !0;
  }, o.prototype.end = function(n) {
    this._parser.end(n);
  }, o.prototype._metadata = function(n) {
    this.width = n.width, this.height = n.height, this.emit("metadata", n);
  }, o.prototype._gamma = function(n) {
    this.gamma = n;
  }, o.prototype._handleClose = function() {
    !this._parser.writable && !this._packer.readable && this.emit("close");
  }, o.bitblt = function(n, s, l, h, u, d, m, p) {
    if (l |= 0, h |= 0, u |= 0, d |= 0, m |= 0, p |= 0, l > n.width || h > n.height || l + u > n.width || h + d > n.height)
      throw new Error("bitblt reading outside image");
    if (m > s.width || p > s.height || m + u > s.width || p + d > s.height)
      throw new Error("bitblt writing outside image");
    for (let g = 0; g < d; g++)
      n.data.copy(
        s.data,
        (p + g) * s.width + m << 2,
        (h + g) * n.width + l << 2,
        (h + g) * n.width + l + u << 2
      );
  }, o.prototype.bitblt = function(n, s, l, h, u, d, m) {
    return o.bitblt(this, n, s, l, h, u, d, m), this;
  }, o.adjustGamma = function(n) {
    if (n.gamma) {
      for (let s = 0; s < n.height; s++)
        for (let l = 0; l < n.width; l++) {
          let h = n.width * s + l << 2;
          for (let u = 0; u < 3; u++) {
            let d = n.data[h + u] / 255;
            d = Math.pow(d, 1 / 2.2 / n.gamma), n.data[h + u] = Math.round(d * 255);
          }
        }
      n.gamma = 0;
    }
  }, o.prototype.adjustGamma = function() {
    o.adjustGamma(this);
  }, png$1;
}
var pngExports = requirePng(), PNGFilterType;
(function(e) {
  e[e.AUTO = -1] = "AUTO", e[e.NONE = 0] = "NONE", e[e.SUB = 1] = "SUB", e[e.UP = 2] = "UP", e[e.AVERAGE = 3] = "AVERAGE", e[e.PATH = 4] = "PATH";
})(PNGFilterType || (PNGFilterType = {}));
var PNGColorType;
(function(e) {
  e[e.GRAYSCALE = 0] = "GRAYSCALE", e[e.COLOR = 2] = "COLOR", e[e.GRAYSCALE_ALPHA = 4] = "GRAYSCALE_ALPHA", e[e.COLOR_ALPHA = 6] = "COLOR_ALPHA";
})(PNGColorType || (PNGColorType = {}));
function png() {
  return {
    mime: "image/png",
    hasAlpha: !0,
    encode: (e, { deflateLevel: t = 9, deflateStrategy: i = 3, filterType: a = PNGFilterType.AUTO, colorType: r, inputHasAlpha: o = !0, ...n } = {}) => {
      const s = new pngExports.PNG({
        width: e.width,
        height: e.height
      });
      return s.data = e.data, pngExports.PNG.sync.write(s, {
        ...n,
        deflateLevel: t,
        deflateStrategy: i,
        filterType: a,
        colorType: typeof r < "u" ? r : o ? PNGColorType.COLOR_ALPHA : PNGColorType.COLOR,
        inputHasAlpha: o
      });
    },
    decode: (e, t) => {
      const i = pngExports.PNG.sync.read(e, t);
      return {
        data: i.data,
        width: i.width,
        height: i.height
      };
    }
  };
}
var UTIF = { exports: {} }, common = {}, hasRequiredCommon;
function requireCommon() {
  return hasRequiredCommon || (hasRequiredCommon = 1, (function(e) {
    var t = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
    function i(o, n) {
      return Object.prototype.hasOwnProperty.call(o, n);
    }
    e.assign = function(o) {
      for (var n = Array.prototype.slice.call(arguments, 1); n.length; ) {
        var s = n.shift();
        if (s) {
          if (typeof s != "object")
            throw new TypeError(s + "must be non-object");
          for (var l in s)
            i(s, l) && (o[l] = s[l]);
        }
      }
      return o;
    }, e.shrinkBuf = function(o, n) {
      return o.length === n ? o : o.subarray ? o.subarray(0, n) : (o.length = n, o);
    };
    var a = {
      arraySet: function(o, n, s, l, h) {
        if (n.subarray && o.subarray) {
          o.set(n.subarray(s, s + l), h);
          return;
        }
        for (var u = 0; u < l; u++)
          o[h + u] = n[s + u];
      },
      // Join array of chunks to single array.
      flattenChunks: function(o) {
        var n, s, l, h, u, d;
        for (l = 0, n = 0, s = o.length; n < s; n++)
          l += o[n].length;
        for (d = new Uint8Array(l), h = 0, n = 0, s = o.length; n < s; n++)
          u = o[n], d.set(u, h), h += u.length;
        return d;
      }
    }, r = {
      arraySet: function(o, n, s, l, h) {
        for (var u = 0; u < l; u++)
          o[h + u] = n[s + u];
      },
      // Join array of chunks to single array.
      flattenChunks: function(o) {
        return [].concat.apply([], o);
      }
    };
    e.setTyped = function(o) {
      o ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, a)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, r));
    }, e.setTyped(t);
  })(common)), common;
}
var deflate$1 = {}, deflate = {}, trees = {}, hasRequiredTrees;
function requireTrees() {
  if (hasRequiredTrees) return trees;
  hasRequiredTrees = 1;
  var e = requireCommon(), t = 4, i = 0, a = 1, r = 2;
  function o(O) {
    for (var ge = O.length; --ge >= 0; )
      O[ge] = 0;
  }
  var n = 0, s = 1, l = 2, h = 3, u = 258, d = 29, m = 256, p = m + 1 + d, g = 30, M = 19, k = 2 * p + 1, w = 15, v = 16, C = 7, B = 256, A = 16, S = 17, b = 18, E = (
    /* extra bits for each length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
  ), F = (
    /* extra bits for each distance code */
    [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
  ), Z = (
    /* extra bits for each bit length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
  ), P = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], D = 512, L = new Array((p + 2) * 2);
  o(L);
  var q = new Array(g * 2);
  o(q);
  var j = new Array(D);
  o(j);
  var J = new Array(u - h + 1);
  o(J);
  var ie = new Array(d);
  o(ie);
  var V = new Array(g);
  o(V);
  function Q(O, ge, oe, be, $) {
    this.static_tree = O, this.extra_bits = ge, this.extra_base = oe, this.elems = be, this.max_length = $, this.has_stree = O && O.length;
  }
  var ee, xe, ke;
  function ve(O, ge) {
    this.dyn_tree = O, this.max_code = 0, this.stat_desc = ge;
  }
  function H(O) {
    return O < 256 ? j[O] : j[256 + (O >>> 7)];
  }
  function W(O, ge) {
    O.pending_buf[O.pending++] = ge & 255, O.pending_buf[O.pending++] = ge >>> 8 & 255;
  }
  function U(O, ge, oe) {
    O.bi_valid > v - oe ? (O.bi_buf |= ge << O.bi_valid & 65535, W(O, O.bi_buf), O.bi_buf = ge >> v - O.bi_valid, O.bi_valid += oe - v) : (O.bi_buf |= ge << O.bi_valid & 65535, O.bi_valid += oe);
  }
  function re(O, ge, oe) {
    U(
      O,
      oe[ge * 2],
      oe[ge * 2 + 1]
      /*.Len*/
    );
  }
  function ae(O, ge) {
    var oe = 0;
    do
      oe |= O & 1, O >>>= 1, oe <<= 1;
    while (--ge > 0);
    return oe >>> 1;
  }
  function we(O) {
    O.bi_valid === 16 ? (W(O, O.bi_buf), O.bi_buf = 0, O.bi_valid = 0) : O.bi_valid >= 8 && (O.pending_buf[O.pending++] = O.bi_buf & 255, O.bi_buf >>= 8, O.bi_valid -= 8);
  }
  function Ae(O, ge) {
    var oe = ge.dyn_tree, be = ge.max_code, $ = ge.stat_desc.static_tree, pe = ge.stat_desc.has_stree, I = ge.stat_desc.extra_bits, me = ge.stat_desc.extra_base, qe = ge.stat_desc.max_length, _, te, fe, R, K, _e, Ye = 0;
    for (R = 0; R <= w; R++)
      O.bl_count[R] = 0;
    for (oe[O.heap[O.heap_max] * 2 + 1] = 0, _ = O.heap_max + 1; _ < k; _++)
      te = O.heap[_], R = oe[oe[te * 2 + 1] * 2 + 1] + 1, R > qe && (R = qe, Ye++), oe[te * 2 + 1] = R, !(te > be) && (O.bl_count[R]++, K = 0, te >= me && (K = I[te - me]), _e = oe[te * 2], O.opt_len += _e * (R + K), pe && (O.static_len += _e * ($[te * 2 + 1] + K)));
    if (Ye !== 0) {
      do {
        for (R = qe - 1; O.bl_count[R] === 0; )
          R--;
        O.bl_count[R]--, O.bl_count[R + 1] += 2, O.bl_count[qe]--, Ye -= 2;
      } while (Ye > 0);
      for (R = qe; R !== 0; R--)
        for (te = O.bl_count[R]; te !== 0; )
          fe = O.heap[--_], !(fe > be) && (oe[fe * 2 + 1] !== R && (O.opt_len += (R - oe[fe * 2 + 1]) * oe[fe * 2], oe[fe * 2 + 1] = R), te--);
    }
  }
  function he(O, ge, oe) {
    var be = new Array(w + 1), $ = 0, pe, I;
    for (pe = 1; pe <= w; pe++)
      be[pe] = $ = $ + oe[pe - 1] << 1;
    for (I = 0; I <= ge; I++) {
      var me = O[I * 2 + 1];
      me !== 0 && (O[I * 2] = ae(be[me]++, me));
    }
  }
  function ue() {
    var O, ge, oe, be, $, pe = new Array(w + 1);
    for (oe = 0, be = 0; be < d - 1; be++)
      for (ie[be] = oe, O = 0; O < 1 << E[be]; O++)
        J[oe++] = be;
    for (J[oe - 1] = be, $ = 0, be = 0; be < 16; be++)
      for (V[be] = $, O = 0; O < 1 << F[be]; O++)
        j[$++] = be;
    for ($ >>= 7; be < g; be++)
      for (V[be] = $ << 7, O = 0; O < 1 << F[be] - 7; O++)
        j[256 + $++] = be;
    for (ge = 0; ge <= w; ge++)
      pe[ge] = 0;
    for (O = 0; O <= 143; )
      L[O * 2 + 1] = 8, O++, pe[8]++;
    for (; O <= 255; )
      L[O * 2 + 1] = 9, O++, pe[9]++;
    for (; O <= 279; )
      L[O * 2 + 1] = 7, O++, pe[7]++;
    for (; O <= 287; )
      L[O * 2 + 1] = 8, O++, pe[8]++;
    for (he(L, p + 1, pe), O = 0; O < g; O++)
      q[O * 2 + 1] = 5, q[O * 2] = ae(O, 5);
    ee = new Q(L, E, m + 1, p, w), xe = new Q(q, F, 0, g, w), ke = new Q(new Array(0), Z, 0, M, C);
  }
  function ce(O) {
    var ge;
    for (ge = 0; ge < p; ge++)
      O.dyn_ltree[ge * 2] = 0;
    for (ge = 0; ge < g; ge++)
      O.dyn_dtree[ge * 2] = 0;
    for (ge = 0; ge < M; ge++)
      O.bl_tree[ge * 2] = 0;
    O.dyn_ltree[B * 2] = 1, O.opt_len = O.static_len = 0, O.last_lit = O.matches = 0;
  }
  function ye(O) {
    O.bi_valid > 8 ? W(O, O.bi_buf) : O.bi_valid > 0 && (O.pending_buf[O.pending++] = O.bi_buf), O.bi_buf = 0, O.bi_valid = 0;
  }
  function Se(O, ge, oe, be) {
    ye(O), W(O, oe), W(O, ~oe), e.arraySet(O.pending_buf, O.window, ge, oe, O.pending), O.pending += oe;
  }
  function Ie(O, ge, oe, be) {
    var $ = ge * 2, pe = oe * 2;
    return O[$] < O[pe] || O[$] === O[pe] && be[ge] <= be[oe];
  }
  function Be(O, ge, oe) {
    for (var be = O.heap[oe], $ = oe << 1; $ <= O.heap_len && ($ < O.heap_len && Ie(ge, O.heap[$ + 1], O.heap[$], O.depth) && $++, !Ie(ge, be, O.heap[$], O.depth)); )
      O.heap[oe] = O.heap[$], oe = $, $ <<= 1;
    O.heap[oe] = be;
  }
  function Ce(O, ge, oe) {
    var be, $, pe = 0, I, me;
    if (O.last_lit !== 0)
      do
        be = O.pending_buf[O.d_buf + pe * 2] << 8 | O.pending_buf[O.d_buf + pe * 2 + 1], $ = O.pending_buf[O.l_buf + pe], pe++, be === 0 ? re(O, $, ge) : (I = J[$], re(O, I + m + 1, ge), me = E[I], me !== 0 && ($ -= ie[I], U(O, $, me)), be--, I = H(be), re(O, I, oe), me = F[I], me !== 0 && (be -= V[I], U(O, be, me)));
      while (pe < O.last_lit);
    re(O, B, ge);
  }
  function se(O, ge) {
    var oe = ge.dyn_tree, be = ge.stat_desc.static_tree, $ = ge.stat_desc.has_stree, pe = ge.stat_desc.elems, I, me, qe = -1, _;
    for (O.heap_len = 0, O.heap_max = k, I = 0; I < pe; I++)
      oe[I * 2] !== 0 ? (O.heap[++O.heap_len] = qe = I, O.depth[I] = 0) : oe[I * 2 + 1] = 0;
    for (; O.heap_len < 2; )
      _ = O.heap[++O.heap_len] = qe < 2 ? ++qe : 0, oe[_ * 2] = 1, O.depth[_] = 0, O.opt_len--, $ && (O.static_len -= be[_ * 2 + 1]);
    for (ge.max_code = qe, I = O.heap_len >> 1; I >= 1; I--)
      Be(O, oe, I);
    _ = pe;
    do
      I = O.heap[
        1
        /*SMALLEST*/
      ], O.heap[
        1
        /*SMALLEST*/
      ] = O.heap[O.heap_len--], Be(
        O,
        oe,
        1
        /*SMALLEST*/
      ), me = O.heap[
        1
        /*SMALLEST*/
      ], O.heap[--O.heap_max] = I, O.heap[--O.heap_max] = me, oe[_ * 2] = oe[I * 2] + oe[me * 2], O.depth[_] = (O.depth[I] >= O.depth[me] ? O.depth[I] : O.depth[me]) + 1, oe[I * 2 + 1] = oe[me * 2 + 1] = _, O.heap[
        1
        /*SMALLEST*/
      ] = _++, Be(
        O,
        oe,
        1
        /*SMALLEST*/
      );
    while (O.heap_len >= 2);
    O.heap[--O.heap_max] = O.heap[
      1
      /*SMALLEST*/
    ], Ae(O, ge), he(oe, qe, O.bl_count);
  }
  function Fe(O, ge, oe) {
    var be, $ = -1, pe, I = ge[1], me = 0, qe = 7, _ = 4;
    for (I === 0 && (qe = 138, _ = 3), ge[(oe + 1) * 2 + 1] = 65535, be = 0; be <= oe; be++)
      pe = I, I = ge[(be + 1) * 2 + 1], !(++me < qe && pe === I) && (me < _ ? O.bl_tree[pe * 2] += me : pe !== 0 ? (pe !== $ && O.bl_tree[pe * 2]++, O.bl_tree[A * 2]++) : me <= 10 ? O.bl_tree[S * 2]++ : O.bl_tree[b * 2]++, me = 0, $ = pe, I === 0 ? (qe = 138, _ = 3) : pe === I ? (qe = 6, _ = 3) : (qe = 7, _ = 4));
  }
  function Pe(O, ge, oe) {
    var be, $ = -1, pe, I = ge[1], me = 0, qe = 7, _ = 4;
    for (I === 0 && (qe = 138, _ = 3), be = 0; be <= oe; be++)
      if (pe = I, I = ge[(be + 1) * 2 + 1], !(++me < qe && pe === I)) {
        if (me < _)
          do
            re(O, pe, O.bl_tree);
          while (--me !== 0);
        else pe !== 0 ? (pe !== $ && (re(O, pe, O.bl_tree), me--), re(O, A, O.bl_tree), U(O, me - 3, 2)) : me <= 10 ? (re(O, S, O.bl_tree), U(O, me - 3, 3)) : (re(O, b, O.bl_tree), U(O, me - 11, 7));
        me = 0, $ = pe, I === 0 ? (qe = 138, _ = 3) : pe === I ? (qe = 6, _ = 3) : (qe = 7, _ = 4);
      }
  }
  function Te(O) {
    var ge;
    for (Fe(O, O.dyn_ltree, O.l_desc.max_code), Fe(O, O.dyn_dtree, O.d_desc.max_code), se(O, O.bl_desc), ge = M - 1; ge >= 3 && O.bl_tree[P[ge] * 2 + 1] === 0; ge--)
      ;
    return O.opt_len += 3 * (ge + 1) + 5 + 5 + 4, ge;
  }
  function ze(O, ge, oe, be) {
    var $;
    for (U(O, ge - 257, 5), U(O, oe - 1, 5), U(O, be - 4, 4), $ = 0; $ < be; $++)
      U(O, O.bl_tree[P[$] * 2 + 1], 3);
    Pe(O, O.dyn_ltree, ge - 1), Pe(O, O.dyn_dtree, oe - 1);
  }
  function We(O) {
    var ge = 4093624447, oe;
    for (oe = 0; oe <= 31; oe++, ge >>>= 1)
      if (ge & 1 && O.dyn_ltree[oe * 2] !== 0)
        return i;
    if (O.dyn_ltree[18] !== 0 || O.dyn_ltree[20] !== 0 || O.dyn_ltree[26] !== 0)
      return a;
    for (oe = 32; oe < m; oe++)
      if (O.dyn_ltree[oe * 2] !== 0)
        return a;
    return i;
  }
  var He = !1;
  function Ne(O) {
    He || (ue(), He = !0), O.l_desc = new ve(O.dyn_ltree, ee), O.d_desc = new ve(O.dyn_dtree, xe), O.bl_desc = new ve(O.bl_tree, ke), O.bi_buf = 0, O.bi_valid = 0, ce(O);
  }
  function Ge(O, ge, oe, be) {
    U(O, (n << 1) + (be ? 1 : 0), 3), Se(O, ge, oe);
  }
  function Le(O) {
    U(O, s << 1, 3), re(O, B, L), we(O);
  }
  function Oe(O, ge, oe, be) {
    var $, pe, I = 0;
    O.level > 0 ? (O.strm.data_type === r && (O.strm.data_type = We(O)), se(O, O.l_desc), se(O, O.d_desc), I = Te(O), $ = O.opt_len + 3 + 7 >>> 3, pe = O.static_len + 3 + 7 >>> 3, pe <= $ && ($ = pe)) : $ = pe = oe + 5, oe + 4 <= $ && ge !== -1 ? Ge(O, ge, oe, be) : O.strategy === t || pe === $ ? (U(O, (s << 1) + (be ? 1 : 0), 3), Ce(O, L, q)) : (U(O, (l << 1) + (be ? 1 : 0), 3), ze(O, O.l_desc.max_code + 1, O.d_desc.max_code + 1, I + 1), Ce(O, O.dyn_ltree, O.dyn_dtree)), ce(O), be && ye(O);
  }
  function Ke(O, ge, oe) {
    return O.pending_buf[O.d_buf + O.last_lit * 2] = ge >>> 8 & 255, O.pending_buf[O.d_buf + O.last_lit * 2 + 1] = ge & 255, O.pending_buf[O.l_buf + O.last_lit] = oe & 255, O.last_lit++, ge === 0 ? O.dyn_ltree[oe * 2]++ : (O.matches++, ge--, O.dyn_ltree[(J[oe] + m + 1) * 2]++, O.dyn_dtree[H(ge) * 2]++), O.last_lit === O.lit_bufsize - 1;
  }
  return trees._tr_init = Ne, trees._tr_stored_block = Ge, trees._tr_flush_block = Oe, trees._tr_tally = Ke, trees._tr_align = Le, trees;
}
var adler32_1, hasRequiredAdler32;
function requireAdler32() {
  if (hasRequiredAdler32) return adler32_1;
  hasRequiredAdler32 = 1;
  function e(t, i, a, r) {
    for (var o = t & 65535 | 0, n = t >>> 16 & 65535 | 0, s = 0; a !== 0; ) {
      s = a > 2e3 ? 2e3 : a, a -= s;
      do
        o = o + i[r++] | 0, n = n + o | 0;
      while (--s);
      o %= 65521, n %= 65521;
    }
    return o | n << 16 | 0;
  }
  return adler32_1 = e, adler32_1;
}
var crc32_1, hasRequiredCrc32;
function requireCrc32() {
  if (hasRequiredCrc32) return crc32_1;
  hasRequiredCrc32 = 1;
  function e() {
    for (var a, r = [], o = 0; o < 256; o++) {
      a = o;
      for (var n = 0; n < 8; n++)
        a = a & 1 ? 3988292384 ^ a >>> 1 : a >>> 1;
      r[o] = a;
    }
    return r;
  }
  var t = e();
  function i(a, r, o, n) {
    var s = t, l = n + o;
    a ^= -1;
    for (var h = n; h < l; h++)
      a = a >>> 8 ^ s[(a ^ r[h]) & 255];
    return a ^ -1;
  }
  return crc32_1 = i, crc32_1;
}
var messages, hasRequiredMessages;
function requireMessages() {
  return hasRequiredMessages || (hasRequiredMessages = 1, messages = {
    2: "need dictionary",
    /* Z_NEED_DICT       2  */
    1: "stream end",
    /* Z_STREAM_END      1  */
    0: "",
    /* Z_OK              0  */
    "-1": "file error",
    /* Z_ERRNO         (-1) */
    "-2": "stream error",
    /* Z_STREAM_ERROR  (-2) */
    "-3": "data error",
    /* Z_DATA_ERROR    (-3) */
    "-4": "insufficient memory",
    /* Z_MEM_ERROR     (-4) */
    "-5": "buffer error",
    /* Z_BUF_ERROR     (-5) */
    "-6": "incompatible version"
    /* Z_VERSION_ERROR (-6) */
  }), messages;
}
var hasRequiredDeflate$1;
function requireDeflate$1() {
  if (hasRequiredDeflate$1) return deflate;
  hasRequiredDeflate$1 = 1;
  var e = requireCommon(), t = requireTrees(), i = requireAdler32(), a = requireCrc32(), r = requireMessages(), o = 0, n = 1, s = 3, l = 4, h = 5, u = 0, d = 1, m = -2, p = -3, g = -5, M = -1, k = 1, w = 2, v = 3, C = 4, B = 0, A = 2, S = 8, b = 9, E = 15, F = 8, Z = 29, P = 256, D = P + 1 + Z, L = 30, q = 19, j = 2 * D + 1, J = 15, ie = 3, V = 258, Q = V + ie + 1, ee = 32, xe = 42, ke = 69, ve = 73, H = 91, W = 103, U = 113, re = 666, ae = 1, we = 2, Ae = 3, he = 4, ue = 3;
  function ce(_, te) {
    return _.msg = r[te], te;
  }
  function ye(_) {
    return (_ << 1) - (_ > 4 ? 9 : 0);
  }
  function Se(_) {
    for (var te = _.length; --te >= 0; )
      _[te] = 0;
  }
  function Ie(_) {
    var te = _.state, fe = te.pending;
    fe > _.avail_out && (fe = _.avail_out), fe !== 0 && (e.arraySet(_.output, te.pending_buf, te.pending_out, fe, _.next_out), _.next_out += fe, te.pending_out += fe, _.total_out += fe, _.avail_out -= fe, te.pending -= fe, te.pending === 0 && (te.pending_out = 0));
  }
  function Be(_, te) {
    t._tr_flush_block(_, _.block_start >= 0 ? _.block_start : -1, _.strstart - _.block_start, te), _.block_start = _.strstart, Ie(_.strm);
  }
  function Ce(_, te) {
    _.pending_buf[_.pending++] = te;
  }
  function se(_, te) {
    _.pending_buf[_.pending++] = te >>> 8 & 255, _.pending_buf[_.pending++] = te & 255;
  }
  function Fe(_, te, fe, R) {
    var K = _.avail_in;
    return K > R && (K = R), K === 0 ? 0 : (_.avail_in -= K, e.arraySet(te, _.input, _.next_in, K, fe), _.state.wrap === 1 ? _.adler = i(_.adler, te, K, fe) : _.state.wrap === 2 && (_.adler = a(_.adler, te, K, fe)), _.next_in += K, _.total_in += K, K);
  }
  function Pe(_, te) {
    var fe = _.max_chain_length, R = _.strstart, K, _e, Ye = _.prev_length, Ue = _.nice_match, je = _.strstart > _.w_size - Q ? _.strstart - (_.w_size - Q) : 0, tt = _.window, mt = _.w_mask, st = _.prev, rt = _.strstart + V, Ve = tt[R + Ye - 1], ht = tt[R + Ye];
    _.prev_length >= _.good_match && (fe >>= 2), Ue > _.lookahead && (Ue = _.lookahead);
    do
      if (K = te, !(tt[K + Ye] !== ht || tt[K + Ye - 1] !== Ve || tt[K] !== tt[R] || tt[++K] !== tt[R + 1])) {
        R += 2, K++;
        do
          ;
        while (tt[++R] === tt[++K] && tt[++R] === tt[++K] && tt[++R] === tt[++K] && tt[++R] === tt[++K] && tt[++R] === tt[++K] && tt[++R] === tt[++K] && tt[++R] === tt[++K] && tt[++R] === tt[++K] && R < rt);
        if (_e = V - (rt - R), R = rt - V, _e > Ye) {
          if (_.match_start = te, Ye = _e, _e >= Ue)
            break;
          Ve = tt[R + Ye - 1], ht = tt[R + Ye];
        }
      }
    while ((te = st[te & mt]) > je && --fe !== 0);
    return Ye <= _.lookahead ? Ye : _.lookahead;
  }
  function Te(_) {
    var te = _.w_size, fe, R, K, _e, Ye;
    do {
      if (_e = _.window_size - _.lookahead - _.strstart, _.strstart >= te + (te - Q)) {
        e.arraySet(_.window, _.window, te, te, 0), _.match_start -= te, _.strstart -= te, _.block_start -= te, R = _.hash_size, fe = R;
        do
          K = _.head[--fe], _.head[fe] = K >= te ? K - te : 0;
        while (--R);
        R = te, fe = R;
        do
          K = _.prev[--fe], _.prev[fe] = K >= te ? K - te : 0;
        while (--R);
        _e += te;
      }
      if (_.strm.avail_in === 0)
        break;
      if (R = Fe(_.strm, _.window, _.strstart + _.lookahead, _e), _.lookahead += R, _.lookahead + _.insert >= ie)
        for (Ye = _.strstart - _.insert, _.ins_h = _.window[Ye], _.ins_h = (_.ins_h << _.hash_shift ^ _.window[Ye + 1]) & _.hash_mask; _.insert && (_.ins_h = (_.ins_h << _.hash_shift ^ _.window[Ye + ie - 1]) & _.hash_mask, _.prev[Ye & _.w_mask] = _.head[_.ins_h], _.head[_.ins_h] = Ye, Ye++, _.insert--, !(_.lookahead + _.insert < ie)); )
          ;
    } while (_.lookahead < Q && _.strm.avail_in !== 0);
  }
  function ze(_, te) {
    var fe = 65535;
    for (fe > _.pending_buf_size - 5 && (fe = _.pending_buf_size - 5); ; ) {
      if (_.lookahead <= 1) {
        if (Te(_), _.lookahead === 0 && te === o)
          return ae;
        if (_.lookahead === 0)
          break;
      }
      _.strstart += _.lookahead, _.lookahead = 0;
      var R = _.block_start + fe;
      if ((_.strstart === 0 || _.strstart >= R) && (_.lookahead = _.strstart - R, _.strstart = R, Be(_, !1), _.strm.avail_out === 0) || _.strstart - _.block_start >= _.w_size - Q && (Be(_, !1), _.strm.avail_out === 0))
        return ae;
    }
    return _.insert = 0, te === l ? (Be(_, !0), _.strm.avail_out === 0 ? Ae : he) : (_.strstart > _.block_start && (Be(_, !1), _.strm.avail_out === 0), ae);
  }
  function We(_, te) {
    for (var fe, R; ; ) {
      if (_.lookahead < Q) {
        if (Te(_), _.lookahead < Q && te === o)
          return ae;
        if (_.lookahead === 0)
          break;
      }
      if (fe = 0, _.lookahead >= ie && (_.ins_h = (_.ins_h << _.hash_shift ^ _.window[_.strstart + ie - 1]) & _.hash_mask, fe = _.prev[_.strstart & _.w_mask] = _.head[_.ins_h], _.head[_.ins_h] = _.strstart), fe !== 0 && _.strstart - fe <= _.w_size - Q && (_.match_length = Pe(_, fe)), _.match_length >= ie)
        if (R = t._tr_tally(_, _.strstart - _.match_start, _.match_length - ie), _.lookahead -= _.match_length, _.match_length <= _.max_lazy_match && _.lookahead >= ie) {
          _.match_length--;
          do
            _.strstart++, _.ins_h = (_.ins_h << _.hash_shift ^ _.window[_.strstart + ie - 1]) & _.hash_mask, fe = _.prev[_.strstart & _.w_mask] = _.head[_.ins_h], _.head[_.ins_h] = _.strstart;
          while (--_.match_length !== 0);
          _.strstart++;
        } else
          _.strstart += _.match_length, _.match_length = 0, _.ins_h = _.window[_.strstart], _.ins_h = (_.ins_h << _.hash_shift ^ _.window[_.strstart + 1]) & _.hash_mask;
      else
        R = t._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++;
      if (R && (Be(_, !1), _.strm.avail_out === 0))
        return ae;
    }
    return _.insert = _.strstart < ie - 1 ? _.strstart : ie - 1, te === l ? (Be(_, !0), _.strm.avail_out === 0 ? Ae : he) : _.last_lit && (Be(_, !1), _.strm.avail_out === 0) ? ae : we;
  }
  function He(_, te) {
    for (var fe, R, K; ; ) {
      if (_.lookahead < Q) {
        if (Te(_), _.lookahead < Q && te === o)
          return ae;
        if (_.lookahead === 0)
          break;
      }
      if (fe = 0, _.lookahead >= ie && (_.ins_h = (_.ins_h << _.hash_shift ^ _.window[_.strstart + ie - 1]) & _.hash_mask, fe = _.prev[_.strstart & _.w_mask] = _.head[_.ins_h], _.head[_.ins_h] = _.strstart), _.prev_length = _.match_length, _.prev_match = _.match_start, _.match_length = ie - 1, fe !== 0 && _.prev_length < _.max_lazy_match && _.strstart - fe <= _.w_size - Q && (_.match_length = Pe(_, fe), _.match_length <= 5 && (_.strategy === k || _.match_length === ie && _.strstart - _.match_start > 4096) && (_.match_length = ie - 1)), _.prev_length >= ie && _.match_length <= _.prev_length) {
        K = _.strstart + _.lookahead - ie, R = t._tr_tally(_, _.strstart - 1 - _.prev_match, _.prev_length - ie), _.lookahead -= _.prev_length - 1, _.prev_length -= 2;
        do
          ++_.strstart <= K && (_.ins_h = (_.ins_h << _.hash_shift ^ _.window[_.strstart + ie - 1]) & _.hash_mask, fe = _.prev[_.strstart & _.w_mask] = _.head[_.ins_h], _.head[_.ins_h] = _.strstart);
        while (--_.prev_length !== 0);
        if (_.match_available = 0, _.match_length = ie - 1, _.strstart++, R && (Be(_, !1), _.strm.avail_out === 0))
          return ae;
      } else if (_.match_available) {
        if (R = t._tr_tally(_, 0, _.window[_.strstart - 1]), R && Be(_, !1), _.strstart++, _.lookahead--, _.strm.avail_out === 0)
          return ae;
      } else
        _.match_available = 1, _.strstart++, _.lookahead--;
    }
    return _.match_available && (R = t._tr_tally(_, 0, _.window[_.strstart - 1]), _.match_available = 0), _.insert = _.strstart < ie - 1 ? _.strstart : ie - 1, te === l ? (Be(_, !0), _.strm.avail_out === 0 ? Ae : he) : _.last_lit && (Be(_, !1), _.strm.avail_out === 0) ? ae : we;
  }
  function Ne(_, te) {
    for (var fe, R, K, _e, Ye = _.window; ; ) {
      if (_.lookahead <= V) {
        if (Te(_), _.lookahead <= V && te === o)
          return ae;
        if (_.lookahead === 0)
          break;
      }
      if (_.match_length = 0, _.lookahead >= ie && _.strstart > 0 && (K = _.strstart - 1, R = Ye[K], R === Ye[++K] && R === Ye[++K] && R === Ye[++K])) {
        _e = _.strstart + V;
        do
          ;
        while (R === Ye[++K] && R === Ye[++K] && R === Ye[++K] && R === Ye[++K] && R === Ye[++K] && R === Ye[++K] && R === Ye[++K] && R === Ye[++K] && K < _e);
        _.match_length = V - (_e - K), _.match_length > _.lookahead && (_.match_length = _.lookahead);
      }
      if (_.match_length >= ie ? (fe = t._tr_tally(_, 1, _.match_length - ie), _.lookahead -= _.match_length, _.strstart += _.match_length, _.match_length = 0) : (fe = t._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++), fe && (Be(_, !1), _.strm.avail_out === 0))
        return ae;
    }
    return _.insert = 0, te === l ? (Be(_, !0), _.strm.avail_out === 0 ? Ae : he) : _.last_lit && (Be(_, !1), _.strm.avail_out === 0) ? ae : we;
  }
  function Ge(_, te) {
    for (var fe; ; ) {
      if (_.lookahead === 0 && (Te(_), _.lookahead === 0)) {
        if (te === o)
          return ae;
        break;
      }
      if (_.match_length = 0, fe = t._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++, fe && (Be(_, !1), _.strm.avail_out === 0))
        return ae;
    }
    return _.insert = 0, te === l ? (Be(_, !0), _.strm.avail_out === 0 ? Ae : he) : _.last_lit && (Be(_, !1), _.strm.avail_out === 0) ? ae : we;
  }
  function Le(_, te, fe, R, K) {
    this.good_length = _, this.max_lazy = te, this.nice_length = fe, this.max_chain = R, this.func = K;
  }
  var Oe;
  Oe = [
    /*      good lazy nice chain */
    new Le(0, 0, 0, 0, ze),
    /* 0 store only */
    new Le(4, 4, 8, 4, We),
    /* 1 max speed, no lazy matches */
    new Le(4, 5, 16, 8, We),
    /* 2 */
    new Le(4, 6, 32, 32, We),
    /* 3 */
    new Le(4, 4, 16, 16, He),
    /* 4 lazy matches */
    new Le(8, 16, 32, 32, He),
    /* 5 */
    new Le(8, 16, 128, 128, He),
    /* 6 */
    new Le(8, 32, 128, 256, He),
    /* 7 */
    new Le(32, 128, 258, 1024, He),
    /* 8 */
    new Le(32, 258, 258, 4096, He)
    /* 9 max compression */
  ];
  function Ke(_) {
    _.window_size = 2 * _.w_size, Se(_.head), _.max_lazy_match = Oe[_.level].max_lazy, _.good_match = Oe[_.level].good_length, _.nice_match = Oe[_.level].nice_length, _.max_chain_length = Oe[_.level].max_chain, _.strstart = 0, _.block_start = 0, _.lookahead = 0, _.insert = 0, _.match_length = _.prev_length = ie - 1, _.match_available = 0, _.ins_h = 0;
  }
  function O() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = S, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new e.Buf16(j * 2), this.dyn_dtree = new e.Buf16((2 * L + 1) * 2), this.bl_tree = new e.Buf16((2 * q + 1) * 2), Se(this.dyn_ltree), Se(this.dyn_dtree), Se(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new e.Buf16(J + 1), this.heap = new e.Buf16(2 * D + 1), Se(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new e.Buf16(2 * D + 1), Se(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }
  function ge(_) {
    var te;
    return !_ || !_.state ? ce(_, m) : (_.total_in = _.total_out = 0, _.data_type = A, te = _.state, te.pending = 0, te.pending_out = 0, te.wrap < 0 && (te.wrap = -te.wrap), te.status = te.wrap ? xe : U, _.adler = te.wrap === 2 ? 0 : 1, te.last_flush = o, t._tr_init(te), u);
  }
  function oe(_) {
    var te = ge(_);
    return te === u && Ke(_.state), te;
  }
  function be(_, te) {
    return !_ || !_.state || _.state.wrap !== 2 ? m : (_.state.gzhead = te, u);
  }
  function $(_, te, fe, R, K, _e) {
    if (!_)
      return m;
    var Ye = 1;
    if (te === M && (te = 6), R < 0 ? (Ye = 0, R = -R) : R > 15 && (Ye = 2, R -= 16), K < 1 || K > b || fe !== S || R < 8 || R > 15 || te < 0 || te > 9 || _e < 0 || _e > C)
      return ce(_, m);
    R === 8 && (R = 9);
    var Ue = new O();
    return _.state = Ue, Ue.strm = _, Ue.wrap = Ye, Ue.gzhead = null, Ue.w_bits = R, Ue.w_size = 1 << Ue.w_bits, Ue.w_mask = Ue.w_size - 1, Ue.hash_bits = K + 7, Ue.hash_size = 1 << Ue.hash_bits, Ue.hash_mask = Ue.hash_size - 1, Ue.hash_shift = ~~((Ue.hash_bits + ie - 1) / ie), Ue.window = new e.Buf8(Ue.w_size * 2), Ue.head = new e.Buf16(Ue.hash_size), Ue.prev = new e.Buf16(Ue.w_size), Ue.lit_bufsize = 1 << K + 6, Ue.pending_buf_size = Ue.lit_bufsize * 4, Ue.pending_buf = new e.Buf8(Ue.pending_buf_size), Ue.d_buf = 1 * Ue.lit_bufsize, Ue.l_buf = 3 * Ue.lit_bufsize, Ue.level = te, Ue.strategy = _e, Ue.method = fe, oe(_);
  }
  function pe(_, te) {
    return $(_, te, S, E, F, B);
  }
  function I(_, te) {
    var fe, R, K, _e;
    if (!_ || !_.state || te > h || te < 0)
      return _ ? ce(_, m) : m;
    if (R = _.state, !_.output || !_.input && _.avail_in !== 0 || R.status === re && te !== l)
      return ce(_, _.avail_out === 0 ? g : m);
    if (R.strm = _, fe = R.last_flush, R.last_flush = te, R.status === xe)
      if (R.wrap === 2)
        _.adler = 0, Ce(R, 31), Ce(R, 139), Ce(R, 8), R.gzhead ? (Ce(
          R,
          (R.gzhead.text ? 1 : 0) + (R.gzhead.hcrc ? 2 : 0) + (R.gzhead.extra ? 4 : 0) + (R.gzhead.name ? 8 : 0) + (R.gzhead.comment ? 16 : 0)
        ), Ce(R, R.gzhead.time & 255), Ce(R, R.gzhead.time >> 8 & 255), Ce(R, R.gzhead.time >> 16 & 255), Ce(R, R.gzhead.time >> 24 & 255), Ce(R, R.level === 9 ? 2 : R.strategy >= w || R.level < 2 ? 4 : 0), Ce(R, R.gzhead.os & 255), R.gzhead.extra && R.gzhead.extra.length && (Ce(R, R.gzhead.extra.length & 255), Ce(R, R.gzhead.extra.length >> 8 & 255)), R.gzhead.hcrc && (_.adler = a(_.adler, R.pending_buf, R.pending, 0)), R.gzindex = 0, R.status = ke) : (Ce(R, 0), Ce(R, 0), Ce(R, 0), Ce(R, 0), Ce(R, 0), Ce(R, R.level === 9 ? 2 : R.strategy >= w || R.level < 2 ? 4 : 0), Ce(R, ue), R.status = U);
      else {
        var Ye = S + (R.w_bits - 8 << 4) << 8, Ue = -1;
        R.strategy >= w || R.level < 2 ? Ue = 0 : R.level < 6 ? Ue = 1 : R.level === 6 ? Ue = 2 : Ue = 3, Ye |= Ue << 6, R.strstart !== 0 && (Ye |= ee), Ye += 31 - Ye % 31, R.status = U, se(R, Ye), R.strstart !== 0 && (se(R, _.adler >>> 16), se(R, _.adler & 65535)), _.adler = 1;
      }
    if (R.status === ke)
      if (R.gzhead.extra) {
        for (K = R.pending; R.gzindex < (R.gzhead.extra.length & 65535) && !(R.pending === R.pending_buf_size && (R.gzhead.hcrc && R.pending > K && (_.adler = a(_.adler, R.pending_buf, R.pending - K, K)), Ie(_), K = R.pending, R.pending === R.pending_buf_size)); )
          Ce(R, R.gzhead.extra[R.gzindex] & 255), R.gzindex++;
        R.gzhead.hcrc && R.pending > K && (_.adler = a(_.adler, R.pending_buf, R.pending - K, K)), R.gzindex === R.gzhead.extra.length && (R.gzindex = 0, R.status = ve);
      } else
        R.status = ve;
    if (R.status === ve)
      if (R.gzhead.name) {
        K = R.pending;
        do {
          if (R.pending === R.pending_buf_size && (R.gzhead.hcrc && R.pending > K && (_.adler = a(_.adler, R.pending_buf, R.pending - K, K)), Ie(_), K = R.pending, R.pending === R.pending_buf_size)) {
            _e = 1;
            break;
          }
          R.gzindex < R.gzhead.name.length ? _e = R.gzhead.name.charCodeAt(R.gzindex++) & 255 : _e = 0, Ce(R, _e);
        } while (_e !== 0);
        R.gzhead.hcrc && R.pending > K && (_.adler = a(_.adler, R.pending_buf, R.pending - K, K)), _e === 0 && (R.gzindex = 0, R.status = H);
      } else
        R.status = H;
    if (R.status === H)
      if (R.gzhead.comment) {
        K = R.pending;
        do {
          if (R.pending === R.pending_buf_size && (R.gzhead.hcrc && R.pending > K && (_.adler = a(_.adler, R.pending_buf, R.pending - K, K)), Ie(_), K = R.pending, R.pending === R.pending_buf_size)) {
            _e = 1;
            break;
          }
          R.gzindex < R.gzhead.comment.length ? _e = R.gzhead.comment.charCodeAt(R.gzindex++) & 255 : _e = 0, Ce(R, _e);
        } while (_e !== 0);
        R.gzhead.hcrc && R.pending > K && (_.adler = a(_.adler, R.pending_buf, R.pending - K, K)), _e === 0 && (R.status = W);
      } else
        R.status = W;
    if (R.status === W && (R.gzhead.hcrc ? (R.pending + 2 > R.pending_buf_size && Ie(_), R.pending + 2 <= R.pending_buf_size && (Ce(R, _.adler & 255), Ce(R, _.adler >> 8 & 255), _.adler = 0, R.status = U)) : R.status = U), R.pending !== 0) {
      if (Ie(_), _.avail_out === 0)
        return R.last_flush = -1, u;
    } else if (_.avail_in === 0 && ye(te) <= ye(fe) && te !== l)
      return ce(_, g);
    if (R.status === re && _.avail_in !== 0)
      return ce(_, g);
    if (_.avail_in !== 0 || R.lookahead !== 0 || te !== o && R.status !== re) {
      var je = R.strategy === w ? Ge(R, te) : R.strategy === v ? Ne(R, te) : Oe[R.level].func(R, te);
      if ((je === Ae || je === he) && (R.status = re), je === ae || je === Ae)
        return _.avail_out === 0 && (R.last_flush = -1), u;
      if (je === we && (te === n ? t._tr_align(R) : te !== h && (t._tr_stored_block(R, 0, 0, !1), te === s && (Se(R.head), R.lookahead === 0 && (R.strstart = 0, R.block_start = 0, R.insert = 0))), Ie(_), _.avail_out === 0))
        return R.last_flush = -1, u;
    }
    return te !== l ? u : R.wrap <= 0 ? d : (R.wrap === 2 ? (Ce(R, _.adler & 255), Ce(R, _.adler >> 8 & 255), Ce(R, _.adler >> 16 & 255), Ce(R, _.adler >> 24 & 255), Ce(R, _.total_in & 255), Ce(R, _.total_in >> 8 & 255), Ce(R, _.total_in >> 16 & 255), Ce(R, _.total_in >> 24 & 255)) : (se(R, _.adler >>> 16), se(R, _.adler & 65535)), Ie(_), R.wrap > 0 && (R.wrap = -R.wrap), R.pending !== 0 ? u : d);
  }
  function me(_) {
    var te;
    return !_ || !_.state ? m : (te = _.state.status, te !== xe && te !== ke && te !== ve && te !== H && te !== W && te !== U && te !== re ? ce(_, m) : (_.state = null, te === U ? ce(_, p) : u));
  }
  function qe(_, te) {
    var fe = te.length, R, K, _e, Ye, Ue, je, tt, mt;
    if (!_ || !_.state || (R = _.state, Ye = R.wrap, Ye === 2 || Ye === 1 && R.status !== xe || R.lookahead))
      return m;
    for (Ye === 1 && (_.adler = i(_.adler, te, fe, 0)), R.wrap = 0, fe >= R.w_size && (Ye === 0 && (Se(R.head), R.strstart = 0, R.block_start = 0, R.insert = 0), mt = new e.Buf8(R.w_size), e.arraySet(mt, te, fe - R.w_size, R.w_size, 0), te = mt, fe = R.w_size), Ue = _.avail_in, je = _.next_in, tt = _.input, _.avail_in = fe, _.next_in = 0, _.input = te, Te(R); R.lookahead >= ie; ) {
      K = R.strstart, _e = R.lookahead - (ie - 1);
      do
        R.ins_h = (R.ins_h << R.hash_shift ^ R.window[K + ie - 1]) & R.hash_mask, R.prev[K & R.w_mask] = R.head[R.ins_h], R.head[R.ins_h] = K, K++;
      while (--_e);
      R.strstart = K, R.lookahead = ie - 1, Te(R);
    }
    return R.strstart += R.lookahead, R.block_start = R.strstart, R.insert = R.lookahead, R.lookahead = 0, R.match_length = R.prev_length = ie - 1, R.match_available = 0, _.next_in = je, _.input = tt, _.avail_in = Ue, R.wrap = Ye, u;
  }
  return deflate.deflateInit = pe, deflate.deflateInit2 = $, deflate.deflateReset = oe, deflate.deflateResetKeep = ge, deflate.deflateSetHeader = be, deflate.deflate = I, deflate.deflateEnd = me, deflate.deflateSetDictionary = qe, deflate.deflateInfo = "pako deflate (from Nodeca project)", deflate;
}
var strings = {}, hasRequiredStrings;
function requireStrings() {
  if (hasRequiredStrings) return strings;
  hasRequiredStrings = 1;
  var e = requireCommon(), t = !0, i = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch {
    t = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    i = !1;
  }
  for (var a = new e.Buf8(256), r = 0; r < 256; r++)
    a[r] = r >= 252 ? 6 : r >= 248 ? 5 : r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
  a[254] = a[254] = 1, strings.string2buf = function(n) {
    var s, l, h, u, d, m = n.length, p = 0;
    for (u = 0; u < m; u++)
      l = n.charCodeAt(u), (l & 64512) === 55296 && u + 1 < m && (h = n.charCodeAt(u + 1), (h & 64512) === 56320 && (l = 65536 + (l - 55296 << 10) + (h - 56320), u++)), p += l < 128 ? 1 : l < 2048 ? 2 : l < 65536 ? 3 : 4;
    for (s = new e.Buf8(p), d = 0, u = 0; d < p; u++)
      l = n.charCodeAt(u), (l & 64512) === 55296 && u + 1 < m && (h = n.charCodeAt(u + 1), (h & 64512) === 56320 && (l = 65536 + (l - 55296 << 10) + (h - 56320), u++)), l < 128 ? s[d++] = l : l < 2048 ? (s[d++] = 192 | l >>> 6, s[d++] = 128 | l & 63) : l < 65536 ? (s[d++] = 224 | l >>> 12, s[d++] = 128 | l >>> 6 & 63, s[d++] = 128 | l & 63) : (s[d++] = 240 | l >>> 18, s[d++] = 128 | l >>> 12 & 63, s[d++] = 128 | l >>> 6 & 63, s[d++] = 128 | l & 63);
    return s;
  };
  function o(n, s) {
    if (s < 65534 && (n.subarray && i || !n.subarray && t))
      return String.fromCharCode.apply(null, e.shrinkBuf(n, s));
    for (var l = "", h = 0; h < s; h++)
      l += String.fromCharCode(n[h]);
    return l;
  }
  return strings.buf2binstring = function(n) {
    return o(n, n.length);
  }, strings.binstring2buf = function(n) {
    for (var s = new e.Buf8(n.length), l = 0, h = s.length; l < h; l++)
      s[l] = n.charCodeAt(l);
    return s;
  }, strings.buf2string = function(n, s) {
    var l, h, u, d, m = s || n.length, p = new Array(m * 2);
    for (h = 0, l = 0; l < m; ) {
      if (u = n[l++], u < 128) {
        p[h++] = u;
        continue;
      }
      if (d = a[u], d > 4) {
        p[h++] = 65533, l += d - 1;
        continue;
      }
      for (u &= d === 2 ? 31 : d === 3 ? 15 : 7; d > 1 && l < m; )
        u = u << 6 | n[l++] & 63, d--;
      if (d > 1) {
        p[h++] = 65533;
        continue;
      }
      u < 65536 ? p[h++] = u : (u -= 65536, p[h++] = 55296 | u >> 10 & 1023, p[h++] = 56320 | u & 1023);
    }
    return o(p, h);
  }, strings.utf8border = function(n, s) {
    var l;
    for (s = s || n.length, s > n.length && (s = n.length), l = s - 1; l >= 0 && (n[l] & 192) === 128; )
      l--;
    return l < 0 || l === 0 ? s : l + a[n[l]] > s ? l : s;
  }, strings;
}
var zstream, hasRequiredZstream;
function requireZstream() {
  if (hasRequiredZstream) return zstream;
  hasRequiredZstream = 1;
  function e() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  return zstream = e, zstream;
}
var hasRequiredDeflate;
function requireDeflate() {
  if (hasRequiredDeflate) return deflate$1;
  hasRequiredDeflate = 1;
  var e = requireDeflate$1(), t = requireCommon(), i = requireStrings(), a = requireMessages(), r = requireZstream(), o = Object.prototype.toString, n = 0, s = 4, l = 0, h = 1, u = 2, d = -1, m = 0, p = 8;
  function g(v) {
    if (!(this instanceof g)) return new g(v);
    this.options = t.assign({
      level: d,
      method: p,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: m,
      to: ""
    }, v || {});
    var C = this.options;
    C.raw && C.windowBits > 0 ? C.windowBits = -C.windowBits : C.gzip && C.windowBits > 0 && C.windowBits < 16 && (C.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new r(), this.strm.avail_out = 0;
    var B = e.deflateInit2(
      this.strm,
      C.level,
      C.method,
      C.windowBits,
      C.memLevel,
      C.strategy
    );
    if (B !== l)
      throw new Error(a[B]);
    if (C.header && e.deflateSetHeader(this.strm, C.header), C.dictionary) {
      var A;
      if (typeof C.dictionary == "string" ? A = i.string2buf(C.dictionary) : o.call(C.dictionary) === "[object ArrayBuffer]" ? A = new Uint8Array(C.dictionary) : A = C.dictionary, B = e.deflateSetDictionary(this.strm, A), B !== l)
        throw new Error(a[B]);
      this._dict_set = !0;
    }
  }
  g.prototype.push = function(v, C) {
    var B = this.strm, A = this.options.chunkSize, S, b;
    if (this.ended)
      return !1;
    b = C === ~~C ? C : C === !0 ? s : n, typeof v == "string" ? B.input = i.string2buf(v) : o.call(v) === "[object ArrayBuffer]" ? B.input = new Uint8Array(v) : B.input = v, B.next_in = 0, B.avail_in = B.input.length;
    do {
      if (B.avail_out === 0 && (B.output = new t.Buf8(A), B.next_out = 0, B.avail_out = A), S = e.deflate(B, b), S !== h && S !== l)
        return this.onEnd(S), this.ended = !0, !1;
      (B.avail_out === 0 || B.avail_in === 0 && (b === s || b === u)) && (this.options.to === "string" ? this.onData(i.buf2binstring(t.shrinkBuf(B.output, B.next_out))) : this.onData(t.shrinkBuf(B.output, B.next_out)));
    } while ((B.avail_in > 0 || B.avail_out === 0) && S !== h);
    return b === s ? (S = e.deflateEnd(this.strm), this.onEnd(S), this.ended = !0, S === l) : (b === u && (this.onEnd(l), B.avail_out = 0), !0);
  }, g.prototype.onData = function(v) {
    this.chunks.push(v);
  }, g.prototype.onEnd = function(v) {
    v === l && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = t.flattenChunks(this.chunks)), this.chunks = [], this.err = v, this.msg = this.strm.msg;
  };
  function M(v, C) {
    var B = new g(C);
    if (B.push(v, !0), B.err)
      throw B.msg || a[B.err];
    return B.result;
  }
  function k(v, C) {
    return C = C || {}, C.raw = !0, M(v, C);
  }
  function w(v, C) {
    return C = C || {}, C.gzip = !0, M(v, C);
  }
  return deflate$1.Deflate = g, deflate$1.deflate = M, deflate$1.deflateRaw = k, deflate$1.gzip = w, deflate$1;
}
var inflate$1 = {}, inflate = {}, inffast, hasRequiredInffast;
function requireInffast() {
  if (hasRequiredInffast) return inffast;
  hasRequiredInffast = 1;
  var e = 30, t = 12;
  return inffast = function(a, r) {
    var o, n, s, l, h, u, d, m, p, g, M, k, w, v, C, B, A, S, b, E, F, Z, P, D, L;
    o = a.state, n = a.next_in, D = a.input, s = n + (a.avail_in - 5), l = a.next_out, L = a.output, h = l - (r - a.avail_out), u = l + (a.avail_out - 257), d = o.dmax, m = o.wsize, p = o.whave, g = o.wnext, M = o.window, k = o.hold, w = o.bits, v = o.lencode, C = o.distcode, B = (1 << o.lenbits) - 1, A = (1 << o.distbits) - 1;
    e:
      do {
        w < 15 && (k += D[n++] << w, w += 8, k += D[n++] << w, w += 8), S = v[k & B];
        t:
          for (; ; ) {
            if (b = S >>> 24, k >>>= b, w -= b, b = S >>> 16 & 255, b === 0)
              L[l++] = S & 65535;
            else if (b & 16) {
              E = S & 65535, b &= 15, b && (w < b && (k += D[n++] << w, w += 8), E += k & (1 << b) - 1, k >>>= b, w -= b), w < 15 && (k += D[n++] << w, w += 8, k += D[n++] << w, w += 8), S = C[k & A];
              i:
                for (; ; ) {
                  if (b = S >>> 24, k >>>= b, w -= b, b = S >>> 16 & 255, b & 16) {
                    if (F = S & 65535, b &= 15, w < b && (k += D[n++] << w, w += 8, w < b && (k += D[n++] << w, w += 8)), F += k & (1 << b) - 1, F > d) {
                      a.msg = "invalid distance too far back", o.mode = e;
                      break e;
                    }
                    if (k >>>= b, w -= b, b = l - h, F > b) {
                      if (b = F - b, b > p && o.sane) {
                        a.msg = "invalid distance too far back", o.mode = e;
                        break e;
                      }
                      if (Z = 0, P = M, g === 0) {
                        if (Z += m - b, b < E) {
                          E -= b;
                          do
                            L[l++] = M[Z++];
                          while (--b);
                          Z = l - F, P = L;
                        }
                      } else if (g < b) {
                        if (Z += m + g - b, b -= g, b < E) {
                          E -= b;
                          do
                            L[l++] = M[Z++];
                          while (--b);
                          if (Z = 0, g < E) {
                            b = g, E -= b;
                            do
                              L[l++] = M[Z++];
                            while (--b);
                            Z = l - F, P = L;
                          }
                        }
                      } else if (Z += g - b, b < E) {
                        E -= b;
                        do
                          L[l++] = M[Z++];
                        while (--b);
                        Z = l - F, P = L;
                      }
                      for (; E > 2; )
                        L[l++] = P[Z++], L[l++] = P[Z++], L[l++] = P[Z++], E -= 3;
                      E && (L[l++] = P[Z++], E > 1 && (L[l++] = P[Z++]));
                    } else {
                      Z = l - F;
                      do
                        L[l++] = L[Z++], L[l++] = L[Z++], L[l++] = L[Z++], E -= 3;
                      while (E > 2);
                      E && (L[l++] = L[Z++], E > 1 && (L[l++] = L[Z++]));
                    }
                  } else if ((b & 64) === 0) {
                    S = C[(S & 65535) + (k & (1 << b) - 1)];
                    continue i;
                  } else {
                    a.msg = "invalid distance code", o.mode = e;
                    break e;
                  }
                  break;
                }
            } else if ((b & 64) === 0) {
              S = v[(S & 65535) + (k & (1 << b) - 1)];
              continue t;
            } else if (b & 32) {
              o.mode = t;
              break e;
            } else {
              a.msg = "invalid literal/length code", o.mode = e;
              break e;
            }
            break;
          }
      } while (n < s && l < u);
    E = w >> 3, n -= E, w -= E << 3, k &= (1 << w) - 1, a.next_in = n, a.next_out = l, a.avail_in = n < s ? 5 + (s - n) : 5 - (n - s), a.avail_out = l < u ? 257 + (u - l) : 257 - (l - u), o.hold = k, o.bits = w;
  }, inffast;
}
var inftrees, hasRequiredInftrees;
function requireInftrees() {
  if (hasRequiredInftrees) return inftrees;
  hasRequiredInftrees = 1;
  var e = requireCommon(), t = 15, i = 852, a = 592, r = 0, o = 1, n = 2, s = [
    /* Length codes 257..285 base */
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ], l = [
    /* Length codes 257..285 extra */
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
  ], h = [
    /* Distance codes 0..29 base */
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
  ], u = [
    /* Distance codes 0..29 extra */
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
  ];
  return inftrees = function(m, p, g, M, k, w, v, C) {
    var B = C.bits, A = 0, S = 0, b = 0, E = 0, F = 0, Z = 0, P = 0, D = 0, L = 0, q = 0, j, J, ie, V, Q, ee = null, xe = 0, ke, ve = new e.Buf16(t + 1), H = new e.Buf16(t + 1), W = null, U = 0, re, ae, we;
    for (A = 0; A <= t; A++)
      ve[A] = 0;
    for (S = 0; S < M; S++)
      ve[p[g + S]]++;
    for (F = B, E = t; E >= 1 && ve[E] === 0; E--)
      ;
    if (F > E && (F = E), E === 0)
      return k[w++] = 1 << 24 | 64 << 16 | 0, k[w++] = 1 << 24 | 64 << 16 | 0, C.bits = 1, 0;
    for (b = 1; b < E && ve[b] === 0; b++)
      ;
    for (F < b && (F = b), D = 1, A = 1; A <= t; A++)
      if (D <<= 1, D -= ve[A], D < 0)
        return -1;
    if (D > 0 && (m === r || E !== 1))
      return -1;
    for (H[1] = 0, A = 1; A < t; A++)
      H[A + 1] = H[A] + ve[A];
    for (S = 0; S < M; S++)
      p[g + S] !== 0 && (v[H[p[g + S]]++] = S);
    if (m === r ? (ee = W = v, ke = 19) : m === o ? (ee = s, xe -= 257, W = l, U -= 257, ke = 256) : (ee = h, W = u, ke = -1), q = 0, S = 0, A = b, Q = w, Z = F, P = 0, ie = -1, L = 1 << F, V = L - 1, m === o && L > i || m === n && L > a)
      return 1;
    for (; ; ) {
      re = A - P, v[S] < ke ? (ae = 0, we = v[S]) : v[S] > ke ? (ae = W[U + v[S]], we = ee[xe + v[S]]) : (ae = 96, we = 0), j = 1 << A - P, J = 1 << Z, b = J;
      do
        J -= j, k[Q + (q >> P) + J] = re << 24 | ae << 16 | we | 0;
      while (J !== 0);
      for (j = 1 << A - 1; q & j; )
        j >>= 1;
      if (j !== 0 ? (q &= j - 1, q += j) : q = 0, S++, --ve[A] === 0) {
        if (A === E)
          break;
        A = p[g + v[S]];
      }
      if (A > F && (q & V) !== ie) {
        for (P === 0 && (P = F), Q += b, Z = A - P, D = 1 << Z; Z + P < E && (D -= ve[Z + P], !(D <= 0)); )
          Z++, D <<= 1;
        if (L += 1 << Z, m === o && L > i || m === n && L > a)
          return 1;
        ie = q & V, k[ie] = F << 24 | Z << 16 | Q - w | 0;
      }
    }
    return q !== 0 && (k[Q + q] = A - P << 24 | 64 << 16 | 0), C.bits = F, 0;
  }, inftrees;
}
var hasRequiredInflate$1;
function requireInflate$1() {
  if (hasRequiredInflate$1) return inflate;
  hasRequiredInflate$1 = 1;
  var e = requireCommon(), t = requireAdler32(), i = requireCrc32(), a = requireInffast(), r = requireInftrees(), o = 0, n = 1, s = 2, l = 4, h = 5, u = 6, d = 0, m = 1, p = 2, g = -2, M = -3, k = -4, w = -5, v = 8, C = 1, B = 2, A = 3, S = 4, b = 5, E = 6, F = 7, Z = 8, P = 9, D = 10, L = 11, q = 12, j = 13, J = 14, ie = 15, V = 16, Q = 17, ee = 18, xe = 19, ke = 20, ve = 21, H = 22, W = 23, U = 24, re = 25, ae = 26, we = 27, Ae = 28, he = 29, ue = 30, ce = 31, ye = 32, Se = 852, Ie = 592, Be = 15, Ce = Be;
  function se($) {
    return ($ >>> 24 & 255) + ($ >>> 8 & 65280) + (($ & 65280) << 8) + (($ & 255) << 24);
  }
  function Fe() {
    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new e.Buf16(320), this.work = new e.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  function Pe($) {
    var pe;
    return !$ || !$.state ? g : (pe = $.state, $.total_in = $.total_out = pe.total = 0, $.msg = "", pe.wrap && ($.adler = pe.wrap & 1), pe.mode = C, pe.last = 0, pe.havedict = 0, pe.dmax = 32768, pe.head = null, pe.hold = 0, pe.bits = 0, pe.lencode = pe.lendyn = new e.Buf32(Se), pe.distcode = pe.distdyn = new e.Buf32(Ie), pe.sane = 1, pe.back = -1, d);
  }
  function Te($) {
    var pe;
    return !$ || !$.state ? g : (pe = $.state, pe.wsize = 0, pe.whave = 0, pe.wnext = 0, Pe($));
  }
  function ze($, pe) {
    var I, me;
    return !$ || !$.state || (me = $.state, pe < 0 ? (I = 0, pe = -pe) : (I = (pe >> 4) + 1, pe < 48 && (pe &= 15)), pe && (pe < 8 || pe > 15)) ? g : (me.window !== null && me.wbits !== pe && (me.window = null), me.wrap = I, me.wbits = pe, Te($));
  }
  function We($, pe) {
    var I, me;
    return $ ? (me = new Fe(), $.state = me, me.window = null, I = ze($, pe), I !== d && ($.state = null), I) : g;
  }
  function He($) {
    return We($, Ce);
  }
  var Ne = !0, Ge, Le;
  function Oe($) {
    if (Ne) {
      var pe;
      for (Ge = new e.Buf32(512), Le = new e.Buf32(32), pe = 0; pe < 144; )
        $.lens[pe++] = 8;
      for (; pe < 256; )
        $.lens[pe++] = 9;
      for (; pe < 280; )
        $.lens[pe++] = 7;
      for (; pe < 288; )
        $.lens[pe++] = 8;
      for (r(n, $.lens, 0, 288, Ge, 0, $.work, { bits: 9 }), pe = 0; pe < 32; )
        $.lens[pe++] = 5;
      r(s, $.lens, 0, 32, Le, 0, $.work, { bits: 5 }), Ne = !1;
    }
    $.lencode = Ge, $.lenbits = 9, $.distcode = Le, $.distbits = 5;
  }
  function Ke($, pe, I, me) {
    var qe, _ = $.state;
    return _.window === null && (_.wsize = 1 << _.wbits, _.wnext = 0, _.whave = 0, _.window = new e.Buf8(_.wsize)), me >= _.wsize ? (e.arraySet(_.window, pe, I - _.wsize, _.wsize, 0), _.wnext = 0, _.whave = _.wsize) : (qe = _.wsize - _.wnext, qe > me && (qe = me), e.arraySet(_.window, pe, I - me, qe, _.wnext), me -= qe, me ? (e.arraySet(_.window, pe, I - me, me, 0), _.wnext = me, _.whave = _.wsize) : (_.wnext += qe, _.wnext === _.wsize && (_.wnext = 0), _.whave < _.wsize && (_.whave += qe))), 0;
  }
  function O($, pe) {
    var I, me, qe, _, te, fe, R, K, _e, Ye, Ue, je, tt, mt, st = 0, rt, Ve, ht, pt, xt, vt, ct, ft, dt = new e.Buf8(4), ot, ut, yt = (
      /* permutation of code lengths */
      [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
    );
    if (!$ || !$.state || !$.output || !$.input && $.avail_in !== 0)
      return g;
    I = $.state, I.mode === q && (I.mode = j), te = $.next_out, qe = $.output, R = $.avail_out, _ = $.next_in, me = $.input, fe = $.avail_in, K = I.hold, _e = I.bits, Ye = fe, Ue = R, ft = d;
    e:
      for (; ; )
        switch (I.mode) {
          case C:
            if (I.wrap === 0) {
              I.mode = j;
              break;
            }
            for (; _e < 16; ) {
              if (fe === 0)
                break e;
              fe--, K += me[_++] << _e, _e += 8;
            }
            if (I.wrap & 2 && K === 35615) {
              I.check = 0, dt[0] = K & 255, dt[1] = K >>> 8 & 255, I.check = i(I.check, dt, 2, 0), K = 0, _e = 0, I.mode = B;
              break;
            }
            if (I.flags = 0, I.head && (I.head.done = !1), !(I.wrap & 1) || /* check if zlib header allowed */
            (((K & 255) << 8) + (K >> 8)) % 31) {
              $.msg = "incorrect header check", I.mode = ue;
              break;
            }
            if ((K & 15) !== v) {
              $.msg = "unknown compression method", I.mode = ue;
              break;
            }
            if (K >>>= 4, _e -= 4, ct = (K & 15) + 8, I.wbits === 0)
              I.wbits = ct;
            else if (ct > I.wbits) {
              $.msg = "invalid window size", I.mode = ue;
              break;
            }
            I.dmax = 1 << ct, $.adler = I.check = 1, I.mode = K & 512 ? D : q, K = 0, _e = 0;
            break;
          case B:
            for (; _e < 16; ) {
              if (fe === 0)
                break e;
              fe--, K += me[_++] << _e, _e += 8;
            }
            if (I.flags = K, (I.flags & 255) !== v) {
              $.msg = "unknown compression method", I.mode = ue;
              break;
            }
            if (I.flags & 57344) {
              $.msg = "unknown header flags set", I.mode = ue;
              break;
            }
            I.head && (I.head.text = K >> 8 & 1), I.flags & 512 && (dt[0] = K & 255, dt[1] = K >>> 8 & 255, I.check = i(I.check, dt, 2, 0)), K = 0, _e = 0, I.mode = A;
          /* falls through */
          case A:
            for (; _e < 32; ) {
              if (fe === 0)
                break e;
              fe--, K += me[_++] << _e, _e += 8;
            }
            I.head && (I.head.time = K), I.flags & 512 && (dt[0] = K & 255, dt[1] = K >>> 8 & 255, dt[2] = K >>> 16 & 255, dt[3] = K >>> 24 & 255, I.check = i(I.check, dt, 4, 0)), K = 0, _e = 0, I.mode = S;
          /* falls through */
          case S:
            for (; _e < 16; ) {
              if (fe === 0)
                break e;
              fe--, K += me[_++] << _e, _e += 8;
            }
            I.head && (I.head.xflags = K & 255, I.head.os = K >> 8), I.flags & 512 && (dt[0] = K & 255, dt[1] = K >>> 8 & 255, I.check = i(I.check, dt, 2, 0)), K = 0, _e = 0, I.mode = b;
          /* falls through */
          case b:
            if (I.flags & 1024) {
              for (; _e < 16; ) {
                if (fe === 0)
                  break e;
                fe--, K += me[_++] << _e, _e += 8;
              }
              I.length = K, I.head && (I.head.extra_len = K), I.flags & 512 && (dt[0] = K & 255, dt[1] = K >>> 8 & 255, I.check = i(I.check, dt, 2, 0)), K = 0, _e = 0;
            } else I.head && (I.head.extra = null);
            I.mode = E;
          /* falls through */
          case E:
            if (I.flags & 1024 && (je = I.length, je > fe && (je = fe), je && (I.head && (ct = I.head.extra_len - I.length, I.head.extra || (I.head.extra = new Array(I.head.extra_len)), e.arraySet(
              I.head.extra,
              me,
              _,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              je,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              ct
            )), I.flags & 512 && (I.check = i(I.check, me, je, _)), fe -= je, _ += je, I.length -= je), I.length))
              break e;
            I.length = 0, I.mode = F;
          /* falls through */
          case F:
            if (I.flags & 2048) {
              if (fe === 0)
                break e;
              je = 0;
              do
                ct = me[_ + je++], I.head && ct && I.length < 65536 && (I.head.name += String.fromCharCode(ct));
              while (ct && je < fe);
              if (I.flags & 512 && (I.check = i(I.check, me, je, _)), fe -= je, _ += je, ct)
                break e;
            } else I.head && (I.head.name = null);
            I.length = 0, I.mode = Z;
          /* falls through */
          case Z:
            if (I.flags & 4096) {
              if (fe === 0)
                break e;
              je = 0;
              do
                ct = me[_ + je++], I.head && ct && I.length < 65536 && (I.head.comment += String.fromCharCode(ct));
              while (ct && je < fe);
              if (I.flags & 512 && (I.check = i(I.check, me, je, _)), fe -= je, _ += je, ct)
                break e;
            } else I.head && (I.head.comment = null);
            I.mode = P;
          /* falls through */
          case P:
            if (I.flags & 512) {
              for (; _e < 16; ) {
                if (fe === 0)
                  break e;
                fe--, K += me[_++] << _e, _e += 8;
              }
              if (K !== (I.check & 65535)) {
                $.msg = "header crc mismatch", I.mode = ue;
                break;
              }
              K = 0, _e = 0;
            }
            I.head && (I.head.hcrc = I.flags >> 9 & 1, I.head.done = !0), $.adler = I.check = 0, I.mode = q;
            break;
          case D:
            for (; _e < 32; ) {
              if (fe === 0)
                break e;
              fe--, K += me[_++] << _e, _e += 8;
            }
            $.adler = I.check = se(K), K = 0, _e = 0, I.mode = L;
          /* falls through */
          case L:
            if (I.havedict === 0)
              return $.next_out = te, $.avail_out = R, $.next_in = _, $.avail_in = fe, I.hold = K, I.bits = _e, p;
            $.adler = I.check = 1, I.mode = q;
          /* falls through */
          case q:
            if (pe === h || pe === u)
              break e;
          /* falls through */
          case j:
            if (I.last) {
              K >>>= _e & 7, _e -= _e & 7, I.mode = we;
              break;
            }
            for (; _e < 3; ) {
              if (fe === 0)
                break e;
              fe--, K += me[_++] << _e, _e += 8;
            }
            switch (I.last = K & 1, K >>>= 1, _e -= 1, K & 3) {
              case 0:
                I.mode = J;
                break;
              case 1:
                if (Oe(I), I.mode = ke, pe === u) {
                  K >>>= 2, _e -= 2;
                  break e;
                }
                break;
              case 2:
                I.mode = Q;
                break;
              case 3:
                $.msg = "invalid block type", I.mode = ue;
            }
            K >>>= 2, _e -= 2;
            break;
          case J:
            for (K >>>= _e & 7, _e -= _e & 7; _e < 32; ) {
              if (fe === 0)
                break e;
              fe--, K += me[_++] << _e, _e += 8;
            }
            if ((K & 65535) !== (K >>> 16 ^ 65535)) {
              $.msg = "invalid stored block lengths", I.mode = ue;
              break;
            }
            if (I.length = K & 65535, K = 0, _e = 0, I.mode = ie, pe === u)
              break e;
          /* falls through */
          case ie:
            I.mode = V;
          /* falls through */
          case V:
            if (je = I.length, je) {
              if (je > fe && (je = fe), je > R && (je = R), je === 0)
                break e;
              e.arraySet(qe, me, _, je, te), fe -= je, _ += je, R -= je, te += je, I.length -= je;
              break;
            }
            I.mode = q;
            break;
          case Q:
            for (; _e < 14; ) {
              if (fe === 0)
                break e;
              fe--, K += me[_++] << _e, _e += 8;
            }
            if (I.nlen = (K & 31) + 257, K >>>= 5, _e -= 5, I.ndist = (K & 31) + 1, K >>>= 5, _e -= 5, I.ncode = (K & 15) + 4, K >>>= 4, _e -= 4, I.nlen > 286 || I.ndist > 30) {
              $.msg = "too many length or distance symbols", I.mode = ue;
              break;
            }
            I.have = 0, I.mode = ee;
          /* falls through */
          case ee:
            for (; I.have < I.ncode; ) {
              for (; _e < 3; ) {
                if (fe === 0)
                  break e;
                fe--, K += me[_++] << _e, _e += 8;
              }
              I.lens[yt[I.have++]] = K & 7, K >>>= 3, _e -= 3;
            }
            for (; I.have < 19; )
              I.lens[yt[I.have++]] = 0;
            if (I.lencode = I.lendyn, I.lenbits = 7, ot = { bits: I.lenbits }, ft = r(o, I.lens, 0, 19, I.lencode, 0, I.work, ot), I.lenbits = ot.bits, ft) {
              $.msg = "invalid code lengths set", I.mode = ue;
              break;
            }
            I.have = 0, I.mode = xe;
          /* falls through */
          case xe:
            for (; I.have < I.nlen + I.ndist; ) {
              for (; st = I.lencode[K & (1 << I.lenbits) - 1], rt = st >>> 24, Ve = st >>> 16 & 255, ht = st & 65535, !(rt <= _e); ) {
                if (fe === 0)
                  break e;
                fe--, K += me[_++] << _e, _e += 8;
              }
              if (ht < 16)
                K >>>= rt, _e -= rt, I.lens[I.have++] = ht;
              else {
                if (ht === 16) {
                  for (ut = rt + 2; _e < ut; ) {
                    if (fe === 0)
                      break e;
                    fe--, K += me[_++] << _e, _e += 8;
                  }
                  if (K >>>= rt, _e -= rt, I.have === 0) {
                    $.msg = "invalid bit length repeat", I.mode = ue;
                    break;
                  }
                  ct = I.lens[I.have - 1], je = 3 + (K & 3), K >>>= 2, _e -= 2;
                } else if (ht === 17) {
                  for (ut = rt + 3; _e < ut; ) {
                    if (fe === 0)
                      break e;
                    fe--, K += me[_++] << _e, _e += 8;
                  }
                  K >>>= rt, _e -= rt, ct = 0, je = 3 + (K & 7), K >>>= 3, _e -= 3;
                } else {
                  for (ut = rt + 7; _e < ut; ) {
                    if (fe === 0)
                      break e;
                    fe--, K += me[_++] << _e, _e += 8;
                  }
                  K >>>= rt, _e -= rt, ct = 0, je = 11 + (K & 127), K >>>= 7, _e -= 7;
                }
                if (I.have + je > I.nlen + I.ndist) {
                  $.msg = "invalid bit length repeat", I.mode = ue;
                  break;
                }
                for (; je--; )
                  I.lens[I.have++] = ct;
              }
            }
            if (I.mode === ue)
              break;
            if (I.lens[256] === 0) {
              $.msg = "invalid code -- missing end-of-block", I.mode = ue;
              break;
            }
            if (I.lenbits = 9, ot = { bits: I.lenbits }, ft = r(n, I.lens, 0, I.nlen, I.lencode, 0, I.work, ot), I.lenbits = ot.bits, ft) {
              $.msg = "invalid literal/lengths set", I.mode = ue;
              break;
            }
            if (I.distbits = 6, I.distcode = I.distdyn, ot = { bits: I.distbits }, ft = r(s, I.lens, I.nlen, I.ndist, I.distcode, 0, I.work, ot), I.distbits = ot.bits, ft) {
              $.msg = "invalid distances set", I.mode = ue;
              break;
            }
            if (I.mode = ke, pe === u)
              break e;
          /* falls through */
          case ke:
            I.mode = ve;
          /* falls through */
          case ve:
            if (fe >= 6 && R >= 258) {
              $.next_out = te, $.avail_out = R, $.next_in = _, $.avail_in = fe, I.hold = K, I.bits = _e, a($, Ue), te = $.next_out, qe = $.output, R = $.avail_out, _ = $.next_in, me = $.input, fe = $.avail_in, K = I.hold, _e = I.bits, I.mode === q && (I.back = -1);
              break;
            }
            for (I.back = 0; st = I.lencode[K & (1 << I.lenbits) - 1], rt = st >>> 24, Ve = st >>> 16 & 255, ht = st & 65535, !(rt <= _e); ) {
              if (fe === 0)
                break e;
              fe--, K += me[_++] << _e, _e += 8;
            }
            if (Ve && (Ve & 240) === 0) {
              for (pt = rt, xt = Ve, vt = ht; st = I.lencode[vt + ((K & (1 << pt + xt) - 1) >> pt)], rt = st >>> 24, Ve = st >>> 16 & 255, ht = st & 65535, !(pt + rt <= _e); ) {
                if (fe === 0)
                  break e;
                fe--, K += me[_++] << _e, _e += 8;
              }
              K >>>= pt, _e -= pt, I.back += pt;
            }
            if (K >>>= rt, _e -= rt, I.back += rt, I.length = ht, Ve === 0) {
              I.mode = ae;
              break;
            }
            if (Ve & 32) {
              I.back = -1, I.mode = q;
              break;
            }
            if (Ve & 64) {
              $.msg = "invalid literal/length code", I.mode = ue;
              break;
            }
            I.extra = Ve & 15, I.mode = H;
          /* falls through */
          case H:
            if (I.extra) {
              for (ut = I.extra; _e < ut; ) {
                if (fe === 0)
                  break e;
                fe--, K += me[_++] << _e, _e += 8;
              }
              I.length += K & (1 << I.extra) - 1, K >>>= I.extra, _e -= I.extra, I.back += I.extra;
            }
            I.was = I.length, I.mode = W;
          /* falls through */
          case W:
            for (; st = I.distcode[K & (1 << I.distbits) - 1], rt = st >>> 24, Ve = st >>> 16 & 255, ht = st & 65535, !(rt <= _e); ) {
              if (fe === 0)
                break e;
              fe--, K += me[_++] << _e, _e += 8;
            }
            if ((Ve & 240) === 0) {
              for (pt = rt, xt = Ve, vt = ht; st = I.distcode[vt + ((K & (1 << pt + xt) - 1) >> pt)], rt = st >>> 24, Ve = st >>> 16 & 255, ht = st & 65535, !(pt + rt <= _e); ) {
                if (fe === 0)
                  break e;
                fe--, K += me[_++] << _e, _e += 8;
              }
              K >>>= pt, _e -= pt, I.back += pt;
            }
            if (K >>>= rt, _e -= rt, I.back += rt, Ve & 64) {
              $.msg = "invalid distance code", I.mode = ue;
              break;
            }
            I.offset = ht, I.extra = Ve & 15, I.mode = U;
          /* falls through */
          case U:
            if (I.extra) {
              for (ut = I.extra; _e < ut; ) {
                if (fe === 0)
                  break e;
                fe--, K += me[_++] << _e, _e += 8;
              }
              I.offset += K & (1 << I.extra) - 1, K >>>= I.extra, _e -= I.extra, I.back += I.extra;
            }
            if (I.offset > I.dmax) {
              $.msg = "invalid distance too far back", I.mode = ue;
              break;
            }
            I.mode = re;
          /* falls through */
          case re:
            if (R === 0)
              break e;
            if (je = Ue - R, I.offset > je) {
              if (je = I.offset - je, je > I.whave && I.sane) {
                $.msg = "invalid distance too far back", I.mode = ue;
                break;
              }
              je > I.wnext ? (je -= I.wnext, tt = I.wsize - je) : tt = I.wnext - je, je > I.length && (je = I.length), mt = I.window;
            } else
              mt = qe, tt = te - I.offset, je = I.length;
            je > R && (je = R), R -= je, I.length -= je;
            do
              qe[te++] = mt[tt++];
            while (--je);
            I.length === 0 && (I.mode = ve);
            break;
          case ae:
            if (R === 0)
              break e;
            qe[te++] = I.length, R--, I.mode = ve;
            break;
          case we:
            if (I.wrap) {
              for (; _e < 32; ) {
                if (fe === 0)
                  break e;
                fe--, K |= me[_++] << _e, _e += 8;
              }
              if (Ue -= R, $.total_out += Ue, I.total += Ue, Ue && ($.adler = I.check = /*UPDATE(state.check, put - _out, _out);*/
              I.flags ? i(I.check, qe, Ue, te - Ue) : t(I.check, qe, Ue, te - Ue)), Ue = R, (I.flags ? K : se(K)) !== I.check) {
                $.msg = "incorrect data check", I.mode = ue;
                break;
              }
              K = 0, _e = 0;
            }
            I.mode = Ae;
          /* falls through */
          case Ae:
            if (I.wrap && I.flags) {
              for (; _e < 32; ) {
                if (fe === 0)
                  break e;
                fe--, K += me[_++] << _e, _e += 8;
              }
              if (K !== (I.total & 4294967295)) {
                $.msg = "incorrect length check", I.mode = ue;
                break;
              }
              K = 0, _e = 0;
            }
            I.mode = he;
          /* falls through */
          case he:
            ft = m;
            break e;
          case ue:
            ft = M;
            break e;
          case ce:
            return k;
          case ye:
          /* falls through */
          default:
            return g;
        }
    return $.next_out = te, $.avail_out = R, $.next_in = _, $.avail_in = fe, I.hold = K, I.bits = _e, (I.wsize || Ue !== $.avail_out && I.mode < ue && (I.mode < we || pe !== l)) && Ke($, $.output, $.next_out, Ue - $.avail_out), Ye -= $.avail_in, Ue -= $.avail_out, $.total_in += Ye, $.total_out += Ue, I.total += Ue, I.wrap && Ue && ($.adler = I.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
    I.flags ? i(I.check, qe, Ue, $.next_out - Ue) : t(I.check, qe, Ue, $.next_out - Ue)), $.data_type = I.bits + (I.last ? 64 : 0) + (I.mode === q ? 128 : 0) + (I.mode === ke || I.mode === ie ? 256 : 0), (Ye === 0 && Ue === 0 || pe === l) && ft === d && (ft = w), ft;
  }
  function ge($) {
    if (!$ || !$.state)
      return g;
    var pe = $.state;
    return pe.window && (pe.window = null), $.state = null, d;
  }
  function oe($, pe) {
    var I;
    return !$ || !$.state || (I = $.state, (I.wrap & 2) === 0) ? g : (I.head = pe, pe.done = !1, d);
  }
  function be($, pe) {
    var I = pe.length, me, qe, _;
    return !$ || !$.state || (me = $.state, me.wrap !== 0 && me.mode !== L) ? g : me.mode === L && (qe = 1, qe = t(qe, pe, I, 0), qe !== me.check) ? M : (_ = Ke($, pe, I, I), _ ? (me.mode = ce, k) : (me.havedict = 1, d));
  }
  return inflate.inflateReset = Te, inflate.inflateReset2 = ze, inflate.inflateResetKeep = Pe, inflate.inflateInit = He, inflate.inflateInit2 = We, inflate.inflate = O, inflate.inflateEnd = ge, inflate.inflateGetHeader = oe, inflate.inflateSetDictionary = be, inflate.inflateInfo = "pako inflate (from Nodeca project)", inflate;
}
var constants, hasRequiredConstants;
function requireConstants() {
  return hasRequiredConstants || (hasRequiredConstants = 1, constants = {
    /* Allowed flush values; see deflate() and inflate() below for details */
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
    * are errors, positive values are used for special but normal events.
    */
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    //Z_MEM_ERROR:     -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */
    Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */
    Z_DEFLATED: 8
    //Z_NULL:                 null // Use -1 or null inline, depending on var type
  }), constants;
}
var gzheader, hasRequiredGzheader;
function requireGzheader() {
  if (hasRequiredGzheader) return gzheader;
  hasRequiredGzheader = 1;
  function e() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
  }
  return gzheader = e, gzheader;
}
var hasRequiredInflate;
function requireInflate() {
  if (hasRequiredInflate) return inflate$1;
  hasRequiredInflate = 1;
  var e = requireInflate$1(), t = requireCommon(), i = requireStrings(), a = requireConstants(), r = requireMessages(), o = requireZstream(), n = requireGzheader(), s = Object.prototype.toString;
  function l(d) {
    if (!(this instanceof l)) return new l(d);
    this.options = t.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, d || {});
    var m = this.options;
    m.raw && m.windowBits >= 0 && m.windowBits < 16 && (m.windowBits = -m.windowBits, m.windowBits === 0 && (m.windowBits = -15)), m.windowBits >= 0 && m.windowBits < 16 && !(d && d.windowBits) && (m.windowBits += 32), m.windowBits > 15 && m.windowBits < 48 && (m.windowBits & 15) === 0 && (m.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new o(), this.strm.avail_out = 0;
    var p = e.inflateInit2(
      this.strm,
      m.windowBits
    );
    if (p !== a.Z_OK)
      throw new Error(r[p]);
    if (this.header = new n(), e.inflateGetHeader(this.strm, this.header), m.dictionary && (typeof m.dictionary == "string" ? m.dictionary = i.string2buf(m.dictionary) : s.call(m.dictionary) === "[object ArrayBuffer]" && (m.dictionary = new Uint8Array(m.dictionary)), m.raw && (p = e.inflateSetDictionary(this.strm, m.dictionary), p !== a.Z_OK)))
      throw new Error(r[p]);
  }
  l.prototype.push = function(d, m) {
    var p = this.strm, g = this.options.chunkSize, M = this.options.dictionary, k, w, v, C, B, A = !1;
    if (this.ended)
      return !1;
    w = m === ~~m ? m : m === !0 ? a.Z_FINISH : a.Z_NO_FLUSH, typeof d == "string" ? p.input = i.binstring2buf(d) : s.call(d) === "[object ArrayBuffer]" ? p.input = new Uint8Array(d) : p.input = d, p.next_in = 0, p.avail_in = p.input.length;
    do {
      if (p.avail_out === 0 && (p.output = new t.Buf8(g), p.next_out = 0, p.avail_out = g), k = e.inflate(p, a.Z_NO_FLUSH), k === a.Z_NEED_DICT && M && (k = e.inflateSetDictionary(this.strm, M)), k === a.Z_BUF_ERROR && A === !0 && (k = a.Z_OK, A = !1), k !== a.Z_STREAM_END && k !== a.Z_OK)
        return this.onEnd(k), this.ended = !0, !1;
      p.next_out && (p.avail_out === 0 || k === a.Z_STREAM_END || p.avail_in === 0 && (w === a.Z_FINISH || w === a.Z_SYNC_FLUSH)) && (this.options.to === "string" ? (v = i.utf8border(p.output, p.next_out), C = p.next_out - v, B = i.buf2string(p.output, v), p.next_out = C, p.avail_out = g - C, C && t.arraySet(p.output, p.output, v, C, 0), this.onData(B)) : this.onData(t.shrinkBuf(p.output, p.next_out))), p.avail_in === 0 && p.avail_out === 0 && (A = !0);
    } while ((p.avail_in > 0 || p.avail_out === 0) && k !== a.Z_STREAM_END);
    return k === a.Z_STREAM_END && (w = a.Z_FINISH), w === a.Z_FINISH ? (k = e.inflateEnd(this.strm), this.onEnd(k), this.ended = !0, k === a.Z_OK) : (w === a.Z_SYNC_FLUSH && (this.onEnd(a.Z_OK), p.avail_out = 0), !0);
  }, l.prototype.onData = function(d) {
    this.chunks.push(d);
  }, l.prototype.onEnd = function(d) {
    d === a.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = t.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
  };
  function h(d, m) {
    var p = new l(m);
    if (p.push(d, !0), p.err)
      throw p.msg || r[p.err];
    return p.result;
  }
  function u(d, m) {
    return m = m || {}, m.raw = !0, h(d, m);
  }
  return inflate$1.Inflate = l, inflate$1.inflate = h, inflate$1.inflateRaw = u, inflate$1.ungzip = h, inflate$1;
}
var pako_1, hasRequiredPako;
function requirePako() {
  if (hasRequiredPako) return pako_1;
  hasRequiredPako = 1;
  var e = requireCommon().assign, t = requireDeflate(), i = requireInflate(), a = requireConstants(), r = {};
  return e(r, t, i, a), pako_1 = r, pako_1;
}
var hasRequiredUTIF;
function requireUTIF() {
  return hasRequiredUTIF || (hasRequiredUTIF = 1, (function(e) {
    (function() {
      var t = {};
      e.exports = t;
      var i = typeof commonjsRequire == "function" ? requirePako() : self.pako;
      function a() {
        (typeof process > "u" || process.env.NODE_ENV == "development") && console.log.apply(console, arguments);
      }
      (function(r, o) {
        (function() {
          var n = (function() {
            function u(d) {
              this.message = "JPEG error: " + d;
            }
            return u.prototype = new Error(), u.prototype.name = "JpegError", u.constructor = u, u;
          })(), s = (function() {
            var u = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]), d = 4017, m = 799, p = 3406, g = 2276, M = 1567, k = 3784, w = 5793, v = 2896;
            function C(Z) {
              Z == null && (Z = {}), Z.w == null && (Z.w = -1), this.V = Z.n, this.N = Z.w;
            }
            function B(Z, P) {
              for (var D = 0, L = [], q, j, J = 16, ie; J > 0 && !Z[J - 1]; )
                J--;
              L.push({ children: [], index: 0 });
              var V = L[0];
              for (q = 0; q < J; q++) {
                for (j = 0; j < Z[q]; j++) {
                  for (V = L.pop(), V.children[V.index] = P[D]; V.index > 0; )
                    V = L.pop();
                  for (V.index++, L.push(V); L.length <= q; )
                    L.push(ie = { children: [], index: 0 }), V.children[V.index] = ie.children, V = ie;
                  D++;
                }
                q + 1 < J && (L.push(ie = { children: [], index: 0 }), V.children[V.index] = ie.children, V = ie);
              }
              return L[0].children;
            }
            function A(Z, P, D) {
              return 64 * ((Z.P + 1) * P + D);
            }
            function S(Z, P, D, L, q, j, J, ie, V, Q) {
              Q == null && (Q = !1);
              var ee = D.m, xe = D.Z, ke = P, ve = 0, H = 0, W = 0, U = 0, re, ae = 0, we, Ae, he, ue, ce, ye, Se = 0, Ie, Be, Ce, se;
              function Fe() {
                if (H > 0)
                  return H--, ve >> H & 1;
                if (ve = Z[P++], ve === 255) {
                  var oe = Z[P++];
                  if (oe) {
                    if (oe === 220 && Q) {
                      P += 2;
                      var be = l(Z, P);
                      if (P += 2, be > 0 && be !== D.s)
                        throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", be);
                    } else if (oe === 217) {
                      if (Q) {
                        var $ = ae * 8;
                        if ($ > 0 && $ < D.s / 10)
                          throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter", $);
                      }
                      throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");
                    }
                    throw new n("unexpected marker");
                  }
                }
                return H = 7, ve >>> 7;
              }
              function Pe(oe) {
                for (var be = oe; ; ) {
                  switch (be = be[Fe()], typeof be) {
                    case "number":
                      return be;
                    case "object":
                      continue;
                  }
                  throw new n("invalid huffman sequence");
                }
              }
              function Te(oe) {
                for (var be = 0; oe > 0; )
                  be = be << 1 | Fe(), oe--;
                return be;
              }
              function ze(oe) {
                if (oe === 1)
                  return Fe() === 1 ? 1 : -1;
                var be = Te(oe);
                return be >= 1 << oe - 1 ? be : be + (-1 << oe) + 1;
              }
              function We(oe, be) {
                var $ = Pe(oe.J), pe = $ === 0 ? 0 : ze($), I = 1;
                for (oe.D[be] = oe.Q += pe; I < 64; ) {
                  var me = Pe(oe.i), qe = me & 15, _ = me >> 4;
                  if (qe === 0) {
                    if (_ < 15)
                      break;
                    I += 16;
                    continue;
                  }
                  I += _;
                  var te = u[I];
                  oe.D[be + te] = ze(qe), I++;
                }
              }
              function He(oe, be) {
                var $ = Pe(oe.J), pe = $ === 0 ? 0 : ze($) << V;
                oe.D[be] = oe.Q += pe;
              }
              function Ne(oe, be) {
                oe.D[be] |= Fe() << V;
              }
              function Ge(oe, be) {
                if (W > 0) {
                  W--;
                  return;
                }
                for (var $ = j, pe = J; $ <= pe; ) {
                  var I = Pe(oe.i), me = I & 15, qe = I >> 4;
                  if (me === 0) {
                    if (qe < 15) {
                      W = Te(qe) + (1 << qe) - 1;
                      break;
                    }
                    $ += 16;
                    continue;
                  }
                  $ += qe;
                  var _ = u[$];
                  oe.D[be + _] = ze(me) * (1 << V), $++;
                }
              }
              function Le(oe, be) {
                for (var $ = j, pe = J, I = 0, me, qe; $ <= pe; ) {
                  var _ = be + u[$], te = oe.D[_] < 0 ? -1 : 1;
                  switch (U) {
                    case 0:
                      if (qe = Pe(oe.i), me = qe & 15, I = qe >> 4, me === 0)
                        I < 15 ? (W = Te(I) + (1 << I), U = 4) : (I = 16, U = 1);
                      else {
                        if (me !== 1)
                          throw new n("invalid ACn encoding");
                        re = ze(me), U = I ? 2 : 3;
                      }
                      continue;
                    case 1:
                    case 2:
                      oe.D[_] ? oe.D[_] += te * (Fe() << V) : (I--, I === 0 && (U = U === 2 ? 3 : 0));
                      break;
                    case 3:
                      oe.D[_] ? oe.D[_] += te * (Fe() << V) : (oe.D[_] = re << V, U = 0);
                      break;
                    case 4:
                      oe.D[_] && (oe.D[_] += te * (Fe() << V));
                      break;
                  }
                  $++;
                }
                U === 4 && (W--, W === 0 && (U = 0));
              }
              function Oe(oe, be, $, pe, I) {
                var me = $ / ee | 0, qe = $ % ee;
                ae = me * oe.A + pe;
                var _ = qe * oe.h + I, te = A(oe, ae, _);
                be(oe, te);
              }
              function Ke(oe, be, $) {
                ae = $ / oe.P | 0;
                var pe = $ % oe.P, I = A(oe, ae, pe);
                be(oe, I);
              }
              var O = L.length;
              for (xe ? j === 0 ? ye = ie === 0 ? He : Ne : ye = ie === 0 ? Ge : Le : ye = We, O === 1 ? Be = L[0].P * L[0].c : Be = ee * D.R; Se <= Be; ) {
                var ge = q ? Math.min(Be - Se, q) : Be;
                if (ge > 0) {
                  for (Ae = 0; Ae < O; Ae++)
                    L[Ae].Q = 0;
                  if (W = 0, O === 1)
                    for (we = L[0], ce = 0; ce < ge; ce++)
                      Ke(we, ye, Se), Se++;
                  else
                    for (ce = 0; ce < ge; ce++) {
                      for (Ae = 0; Ae < O; Ae++)
                        for (we = L[Ae], Ce = we.h, se = we.A, he = 0; he < se; he++)
                          for (ue = 0; ue < Ce; ue++)
                            Oe(we, ye, Se, he, ue);
                      Se++;
                    }
                }
                if (H = 0, Ie = F(Z, P), !Ie)
                  break;
                if (Ie.u && (P = Ie.offset), Ie.M >= 65488 && Ie.M <= 65495)
                  P += 2;
                else
                  break;
              }
              return P - ke;
            }
            function b(Z, P, D) {
              var L = Z.$, q = Z.D, j, J, ie, V, Q, ee, xe, ke, ve, H, W, U, re, ae, we, Ae, he;
              if (!L)
                throw new n("missing required Quantization Table.");
              for (var ue = 0; ue < 64; ue += 8) {
                if (ve = q[P + ue], H = q[P + ue + 1], W = q[P + ue + 2], U = q[P + ue + 3], re = q[P + ue + 4], ae = q[P + ue + 5], we = q[P + ue + 6], Ae = q[P + ue + 7], ve *= L[ue], (H | W | U | re | ae | we | Ae) === 0) {
                  he = w * ve + 512 >> 10, D[ue] = he, D[ue + 1] = he, D[ue + 2] = he, D[ue + 3] = he, D[ue + 4] = he, D[ue + 5] = he, D[ue + 6] = he, D[ue + 7] = he;
                  continue;
                }
                H *= L[ue + 1], W *= L[ue + 2], U *= L[ue + 3], re *= L[ue + 4], ae *= L[ue + 5], we *= L[ue + 6], Ae *= L[ue + 7], j = w * ve + 128 >> 8, J = w * re + 128 >> 8, ie = W, V = we, Q = v * (H - Ae) + 128 >> 8, ke = v * (H + Ae) + 128 >> 8, ee = U << 4, xe = ae << 4, j = j + J + 1 >> 1, J = j - J, he = ie * k + V * M + 128 >> 8, ie = ie * M - V * k + 128 >> 8, V = he, Q = Q + xe + 1 >> 1, xe = Q - xe, ke = ke + ee + 1 >> 1, ee = ke - ee, j = j + V + 1 >> 1, V = j - V, J = J + ie + 1 >> 1, ie = J - ie, he = Q * g + ke * p + 2048 >> 12, Q = Q * p - ke * g + 2048 >> 12, ke = he, he = ee * m + xe * d + 2048 >> 12, ee = ee * d - xe * m + 2048 >> 12, xe = he, D[ue] = j + ke, D[ue + 7] = j - ke, D[ue + 1] = J + xe, D[ue + 6] = J - xe, D[ue + 2] = ie + ee, D[ue + 5] = ie - ee, D[ue + 3] = V + Q, D[ue + 4] = V - Q;
              }
              for (var ce = 0; ce < 8; ++ce) {
                if (ve = D[ce], H = D[ce + 8], W = D[ce + 16], U = D[ce + 24], re = D[ce + 32], ae = D[ce + 40], we = D[ce + 48], Ae = D[ce + 56], (H | W | U | re | ae | we | Ae) === 0) {
                  he = w * ve + 8192 >> 14, he < -2040 ? he = 0 : he >= 2024 ? he = 255 : he = he + 2056 >> 4, q[P + ce] = he, q[P + ce + 8] = he, q[P + ce + 16] = he, q[P + ce + 24] = he, q[P + ce + 32] = he, q[P + ce + 40] = he, q[P + ce + 48] = he, q[P + ce + 56] = he;
                  continue;
                }
                j = w * ve + 2048 >> 12, J = w * re + 2048 >> 12, ie = W, V = we, Q = v * (H - Ae) + 2048 >> 12, ke = v * (H + Ae) + 2048 >> 12, ee = U, xe = ae, j = (j + J + 1 >> 1) + 4112, J = j - J, he = ie * k + V * M + 2048 >> 12, ie = ie * M - V * k + 2048 >> 12, V = he, Q = Q + xe + 1 >> 1, xe = Q - xe, ke = ke + ee + 1 >> 1, ee = ke - ee, j = j + V + 1 >> 1, V = j - V, J = J + ie + 1 >> 1, ie = J - ie, he = Q * g + ke * p + 2048 >> 12, Q = Q * p - ke * g + 2048 >> 12, ke = he, he = ee * m + xe * d + 2048 >> 12, ee = ee * d - xe * m + 2048 >> 12, xe = he, ve = j + ke, Ae = j - ke, H = J + xe, we = J - xe, W = ie + ee, ae = ie - ee, U = V + Q, re = V - Q, ve < 16 ? ve = 0 : ve >= 4080 ? ve = 255 : ve >>= 4, H < 16 ? H = 0 : H >= 4080 ? H = 255 : H >>= 4, W < 16 ? W = 0 : W >= 4080 ? W = 255 : W >>= 4, U < 16 ? U = 0 : U >= 4080 ? U = 255 : U >>= 4, re < 16 ? re = 0 : re >= 4080 ? re = 255 : re >>= 4, ae < 16 ? ae = 0 : ae >= 4080 ? ae = 255 : ae >>= 4, we < 16 ? we = 0 : we >= 4080 ? we = 255 : we >>= 4, Ae < 16 ? Ae = 0 : Ae >= 4080 ? Ae = 255 : Ae >>= 4, q[P + ce] = ve, q[P + ce + 8] = H, q[P + ce + 16] = W, q[P + ce + 24] = U, q[P + ce + 32] = re, q[P + ce + 40] = ae, q[P + ce + 48] = we, q[P + ce + 56] = Ae;
              }
            }
            function E(Z, P) {
              for (var D = P.P, L = P.c, q = new Int16Array(64), j = 0; j < L; j++)
                for (var J = 0; J < D; J++) {
                  var ie = A(P, j, J);
                  b(P, ie, q);
                }
              return P.D;
            }
            function F(Z, P, D) {
              D == null && (D = P);
              var L = Z.length - 1, q = D < P ? D : P;
              if (P >= L)
                return null;
              var j = l(Z, P);
              if (j >= 65472 && j <= 65534)
                return { u: null, M: j, offset: P };
              for (var J = l(Z, q); !(J >= 65472 && J <= 65534); ) {
                if (++q >= L)
                  return null;
                J = l(Z, q);
              }
              return { u: j.toString(16), M: J, offset: q };
            }
            return C.prototype = { parse(Z, P) {
              P == null && (P = {});
              var D = P.F, L = 0, q = null, j = null, J, ie, V = 0;
              function Q() {
                var _ = l(Z, L);
                L += 2;
                var te = L + _ - 2, fe = F(Z, te, L);
                fe && fe.u && (te = fe.offset);
                var R = Z.subarray(L, te);
                return L += R.length, R;
              }
              function ee(_) {
                for (var te = Math.ceil(_.o / 8 / _.X), fe = Math.ceil(_.s / 8 / _.B), R = 0; R < _.W.length; R++) {
                  Le = _.W[R];
                  var K = Math.ceil(Math.ceil(_.o / 8) * Le.h / _.X), _e = Math.ceil(Math.ceil(_.s / 8) * Le.A / _.B), Ye = te * Le.h, Ue = fe * Le.A, je = 64 * Ue * (Ye + 1);
                  Le.D = new Int16Array(je), Le.P = K, Le.c = _e;
                }
                _.m = te, _.R = fe;
              }
              var xe = [], ke = [], ve = [], H = l(Z, L);
              if (L += 2, H !== 65496)
                throw new n("SOI not found");
              H = l(Z, L), L += 2;
              e: for (; H !== 65497; ) {
                var W, U, re;
                switch (H) {
                  case 65504:
                  case 65505:
                  case 65506:
                  case 65507:
                  case 65508:
                  case 65509:
                  case 65510:
                  case 65511:
                  case 65512:
                  case 65513:
                  case 65514:
                  case 65515:
                  case 65516:
                  case 65517:
                  case 65518:
                  case 65519:
                  case 65534:
                    var ae = Q();
                    H === 65504 && ae[0] === 74 && ae[1] === 70 && ae[2] === 73 && ae[3] === 70 && ae[4] === 0 && (q = { version: { d: ae[5], T: ae[6] }, K: ae[7], j: ae[8] << 8 | ae[9], H: ae[10] << 8 | ae[11], S: ae[12], I: ae[13], C: ae.subarray(14, 14 + 3 * ae[12] * ae[13]) }), H === 65518 && ae[0] === 65 && ae[1] === 100 && ae[2] === 111 && ae[3] === 98 && ae[4] === 101 && (j = { version: ae[5] << 8 | ae[6], k: ae[7] << 8 | ae[8], q: ae[9] << 8 | ae[10], a: ae[11] });
                    break;
                  case 65499:
                    var we = l(Z, L), Ae;
                    L += 2;
                    for (var he = we + L - 2; L < he; ) {
                      var ue = Z[L++], ce = new Uint16Array(64);
                      if (ue >> 4 === 0)
                        for (U = 0; U < 64; U++)
                          Ae = u[U], ce[Ae] = Z[L++];
                      else if (ue >> 4 === 1)
                        for (U = 0; U < 64; U++)
                          Ae = u[U], ce[Ae] = l(Z, L), L += 2;
                      else
                        throw new n("DQT - invalid table spec");
                      xe[ue & 15] = ce;
                    }
                    break;
                  case 65472:
                  case 65473:
                  case 65474:
                    if (J)
                      throw new n("Only single frame JPEGs supported");
                    L += 2, J = {}, J.G = H === 65473, J.Z = H === 65474, J.precision = Z[L++];
                    var ye = l(Z, L), Se, Ie = 0, Be = 0;
                    L += 2, J.s = D || ye, J.o = l(Z, L), L += 2, J.W = [], J._ = {};
                    var Ce = Z[L++];
                    for (W = 0; W < Ce; W++) {
                      Se = Z[L];
                      var se = Z[L + 1] >> 4, Fe = Z[L + 1] & 15;
                      Ie < se && (Ie = se), Be < Fe && (Be = Fe);
                      var Pe = Z[L + 2];
                      re = J.W.push({ h: se, A: Fe, L: Pe, $: null }), J._[Se] = re - 1, L += 3;
                    }
                    J.X = Ie, J.B = Be, ee(J);
                    break;
                  case 65476:
                    var Te = l(Z, L);
                    for (L += 2, W = 2; W < Te; ) {
                      var ze = Z[L++], We = new Uint8Array(16), He = 0;
                      for (U = 0; U < 16; U++, L++)
                        He += We[U] = Z[L];
                      var Ne = new Uint8Array(He);
                      for (U = 0; U < He; U++, L++)
                        Ne[U] = Z[L];
                      W += 17 + He, (ze >> 4 === 0 ? ve : ke)[ze & 15] = B(We, Ne);
                    }
                    break;
                  case 65501:
                    L += 2, ie = l(Z, L), L += 2;
                    break;
                  case 65498:
                    var Ge = ++V === 1 && !D, Le;
                    L += 2;
                    var Oe = Z[L++], Ke = [];
                    for (W = 0; W < Oe; W++) {
                      var O = Z[L++], ge = J._[O];
                      Le = J.W[ge], Le.index = O;
                      var oe = Z[L++];
                      Le.J = ve[oe >> 4], Le.i = ke[oe & 15], Ke.push(Le);
                    }
                    var be = Z[L++], $ = Z[L++], pe = Z[L++];
                    try {
                      var I = S(Z, L, J, Ke, ie, be, $, pe >> 4, pe & 15, Ge);
                      L += I;
                    } catch (_) {
                      if (_ instanceof DNLMarkerError)
                        return this.parse(Z, { F: _.s });
                      if (_ instanceof EOIMarkerError)
                        break e;
                      throw _;
                    }
                    break;
                  case 65500:
                    L += 4;
                    break;
                  case 65535:
                    Z[L] !== 255 && L--;
                    break;
                  default:
                    var me = F(Z, L - 2, L - 3);
                    if (me && me.u) {
                      L = me.offset;
                      break;
                    }
                    if (L >= Z.length - 1)
                      break e;
                    throw new n("JpegImage.parse - unknown marker: " + H.toString(16));
                }
                H = l(Z, L), L += 2;
              }
              for (this.width = J.o, this.height = J.s, this.g = q, this.b = j, this.W = [], W = 0; W < J.W.length; W++) {
                Le = J.W[W];
                var qe = xe[Le.L];
                qe && (Le.$ = qe), this.W.push({ index: Le.index, e: E(J, Le), l: Le.h / J.X, t: Le.A / J.B, P: Le.P, c: Le.c });
              }
              this.p = this.W.length;
            }, Y(Z, P, D) {
              D == null && (D = !1);
              var L = this.width / Z, q = this.height / P, j, J, ie, V, Q, ee, xe, ke, ve, H, W = 0, U, re = this.W.length, ae = Z * P * re, we = new Uint8ClampedArray(ae), Ae = new Uint32Array(Z), he = 4294967288, ue;
              for (xe = 0; xe < re; xe++) {
                if (j = this.W[xe], J = j.l * L, ie = j.t * q, W = xe, U = j.e, V = j.P + 1 << 3, J !== ue) {
                  for (Q = 0; Q < Z; Q++)
                    ke = 0 | Q * J, Ae[Q] = (ke & he) << 3 | ke & 7;
                  ue = J;
                }
                for (ee = 0; ee < P; ee++)
                  for (ke = 0 | ee * ie, H = V * (ke & he) | (ke & 7) << 3, Q = 0; Q < Z; Q++)
                    we[W] = U[H + Ae[Q]], W += re;
              }
              var ce = this.V;
              if (!D && re === 4 && !ce && (ce = new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255])), ce)
                for (xe = 0; xe < ae; )
                  for (ke = 0, ve = 0; ke < re; ke++, xe++, ve += 2)
                    we[xe] = (we[xe] * ce[ve] >> 8) + ce[ve + 1];
              return we;
            }, get f() {
              return this.b ? !!this.b.a : this.p === 3 ? this.N === 0 ? !1 : !(this.W[0].index === 82 && this.W[1].index === 71 && this.W[2].index === 66) : this.N === 1;
            }, z: function(P) {
              for (var D, L, q, j = 0, J = P.length; j < J; j += 3)
                D = P[j], L = P[j + 1], q = P[j + 2], P[j] = D - 179.456 + 1.402 * q, P[j + 1] = D + 135.459 - 0.344 * L - 0.714 * q, P[j + 2] = D - 226.816 + 1.772 * L;
              return P;
            }, O: function(P) {
              for (var D, L, q, j, J = 0, ie = 0, V = P.length; ie < V; ie += 4)
                D = P[ie], L = P[ie + 1], q = P[ie + 2], j = P[ie + 3], P[J++] = -122.67195406894 + L * (-660635669420364e-19 * L + 437130475926232e-18 * q - 54080610064599e-18 * D + 48449797120281e-17 * j - 0.154362151871126) + q * (-957964378445773e-18 * q + 817076911346625e-18 * D - 0.00477271405408747 * j + 1.53380253221734) + D * (961250184130688e-18 * D - 0.00266257332283933 * j + 0.48357088451265) + j * (-336197177618394e-18 * j + 0.484791561490776), P[J++] = 107.268039397724 + L * (219927104525741e-19 * L - 640992018297945e-18 * q + 659397001245577e-18 * D + 426105652938837e-18 * j - 0.176491792462875) + q * (-778269941513683e-18 * q + 0.00130872261408275 * D + 770482631801132e-18 * j - 0.151051492775562) + D * (0.00126935368114843 * D - 0.00265090189010898 * j + 0.25802910206845) + j * (-318913117588328e-18 * j - 0.213742400323665), P[J++] = -20.810012546947 + L * (-570115196973677e-18 * L - 263409051004589e-19 * q + 0.0020741088115012 * D - 0.00288260236853442 * j + 0.814272968359295) + q * (-153496057440975e-19 * q - 132689043961446e-18 * D + 560833691242812e-18 * j - 0.195152027534049) + D * (0.00174418132927582 * D - 0.00255243321439347 * j + 0.116935020465145) + j * (-343531996510555e-18 * j + 0.24165260232407);
              return P.subarray(0, J);
            }, r: function(P) {
              for (var D, L, q, j = 0, J = P.length; j < J; j += 4)
                D = P[j], L = P[j + 1], q = P[j + 2], P[j] = 434.456 - D - 1.402 * q, P[j + 1] = 119.541 - D + 0.344 * L + 0.714 * q, P[j + 2] = 481.816 - D - 1.772 * L;
              return P;
            }, U: function(P) {
              for (var D, L, q, j, J = 0, ie = 0, V = P.length; ie < V; ie += 4)
                D = P[ie], L = P[ie + 1], q = P[ie + 2], j = P[ie + 3], P[J++] = 255 + D * (-6747147073602441e-20 * D + 8379262121013727e-19 * L + 2894718188643294e-19 * q + 0.003264231057537806 * j - 1.1185611867203937) + L * (26374107616089405e-21 * L - 8626949158638572e-20 * q - 2748769067499491e-19 * j - 0.02155688794978967) + q * (-3878099212869363e-20 * q - 3267808279485286e-19 * j + 0.0686742238595345) - j * (3361971776183937e-19 * j + 0.7430659151342254), P[J++] = 255 + D * (13596372813588848e-20 * D + 924537132573585e-18 * L + 10567359618683593e-20 * q + 4791864687436512e-19 * j - 0.3109689587515875) + L * (-23545346108370344e-20 * L + 2702845253534714e-19 * q + 0.0020200308977307156 * j - 0.7488052167015494) + q * (6834815998235662e-20 * q + 15168452363460973e-20 * j - 0.09751927774728933) - j * (3189131175883281e-19 * j + 0.7364883807733168), P[J++] = 255 + D * (13598650411385307e-21 * D + 12423956175490851e-20 * L + 4751985097583589e-19 * q - 36729317476630422e-22 * j - 0.05562186980264034) + L * (16141380598724676e-20 * L + 9692239130725186e-19 * q + 7782692450036253e-19 * j - 0.44015232367526463) + q * (5068882914068769e-22 * q + 0.0017778369011375071 * j - 0.7591454649749609) - j * (3435319965105553e-19 * j + 0.7063770186160144);
              return P.subarray(0, J);
            }, getData: function(Z) {
              var P = Z.width, D = Z.height, L = Z.forceRGB, q = Z.isSourcePDF;
              if (this.p > 4)
                throw new n("Unsupported color mode");
              var j = this.Y(P, D, q);
              if (this.p === 1 && L) {
                for (var J = j.length, ie = new Uint8ClampedArray(J * 3), V = 0, Q = 0; Q < J; Q++) {
                  var ee = j[Q];
                  ie[V++] = ee, ie[V++] = ee, ie[V++] = ee;
                }
                return ie;
              } else {
                if (this.p === 3 && this.f)
                  return this.z(j);
                if (this.p === 4) {
                  if (this.f)
                    return L ? this.O(j) : this.r(j);
                  if (L)
                    return this.U(j);
                }
              }
              return j;
            } }, C;
          })();
          function l(h, u) {
            return h[u] << 8 | h[u + 1];
          }
          r.JpegDecoder = s;
        })(), r.encodeImage = function(n, s, l, h) {
          var u = {
            t256: [s],
            t257: [l],
            t258: [8, 8, 8, 8],
            t259: [1],
            t262: [2],
            t273: [1e3],
            // strips offset
            t277: [4],
            t278: [l],
            /* rows per strip */
            t279: [s * l * 4],
            // strip byte counts
            t282: [[72, 1]],
            t283: [[72, 1]],
            t284: [1],
            t286: [[0, 1]],
            t287: [[0, 1]],
            t296: [1],
            t305: ["Photopea (UTIF.js)"],
            t338: [1]
          };
          if (h) for (var d in h) u[d] = h[d];
          for (var m = new Uint8Array(r.encode([u])), p = new Uint8Array(n), g = new Uint8Array(1e3 + s * l * 4), d = 0; d < m.length; d++) g[d] = m[d];
          for (var d = 0; d < p.length; d++) g[1e3 + d] = p[d];
          return g.buffer;
        }, r.encode = function(n) {
          var s = new Uint8Array(2e4), l = 4, h = r._binBE;
          s[0] = s[1] = 77, h.writeUshort(s, 2, 42);
          var u = 8;
          h.writeUint(s, l, u), l += 4;
          for (var d = 0; d < n.length; d++) {
            var m = r._writeIFD(h, r._types.basic, s, u, n[d]);
            u = m[1], d < n.length - 1 && ((u & 3) != 0 && (u += 4 - (u & 3)), h.writeUint(s, m[0], u));
          }
          return s.slice(0, u).buffer;
        }, r.decode = function(n, s) {
          s == null && (s = { parseMN: !0, debug: !1 });
          var l = new Uint8Array(n), h = 0, u = r._binBE.readASCII(l, h, 2);
          h += 2;
          var d = u == "II" ? r._binLE : r._binBE;
          d.readUshort(l, h), h += 2;
          var m = d.readUint(l, h);
          h += 4;
          for (var p = []; ; ) {
            var g = d.readUshort(l, m), M = d.readUshort(l, m + 4);
            if (g != 0 && (M < 1 || 13 < M)) {
              a("error in TIFF");
              break;
            }
            if (r._readIFD(d, l, m, p, 0, s), m = d.readUint(l, m + 2 + g * 12), m == 0) break;
          }
          return p;
        }, r.decodeImage = function(n, s, l) {
          if (!s.data) {
            var h = new Uint8Array(n), u = r._binBE.readASCII(h, 0, 2);
            if (s.t256 != null) {
              s.isLE = u == "II", s.width = s.t256[0], s.height = s.t257[0];
              var d = s.t259 ? s.t259[0] : 1, m = s.t266 ? s.t266[0] : 1;
              s.t284 && s.t284[0] == 2 && a("PlanarConfiguration 2 should not be used!"), d == 7 && s.t258 && s.t258.length > 3 && (s.t258 = s.t258.slice(0, 3));
              var p = s.t277 ? s.t277[0] : 1, g = s.t258 ? s.t258[0] : 1, M = g * p;
              d == 1 && s.t279 != null && s.t278 && s.t262[0] == 32803 && (M = Math.round(s.t279[0] * 8 / (s.width * s.t278[0]))), s.t50885 && s.t50885[0] == 4 && (M = s.t258[0] * 3);
              var k = Math.ceil(s.width * M / 8) * 8, w = s.t273;
              (w == null || s.t322) && (w = s.t324);
              var v = s.t279;
              d == 1 && w.length == 1 && (v = [s.height * (k >>> 3)]), (v == null || s.t322) && (v = s.t325);
              var C = new Uint8Array(s.height * (k >>> 3)), B = 0;
              if (s.t322 != null) {
                var A = s.t322[0], S = s.t323[0], b = Math.floor((s.width + A - 1) / A), E = Math.floor((s.height + S - 1) / S), F = new Uint8Array(Math.ceil(A * S * M / 8) | 0);
                console.log("====", b, E);
                for (var Z = 0; Z < E; Z++)
                  for (var P = 0; P < b; P++) {
                    var D = Z * b + P;
                    F.fill(0), r.decode._decompress(s, l, h, w[D], v[D], d, F, 0, m, A, S), d == 6 ? C = F : r._copyTile(F, Math.ceil(A * M / 8) | 0, S, C, Math.ceil(s.width * M / 8) | 0, s.height, Math.ceil(P * A * M / 8) | 0, Z * S);
                  }
                B = C.length * 8;
              } else {
                if (w == null) return;
                var L = s.t278 ? s.t278[0] : s.height;
                L = Math.min(L, s.height);
                for (var D = 0; D < w.length; D++)
                  r.decode._decompress(s, l, h, w[D], v[D], d, C, Math.ceil(B / 8) | 0, m, s.width, L), B += k * L;
                B = Math.min(B, C.length * 8);
              }
              s.data = new Uint8Array(C.buffer, 0, Math.ceil(B / 8) | 0);
            }
          }
        }, r.decode._decompress = function(n, s, l, h, u, d, m, p, g, M, k) {
          if (n.t271 && n.t271[0] == "Panasonic" && n.t45 && n.t45[0] == 6 && (d = 34316), d == 1) for (var w = 0; w < u; w++) m[p + w] = l[h + w];
          else if (d == 2) r.decode._decodeG2(l, h, u, m, p, M, g);
          else if (d == 3) r.decode._decodeG3(l, h, u, m, p, M, g, n.t292 ? (n.t292[0] & 1) == 1 : !1);
          else if (d == 4) r.decode._decodeG4(l, h, u, m, p, M, g);
          else if (d == 5) r.decode._decodeLZW(l, h, u, m, p, 8);
          else if (d == 6) r.decode._decodeOldJPEG(n, l, h, u, m, p);
          else if (d == 7 || d == 34892) r.decode._decodeNewJPEG(n, l, h, u, m, p);
          else if (d == 8 || d == 32946) {
            var v = new Uint8Array(l.buffer, h + 2, u - 6), C = o.inflateRaw(v);
            p + C.length <= m.length && m.set(C, p);
          } else d == 9 ? r.decode._decodeVC5(l, h, u, m, p, n.t33422) : d == 32767 ? r.decode._decodeARW(n, l, h, u, m, p) : d == 32773 ? r.decode._decodePackBits(l, h, u, m, p) : d == 32809 ? r.decode._decodeThunder(l, h, u, m, p) : d == 34316 ? r.decode._decodePanasonic(n, l, h, u, m, p) : d == 34713 ? r.decode._decodeNikon(n, s, l, h, u, m, p) : d == 34676 ? r.decode._decodeLogLuv32(n, l, h, u, m, p) : a("Unknown compression", d);
          var B = n.t258 ? Math.min(32, n.t258[0]) : 1, A = n.t277 ? n.t277[0] : 1, S = B * A >>> 3, b = Math.ceil(B * A * M / 8);
          if (B == 16 && !n.isLE && n.t33422 == null)
            for (var E = 0; E < k; E++)
              for (var F = p + E * b, Z = 1; Z < b; Z += 2) {
                var P = m[F + Z];
                m[F + Z] = m[F + Z - 1], m[F + Z - 1] = P;
              }
          if (n.t317 && n.t317[0] == 2)
            for (var E = 0; E < k; E++) {
              var D = p + E * b;
              if (B == 16) for (var w = S; w < b; w += 2) {
                var L = (m[D + w + 1] << 8 | m[D + w]) + (m[D + w - S + 1] << 8 | m[D + w - S]);
                m[D + w] = L & 255, m[D + w + 1] = L >>> 8 & 255;
              }
              else if (A == 3) for (var w = 3; w < b; w += 3)
                m[D + w] = m[D + w] + m[D + w - 3] & 255, m[D + w + 1] = m[D + w + 1] + m[D + w - 2] & 255, m[D + w + 2] = m[D + w + 2] + m[D + w - 1] & 255;
              else for (var w = S; w < b; w++) m[D + w] = m[D + w] + m[D + w - S] & 255;
            }
        }, r.decode._decodePanasonic = function(n, s, l, h, u, d) {
          var m = s.buffer, p = n.t2[0], g = n.t3[0], M = n.t10[0], k = n.t45[0], w = 0, v = 0, C = 0, B = 0, A = k == 6 ? new Uint32Array(18) : new Uint8Array(16), S, b, E, F = [0, 0], Z = [0, 0], P, D = 0, L, q, j, J, ie = new Uint8Array(16384), V = new Uint16Array(u.buffer);
          function Q(Fe) {
            if (C == 0) {
              var Pe = new Uint8Array(m, l + v + 8184, 8200), Te = new Uint8Array(m, l + v, 8184);
              ie.set(Pe), ie.set(Te, Pe.length), v += 16384;
            }
            if (k == 5)
              for (S = 0; S < 16; S++)
                A[S] = ie[C++], C &= 16383;
            else
              return C = C - Fe & 131071, B = C >> 3 ^ 16368, (ie[B] | ie[B + 1] << 8) >> (C & 7) & ~(-1 << Fe);
          }
          function ee(Fe) {
            return ie[C + 15 - Fe];
          }
          function xe() {
            A[0] = ee(0) << 6 | ee(1) >> 2, A[1] = ((ee(1) & 3) << 12 | ee(2) << 4 | ee(3) >> 4) & 16383, A[2] = ee(3) >> 2 & 3, A[3] = (ee(3) & 3) << 8 | ee(4), A[4] = ee(5) << 2 | ee(6) >> 6, A[5] = (ee(6) & 63) << 4 | ee(7) >> 4, A[6] = ee(7) >> 2 & 3, A[7] = (ee(7) & 3) << 8 | ee(8), A[8] = ee(9) << 2 & 1020 | ee(10) >> 6, A[9] = (ee(10) << 4 | ee(11) >> 4) & 1023, A[10] = ee(11) >> 2 & 3, A[11] = (ee(11) & 3) << 8 | ee(12), A[12] = (ee(13) << 2 & 1020 | ee(14) >> 6) & 1023, A[13] = (ee(14) << 4 | ee(15) >> 4) & 1023, C += 16, B = 0;
          }
          function ke() {
            A[0] = ee(0) << 4 | ee(1) >> 4, A[1] = ((ee(1) & 15) << 8 | ee(2)) & 4095, A[2] = ee(3) >> 6 & 3, A[3] = (ee(3) & 63) << 2 | ee(4) >> 6, A[4] = (ee(4) & 63) << 2 | ee(5) >> 6, A[5] = (ee(5) & 63) << 2 | ee(6) >> 6, A[6] = ee(6) >> 4 & 3, A[7] = (ee(6) & 15) << 4 | ee(7) >> 4, A[8] = (ee(7) & 15) << 4 | ee(8) >> 4, A[9] = (ee(8) & 15) << 4 | ee(9) >> 4, A[10] = ee(9) >> 2 & 3, A[11] = (ee(9) & 3) << 6 | ee(10) >> 2, A[12] = (ee(10) & 3) << 6 | ee(11) >> 2, A[13] = (ee(11) & 3) << 6 | ee(12) >> 2, A[14] = ee(12) & 3, A[15] = ee(13), A[16] = ee(14), A[17] = ee(15), C += 16, B = 0;
          }
          function ve() {
            F[0] = 0, F[1] = 0, Z[0] = 0, Z[1] = 0;
          }
          if (k == 7)
            throw k;
          if (k == 6) {
            var H = M == 12, W = H ? ke : xe, U = H ? 14 : 11, re = H ? 128 : 512, ae = H ? 2048 : 8192, we = H ? 16383 : 65535, Ae = H ? 4095 : 16383, he = p / U, ue = he * 16, ce = H ? 18 : 14;
            for (q = 0; q < g - 15; q += 16) {
              var ye = Math.min(16, g - q), Se = ue * ye;
              for (ie = new Uint8Array(m, l + w, Se), C = 0, w += Se, J = 0, j = 0; J < ye; J++, j = 0) {
                D = (q + J) * p;
                for (var Ie = 0; Ie < he; Ie++)
                  for (W(), ve(), E = 0, L = 0, S = 0; S < U; S++) {
                    if (P = S & 1, S % 3 == 2) {
                      var Be = B < ce ? A[B++] : 0;
                      Be == 3 && (Be = 4), L = re << Be, E = 1 << Be;
                    }
                    var Ce = B < ce ? A[B++] : 0;
                    F[P] ? (Ce *= E, L < ae && Z[P] > L && (Ce += Z[P] - L), Z[P] = Ce) : (F[P] = Ce, Ce ? Z[P] = Ce : Ce = Z[P]), V[D + j++] = Ce - 15 <= we ? Ce - 15 & we : Ce + 2147483633 >> 31 & Ae;
                  }
              }
            }
          } else if (k == 5) {
            var se = M == 12 ? 10 : 9;
            for (q = 0; q < g; q++)
              for (j = 0; j < p; j += se)
                Q(0), M == 12 ? (V[D++] = ((A[1] & 15) << 8) + A[0], V[D++] = 16 * A[2] + (A[1] >> 4), V[D++] = ((A[4] & 15) << 8) + A[3], V[D++] = 16 * A[5] + (A[4] >> 4), V[D++] = ((A[7] & 15) << 8) + A[6], V[D++] = 16 * A[8] + (A[7] >> 4), V[D++] = ((A[10] & 15) << 8) + A[9], V[D++] = 16 * A[11] + (A[10] >> 4), V[D++] = ((A[13] & 15) << 8) + A[12], V[D++] = 16 * A[14] + (A[13] >> 4)) : M == 14 && (V[D++] = A[0] + ((A[1] & 63) << 8), V[D++] = (A[1] >> 6) + 4 * A[2] + ((A[3] & 15) << 10), V[D++] = (A[3] >> 4) + 16 * A[4] + ((A[5] & 3) << 12), V[D++] = ((A[5] & 252) >> 2) + (A[6] << 6), V[D++] = A[7] + ((A[8] & 63) << 8), V[D++] = (A[8] >> 6) + 4 * A[9] + ((A[10] & 15) << 10), V[D++] = (A[10] >> 4) + 16 * A[11] + ((A[12] & 3) << 12), V[D++] = ((A[12] & 252) >> 2) + (A[13] << 6), V[D++] = A[14] + ((A[15] & 63) << 8));
          } else if (k == 4)
            for (q = 0; q < g; q++)
              for (j = 0; j < p; j++)
                S = j % 14, P = S & 1, S == 0 && ve(), S % 3 == 2 && (E = 4 >> 3 - Q(2)), Z[P] ? (b = Q(8), b != 0 && (F[P] -= 128 << E, (F[P] < 0 || E == 4) && (F[P] &= ~(-1 << E)), F[P] += b << E)) : (Z[P] = Q(8), (Z[P] || S > 11) && (F[P] = Z[P] << 4 | Q(4))), V[D++] = F[j & 1];
          else throw k;
        }, r.decode._decodeVC5 = (function() {
          var n = [1, 0, 1, 0, 2, 2, 1, 1, 3, 7, 1, 2, 5, 25, 1, 3, 6, 48, 1, 4, 6, 54, 1, 5, 7, 111, 1, 8, 7, 99, 1, 6, 7, 105, 12, 0, 7, 107, 1, 7, 8, 209, 20, 0, 8, 212, 1, 9, 8, 220, 1, 10, 9, 393, 1, 11, 9, 394, 32, 0, 9, 416, 1, 12, 9, 427, 1, 13, 10, 887, 1, 18, 10, 784, 1, 14, 10, 790, 1, 15, 10, 835, 60, 0, 10, 852, 1, 16, 10, 885, 1, 17, 11, 1571, 1, 19, 11, 1668, 1, 20, 11, 1669, 100, 0, 11, 1707, 1, 21, 11, 1772, 1, 22, 12, 3547, 1, 29, 12, 3164, 1, 24, 12, 3166, 1, 25, 12, 3140, 1, 23, 12, 3413, 1, 26, 12, 3537, 1, 27, 12, 3539, 1, 28, 13, 7093, 1, 35, 13, 6283, 1, 30, 13, 6331, 1, 31, 13, 6335, 180, 0, 13, 6824, 1, 32, 13, 7072, 1, 33, 13, 7077, 320, 0, 13, 7076, 1, 34, 14, 12565, 1, 36, 14, 12661, 1, 37, 14, 12669, 1, 38, 14, 13651, 1, 39, 14, 14184, 1, 40, 15, 28295, 1, 46, 15, 28371, 1, 47, 15, 25320, 1, 42, 15, 25336, 1, 43, 15, 25128, 1, 41, 15, 27300, 1, 44, 15, 28293, 1, 45, 16, 50259, 1, 48, 16, 50643, 1, 49, 16, 50675, 1, 50, 16, 56740, 1, 53, 16, 56584, 1, 51, 16, 56588, 1, 52, 17, 113483, 1, 61, 17, 113482, 1, 60, 17, 101285, 1, 55, 17, 101349, 1, 56, 17, 109205, 1, 57, 17, 109207, 1, 58, 17, 100516, 1, 54, 17, 113171, 1, 59, 18, 202568, 1, 62, 18, 202696, 1, 63, 18, 218408, 1, 64, 18, 218412, 1, 65, 18, 226340, 1, 66, 18, 226356, 1, 67, 18, 226358, 1, 68, 19, 402068, 1, 69, 19, 405138, 1, 70, 19, 405394, 1, 71, 19, 436818, 1, 72, 19, 436826, 1, 73, 19, 452714, 1, 75, 19, 452718, 1, 76, 19, 452682, 1, 74, 20, 804138, 1, 77, 20, 810279, 1, 78, 20, 810790, 1, 79, 20, 873638, 1, 80, 20, 873654, 1, 81, 20, 905366, 1, 82, 20, 905430, 1, 83, 20, 905438, 1, 84, 21, 1608278, 1, 85, 21, 1620557, 1, 86, 21, 1621582, 1, 87, 21, 1621583, 1, 88, 21, 1747310, 1, 89, 21, 1810734, 1, 90, 21, 1810735, 1, 91, 21, 1810863, 1, 92, 21, 1810879, 1, 93, 22, 3621725, 1, 99, 22, 3621757, 1, 100, 22, 3241112, 1, 94, 22, 3494556, 1, 95, 22, 3494557, 1, 96, 22, 3494622, 1, 97, 22, 3494623, 1, 98, 23, 6482227, 1, 102, 23, 6433117, 1, 101, 23, 6989117, 1, 103, 23, 6989119, 1, 105, 23, 6989118, 1, 104, 23, 7243449, 1, 106, 23, 7243512, 1, 107, 24, 13978233, 1, 111, 24, 12964453, 1, 109, 24, 12866232, 1, 108, 24, 14486897, 1, 113, 24, 13978232, 1, 110, 24, 14486896, 1, 112, 24, 14487026, 1, 114, 24, 14487027, 1, 115, 25, 25732598, 1, 225, 25, 25732597, 1, 189, 25, 25732596, 1, 188, 25, 25732595, 1, 203, 25, 25732594, 1, 202, 25, 25732593, 1, 197, 25, 25732592, 1, 207, 25, 25732591, 1, 169, 25, 25732590, 1, 223, 25, 25732589, 1, 159, 25, 25732522, 1, 235, 25, 25732579, 1, 152, 25, 25732575, 1, 192, 25, 25732489, 1, 179, 25, 25732573, 1, 201, 25, 25732472, 1, 172, 25, 25732576, 1, 149, 25, 25732488, 1, 178, 25, 25732566, 1, 120, 25, 25732571, 1, 219, 25, 25732577, 1, 150, 25, 25732487, 1, 127, 25, 25732506, 1, 211, 25, 25732548, 1, 125, 25, 25732588, 1, 158, 25, 25732486, 1, 247, 25, 25732467, 1, 238, 25, 25732508, 1, 163, 25, 25732552, 1, 228, 25, 25732603, 1, 183, 25, 25732513, 1, 217, 25, 25732587, 1, 168, 25, 25732520, 1, 122, 25, 25732484, 1, 128, 25, 25732562, 1, 249, 25, 25732505, 1, 187, 25, 25732504, 1, 186, 25, 25732483, 1, 136, 25, 25928905, 1, 181, 25, 25732560, 1, 255, 25, 25732500, 1, 230, 25, 25732482, 1, 135, 25, 25732555, 1, 233, 25, 25732568, 1, 222, 25, 25732583, 1, 145, 25, 25732481, 1, 134, 25, 25732586, 1, 167, 25, 25732521, 1, 248, 25, 25732518, 1, 209, 25, 25732480, 1, 243, 25, 25732512, 1, 216, 25, 25732509, 1, 164, 25, 25732547, 1, 140, 25, 25732479, 1, 157, 25, 25732544, 1, 239, 25, 25732574, 1, 191, 25, 25732564, 1, 251, 25, 25732478, 1, 156, 25, 25732546, 1, 139, 25, 25732498, 1, 242, 25, 25732557, 1, 133, 25, 25732477, 1, 162, 25, 25732515, 1, 213, 25, 25732584, 1, 165, 25, 25732514, 1, 212, 25, 25732476, 1, 227, 25, 25732494, 1, 198, 25, 25732531, 1, 236, 25, 25732530, 1, 234, 25, 25732529, 1, 117, 25, 25732528, 1, 215, 25, 25732527, 1, 124, 25, 25732526, 1, 123, 25, 25732525, 1, 254, 25, 25732524, 1, 253, 25, 25732523, 1, 148, 25, 25732570, 1, 218, 25, 25732580, 1, 146, 25, 25732581, 1, 147, 25, 25732569, 1, 224, 25, 25732533, 1, 143, 25, 25732540, 1, 184, 25, 25732541, 1, 185, 25, 25732585, 1, 166, 25, 25732556, 1, 132, 25, 25732485, 1, 129, 25, 25732563, 1, 250, 25, 25732578, 1, 151, 25, 25732501, 1, 119, 25, 25732502, 1, 193, 25, 25732536, 1, 176, 25, 25732496, 1, 245, 25, 25732553, 1, 229, 25, 25732516, 1, 206, 25, 25732582, 1, 144, 25, 25732517, 1, 208, 25, 25732558, 1, 137, 25, 25732543, 1, 241, 25, 25732466, 1, 237, 25, 25732507, 1, 190, 25, 25732542, 1, 240, 25, 25732551, 1, 131, 25, 25732554, 1, 232, 25, 25732565, 1, 252, 25, 25732475, 1, 171, 25, 25732493, 1, 205, 25, 25732492, 1, 204, 25, 25732491, 1, 118, 25, 25732490, 1, 214, 25, 25928904, 1, 180, 25, 25732549, 1, 126, 25, 25732602, 1, 182, 25, 25732539, 1, 175, 25, 25732545, 1, 141, 25, 25732559, 1, 138, 25, 25732537, 1, 177, 25, 25732534, 1, 153, 25, 25732503, 1, 194, 25, 25732606, 1, 160, 25, 25732567, 1, 121, 25, 25732538, 1, 174, 25, 25732497, 1, 246, 25, 25732550, 1, 130, 25, 25732572, 1, 200, 25, 25732474, 1, 170, 25, 25732511, 1, 221, 25, 25732601, 1, 196, 25, 25732532, 1, 142, 25, 25732519, 1, 210, 25, 25732495, 1, 199, 25, 25732605, 1, 155, 25, 25732535, 1, 154, 25, 25732499, 1, 244, 25, 25732510, 1, 220, 25, 25732600, 1, 195, 25, 25732607, 1, 161, 25, 25732604, 1, 231, 25, 25732473, 1, 173, 25, 25732599, 1, 226, 26, 51465122, 1, 116, 26, 51465123, 0, 1], s, l, h, u = [3, 3, 3, 3, 2, 2, 2, 1, 1, 1], d = 24576, m = 16384, p = 8192, g = m | p;
          function M(E) {
            var F = E[1], Z = E[0][F >>> 3] >>> 7 - (F & 7) & 1;
            return E[1]++, Z;
          }
          function k(E, F) {
            if (s == null) {
              s = {};
              for (var Z = 0; Z < n.length; Z += 4) s[n[Z + 1]] = n.slice(Z, Z + 4);
            }
            for (var P = M(E), D = s[P]; D == null; )
              P = P << 1 | M(E), D = s[P];
            var L = D[3];
            L != 0 && (L = M(E) == 0 ? L : -L), F[0] = D[2], F[1] = L;
          }
          function w(E, F) {
            for (var Z = 0; Z < F; Z++)
              (E & 1) == 1 && E++, E = E >>> 1;
            return E;
          }
          function v(E, F) {
            return E >> F;
          }
          function C(E, F, Z, P, D, L) {
            F[Z] = v(v(11 * E[D] - 4 * E[D + L] + E[D + L + L] + 4, 3) + E[P], 1), F[Z + L] = v(v(5 * E[D] + 4 * E[D + L] - E[D + L + L] + 4, 3) - E[P], 1);
          }
          function B(E, F, Z, P, D, L) {
            var q = E[D - L] - E[D + L], j = E[D], J = E[P];
            F[Z] = v(v(q + 4, 3) + j + J, 1), F[Z + L] = v(v(-q + 4, 3) + j - J, 1);
          }
          function A(E, F, Z, P, D, L) {
            F[Z] = v(v(5 * E[D] + 4 * E[D - L] - E[D - L - L] + 4, 3) + E[P], 1), F[Z + L] = v(v(11 * E[D] - 4 * E[D - L] + E[D - L - L] + 4, 3) - E[P], 1);
          }
          function S(E) {
            return E = E < 0 ? 0 : E > 4095 ? 4095 : E, E = h[E] >>> 2, E;
          }
          function b(E, F, Z, P, D, L) {
            P = new Uint16Array(P.buffer);
            var q = Date.now(), j = r._binBE, J = F + Z, ie, V, Q, ee, xe, ke, ve, H, W, U;
            F += 4;
            for (var re = L[0] == 1; F < J; ) {
              var ae = j.readShort(E, F), we = j.readUshort(E, F + 2);
              if (F += 4, ae == 12) ie = we;
              else if (ae == 20) V = we;
              else if (ae == 21) Q = we;
              else if (ae == 48) ee = we;
              else if (ae == 53) xe = we;
              else if (ae != 35) {
                if (ae == 62) ke = we;
                else if (ae != 101) {
                  if (ae == 109) ve = we;
                  else if (ae != 84) {
                    if (ae != 106) {
                      if (ae != 107) {
                        if (ae != 108) {
                          if (ae != 102) {
                            if (ae == 104) H = we;
                            else if (ae != 105) {
                              var Ae = ae < 0 ? -ae : ae, he = Ae & 65280, ue = 0;
                              if (Ae & g && (Ae & p ? (ue = we & 65535, ue += (Ae & 255) << 16) : ue = we & 65535), (Ae & d) == d) {
                                if (W == null) {
                                  W = [];
                                  for (var ce = 0; ce < 4; ce++) W[ce] = new Int16Array((V >>> 1) * (Q >>> 1));
                                  U = new Int16Array((V >>> 1) * (Q >>> 1)), l = new Int16Array(1024);
                                  for (var ce = 0; ce < 1024; ce++) {
                                    var ye = ce - 512, Se = Math.abs(ye), ie = Math.floor(768 * Se * Se * Se / (65025 * 255)) + Se;
                                    l[ce] = Math.sign(ye) * ie;
                                  }
                                  h = new Uint16Array(4096);
                                  for (var Ie = 65535, ce = 0; ce < 4096; ce++) {
                                    var Be = ce, Ce = Ie * (Math.pow(113, Be / 4095) - 1) / 112;
                                    h[ce] = Math.min(Ce, Ie);
                                  }
                                }
                                var se = W[ke], Fe = w(V, 1 + u[ee]), Pe = w(Q, 1 + u[ee]);
                                if (ee == 0)
                                  for (var Te = 0; Te < Pe; Te++) for (var ze = 0; ze < Fe; ze++) {
                                    var We = F + (Te * Fe + ze) * 2;
                                    se[Te * (V >>> 1) + ze] = E[We] << 8 | E[We + 1];
                                  }
                                else {
                                  for (var He = [E, F * 8], Ne = [], Ge = 0, Le = Fe * Pe, Oe = [0, 0], Ke = 0, we = 0; Ge < Le; )
                                    for (k(He, Oe), Ke = Oe[0], we = Oe[1]; Ke > 0; )
                                      Ne[Ge++] = we, Ke--;
                                  for (var O = (ee - 1) % 3, ge = O != 1 ? Fe : 0, oe = O != 0 ? Pe : 0, Te = 0; Te < Pe; Te++)
                                    for (var be = (Te + oe) * (V >>> 1) + ge, $ = Te * Fe, ze = 0; ze < Fe; ze++) se[be + ze] = l[Ne[$ + ze] + 512] * xe;
                                  if (O == 2) {
                                    for (var H = V >>> 1, pe = Fe * 2, I = Pe * 2, Te = 0; Te < Pe; Te++)
                                      for (var ze = 0; ze < pe; ze++) {
                                        var ce = Te * 2 * H + ze, me = Te * H + ze, qe = Pe * H + me;
                                        Te == 0 ? C(se, U, ce, qe, me, H) : Te == Pe - 1 ? A(se, U, ce, qe, me, H) : B(se, U, ce, qe, me, H);
                                      }
                                    var _ = se;
                                    se = U, U = _;
                                    for (var Te = 0; Te < I; Te++)
                                      for (var ze = 0; ze < Fe; ze++) {
                                        var ce = Te * H + 2 * ze, me = Te * H + ze, qe = Fe + me;
                                        ze == 0 ? C(se, U, ce, qe, me, 1) : ze == Fe - 1 ? A(se, U, ce, qe, me, 1) : B(se, U, ce, qe, me, 1);
                                      }
                                    var _ = se;
                                    se = U, U = _;
                                    for (var te = [], fe = 2 - ~~((ee - 1) / 3), R = 0; R < 3; R++) te[R] = ve >> 14 - R * 2 & 3;
                                    var K = te[fe];
                                    if (K != 0) for (var Te = 0; Te < I; Te++) for (var ze = 0; ze < pe; ze++) {
                                      var ce = Te * H + ze;
                                      se[ce] = se[ce] << K;
                                    }
                                  }
                                }
                                if (ee == 9 && ke == 3)
                                  for (var _e = W[0], Ye = W[1], Ue = W[2], je = W[3], Te = 0; Te < Q; Te += 2) for (var ze = 0; ze < V; ze += 2) {
                                    var tt = Te * V + ze, We = (Te >>> 1) * (V >>> 1) + (ze >>> 1), mt = _e[We], st = Ye[We] - 2048, rt = Ue[We] - 2048, Ve = je[We] - 2048, ht = (st << 1) + mt, pt = (rt << 1) + mt, xt = mt + Ve, vt = mt - Ve;
                                    re ? (P[tt] = S(xt), P[tt + 1] = S(pt), P[tt + V] = S(ht), P[tt + V + 1] = S(vt)) : (P[tt] = S(ht), P[tt + 1] = S(xt), P[tt + V] = S(vt), P[tt + V + 1] = S(pt));
                                  }
                                F += ue * 4;
                              } else if (Ae == 16388)
                                F += ue * 4;
                              else if (!(he == 8192 || he == 8448 || he == 9216)) throw Ae.toString(16);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            console.log(Date.now() - q);
          }
          return b;
        })(), r.decode._decodeLogLuv32 = function(n, s, l, h, u, d) {
          for (var m = n.width, p = m * 4, g = 0, M = new Uint8Array(p); g < h; ) {
            for (var k = 0; k < p; ) {
              var w = s[l + g];
              if (g++, w < 128) {
                for (var v = 0; v < w; v++) M[k + v] = s[l + g + v];
                k += w, g += w;
              } else {
                w = w - 126;
                for (var v = 0; v < w; v++) M[k + v] = s[l + g];
                k += w, g++;
              }
            }
            for (var C = 0; C < m; C++)
              u[d + 0] = M[C], u[d + 1] = M[C + m], u[d + 2] = M[C + m * 2], u[d + 4] = M[C + m * 3], d += 6;
          }
        }, r.decode._ljpeg_diff = function(n, s, l) {
          var h = r.decode._getbithuff, u, d;
          return u = h(n, s, l[0], l), d = h(n, s, u, 0), (d & 1 << u - 1) == 0 && (d -= (1 << u) - 1), d;
        }, r.decode._decodeARW = function(n, s, l, h, u, d) {
          var m = n.t256[0], p = n.t257[0], g = n.t258[0], M = n.isLE ? r._binLE : r._binBE, k = m * p == h || m * p * 1.5 == h;
          if (!k) {
            p += 8;
            var w = [l, 0, 0, 0], v = new Uint16Array(32770), C = [
              3857,
              3856,
              3599,
              3342,
              3085,
              2828,
              2571,
              2314,
              2057,
              1800,
              1543,
              1286,
              1029,
              772,
              771,
              768,
              514,
              513
            ], ve, B, A, j, q, S = 0, b = r.decode._ljpeg_diff;
            for (v[0] = 15, A = ve = 0; ve < 18; ve++)
              for (var E = 32768 >>> (C[ve] >>> 8), B = 0; B < E; B++) v[++A] = C[ve];
            for (j = m; j--; )
              for (q = 0; q < p + 1; q += 2)
                if (q == p && (q = 1), S += b(s, w, v), q < p) {
                  var F = S & 4095;
                  r.decode._putsF(u, (q * m + j) * g, F << 16 - g);
                }
            return;
          }
          if (m * p * 1.5 == h) {
            for (var ve = 0; ve < h; ve += 3) {
              var Z = s[l + ve + 0], P = s[l + ve + 1], D = s[l + ve + 2];
              u[d + ve] = P << 4 | Z >>> 4, u[d + ve + 1] = Z << 4 | D >>> 4, u[d + ve + 2] = D << 4 | P >>> 4;
            }
            return;
          }
          var L = new Uint16Array(16), q, j, J, ie, V, Q, ee, xe, ke, ve, H, W = new Uint8Array(m + 1);
          for (q = 0; q < p; q++) {
            for (var U = 0; U < m; U++) W[U] = s[l++];
            for (H = 0, j = 0; j < m - 30; H += 16) {
              for (ie = 2047 & (J = M.readUint(W, H)), V = 2047 & J >>> 11, Q = 15 & J >>> 22, ee = 15 & J >>> 26, xe = 0; xe < 4 && 128 << xe <= ie - V; xe++) ;
              for (ke = 30, ve = 0; ve < 16; ve++)
                ve == Q ? L[ve] = ie : ve == ee ? L[ve] = V : (L[ve] = ((M.readUshort(W, H + (ke >> 3)) >>> (ke & 7) & 127) << xe) + V, L[ve] > 2047 && (L[ve] = 2047), ke += 7);
              for (ve = 0; ve < 16; ve++, j += 2) {
                var F = L[ve] << 1;
                r.decode._putsF(u, (q * m + j) * g, F << 16 - g);
              }
              j -= j & 1 ? 1 : 31;
            }
          }
        }, r.decode._decodeNikon = function(n, s, l, h, u, d, m) {
          var p = [
            [
              0,
              0,
              1,
              5,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              /* 12-bit lossy */
              5,
              4,
              3,
              6,
              2,
              7,
              1,
              0,
              8,
              9,
              11,
              10,
              12
            ],
            [
              0,
              0,
              1,
              5,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              /* 12-bit lossy after split */
              57,
              90,
              56,
              39,
              22,
              5,
              4,
              3,
              2,
              1,
              0,
              11,
              12,
              12
            ],
            [
              0,
              0,
              1,
              4,
              2,
              3,
              1,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              /* 12-bit lossless */
              5,
              4,
              6,
              3,
              7,
              2,
              8,
              1,
              9,
              0,
              10,
              11,
              12
            ],
            [
              0,
              0,
              1,
              4,
              3,
              1,
              1,
              1,
              1,
              1,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              /* 14-bit lossy */
              5,
              6,
              4,
              7,
              8,
              3,
              9,
              2,
              1,
              0,
              10,
              11,
              12,
              13,
              14
            ],
            [
              0,
              0,
              1,
              5,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              0,
              0,
              0,
              0,
              0,
              /* 14-bit lossy after split */
              8,
              92,
              75,
              58,
              41,
              7,
              6,
              5,
              4,
              3,
              2,
              1,
              0,
              13,
              14
            ],
            [
              0,
              0,
              1,
              4,
              2,
              2,
              3,
              1,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              /* 14-bit lossless */
              7,
              6,
              8,
              5,
              9,
              4,
              10,
              3,
              11,
              12,
              2,
              0,
              1,
              13,
              14
            ]
          ], g = n.t256[0], M = n.t257[0], k = n.t258[0], w = 0, v = 0, C = r.decode._make_decoder, B = r.decode._getbithuff, A = s[0].exifIFD.makerNote, S = A.t150 ? A.t150 : A.t140, b = 0, E = S[b++], F = S[b++];
          (E == 73 || F == 88) && (b += 2110), E == 70 && (w = 2), k == 14 && (w += 3);
          for (var Z = [[0, 0], [0, 0]], P = n.isLE ? r._binLE : r._binBE, J = 0; J < 2; J++) for (var D = 0; D < 2; D++)
            Z[J][D] = P.readShort(S, b), b += 2;
          var L = 1 << k & 32767, q = 0, j = P.readShort(S, b);
          b += 2, j > 1 && (q = Math.floor(L / (j - 1))), E == 68 && F == 32 && q > 0 && (v = P.readShort(S, 562));
          var J, ie, V, Q, ee, xe, ke = [0, 0], ve = C(p[w]), H = [h, 0, 0, 0];
          for (ie = 0; ie < M; ie++)
            for (v && ie == v && (ve = C(p[w + 1])), V = 0; V < g; V++) {
              J = B(l, H, ve[0], ve), Q = J & 15, ee = J >>> 4, xe = (B(l, H, Q - ee, 0) << 1) + 1 << ee >>> 1, (xe & 1 << Q - 1) == 0 && (xe -= (1 << Q) - (ee == 0 ? 1 : 0)), V < 2 ? ke[V] = Z[ie & 1][V] += xe : ke[V & 1] += xe;
              var W = Math.min(Math.max(ke[V & 1], 0), (1 << k) - 1), U = (ie * g + V) * k;
              r.decode._putsF(d, U, W << 16 - k);
            }
        }, r.decode._putsF = function(n, s, l) {
          l = l << 8 - (s & 7);
          var h = s >>> 3;
          n[h] |= l >>> 16, n[h + 1] |= l >>> 8, n[h + 2] |= l;
        }, r.decode._getbithuff = function(n, s, l, h) {
          var u = 0;
          r.decode._get_byte;
          var d, m = s[0], p = s[1], g = s[2], M = s[3];
          if (l == 0 || g < 0) return 0;
          for (; !M && g < l && (d = n[m++]) != -1 && !(M = u); )
            p = (p << 8) + d, g += 8;
          if (d = p << 32 - g >>> 32 - l, h ? (g -= h[d + 1] >>> 8, d = h[d + 1] & 255) : g -= l, g < 0) throw "e";
          return s[0] = m, s[1] = p, s[2] = g, s[3] = M, d;
        }, r.decode._make_decoder = function(n) {
          var s, l, h, u, d, m = [];
          for (s = 16; s != 0 && !n[s]; s--) ;
          var p = 17;
          for (m[0] = s, h = l = 1; l <= s; l++)
            for (u = 0; u < n[l]; u++, ++p)
              for (d = 0; d < 1 << s - l; d++)
                h <= 1 << s && (m[h++] = l << 8 | n[p]);
          return m;
        }, r.decode._decodeNewJPEG = function(n, s, l, h, u, d) {
          h = Math.min(h, s.length - l);
          var m = n.t347, p = m ? m.length : 0, g = new Uint8Array(p + h);
          if (m) {
            for (var M = 216, k = 217, w = 0, v = 0; v < p - 1 && !(m[v] == 255 && m[v + 1] == k); v++)
              g[w++] = m[v];
            var C = s[l], B = s[l + 1];
            (C != 255 || B != M) && (g[w++] = C, g[w++] = B);
            for (var v = 2; v < h; v++) g[w++] = s[l + v];
          } else for (var v = 0; v < h; v++) g[v] = s[l + v];
          if (n.t262[0] == 32803 || n.t259[0] == 7 && n.t262[0] == 34892) {
            var A = n.t258[0], S = r.LosslessJpegDecode(g), b = S.length;
            if (A == 16)
              if (n.isLE) for (var v = 0; v < b; v++)
                u[d + (v << 1)] = S[v] & 255, u[d + (v << 1) + 1] = S[v] >>> 8;
              else for (var v = 0; v < b; v++)
                u[d + (v << 1)] = S[v] >>> 8, u[d + (v << 1) + 1] = S[v] & 255;
            else if (A == 14 || A == 12 || A == 10)
              for (var E = 16 - A, v = 0; v < b; v++) r.decode._putsF(u, v * A, S[v] << E);
            else if (A == 8)
              for (var v = 0; v < b; v++) u[d + v] = S[v];
            else throw new Error("unsupported bit depth " + A);
          } else {
            var F = new r.JpegDecoder();
            F.parse(g);
            for (var Z = F.getData({ width: F.width, height: F.height, forceRGB: !0, isSourcePDF: !1 }), v = 0; v < Z.length; v++) u[d + v] = Z[v];
          }
          n.t262[0] == 6 && (n.t262[0] = 2);
        }, r.decode._decodeOldJPEGInit = function(n, s, l, h) {
          var u = 216, d = 219, m = 196, p = 221, g = 192, M = 218, k = 0, w = 0, v, C, B = !1, A, S, b, E = n.t513, F = E ? E[0] : 0, Z = n.t514, P = Z ? Z[0] : 0, D = n.t324 || n.t273 || E, L = n.t530, q = 0, j = 0, J = n.t277 ? n.t277[0] : 1, ie = n.t515;
          if (D && (w = D[0], B = D.length > 1), !B) {
            if (s[l] == 255 && s[l + 1] == u) return { jpegOffset: l };
            if (E != null && (s[l + F] == 255 && s[l + F + 1] == u ? k = l + F : a("JPEGInterchangeFormat does not point to SOI"), Z == null ? a("JPEGInterchangeFormatLength field is missing") : (F >= w || F + P <= w) && a("JPEGInterchangeFormatLength field value is invalid"), k != null))
              return { jpegOffset: k };
          }
          if (L != null && (q = L[0], j = L[1]), E != null && Z != null)
            if (P >= 2 && F + P <= w) {
              for (s[l + F + P - 2] == 255 && s[l + F + P - 1] == u ? v = new Uint8Array(P - 2) : v = new Uint8Array(P), A = 0; A < v.length; A++) v[A] = s[l + F + A];
              a("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables");
            } else a("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");
          if (v == null) {
            var V = 0, Q = [];
            Q[V++] = 255, Q[V++] = u;
            var ee = n.t519;
            if (ee == null) throw new Error("JPEGQTables tag is missing");
            for (A = 0; A < ee.length; A++)
              for (Q[V++] = 255, Q[V++] = d, Q[V++] = 0, Q[V++] = 67, Q[V++] = A, S = 0; S < 64; S++) Q[V++] = s[l + ee[A] + S];
            for (b = 0; b < 2; b++) {
              var xe = n[b == 0 ? "t520" : "t521"];
              if (xe == null) throw new Error((b == 0 ? "JPEGDCTables" : "JPEGACTables") + " tag is missing");
              for (A = 0; A < xe.length; A++) {
                Q[V++] = 255, Q[V++] = m;
                var ke = 19;
                for (S = 0; S < 16; S++) ke += s[l + xe[A] + S];
                for (Q[V++] = ke >>> 8, Q[V++] = ke & 255, Q[V++] = A | b << 4, S = 0; S < 16; S++) Q[V++] = s[l + xe[A] + S];
                for (S = 0; S < ke; S++) Q[V++] = s[l + xe[A] + 16 + S];
              }
            }
            if (Q[V++] = 255, Q[V++] = g, Q[V++] = 0, Q[V++] = 8 + 3 * J, Q[V++] = 8, Q[V++] = n.height >>> 8 & 255, Q[V++] = n.height & 255, Q[V++] = n.width >>> 8 & 255, Q[V++] = n.width & 255, Q[V++] = J, J == 1)
              Q[V++] = 1, Q[V++] = 17, Q[V++] = 0;
            else for (A = 0; A < 3; A++)
              Q[V++] = A + 1, Q[V++] = A != 0 ? 17 : (q & 15) << 4 | j & 15, Q[V++] = A;
            ie != null && ie[0] != 0 && (Q[V++] = 255, Q[V++] = p, Q[V++] = 0, Q[V++] = 4, Q[V++] = ie[0] >>> 8 & 255, Q[V++] = ie[0] & 255), v = new Uint8Array(Q);
          }
          var ve = -1;
          for (A = 0; A < v.length - 1; ) {
            if (v[A] == 255 && v[A + 1] == g) {
              ve = A;
              break;
            }
            A++;
          }
          if (ve == -1) {
            var H = new Uint8Array(v.length + 10 + 3 * J);
            H.set(v);
            var W = v.length;
            if (ve = v.length, v = H, v[W++] = 255, v[W++] = g, v[W++] = 0, v[W++] = 8 + 3 * J, v[W++] = 8, v[W++] = n.height >>> 8 & 255, v[W++] = n.height & 255, v[W++] = n.width >>> 8 & 255, v[W++] = n.width & 255, v[W++] = J, J == 1)
              v[W++] = 1, v[W++] = 17, v[W++] = 0;
            else for (A = 0; A < 3; A++)
              v[W++] = A + 1, v[W++] = A != 0 ? 17 : (q & 15) << 4 | j & 15, v[W++] = A;
          }
          if (s[w] == 255 && s[w + 1] == M) {
            var U = s[w + 2] << 8 | s[w + 3];
            for (C = new Uint8Array(U + 2), C[0] = s[w], C[1] = s[w + 1], C[2] = s[w + 2], C[3] = s[w + 3], A = 0; A < U - 2; A++) C[A + 4] = s[w + A + 4];
          } else {
            C = new Uint8Array(8 + 2 * J);
            var re = 0;
            if (C[re++] = 255, C[re++] = M, C[re++] = 0, C[re++] = 6 + 2 * J, C[re++] = J, J == 1)
              C[re++] = 1, C[re++] = 0;
            else for (A = 0; A < 3; A++)
              C[re++] = A + 1, C[re++] = A << 4 | A;
            C[re++] = 0, C[re++] = 63, C[re++] = 0;
          }
          return { jpegOffset: l, tables: v, sosMarker: C, sofPosition: ve };
        }, r.decode._decodeOldJPEG = function(n, s, l, h, u, d) {
          var m, p, g, M, k, w = r.decode._decodeOldJPEGInit(n, s, l, h);
          if (w.jpegOffset != null)
            for (p = l + h - w.jpegOffset, M = new Uint8Array(p), m = 0; m < p; m++) M[m] = s[w.jpegOffset + m];
          else {
            for (g = w.tables.length, M = new Uint8Array(g + w.sosMarker.length + h + 2), M.set(w.tables), k = g, M[w.sofPosition + 5] = n.height >>> 8 & 255, M[w.sofPosition + 6] = n.height & 255, M[w.sofPosition + 7] = n.width >>> 8 & 255, M[w.sofPosition + 8] = n.width & 255, (s[l] != 255 || s[l + 1] != SOS) && (M.set(w.sosMarker, k), k += sosMarker.length), m = 0; m < h; m++) M[k++] = s[l + m];
            M[k++] = 255, M[k++] = EOI;
          }
          var v = new r.JpegDecoder();
          v.parse(M);
          for (var C = v.getData({ width: v.width, height: v.height, forceRGB: !0, isSourcePDF: !1 }), m = 0; m < C.length; m++) u[d + m] = C[m];
          n.t262 && n.t262[0] == 6 && (n.t262[0] = 2);
        }, r.decode._decodePackBits = function(n, s, l, h, u) {
          for (var d = new Int8Array(n.buffer), m = new Int8Array(h.buffer), p = s + l; s < p; ) {
            var g = d[s];
            if (s++, g >= 0 && g < 128) for (var M = 0; M < g + 1; M++)
              m[u] = d[s], u++, s++;
            if (g >= -127 && g < 0) {
              for (var M = 0; M < -g + 1; M++)
                m[u] = d[s], u++;
              s++;
            }
          }
          return u;
        }, r.decode._decodeThunder = function(n, s, l, h, u) {
          for (var d = [0, 1, 0, -1], m = [0, 1, 2, 3, 0, -3, -2, -1], p = s + l, g = u * 2, M = 0; s < p; ) {
            var k = n[s], w = k >>> 6, v = k & 63;
            if (s++, w == 3 && (M = v & 15, h[g >>> 1] |= M << 4 * (1 - g & 1), g++), w == 0) for (var C = 0; C < v; C++)
              h[g >>> 1] |= M << 4 * (1 - g & 1), g++;
            if (w == 2) for (var C = 0; C < 2; C++) {
              var B = v >>> 3 * (1 - C) & 7;
              B != 4 && (M += m[B], h[g >>> 1] |= M << 4 * (1 - g & 1), g++);
            }
            if (w == 1) for (var C = 0; C < 3; C++) {
              var B = v >>> 2 * (2 - C) & 3;
              B != 2 && (M += d[B], h[g >>> 1] |= M << 4 * (1 - g & 1), g++);
            }
          }
        }, r.decode._dmap = { 1: 0, "011": 1, "000011": 2, "0000011": 3, "010": -1, "000010": -2, "0000010": -3 }, r.decode._lens = (function() {
          var n = function(g, M, k, w) {
            for (var v = 0; v < M.length; v++) g[M[v]] = k + v * w;
          }, s = "00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100", l = "0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111", h = "11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011", u = "0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101", d = "00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";
          s = s.split(","), l = l.split(","), h = h.split(","), u = u.split(","), d = d.split(",");
          var m = {}, p = {};
          return n(m, s, 0, 1), n(m, h, 64, 64), n(m, d, 1792, 64), n(p, l, 0, 1), n(p, u, 64, 64), n(p, d, 1792, 64), [m, p];
        })(), r.decode._decodeG4 = function(n, s, l, h, u, d, m) {
          for (var p = r.decode, g = s << 3, M = 0, k = "", w = [], v = [], C = 0; C < d; C++) v.push(0);
          v = p._makeDiff(v);
          for (var B = 0, A = 0, S = 0, b = 0, E = 0, F = 0, Z = "", P = 0, D = Math.ceil(d / 8) * 8; g >>> 3 < s + l; ) {
            S = p._findDiff(v, B + (B == 0 ? 0 : 1), 1 - E), b = p._findDiff(v, S, E);
            var L = 0;
            if (m == 1 && (L = n[g >>> 3] >>> 7 - (g & 7) & 1), m == 2 && (L = n[g >>> 3] >>> (g & 7) & 1), g++, k += L, Z == "H") {
              if (p._lens[E][k] != null) {
                var q = p._lens[E][k];
                k = "", M += q, q < 64 && (p._addNtimes(w, M, E), B += M, E = 1 - E, M = 0, P--, P == 0 && (Z = ""));
              }
            } else
              k == "0001" && (k = "", p._addNtimes(w, b - B, E), B = b), k == "001" && (k = "", Z = "H", P = 2), p._dmap[k] != null && (A = S + p._dmap[k], p._addNtimes(w, A - B, E), B = A, k = "", E = 1 - E);
            w.length == d && Z == "" && (p._writeBits(w, h, u * 8 + F * D), E = 0, F++, B = 0, v = p._makeDiff(w), w = []);
          }
        }, r.decode._findDiff = function(n, s, l) {
          for (var h = 0; h < n.length; h += 2) if (n[h] >= s && n[h + 1] == l) return n[h];
        }, r.decode._makeDiff = function(n) {
          var s = [];
          n[0] == 1 && s.push(0, 1);
          for (var l = 1; l < n.length; l++) n[l - 1] != n[l] && s.push(l, n[l]);
          return s.push(n.length, 0, n.length, 1), s;
        }, r.decode._decodeG2 = function(n, s, l, h, u, d, m) {
          for (var p = r.decode, g = s << 3, M = 0, k = "", w = [], v = 0, C = 0, B = Math.ceil(d / 8) * 8; g >>> 3 < s + l; ) {
            var A = 0;
            m == 1 && (A = n[g >>> 3] >>> 7 - (g & 7) & 1), m == 2 && (A = n[g >>> 3] >>> (g & 7) & 1), g++, k += A, M = p._lens[v][k], M != null && (p._addNtimes(w, M, v), k = "", M < 64 && (v = 1 - v), w.length == d && (p._writeBits(w, h, u * 8 + C * B), w = [], C++, v = 0, (g & 7) != 0 && (g += 8 - (g & 7)), M >= 64 && (g += 8)));
          }
        }, r.decode._decodeG3 = function(n, s, l, h, u, d, m, p) {
          for (var g = r.decode, M = s << 3, k = 0, w = "", v = [], C = [], B = 0; B < d; B++) v.push(0);
          for (var A = 0, S = 0, b = 0, E = 0, F = 0, Z = -1, P = "", D = 0, L = !0, q = Math.ceil(d / 8) * 8; M >>> 3 < s + l; ) {
            b = g._findDiff(C, A + (A == 0 ? 0 : 1), 1 - F), E = g._findDiff(C, b, F);
            var j = 0;
            if (m == 1 && (j = n[M >>> 3] >>> 7 - (M & 7) & 1), m == 2 && (j = n[M >>> 3] >>> (M & 7) & 1), M++, w += j, L) {
              if (g._lens[F][w] != null) {
                var J = g._lens[F][w];
                w = "", k += J, J < 64 && (g._addNtimes(v, k, F), F = 1 - F, k = 0);
              }
            } else if (P == "H") {
              if (g._lens[F][w] != null) {
                var J = g._lens[F][w];
                w = "", k += J, J < 64 && (g._addNtimes(v, k, F), A += k, F = 1 - F, k = 0, D--, D == 0 && (P = ""));
              }
            } else
              w == "0001" && (w = "", g._addNtimes(v, E - A, F), A = E), w == "001" && (w = "", P = "H", D = 2), g._dmap[w] != null && (S = b + g._dmap[w], g._addNtimes(v, S - A, F), A = S, w = "", F = 1 - F);
            w.endsWith("000000000001") && (Z >= 0 && g._writeBits(v, h, u * 8 + Z * q), p && (m == 1 && (L = (n[M >>> 3] >>> 7 - (M & 7) & 1) == 1), m == 2 && (L = (n[M >>> 3] >>> (M & 7) & 1) == 1), M++), w = "", F = 0, Z++, A = 0, C = g._makeDiff(v), v = []);
          }
          v.length == d && g._writeBits(v, h, u * 8 + Z * q);
        }, r.decode._addNtimes = function(n, s, l) {
          for (var h = 0; h < s; h++) n.push(l);
        }, r.decode._writeBits = function(n, s, l) {
          for (var h = 0; h < n.length; h++) s[l + h >>> 3] |= n[h] << 7 - (l + h & 7);
        }, r.decode._decodeLZW = r.decode._decodeLZW = (function() {
          var n, s, l, h, u = 0, d = 0, m = 0, p = 0, g = function() {
            var S = n >>> 3, b = s[S] << 16 | s[S + 1] << 8 | s[S + 2], E = b >>> 24 - (n & 7) - d & (1 << d) - 1;
            return n += d, E;
          }, M = new Uint32Array(4096 * 4), k = 0, w = function(S) {
            if (S != k) {
              k = S, m = 1 << S, p = m + 1;
              for (var b = 0; b < p + 1; b++)
                M[4 * b] = M[4 * b + 3] = b, M[4 * b + 1] = 65535, M[4 * b + 2] = 1;
            }
          }, v = function(S) {
            d = S + 1, u = p + 1;
          }, C = function(S) {
            for (var b = S << 2, E = M[b + 2], F = h + E - 1; b != 65535; )
              l[F--] = M[b], b = M[b + 1];
            h += E;
          }, B = function(S, b) {
            var E = u << 2, F = S << 2;
            M[E] = M[(b << 2) + 3], M[E + 1] = F, M[E + 2] = M[F + 2] + 1, M[E + 3] = M[F + 3], u++, u + 1 == 1 << d && d != 12 && d++;
          }, A = function(S, b, E, F, Z, P) {
            n = b << 3, s = S, l = F, h = Z;
            var D = b + E << 3, L = 0, q = 0;
            for (w(P), v(P); n < D && (L = g()) != p; ) {
              if (L == m) {
                if (v(P), L = g(), L == p) break;
                C(L);
              } else
                L < u ? (C(L), B(q, L)) : (B(q, q), C(u - 1));
              q = L;
            }
            return h;
          };
          return A;
        })(), r.tags = {}, r._types = (function() {
          var n = new Array(250);
          n.fill(0), n = n.concat([0, 0, 0, 0, 4, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 2, 2, 2, 2, 4, 3, 0, 0, 3, 4, 4, 3, 3, 5, 5, 3, 2, 5, 5, 0, 0, 0, 0, 4, 4, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 5, 5, 3, 0, 3, 3, 4, 4, 4, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          var s = { 33432: 2, 33434: 5, 33437: 5, 34665: 4, 34850: 3, 34853: 4, 34855: 3, 34864: 3, 34866: 4, 36864: 7, 36867: 2, 36868: 2, 37121: 7, 37377: 10, 37378: 5, 37380: 10, 37381: 5, 37383: 3, 37384: 3, 37385: 3, 37386: 5, 37510: 7, 37520: 2, 37521: 2, 37522: 2, 40960: 7, 40961: 3, 40962: 4, 40963: 4, 40965: 4, 41486: 5, 41487: 5, 41488: 3, 41985: 3, 41986: 3, 41987: 3, 41988: 5, 41989: 3, 41990: 3, 41993: 3, 41994: 3, 41995: 7, 41996: 3, 42032: 2, 42033: 2, 42034: 5, 42036: 2, 42037: 2, 59932: 7 };
          return {
            basic: {
              main: n,
              rest: s
            },
            gps: {
              main: [1, 2, 5, 2, 5, 1, 5, 5, 0, 9],
              rest: { 18: 2, 29: 2 }
            }
          };
        })(), r._readIFD = function(n, s, l, h, u, d) {
          var m = n.readUshort(s, l);
          l += 2;
          var p = {};
          d.debug && a("   ".repeat(u), h.length - 1, ">>>----------------");
          for (var g = 0; g < m; g++) {
            var M = n.readUshort(s, l);
            l += 2;
            var k = n.readUshort(s, l);
            l += 2;
            var w = n.readUint(s, l);
            l += 4;
            var v = n.readUint(s, l);
            l += 4;
            var C = [];
            if (k == 1 || k == 7) {
              var B = w < 5 ? l - 4 : v;
              B + w > s.buffer.byteLength && (w = s.buffer.byteLength - B), C = new Uint8Array(s.buffer, B, w);
            }
            if (k == 2) {
              var A = w < 5 ? l - 4 : v, S = s[A], b = Math.max(0, Math.min(w - 1, s.length - A));
              S < 128 || b == 0 ? C.push(n.readASCII(s, A, b)) : C = new Uint8Array(s.buffer, A, b);
            }
            if (k == 3)
              for (var E = 0; E < w; E++) C.push(n.readUshort(s, (w < 3 ? l - 4 : v) + 2 * E));
            if (k == 4 || k == 13)
              for (var E = 0; E < w; E++) C.push(n.readUint(s, (w < 2 ? l - 4 : v) + 4 * E));
            if (k == 5 || k == 10)
              for (var F = k == 5 ? n.readUint : n.readInt, E = 0; E < w; E++) C.push([F(s, v + E * 8), F(s, v + E * 8 + 4)]);
            if (k == 8)
              for (var E = 0; E < w; E++) C.push(n.readShort(s, (w < 3 ? l - 4 : v) + 2 * E));
            if (k == 9)
              for (var E = 0; E < w; E++) C.push(n.readInt(s, (w < 2 ? l - 4 : v) + 4 * E));
            if (k == 11)
              for (var E = 0; E < w; E++) C.push(n.readFloat(s, v + E * 4));
            if (k == 12)
              for (var E = 0; E < w; E++) C.push(n.readDouble(s, v + E * 8));
            if (w != 0 && C.length == 0) {
              if (a(M, "unknown TIFF tag type: ", k, "num:", w), g == 0) return;
              continue;
            }
            if (d.debug && a("   ".repeat(u), M, k, r.tags[M], C), p["t" + M] = C, !(M == 330 && p.t272 && p.t272[0] == "DSLR-A100")) {
              if (M == 330 || M == 34665 || M == 34853 || M == 50740 && n.readUshort(s, n.readUint(C, 0)) < 300 || M == 61440) {
                for (var Z = M == 50740 ? [n.readUint(C, 0)] : C, P = [], E = 0; E < Z.length; E++) r._readIFD(n, s, Z[E], P, u + 1, d);
                M == 330 && (p.subIFD = P), M == 34665 && (p.exifIFD = P[0]), M == 34853 && (p.gpsiIFD = P[0]), M == 50740 && (p.dngPrvt = P[0]), M == 61440 && (p.fujiIFD = P[0]);
              }
            }
            if (M == 37500 && d.parseMN) {
              var D = C;
              if (n.readASCII(D, 0, 5) == "Nikon") p.makerNote = r.decode(D.slice(10).buffer)[0];
              else if (n.readASCII(D, 0, 5) == "OLYMP" || n.readASCII(D, 0, 9) == "OM SYSTEM") {
                var L = [8208, 8224, 8240, 8256, 8272], q = [];
                r._readIFD(n, D, D[1] == 77 ? 16 : D[5] == 85 ? 12 : 8, q, u + 1, d);
                for (var j = p.makerNote = q.pop(), E = 0; E < L.length; E++) {
                  var J = "t" + L[E];
                  j[J] != null && (r._readIFD(n, D, j[J][0], q, u + 1, d), j[J] = q.pop());
                }
                j.t12288 && (r._readIFD(n, j.t12288, 0, q, u + 1, d), j.t12288 = q.pop());
              } else if (n.readUshort(s, v) < 300 && n.readUshort(s, v + 4) <= 12) {
                var q = [];
                r._readIFD(n, s, v, q, u + 1, d), p.makerNote = q[0];
              }
            }
          }
          return h.push(p), d.debug && a("   ".repeat(u), "<<<---------------"), l;
        }, r._writeIFD = function(n, s, l, h, u) {
          var d = Object.keys(u), m = d.length;
          u.exifIFD && m--, u.gpsiIFD && m--, n.writeUshort(l, h, m), h += 2;
          for (var p = h + m * 12 + 4, g = 0; g < d.length; g++) {
            var M = d[g];
            if (!(M == "t34665" || M == "t34853")) {
              M == "exifIFD" && (M = "t34665"), M == "gpsiIFD" && (M = "t34853");
              var k = parseInt(M.slice(1)), w = s.main[k];
              if (w == null && (w = s.rest[k]), w == null || w == 0) throw new Error("unknown type of tag: " + k);
              var v = u[M];
              if (k == 34665) {
                var C = r._writeIFD(n, s, l, p, u.exifIFD);
                v = [p], p = C[1];
              }
              if (k == 34853) {
                var C = r._writeIFD(n, r._types.gps, l, p, u.gpsiIFD);
                v = [p], p = C[1];
              }
              w == 2 && (v = v[0] + "\0");
              var B = v.length;
              n.writeUshort(l, h, k), h += 2, n.writeUshort(l, h, w), h += 2, n.writeUint(l, h, B), h += 4;
              var A = [-1, 1, 1, 2, 4, 8, 0, 1, 0, 4, 8, 0, 8][w] * B, S = h;
              if (A > 4 && (n.writeUint(l, h, p), S = p), w == 1 || w == 7)
                for (var b = 0; b < B; b++) l[S + b] = v[b];
              else if (w == 2)
                n.writeASCII(l, S, v);
              else if (w == 3)
                for (var b = 0; b < B; b++) n.writeUshort(l, S + 2 * b, v[b]);
              else if (w == 4)
                for (var b = 0; b < B; b++) n.writeUint(l, S + 4 * b, v[b]);
              else if (w == 5 || w == 10)
                for (var E = w == 5 ? n.writeUint : n.writeInt, b = 0; b < B; b++) {
                  var F = v[b], Z = F[0], P = F[1];
                  if (Z == null) throw "e";
                  E(l, S + 8 * b, Z), E(l, S + 8 * b + 4, P);
                }
              else if (w == 9)
                for (var b = 0; b < B; b++) n.writeInt(l, S + 4 * b, v[b]);
              else if (w == 12)
                for (var b = 0; b < B; b++) n.writeDouble(l, S + 8 * b, v[b]);
              else throw w;
              A > 4 && (A += A & 1, p += A), h += 4;
            }
          }
          return [h, p];
        }, r.toRGBA8 = function(n, s) {
          function l(Ne) {
            return Ne < 31308e-7 ? 12.92 * Ne : 1.055 * Math.pow(Ne, 1 / 2.4) - 0.055;
          }
          var h = n.width, u = n.height, d = h * u, m = n.data, p = new Uint8Array(d * 4), g = n.t262 ? n.t262[0] : 2, M = n.t258 ? Math.min(32, n.t258[0]) : 1;
          n.t262 == null && M == 1 && (g = 0);
          var k = n.t277 ? n.t277[0] : n.t258 ? n.t258.length : [1, 1, 3, 1, 1, 4, 3][g], w = n.t339 ? n.t339[0] : null;
          if (g == 1 && M == 32 && w != 3) throw "e";
          var v = Math.ceil(k * M * h / 8);
          if (g == 0) {
            s = 1 / 256;
            for (var C = 0; C < u; C++) {
              var B = C * v, A = C * h;
              if (M == 1) for (var S = 0; S < h; S++) {
                var b = A + S << 2, E = m[B + (S >> 3)] >> 7 - (S & 7) & 1;
                p[b] = p[b + 1] = p[b + 2] = (1 - E) * 255, p[b + 3] = 255;
              }
              if (M == 4) for (var S = 0; S < h; S++) {
                var b = A + S << 2, E = m[B + (S >> 1)] >> 4 - 4 * (S & 1) & 15;
                p[b] = p[b + 1] = p[b + 2] = (15 - E) * 17, p[b + 3] = 255;
              }
              if (M == 8) for (var S = 0; S < h; S++) {
                var b = A + S << 2, E = m[B + S];
                p[b] = p[b + 1] = p[b + 2] = 255 - E, p[b + 3] = 255;
              }
              if (M == 16) for (var S = 0; S < h; S++) {
                var b = A + S << 2, F = B + 2 * S, E = m[F + 1] << 8 | m[F];
                p[b] = p[b + 1] = p[b + 2] = Math.min(255, 255 - ~~(E * s)), p[b + 3] = 255;
              }
            }
          } else if (g == 1) {
            s == null && (s = 1 / 256);
            for (var Z = (m.length & 3) == 0 ? new Float32Array(m.buffer) : null, C = 0; C < u; C++) {
              var B = C * v, A = C * h;
              if (M == 1) for (var S = 0; S < h; S++) {
                var b = A + S << 2, E = m[B + (S >> 3)] >> 7 - (S & 7) & 1;
                p[b] = p[b + 1] = p[b + 2] = E * 255, p[b + 3] = 255;
              }
              if (M == 2) for (var S = 0; S < h; S++) {
                var b = A + S << 2, E = m[B + (S >> 2)] >> 6 - 2 * (S & 3) & 3;
                p[b] = p[b + 1] = p[b + 2] = E * 85, p[b + 3] = 255;
              }
              if (M == 8) for (var S = 0; S < h; S++) {
                var b = A + S << 2, E = m[B + S * k];
                p[b] = p[b + 1] = p[b + 2] = E, p[b + 3] = 255;
              }
              if (M == 16) for (var S = 0; S < h; S++) {
                var b = A + S << 2, F = B + 2 * S, E = m[F + 1] << 8 | m[F];
                p[b] = p[b + 1] = p[b + 2] = Math.min(255, ~~(E * s)), p[b + 3] = 255;
              }
              if (M == 32) for (var S = 0; S < h; S++) {
                var b = A + S << 2, F = (B >>> 2) + S, E = Z[F];
                p[b] = p[b + 1] = p[b + 2] = ~~(0.5 + 255 * E), p[b + 3] = 255;
              }
            }
          } else if (g == 2)
            if (M == 8) {
              if (k == 1) for (var S = 0; S < d; S++)
                p[4 * S] = p[4 * S + 1] = p[4 * S + 2] = m[S], p[4 * S + 3] = 255;
              if (k == 3) for (var S = 0; S < d; S++) {
                var b = S << 2, P = S * 3;
                p[b] = m[P], p[b + 1] = m[P + 1], p[b + 2] = m[P + 2], p[b + 3] = 255;
              }
              if (k >= 4) for (var S = 0; S < d; S++) {
                var b = S << 2, P = S * k;
                p[b] = m[P], p[b + 1] = m[P + 1], p[b + 2] = m[P + 2], p[b + 3] = m[P + 3];
              }
            } else if (M == 16) {
              if (k == 4) for (var S = 0; S < d; S++) {
                var b = S << 2, P = S * 8 + 1;
                p[b] = m[P], p[b + 1] = m[P + 2], p[b + 2] = m[P + 4], p[b + 3] = m[P + 6];
              }
              if (k == 3) for (var S = 0; S < d; S++) {
                var b = S << 2, P = S * 6 + 1;
                p[b] = m[P], p[b + 1] = m[P + 2], p[b + 2] = m[P + 4], p[b + 3] = 255;
              }
            } else if (M == 32) {
              for (var D = new Float32Array(m.buffer), L = 0, S = 0; S < D.length; S++) L = Math.min(L, D[S]);
              if (L < 0) for (var S = 0; S < m.length; S += 4) {
                var q = m[S];
                m[S] = m[S + 3], m[S + 3] = q, q = m[S + 1], m[S + 1] = m[S + 2], m[S + 2] = q;
              }
              for (var j = [], S = 0; S < 65536; S++) j.push(l(S / 65535));
              for (var S = 0; S < D.length; S++) {
                var J = Math.max(0, Math.min(1, D[S]));
                D[S] = j[~~(0.5 + J * 65535)];
              }
              if (k == 3) for (var S = 0; S < d; S++) {
                var b = S << 2, P = S * 3;
                p[b] = ~~(0.5 + D[P] * 255), p[b + 1] = ~~(0.5 + D[P + 1] * 255), p[b + 2] = ~~(0.5 + D[P + 2] * 255), p[b + 3] = 255;
              }
              else if (k == 4) for (var S = 0; S < d; S++) {
                var b = S << 2, P = S * 4;
                p[b] = ~~(0.5 + D[P] * 255), p[b + 1] = ~~(0.5 + D[P + 1] * 255), p[b + 2] = ~~(0.5 + D[P + 2] * 255), p[b + 3] = ~~(0.5 + D[P + 3] * 255);
              }
              else throw k;
            } else throw M;
          else if (g == 3)
            for (var ie = n.t320, V = 1 << M, Q = M == 8 && k > 1 && n.t338 && n.t338[0] != 0, C = 0; C < u; C++)
              for (var ee = 0; ee < h; ee++) {
                var S = C * h + ee, b = S << 2, xe = 0, ke = C * v;
                if (M == 1) xe = m[ke + (ee >>> 3)] >>> 7 - (ee & 7) & 1;
                else if (M == 2) xe = m[ke + (ee >>> 2)] >>> 6 - 2 * (ee & 3) & 3;
                else if (M == 4) xe = m[ke + (ee >>> 1)] >>> 4 - 4 * (ee & 1) & 15;
                else if (M == 8) xe = m[ke + ee * k];
                else throw M;
                p[b] = ie[xe] >> 8, p[b + 1] = ie[V + xe] >> 8, p[b + 2] = ie[V + V + xe] >> 8, p[b + 3] = Q ? m[ke + ee * k + 1] : 255;
              }
          else if (g == 5)
            for (var ve = k > 4 ? 1 : 0, S = 0; S < d; S++) {
              var b = S << 2, H = S * k;
              if (window.UDOC) {
                var W = m[H], U = m[H + 1], re = m[H + 2], ae = m[H + 3], we = UDOC.C.cmykToRgb([W * (1 / 255), U * (1 / 255), re * (1 / 255), ae * (1 / 255)]);
                p[b] = ~~(0.5 + 255 * we[0]), p[b + 1] = ~~(0.5 + 255 * we[1]), p[b + 2] = ~~(0.5 + 255 * we[2]);
              } else {
                var W = 255 - m[H], U = 255 - m[H + 1], re = 255 - m[H + 2], ae = (255 - m[H + 3]) * (1 / 255);
                p[b] = ~~(W * ae + 0.5), p[b + 1] = ~~(U * ae + 0.5), p[b + 2] = ~~(re * ae + 0.5);
              }
              p[b + 3] = 255 * (1 - ve) + m[H + 4] * ve;
            }
          else if (g == 6 && n.t278)
            for (var Ae = n.t278[0], C = 0; C < u; C += Ae)
              for (var S = C * h, he = Ae * h, ue = 0; ue < he; ue++) {
                var b = 4 * (S + ue), H = 3 * S + 4 * (ue >>> 1), re = m[H + (ue & 1)], ce = m[H + 2] - 128, ye = m[H + 3] - 128, Se = re + ((ye >> 2) + (ye >> 3) + (ye >> 5)), Ie = re - ((ce >> 2) + (ce >> 4) + (ce >> 5)) - ((ye >> 1) + (ye >> 3) + (ye >> 4) + (ye >> 5)), Be = re + (ce + (ce >> 1) + (ce >> 2) + (ce >> 6));
                p[b] = Math.max(0, Math.min(255, Se)), p[b + 1] = Math.max(0, Math.min(255, Ie)), p[b + 2] = Math.max(0, Math.min(255, Be)), p[b + 3] = 255;
              }
          else if (g == 32845)
            for (var C = 0; C < u; C++)
              for (var ee = 0; ee < h; ee++) {
                var H = (C * h + ee) * 6, b = (C * h + ee) * 4, Ce = m[H + 1] << 8 | m[H], Ce = Math.pow(2, (Ce + 0.5) / 256 - 64), se = (m[H + 3] + 0.5) / 410, Fe = (m[H + 5] + 0.5) / 410, Pe = 9 * se / (6 * se - 16 * Fe + 12), Te = 4 * Fe / (6 * se - 16 * Fe + 12), ze = Ce, We = Pe * ze / Te, re = ze, He = (1 - Pe - Te) * ze / Te, Se = 2.69 * We - 1.276 * re - 0.414 * He, Ie = -1.022 * We + 1.978 * re + 0.044 * He, Be = 0.061 * We - 0.224 * re + 1.163 * He;
                p[b] = l(Math.min(Se, 1)) * 255, p[b + 1] = l(Math.min(Ie, 1)) * 255, p[b + 2] = l(Math.min(Be, 1)) * 255, p[b + 3] = 255;
              }
          else a("Unknown Photometric interpretation: " + g);
          return p;
        }, r.replaceIMG = function(n) {
          n == null && (n = document.getElementsByTagName("img"));
          for (var s = ["tif", "tiff", "dng", "cr2", "nef"], l = 0; l < n.length; l++) {
            var h = n[l], u = h.getAttribute("src");
            if (u != null) {
              var d = u.split(".").pop().toLowerCase();
              if (s.indexOf(d) != -1) {
                var m = new XMLHttpRequest();
                r._xhrs.push(m), r._imgs.push(h), m.open("GET", u), m.responseType = "arraybuffer", m.onload = r._imgLoaded, m.send();
              }
            }
          }
        }, r._xhrs = [], r._imgs = [], r._imgLoaded = function(n) {
          var s = r._xhrs.indexOf(n.target), l = r._imgs[s];
          r._xhrs.splice(s, 1), r._imgs.splice(s, 1), l.setAttribute("src", r.bufferToURI(n.target.response));
        }, r.bufferToURI = function(n) {
          var s = r.decode(n), l = s, h = 0, u = l[0];
          s[0].subIFD && (l = l.concat(s[0].subIFD));
          for (var d = 0; d < l.length; d++) {
            var m = l[d];
            if (!(m.t258 == null || m.t258.length < 3)) {
              var p = m.t256 * m.t257;
              p > h && (h = p, u = m);
            }
          }
          r.decodeImage(n, u, s);
          var g = r.toRGBA8(u), M = u.width, k = u.height, w = document.createElement("canvas");
          w.width = M, w.height = k;
          var v = w.getContext("2d"), C = new ImageData(new Uint8ClampedArray(g.buffer), M, k);
          return v.putImageData(C, 0, 0), w.toDataURL();
        }, r._binBE = {
          nextZero: function(n, s) {
            for (; n[s] != 0; ) s++;
            return s;
          },
          readUshort: function(n, s) {
            return n[s] << 8 | n[s + 1];
          },
          readShort: function(n, s) {
            var l = r._binBE.ui8;
            return l[0] = n[s + 1], l[1] = n[s + 0], r._binBE.i16[0];
          },
          readInt: function(n, s) {
            var l = r._binBE.ui8;
            return l[0] = n[s + 3], l[1] = n[s + 2], l[2] = n[s + 1], l[3] = n[s + 0], r._binBE.i32[0];
          },
          readUint: function(n, s) {
            var l = r._binBE.ui8;
            return l[0] = n[s + 3], l[1] = n[s + 2], l[2] = n[s + 1], l[3] = n[s + 0], r._binBE.ui32[0];
          },
          readASCII: function(n, s, l) {
            for (var h = "", u = 0; u < l; u++) h += String.fromCharCode(n[s + u]);
            return h;
          },
          readFloat: function(n, s) {
            for (var l = r._binBE.ui8, h = 0; h < 4; h++) l[h] = n[s + 3 - h];
            return r._binBE.fl32[0];
          },
          readDouble: function(n, s) {
            for (var l = r._binBE.ui8, h = 0; h < 8; h++) l[h] = n[s + 7 - h];
            return r._binBE.fl64[0];
          },
          writeUshort: function(n, s, l) {
            n[s] = l >> 8 & 255, n[s + 1] = l & 255;
          },
          writeInt: function(n, s, l) {
            var h = r._binBE.ui8;
            r._binBE.i32[0] = l, n[s + 3] = h[0], n[s + 2] = h[1], n[s + 1] = h[2], n[s + 0] = h[3];
          },
          writeUint: function(n, s, l) {
            n[s] = l >> 24 & 255, n[s + 1] = l >> 16 & 255, n[s + 2] = l >> 8 & 255, n[s + 3] = l >> 0 & 255;
          },
          writeASCII: function(n, s, l) {
            for (var h = 0; h < l.length; h++) n[s + h] = l.charCodeAt(h);
          },
          writeDouble: function(n, s, l) {
            r._binBE.fl64[0] = l;
            for (var h = 0; h < 8; h++) n[s + h] = r._binBE.ui8[7 - h];
          }
        }, r._binBE.ui8 = new Uint8Array(8), r._binBE.i16 = new Int16Array(r._binBE.ui8.buffer), r._binBE.i32 = new Int32Array(r._binBE.ui8.buffer), r._binBE.ui32 = new Uint32Array(r._binBE.ui8.buffer), r._binBE.fl32 = new Float32Array(r._binBE.ui8.buffer), r._binBE.fl64 = new Float64Array(r._binBE.ui8.buffer), r._binLE = {
          nextZero: r._binBE.nextZero,
          readUshort: function(n, s) {
            return n[s + 1] << 8 | n[s];
          },
          readShort: function(n, s) {
            var l = r._binBE.ui8;
            return l[0] = n[s + 0], l[1] = n[s + 1], r._binBE.i16[0];
          },
          readInt: function(n, s) {
            var l = r._binBE.ui8;
            return l[0] = n[s + 0], l[1] = n[s + 1], l[2] = n[s + 2], l[3] = n[s + 3], r._binBE.i32[0];
          },
          readUint: function(n, s) {
            var l = r._binBE.ui8;
            return l[0] = n[s + 0], l[1] = n[s + 1], l[2] = n[s + 2], l[3] = n[s + 3], r._binBE.ui32[0];
          },
          readASCII: r._binBE.readASCII,
          readFloat: function(n, s) {
            for (var l = r._binBE.ui8, h = 0; h < 4; h++) l[h] = n[s + h];
            return r._binBE.fl32[0];
          },
          readDouble: function(n, s) {
            for (var l = r._binBE.ui8, h = 0; h < 8; h++) l[h] = n[s + h];
            return r._binBE.fl64[0];
          },
          writeUshort: function(n, s, l) {
            n[s] = l & 255, n[s + 1] = l >> 8 & 255;
          },
          writeInt: function(n, s, l) {
            var h = r._binBE.ui8;
            r._binBE.i32[0] = l, n[s + 0] = h[0], n[s + 1] = h[1], n[s + 2] = h[2], n[s + 3] = h[3];
          },
          writeUint: function(n, s, l) {
            n[s] = l >>> 0 & 255, n[s + 1] = l >>> 8 & 255, n[s + 2] = l >>> 16 & 255, n[s + 3] = l >>> 24 & 255;
          },
          writeASCII: r._binBE.writeASCII
        }, r._copyTile = function(n, s, l, h, u, d, m, p) {
          for (var g = Math.min(s, u - m), M = Math.min(l, d - p), k = 0; k < M; k++)
            for (var w = (p + k) * u + m, v = k * s, C = 0; C < g; C++) h[w + C] = n[v + C];
        }, r.LosslessJpegDecode = /* @__PURE__ */ (function() {
          var n, s;
          function l() {
            return n[s++];
          }
          function h() {
            return n[s++] << 8 | n[s++];
          }
          function u(S) {
            for (var b = l(), E = [0, 0, 0, 255], F = [], Z = 8, P = 0; P < 16; P++) F[P] = l();
            for (var P = 0; P < 16; P++)
              for (var D = 0; D < F[P]; D++) {
                var L = d(E, 0, P + 1, 1);
                E[L + 3] = l();
              }
            var q = new Uint8Array(1 << Z);
            S[b] = [new Uint8Array(E), q];
            for (var P = 0; P < 1 << Z; P++) {
              for (var j = Z, J = P, ie = 0, V = 0; E[ie + 3] == 255 && j != 0; )
                V = J >> --j & 1, ie = E[ie + V];
              q[P] = ie;
            }
          }
          function d(S, b, E, F) {
            if (S[b + 3] != 255) return 0;
            if (E == 0) return b;
            for (var Z = 0; Z < 2; Z++) {
              S[b + Z] == 0 && (S[b + Z] = S.length, S.push(0, 0, F, 255));
              var P = d(S, S[b + Z], E - 1, F + 1);
              if (P != 0) return P;
            }
            return 0;
          }
          function m(S) {
            for (var b = S.b, E = S.f; b < 25 && S.a < S.d; ) {
              var F = S.data[S.a++];
              F == 255 && !S.c && S.a++, E = E << 8 | F, b += 8;
            }
            if (b < 0) throw "e";
            S.b = b, S.f = E;
          }
          function p(S, b) {
            return b.b < S && m(b), b.f >> (b.b -= S) & 65535 >> 16 - S;
          }
          function g(S, b) {
            var E = S[0], F = 0, Z = 255, P = 0;
            b.b < 16 && m(b);
            var D = b.f >> b.b - 8 & 255;
            for (F = S[1][D], Z = E[F + 3], b.b -= E[F + 2]; Z == 255; )
              P = b.f >> --b.b & 1, F = E[F + P], Z = E[F + 3];
            return Z;
          }
          function M(S, b) {
            return S < 32768 >> 16 - b && (S += -(1 << b) + 1), S;
          }
          function k(S, b) {
            var E = g(S, b);
            if (E == 0) return 0;
            if (E == 16) return -32768;
            var F = p(E, b);
            return M(F, E);
          }
          function w(S, b, E, F, Z, P) {
            for (var D = 0, L = 0; L < P; L++) {
              for (var q = L * b, j = 0; j < b; j += Z) {
                D++;
                for (var J = 0; J < Z; J++) S[q + j + J] = k(F[J], E);
              }
              if (E.e != 0 && D % E.e == 0 && L != 0) {
                for (var ie = E.a, V = E.data; V[ie] != 255 || !(208 <= V[ie + 1] && V[ie + 1] <= 215); ) ie--;
                E.a = ie + 2, E.f = 0, E.b = 0;
              }
            }
          }
          function v(S, b) {
            return M(p(S, b), S);
          }
          function C(S, b, E, F, Z) {
            for (var P = n.length - s, D = 0; D < P; D += 4) {
              var L = n[s + D];
              n[s + D] = n[s + D + 3], n[s + D + 3] = L;
              var L = n[s + D + 1];
              n[s + D + 1] = n[s + D + 2], n[s + D + 2] = L;
            }
            for (var q = 0; q < Z; q++)
              for (var j = 32768, J = 32768, ie = 0; ie < b; ie += 2) {
                var V = g(F, E), Q = g(F, E);
                V != 0 && (j += v(V, E)), Q != 0 && (J += v(Q, E)), S[q * b + ie] = j & 65535, S[q * b + ie + 1] = J & 65535;
              }
          }
          function B(S) {
            if (n = S, s = 0, h() != 65496) throw "e";
            for (var b = [], E = 0, F = 0, Z = 0, P = [], D = [], L = [], q = 0, j = 0, J = 0; ; ) {
              var ie = h();
              if (ie == 65535) {
                s--;
                continue;
              }
              var V = h();
              if (ie == 65475) {
                F = l(), j = h(), J = h(), q = l();
                for (var Q = 0; Q < q; Q++) {
                  var ee = l(), xe = l(), ke = l();
                  if (ke != 0) throw "e";
                  b[ee] = [Q, xe >> 4, xe & 15];
                }
              } else if (ie == 65476)
                for (var ve = s + V - 2; s < ve; ) u(D);
              else if (ie == 65498) {
                s++;
                for (var Q = 0; Q < q; Q++) {
                  var H = l(), W = b[H];
                  L[W[0]] = D[l() >>> 4], P[W[0]] = W.slice(1);
                }
                E = l(), s += 2;
                break;
              } else ie == 65501 ? Z = h() : s += V - 2;
            }
            var U = F > 8 ? Uint16Array : Uint8Array, re = new U(j * J * q), ae = { b: 0, f: 0, c: E == 8, a: s, data: n, d: n.length, e: Z };
            if (ae.c) C(re, J * q, ae, L[0], j);
            else {
              for (var we = [], Ae = 0, he = 0, Q = 0; Q < q; Q++) {
                var ue = P[Q], ce = ue[0], ye = ue[1];
                ce > Ae && (Ae = ce), ye > he && (he = ye), we.push(ce * ye);
              }
              if (Ae != 1 || he != 1) {
                if (q != 3 || we[1] != 1 || we[2] != 1 || Ae != 2 || he != 1 && he != 2) throw "e";
                for (var Se = [], Ie = 0, Q = 0; Q < q; Q++) {
                  for (var Be = 0; Be < we[Q]; Be++) Se.push(L[Q]);
                  Ie += we[Q];
                }
                var Ce = J / Ae, se = j / he, Fe = Ce * se;
                w(re, Ce * Ie, ae, Se, Ie, se), A(re, E, Ce, se, Ie - 2, Ie, Ie, F);
                var Pe = new Uint16Array(Fe * we[0]);
                if (Ae == 2 && he == 2) {
                  for (var Q = 0; Q < Fe; Q++)
                    Pe[4 * Q] = re[6 * Q], Pe[4 * Q + 1] = re[6 * Q + 1], Pe[4 * Q + 2] = re[6 * Q + 2], Pe[4 * Q + 3] = re[6 * Q + 3];
                  A(Pe, E, Ce * 4, se, 0, 1, 1, F);
                  for (var Q = 0; Q < Fe; Q++)
                    re[6 * Q] = Pe[4 * Q], re[6 * Q + 1] = Pe[4 * Q + 1], re[6 * Q + 2] = Pe[4 * Q + 2], re[6 * Q + 3] = Pe[4 * Q + 3];
                }
                if (Ae == 2 && he == 1) {
                  for (var Q = 0; Q < Fe; Q++)
                    Pe[2 * Q] = re[4 * Q], Pe[2 * Q + 1] = re[4 * Q + 1];
                  A(Pe, E, Ce * 2, se, 0, 1, 1, F);
                  for (var Q = 0; Q < Fe; Q++)
                    re[4 * Q] = Pe[2 * Q], re[4 * Q + 1] = Pe[2 * Q + 1];
                }
                for (var Te = re.slice(0), ye = 0; ye < j; ye++)
                  if (he == 2) for (var ce = 0; ce < J; ce++) {
                    var ze = (ye * J + ce) * q, We = ((ye >>> 1) * Ce + (ce >>> 1)) * Ie, He = (ye & 1) * 2 + (ce & 1);
                    re[ze] = Te[We + He], re[ze + 1] = Te[We + 4], re[ze + 2] = Te[We + 5];
                  }
                  else for (var ce = 0; ce < J; ce++) {
                    var ze = (ye * J + ce) * q, We = (ye * Ce + (ce >>> 1)) * Ie, He = ce & 1;
                    re[ze] = Te[We + He], re[ze + 1] = Te[We + 2], re[ze + 2] = Te[We + 3];
                  }
              } else if (w(re, J * q, ae, L, q, j), Z == 0) A(re, E, J, j, 0, q, q, F);
              else
                for (var Ne = Math.floor(Z / J), ye = 0; ye < j; ye += Ne) {
                  var Ge = re.slice(ye * J * q, (ye + Ne) * J * q);
                  A(Ge, E, J, Ne, 0, q, q, F), re.set(Ge, ye * J * q);
                }
            }
            return re;
          }
          function A(S, b, E, F, Z, P, D, L) {
            for (var q = E * D, j = Z; j < P; j++) S[j] += 1 << L - 1;
            for (var J = D; J < q; J += D) for (var j = Z; j < P; j++) S[J + j] += S[J + j - D];
            for (var ie = 1; ie < F; ie++) {
              for (var V = ie * q, j = Z; j < P; j++) S[V + j] += S[V + j - q];
              for (var J = D; J < q; J += D)
                for (var j = Z; j < P; j++) {
                  var Q = V + J + j, ee = Q - q, xe = S[Q - D], ke = 0;
                  if (b == 0) ke = 0;
                  else if (b == 1) ke = xe;
                  else if (b == 2) ke = S[ee];
                  else if (b == 3) ke = S[ee - D];
                  else if (b == 4) ke = xe + (S[ee] - S[ee - D]);
                  else if (b == 5) ke = xe + (S[ee] - S[ee - D] >>> 1);
                  else if (b == 6) ke = S[ee] + (xe - S[ee - D] >>> 1);
                  else if (b == 7) ke = xe + S[ee] >>> 1;
                  else throw b;
                  S[Q] += ke;
                }
            }
          }
          return B;
        })(), (function() {
          var n = 0, s = 1, l = 2, h = 3, u = 4, d = 5, m = 6, p = 7, g = 8, M = 9, k = 10, w = 11, v = 12, C = 13, B = 14, A = 15, S = 16, b = 17, E = 18;
          function F(H) {
            var W = r._binBE.readUshort, U = { b: W(H, 0), i: H[2], C: H[3], u: H[4], q: W(H, 5), k: W(H, 7), e: W(H, 9), l: W(H, 11), s: H[13], d: W(H, 14) };
            if (U.b != 18771 || U.i > 1 || U.q < 6 || U.q % 6 || U.e < 768 || U.e % 24 || U.l != 768 || U.k < U.l || U.k % U.l || U.k - U.e >= U.l || U.s > 16 || U.s != U.k / U.l || U.s != Math.ceil(U.e / U.l) || U.d != U.q / 6 || U.u != 12 && U.u != 14 && U.u != 16 || U.C != 16 && U.C != 0)
              throw "Invalid data";
            if (U.i == 0)
              throw "Not implemented. We need this file!";
            return U.h = U.C == 16, U.m = (U.h ? U.l * 2 / 3 : U.l >>> 1) | 0, U.A = U.m + 2, U.f = 64, U.g = (1 << U.u) - 1, U.n = 4 * U.u, U;
          }
          function Z(H, W) {
            var U = new Array(W.s), re = 4 * W.s, ae = 16 + re;
            re & 12 && (ae += 16 - (re & 12));
            for (var we = 0, Ae = 16; we < W.s; Ae += 4) {
              var he = r._binBE.readUint(H, Ae);
              U[we] = H.slice(ae, ae + he), U[we].j = 0, U[we].a = 0, ae += he, we++;
            }
            if (ae != H.length) throw "Invalid data";
            return U;
          }
          function P(H, W) {
            for (var U = -W[4], re = 0; U <= W[4]; re++, U++)
              H[re] = U <= -276 ? -4 : U <= -67 ? -3 : U <= -18 ? -2 : U < -0 ? -1 : U <= W[0] ? 0 : U < W[1] ? 1 : U < W[2] ? 2 : U < W[3] ? 3 : 4;
          }
          function D(H, W, U) {
            var re = [W, 3 * W + 18, 5 * W + 67, 7 * W + 276, U];
            H.o = W, H.w = (re[4] + 2 * W) / (2 * W + 1) + 1 | 0, H.v = Math.ceil(Math.log2(H.w)), H.t = 9, P(H.c, re);
          }
          function L(H) {
            var W = { c: new Int8Array(2 << H.u) };
            return D(W, 0, H.g), W;
          }
          function q(H) {
            for (var W = [[], [], []], U = Math.max(2, H.w + 32 >>> 6), re = 0; re < 3; re++)
              for (var ae = 0; ae < 41; ae++)
                W[re][ae] = [U, 1];
            return W;
          }
          function j(H) {
            for (var W = -1, U = 0; !U; W++)
              U = H[H.j] >>> 7 - H.a & 1, H.a++, H.a &= 7, H.a || H.j++;
            return W;
          }
          function J(H, W) {
            var U = 0, re = 8 - H.a;
            if (H.j, H.a, W) {
              if (W >= re)
                do
                  U <<= re, W -= re, U |= H[H.j] & (1 << re) - 1, H.j++, re = 8;
                while (W >= 8);
              W && (U <<= W, re -= W, U |= H[H.j] >>> re & (1 << W) - 1), H.a = 8 - re;
            }
            return U;
          }
          function ie(H, W) {
            var U = 0;
            if (W < H)
              for (; U <= 14 && W << ++U < H; ) ;
            return U;
          }
          function V(H, W, U, re, ae, we, Ae, he) {
            he == null && (he = 0);
            var ue = we + 1, ce = ue % 2, ye = 0, Se, Ie, Be = re[ae], Ce = re[ae - 1], se = re[ae - 2][ue], Fe = Ce[ue - 1], Pe = Ce[ue], Te = Ce[ue + 1], ze = Be[ue - 1], We = Be[ue + 1], He = Math.abs, Ne, Ge, Le, Oe;
            if (ce && (Ne = He(Te - Pe), Ge = He(se - Pe), Le = He(Fe - Pe)), ce) {
              if (Oe = Ne > Le && Ge < Ne ? se + Fe : Ne < Le && Ge < Le ? se + Te : Te + Fe, Oe = Oe + 2 * Pe >>> 2, he) {
                Be[ue] = Oe;
                return;
              }
              Se = W.t * W.c[H.g + Pe - se] + W.c[H.g + Fe - Pe];
            } else
              Oe = Pe > Fe && Pe > Te || Pe < Fe && Pe < Te ? We + ze + 2 * Pe >>> 2 : ze + We >>> 1, Se = W.t * W.c[H.g + Pe - Fe] + W.c[H.g + Fe - ze];
            Ie = He(Se);
            var Ke = j(U);
            if (Ke < H.n - W.v - 1) {
              var O = ie(Ae[Ie][0], Ae[Ie][1]);
              ye = J(U, O) + (Ke << O);
            } else
              ye = J(U, W.v) + 1;
            ye = ye & 1 ? -1 - (ye >>> 1) : ye >>> 1, Ae[Ie][0] += He(ye), Ae[Ie][1] == H.f && (Ae[Ie][0] >>>= 1, Ae[Ie][1] >>>= 1), Ae[Ie][1]++, Oe = Se < 0 ? Oe - ye : Oe + ye, H.i && (Oe < 0 ? Oe += W.w : Oe > H.g && (Oe -= W.w)), Be[ue] = Oe >= 0 ? Math.min(Oe, H.g) : 0;
          }
          function Q(H, W, U) {
            for (var re = H[0].length, ae = W; ae <= U; ae++)
              H[ae][0] = H[ae - 1][1], H[ae][re - 1] = H[ae - 1][re - 2];
          }
          function ee(H) {
            Q(H, p, v), Q(H, l, u), Q(H, A, b);
          }
          function xe(H, W, U, re, ae, we, Ae, he, ue, ce, ye, Se, Ie) {
            for (var Be = 0, Ce = 1, se = ae < C && ae > u; Ce < H.m; )
              Be < H.m && (V(H, W, U, re, ae, Be, Ae[ue], H.h && (se && ce || !se && (ye || (Be & Se) == Ie))), V(H, W, U, re, we, Be, Ae[ue], H.h && (!se && ce || se && (ye || (Be & Se) == Ie))), Be += 2), Be > 8 && (V(H, W, U, re, ae, Ce, he[ue]), V(H, W, U, re, we, Ce, he[ue]), Ce += 2);
            ee(re);
          }
          function ke(H, W, U, re, ae, we) {
            xe(H, W, U, re, l, p, ae, we, 0, 0, 1, 0, 8), xe(H, W, U, re, g, A, ae, we, 1, 0, 1, 0, 8), xe(H, W, U, re, h, M, ae, we, 2, 1, 0, 3, 0), xe(H, W, U, re, k, S, ae, we, 0, 0, 0, 3, 2), xe(H, W, U, re, u, w, ae, we, 1, 0, 0, 3, 2), xe(H, W, U, re, v, b, ae, we, 2, 1, 0, 3, 0);
          }
          function ve(H, W, U, re, ae, we) {
            var Ae = we.length, he = H.l;
            ae + 1 == H.s && (he = H.e - ae * H.l);
            for (var ue = 6 * H.e * re + ae * H.l, ce = 0; ce < 6; ce++) {
              for (var ye = 0; ye < he; ye++) {
                var Se = we[ce % Ae][ye % Ae], Ie;
                Se == 0 ? Ie = l + (ce >>> 1) : Se == 2 ? Ie = A + (ce >>> 1) : Ie = p + ce;
                var Be = H.h ? (ye * 2 / 3 & 2147483646 | ye % 3 & 1) + (ye % 3 >>> 1) : ye >>> 1;
                W[ue + ye] = U[Ie][Be + 1];
              }
              ue += H.e;
            }
          }
          r._decompressRAF = function(H, W) {
            var U = F(H), re = Z(H, U), ae = L(U), we = new Int16Array(U.e * U.q);
            W == null && (W = U.h ? [[1, 1, 0, 1, 1, 2], [1, 1, 2, 1, 1, 0], [2, 0, 1, 0, 2, 1], [1, 1, 2, 1, 1, 0], [1, 1, 0, 1, 1, 2], [0, 2, 1, 2, 0, 1]] : [[0, 1], [3, 2]]);
            for (var Ae = [[n, h], [s, u], [d, w], [m, v], [C, S], [B, b]], he = [], ue = 0; ue < E; ue++)
              he[ue] = new Uint16Array(U.A);
            for (var ce = 0; ce < U.s; ce++) {
              for (var ye = q(ae), Se = q(ae), ue = 0; ue < E; ue++)
                for (var Ie = 0; Ie < U.A; Ie++)
                  he[ue][Ie] = 0;
              for (var Be = 0; Be < U.d; Be++) {
                ke(U, ae, re[ce], he, ye, Se);
                for (var ue = 0; ue < 6; ue++)
                  for (var Ie = 0; Ie < U.A; Ie++)
                    he[Ae[ue][0]][Ie] = he[Ae[ue][1]][Ie];
                ve(U, we, he, Be, ce, W);
                for (var ue = l; ue < E; ue++)
                  if ([d, m, C, B].indexOf(ue) == -1)
                    for (var Ie = 0; Ie < U.A; Ie++)
                      he[ue][Ie] = 0;
                ee(he);
              }
            }
            return we;
          };
        })();
      })(t, i);
    })();
  })(UTIF)), UTIF.exports;
}
var UTIFExports = requireUTIF();
const utif = /* @__PURE__ */ getDefaultExportFromCjs(UTIFExports);
function getDimensionValue(e) {
  return typeof e == "number" ? e : e instanceof Uint8Array ? e[0] : typeof e[0] == "string" ? parseInt(e[0]) : e[0];
}
function tiff() {
  return {
    mime: "image/tiff",
    encode: (e) => {
      const t = utif.encodeImage(e.data, e.width, e.height);
      return Buffer.from(t);
    },
    decode: (e) => {
      const t = utif.decode(e), i = t[0];
      if (!i)
        throw new Error("No page found in TIFF");
      if (!i.t256)
        throw new Error("No image width found in TIFF");
      if (!i.t257)
        throw new Error("No image height found in TIFF");
      t.forEach((r) => {
        utif.decodeImage(e, r);
      });
      const a = utif.toRGBA8(i);
      return {
        data: Buffer.from(a),
        width: getDimensionValue(i.t256),
        height: getDimensionValue(i.t257)
      };
    }
  };
}
var util$1;
(function(e) {
  e.assertEqual = (r) => {
  };
  function t(r) {
  }
  e.assertIs = t;
  function i(r) {
    throw new Error();
  }
  e.assertNever = i, e.arrayToEnum = (r) => {
    const o = {};
    for (const n of r)
      o[n] = n;
    return o;
  }, e.getValidEnumValues = (r) => {
    const o = e.objectKeys(r).filter((s) => typeof r[r[s]] != "number"), n = {};
    for (const s of o)
      n[s] = r[s];
    return e.objectValues(n);
  }, e.objectValues = (r) => e.objectKeys(r).map(function(o) {
    return r[o];
  }), e.objectKeys = typeof Object.keys == "function" ? (r) => Object.keys(r) : (r) => {
    const o = [];
    for (const n in r)
      Object.prototype.hasOwnProperty.call(r, n) && o.push(n);
    return o;
  }, e.find = (r, o) => {
    for (const n of r)
      if (o(n))
        return n;
  }, e.isInteger = typeof Number.isInteger == "function" ? (r) => Number.isInteger(r) : (r) => typeof r == "number" && Number.isFinite(r) && Math.floor(r) === r;
  function a(r, o = " | ") {
    return r.map((n) => typeof n == "string" ? `'${n}'` : n).join(o);
  }
  e.joinValues = a, e.jsonStringifyReplacer = (r, o) => typeof o == "bigint" ? o.toString() : o;
})(util$1 || (util$1 = {}));
var objectUtil;
(function(e) {
  e.mergeShapes = (t, i) => ({
    ...t,
    ...i
    // second overwrites first
  });
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util$1.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), getParsedType = (e) => {
  switch (typeof e) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(e) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      return Array.isArray(e) ? ZodParsedType.array : e === null ? ZodParsedType.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? ZodParsedType.promise : typeof Map < "u" && e instanceof Map ? ZodParsedType.map : typeof Set < "u" && e instanceof Set ? ZodParsedType.set : typeof Date < "u" && e instanceof Date ? ZodParsedType.date : ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
}, ZodIssueCode = util$1.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), quotelessJson = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (a) => {
      this.issues = [...this.issues, a];
    }, this.addIssues = (a = []) => {
      this.issues = [...this.issues, ...a];
    };
    const i = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, i) : this.__proto__ = i, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const i = t || function(o) {
      return o.message;
    }, a = { _errors: [] }, r = (o) => {
      for (const n of o.issues)
        if (n.code === "invalid_union")
          n.unionErrors.map(r);
        else if (n.code === "invalid_return_type")
          r(n.returnTypeError);
        else if (n.code === "invalid_arguments")
          r(n.argumentsError);
        else if (n.path.length === 0)
          a._errors.push(i(n));
        else {
          let s = a, l = 0;
          for (; l < n.path.length; ) {
            const h = n.path[l];
            l === n.path.length - 1 ? (s[h] = s[h] || { _errors: [] }, s[h]._errors.push(i(n))) : s[h] = s[h] || { _errors: [] }, s = s[h], l++;
          }
        }
    };
    return r(this), a;
  }
  static assert(t) {
    if (!(t instanceof ZodError))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util$1.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (i) => i.message) {
    const i = {}, a = [];
    for (const r of this.issues)
      if (r.path.length > 0) {
        const o = r.path[0];
        i[o] = i[o] || [], i[o].push(t(r));
      } else
        a.push(t(r));
    return { formErrors: a, fieldErrors: i };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (e) => new ZodError(e);
const errorMap = (e, t) => {
  let i;
  switch (e.code) {
    case ZodIssueCode.invalid_type:
      e.received === ZodParsedType.undefined ? i = "Required" : i = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ZodIssueCode.invalid_literal:
      i = `Invalid literal value, expected ${JSON.stringify(e.expected, util$1.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      i = `Unrecognized key(s) in object: ${util$1.joinValues(e.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      i = "Invalid input";
      break;
    case ZodIssueCode.invalid_union_discriminator:
      i = `Invalid discriminator value. Expected ${util$1.joinValues(e.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      i = `Invalid enum value. Expected ${util$1.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      i = "Invalid function arguments";
      break;
    case ZodIssueCode.invalid_return_type:
      i = "Invalid function return type";
      break;
    case ZodIssueCode.invalid_date:
      i = "Invalid date";
      break;
    case ZodIssueCode.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (i = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (i = `${i} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? i = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? i = `Invalid input: must end with "${e.validation.endsWith}"` : util$1.assertNever(e.validation) : e.validation !== "regex" ? i = `Invalid ${e.validation}` : i = "Invalid";
      break;
    case ZodIssueCode.too_small:
      e.type === "array" ? i = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? i = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? i = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? i = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? i = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : i = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      e.type === "array" ? i = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? i = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? i = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? i = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? i = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : i = "Invalid input";
      break;
    case ZodIssueCode.custom:
      i = "Invalid input";
      break;
    case ZodIssueCode.invalid_intersection_types:
      i = "Intersection results could not be merged";
      break;
    case ZodIssueCode.not_multiple_of:
      i = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      i = "Number must be finite";
      break;
    default:
      i = t.defaultError, util$1.assertNever(e);
  }
  return { message: i };
};
let overrideErrorMap = errorMap;
function setErrorMap(e) {
  overrideErrorMap = e;
}
function getErrorMap() {
  return overrideErrorMap;
}
const makeIssue = (e) => {
  const { data: t, path: i, errorMaps: a, issueData: r } = e, o = [...i, ...r.path || []], n = {
    ...r,
    path: o
  };
  if (r.message !== void 0)
    return {
      ...r,
      path: o,
      message: r.message
    };
  let s = "";
  const l = a.filter((h) => !!h).slice().reverse();
  for (const h of l)
    s = h(n, { data: t, defaultError: s }).message;
  return {
    ...r,
    path: o,
    message: s
  };
}, EMPTY_PATH = [];
function addIssueToContext(e, t) {
  const i = getErrorMap(), a = makeIssue({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      // contextual error map is first priority
      e.schemaErrorMap,
      // then schema-bound map if available
      i,
      // then global override map
      i === errorMap ? void 0 : errorMap
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(a);
}
class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, i) {
    const a = [];
    for (const r of i) {
      if (r.status === "aborted")
        return INVALID;
      r.status === "dirty" && t.dirty(), a.push(r.value);
    }
    return { status: t.value, value: a };
  }
  static async mergeObjectAsync(t, i) {
    const a = [];
    for (const r of i) {
      const o = await r.key, n = await r.value;
      a.push({
        key: o,
        value: n
      });
    }
    return ParseStatus.mergeObjectSync(t, a);
  }
  static mergeObjectSync(t, i) {
    const a = {};
    for (const r of i) {
      const { key: o, value: n } = r;
      if (o.status === "aborted" || n.status === "aborted")
        return INVALID;
      o.status === "dirty" && t.dirty(), n.status === "dirty" && t.dirty(), o.value !== "__proto__" && (typeof n.value < "u" || r.alwaysSet) && (a[o.value] = n.value);
    }
    return { status: t.value, value: a };
  }
}
const INVALID = Object.freeze({
  status: "aborted"
}), DIRTY = (e) => ({ status: "dirty", value: e }), OK = (e) => ({ status: "valid", value: e }), isAborted = (e) => e.status === "aborted", isDirty = (e) => e.status === "dirty", isValid = (e) => e.status === "valid", isAsync = (e) => typeof Promise < "u" && e instanceof Promise;
var errorUtil;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(errorUtil || (errorUtil = {}));
class ParseInputLazyPath {
  constructor(t, i, a, r) {
    this._cachedPath = [], this.parent = t, this.data = i, this._path = a, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const handleResult = (e, t) => {
  if (isValid(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const i = new ZodError(e.common.issues);
      return this._error = i, this._error;
    }
  };
};
function processCreateParams(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: i, required_error: a, description: r } = e;
  if (t && (i || a))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: r } : { errorMap: (n, s) => {
    const { message: l } = e;
    return n.code === "invalid_enum_value" ? { message: l ?? s.defaultError } : typeof s.data > "u" ? { message: l ?? a ?? s.defaultError } : n.code !== "invalid_type" ? { message: s.defaultError } : { message: l ?? i ?? s.defaultError };
  }, description: r };
}
class ZodType {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return getParsedType(t.data);
  }
  _getOrReturnCtx(t, i) {
    return i || {
      common: t.parent.common,
      data: t.data,
      parsedType: getParsedType(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: getParsedType(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const i = this._parse(t);
    if (isAsync(i))
      throw new Error("Synchronous parse encountered promise.");
    return i;
  }
  _parseAsync(t) {
    const i = this._parse(t);
    return Promise.resolve(i);
  }
  parse(t, i) {
    const a = this.safeParse(t, i);
    if (a.success)
      return a.data;
    throw a.error;
  }
  safeParse(t, i) {
    const a = {
      common: {
        issues: [],
        async: (i == null ? void 0 : i.async) ?? !1,
        contextualErrorMap: i == null ? void 0 : i.errorMap
      },
      path: (i == null ? void 0 : i.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: getParsedType(t)
    }, r = this._parseSync({ data: t, path: a.path, parent: a });
    return handleResult(a, r);
  }
  "~validate"(t) {
    var a, r;
    const i = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: getParsedType(t)
    };
    if (!this["~standard"].async)
      try {
        const o = this._parseSync({ data: t, path: [], parent: i });
        return isValid(o) ? {
          value: o.value
        } : {
          issues: i.common.issues
        };
      } catch (o) {
        (r = (a = o == null ? void 0 : o.message) == null ? void 0 : a.toLowerCase()) != null && r.includes("encountered") && (this["~standard"].async = !0), i.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: i }).then((o) => isValid(o) ? {
      value: o.value
    } : {
      issues: i.common.issues
    });
  }
  async parseAsync(t, i) {
    const a = await this.safeParseAsync(t, i);
    if (a.success)
      return a.data;
    throw a.error;
  }
  async safeParseAsync(t, i) {
    const a = {
      common: {
        issues: [],
        contextualErrorMap: i == null ? void 0 : i.errorMap,
        async: !0
      },
      path: (i == null ? void 0 : i.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: getParsedType(t)
    }, r = this._parse({ data: t, path: a.path, parent: a }), o = await (isAsync(r) ? r : Promise.resolve(r));
    return handleResult(a, o);
  }
  refine(t, i) {
    const a = (r) => typeof i == "string" || typeof i > "u" ? { message: i } : typeof i == "function" ? i(r) : i;
    return this._refinement((r, o) => {
      const n = t(r), s = () => o.addIssue({
        code: ZodIssueCode.custom,
        ...a(r)
      });
      return typeof Promise < "u" && n instanceof Promise ? n.then((l) => l ? !0 : (s(), !1)) : n ? !0 : (s(), !1);
    });
  }
  refinement(t, i) {
    return this._refinement((a, r) => t(a) ? !0 : (r.addIssue(typeof i == "function" ? i(a, r) : i), !1));
  }
  _refinement(t) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (i) => this["~validate"](i)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(t) {
    return ZodUnion.create([this, t], this._def);
  }
  and(t) {
    return ZodIntersection.create(this, t, this._def);
  }
  transform(t) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const i = typeof t == "function" ? t : () => t;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: i,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(t) {
    const i = typeof t == "function" ? t : () => t;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: i,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(t) {
    const i = this.constructor;
    return new i({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return ZodPipeline.create(this, t);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const cuidRegex = /^c[^\s-]{8,}$/i, cuid2Regex = /^[0-9a-z]+$/, ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i, uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, nanoidRegex = /^[a-z0-9_-]{21}$/i, jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, _emojiRegex = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let emojiRegex;
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, dateRegexSource = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const i = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${i}`;
}
function timeRegex(e) {
  return new RegExp(`^${timeRegexSource(e)}$`);
}
function datetimeRegex(e) {
  let t = `${dateRegexSource}T${timeRegexSource(e)}`;
  const i = [];
  return i.push(e.local ? "Z?" : "Z"), e.offset && i.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${i.join("|")})`, new RegExp(`^${t}$`);
}
function isValidIP(e, t) {
  return !!((t === "v4" || !t) && ipv4Regex.test(e) || (t === "v6" || !t) && ipv6Regex.test(e));
}
function isValidJWT(e, t) {
  if (!jwtRegex.test(e))
    return !1;
  try {
    const [i] = e.split(".");
    if (!i)
      return !1;
    const a = i.replace(/-/g, "+").replace(/_/g, "/").padEnd(i.length + (4 - i.length % 4) % 4, "="), r = JSON.parse(atob(a));
    return !(typeof r != "object" || r === null || "typ" in r && (r == null ? void 0 : r.typ) !== "JWT" || !r.alg || t && r.alg !== t);
  } catch {
    return !1;
  }
}
function isValidCidr(e, t) {
  return !!((t === "v4" || !t) && ipv4CidrRegex.test(e) || (t === "v6" || !t) && ipv6CidrRegex.test(e));
}
class ZodString extends ZodType {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== ZodParsedType.string) {
      const o = this._getOrReturnCtx(t);
      return addIssueToContext(o, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: o.parsedType
      }), INVALID;
    }
    const a = new ParseStatus();
    let r;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value && (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
          code: ZodIssueCode.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), a.dirty());
      else if (o.kind === "max")
        t.data.length > o.value && (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
          code: ZodIssueCode.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), a.dirty());
      else if (o.kind === "length") {
        const n = t.data.length > o.value, s = t.data.length < o.value;
        (n || s) && (r = this._getOrReturnCtx(t, r), n ? addIssueToContext(r, {
          code: ZodIssueCode.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : s && addIssueToContext(r, {
          code: ZodIssueCode.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), a.dirty());
      } else if (o.kind === "email")
        emailRegex.test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
          validation: "email",
          code: ZodIssueCode.invalid_string,
          message: o.message
        }), a.dirty());
      else if (o.kind === "emoji")
        emojiRegex || (emojiRegex = new RegExp(_emojiRegex, "u")), emojiRegex.test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
          validation: "emoji",
          code: ZodIssueCode.invalid_string,
          message: o.message
        }), a.dirty());
      else if (o.kind === "uuid")
        uuidRegex.test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
          validation: "uuid",
          code: ZodIssueCode.invalid_string,
          message: o.message
        }), a.dirty());
      else if (o.kind === "nanoid")
        nanoidRegex.test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
          validation: "nanoid",
          code: ZodIssueCode.invalid_string,
          message: o.message
        }), a.dirty());
      else if (o.kind === "cuid")
        cuidRegex.test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
          validation: "cuid",
          code: ZodIssueCode.invalid_string,
          message: o.message
        }), a.dirty());
      else if (o.kind === "cuid2")
        cuid2Regex.test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
          validation: "cuid2",
          code: ZodIssueCode.invalid_string,
          message: o.message
        }), a.dirty());
      else if (o.kind === "ulid")
        ulidRegex.test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
          validation: "ulid",
          code: ZodIssueCode.invalid_string,
          message: o.message
        }), a.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: o.message
          }), a.dirty();
        }
      else o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        validation: "regex",
        code: ZodIssueCode.invalid_string,
        message: o.message
      }), a.dirty())) : o.kind === "trim" ? t.data = t.data.trim() : o.kind === "includes" ? t.data.includes(o.value, o.position) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        code: ZodIssueCode.invalid_string,
        validation: { includes: o.value, position: o.position },
        message: o.message
      }), a.dirty()) : o.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : o.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : o.kind === "startsWith" ? t.data.startsWith(o.value) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        code: ZodIssueCode.invalid_string,
        validation: { startsWith: o.value },
        message: o.message
      }), a.dirty()) : o.kind === "endsWith" ? t.data.endsWith(o.value) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        code: ZodIssueCode.invalid_string,
        validation: { endsWith: o.value },
        message: o.message
      }), a.dirty()) : o.kind === "datetime" ? datetimeRegex(o).test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        code: ZodIssueCode.invalid_string,
        validation: "datetime",
        message: o.message
      }), a.dirty()) : o.kind === "date" ? dateRegex.test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        code: ZodIssueCode.invalid_string,
        validation: "date",
        message: o.message
      }), a.dirty()) : o.kind === "time" ? timeRegex(o).test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        code: ZodIssueCode.invalid_string,
        validation: "time",
        message: o.message
      }), a.dirty()) : o.kind === "duration" ? durationRegex.test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        validation: "duration",
        code: ZodIssueCode.invalid_string,
        message: o.message
      }), a.dirty()) : o.kind === "ip" ? isValidIP(t.data, o.version) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        validation: "ip",
        code: ZodIssueCode.invalid_string,
        message: o.message
      }), a.dirty()) : o.kind === "jwt" ? isValidJWT(t.data, o.alg) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        validation: "jwt",
        code: ZodIssueCode.invalid_string,
        message: o.message
      }), a.dirty()) : o.kind === "cidr" ? isValidCidr(t.data, o.version) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        validation: "cidr",
        code: ZodIssueCode.invalid_string,
        message: o.message
      }), a.dirty()) : o.kind === "base64" ? base64Regex.test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        validation: "base64",
        code: ZodIssueCode.invalid_string,
        message: o.message
      }), a.dirty()) : o.kind === "base64url" ? base64urlRegex.test(t.data) || (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        validation: "base64url",
        code: ZodIssueCode.invalid_string,
        message: o.message
      }), a.dirty()) : util$1.assertNever(o);
    return { status: a.value, value: t.data };
  }
  _regex(t, i, a) {
    return this.refinement((r) => t.test(r), {
      validation: i,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(a)
    });
  }
  _addCheck(t) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(t) });
  }
  datetime(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (t == null ? void 0 : t.offset) ?? !1,
      local: (t == null ? void 0 : t.local) ?? !1,
      ...errorUtil.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...errorUtil.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(t) });
  }
  regex(t, i) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...errorUtil.errToObj(i)
    });
  }
  includes(t, i) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: i == null ? void 0 : i.position,
      ...errorUtil.errToObj(i == null ? void 0 : i.message)
    });
  }
  startsWith(t, i) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...errorUtil.errToObj(i)
    });
  }
  endsWith(t, i) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...errorUtil.errToObj(i)
    });
  }
  min(t, i) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...errorUtil.errToObj(i)
    });
  }
  max(t, i) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...errorUtil.errToObj(i)
    });
  }
  length(t, i) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...errorUtil.errToObj(i)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, errorUtil.errToObj(t));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "min" && (t === null || i.value > t) && (t = i.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "max" && (t === null || i.value < t) && (t = i.value);
    return t;
  }
}
ZodString.create = (e) => new ZodString({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...processCreateParams(e)
});
function floatSafeRemainder(e, t) {
  const i = (e.toString().split(".")[1] || "").length, a = (t.toString().split(".")[1] || "").length, r = i > a ? i : a, o = Number.parseInt(e.toFixed(r).replace(".", "")), n = Number.parseInt(t.toFixed(r).replace(".", ""));
  return o % n / 10 ** r;
}
class ZodNumber extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== ZodParsedType.number) {
      const o = this._getOrReturnCtx(t);
      return addIssueToContext(o, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: o.parsedType
      }), INVALID;
    }
    let a;
    const r = new ParseStatus();
    for (const o of this._def.checks)
      o.kind === "int" ? util$1.isInteger(t.data) || (a = this._getOrReturnCtx(t, a), addIssueToContext(a, {
        code: ZodIssueCode.invalid_type,
        expected: "integer",
        received: "float",
        message: o.message
      }), r.dirty()) : o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (a = this._getOrReturnCtx(t, a), addIssueToContext(a, {
        code: ZodIssueCode.too_small,
        minimum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), r.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (a = this._getOrReturnCtx(t, a), addIssueToContext(a, {
        code: ZodIssueCode.too_big,
        maximum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), r.dirty()) : o.kind === "multipleOf" ? floatSafeRemainder(t.data, o.value) !== 0 && (a = this._getOrReturnCtx(t, a), addIssueToContext(a, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), r.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (a = this._getOrReturnCtx(t, a), addIssueToContext(a, {
        code: ZodIssueCode.not_finite,
        message: o.message
      }), r.dirty()) : util$1.assertNever(o);
    return { status: r.value, value: t.data };
  }
  gte(t, i) {
    return this.setLimit("min", t, !0, errorUtil.toString(i));
  }
  gt(t, i) {
    return this.setLimit("min", t, !1, errorUtil.toString(i));
  }
  lte(t, i) {
    return this.setLimit("max", t, !0, errorUtil.toString(i));
  }
  lt(t, i) {
    return this.setLimit("max", t, !1, errorUtil.toString(i));
  }
  setLimit(t, i, a, r) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: i,
          inclusive: a,
          message: errorUtil.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(t)
    });
  }
  multipleOf(t, i) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: errorUtil.toString(i)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "min" && (t === null || i.value > t) && (t = i.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "max" && (t === null || i.value < t) && (t = i.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && util$1.isInteger(t.value));
  }
  get isFinite() {
    let t = null, i = null;
    for (const a of this._def.checks) {
      if (a.kind === "finite" || a.kind === "int" || a.kind === "multipleOf")
        return !0;
      a.kind === "min" ? (i === null || a.value > i) && (i = a.value) : a.kind === "max" && (t === null || a.value < t) && (t = a.value);
    }
    return Number.isFinite(i) && Number.isFinite(t);
  }
}
ZodNumber.create = (e) => new ZodNumber({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...processCreateParams(e)
});
class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== ZodParsedType.bigint)
      return this._getInvalidInput(t);
    let a;
    const r = new ParseStatus();
    for (const o of this._def.checks)
      o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (a = this._getOrReturnCtx(t, a), addIssueToContext(a, {
        code: ZodIssueCode.too_small,
        type: "bigint",
        minimum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), r.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (a = this._getOrReturnCtx(t, a), addIssueToContext(a, {
        code: ZodIssueCode.too_big,
        type: "bigint",
        maximum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), r.dirty()) : o.kind === "multipleOf" ? t.data % o.value !== BigInt(0) && (a = this._getOrReturnCtx(t, a), addIssueToContext(a, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), r.dirty()) : util$1.assertNever(o);
    return { status: r.value, value: t.data };
  }
  _getInvalidInput(t) {
    const i = this._getOrReturnCtx(t);
    return addIssueToContext(i, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: i.parsedType
    }), INVALID;
  }
  gte(t, i) {
    return this.setLimit("min", t, !0, errorUtil.toString(i));
  }
  gt(t, i) {
    return this.setLimit("min", t, !1, errorUtil.toString(i));
  }
  lte(t, i) {
    return this.setLimit("max", t, !0, errorUtil.toString(i));
  }
  lt(t, i) {
    return this.setLimit("max", t, !1, errorUtil.toString(i));
  }
  setLimit(t, i, a, r) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: i,
          inclusive: a,
          message: errorUtil.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(t)
    });
  }
  multipleOf(t, i) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: errorUtil.toString(i)
    });
  }
  get minValue() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "min" && (t === null || i.value > t) && (t = i.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "max" && (t === null || i.value < t) && (t = i.value);
    return t;
  }
}
ZodBigInt.create = (e) => new ZodBigInt({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...processCreateParams(e)
});
class ZodBoolean extends ZodType {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== ZodParsedType.boolean) {
      const a = this._getOrReturnCtx(t);
      return addIssueToContext(a, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: a.parsedType
      }), INVALID;
    }
    return OK(t.data);
  }
}
ZodBoolean.create = (e) => new ZodBoolean({
  typeName: ZodFirstPartyTypeKind.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...processCreateParams(e)
});
class ZodDate extends ZodType {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== ZodParsedType.date) {
      const o = this._getOrReturnCtx(t);
      return addIssueToContext(o, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: o.parsedType
      }), INVALID;
    }
    if (Number.isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return addIssueToContext(o, {
        code: ZodIssueCode.invalid_date
      }), INVALID;
    }
    const a = new ParseStatus();
    let r;
    for (const o of this._def.checks)
      o.kind === "min" ? t.data.getTime() < o.value && (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        code: ZodIssueCode.too_small,
        message: o.message,
        inclusive: !0,
        exact: !1,
        minimum: o.value,
        type: "date"
      }), a.dirty()) : o.kind === "max" ? t.data.getTime() > o.value && (r = this._getOrReturnCtx(t, r), addIssueToContext(r, {
        code: ZodIssueCode.too_big,
        message: o.message,
        inclusive: !0,
        exact: !1,
        maximum: o.value,
        type: "date"
      }), a.dirty()) : util$1.assertNever(o);
    return {
      status: a.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, i) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: errorUtil.toString(i)
    });
  }
  max(t, i) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: errorUtil.toString(i)
    });
  }
  get minDate() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "min" && (t === null || i.value > t) && (t = i.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const i of this._def.checks)
      i.kind === "max" && (t === null || i.value < t) && (t = i.value);
    return t != null ? new Date(t) : null;
  }
}
ZodDate.create = (e) => new ZodDate({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: ZodFirstPartyTypeKind.ZodDate,
  ...processCreateParams(e)
});
class ZodSymbol extends ZodType {
  _parse(t) {
    if (this._getType(t) !== ZodParsedType.symbol) {
      const a = this._getOrReturnCtx(t);
      return addIssueToContext(a, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: a.parsedType
      }), INVALID;
    }
    return OK(t.data);
  }
}
ZodSymbol.create = (e) => new ZodSymbol({
  typeName: ZodFirstPartyTypeKind.ZodSymbol,
  ...processCreateParams(e)
});
class ZodUndefined extends ZodType {
  _parse(t) {
    if (this._getType(t) !== ZodParsedType.undefined) {
      const a = this._getOrReturnCtx(t);
      return addIssueToContext(a, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: a.parsedType
      }), INVALID;
    }
    return OK(t.data);
  }
}
ZodUndefined.create = (e) => new ZodUndefined({
  typeName: ZodFirstPartyTypeKind.ZodUndefined,
  ...processCreateParams(e)
});
class ZodNull extends ZodType {
  _parse(t) {
    if (this._getType(t) !== ZodParsedType.null) {
      const a = this._getOrReturnCtx(t);
      return addIssueToContext(a, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: a.parsedType
      }), INVALID;
    }
    return OK(t.data);
  }
}
ZodNull.create = (e) => new ZodNull({
  typeName: ZodFirstPartyTypeKind.ZodNull,
  ...processCreateParams(e)
});
class ZodAny extends ZodType {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return OK(t.data);
  }
}
ZodAny.create = (e) => new ZodAny({
  typeName: ZodFirstPartyTypeKind.ZodAny,
  ...processCreateParams(e)
});
class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return OK(t.data);
  }
}
ZodUnknown.create = (e) => new ZodUnknown({
  typeName: ZodFirstPartyTypeKind.ZodUnknown,
  ...processCreateParams(e)
});
class ZodNever extends ZodType {
  _parse(t) {
    const i = this._getOrReturnCtx(t);
    return addIssueToContext(i, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: i.parsedType
    }), INVALID;
  }
}
ZodNever.create = (e) => new ZodNever({
  typeName: ZodFirstPartyTypeKind.ZodNever,
  ...processCreateParams(e)
});
class ZodVoid extends ZodType {
  _parse(t) {
    if (this._getType(t) !== ZodParsedType.undefined) {
      const a = this._getOrReturnCtx(t);
      return addIssueToContext(a, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: a.parsedType
      }), INVALID;
    }
    return OK(t.data);
  }
}
ZodVoid.create = (e) => new ZodVoid({
  typeName: ZodFirstPartyTypeKind.ZodVoid,
  ...processCreateParams(e)
});
class ZodArray extends ZodType {
  _parse(t) {
    const { ctx: i, status: a } = this._processInputParams(t), r = this._def;
    if (i.parsedType !== ZodParsedType.array)
      return addIssueToContext(i, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: i.parsedType
      }), INVALID;
    if (r.exactLength !== null) {
      const n = i.data.length > r.exactLength.value, s = i.data.length < r.exactLength.value;
      (n || s) && (addIssueToContext(i, {
        code: n ? ZodIssueCode.too_big : ZodIssueCode.too_small,
        minimum: s ? r.exactLength.value : void 0,
        maximum: n ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), a.dirty());
    }
    if (r.minLength !== null && i.data.length < r.minLength.value && (addIssueToContext(i, {
      code: ZodIssueCode.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), a.dirty()), r.maxLength !== null && i.data.length > r.maxLength.value && (addIssueToContext(i, {
      code: ZodIssueCode.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), a.dirty()), i.common.async)
      return Promise.all([...i.data].map((n, s) => r.type._parseAsync(new ParseInputLazyPath(i, n, i.path, s)))).then((n) => ParseStatus.mergeArray(a, n));
    const o = [...i.data].map((n, s) => r.type._parseSync(new ParseInputLazyPath(i, n, i.path, s)));
    return ParseStatus.mergeArray(a, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, i) {
    return new ZodArray({
      ...this._def,
      minLength: { value: t, message: errorUtil.toString(i) }
    });
  }
  max(t, i) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: t, message: errorUtil.toString(i) }
    });
  }
  length(t, i) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: t, message: errorUtil.toString(i) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
ZodArray.create = (e, t) => new ZodArray({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ZodFirstPartyTypeKind.ZodArray,
  ...processCreateParams(t)
});
function deepPartialify(e) {
  if (e instanceof ZodObject) {
    const t = {};
    for (const i in e.shape) {
      const a = e.shape[i];
      t[i] = ZodOptional.create(deepPartialify(a));
    }
    return new ZodObject({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof ZodArray ? new ZodArray({
    ...e._def,
    type: deepPartialify(e.element)
  }) : e instanceof ZodOptional ? ZodOptional.create(deepPartialify(e.unwrap())) : e instanceof ZodNullable ? ZodNullable.create(deepPartialify(e.unwrap())) : e instanceof ZodTuple ? ZodTuple.create(e.items.map((t) => deepPartialify(t))) : e;
}
class ZodObject extends ZodType {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), i = util$1.objectKeys(t);
    return this._cached = { shape: t, keys: i }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== ZodParsedType.object) {
      const h = this._getOrReturnCtx(t);
      return addIssueToContext(h, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: h.parsedType
      }), INVALID;
    }
    const { status: a, ctx: r } = this._processInputParams(t), { shape: o, keys: n } = this._getCached(), s = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip"))
      for (const h in r.data)
        n.includes(h) || s.push(h);
    const l = [];
    for (const h of n) {
      const u = o[h], d = r.data[h];
      l.push({
        key: { status: "valid", value: h },
        value: u._parse(new ParseInputLazyPath(r, d, r.path, h)),
        alwaysSet: h in r.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const h = this._def.unknownKeys;
      if (h === "passthrough")
        for (const u of s)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: r.data[u] }
          });
      else if (h === "strict")
        s.length > 0 && (addIssueToContext(r, {
          code: ZodIssueCode.unrecognized_keys,
          keys: s
        }), a.dirty());
      else if (h !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const h = this._def.catchall;
      for (const u of s) {
        const d = r.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: h._parse(
            new ParseInputLazyPath(r, d, r.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in r.data
        });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      const h = [];
      for (const u of l) {
        const d = await u.key, m = await u.value;
        h.push({
          key: d,
          value: m,
          alwaysSet: u.alwaysSet
        });
      }
      return h;
    }).then((h) => ParseStatus.mergeObjectSync(a, h)) : ParseStatus.mergeObjectSync(a, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return errorUtil.errToObj, new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (i, a) => {
          var o, n;
          const r = ((n = (o = this._def).errorMap) == null ? void 0 : n.call(o, i, a).message) ?? a.defaultError;
          return i.code === "unrecognized_keys" ? {
            message: errorUtil.errToObj(t).message ?? r
          } : {
            message: r
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new ZodObject({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, i) {
    return this.augment({ [t]: i });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new ZodObject({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const i = {};
    for (const a of util$1.objectKeys(t))
      t[a] && this.shape[a] && (i[a] = this.shape[a]);
    return new ZodObject({
      ...this._def,
      shape: () => i
    });
  }
  omit(t) {
    const i = {};
    for (const a of util$1.objectKeys(this.shape))
      t[a] || (i[a] = this.shape[a]);
    return new ZodObject({
      ...this._def,
      shape: () => i
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(t) {
    const i = {};
    for (const a of util$1.objectKeys(this.shape)) {
      const r = this.shape[a];
      t && !t[a] ? i[a] = r : i[a] = r.optional();
    }
    return new ZodObject({
      ...this._def,
      shape: () => i
    });
  }
  required(t) {
    const i = {};
    for (const a of util$1.objectKeys(this.shape))
      if (t && !t[a])
        i[a] = this.shape[a];
      else {
        let o = this.shape[a];
        for (; o instanceof ZodOptional; )
          o = o._def.innerType;
        i[a] = o;
      }
    return new ZodObject({
      ...this._def,
      shape: () => i
    });
  }
  keyof() {
    return createZodEnum(util$1.objectKeys(this.shape));
  }
}
ZodObject.create = (e, t) => new ZodObject({
  shape: () => e,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(t)
});
ZodObject.strictCreate = (e, t) => new ZodObject({
  shape: () => e,
  unknownKeys: "strict",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(t)
});
ZodObject.lazycreate = (e, t) => new ZodObject({
  shape: e,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(t)
});
class ZodUnion extends ZodType {
  _parse(t) {
    const { ctx: i } = this._processInputParams(t), a = this._def.options;
    function r(o) {
      for (const s of o)
        if (s.result.status === "valid")
          return s.result;
      for (const s of o)
        if (s.result.status === "dirty")
          return i.common.issues.push(...s.ctx.common.issues), s.result;
      const n = o.map((s) => new ZodError(s.ctx.common.issues));
      return addIssueToContext(i, {
        code: ZodIssueCode.invalid_union,
        unionErrors: n
      }), INVALID;
    }
    if (i.common.async)
      return Promise.all(a.map(async (o) => {
        const n = {
          ...i,
          common: {
            ...i.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await o._parseAsync({
            data: i.data,
            path: i.path,
            parent: n
          }),
          ctx: n
        };
      })).then(r);
    {
      let o;
      const n = [];
      for (const l of a) {
        const h = {
          ...i,
          common: {
            ...i.common,
            issues: []
          },
          parent: null
        }, u = l._parseSync({
          data: i.data,
          path: i.path,
          parent: h
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !o && (o = { result: u, ctx: h }), h.common.issues.length && n.push(h.common.issues);
      }
      if (o)
        return i.common.issues.push(...o.ctx.common.issues), o.result;
      const s = n.map((l) => new ZodError(l));
      return addIssueToContext(i, {
        code: ZodIssueCode.invalid_union,
        unionErrors: s
      }), INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (e, t) => new ZodUnion({
  options: e,
  typeName: ZodFirstPartyTypeKind.ZodUnion,
  ...processCreateParams(t)
});
const getDiscriminator = (e) => e instanceof ZodLazy ? getDiscriminator(e.schema) : e instanceof ZodEffects ? getDiscriminator(e.innerType()) : e instanceof ZodLiteral ? [e.value] : e instanceof ZodEnum ? e.options : e instanceof ZodNativeEnum ? util$1.objectValues(e.enum) : e instanceof ZodDefault ? getDiscriminator(e._def.innerType) : e instanceof ZodUndefined ? [void 0] : e instanceof ZodNull ? [null] : e instanceof ZodOptional ? [void 0, ...getDiscriminator(e.unwrap())] : e instanceof ZodNullable ? [null, ...getDiscriminator(e.unwrap())] : e instanceof ZodBranded || e instanceof ZodReadonly ? getDiscriminator(e.unwrap()) : e instanceof ZodCatch ? getDiscriminator(e._def.innerType) : [];
class ZodDiscriminatedUnion extends ZodType {
  _parse(t) {
    const { ctx: i } = this._processInputParams(t);
    if (i.parsedType !== ZodParsedType.object)
      return addIssueToContext(i, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: i.parsedType
      }), INVALID;
    const a = this.discriminator, r = i.data[a], o = this.optionsMap.get(r);
    return o ? i.common.async ? o._parseAsync({
      data: i.data,
      path: i.path,
      parent: i
    }) : o._parseSync({
      data: i.data,
      path: i.path,
      parent: i
    }) : (addIssueToContext(i, {
      code: ZodIssueCode.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [a]
    }), INVALID);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, i, a) {
    const r = /* @__PURE__ */ new Map();
    for (const o of i) {
      const n = getDiscriminator(o.shape[t]);
      if (!n.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const s of n) {
        if (r.has(s))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(s)}`);
        r.set(s, o);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator: t,
      options: i,
      optionsMap: r,
      ...processCreateParams(a)
    });
  }
}
function mergeValues(e, t) {
  const i = getParsedType(e), a = getParsedType(t);
  if (e === t)
    return { valid: !0, data: e };
  if (i === ZodParsedType.object && a === ZodParsedType.object) {
    const r = util$1.objectKeys(t), o = util$1.objectKeys(e).filter((s) => r.indexOf(s) !== -1), n = { ...e, ...t };
    for (const s of o) {
      const l = mergeValues(e[s], t[s]);
      if (!l.valid)
        return { valid: !1 };
      n[s] = l.data;
    }
    return { valid: !0, data: n };
  } else if (i === ZodParsedType.array && a === ZodParsedType.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const r = [];
    for (let o = 0; o < e.length; o++) {
      const n = e[o], s = t[o], l = mergeValues(n, s);
      if (!l.valid)
        return { valid: !1 };
      r.push(l.data);
    }
    return { valid: !0, data: r };
  } else return i === ZodParsedType.date && a === ZodParsedType.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class ZodIntersection extends ZodType {
  _parse(t) {
    const { status: i, ctx: a } = this._processInputParams(t), r = (o, n) => {
      if (isAborted(o) || isAborted(n))
        return INVALID;
      const s = mergeValues(o.value, n.value);
      return s.valid ? ((isDirty(o) || isDirty(n)) && i.dirty(), { status: i.value, value: s.data }) : (addIssueToContext(a, {
        code: ZodIssueCode.invalid_intersection_types
      }), INVALID);
    };
    return a.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: a.data,
        path: a.path,
        parent: a
      }),
      this._def.right._parseAsync({
        data: a.data,
        path: a.path,
        parent: a
      })
    ]).then(([o, n]) => r(o, n)) : r(this._def.left._parseSync({
      data: a.data,
      path: a.path,
      parent: a
    }), this._def.right._parseSync({
      data: a.data,
      path: a.path,
      parent: a
    }));
  }
}
ZodIntersection.create = (e, t, i) => new ZodIntersection({
  left: e,
  right: t,
  typeName: ZodFirstPartyTypeKind.ZodIntersection,
  ...processCreateParams(i)
});
class ZodTuple extends ZodType {
  _parse(t) {
    const { status: i, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== ZodParsedType.array)
      return addIssueToContext(a, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: a.parsedType
      }), INVALID;
    if (a.data.length < this._def.items.length)
      return addIssueToContext(a, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), INVALID;
    !this._def.rest && a.data.length > this._def.items.length && (addIssueToContext(a, {
      code: ZodIssueCode.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), i.dirty());
    const o = [...a.data].map((n, s) => {
      const l = this._def.items[s] || this._def.rest;
      return l ? l._parse(new ParseInputLazyPath(a, n, a.path, s)) : null;
    }).filter((n) => !!n);
    return a.common.async ? Promise.all(o).then((n) => ParseStatus.mergeArray(i, n)) : ParseStatus.mergeArray(i, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new ZodTuple({
      ...this._def,
      rest: t
    });
  }
}
ZodTuple.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ZodTuple({
    items: e,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(t)
  });
};
class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: i, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== ZodParsedType.object)
      return addIssueToContext(a, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: a.parsedType
      }), INVALID;
    const r = [], o = this._def.keyType, n = this._def.valueType;
    for (const s in a.data)
      r.push({
        key: o._parse(new ParseInputLazyPath(a, s, a.path, s)),
        value: n._parse(new ParseInputLazyPath(a, a.data[s], a.path, s)),
        alwaysSet: s in a.data
      });
    return a.common.async ? ParseStatus.mergeObjectAsync(i, r) : ParseStatus.mergeObjectSync(i, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, i, a) {
    return i instanceof ZodType ? new ZodRecord({
      keyType: t,
      valueType: i,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(a)
    }) : new ZodRecord({
      keyType: ZodString.create(),
      valueType: t,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(i)
    });
  }
}
class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: i, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== ZodParsedType.map)
      return addIssueToContext(a, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: a.parsedType
      }), INVALID;
    const r = this._def.keyType, o = this._def.valueType, n = [...a.data.entries()].map(([s, l], h) => ({
      key: r._parse(new ParseInputLazyPath(a, s, a.path, [h, "key"])),
      value: o._parse(new ParseInputLazyPath(a, l, a.path, [h, "value"]))
    }));
    if (a.common.async) {
      const s = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of n) {
          const h = await l.key, u = await l.value;
          if (h.status === "aborted" || u.status === "aborted")
            return INVALID;
          (h.status === "dirty" || u.status === "dirty") && i.dirty(), s.set(h.value, u.value);
        }
        return { status: i.value, value: s };
      });
    } else {
      const s = /* @__PURE__ */ new Map();
      for (const l of n) {
        const h = l.key, u = l.value;
        if (h.status === "aborted" || u.status === "aborted")
          return INVALID;
        (h.status === "dirty" || u.status === "dirty") && i.dirty(), s.set(h.value, u.value);
      }
      return { status: i.value, value: s };
    }
  }
}
ZodMap.create = (e, t, i) => new ZodMap({
  valueType: t,
  keyType: e,
  typeName: ZodFirstPartyTypeKind.ZodMap,
  ...processCreateParams(i)
});
class ZodSet extends ZodType {
  _parse(t) {
    const { status: i, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== ZodParsedType.set)
      return addIssueToContext(a, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: a.parsedType
      }), INVALID;
    const r = this._def;
    r.minSize !== null && a.data.size < r.minSize.value && (addIssueToContext(a, {
      code: ZodIssueCode.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), i.dirty()), r.maxSize !== null && a.data.size > r.maxSize.value && (addIssueToContext(a, {
      code: ZodIssueCode.too_big,
      maximum: r.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.maxSize.message
    }), i.dirty());
    const o = this._def.valueType;
    function n(l) {
      const h = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return INVALID;
        u.status === "dirty" && i.dirty(), h.add(u.value);
      }
      return { status: i.value, value: h };
    }
    const s = [...a.data.values()].map((l, h) => o._parse(new ParseInputLazyPath(a, l, a.path, h)));
    return a.common.async ? Promise.all(s).then((l) => n(l)) : n(s);
  }
  min(t, i) {
    return new ZodSet({
      ...this._def,
      minSize: { value: t, message: errorUtil.toString(i) }
    });
  }
  max(t, i) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: t, message: errorUtil.toString(i) }
    });
  }
  size(t, i) {
    return this.min(t, i).max(t, i);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
ZodSet.create = (e, t) => new ZodSet({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ZodFirstPartyTypeKind.ZodSet,
  ...processCreateParams(t)
});
class ZodFunction extends ZodType {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: i } = this._processInputParams(t);
    if (i.parsedType !== ZodParsedType.function)
      return addIssueToContext(i, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: i.parsedType
      }), INVALID;
    function a(s, l) {
      return makeIssue({
        data: s,
        path: i.path,
        errorMaps: [i.common.contextualErrorMap, i.schemaErrorMap, getErrorMap(), errorMap].filter((h) => !!h),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function r(s, l) {
      return makeIssue({
        data: s,
        path: i.path,
        errorMaps: [i.common.contextualErrorMap, i.schemaErrorMap, getErrorMap(), errorMap].filter((h) => !!h),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const o = { errorMap: i.common.contextualErrorMap }, n = i.data;
    if (this._def.returns instanceof ZodPromise) {
      const s = this;
      return OK(async function(...l) {
        const h = new ZodError([]), u = await s._def.args.parseAsync(l, o).catch((p) => {
          throw h.addIssue(a(l, p)), h;
        }), d = await Reflect.apply(n, this, u);
        return await s._def.returns._def.type.parseAsync(d, o).catch((p) => {
          throw h.addIssue(r(d, p)), h;
        });
      });
    } else {
      const s = this;
      return OK(function(...l) {
        const h = s._def.args.safeParse(l, o);
        if (!h.success)
          throw new ZodError([a(l, h.error)]);
        const u = Reflect.apply(n, this, h.data), d = s._def.returns.safeParse(u, o);
        if (!d.success)
          throw new ZodError([r(u, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(t).rest(ZodUnknown.create())
    });
  }
  returns(t) {
    return new ZodFunction({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, i, a) {
    return new ZodFunction({
      args: t || ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: i || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(a)
    });
  }
}
class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: i } = this._processInputParams(t);
    return this._def.getter()._parse({ data: i.data, path: i.path, parent: i });
  }
}
ZodLazy.create = (e, t) => new ZodLazy({
  getter: e,
  typeName: ZodFirstPartyTypeKind.ZodLazy,
  ...processCreateParams(t)
});
class ZodLiteral extends ZodType {
  _parse(t) {
    if (t.data !== this._def.value) {
      const i = this._getOrReturnCtx(t);
      return addIssueToContext(i, {
        received: i.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      }), INVALID;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (e, t) => new ZodLiteral({
  value: e,
  typeName: ZodFirstPartyTypeKind.ZodLiteral,
  ...processCreateParams(t)
});
function createZodEnum(e, t) {
  return new ZodEnum({
    values: e,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(t)
  });
}
class ZodEnum extends ZodType {
  _parse(t) {
    if (typeof t.data != "string") {
      const i = this._getOrReturnCtx(t), a = this._def.values;
      return addIssueToContext(i, {
        expected: util$1.joinValues(a),
        received: i.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const i = this._getOrReturnCtx(t), a = this._def.values;
      return addIssueToContext(i, {
        received: i.data,
        code: ZodIssueCode.invalid_enum_value,
        options: a
      }), INVALID;
    }
    return OK(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const i of this._def.values)
      t[i] = i;
    return t;
  }
  get Values() {
    const t = {};
    for (const i of this._def.values)
      t[i] = i;
    return t;
  }
  get Enum() {
    const t = {};
    for (const i of this._def.values)
      t[i] = i;
    return t;
  }
  extract(t, i = this._def) {
    return ZodEnum.create(t, {
      ...this._def,
      ...i
    });
  }
  exclude(t, i = this._def) {
    return ZodEnum.create(this.options.filter((a) => !t.includes(a)), {
      ...this._def,
      ...i
    });
  }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
  _parse(t) {
    const i = util$1.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(t);
    if (a.parsedType !== ZodParsedType.string && a.parsedType !== ZodParsedType.number) {
      const r = util$1.objectValues(i);
      return addIssueToContext(a, {
        expected: util$1.joinValues(r),
        received: a.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (this._cache || (this._cache = new Set(util$1.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const r = util$1.objectValues(i);
      return addIssueToContext(a, {
        received: a.data,
        code: ZodIssueCode.invalid_enum_value,
        options: r
      }), INVALID;
    }
    return OK(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
ZodNativeEnum.create = (e, t) => new ZodNativeEnum({
  values: e,
  typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
  ...processCreateParams(t)
});
class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: i } = this._processInputParams(t);
    if (i.parsedType !== ZodParsedType.promise && i.common.async === !1)
      return addIssueToContext(i, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: i.parsedType
      }), INVALID;
    const a = i.parsedType === ZodParsedType.promise ? i.data : Promise.resolve(i.data);
    return OK(a.then((r) => this._def.type.parseAsync(r, {
      path: i.path,
      errorMap: i.common.contextualErrorMap
    })));
  }
}
ZodPromise.create = (e, t) => new ZodPromise({
  type: e,
  typeName: ZodFirstPartyTypeKind.ZodPromise,
  ...processCreateParams(t)
});
class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: i, ctx: a } = this._processInputParams(t), r = this._def.effect || null, o = {
      addIssue: (n) => {
        addIssueToContext(a, n), n.fatal ? i.abort() : i.dirty();
      },
      get path() {
        return a.path;
      }
    };
    if (o.addIssue = o.addIssue.bind(o), r.type === "preprocess") {
      const n = r.transform(a.data, o);
      if (a.common.async)
        return Promise.resolve(n).then(async (s) => {
          if (i.value === "aborted")
            return INVALID;
          const l = await this._def.schema._parseAsync({
            data: s,
            path: a.path,
            parent: a
          });
          return l.status === "aborted" ? INVALID : l.status === "dirty" || i.value === "dirty" ? DIRTY(l.value) : l;
        });
      {
        if (i.value === "aborted")
          return INVALID;
        const s = this._def.schema._parseSync({
          data: n,
          path: a.path,
          parent: a
        });
        return s.status === "aborted" ? INVALID : s.status === "dirty" || i.value === "dirty" ? DIRTY(s.value) : s;
      }
    }
    if (r.type === "refinement") {
      const n = (s) => {
        const l = r.refinement(s, o);
        if (a.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return s;
      };
      if (a.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return s.status === "aborted" ? INVALID : (s.status === "dirty" && i.dirty(), n(s.value), { status: i.value, value: s.value });
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((s) => s.status === "aborted" ? INVALID : (s.status === "dirty" && i.dirty(), n(s.value).then(() => ({ status: i.value, value: s.value }))));
    }
    if (r.type === "transform")
      if (a.common.async === !1) {
        const n = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        if (!isValid(n))
          return INVALID;
        const s = r.transform(n.value, o);
        if (s instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: i.value, value: s };
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((n) => isValid(n) ? Promise.resolve(r.transform(n.value, o)).then((s) => ({
          status: i.value,
          value: s
        })) : INVALID);
    util$1.assertNever(r);
  }
}
ZodEffects.create = (e, t, i) => new ZodEffects({
  schema: e,
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  effect: t,
  ...processCreateParams(i)
});
ZodEffects.createWithPreprocess = (e, t, i) => new ZodEffects({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  ...processCreateParams(i)
});
class ZodOptional extends ZodType {
  _parse(t) {
    return this._getType(t) === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (e, t) => new ZodOptional({
  innerType: e,
  typeName: ZodFirstPartyTypeKind.ZodOptional,
  ...processCreateParams(t)
});
class ZodNullable extends ZodType {
  _parse(t) {
    return this._getType(t) === ZodParsedType.null ? OK(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (e, t) => new ZodNullable({
  innerType: e,
  typeName: ZodFirstPartyTypeKind.ZodNullable,
  ...processCreateParams(t)
});
class ZodDefault extends ZodType {
  _parse(t) {
    const { ctx: i } = this._processInputParams(t);
    let a = i.data;
    return i.parsedType === ZodParsedType.undefined && (a = this._def.defaultValue()), this._def.innerType._parse({
      data: a,
      path: i.path,
      parent: i
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (e, t) => new ZodDefault({
  innerType: e,
  typeName: ZodFirstPartyTypeKind.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...processCreateParams(t)
});
class ZodCatch extends ZodType {
  _parse(t) {
    const { ctx: i } = this._processInputParams(t), a = {
      ...i,
      common: {
        ...i.common,
        issues: []
      }
    }, r = this._def.innerType._parse({
      data: a.data,
      path: a.path,
      parent: {
        ...a
      }
    });
    return isAsync(r) ? r.then((o) => ({
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new ZodError(a.common.issues);
        },
        input: a.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new ZodError(a.common.issues);
        },
        input: a.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (e, t) => new ZodCatch({
  innerType: e,
  typeName: ZodFirstPartyTypeKind.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...processCreateParams(t)
});
class ZodNaN extends ZodType {
  _parse(t) {
    if (this._getType(t) !== ZodParsedType.nan) {
      const a = this._getOrReturnCtx(t);
      return addIssueToContext(a, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: a.parsedType
      }), INVALID;
    }
    return { status: "valid", value: t.data };
  }
}
ZodNaN.create = (e) => new ZodNaN({
  typeName: ZodFirstPartyTypeKind.ZodNaN,
  ...processCreateParams(e)
});
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
  _parse(t) {
    const { ctx: i } = this._processInputParams(t), a = i.data;
    return this._def.type._parse({
      data: a,
      path: i.path,
      parent: i
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ZodPipeline extends ZodType {
  _parse(t) {
    const { status: i, ctx: a } = this._processInputParams(t);
    if (a.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return o.status === "aborted" ? INVALID : o.status === "dirty" ? (i.dirty(), DIRTY(o.value)) : this._def.out._parseAsync({
          data: o.value,
          path: a.path,
          parent: a
        });
      })();
    {
      const r = this._def.in._parseSync({
        data: a.data,
        path: a.path,
        parent: a
      });
      return r.status === "aborted" ? INVALID : r.status === "dirty" ? (i.dirty(), {
        status: "dirty",
        value: r.value
      }) : this._def.out._parseSync({
        data: r.value,
        path: a.path,
        parent: a
      });
    }
  }
  static create(t, i) {
    return new ZodPipeline({
      in: t,
      out: i,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}
class ZodReadonly extends ZodType {
  _parse(t) {
    const i = this._def.innerType._parse(t), a = (r) => (isValid(r) && (r.value = Object.freeze(r.value)), r);
    return isAsync(i) ? i.then((r) => a(r)) : a(i);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodReadonly.create = (e, t) => new ZodReadonly({
  innerType: e,
  typeName: ZodFirstPartyTypeKind.ZodReadonly,
  ...processCreateParams(t)
});
function cleanParams(e, t) {
  const i = typeof e == "function" ? e(t) : typeof e == "string" ? { message: e } : e;
  return typeof i == "string" ? { message: i } : i;
}
function custom(e, t = {}, i) {
  return e ? ZodAny.create().superRefine((a, r) => {
    const o = e(a);
    if (o instanceof Promise)
      return o.then((n) => {
        if (!n) {
          const s = cleanParams(t, a), l = s.fatal ?? i ?? !0;
          r.addIssue({ code: "custom", ...s, fatal: l });
        }
      });
    if (!o) {
      const n = cleanParams(t, a), s = n.fatal ?? i ?? !0;
      r.addIssue({ code: "custom", ...n, fatal: s });
    }
  }) : ZodAny.create();
}
const late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (e, t = {
  message: `Input not instance of ${e.name}`
}) => custom((i) => i instanceof e, t), stringType = ZodString.create, numberType = ZodNumber.create, nanType = ZodNaN.create, bigIntType = ZodBigInt.create, booleanType = ZodBoolean.create, dateType = ZodDate.create, symbolType = ZodSymbol.create, undefinedType = ZodUndefined.create, nullType = ZodNull.create, anyType = ZodAny.create, unknownType = ZodUnknown.create, neverType = ZodNever.create, voidType = ZodVoid.create, arrayType = ZodArray.create, objectType = ZodObject.create, strictObjectType = ZodObject.strictCreate, unionType = ZodUnion.create, discriminatedUnionType = ZodDiscriminatedUnion.create, intersectionType = ZodIntersection.create, tupleType = ZodTuple.create, recordType = ZodRecord.create, mapType = ZodMap.create, setType = ZodSet.create, functionType = ZodFunction.create, lazyType = ZodLazy.create, literalType = ZodLiteral.create, enumType = ZodEnum.create, nativeEnumType = ZodNativeEnum.create, promiseType = ZodPromise.create, effectsType = ZodEffects.create, optionalType = ZodOptional.create, nullableType = ZodNullable.create, preprocessType = ZodEffects.createWithPreprocess, pipelineType = ZodPipeline.create, ostring = () => stringType().optional(), onumber = () => numberType().optional(), oboolean = () => booleanType().optional(), coerce = {
  string: ((e) => ZodString.create({ ...e, coerce: !0 })),
  number: ((e) => ZodNumber.create({ ...e, coerce: !0 })),
  boolean: ((e) => ZodBoolean.create({
    ...e,
    coerce: !0
  })),
  bigint: ((e) => ZodBigInt.create({ ...e, coerce: !0 })),
  date: ((e) => ZodDate.create({ ...e, coerce: !0 }))
}, NEVER = INVALID, z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BRAND,
  DIRTY,
  EMPTY_PATH,
  INVALID,
  NEVER,
  OK,
  ParseStatus,
  Schema: ZodType,
  ZodAny,
  ZodArray,
  ZodBigInt,
  ZodBoolean,
  ZodBranded,
  ZodCatch,
  ZodDate,
  ZodDefault,
  ZodDiscriminatedUnion,
  ZodEffects,
  ZodEnum,
  ZodError,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  ZodFunction,
  ZodIntersection,
  ZodIssueCode,
  ZodLazy,
  ZodLiteral,
  ZodMap,
  ZodNaN,
  ZodNativeEnum,
  ZodNever,
  ZodNull,
  ZodNullable,
  ZodNumber,
  ZodObject,
  ZodOptional,
  ZodParsedType,
  ZodPipeline,
  ZodPromise,
  ZodReadonly,
  ZodRecord,
  ZodSchema: ZodType,
  ZodSet,
  ZodString,
  ZodSymbol,
  ZodTransformer: ZodEffects,
  ZodTuple,
  ZodType,
  ZodUndefined,
  ZodUnion,
  ZodUnknown,
  ZodVoid,
  addIssueToContext,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  coerce,
  custom,
  date: dateType,
  datetimeRegex,
  defaultErrorMap: errorMap,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  enum: enumType,
  function: functionType,
  getErrorMap,
  getParsedType,
  instanceof: instanceOfType,
  intersection: intersectionType,
  isAborted,
  isAsync,
  isDirty,
  isValid,
  late,
  lazy: lazyType,
  literal: literalType,
  makeIssue,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  null: nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  get objectUtil() {
    return objectUtil;
  },
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  quotelessJson,
  record: recordType,
  set: setType,
  setErrorMap,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  undefined: undefinedType,
  union: unionType,
  unknown: unknownType,
  get util() {
    return util$1;
  },
  void: voidType
}, Symbol.toStringTag, { value: "Module" }));
var Edge;
(function(e) {
  e[e.EXTEND = 1] = "EXTEND", e[e.WRAP = 2] = "WRAP", e[e.CROP = 3] = "CROP";
})(Edge || (Edge = {}));
const JimpClassSchema = objectType({
  bitmap: objectType({
    data: unionType([instanceOfType(Buffer), instanceOfType(Uint8Array)]),
    width: numberType(),
    height: numberType()
  })
}), BlitOptionsSchemaComplex = objectType({
  src: JimpClassSchema,
  /** the x position to blit the image */
  x: numberType().optional(),
  /** the y position to blit the image */
  y: numberType().optional(),
  /** the x position from which to crop the source image */
  srcX: numberType().optional(),
  /** the y position from which to crop the source image */
  srcY: numberType().optional(),
  /** the width to which to crop the source image */
  srcW: numberType().optional(),
  /** the height to which to crop the source image */
  srcH: numberType().optional()
}), BlitOptionsSchema = unionType([JimpClassSchema, BlitOptionsSchemaComplex]), methods$h = {
  /**
   * Short for "bit-block transfer".
   * It involves the transfer of a block of pixel data from one area of a computer's memory to another area, typically for the purpose of rendering images on the screen or manipulating them in various ways.
   * It's a fundamental operation in computer graphics utilized in various applications, from operating systems to video games.
   *
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   * const parrot = await Jimp.read("test/party-parrot.png");
   *
   * image.blit({ src: parrot, x: 10, y: 10 });
   * ```
   */
  blit(e, t) {
    const i = BlitOptionsSchema.parse(t);
    let {
      // eslint-disable-next-line prefer-const
      src: a,
      x: r = 0,
      y: o = 0,
      srcX: n = 0,
      srcY: s = 0,
      srcW: l = a.bitmap.width,
      srcH: h = a.bitmap.height
    } = "bitmap" in i ? { src: i } : i;
    if (!("bitmap" in a))
      throw new Error("The source must be a Jimp image");
    if (typeof r != "number" || typeof o != "number")
      throw new Error("x and y must be numbers");
    r = Math.round(r), o = Math.round(o), n = Math.round(n), s = Math.round(s), l = Math.round(l), h = Math.round(h);
    const u = e.bitmap.width, d = e.bitmap.height;
    return scan(a, n, s, l, h, function(m, p, g) {
      const M = r + m - n, k = o + p - s;
      if (M >= 0 && k >= 0 && u - M > 0 && d - k > 0) {
        const w = e.getPixelIndex(M, k), v = {
          r: a.bitmap.data[g] || 0,
          g: a.bitmap.data[g + 1] || 0,
          b: a.bitmap.data[g + 2] || 0,
          a: a.bitmap.data[g + 3] || 0
        }, C = {
          r: e.bitmap.data[w] || 0,
          g: e.bitmap.data[w + 1] || 0,
          b: e.bitmap.data[w + 2] || 0,
          a: e.bitmap.data[w + 3] || 0
        };
        e.bitmap.data[w] = (v.a * (v.r - C.r) - C.r + 255 >> 8) + C.r, e.bitmap.data[w + 1] = (v.a * (v.g - C.g) - C.g + 255 >> 8) + C.g, e.bitmap.data[w + 2] = (v.a * (v.b - C.b) - C.b + 255 >> 8) + C.b, e.bitmap.data[w + 3] = limit255(C.a + v.a);
      }
    }), e;
  }
}, mulTable = [
  1,
  57,
  41,
  21,
  203,
  34,
  97,
  73,
  227,
  91,
  149,
  62,
  105,
  45,
  39,
  137,
  241,
  107,
  3,
  173,
  39,
  71,
  65,
  238,
  219,
  101,
  187,
  87,
  81,
  151,
  141,
  133,
  249,
  117,
  221,
  209,
  197,
  187,
  177,
  169,
  5,
  153,
  73,
  139,
  133,
  127,
  243,
  233,
  223,
  107,
  103,
  99,
  191,
  23,
  177,
  171,
  165,
  159,
  77,
  149,
  9,
  139,
  135,
  131,
  253,
  245,
  119,
  231,
  224,
  109,
  211,
  103,
  25,
  195,
  189,
  23,
  45,
  175,
  171,
  83,
  81,
  79,
  155,
  151,
  147,
  9,
  141,
  137,
  67,
  131,
  129,
  251,
  123,
  30,
  235,
  115,
  113,
  221,
  217,
  53,
  13,
  51,
  50,
  49,
  193,
  189,
  185,
  91,
  179,
  175,
  43,
  169,
  83,
  163,
  5,
  79,
  155,
  19,
  75,
  147,
  145,
  143,
  35,
  69,
  17,
  67,
  33,
  65,
  255,
  251,
  247,
  243,
  239,
  59,
  29,
  229,
  113,
  111,
  219,
  27,
  213,
  105,
  207,
  51,
  201,
  199,
  49,
  193,
  191,
  47,
  93,
  183,
  181,
  179,
  11,
  87,
  43,
  85,
  167,
  165,
  163,
  161,
  159,
  157,
  155,
  77,
  19,
  75,
  37,
  73,
  145,
  143,
  141,
  35,
  138,
  137,
  135,
  67,
  33,
  131,
  129,
  255,
  63,
  250,
  247,
  61,
  121,
  239,
  237,
  117,
  29,
  229,
  227,
  225,
  111,
  55,
  109,
  216,
  213,
  211,
  209,
  207,
  205,
  203,
  201,
  199,
  197,
  195,
  193,
  48,
  190,
  47,
  93,
  185,
  183,
  181,
  179,
  178,
  176,
  175,
  173,
  171,
  85,
  21,
  167,
  165,
  41,
  163,
  161,
  5,
  79,
  157,
  78,
  154,
  153,
  19,
  75,
  149,
  74,
  147,
  73,
  144,
  143,
  71,
  141,
  140,
  139,
  137,
  17,
  135,
  134,
  133,
  66,
  131,
  65,
  129,
  1
], shgTable = [
  0,
  9,
  10,
  10,
  14,
  12,
  14,
  14,
  16,
  15,
  16,
  15,
  16,
  15,
  15,
  17,
  18,
  17,
  12,
  18,
  16,
  17,
  17,
  19,
  19,
  18,
  19,
  18,
  18,
  19,
  19,
  19,
  20,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  15,
  20,
  19,
  20,
  20,
  20,
  21,
  21,
  21,
  20,
  20,
  20,
  21,
  18,
  21,
  21,
  21,
  21,
  20,
  21,
  17,
  21,
  21,
  21,
  22,
  22,
  21,
  22,
  22,
  21,
  22,
  21,
  19,
  22,
  22,
  19,
  20,
  22,
  22,
  21,
  21,
  21,
  22,
  22,
  22,
  18,
  22,
  22,
  21,
  22,
  22,
  23,
  22,
  20,
  23,
  22,
  22,
  23,
  23,
  21,
  19,
  21,
  21,
  21,
  23,
  23,
  23,
  22,
  23,
  23,
  21,
  23,
  22,
  23,
  18,
  22,
  23,
  20,
  22,
  23,
  23,
  23,
  21,
  22,
  20,
  22,
  21,
  22,
  24,
  24,
  24,
  24,
  24,
  22,
  21,
  24,
  23,
  23,
  24,
  21,
  24,
  23,
  24,
  22,
  24,
  24,
  22,
  24,
  24,
  22,
  23,
  24,
  24,
  24,
  20,
  23,
  22,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  23,
  21,
  23,
  22,
  23,
  24,
  24,
  24,
  22,
  24,
  24,
  24,
  23,
  22,
  24,
  24,
  25,
  23,
  25,
  25,
  23,
  24,
  25,
  25,
  24,
  22,
  25,
  25,
  25,
  24,
  23,
  24,
  25,
  25,
  25,
  25,
  25,
  25,
  25,
  25,
  25,
  25,
  25,
  25,
  23,
  25,
  23,
  24,
  25,
  25,
  25,
  25,
  25,
  25,
  25,
  25,
  25,
  24,
  22,
  25,
  25,
  23,
  25,
  25,
  20,
  24,
  25,
  24,
  25,
  25,
  22,
  24,
  25,
  24,
  25,
  24,
  25,
  25,
  24,
  25,
  25,
  25,
  25,
  22,
  25,
  25,
  25,
  24,
  25,
  24,
  25,
  18
], methods$g = {
  /**
   * A fast blur algorithm that produces similar effect to a Gaussian blur - but MUCH quicker
   * @param r the pixel radius of the blur
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.blur(5);
   * ```
   */
  blur(e, t) {
    if (typeof t != "number")
      throw new Error("r must be a number");
    if (t < 1)
      throw new Error("r must be greater than 0");
    let i, a, r, o, n, s, l, h, u, d, m, p, g;
    const M = e.bitmap.width - 1, k = e.bitmap.height - 1, w = t + 1, v = mulTable[t], C = shgTable[t], B = [], A = [], S = [], b = [], E = [], F = [];
    let Z = 2;
    for (; Z-- > 0; ) {
      for (p = 0, g = 0, s = 0; s < e.bitmap.height; s++) {
        for (i = e.bitmap.data[g] * w, a = e.bitmap.data[g + 1] * w, r = e.bitmap.data[g + 2] * w, o = e.bitmap.data[g + 3] * w, l = 1; l <= t; l++)
          h = g + ((l > M ? M : l) << 2), i += e.bitmap.data[h++], a += e.bitmap.data[h++], r += e.bitmap.data[h++], o += e.bitmap.data[h];
        for (n = 0; n < e.bitmap.width; n++)
          B[p] = i, A[p] = a, S[p] = r, b[p] = o, s === 0 && (E[n] = ((h = n + w) < M ? h : M) << 2, F[n] = (h = n - t) > 0 ? h << 2 : 0), u = g + E[n], d = g + F[n], i += e.bitmap.data[u++] - e.bitmap.data[d++], a += e.bitmap.data[u++] - e.bitmap.data[d++], r += e.bitmap.data[u++] - e.bitmap.data[d++], o += e.bitmap.data[u] - e.bitmap.data[d++], p++;
        g += e.bitmap.width << 2;
      }
      for (n = 0; n < e.bitmap.width; n++) {
        for (m = n, i = B[m] * w, a = A[m] * w, r = S[m] * w, o = b[m] * w, l = 1; l <= t; l++)
          m += l > k ? 0 : e.bitmap.width, i += B[m], a += A[m], r += S[m], o += b[m];
        for (p = n << 2, s = 0; s < e.bitmap.height; s++)
          e.bitmap.data[p] = limit255(i * v >>> C), e.bitmap.data[p + 1] = limit255(a * v >>> C), e.bitmap.data[p + 2] = limit255(r * v >>> C), e.bitmap.data[p + 3] = limit255(o * v >>> C), n === 0 && (E[s] = ((h = s + w) < k ? h : k) * e.bitmap.width, F[s] = (h = s - t) > 0 ? h * e.bitmap.width : 0), u = n + E[s], d = n + F[s], i += B[u] - B[d], a += A[u] - A[d], r += S[u] - S[d], o += b[u] - b[d], p += e.bitmap.width << 2;
      }
    }
    return e;
  },
  // http://blog.ivank.net/fastest-gaussian-blur.html
  /**
   * Applies a true Gaussian blur to the image (warning: this is VERY slow)
   * @param r the pixel radius of the blur
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.gaussian(15);
   * ```
   */
  gaussian(e, t) {
    if (typeof t != "number")
      throw new Error("r must be a number");
    if (t < 1)
      throw new Error("r must be greater than 0");
    const i = Math.ceil(t * 2.57), a = i * 2 + 1, r = t * t * 2, o = r * Math.PI, n = [];
    for (let s = 0; s < a; s++) {
      const l = [];
      for (let h = 0; h < a; h++) {
        const u = (h - i) ** 2 + (s - i) ** 2;
        l[h] = Math.exp(-u / r) / o;
      }
      n.push(l);
    }
    for (let s = 0; s < e.bitmap.height; s++)
      for (let l = 0; l < e.bitmap.width; l++) {
        let h = 0, u = 0, d = 0, m = 0, p = 0;
        for (let g = 0; g < a; g++) {
          for (let k = 0; k < a; k++) {
            const w = Math.min(e.bitmap.width - 1, Math.max(0, k + l - i)), v = Math.min(e.bitmap.height - 1, Math.max(0, g + s - i)), C = n[g][k], B = v * e.bitmap.width + w << 2;
            h += e.bitmap.data[B] * C, u += e.bitmap.data[B + 1] * C, d += e.bitmap.data[B + 2] * C, m += e.bitmap.data[B + 3] * C, p += C;
          }
          const M = s * e.bitmap.width + l << 2;
          e.bitmap.data[M] = Math.round(h / p), e.bitmap.data[M + 1] = Math.round(u / p), e.bitmap.data[M + 2] = Math.round(d / p), e.bitmap.data[M + 3] = Math.round(m / p);
        }
      }
    return e;
  }
}, CircleOptionsSchema = objectType({
  /** the x position to draw the circle */
  x: numberType().optional(),
  /** the y position to draw the circle */
  y: numberType().optional(),
  /** the radius of the circle */
  radius: numberType().min(0).optional()
}), methods$f = {
  /**
   * Creates a circle out of an image.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.circle();
   * // or
   * image.circle({ radius: 50, x: 25, y: 25 });
   * ```
   */
  circle(e, t = {}) {
    const i = CircleOptionsSchema.parse(t), a = i.radius || (e.bitmap.width > e.bitmap.height ? e.bitmap.height : e.bitmap.width) / 2, r = {
      x: typeof i.x == "number" ? i.x : e.bitmap.width / 2,
      y: typeof i.y == "number" ? i.y : e.bitmap.height / 2
    };
    return e.scan((o, n, s) => {
      const l = Math.sqrt(Math.pow(o - r.x, 2) + Math.pow(n - r.y, 2));
      a - l <= 0 ? e.bitmap.data[s + 3] = 0 : a - l < 1 && (e.bitmap.data[s + 3] = 255 * (a - l));
    }), e;
  }
}, ConvolutionMatrixSchema = arrayType(numberType()).min(1).array(), ConvolutionComplexOptionsSchema = objectType({
  /** a matrix to weight the neighbors sum */
  kernel: ConvolutionMatrixSchema,
  /**define how to sum pixels from outside the border */
  edgeHandling: nativeEnumType(Edge).optional()
}), ConvolutionOptionsSchema = unionType([
  ConvolutionMatrixSchema,
  ConvolutionComplexOptionsSchema
]), ConvoluteComplexOptionsSchema = objectType({
  /** the convolution kernel */
  kernel: ConvolutionMatrixSchema,
  /** the x position of the region to apply convolution to */
  x: numberType().optional(),
  /** the y position of the region to apply convolution to */
  y: numberType().optional(),
  /** the width of the region to apply convolution to */
  w: numberType().optional(),
  /** the height of the region to apply convolution to */
  h: numberType().optional()
}), ConvoluteOptionsSchema = unionType([
  ConvolutionMatrixSchema,
  ConvoluteComplexOptionsSchema
]), PixelateSize = numberType().min(1).max(1 / 0), PixelateComplexOptionsSchema = objectType({
  /** the size of the pixels */
  size: PixelateSize,
  /** the x position of the region to pixelate */
  x: numberType().optional(),
  /** the y position of the region to pixelate */
  y: numberType().optional(),
  /** the width of the region to pixelate */
  w: numberType().optional(),
  /** the height of the region to pixelate */
  h: numberType().optional()
}), PixelateOptionsSchema = unionType([
  PixelateSize,
  PixelateComplexOptionsSchema
]);
function applyKernel(e, t, i, a) {
  const r = [0, 0, 0, 0], o = (t.length - 1) / 2;
  for (let n = 0; n < t.length; n += 1)
    for (let s = 0; s < t[n].length; s += 1) {
      const l = e.getPixelIndex(i + n - o, a + s - o);
      r[0] += e.bitmap.data[l] * t[n][s], r[1] += e.bitmap.data[l + 1] * t[n][s], r[2] += e.bitmap.data[l + 2] * t[n][s], r[3] += e.bitmap.data[l + 3] * t[n][s];
    }
  return r;
}
function mix(e, t, i = 50) {
  return {
    r: (t.r - e.r) * (i / 100) + e.r,
    g: (t.g - e.g) * (i / 100) + e.g,
    b: (t.b - e.b) * (i / 100) + e.b
  };
}
const HueActionSchema = objectType({
  apply: literalType("hue"),
  params: tupleType([numberType().min(-360).max(360)])
}), SpinActionSchema = objectType({
  apply: literalType("spin"),
  params: tupleType([numberType().min(-360).max(360)])
}), LightenActionSchema = objectType({
  apply: literalType("lighten"),
  params: tupleType([numberType().min(0).max(100)]).optional()
}), RGBColorSchema = objectType({
  r: numberType().min(0).max(255),
  g: numberType().min(0).max(255),
  b: numberType().min(0).max(255)
}), MixActionSchema = objectType({
  apply: literalType("mix"),
  params: unionType([
    tupleType([RGBColorSchema]),
    tupleType([RGBColorSchema, numberType().min(0).max(100)])
  ])
}), TintActionSchema = objectType({
  apply: literalType("tint"),
  params: tupleType([numberType().min(0).max(100)]).optional()
}), ShadeActionSchema = objectType({
  apply: literalType("shade"),
  params: tupleType([numberType().min(0).max(100)]).optional()
}), XorActionSchema = objectType({
  apply: literalType("xor"),
  params: tupleType([RGBColorSchema])
}), RedActionSchema = objectType({
  apply: literalType("red"),
  params: tupleType([numberType().min(-255).max(255)])
}), GreenActionSchema = objectType({
  apply: literalType("green"),
  params: tupleType([numberType().min(-255).max(255)])
}), BlueActionSchema = objectType({
  apply: literalType("blue"),
  params: tupleType([numberType().min(-255).max(255)])
}), BrightenActionSchema = objectType({
  apply: literalType("brighten"),
  params: tupleType([numberType().min(0).max(100)]).optional()
}), DarkenActionSchema = objectType({
  apply: literalType("darken"),
  params: tupleType([numberType().min(0).max(100)]).optional()
}), DesaturateActionSchema = objectType({
  apply: literalType("desaturate"),
  params: tupleType([numberType().min(0).max(100)]).optional()
}), SaturateActionSchema = objectType({
  apply: literalType("saturate"),
  params: tupleType([numberType().min(0).max(100)]).optional()
}), GrayscaleActionSchema = objectType({
  apply: literalType("greyscale"),
  params: tupleType([]).optional()
}), ColorActionNameSchema = unionType([
  HueActionSchema,
  SpinActionSchema,
  LightenActionSchema,
  MixActionSchema,
  TintActionSchema,
  ShadeActionSchema,
  XorActionSchema,
  RedActionSchema,
  GreenActionSchema,
  BlueActionSchema,
  BrightenActionSchema,
  DarkenActionSchema,
  DesaturateActionSchema,
  SaturateActionSchema,
  GrayscaleActionSchema
]);
function histogram(e) {
  const t = {
    r: new Array(256).fill(0),
    g: new Array(256).fill(0),
    b: new Array(256).fill(0)
  };
  return e.scan((i, a, r) => {
    t.r[e.bitmap.data[r + 0]]++, t.g[e.bitmap.data[r + 1]]++, t.b[e.bitmap.data[r + 2]]++;
  }), t;
}
const normalizeValue = function(e, t, i) {
  return (e - t) * 255 / (i - t);
}, getBounds = function(e) {
  return [
    e.findIndex((t) => t > 0),
    255 - e.slice().reverse().findIndex((t) => t > 0)
  ];
}, methods$e = {
  /**
   * Normalizes the image.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.normalize();
   * ```
   */
  normalize(e) {
    const t = histogram(e), i = {
      r: getBounds(t.r),
      g: getBounds(t.g),
      b: getBounds(t.b)
    };
    return e.scan((a, r, o) => {
      const n = e.bitmap.data[o + 0], s = e.bitmap.data[o + 1], l = e.bitmap.data[o + 2];
      e.bitmap.data[o + 0] = normalizeValue(n, i.r[0], i.r[1]), e.bitmap.data[o + 1] = normalizeValue(s, i.g[0], i.g[1]), e.bitmap.data[o + 2] = normalizeValue(l, i.b[0], i.b[1]);
    }), e;
  },
  /**
   * Inverts the colors in the image.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.invert();
   * ```
   */
  invert(e) {
    return e.scan((t, i, a) => {
      e.bitmap.data[a] = 255 - e.bitmap.data[a], e.bitmap.data[a + 1] = 255 - e.bitmap.data[a + 1], e.bitmap.data[a + 2] = 255 - e.bitmap.data[a + 2];
    }), e;
  },
  /**
   * Adjusts the brightness of the image
   * @param val the amount to adjust the brightness.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.brightness(0.5);
   * ```
   */
  brightness(e, t) {
    if (typeof t != "number")
      throw new Error("val must be numbers");
    return e.scan((i, a, r) => {
      e.bitmap.data[r] = limit255(e.bitmap.data[r] * t), e.bitmap.data[r + 1] = limit255(e.bitmap.data[r + 1] * t), e.bitmap.data[r + 2] = limit255(e.bitmap.data[r + 2] * t);
    }), e;
  },
  /**
   * Adjusts the contrast of the image
   * @param val the amount to adjust the contrast, a number between -1 and +1
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.contrast(0.75);
   * ```
   */
  contrast(e, t) {
    if (typeof t != "number")
      throw new Error("val must be numbers");
    if (t < -1 || t > 1)
      throw new Error("val must be a number between -1 and +1");
    const i = (t + 1) / (1 - t);
    function a(r) {
      return r = Math.floor(i * (r - 127) + 127), r < 0 ? 0 : r > 255 ? 255 : r;
    }
    return e.scan((r, o, n) => {
      e.bitmap.data[n] = a(e.bitmap.data[n]), e.bitmap.data[n + 1] = a(e.bitmap.data[n + 1]), e.bitmap.data[n + 2] = a(e.bitmap.data[n + 2]);
    }), e;
  },
  /**
   * Apply a posterize effect
   * @param  n the amount to adjust the contrast, minimum threshold is two
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.posterize(5);
   * ```
   */
  posterize(e, t) {
    if (typeof t != "number")
      throw new Error("n must be numbers");
    return t < 2 && (t = 2), e.scan((i, a, r) => {
      const o = e.bitmap.data[r], n = e.bitmap.data[r + 1], s = e.bitmap.data[r + 2];
      e.bitmap.data[r] = Math.floor(o / 255 * (t - 1)) / (t - 1) * 255, e.bitmap.data[r + 1] = Math.floor(n / 255 * (t - 1)) / (t - 1) * 255, e.bitmap.data[r + 2] = Math.floor(s / 255 * (t - 1)) / (t - 1) * 255;
    }), e;
  },
  /**
   * Removes colour from the image using ITU Rec 709 luminance values
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.greyscale();
   * ```
   */
  greyscale(e) {
    return e.scan((t, i, a) => {
      const r = 0.2126 * e.bitmap.data[a] + 0.7152 * e.bitmap.data[a + 1] + 0.0722 * e.bitmap.data[a + 2];
      e.bitmap.data[a] = r, e.bitmap.data[a + 1] = r, e.bitmap.data[a + 2] = r;
    }), e;
  },
  /**
   * Multiplies the opacity of each pixel by a factor between 0 and 1
   * @param f A number, the factor by which to multiply the opacity of each pixel
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.opacity(0.5);
   * ```
   */
  opacity(e, t) {
    if (typeof t != "number")
      throw new Error("f must be a number");
    if (t < 0 || t > 1)
      throw new Error("f must be a number from 0 to 1");
    return e.scan((i, a, r) => {
      const o = e.bitmap.data[r + 3] * t;
      e.bitmap.data[r + 3] = o;
    }), e;
  },
  /**
   * Applies a sepia tone to the image.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.sepia();
   * ```
   */
  sepia(e) {
    return e.scan((t, i, a) => {
      let r = e.bitmap.data[a], o = e.bitmap.data[a + 1], n = e.bitmap.data[a + 2];
      r = r * 0.393 + o * 0.769 + n * 0.189, o = r * 0.349 + o * 0.686 + n * 0.168, n = r * 0.272 + o * 0.534 + n * 0.131, e.bitmap.data[a] = r < 255 ? r : 255, e.bitmap.data[a + 1] = o < 255 ? o : 255, e.bitmap.data[a + 2] = n < 255 ? n : 255;
    }), e;
  },
  /**
   * Fades each pixel by a factor between 0 and 1
   * @param f A number from 0 to 1. 0 will haven no effect. 1 will turn the image completely transparent.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.fade(0.7);
   * ```
   */
  fade(e, t) {
    if (typeof t != "number")
      throw new Error("f must be a number");
    if (t < 0 || t > 1)
      throw new Error("f must be a number from 0 to 1");
    return this.opacity(e, 1 - t);
  },
  /**
   * Adds each element of the image to its local neighbors, weighted by the kernel
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.convolute([
   *   [-1, -1, 0],
   *   [-1, 1, 1],
   *   [0, 1, 1],
   * ]);
   * ```
   */
  convolution(e, t) {
    const i = ConvolutionOptionsSchema.parse(t), { kernel: a, edgeHandling: r = Edge.EXTEND } = "kernel" in i ? i : { kernel: i, edgeHandling: void 0 };
    if (!a[0])
      throw new Error("kernel must be a matrix");
    const o = Buffer.from(e.bitmap.data), n = a.length, s = a[0].length, l = Math.floor(n / 2), h = Math.floor(s / 2), u = -l, d = -h;
    let m, p, g, M, k, w, v, C, B, A;
    return e.scan((S, b, E) => {
      M = 0, g = 0, p = 0;
      for (let F = u; F <= l; F++)
        for (let Z = d; Z <= h; Z++)
          C = S + Z, B = b + F, m = a[F + l][Z + h], A = e.getPixelIndex(C, B, r), A === -1 ? (v = 0, w = 0, k = 0) : (k = e.bitmap.data[A + 0], w = e.bitmap.data[A + 1], v = e.bitmap.data[A + 2]), p += m * k, g += m * w, M += m * v;
      p < 0 && (p = 0), g < 0 && (g = 0), M < 0 && (M = 0), p > 255 && (p = 255), g > 255 && (g = 255), M > 255 && (M = 255), o[E + 0] = p, o[E + 1] = g, o[E + 2] = M;
    }), e.bitmap.data = o, e;
  },
  /**
   * Set the alpha channel on every pixel to fully opaque.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.opaque();
   * ```
   */
  opaque(e) {
    return e.scan((t, i, a) => {
      e.bitmap.data[a + 3] = 255;
    }), e;
  },
  /**
   * Pixelates the image or a region
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * // pixelate the whole image
   * image.pixelate(10);
   *
   * // pixelate a region
   * image.pixelate(10, 10, 10, 20, 20);
   * ```
   */
  pixelate(e, t) {
    const i = PixelateOptionsSchema.parse(t), { size: a, x: r = 0, y: o = 0, w: n = e.bitmap.width - r, h: s = e.bitmap.height - o } = typeof i == "number" ? { size: i } : i, l = [
      [1 / 16, 2 / 16, 1 / 16],
      [2 / 16, 4 / 16, 2 / 16],
      [1 / 16, 2 / 16, 1 / 16]
    ], h = clone(e);
    return scan(h, r, o, n, s, (u, d, m) => {
      u = a * Math.floor(u / a), d = a * Math.floor(d / a);
      const p = applyKernel(h, l, u, d);
      e.bitmap.data[m] = p[0], e.bitmap.data[m + 1] = p[1], e.bitmap.data[m + 2] = p[2], e.bitmap.data[m + 3] = p[3];
    }), e;
  },
  /**
   * Applies a convolution kernel to the image or a region
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * // apply a convolution kernel to the whole image
   * image.convolution([
   *   [-1, -1, 0],
   *   [-1, 1, 1],
   *   [0, 1, 1],
   * ]);
   *
   * // apply a convolution kernel to a region
   * image.convolution([
   *   [-1, -1, 0],
   *   [-1, 1, 1],
   *   [0, 1, 1],
   * ], 10, 10, 10, 20);
   * ```
   */
  convolute(e, t) {
    const i = ConvoluteOptionsSchema.parse(t), { kernel: a, x: r = 0, y: o = 0, w: n = e.bitmap.width - r, h: s = e.bitmap.height - o } = "kernel" in i ? i : { kernel: i }, l = clone(e);
    return scan(l, r, o, n, s, (h, u, d) => {
      const m = applyKernel(l, a, h, u);
      e.bitmap.data[d] = limit255(m[0]), e.bitmap.data[d + 1] = limit255(m[1]), e.bitmap.data[d + 2] = limit255(m[2]), e.bitmap.data[d + 3] = limit255(m[3]);
    }), e;
  },
  /**
   * Apply multiple color modification rules
   * @param  actions list of color modification rules, in following format: { apply: '<rule-name>', params: [ <rule-parameters> ]  }
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.color([
   *   { apply: "hue", params: [-90] },
   *   { apply: "lighten", params: [50] },
   *   { apply: "xor", params: ["#06D"] },
   * ]);
   * ```
   */
  color(e, t) {
    if (!t || !Array.isArray(t))
      throw new Error("actions must be an array");
    return t.forEach((i) => ColorActionNameSchema.parse(i)), t = t.map((i) => ((i.apply === "xor" || i.apply === "mix") && (i.params[0] = tinycolor(i.params[0]).toRgb()), i)), e.scan((i, a, r) => {
      let o = {
        r: e.bitmap.data[r],
        g: e.bitmap.data[r + 1],
        b: e.bitmap.data[r + 2]
      };
      const n = (s, l) => limit255(o[s] + l);
      t.forEach((s) => {
        var l, h;
        if (s.apply === "mix")
          o = mix(o, s.params[0], s.params[1]);
        else if (s.apply === "tint")
          o = mix(o, { r: 255, g: 255, b: 255 }, (l = s.params) == null ? void 0 : l[0]);
        else if (s.apply === "shade")
          o = mix(o, { r: 0, g: 0, b: 0 }, (h = s.params) == null ? void 0 : h[0]);
        else if (s.apply === "xor")
          o = {
            r: o.r ^ s.params[0].r,
            g: o.g ^ s.params[0].g,
            b: o.b ^ s.params[0].b
          };
        else if (s.apply === "red")
          o.r = n("r", s.params[0]);
        else if (s.apply === "green")
          o.g = n("g", s.params[0]);
        else if (s.apply === "blue")
          o.b = n("b", s.params[0]);
        else {
          s.apply === "hue" && (s.apply = "spin");
          const u = tinycolor(o), d = u[s.apply].bind(u);
          if (!d)
            throw new Error("action " + s.apply + " not supported");
          o = d(...s.params || []).toRgb();
        }
      }), e.bitmap.data[r] = o.r, e.bitmap.data[r + 1] = o.g, e.bitmap.data[r + 2] = o.b;
    }), e;
  }
};
var lib$1 = {}, ieee754 = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var hasRequiredIeee754;
function requireIeee754() {
  return hasRequiredIeee754 || (hasRequiredIeee754 = 1, ieee754.read = function(e, t, i, a, r) {
    var o, n, s = r * 8 - a - 1, l = (1 << s) - 1, h = l >> 1, u = -7, d = i ? r - 1 : 0, m = i ? -1 : 1, p = e[t + d];
    for (d += m, o = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; o = o * 256 + e[t + d], d += m, u -= 8)
      ;
    for (n = o & (1 << -u) - 1, o >>= -u, u += a; u > 0; n = n * 256 + e[t + d], d += m, u -= 8)
      ;
    if (o === 0)
      o = 1 - h;
    else {
      if (o === l)
        return n ? NaN : (p ? -1 : 1) * (1 / 0);
      n = n + Math.pow(2, a), o = o - h;
    }
    return (p ? -1 : 1) * n * Math.pow(2, o - a);
  }, ieee754.write = function(e, t, i, a, r, o) {
    var n, s, l, h = o * 8 - r - 1, u = (1 << h) - 1, d = u >> 1, m = r === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = a ? 0 : o - 1, g = a ? 1 : -1, M = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, n = u) : (n = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -n)) < 1 && (n--, l *= 2), n + d >= 1 ? t += m / l : t += m * Math.pow(2, 1 - d), t * l >= 2 && (n++, l /= 2), n + d >= u ? (s = 0, n = u) : n + d >= 1 ? (s = (t * l - 1) * Math.pow(2, r), n = n + d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, r), n = 0)); r >= 8; e[i + p] = s & 255, p += g, s /= 256, r -= 8)
      ;
    for (n = n << r | s, h += r; h > 0; e[i + p] = n & 255, p += g, n /= 256, h -= 8)
      ;
    e[i + p - g] |= M * 128;
  }), ieee754;
}
var hasRequiredLib$1;
function requireLib$1() {
  return hasRequiredLib$1 || (hasRequiredLib$1 = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AnsiStringType = e.StringType = e.BufferType = e.Uint8ArrayType = e.IgnoreType = e.Float80_LE = e.Float80_BE = e.Float64_LE = e.Float64_BE = e.Float32_LE = e.Float32_BE = e.Float16_LE = e.Float16_BE = e.INT64_BE = e.UINT64_BE = e.INT64_LE = e.UINT64_LE = e.INT32_LE = e.INT32_BE = e.INT24_BE = e.INT24_LE = e.INT16_LE = e.INT16_BE = e.INT8 = e.UINT32_BE = e.UINT32_LE = e.UINT24_BE = e.UINT24_LE = e.UINT16_BE = e.UINT16_LE = e.UINT8 = void 0;
    const t = requireIeee754();
    function i(l) {
      return new DataView(l.buffer, l.byteOffset);
    }
    e.UINT8 = {
      len: 1,
      get(l, h) {
        return i(l).getUint8(h);
      },
      put(l, h, u) {
        return i(l).setUint8(h, u), h + 1;
      }
    }, e.UINT16_LE = {
      len: 2,
      get(l, h) {
        return i(l).getUint16(h, !0);
      },
      put(l, h, u) {
        return i(l).setUint16(h, u, !0), h + 2;
      }
    }, e.UINT16_BE = {
      len: 2,
      get(l, h) {
        return i(l).getUint16(h);
      },
      put(l, h, u) {
        return i(l).setUint16(h, u), h + 2;
      }
    }, e.UINT24_LE = {
      len: 3,
      get(l, h) {
        const u = i(l);
        return u.getUint8(h) + (u.getUint16(h + 1, !0) << 8);
      },
      put(l, h, u) {
        const d = i(l);
        return d.setUint8(h, u & 255), d.setUint16(h + 1, u >> 8, !0), h + 3;
      }
    }, e.UINT24_BE = {
      len: 3,
      get(l, h) {
        const u = i(l);
        return (u.getUint16(h) << 8) + u.getUint8(h + 2);
      },
      put(l, h, u) {
        const d = i(l);
        return d.setUint16(h, u >> 8), d.setUint8(h + 2, u & 255), h + 3;
      }
    }, e.UINT32_LE = {
      len: 4,
      get(l, h) {
        return i(l).getUint32(h, !0);
      },
      put(l, h, u) {
        return i(l).setUint32(h, u, !0), h + 4;
      }
    }, e.UINT32_BE = {
      len: 4,
      get(l, h) {
        return i(l).getUint32(h);
      },
      put(l, h, u) {
        return i(l).setUint32(h, u), h + 4;
      }
    }, e.INT8 = {
      len: 1,
      get(l, h) {
        return i(l).getInt8(h);
      },
      put(l, h, u) {
        return i(l).setInt8(h, u), h + 1;
      }
    }, e.INT16_BE = {
      len: 2,
      get(l, h) {
        return i(l).getInt16(h);
      },
      put(l, h, u) {
        return i(l).setInt16(h, u), h + 2;
      }
    }, e.INT16_LE = {
      len: 2,
      get(l, h) {
        return i(l).getInt16(h, !0);
      },
      put(l, h, u) {
        return i(l).setInt16(h, u, !0), h + 2;
      }
    }, e.INT24_LE = {
      len: 3,
      get(l, h) {
        const u = e.UINT24_LE.get(l, h);
        return u > 8388607 ? u - 16777216 : u;
      },
      put(l, h, u) {
        const d = i(l);
        return d.setUint8(h, u & 255), d.setUint16(h + 1, u >> 8, !0), h + 3;
      }
    }, e.INT24_BE = {
      len: 3,
      get(l, h) {
        const u = e.UINT24_BE.get(l, h);
        return u > 8388607 ? u - 16777216 : u;
      },
      put(l, h, u) {
        const d = i(l);
        return d.setUint16(h, u >> 8), d.setUint8(h + 2, u & 255), h + 3;
      }
    }, e.INT32_BE = {
      len: 4,
      get(l, h) {
        return i(l).getInt32(h);
      },
      put(l, h, u) {
        return i(l).setInt32(h, u), h + 4;
      }
    }, e.INT32_LE = {
      len: 4,
      get(l, h) {
        return i(l).getInt32(h, !0);
      },
      put(l, h, u) {
        return i(l).setInt32(h, u, !0), h + 4;
      }
    }, e.UINT64_LE = {
      len: 8,
      get(l, h) {
        return i(l).getBigUint64(h, !0);
      },
      put(l, h, u) {
        return i(l).setBigUint64(h, u, !0), h + 8;
      }
    }, e.INT64_LE = {
      len: 8,
      get(l, h) {
        return i(l).getBigInt64(h, !0);
      },
      put(l, h, u) {
        return i(l).setBigInt64(h, u, !0), h + 8;
      }
    }, e.UINT64_BE = {
      len: 8,
      get(l, h) {
        return i(l).getBigUint64(h);
      },
      put(l, h, u) {
        return i(l).setBigUint64(h, u), h + 8;
      }
    }, e.INT64_BE = {
      len: 8,
      get(l, h) {
        return i(l).getBigInt64(h);
      },
      put(l, h, u) {
        return i(l).setBigInt64(h, u), h + 8;
      }
    }, e.Float16_BE = {
      len: 2,
      get(l, h) {
        return t.read(l, h, !1, 10, this.len);
      },
      put(l, h, u) {
        return t.write(l, u, h, !1, 10, this.len), h + this.len;
      }
    }, e.Float16_LE = {
      len: 2,
      get(l, h) {
        return t.read(l, h, !0, 10, this.len);
      },
      put(l, h, u) {
        return t.write(l, u, h, !0, 10, this.len), h + this.len;
      }
    }, e.Float32_BE = {
      len: 4,
      get(l, h) {
        return i(l).getFloat32(h);
      },
      put(l, h, u) {
        return i(l).setFloat32(h, u), h + 4;
      }
    }, e.Float32_LE = {
      len: 4,
      get(l, h) {
        return i(l).getFloat32(h, !0);
      },
      put(l, h, u) {
        return i(l).setFloat32(h, u, !0), h + 4;
      }
    }, e.Float64_BE = {
      len: 8,
      get(l, h) {
        return i(l).getFloat64(h);
      },
      put(l, h, u) {
        return i(l).setFloat64(h, u), h + 8;
      }
    }, e.Float64_LE = {
      len: 8,
      get(l, h) {
        return i(l).getFloat64(h, !0);
      },
      put(l, h, u) {
        return i(l).setFloat64(h, u, !0), h + 8;
      }
    }, e.Float80_BE = {
      len: 10,
      get(l, h) {
        return t.read(l, h, !1, 63, this.len);
      },
      put(l, h, u) {
        return t.write(l, u, h, !1, 63, this.len), h + this.len;
      }
    }, e.Float80_LE = {
      len: 10,
      get(l, h) {
        return t.read(l, h, !0, 63, this.len);
      },
      put(l, h, u) {
        return t.write(l, u, h, !0, 63, this.len), h + this.len;
      }
    };
    class a {
      /**
       * @param len number of bytes to ignore
       */
      constructor(h) {
        this.len = h;
      }
      // ToDo: don't read, but skip data
      get(h, u) {
      }
    }
    e.IgnoreType = a;
    class r {
      constructor(h) {
        this.len = h;
      }
      get(h, u) {
        return h.subarray(u, u + this.len);
      }
    }
    e.Uint8ArrayType = r;
    class o {
      constructor(h) {
        this.len = h;
      }
      get(h, u) {
        return Buffer.from(h.subarray(u, u + this.len));
      }
    }
    e.BufferType = o;
    class n {
      constructor(h, u) {
        this.len = h, this.encoding = u;
      }
      get(h, u) {
        return Buffer.from(h).toString(this.encoding, u, u + this.len);
      }
    }
    e.StringType = n;
    class s {
      constructor(h) {
        this.len = h;
      }
      static decode(h, u, d) {
        let m = "";
        for (let p = u; p < d; ++p)
          m += s.codePointToString(s.singleByteDecoder(h[p]));
        return m;
      }
      static inRange(h, u, d) {
        return u <= h && h <= d;
      }
      static codePointToString(h) {
        return h <= 65535 ? String.fromCharCode(h) : (h -= 65536, String.fromCharCode((h >> 10) + 55296, (h & 1023) + 56320));
      }
      static singleByteDecoder(h) {
        if (s.inRange(h, 0, 127))
          return h;
        const u = s.windows1252[h - 128];
        if (u === null)
          throw Error("invaliding encoding");
        return u;
      }
      get(h, u = 0) {
        return s.decode(h, u, u + this.len);
      }
    }
    e.AnsiStringType = s, s.windows1252 = [
      8364,
      129,
      8218,
      402,
      8222,
      8230,
      8224,
      8225,
      710,
      8240,
      352,
      8249,
      338,
      141,
      381,
      143,
      144,
      8216,
      8217,
      8220,
      8221,
      8226,
      8211,
      8212,
      732,
      8482,
      353,
      8250,
      339,
      157,
      382,
      376,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      235,
      236,
      237,
      238,
      239,
      240,
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250,
      251,
      252,
      253,
      254,
      255
    ];
  })(lib$1)), lib$1;
}
var core$1 = {}, ReadStreamTokenizer = {}, AbstractTokenizer = {}, lib = {}, EndOfFileStream = {}, hasRequiredEndOfFileStream;
function requireEndOfFileStream() {
  return hasRequiredEndOfFileStream || (hasRequiredEndOfFileStream = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.EndOfStreamError = e.defaultMessages = void 0, e.defaultMessages = "End-Of-Stream";
    class t extends Error {
      constructor() {
        super(e.defaultMessages);
      }
    }
    e.EndOfStreamError = t;
  })(EndOfFileStream)), EndOfFileStream;
}
var StreamReader = {}, Deferred = {}, hasRequiredDeferred;
function requireDeferred() {
  if (hasRequiredDeferred) return Deferred;
  hasRequiredDeferred = 1, Object.defineProperty(Deferred, "__esModule", { value: !0 }), Deferred.Deferred = void 0;
  let e = class {
    constructor() {
      this.resolve = () => null, this.reject = () => null, this.promise = new Promise((i, a) => {
        this.reject = a, this.resolve = i;
      });
    }
  };
  return Deferred.Deferred = e, Deferred;
}
var hasRequiredStreamReader;
function requireStreamReader() {
  return hasRequiredStreamReader || (hasRequiredStreamReader = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.StreamReader = e.EndOfStreamError = void 0;
    const t = requireEndOfFileStream(), i = requireDeferred();
    var a = requireEndOfFileStream();
    Object.defineProperty(e, "EndOfStreamError", { enumerable: !0, get: function() {
      return a.EndOfStreamError;
    } });
    const r = 1 * 1024 * 1024;
    class o {
      constructor(s) {
        if (this.s = s, this.deferred = null, this.endOfStream = !1, this.peekQueue = [], !s.read || !s.once)
          throw new Error("Expected an instance of stream.Readable");
        this.s.once("end", () => this.reject(new t.EndOfStreamError())), this.s.once("error", (l) => this.reject(l)), this.s.once("close", () => this.reject(new Error("Stream closed")));
      }
      /**
       * Read ahead (peek) from stream. Subsequent read or peeks will return the same data
       * @param uint8Array - Uint8Array (or Buffer) to store data read from stream in
       * @param offset - Offset target
       * @param length - Number of bytes to read
       * @returns Number of bytes peeked
       */
      async peek(s, l, h) {
        const u = await this.read(s, l, h);
        return this.peekQueue.push(s.subarray(l, l + u)), u;
      }
      /**
       * Read chunk from stream
       * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in
       * @param offset - Offset target
       * @param length - Number of bytes to read
       * @returns Number of bytes read
       */
      async read(s, l, h) {
        if (h === 0)
          return 0;
        if (this.peekQueue.length === 0 && this.endOfStream)
          throw new t.EndOfStreamError();
        let u = h, d = 0;
        for (; this.peekQueue.length > 0 && u > 0; ) {
          const m = this.peekQueue.pop();
          if (!m)
            throw new Error("peekData should be defined");
          const p = Math.min(m.length, u);
          s.set(m.subarray(0, p), l + d), d += p, u -= p, p < m.length && this.peekQueue.push(m.subarray(p));
        }
        for (; u > 0 && !this.endOfStream; ) {
          const m = Math.min(u, r), p = await this.readFromStream(s, l + d, m);
          if (d += p, p < m)
            break;
          u -= p;
        }
        return d;
      }
      /**
       * Read chunk from stream
       * @param buffer Target Uint8Array (or Buffer) to store data read from stream in
       * @param offset Offset target
       * @param length Number of bytes to read
       * @returns Number of bytes read
       */
      async readFromStream(s, l, h) {
        const u = this.s.read(h);
        if (u)
          return s.set(u, l), u.length;
        {
          const d = {
            buffer: s,
            offset: l,
            length: h,
            deferred: new i.Deferred()
          };
          return this.deferred = d.deferred, this.s.once("readable", () => {
            this.readDeferred(d);
          }), d.deferred.promise;
        }
      }
      /**
       * Process deferred read request
       * @param request Deferred read request
       */
      readDeferred(s) {
        const l = this.s.read(s.length);
        l ? (s.buffer.set(l, s.offset), s.deferred.resolve(l.length), this.deferred = null) : this.s.once("readable", () => {
          this.readDeferred(s);
        });
      }
      reject(s) {
        this.endOfStream = !0, this.deferred && (this.deferred.reject(s), this.deferred = null);
      }
    }
    e.StreamReader = o;
  })(StreamReader)), StreamReader;
}
var hasRequiredLib;
function requireLib() {
  return hasRequiredLib || (hasRequiredLib = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.StreamReader = e.EndOfStreamError = void 0;
    var t = requireEndOfFileStream();
    Object.defineProperty(e, "EndOfStreamError", { enumerable: !0, get: function() {
      return t.EndOfStreamError;
    } });
    var i = requireStreamReader();
    Object.defineProperty(e, "StreamReader", { enumerable: !0, get: function() {
      return i.StreamReader;
    } });
  })(lib)), lib;
}
var hasRequiredAbstractTokenizer;
function requireAbstractTokenizer() {
  if (hasRequiredAbstractTokenizer) return AbstractTokenizer;
  hasRequiredAbstractTokenizer = 1, Object.defineProperty(AbstractTokenizer, "__esModule", { value: !0 }), AbstractTokenizer.AbstractTokenizer = void 0;
  const e = requireLib();
  let t = class {
    constructor(a) {
      this.position = 0, this.numBuffer = new Uint8Array(8), this.fileInfo = a || {};
    }
    /**
     * Read a token from the tokenizer-stream
     * @param token - The token to read
     * @param position - If provided, the desired position in the tokenizer-stream
     * @returns Promise with token data
     */
    async readToken(a, r = this.position) {
      const o = Buffer.alloc(a.len);
      if (await this.readBuffer(o, { position: r }) < a.len)
        throw new e.EndOfStreamError();
      return a.get(o, 0);
    }
    /**
     * Peek a token from the tokenizer-stream.
     * @param token - Token to peek from the tokenizer-stream.
     * @param position - Offset where to begin reading within the file. If position is null, data will be read from the current file position.
     * @returns Promise with token data
     */
    async peekToken(a, r = this.position) {
      const o = Buffer.alloc(a.len);
      if (await this.peekBuffer(o, { position: r }) < a.len)
        throw new e.EndOfStreamError();
      return a.get(o, 0);
    }
    /**
     * Read a numeric token from the stream
     * @param token - Numeric token
     * @returns Promise with number
     */
    async readNumber(a) {
      if (await this.readBuffer(this.numBuffer, { length: a.len }) < a.len)
        throw new e.EndOfStreamError();
      return a.get(this.numBuffer, 0);
    }
    /**
     * Read a numeric token from the stream
     * @param token - Numeric token
     * @returns Promise with number
     */
    async peekNumber(a) {
      if (await this.peekBuffer(this.numBuffer, { length: a.len }) < a.len)
        throw new e.EndOfStreamError();
      return a.get(this.numBuffer, 0);
    }
    /**
     * Ignore number of bytes, advances the pointer in under tokenizer-stream.
     * @param length - Number of bytes to ignore
     * @return resolves the number of bytes ignored, equals length if this available, otherwise the number of bytes available
     */
    async ignore(a) {
      if (this.fileInfo.size !== void 0) {
        const r = this.fileInfo.size - this.position;
        if (a > r)
          return this.position += r, r;
      }
      return this.position += a, a;
    }
    async close() {
    }
    normalizeOptions(a, r) {
      if (r && r.position !== void 0 && r.position < this.position)
        throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
      return r ? {
        mayBeLess: r.mayBeLess === !0,
        offset: r.offset ? r.offset : 0,
        length: r.length ? r.length : a.length - (r.offset ? r.offset : 0),
        position: r.position ? r.position : this.position
      } : {
        mayBeLess: !1,
        offset: 0,
        length: a.length,
        position: this.position
      };
    }
  };
  return AbstractTokenizer.AbstractTokenizer = t, AbstractTokenizer;
}
var hasRequiredReadStreamTokenizer;
function requireReadStreamTokenizer() {
  if (hasRequiredReadStreamTokenizer) return ReadStreamTokenizer;
  hasRequiredReadStreamTokenizer = 1, Object.defineProperty(ReadStreamTokenizer, "__esModule", { value: !0 }), ReadStreamTokenizer.ReadStreamTokenizer = void 0;
  const e = requireAbstractTokenizer(), t = requireLib(), i = 256e3;
  let a = class extends e.AbstractTokenizer {
    constructor(o, n) {
      super(n), this.streamReader = new t.StreamReader(o);
    }
    /**
     * Get file information, an HTTP-client may implement this doing a HEAD request
     * @return Promise with file information
     */
    async getFileInfo() {
      return this.fileInfo;
    }
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Target Uint8Array to fill with data read from the tokenizer-stream
     * @param options - Read behaviour options
     * @returns Promise with number of bytes read
     */
    async readBuffer(o, n) {
      const s = this.normalizeOptions(o, n), l = s.position - this.position;
      if (l > 0)
        return await this.ignore(l), this.readBuffer(o, n);
      if (l < 0)
        throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
      if (s.length === 0)
        return 0;
      const h = await this.streamReader.read(o, s.offset, s.length);
      if (this.position += h, (!n || !n.mayBeLess) && h < s.length)
        throw new t.EndOfStreamError();
      return h;
    }
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param uint8Array - Uint8Array (or Buffer) to write data to
     * @param options - Read behaviour options
     * @returns Promise with number of bytes peeked
     */
    async peekBuffer(o, n) {
      const s = this.normalizeOptions(o, n);
      let l = 0;
      if (s.position) {
        const h = s.position - this.position;
        if (h > 0) {
          const u = new Uint8Array(s.length + h);
          return l = await this.peekBuffer(u, { mayBeLess: s.mayBeLess }), o.set(u.subarray(h), s.offset), l - h;
        } else if (h < 0)
          throw new Error("Cannot peek from a negative offset in a stream");
      }
      if (s.length > 0) {
        try {
          l = await this.streamReader.peek(o, s.offset, s.length);
        } catch (h) {
          if (n && n.mayBeLess && h instanceof t.EndOfStreamError)
            return 0;
          throw h;
        }
        if (!s.mayBeLess && l < s.length)
          throw new t.EndOfStreamError();
      }
      return l;
    }
    async ignore(o) {
      const n = Math.min(i, o), s = new Uint8Array(n);
      let l = 0;
      for (; l < o; ) {
        const h = o - l, u = await this.readBuffer(s, { length: Math.min(n, h) });
        if (u < 0)
          return u;
        l += u;
      }
      return l;
    }
  };
  return ReadStreamTokenizer.ReadStreamTokenizer = a, ReadStreamTokenizer;
}
var BufferTokenizer = {}, hasRequiredBufferTokenizer;
function requireBufferTokenizer() {
  if (hasRequiredBufferTokenizer) return BufferTokenizer;
  hasRequiredBufferTokenizer = 1, Object.defineProperty(BufferTokenizer, "__esModule", { value: !0 }), BufferTokenizer.BufferTokenizer = void 0;
  const e = requireLib(), t = requireAbstractTokenizer();
  let i = class extends t.AbstractTokenizer {
    /**
     * Construct BufferTokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param fileInfo - Pass additional file information to the tokenizer
     */
    constructor(r, o) {
      super(o), this.uint8Array = r, this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : r.length;
    }
    /**
     * Read buffer from tokenizer
     * @param uint8Array - Uint8Array to tokenize
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */
    async readBuffer(r, o) {
      if (o && o.position) {
        if (o.position < this.position)
          throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
        this.position = o.position;
      }
      const n = await this.peekBuffer(r, o);
      return this.position += n, n;
    }
    /**
     * Peek (read ahead) buffer from tokenizer
     * @param uint8Array
     * @param options - Read behaviour options
     * @returns {Promise<number>}
     */
    async peekBuffer(r, o) {
      const n = this.normalizeOptions(r, o), s = Math.min(this.uint8Array.length - n.position, n.length);
      if (!n.mayBeLess && s < n.length)
        throw new e.EndOfStreamError();
      return r.set(this.uint8Array.subarray(n.position, n.position + s), n.offset), s;
    }
    async close() {
    }
  };
  return BufferTokenizer.BufferTokenizer = i, BufferTokenizer;
}
var hasRequiredCore$1;
function requireCore$1() {
  return hasRequiredCore$1 || (hasRequiredCore$1 = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.fromBuffer = e.fromStream = e.EndOfStreamError = void 0;
    const t = requireReadStreamTokenizer(), i = requireBufferTokenizer();
    var a = requireLib();
    Object.defineProperty(e, "EndOfStreamError", { enumerable: !0, get: function() {
      return a.EndOfStreamError;
    } });
    function r(n, s) {
      return s = s || {}, new t.ReadStreamTokenizer(n, s);
    }
    e.fromStream = r;
    function o(n, s) {
      return new i.BufferTokenizer(n, s);
    }
    e.fromBuffer = o;
  })(core$1)), core$1;
}
var util = {}, hasRequiredUtil;
function requireUtil() {
  return hasRequiredUtil || (hasRequiredUtil = 1, util.stringToBytes = (e) => [...e].map((t) => t.charCodeAt(0)), util.tarHeaderChecksumMatches = (e, t = 0) => {
    const i = parseInt(e.toString("utf8", 148, 154).replace(/\0.*$/, "").trim(), 8);
    if (isNaN(i))
      return !1;
    let a = 256;
    for (let r = t; r < t + 148; r++)
      a += e[r];
    for (let r = t + 156; r < t + 512; r++)
      a += e[r];
    return i === a;
  }, util.uint32SyncSafeToken = {
    get: (e, t) => e[t + 3] & 127 | e[t + 2] << 7 | e[t + 1] << 14 | e[t] << 21,
    len: 4
  }), util;
}
var supported, hasRequiredSupported;
function requireSupported() {
  return hasRequiredSupported || (hasRequiredSupported = 1, supported = {
    extensions: [
      "jpg",
      "png",
      "apng",
      "gif",
      "webp",
      "flif",
      "xcf",
      "cr2",
      "cr3",
      "orf",
      "arw",
      "dng",
      "nef",
      "rw2",
      "raf",
      "tif",
      "bmp",
      "icns",
      "jxr",
      "psd",
      "indd",
      "zip",
      "tar",
      "rar",
      "gz",
      "bz2",
      "7z",
      "dmg",
      "mp4",
      "mid",
      "mkv",
      "webm",
      "mov",
      "avi",
      "mpg",
      "mp2",
      "mp3",
      "m4a",
      "oga",
      "ogg",
      "ogv",
      "opus",
      "flac",
      "wav",
      "spx",
      "amr",
      "pdf",
      "epub",
      "exe",
      "swf",
      "rtf",
      "wasm",
      "woff",
      "woff2",
      "eot",
      "ttf",
      "otf",
      "ico",
      "flv",
      "ps",
      "xz",
      "sqlite",
      "nes",
      "crx",
      "xpi",
      "cab",
      "deb",
      "ar",
      "rpm",
      "Z",
      "lz",
      "cfb",
      "mxf",
      "mts",
      "blend",
      "bpg",
      "docx",
      "pptx",
      "xlsx",
      "3gp",
      "3g2",
      "jp2",
      "jpm",
      "jpx",
      "mj2",
      "aif",
      "qcp",
      "odt",
      "ods",
      "odp",
      "xml",
      "mobi",
      "heic",
      "cur",
      "ktx",
      "ape",
      "wv",
      "dcm",
      "ics",
      "glb",
      "pcap",
      "dsf",
      "lnk",
      "alias",
      "voc",
      "ac3",
      "m4v",
      "m4p",
      "m4b",
      "f4v",
      "f4p",
      "f4b",
      "f4a",
      "mie",
      "asf",
      "ogm",
      "ogx",
      "mpc",
      "arrow",
      "shp",
      "aac",
      "mp1",
      "it",
      "s3m",
      "xm",
      "ai",
      "skp",
      "avif",
      "eps",
      "lzh",
      "pgp",
      "asar",
      "stl",
      "chm",
      "3mf",
      "zst",
      "jxl",
      "vcf"
    ],
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "image/flif",
      "image/x-xcf",
      "image/x-canon-cr2",
      "image/x-canon-cr3",
      "image/tiff",
      "image/bmp",
      "image/vnd.ms-photo",
      "image/vnd.adobe.photoshop",
      "application/x-indesign",
      "application/epub+zip",
      "application/x-xpinstall",
      "application/vnd.oasis.opendocument.text",
      "application/vnd.oasis.opendocument.spreadsheet",
      "application/vnd.oasis.opendocument.presentation",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/zip",
      "application/x-tar",
      "application/x-rar-compressed",
      "application/gzip",
      "application/x-bzip2",
      "application/x-7z-compressed",
      "application/x-apple-diskimage",
      "application/x-apache-arrow",
      "video/mp4",
      "audio/midi",
      "video/x-matroska",
      "video/webm",
      "video/quicktime",
      "video/vnd.avi",
      "audio/vnd.wave",
      "audio/qcelp",
      "audio/x-ms-asf",
      "video/x-ms-asf",
      "application/vnd.ms-asf",
      "video/mpeg",
      "video/3gpp",
      "audio/mpeg",
      "audio/mp4",
      // RFC 4337
      "audio/opus",
      "video/ogg",
      "audio/ogg",
      "application/ogg",
      "audio/x-flac",
      "audio/ape",
      "audio/wavpack",
      "audio/amr",
      "application/pdf",
      "application/x-msdownload",
      "application/x-shockwave-flash",
      "application/rtf",
      "application/wasm",
      "font/woff",
      "font/woff2",
      "application/vnd.ms-fontobject",
      "font/ttf",
      "font/otf",
      "image/x-icon",
      "video/x-flv",
      "application/postscript",
      "application/eps",
      "application/x-xz",
      "application/x-sqlite3",
      "application/x-nintendo-nes-rom",
      "application/x-google-chrome-extension",
      "application/vnd.ms-cab-compressed",
      "application/x-deb",
      "application/x-unix-archive",
      "application/x-rpm",
      "application/x-compress",
      "application/x-lzip",
      "application/x-cfb",
      "application/x-mie",
      "application/mxf",
      "video/mp2t",
      "application/x-blender",
      "image/bpg",
      "image/jp2",
      "image/jpx",
      "image/jpm",
      "image/mj2",
      "audio/aiff",
      "application/xml",
      "application/x-mobipocket-ebook",
      "image/heif",
      "image/heif-sequence",
      "image/heic",
      "image/heic-sequence",
      "image/icns",
      "image/ktx",
      "application/dicom",
      "audio/x-musepack",
      "text/calendar",
      "text/vcard",
      "model/gltf-binary",
      "application/vnd.tcpdump.pcap",
      "audio/x-dsf",
      // Non-standard
      "application/x.ms.shortcut",
      // Invented by us
      "application/x.apple.alias",
      // Invented by us
      "audio/x-voc",
      "audio/vnd.dolby.dd-raw",
      "audio/x-m4a",
      "image/apng",
      "image/x-olympus-orf",
      "image/x-sony-arw",
      "image/x-adobe-dng",
      "image/x-nikon-nef",
      "image/x-panasonic-rw2",
      "image/x-fujifilm-raf",
      "video/x-m4v",
      "video/3gpp2",
      "application/x-esri-shape",
      "audio/aac",
      "audio/x-it",
      "audio/x-s3m",
      "audio/x-xm",
      "video/MP1S",
      "video/MP2P",
      "application/vnd.sketchup.skp",
      "image/avif",
      "application/x-lzh-compressed",
      "application/pgp-encrypted",
      "application/x-asar",
      "model/stl",
      "application/vnd.ms-htmlhelp",
      "model/3mf",
      "image/jxl",
      "application/zstd"
    ]
  }), supported;
}
var core, hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core;
  hasRequiredCore = 1;
  const Token = requireLib$1(), strtok3 = requireCore$1(), {
    stringToBytes,
    tarHeaderChecksumMatches,
    uint32SyncSafeToken
  } = requireUtil(), supported = requireSupported(), minimumBytes = 4100;
  async function fromStream(e) {
    const t = await strtok3.fromStream(e);
    try {
      return await fromTokenizer(t);
    } finally {
      await t.close();
    }
  }
  async function fromBuffer(e) {
    if (!(e instanceof Uint8Array || e instanceof ArrayBuffer || Buffer.isBuffer(e)))
      throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``);
    const t = e instanceof Buffer ? e : Buffer.from(e);
    if (!(t && t.length > 1))
      return;
    const i = strtok3.fromBuffer(t);
    return fromTokenizer(i);
  }
  function _check(e, t, i) {
    i = {
      offset: 0,
      ...i
    };
    for (const [a, r] of t.entries())
      if (i.mask) {
        if (r !== (i.mask[a] & e[a + i.offset]))
          return !1;
      } else if (r !== e[a + i.offset])
        return !1;
    return !0;
  }
  async function fromTokenizer(e) {
    try {
      return _fromTokenizer(e);
    } catch (t) {
      if (!(t instanceof strtok3.EndOfStreamError))
        throw t;
    }
  }
  async function _fromTokenizer(e) {
    let t = Buffer.alloc(minimumBytes);
    const i = 12, a = (o, n) => _check(t, o, n), r = (o, n) => a(stringToBytes(o), n);
    if (e.fileInfo.size || (e.fileInfo.size = Number.MAX_SAFE_INTEGER), await e.peekBuffer(t, { length: i, mayBeLess: !0 }), a([66, 77]))
      return {
        ext: "bmp",
        mime: "image/bmp"
      };
    if (a([11, 119]))
      return {
        ext: "ac3",
        mime: "audio/vnd.dolby.dd-raw"
      };
    if (a([120, 1]))
      return {
        ext: "dmg",
        mime: "application/x-apple-diskimage"
      };
    if (a([77, 90]))
      return {
        ext: "exe",
        mime: "application/x-msdownload"
      };
    if (a([37, 33]))
      return await e.peekBuffer(t, { length: 24, mayBeLess: !0 }), r("PS-Adobe-", { offset: 2 }) && r(" EPSF-", { offset: 14 }) ? {
        ext: "eps",
        mime: "application/eps"
      } : {
        ext: "ps",
        mime: "application/postscript"
      };
    if (a([31, 160]) || a([31, 157]))
      return {
        ext: "Z",
        mime: "application/x-compress"
      };
    if (a([255, 216, 255]))
      return {
        ext: "jpg",
        mime: "image/jpeg"
      };
    if (a([73, 73, 188]))
      return {
        ext: "jxr",
        mime: "image/vnd.ms-photo"
      };
    if (a([31, 139, 8]))
      return {
        ext: "gz",
        mime: "application/gzip"
      };
    if (a([66, 90, 104]))
      return {
        ext: "bz2",
        mime: "application/x-bzip2"
      };
    if (r("ID3")) {
      await e.ignore(6);
      const o = await e.readToken(uint32SyncSafeToken);
      return e.position + o > e.fileInfo.size ? {
        ext: "mp3",
        mime: "audio/mpeg"
      } : (await e.ignore(o), fromTokenizer(e));
    }
    if (r("MP+"))
      return {
        ext: "mpc",
        mime: "audio/x-musepack"
      };
    if ((t[0] === 67 || t[0] === 70) && a([87, 83], { offset: 1 }))
      return {
        ext: "swf",
        mime: "application/x-shockwave-flash"
      };
    if (a([71, 73, 70]))
      return {
        ext: "gif",
        mime: "image/gif"
      };
    if (r("FLIF"))
      return {
        ext: "flif",
        mime: "image/flif"
      };
    if (r("8BPS"))
      return {
        ext: "psd",
        mime: "image/vnd.adobe.photoshop"
      };
    if (r("WEBP", { offset: 8 }))
      return {
        ext: "webp",
        mime: "image/webp"
      };
    if (r("MPCK"))
      return {
        ext: "mpc",
        mime: "audio/x-musepack"
      };
    if (r("FORM"))
      return {
        ext: "aif",
        mime: "audio/aiff"
      };
    if (r("icns", { offset: 0 }))
      return {
        ext: "icns",
        mime: "image/icns"
      };
    if (a([80, 75, 3, 4])) {
      try {
        for (; e.position + 30 < e.fileInfo.size; ) {
          await e.readBuffer(t, { length: 30 });
          const o = {
            compressedSize: t.readUInt32LE(18),
            uncompressedSize: t.readUInt32LE(22),
            filenameLength: t.readUInt16LE(26),
            extraFieldLength: t.readUInt16LE(28)
          };
          if (o.filename = await e.readToken(new Token.StringType(o.filenameLength, "utf-8")), await e.ignore(o.extraFieldLength), o.filename === "META-INF/mozilla.rsa")
            return {
              ext: "xpi",
              mime: "application/x-xpinstall"
            };
          if (o.filename.endsWith(".rels") || o.filename.endsWith(".xml"))
            switch (o.filename.split("/")[0]) {
              case "_rels":
                break;
              case "word":
                return {
                  ext: "docx",
                  mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                };
              case "ppt":
                return {
                  ext: "pptx",
                  mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                };
              case "xl":
                return {
                  ext: "xlsx",
                  mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                };
              default:
                break;
            }
          if (o.filename.startsWith("xl/"))
            return {
              ext: "xlsx",
              mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            };
          if (o.filename.startsWith("3D/") && o.filename.endsWith(".model"))
            return {
              ext: "3mf",
              mime: "model/3mf"
            };
          if (o.filename === "mimetype" && o.compressedSize === o.uncompressedSize)
            switch (await e.readToken(new Token.StringType(o.compressedSize, "utf-8"))) {
              case "application/epub+zip":
                return {
                  ext: "epub",
                  mime: "application/epub+zip"
                };
              case "application/vnd.oasis.opendocument.text":
                return {
                  ext: "odt",
                  mime: "application/vnd.oasis.opendocument.text"
                };
              case "application/vnd.oasis.opendocument.spreadsheet":
                return {
                  ext: "ods",
                  mime: "application/vnd.oasis.opendocument.spreadsheet"
                };
              case "application/vnd.oasis.opendocument.presentation":
                return {
                  ext: "odp",
                  mime: "application/vnd.oasis.opendocument.presentation"
                };
              default:
            }
          if (o.compressedSize === 0) {
            let n = -1;
            for (; n < 0 && e.position < e.fileInfo.size; )
              await e.peekBuffer(t, { mayBeLess: !0 }), n = t.indexOf("504B0304", 0, "hex"), await e.ignore(n >= 0 ? n : t.length);
          } else
            await e.ignore(o.compressedSize);
        }
      } catch (o) {
        if (!(o instanceof strtok3.EndOfStreamError))
          throw o;
      }
      return {
        ext: "zip",
        mime: "application/zip"
      };
    }
    if (r("OggS")) {
      await e.ignore(28);
      const o = Buffer.alloc(8);
      return await e.readBuffer(o), _check(o, [79, 112, 117, 115, 72, 101, 97, 100]) ? {
        ext: "opus",
        mime: "audio/opus"
      } : _check(o, [128, 116, 104, 101, 111, 114, 97]) ? {
        ext: "ogv",
        mime: "video/ogg"
      } : _check(o, [1, 118, 105, 100, 101, 111, 0]) ? {
        ext: "ogm",
        mime: "video/ogg"
      } : _check(o, [127, 70, 76, 65, 67]) ? {
        ext: "oga",
        mime: "audio/ogg"
      } : _check(o, [83, 112, 101, 101, 120, 32, 32]) ? {
        ext: "spx",
        mime: "audio/ogg"
      } : _check(o, [1, 118, 111, 114, 98, 105, 115]) ? {
        ext: "ogg",
        mime: "audio/ogg"
      } : {
        ext: "ogx",
        mime: "application/ogg"
      };
    }
    if (a([80, 75]) && (t[2] === 3 || t[2] === 5 || t[2] === 7) && (t[3] === 4 || t[3] === 6 || t[3] === 8))
      return {
        ext: "zip",
        mime: "application/zip"
      };
    if (r("ftyp", { offset: 4 }) && (t[8] & 96) !== 0) {
      const o = t.toString("binary", 8, 12).replace("\0", " ").trim();
      switch (o) {
        case "avif":
          return { ext: "avif", mime: "image/avif" };
        case "mif1":
          return { ext: "heic", mime: "image/heif" };
        case "msf1":
          return { ext: "heic", mime: "image/heif-sequence" };
        case "heic":
        case "heix":
          return { ext: "heic", mime: "image/heic" };
        case "hevc":
        case "hevx":
          return { ext: "heic", mime: "image/heic-sequence" };
        case "qt":
          return { ext: "mov", mime: "video/quicktime" };
        case "M4V":
        case "M4VH":
        case "M4VP":
          return { ext: "m4v", mime: "video/x-m4v" };
        case "M4P":
          return { ext: "m4p", mime: "video/mp4" };
        case "M4B":
          return { ext: "m4b", mime: "audio/mp4" };
        case "M4A":
          return { ext: "m4a", mime: "audio/x-m4a" };
        case "F4V":
          return { ext: "f4v", mime: "video/mp4" };
        case "F4P":
          return { ext: "f4p", mime: "video/mp4" };
        case "F4A":
          return { ext: "f4a", mime: "audio/mp4" };
        case "F4B":
          return { ext: "f4b", mime: "audio/mp4" };
        case "crx":
          return { ext: "cr3", mime: "image/x-canon-cr3" };
        default:
          return o.startsWith("3g") ? o.startsWith("3g2") ? { ext: "3g2", mime: "video/3gpp2" } : { ext: "3gp", mime: "video/3gpp" } : { ext: "mp4", mime: "video/mp4" };
      }
    }
    if (r("MThd"))
      return {
        ext: "mid",
        mime: "audio/midi"
      };
    if (r("wOFF") && (a([0, 1, 0, 0], { offset: 4 }) || r("OTTO", { offset: 4 })))
      return {
        ext: "woff",
        mime: "font/woff"
      };
    if (r("wOF2") && (a([0, 1, 0, 0], { offset: 4 }) || r("OTTO", { offset: 4 })))
      return {
        ext: "woff2",
        mime: "font/woff2"
      };
    if (a([212, 195, 178, 161]) || a([161, 178, 195, 212]))
      return {
        ext: "pcap",
        mime: "application/vnd.tcpdump.pcap"
      };
    if (r("DSD "))
      return {
        ext: "dsf",
        mime: "audio/x-dsf"
        // Non-standard
      };
    if (r("LZIP"))
      return {
        ext: "lz",
        mime: "application/x-lzip"
      };
    if (r("fLaC"))
      return {
        ext: "flac",
        mime: "audio/x-flac"
      };
    if (a([66, 80, 71, 251]))
      return {
        ext: "bpg",
        mime: "image/bpg"
      };
    if (r("wvpk"))
      return {
        ext: "wv",
        mime: "audio/wavpack"
      };
    if (r("%PDF")) {
      await e.ignore(1350);
      const o = 10 * 1024 * 1024, n = Buffer.alloc(Math.min(o, e.fileInfo.size));
      return await e.readBuffer(n, { mayBeLess: !0 }), n.includes(Buffer.from("AIPrivateData")) ? {
        ext: "ai",
        mime: "application/postscript"
      } : {
        ext: "pdf",
        mime: "application/pdf"
      };
    }
    if (a([0, 97, 115, 109]))
      return {
        ext: "wasm",
        mime: "application/wasm"
      };
    if (a([73, 73, 42, 0]))
      return r("CR", { offset: 8 }) ? {
        ext: "cr2",
        mime: "image/x-canon-cr2"
      } : a([28, 0, 254, 0], { offset: 8 }) || a([31, 0, 11, 0], { offset: 8 }) ? {
        ext: "nef",
        mime: "image/x-nikon-nef"
      } : a([8, 0, 0, 0], { offset: 4 }) && (a([45, 0, 254, 0], { offset: 8 }) || a([39, 0, 254, 0], { offset: 8 })) ? {
        ext: "dng",
        mime: "image/x-adobe-dng"
      } : (t = Buffer.alloc(24), await e.peekBuffer(t), (a([16, 251, 134, 1], { offset: 4 }) || a([8, 0, 0, 0], { offset: 4 })) && // This pattern differentiates ARW from other TIFF-ish file types:
      a([0, 254, 0, 4, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 1], { offset: 9 }) ? {
        ext: "arw",
        mime: "image/x-sony-arw"
      } : {
        ext: "tif",
        mime: "image/tiff"
      });
    if (a([77, 77, 0, 42]))
      return {
        ext: "tif",
        mime: "image/tiff"
      };
    if (r("MAC "))
      return {
        ext: "ape",
        mime: "audio/ape"
      };
    if (a([26, 69, 223, 163])) {
      async function o() {
        const u = await e.peekNumber(Token.UINT8);
        let d = 128, m = 0;
        for (; (u & d) === 0 && d !== 0; )
          ++m, d >>= 1;
        const p = Buffer.alloc(m + 1);
        return await e.readBuffer(p), p;
      }
      async function n() {
        const u = await o(), d = await o();
        d[0] ^= 128 >> d.length - 1;
        const m = Math.min(6, d.length);
        return {
          id: u.readUIntBE(0, u.length),
          len: d.readUIntBE(d.length - m, m)
        };
      }
      async function s(u, d) {
        for (; d > 0; ) {
          const m = await n();
          if (m.id === 17026)
            return e.readToken(new Token.StringType(m.len, "utf-8"));
          await e.ignore(m.len), --d;
        }
      }
      const l = await n();
      switch (await s(1, l.len)) {
        case "webm":
          return {
            ext: "webm",
            mime: "video/webm"
          };
        case "matroska":
          return {
            ext: "mkv",
            mime: "video/x-matroska"
          };
        default:
          return;
      }
    }
    if (a([82, 73, 70, 70])) {
      if (a([65, 86, 73], { offset: 8 }))
        return {
          ext: "avi",
          mime: "video/vnd.avi"
        };
      if (a([87, 65, 86, 69], { offset: 8 }))
        return {
          ext: "wav",
          mime: "audio/vnd.wave"
        };
      if (a([81, 76, 67, 77], { offset: 8 }))
        return {
          ext: "qcp",
          mime: "audio/qcelp"
        };
    }
    if (r("SQLi"))
      return {
        ext: "sqlite",
        mime: "application/x-sqlite3"
      };
    if (a([78, 69, 83, 26]))
      return {
        ext: "nes",
        mime: "application/x-nintendo-nes-rom"
      };
    if (r("Cr24"))
      return {
        ext: "crx",
        mime: "application/x-google-chrome-extension"
      };
    if (r("MSCF") || r("ISc("))
      return {
        ext: "cab",
        mime: "application/vnd.ms-cab-compressed"
      };
    if (a([237, 171, 238, 219]))
      return {
        ext: "rpm",
        mime: "application/x-rpm"
      };
    if (a([197, 208, 211, 198]))
      return {
        ext: "eps",
        mime: "application/eps"
      };
    if (a([40, 181, 47, 253]))
      return {
        ext: "zst",
        mime: "application/zstd"
      };
    if (a([79, 84, 84, 79, 0]))
      return {
        ext: "otf",
        mime: "font/otf"
      };
    if (r("#!AMR"))
      return {
        ext: "amr",
        mime: "audio/amr"
      };
    if (r("{\\rtf"))
      return {
        ext: "rtf",
        mime: "application/rtf"
      };
    if (a([70, 76, 86, 1]))
      return {
        ext: "flv",
        mime: "video/x-flv"
      };
    if (r("IMPM"))
      return {
        ext: "it",
        mime: "audio/x-it"
      };
    if (r("-lh0-", { offset: 2 }) || r("-lh1-", { offset: 2 }) || r("-lh2-", { offset: 2 }) || r("-lh3-", { offset: 2 }) || r("-lh4-", { offset: 2 }) || r("-lh5-", { offset: 2 }) || r("-lh6-", { offset: 2 }) || r("-lh7-", { offset: 2 }) || r("-lzs-", { offset: 2 }) || r("-lz4-", { offset: 2 }) || r("-lz5-", { offset: 2 }) || r("-lhd-", { offset: 2 }))
      return {
        ext: "lzh",
        mime: "application/x-lzh-compressed"
      };
    if (a([0, 0, 1, 186])) {
      if (a([33], { offset: 4, mask: [241] }))
        return {
          ext: "mpg",
          // May also be .ps, .mpeg
          mime: "video/MP1S"
        };
      if (a([68], { offset: 4, mask: [196] }))
        return {
          ext: "mpg",
          // May also be .mpg, .m2p, .vob or .sub
          mime: "video/MP2P"
        };
    }
    if (r("ITSF"))
      return {
        ext: "chm",
        mime: "application/vnd.ms-htmlhelp"
      };
    if (a([253, 55, 122, 88, 90, 0]))
      return {
        ext: "xz",
        mime: "application/x-xz"
      };
    if (r("<?xml "))
      return {
        ext: "xml",
        mime: "application/xml"
      };
    if (a([55, 122, 188, 175, 39, 28]))
      return {
        ext: "7z",
        mime: "application/x-7z-compressed"
      };
    if (a([82, 97, 114, 33, 26, 7]) && (t[6] === 0 || t[6] === 1))
      return {
        ext: "rar",
        mime: "application/x-rar-compressed"
      };
    if (r("solid "))
      return {
        ext: "stl",
        mime: "model/stl"
      };
    if (r("BLENDER"))
      return {
        ext: "blend",
        mime: "application/x-blender"
      };
    if (r("!<arch>"))
      return await e.ignore(8), await e.readToken(new Token.StringType(13, "ascii")) === "debian-binary" ? {
        ext: "deb",
        mime: "application/x-deb"
      } : {
        ext: "ar",
        mime: "application/x-unix-archive"
      };
    if (a([137, 80, 78, 71, 13, 10, 26, 10])) {
      await e.ignore(8);
      async function o() {
        return {
          length: await e.readToken(Token.INT32_BE),
          type: await e.readToken(new Token.StringType(4, "binary"))
        };
      }
      do {
        const n = await o();
        if (n.length < 0)
          return;
        switch (n.type) {
          case "IDAT":
            return {
              ext: "png",
              mime: "image/png"
            };
          case "acTL":
            return {
              ext: "apng",
              mime: "image/apng"
            };
          default:
            await e.ignore(n.length + 4);
        }
      } while (e.position + 8 < e.fileInfo.size);
      return {
        ext: "png",
        mime: "image/png"
      };
    }
    if (a([65, 82, 82, 79, 87, 49, 0, 0]))
      return {
        ext: "arrow",
        mime: "application/x-apache-arrow"
      };
    if (a([103, 108, 84, 70, 2, 0, 0, 0]))
      return {
        ext: "glb",
        mime: "model/gltf-binary"
      };
    if (a([102, 114, 101, 101], { offset: 4 }) || // `free`
    a([109, 100, 97, 116], { offset: 4 }) || // `mdat` MJPEG
    a([109, 111, 111, 118], { offset: 4 }) || // `moov`
    a([119, 105, 100, 101], { offset: 4 }))
      return {
        ext: "mov",
        mime: "video/quicktime"
      };
    if (a([73, 73, 82, 79, 8, 0, 0, 0, 24]))
      return {
        ext: "orf",
        mime: "image/x-olympus-orf"
      };
    if (r("gimp xcf "))
      return {
        ext: "xcf",
        mime: "image/x-xcf"
      };
    if (a([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216]))
      return {
        ext: "rw2",
        mime: "image/x-panasonic-rw2"
      };
    if (a([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
      async function o() {
        const n = Buffer.alloc(16);
        return await e.readBuffer(n), {
          id: n,
          size: Number(await e.readToken(Token.UINT64_LE))
        };
      }
      for (await e.ignore(30); e.position + 24 < e.fileInfo.size; ) {
        const n = await o();
        let s = n.size - 24;
        if (_check(n.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
          const l = Buffer.alloc(16);
          if (s -= await e.readBuffer(l), _check(l, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43]))
            return {
              ext: "asf",
              mime: "audio/x-ms-asf"
            };
          if (_check(l, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43]))
            return {
              ext: "asf",
              mime: "video/x-ms-asf"
            };
          break;
        }
        await e.ignore(s);
      }
      return {
        ext: "asf",
        mime: "application/vnd.ms-asf"
      };
    }
    if (a([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]))
      return {
        ext: "ktx",
        mime: "image/ktx"
      };
    if ((a([126, 16, 4]) || a([126, 24, 4])) && a([48, 77, 73, 69], { offset: 4 }))
      return {
        ext: "mie",
        mime: "application/x-mie"
      };
    if (a([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 }))
      return {
        ext: "shp",
        mime: "application/x-esri-shape"
      };
    if (a([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10]))
      switch (await e.ignore(20), await e.readToken(new Token.StringType(4, "ascii"))) {
        case "jp2 ":
          return {
            ext: "jp2",
            mime: "image/jp2"
          };
        case "jpx ":
          return {
            ext: "jpx",
            mime: "image/jpx"
          };
        case "jpm ":
          return {
            ext: "jpm",
            mime: "image/jpm"
          };
        case "mjp2":
          return {
            ext: "mj2",
            mime: "image/mj2"
          };
        default:
          return;
      }
    if (a([255, 10]) || a([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10]))
      return {
        ext: "jxl",
        mime: "image/jxl"
      };
    if (a([0, 0, 1, 186]) || a([0, 0, 1, 179]))
      return {
        ext: "mpg",
        mime: "video/mpeg"
      };
    if (a([0, 1, 0, 0, 0]))
      return {
        ext: "ttf",
        mime: "font/ttf"
      };
    if (a([0, 0, 1, 0]))
      return {
        ext: "ico",
        mime: "image/x-icon"
      };
    if (a([0, 0, 2, 0]))
      return {
        ext: "cur",
        mime: "image/x-icon"
      };
    if (a([208, 207, 17, 224, 161, 177, 26, 225]))
      return {
        ext: "cfb",
        mime: "application/x-cfb"
      };
    if (await e.peekBuffer(t, { length: Math.min(256, e.fileInfo.size), mayBeLess: !0 }), r("BEGIN:")) {
      if (r("VCARD", { offset: 6 }))
        return {
          ext: "vcf",
          mime: "text/vcard"
        };
      if (r("VCALENDAR", { offset: 6 }))
        return {
          ext: "ics",
          mime: "text/calendar"
        };
    }
    if (r("FUJIFILMCCD-RAW"))
      return {
        ext: "raf",
        mime: "image/x-fujifilm-raf"
      };
    if (r("Extended Module:"))
      return {
        ext: "xm",
        mime: "audio/x-xm"
      };
    if (r("Creative Voice File"))
      return {
        ext: "voc",
        mime: "audio/x-voc"
      };
    if (a([4, 0, 0, 0]) && t.length >= 16) {
      const o = t.readUInt32LE(12);
      if (o > 12 && t.length >= o + 16)
        try {
          const n = t.slice(16, o + 16).toString();
          if (JSON.parse(n).files)
            return {
              ext: "asar",
              mime: "application/x-asar"
            };
        } catch {
        }
    }
    if (a([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2]))
      return {
        ext: "mxf",
        mime: "application/mxf"
      };
    if (r("SCRM", { offset: 44 }))
      return {
        ext: "s3m",
        mime: "audio/x-s3m"
      };
    if (a([71], { offset: 4 }) && (a([71], { offset: 192 }) || a([71], { offset: 196 })))
      return {
        ext: "mts",
        mime: "video/mp2t"
      };
    if (a([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 }))
      return {
        ext: "mobi",
        mime: "application/x-mobipocket-ebook"
      };
    if (a([68, 73, 67, 77], { offset: 128 }))
      return {
        ext: "dcm",
        mime: "application/dicom"
      };
    if (a([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70]))
      return {
        ext: "lnk",
        mime: "application/x.ms.shortcut"
        // Invented by us
      };
    if (a([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0]))
      return {
        ext: "alias",
        mime: "application/x.apple.alias"
        // Invented by us
      };
    if (a([76, 80], { offset: 34 }) && (a([0, 0, 1], { offset: 8 }) || a([1, 0, 2], { offset: 8 }) || a([2, 0, 2], { offset: 8 })))
      return {
        ext: "eot",
        mime: "application/vnd.ms-fontobject"
      };
    if (a([6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29]))
      return {
        ext: "indd",
        mime: "application/x-indesign"
      };
    if (await e.peekBuffer(t, { length: Math.min(512, e.fileInfo.size), mayBeLess: !0 }), tarHeaderChecksumMatches(t))
      return {
        ext: "tar",
        mime: "application/x-tar"
      };
    if (a([255, 254, 255, 14, 83, 0, 107, 0, 101, 0, 116, 0, 99, 0, 104, 0, 85, 0, 112, 0, 32, 0, 77, 0, 111, 0, 100, 0, 101, 0, 108, 0]))
      return {
        ext: "skp",
        mime: "application/vnd.sketchup.skp"
      };
    if (r("-----BEGIN PGP MESSAGE-----"))
      return {
        ext: "pgp",
        mime: "application/pgp-encrypted"
      };
    if (t.length >= 2 && a([255, 224], { offset: 0, mask: [255, 224] })) {
      if (a([16], { offset: 1, mask: [22] }))
        return a([8], { offset: 1, mask: [8] }) ? {
          ext: "aac",
          mime: "audio/aac"
        } : {
          ext: "aac",
          mime: "audio/aac"
        };
      if (a([2], { offset: 1, mask: [6] }))
        return {
          ext: "mp3",
          mime: "audio/mpeg"
        };
      if (a([4], { offset: 1, mask: [6] }))
        return {
          ext: "mp2",
          mime: "audio/mpeg"
        };
      if (a([6], { offset: 1, mask: [6] }))
        return {
          ext: "mp1",
          mime: "audio/mpeg"
        };
    }
  }
  const stream = (readableStream) => new Promise((resolve, reject) => {
    const stream = eval("require")("stream");
    readableStream.on("error", reject), readableStream.once("readable", async () => {
      const e = new stream.PassThrough();
      let t;
      stream.pipeline ? t = stream.pipeline(readableStream, e, () => {
      }) : t = readableStream.pipe(e);
      const i = readableStream.read(minimumBytes) || readableStream.read() || Buffer.alloc(0);
      try {
        const a = await fromBuffer(i);
        e.fileType = a;
      } catch (a) {
        reject(a);
      }
      resolve(t);
    });
  }), fileType = {
    fromStream,
    fromTokenizer,
    fromBuffer,
    stream
  };
  return Object.defineProperty(fileType, "extensions", {
    get() {
      return new Set(supported.extensions);
    }
  }), Object.defineProperty(fileType, "mimeTypes", {
    get() {
      return new Set(supported.mimeTypes);
    }
  }), core = fileType, core;
}
var coreExports = requireCore();
const fileType = /* @__PURE__ */ getDefaultExportFromCjs(coreExports);
function to(e, t) {
  return e.then(function(i) {
    return [null, i];
  }).catch(function(i) {
    return [i, void 0];
  });
}
const readFile = promises.readFile, writeFile = promises.writeFile;
var Mime_1, hasRequiredMime;
function requireMime() {
  if (hasRequiredMime) return Mime_1;
  hasRequiredMime = 1;
  function e() {
    this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
    for (let t = 0; t < arguments.length; t++)
      this.define(arguments[t]);
    this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
  }
  return e.prototype.define = function(t, i) {
    for (let a in t) {
      let r = t[a].map(function(o) {
        return o.toLowerCase();
      });
      a = a.toLowerCase();
      for (let o = 0; o < r.length; o++) {
        const n = r[o];
        if (n[0] !== "*") {
          if (!i && n in this._types)
            throw new Error(
              'Attempt to change mapping for "' + n + '" extension from "' + this._types[n] + '" to "' + a + '". Pass `force=true` to allow this, otherwise remove "' + n + '" from the list of extensions for "' + a + '".'
            );
          this._types[n] = a;
        }
      }
      if (i || !this._extensions[a]) {
        const o = r[0];
        this._extensions[a] = o[0] !== "*" ? o : o.substr(1);
      }
    }
  }, e.prototype.getType = function(t) {
    t = String(t);
    let i = t.replace(/^.*[/\\]/, "").toLowerCase(), a = i.replace(/^.*\./, "").toLowerCase(), r = i.length < t.length;
    return (a.length < i.length - 1 || !r) && this._types[a] || null;
  }, e.prototype.getExtension = function(t) {
    return t = /^\s*([^;\s]*)/.test(t) && RegExp.$1, t && this._extensions[t.toLowerCase()] || null;
  }, Mime_1 = e, Mime_1;
}
var standard, hasRequiredStandard;
function requireStandard() {
  return hasRequiredStandard || (hasRequiredStandard = 1, standard = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] }), standard;
}
var lite, hasRequiredLite;
function requireLite() {
  if (hasRequiredLite) return lite;
  hasRequiredLite = 1;
  let e = requireMime();
  return lite = new e(requireStandard()), lite;
}
var liteExports = requireLite();
const mime = /* @__PURE__ */ getDefaultExportFromCjs(liteExports);
var HorizontalAlign;
(function(e) {
  e[e.LEFT = 1] = "LEFT", e[e.CENTER = 2] = "CENTER", e[e.RIGHT = 4] = "RIGHT";
})(HorizontalAlign || (HorizontalAlign = {}));
var VerticalAlign;
(function(e) {
  e[e.TOP = 8] = "TOP", e[e.MIDDLE = 16] = "MIDDLE", e[e.BOTTOM = 32] = "BOTTOM";
})(VerticalAlign || (VerticalAlign = {}));
var BlendMode;
(function(e) {
  e.SRC_OVER = "srcOver", e.DST_OVER = "dstOver", e.MULTIPLY = "multiply", e.ADD = "add", e.SCREEN = "screen", e.OVERLAY = "overlay", e.DARKEN = "darken", e.LIGHTEN = "lighten", e.HARD_LIGHT = "hardLight", e.DIFFERENCE = "difference", e.EXCLUSION = "exclusion";
})(BlendMode || (BlendMode = {}));
function srcOver(e, t, i = 1) {
  e.a *= i;
  const a = t.a + e.a - t.a * e.a, r = (e.r * e.a + t.r * t.a * (1 - e.a)) / a, o = (e.g * e.a + t.g * t.a * (1 - e.a)) / a, n = (e.b * e.a + t.b * t.a * (1 - e.a)) / a;
  return { r, g: o, b: n, a };
}
function dstOver(e, t, i = 1) {
  e.a *= i;
  const a = t.a + e.a - t.a * e.a, r = (t.r * t.a + e.r * e.a * (1 - t.a)) / a, o = (t.g * t.a + e.g * e.a * (1 - t.a)) / a, n = (t.b * t.a + e.b * e.a * (1 - t.a)) / a;
  return { r, g: o, b: n, a };
}
function multiply(e, t, i = 1) {
  e.a *= i;
  const a = t.a + e.a - t.a * e.a, r = e.r * e.a, o = e.g * e.a, n = e.b * e.a, s = t.r * t.a, l = t.g * t.a, h = t.b * t.a, u = (r * s + r * (1 - t.a) + s * (1 - e.a)) / a, d = (o * l + o * (1 - t.a) + l * (1 - e.a)) / a, m = (n * h + n * (1 - t.a) + h * (1 - e.a)) / a;
  return { r: u, g: d, b: m, a };
}
function add(e, t, i = 1) {
  e.a *= i;
  const a = t.a + e.a - t.a * e.a, r = e.r * e.a, o = e.g * e.a, n = e.b * e.a, s = t.r * t.a, l = t.g * t.a, h = t.b * t.a, u = (r + s) / a, d = (o + l) / a, m = (n + h) / a;
  return { r: u, g: d, b: m, a };
}
function screen(e, t, i = 1) {
  e.a *= i;
  const a = t.a + e.a - t.a * e.a, r = e.r * e.a, o = e.g * e.a, n = e.b * e.a, s = t.r * t.a, l = t.g * t.a, h = t.b * t.a, u = (r * t.a + s * e.a - r * s + r * (1 - t.a) + s * (1 - e.a)) / a, d = (o * t.a + l * e.a - o * l + o * (1 - t.a) + l * (1 - e.a)) / a, m = (n * t.a + h * e.a - n * h + n * (1 - t.a) + h * (1 - e.a)) / a;
  return { r: u, g: d, b: m, a };
}
function overlay(e, t, i = 1) {
  e.a *= i;
  const a = t.a + e.a - t.a * e.a, r = e.r * e.a, o = e.g * e.a, n = e.b * e.a, s = t.r * t.a, l = t.g * t.a, h = t.b * t.a, u = (2 * s <= t.a ? 2 * r * s + r * (1 - t.a) + s * (1 - e.a) : r * (1 + t.a) + s * (1 + e.a) - 2 * s * r - t.a * e.a) / a, d = (2 * l <= t.a ? 2 * o * l + o * (1 - t.a) + l * (1 - e.a) : o * (1 + t.a) + l * (1 + e.a) - 2 * l * o - t.a * e.a) / a, m = (2 * h <= t.a ? 2 * n * h + n * (1 - t.a) + h * (1 - e.a) : n * (1 + t.a) + h * (1 + e.a) - 2 * h * n - t.a * e.a) / a;
  return { r: u, g: d, b: m, a };
}
function darken(e, t, i = 1) {
  e.a *= i;
  const a = t.a + e.a - t.a * e.a, r = e.r * e.a, o = e.g * e.a, n = e.b * e.a, s = t.r * t.a, l = t.g * t.a, h = t.b * t.a, u = (Math.min(r * t.a, s * e.a) + r * (1 - t.a) + s * (1 - e.a)) / a, d = (Math.min(o * t.a, l * e.a) + o * (1 - t.a) + l * (1 - e.a)) / a, m = (Math.min(n * t.a, h * e.a) + n * (1 - t.a) + h * (1 - e.a)) / a;
  return { r: u, g: d, b: m, a };
}
function lighten(e, t, i = 1) {
  e.a *= i;
  const a = t.a + e.a - t.a * e.a, r = e.r * e.a, o = e.g * e.a, n = e.b * e.a, s = t.r * t.a, l = t.g * t.a, h = t.b * t.a, u = (Math.max(r * t.a, s * e.a) + r * (1 - t.a) + s * (1 - e.a)) / a, d = (Math.max(o * t.a, l * e.a) + o * (1 - t.a) + l * (1 - e.a)) / a, m = (Math.max(n * t.a, h * e.a) + n * (1 - t.a) + h * (1 - e.a)) / a;
  return { r: u, g: d, b: m, a };
}
function hardLight(e, t, i = 1) {
  e.a *= i;
  const a = t.a + e.a - t.a * e.a, r = e.r * e.a, o = e.g * e.a, n = e.b * e.a, s = t.r * t.a, l = t.g * t.a, h = t.b * t.a, u = (2 * r <= e.a ? 2 * r * s + r * (1 - t.a) + s * (1 - e.a) : r * (1 + t.a) + s * (1 + e.a) - 2 * s * r - t.a * e.a) / a, d = (2 * o <= e.a ? 2 * o * l + o * (1 - t.a) + l * (1 - e.a) : o * (1 + t.a) + l * (1 + e.a) - 2 * l * o - t.a * e.a) / a, m = (2 * n <= e.a ? 2 * n * h + n * (1 - t.a) + h * (1 - e.a) : n * (1 + t.a) + h * (1 + e.a) - 2 * h * n - t.a * e.a) / a;
  return { r: u, g: d, b: m, a };
}
function difference(e, t, i = 1) {
  e.a *= i;
  const a = t.a + e.a - t.a * e.a, r = e.r * e.a, o = e.g * e.a, n = e.b * e.a, s = t.r * t.a, l = t.g * t.a, h = t.b * t.a, u = (r + s - 2 * Math.min(r * t.a, s * e.a)) / a, d = (o + l - 2 * Math.min(o * t.a, l * e.a)) / a, m = (n + h - 2 * Math.min(n * t.a, h * e.a)) / a;
  return { r: u, g: d, b: m, a };
}
function exclusion(e, t, i = 1) {
  e.a *= i;
  const a = t.a + e.a - t.a * e.a, r = e.r * e.a, o = e.g * e.a, n = e.b * e.a, s = t.r * t.a, l = t.g * t.a, h = t.b * t.a, u = (r * t.a + s * e.a - 2 * r * s + r * (1 - t.a) + s * (1 - e.a)) / a, d = (o * t.a + l * e.a - 2 * o * l + o * (1 - t.a) + l * (1 - e.a)) / a, m = (n * t.a + h * e.a - 2 * n * h + n * (1 - t.a) + h * (1 - e.a)) / a;
  return { r: u, g: d, b: m, a };
}
const names = [
  srcOver,
  dstOver,
  multiply,
  add,
  screen,
  overlay,
  darken,
  lighten,
  hardLight,
  difference,
  exclusion
], compositeModes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add,
  darken,
  difference,
  dstOver,
  exclusion,
  hardLight,
  lighten,
  multiply,
  names,
  overlay,
  screen,
  srcOver
}, Symbol.toStringTag, { value: "Module" }));
function composite(e, t, i = 0, a = 0, r = {}) {
  if (!(t instanceof e.constructor))
    throw new Error("The source must be a Jimp image");
  if (typeof i != "number" || typeof a != "number")
    throw new Error("x and y must be numbers");
  const { mode: o = BlendMode.SRC_OVER } = r;
  let { opacitySource: n = 1, opacityDest: s = 1 } = r;
  (typeof n != "number" || n < 0 || n > 1) && (n = 1), (typeof s != "number" || s < 0 || s > 1) && (s = 1);
  const l = compositeModes[o];
  return i = Math.round(i), a = Math.round(a), s !== 1 && e.scan((h, u, d) => {
    const m = e.bitmap.data[d + 3] * s;
    e.bitmap.data[d + 3] = m;
  }), t.scan((h, u, d) => {
    const m = e.getPixelIndex(i + h, a + u, Edge.CROP);
    if (m === -1)
      return;
    const p = l({
      r: t.bitmap.data[d + 0] / 255,
      g: t.bitmap.data[d + 1] / 255,
      b: t.bitmap.data[d + 2] / 255,
      a: t.bitmap.data[d + 3] / 255
    }, {
      r: e.bitmap.data[m + 0] / 255,
      g: e.bitmap.data[m + 1] / 255,
      b: e.bitmap.data[m + 2] / 255,
      a: e.bitmap.data[m + 3] / 255
    }, n);
    e.bitmap.data[m + 0] = limit255(p.r * 255), e.bitmap.data[m + 1] = limit255(p.g * 255), e.bitmap.data[m + 2] = limit255(p.b * 255), e.bitmap.data[m + 3] = limit255(p.a * 255);
  }), e;
}
var jpeg, hasRequiredJpeg;
function requireJpeg() {
  return hasRequiredJpeg || (hasRequiredJpeg = 1, jpeg = {
    parseSections: function(e, t) {
      var i, a;
      for (e.setBigEndian(!0); e.remainingLength() > 0 && a !== 218; ) {
        if (e.nextUInt8() !== 255)
          throw new Error("Invalid JPEG section offset");
        a = e.nextUInt8(), a >= 208 && a <= 217 || a === 218 ? i = 0 : i = e.nextUInt16() - 2, t(a, e.branch(0, i)), e.skip(i);
      }
    },
    //stream should be located after SOF section size and in big endian mode, like passed to parseSections iterator
    getSizeFromSOFSection: function(e) {
      return e.skip(1), {
        height: e.nextUInt16(),
        width: e.nextUInt16()
      };
    },
    getSectionName: function(e) {
      var t, i;
      switch (e) {
        case 216:
          t = "SOI";
          break;
        case 196:
          t = "DHT";
          break;
        case 219:
          t = "DQT";
          break;
        case 221:
          t = "DRI";
          break;
        case 218:
          t = "SOS";
          break;
        case 254:
          t = "COM";
          break;
        case 217:
          t = "EOI";
          break;
        default:
          e >= 224 && e <= 239 ? (t = "APP", i = e - 224) : e >= 192 && e <= 207 && e !== 196 && e !== 200 && e !== 204 ? (t = "SOF", i = e - 192) : e >= 208 && e <= 215 && (t = "RST", i = e - 208);
          break;
      }
      var a = {
        name: t
      };
      return typeof i == "number" && (a.index = i), a;
    }
  }), jpeg;
}
var exif, hasRequiredExif;
function requireExif() {
  if (hasRequiredExif) return exif;
  hasRequiredExif = 1;
  function e(o, n) {
    switch (o) {
      case 1:
        return n.nextUInt8();
      case 3:
        return n.nextUInt16();
      case 4:
        return n.nextUInt32();
      case 5:
        return [n.nextUInt32(), n.nextUInt32()];
      case 6:
        return n.nextInt8();
      case 8:
        return n.nextUInt16();
      case 9:
        return n.nextUInt32();
      case 10:
        return [n.nextInt32(), n.nextInt32()];
      case 11:
        return n.nextFloat();
      case 12:
        return n.nextDouble();
      default:
        throw new Error("Invalid format while decoding: " + o);
    }
  }
  function t(o) {
    switch (o) {
      case 1:
      case 2:
      case 6:
      case 7:
        return 1;
      case 3:
      case 8:
        return 2;
      case 4:
      case 9:
      case 11:
        return 4;
      case 5:
      case 10:
      case 12:
        return 8;
      default:
        return 0;
    }
  }
  function i(o, n) {
    var s = n.nextUInt16(), l = n.nextUInt16(), h = t(l), u = n.nextUInt32(), d = h * u, m, p;
    if (d > 4 && (n = o.openWithOffset(n.nextUInt32())), l === 2) {
      m = n.nextString(u);
      var g = m.indexOf("\0");
      g !== -1 && (m = m.substr(0, g));
    } else if (l === 7)
      m = n.nextBuffer(u);
    else if (l !== 0)
      for (m = [], p = 0; p < u; ++p)
        m.push(e(l, n));
    return d < 4 && n.skip(4 - d), [s, m, l];
  }
  function a(o, n, s) {
    var l = n.nextUInt16(), h, u;
    for (u = 0; u < l; ++u)
      h = i(o, n), s(h[0], h[1], h[2]);
  }
  function r(o) {
    var n = o.nextString(6);
    if (n !== "Exif\0\0")
      throw new Error("Invalid EXIF header");
    var s = o.mark(), l = o.nextUInt16();
    if (l === 18761)
      o.setBigEndian(!1);
    else if (l === 19789)
      o.setBigEndian(!0);
    else
      throw new Error("Invalid TIFF header");
    if (o.nextUInt16() !== 42)
      throw new Error("Invalid TIFF data");
    return s;
  }
  return exif = {
    IFD0: 1,
    IFD1: 2,
    GPSIFD: 3,
    SubIFD: 4,
    InteropIFD: 5,
    parseTags: function(o, n) {
      var s;
      try {
        s = r(o);
      } catch {
        return !1;
      }
      var l, h, u, d = s.openWithOffset(o.nextUInt32()), m = this.IFD0;
      a(s, d, function(C, B, A) {
        switch (C) {
          case 34853:
            h = B[0];
            break;
          case 34665:
            l = B[0];
            break;
          default:
            n(m, C, B, A);
            break;
        }
      });
      var p = d.nextUInt32();
      if (p !== 0) {
        var g = s.openWithOffset(p);
        a(s, g, n.bind(null, this.IFD1));
      }
      if (h) {
        var M = s.openWithOffset(h);
        a(s, M, n.bind(null, this.GPSIFD));
      }
      if (l) {
        var k = s.openWithOffset(l), w = this.InteropIFD;
        a(s, k, function(C, B, A) {
          C === 40965 ? u = B[0] : n(w, C, B, A);
        });
      }
      if (u) {
        var v = s.openWithOffset(u);
        a(s, v, n.bind(null, this.InteropIFD));
      }
      return !0;
    }
  }, exif;
}
var date, hasRequiredDate;
function requireDate() {
  if (hasRequiredDate) return date;
  hasRequiredDate = 1;
  function e(s) {
    return parseInt(s, 10);
  }
  var t = 3600, i = 60;
  function a(s, l) {
    s = s.map(e), l = l.map(e);
    var h = s[0], u = s[1] - 1, d = s[2], m = l[0], p = l[1], g = l[2], M = Date.UTC(h, u, d, m, p, g, 0), k = M / 1e3;
    return k;
  }
  function r(s) {
    var l = s.substr(0, 10).split("-"), h = s.substr(11, 8).split(":"), u = s.substr(19, 6), d = u.split(":").map(e), m = d[0] * t + d[1] * i, p = a(l, h);
    if (p -= m, typeof p == "number" && !isNaN(p))
      return p;
  }
  function o(s) {
    var l = s.split(" "), h = l[0].split(":"), u = l[1].split(":"), d = a(h, u);
    if (typeof d == "number" && !isNaN(d))
      return d;
  }
  function n(s) {
    var l = s.length === 19 && s.charAt(4) === ":", h = s.length === 25 && s.charAt(10) === "T";
    if (h)
      return r(s);
    if (l)
      return o(s);
  }
  return date = {
    parseDateWithSpecFormat: o,
    parseDateWithTimezoneFormat: r,
    parseExifDate: n
  }, date;
}
var simplify, hasRequiredSimplify;
function requireSimplify() {
  if (hasRequiredSimplify) return simplify;
  hasRequiredSimplify = 1;
  var e = requireExif(), t = requireDate(), i = [
    {
      section: e.GPSIFD,
      type: 2,
      name: "GPSLatitude",
      refType: 1,
      refName: "GPSLatitudeRef",
      posVal: "N"
    },
    {
      section: e.GPSIFD,
      type: 4,
      name: "GPSLongitude",
      refType: 3,
      refName: "GPSLongitudeRef",
      posVal: "E"
    }
  ], a = [
    {
      section: e.SubIFD,
      type: 306,
      name: "ModifyDate"
    },
    {
      section: e.SubIFD,
      type: 36867,
      name: "DateTimeOriginal"
    },
    {
      section: e.SubIFD,
      type: 36868,
      name: "CreateDate"
    },
    {
      section: e.SubIFD,
      type: 306,
      name: "ModifyDate"
    }
  ];
  return simplify = {
    castDegreeValues: function(r, o) {
      i.forEach(function(n) {
        var s = r(n);
        if (s) {
          var l = r({ section: n.section, type: n.refType, name: n.refName }), h = l === n.posVal ? 1 : -1, u = (s[0] + s[1] / 60 + s[2] / 3600) * h;
          o(n, u);
        }
      });
    },
    castDateValues: function(r, o) {
      a.forEach(function(n) {
        var s = r(n);
        if (s) {
          var l = t.parseExifDate(s);
          typeof l < "u" && o(n, l);
        }
      });
    },
    simplifyValue: function(r, o) {
      return Array.isArray(r) && (r = r.map(function(n) {
        return o === 10 || o === 5 ? n[0] / n[1] : n;
      }), r.length === 1 && (r = r[0])), r;
    }
  }, simplify;
}
var exifTags, hasRequiredExifTags;
function requireExifTags() {
  return hasRequiredExifTags || (hasRequiredExifTags = 1, exifTags = {
    exif: {
      1: "InteropIndex",
      2: "InteropVersion",
      11: "ProcessingSoftware",
      254: "SubfileType",
      255: "OldSubfileType",
      256: "ImageWidth",
      257: "ImageHeight",
      258: "BitsPerSample",
      259: "Compression",
      262: "PhotometricInterpretation",
      263: "Thresholding",
      264: "CellWidth",
      265: "CellLength",
      266: "FillOrder",
      269: "DocumentName",
      270: "ImageDescription",
      271: "Make",
      272: "Model",
      273: "StripOffsets",
      274: "Orientation",
      277: "SamplesPerPixel",
      278: "RowsPerStrip",
      279: "StripByteCounts",
      280: "MinSampleValue",
      281: "MaxSampleValue",
      282: "XResolution",
      283: "YResolution",
      284: "PlanarConfiguration",
      285: "PageName",
      286: "XPosition",
      287: "YPosition",
      288: "FreeOffsets",
      289: "FreeByteCounts",
      290: "GrayResponseUnit",
      291: "GrayResponseCurve",
      292: "T4Options",
      293: "T6Options",
      296: "ResolutionUnit",
      297: "PageNumber",
      300: "ColorResponseUnit",
      301: "TransferFunction",
      305: "Software",
      306: "ModifyDate",
      315: "Artist",
      316: "HostComputer",
      317: "Predictor",
      318: "WhitePoint",
      319: "PrimaryChromaticities",
      320: "ColorMap",
      321: "HalftoneHints",
      322: "TileWidth",
      323: "TileLength",
      324: "TileOffsets",
      325: "TileByteCounts",
      326: "BadFaxLines",
      327: "CleanFaxData",
      328: "ConsecutiveBadFaxLines",
      330: "SubIFD",
      332: "InkSet",
      333: "InkNames",
      334: "NumberofInks",
      336: "DotRange",
      337: "TargetPrinter",
      338: "ExtraSamples",
      339: "SampleFormat",
      340: "SMinSampleValue",
      341: "SMaxSampleValue",
      342: "TransferRange",
      343: "ClipPath",
      344: "XClipPathUnits",
      345: "YClipPathUnits",
      346: "Indexed",
      347: "JPEGTables",
      351: "OPIProxy",
      400: "GlobalParametersIFD",
      401: "ProfileType",
      402: "FaxProfile",
      403: "CodingMethods",
      404: "VersionYear",
      405: "ModeNumber",
      433: "Decode",
      434: "DefaultImageColor",
      435: "T82Options",
      437: "JPEGTables",
      512: "JPEGProc",
      513: "ThumbnailOffset",
      514: "ThumbnailLength",
      515: "JPEGRestartInterval",
      517: "JPEGLosslessPredictors",
      518: "JPEGPointTransforms",
      519: "JPEGQTables",
      520: "JPEGDCTables",
      521: "JPEGACTables",
      529: "YCbCrCoefficients",
      530: "YCbCrSubSampling",
      531: "YCbCrPositioning",
      532: "ReferenceBlackWhite",
      559: "StripRowCounts",
      700: "ApplicationNotes",
      999: "USPTOMiscellaneous",
      4096: "RelatedImageFileFormat",
      4097: "RelatedImageWidth",
      4098: "RelatedImageHeight",
      18246: "Rating",
      18247: "XP_DIP_XML",
      18248: "StitchInfo",
      18249: "RatingPercent",
      32781: "ImageID",
      32931: "WangTag1",
      32932: "WangAnnotation",
      32933: "WangTag3",
      32934: "WangTag4",
      32995: "Matteing",
      32996: "DataType",
      32997: "ImageDepth",
      32998: "TileDepth",
      33405: "Model2",
      33421: "CFARepeatPatternDim",
      33422: "CFAPattern2",
      33423: "BatteryLevel",
      33424: "KodakIFD",
      33432: "Copyright",
      33434: "ExposureTime",
      33437: "FNumber",
      33445: "MDFileTag",
      33446: "MDScalePixel",
      33447: "MDColorTable",
      33448: "MDLabName",
      33449: "MDSampleInfo",
      33450: "MDPrepDate",
      33451: "MDPrepTime",
      33452: "MDFileUnits",
      33550: "PixelScale",
      33589: "AdventScale",
      33590: "AdventRevision",
      33628: "UIC1Tag",
      33629: "UIC2Tag",
      33630: "UIC3Tag",
      33631: "UIC4Tag",
      33723: "IPTC-NAA",
      33918: "IntergraphPacketData",
      33919: "IntergraphFlagRegisters",
      33920: "IntergraphMatrix",
      33921: "INGRReserved",
      33922: "ModelTiePoint",
      34016: "Site",
      34017: "ColorSequence",
      34018: "IT8Header",
      34019: "RasterPadding",
      34020: "BitsPerRunLength",
      34021: "BitsPerExtendedRunLength",
      34022: "ColorTable",
      34023: "ImageColorIndicator",
      34024: "BackgroundColorIndicator",
      34025: "ImageColorValue",
      34026: "BackgroundColorValue",
      34027: "PixelIntensityRange",
      34028: "TransparencyIndicator",
      34029: "ColorCharacterization",
      34030: "HCUsage",
      34031: "TrapIndicator",
      34032: "CMYKEquivalent",
      34118: "SEMInfo",
      34152: "AFCP_IPTC",
      34232: "PixelMagicJBIGOptions",
      34264: "ModelTransform",
      34306: "WB_GRGBLevels",
      34310: "LeafData",
      34377: "PhotoshopSettings",
      34665: "ExifOffset",
      34675: "ICC_Profile",
      34687: "TIFF_FXExtensions",
      34688: "MultiProfiles",
      34689: "SharedData",
      34690: "T88Options",
      34732: "ImageLayer",
      34735: "GeoTiffDirectory",
      34736: "GeoTiffDoubleParams",
      34737: "GeoTiffAsciiParams",
      34850: "ExposureProgram",
      34852: "SpectralSensitivity",
      34853: "GPSInfo",
      34855: "ISO",
      34856: "Opto-ElectricConvFactor",
      34857: "Interlace",
      34858: "TimeZoneOffset",
      34859: "SelfTimerMode",
      34864: "SensitivityType",
      34865: "StandardOutputSensitivity",
      34866: "RecommendedExposureIndex",
      34867: "ISOSpeed",
      34868: "ISOSpeedLatitudeyyy",
      34869: "ISOSpeedLatitudezzz",
      34908: "FaxRecvParams",
      34909: "FaxSubAddress",
      34910: "FaxRecvTime",
      34954: "LeafSubIFD",
      36864: "ExifVersion",
      36867: "DateTimeOriginal",
      36868: "CreateDate",
      37121: "ComponentsConfiguration",
      37122: "CompressedBitsPerPixel",
      37377: "ShutterSpeedValue",
      37378: "ApertureValue",
      37379: "BrightnessValue",
      37380: "ExposureCompensation",
      37381: "MaxApertureValue",
      37382: "SubjectDistance",
      37383: "MeteringMode",
      37384: "LightSource",
      37385: "Flash",
      37386: "FocalLength",
      37387: "FlashEnergy",
      37388: "SpatialFrequencyResponse",
      37389: "Noise",
      37390: "FocalPlaneXResolution",
      37391: "FocalPlaneYResolution",
      37392: "FocalPlaneResolutionUnit",
      37393: "ImageNumber",
      37394: "SecurityClassification",
      37395: "ImageHistory",
      37396: "SubjectArea",
      37397: "ExposureIndex",
      37398: "TIFF-EPStandardID",
      37399: "SensingMethod",
      37434: "CIP3DataFile",
      37435: "CIP3Sheet",
      37436: "CIP3Side",
      37439: "StoNits",
      37500: "MakerNote",
      37510: "UserComment",
      37520: "SubSecTime",
      37521: "SubSecTimeOriginal",
      37522: "SubSecTimeDigitized",
      37679: "MSDocumentText",
      37680: "MSPropertySetStorage",
      37681: "MSDocumentTextPosition",
      37724: "ImageSourceData",
      40091: "XPTitle",
      40092: "XPComment",
      40093: "XPAuthor",
      40094: "XPKeywords",
      40095: "XPSubject",
      40960: "FlashpixVersion",
      40961: "ColorSpace",
      40962: "ExifImageWidth",
      40963: "ExifImageHeight",
      40964: "RelatedSoundFile",
      40965: "InteropOffset",
      41483: "FlashEnergy",
      41484: "SpatialFrequencyResponse",
      41485: "Noise",
      41486: "FocalPlaneXResolution",
      41487: "FocalPlaneYResolution",
      41488: "FocalPlaneResolutionUnit",
      41489: "ImageNumber",
      41490: "SecurityClassification",
      41491: "ImageHistory",
      41492: "SubjectLocation",
      41493: "ExposureIndex",
      41494: "TIFF-EPStandardID",
      41495: "SensingMethod",
      41728: "FileSource",
      41729: "SceneType",
      41730: "CFAPattern",
      41985: "CustomRendered",
      41986: "ExposureMode",
      41987: "WhiteBalance",
      41988: "DigitalZoomRatio",
      41989: "FocalLengthIn35mmFormat",
      41990: "SceneCaptureType",
      41991: "GainControl",
      41992: "Contrast",
      41993: "Saturation",
      41994: "Sharpness",
      41995: "DeviceSettingDescription",
      41996: "SubjectDistanceRange",
      42016: "ImageUniqueID",
      42032: "OwnerName",
      42033: "SerialNumber",
      42034: "LensInfo",
      42035: "LensMake",
      42036: "LensModel",
      42037: "LensSerialNumber",
      42112: "GDALMetadata",
      42113: "GDALNoData",
      42240: "Gamma",
      44992: "ExpandSoftware",
      44993: "ExpandLens",
      44994: "ExpandFilm",
      44995: "ExpandFilterLens",
      44996: "ExpandScanner",
      44997: "ExpandFlashLamp",
      48129: "PixelFormat",
      48130: "Transformation",
      48131: "Uncompressed",
      48132: "ImageType",
      48256: "ImageWidth",
      48257: "ImageHeight",
      48258: "WidthResolution",
      48259: "HeightResolution",
      48320: "ImageOffset",
      48321: "ImageByteCount",
      48322: "AlphaOffset",
      48323: "AlphaByteCount",
      48324: "ImageDataDiscard",
      48325: "AlphaDataDiscard",
      50215: "OceScanjobDesc",
      50216: "OceApplicationSelector",
      50217: "OceIDNumber",
      50218: "OceImageLogic",
      50255: "Annotations",
      50341: "PrintIM",
      50560: "USPTOOriginalContentType",
      50706: "DNGVersion",
      50707: "DNGBackwardVersion",
      50708: "UniqueCameraModel",
      50709: "LocalizedCameraModel",
      50710: "CFAPlaneColor",
      50711: "CFALayout",
      50712: "LinearizationTable",
      50713: "BlackLevelRepeatDim",
      50714: "BlackLevel",
      50715: "BlackLevelDeltaH",
      50716: "BlackLevelDeltaV",
      50717: "WhiteLevel",
      50718: "DefaultScale",
      50719: "DefaultCropOrigin",
      50720: "DefaultCropSize",
      50721: "ColorMatrix1",
      50722: "ColorMatrix2",
      50723: "CameraCalibration1",
      50724: "CameraCalibration2",
      50725: "ReductionMatrix1",
      50726: "ReductionMatrix2",
      50727: "AnalogBalance",
      50728: "AsShotNeutral",
      50729: "AsShotWhiteXY",
      50730: "BaselineExposure",
      50731: "BaselineNoise",
      50732: "BaselineSharpness",
      50733: "BayerGreenSplit",
      50734: "LinearResponseLimit",
      50735: "CameraSerialNumber",
      50736: "DNGLensInfo",
      50737: "ChromaBlurRadius",
      50738: "AntiAliasStrength",
      50739: "ShadowScale",
      50740: "DNGPrivateData",
      50741: "MakerNoteSafety",
      50752: "RawImageSegmentation",
      50778: "CalibrationIlluminant1",
      50779: "CalibrationIlluminant2",
      50780: "BestQualityScale",
      50781: "RawDataUniqueID",
      50784: "AliasLayerMetadata",
      50827: "OriginalRawFileName",
      50828: "OriginalRawFileData",
      50829: "ActiveArea",
      50830: "MaskedAreas",
      50831: "AsShotICCProfile",
      50832: "AsShotPreProfileMatrix",
      50833: "CurrentICCProfile",
      50834: "CurrentPreProfileMatrix",
      50879: "ColorimetricReference",
      50898: "PanasonicTitle",
      50899: "PanasonicTitle2",
      50931: "CameraCalibrationSig",
      50932: "ProfileCalibrationSig",
      50933: "ProfileIFD",
      50934: "AsShotProfileName",
      50935: "NoiseReductionApplied",
      50936: "ProfileName",
      50937: "ProfileHueSatMapDims",
      50938: "ProfileHueSatMapData1",
      50939: "ProfileHueSatMapData2",
      50940: "ProfileToneCurve",
      50941: "ProfileEmbedPolicy",
      50942: "ProfileCopyright",
      50964: "ForwardMatrix1",
      50965: "ForwardMatrix2",
      50966: "PreviewApplicationName",
      50967: "PreviewApplicationVersion",
      50968: "PreviewSettingsName",
      50969: "PreviewSettingsDigest",
      50970: "PreviewColorSpace",
      50971: "PreviewDateTime",
      50972: "RawImageDigest",
      50973: "OriginalRawFileDigest",
      50974: "SubTileBlockSize",
      50975: "RowInterleaveFactor",
      50981: "ProfileLookTableDims",
      50982: "ProfileLookTableData",
      51008: "OpcodeList1",
      51009: "OpcodeList2",
      51022: "OpcodeList3",
      51041: "NoiseProfile",
      51043: "TimeCodes",
      51044: "FrameRate",
      51058: "TStop",
      51081: "ReelName",
      51089: "OriginalDefaultFinalSize",
      51090: "OriginalBestQualitySize",
      51091: "OriginalDefaultCropSize",
      51105: "CameraLabel",
      51107: "ProfileHueSatMapEncoding",
      51108: "ProfileLookTableEncoding",
      51109: "BaselineExposureOffset",
      51110: "DefaultBlackRender",
      51111: "NewRawImageDigest",
      51112: "RawToPreviewGain",
      51125: "DefaultUserCrop",
      59932: "Padding",
      59933: "OffsetSchema",
      65e3: "OwnerName",
      65001: "SerialNumber",
      65002: "Lens",
      65024: "KDC_IFD",
      65100: "RawFile",
      65101: "Converter",
      65102: "WhiteBalance",
      65105: "Exposure",
      65106: "Shadows",
      65107: "Brightness",
      65108: "Contrast",
      65109: "Saturation",
      65110: "Sharpness",
      65111: "Smoothness",
      65112: "MoireFilter"
    },
    gps: {
      0: "GPSVersionID",
      1: "GPSLatitudeRef",
      2: "GPSLatitude",
      3: "GPSLongitudeRef",
      4: "GPSLongitude",
      5: "GPSAltitudeRef",
      6: "GPSAltitude",
      7: "GPSTimeStamp",
      8: "GPSSatellites",
      9: "GPSStatus",
      10: "GPSMeasureMode",
      11: "GPSDOP",
      12: "GPSSpeedRef",
      13: "GPSSpeed",
      14: "GPSTrackRef",
      15: "GPSTrack",
      16: "GPSImgDirectionRef",
      17: "GPSImgDirection",
      18: "GPSMapDatum",
      19: "GPSDestLatitudeRef",
      20: "GPSDestLatitude",
      21: "GPSDestLongitudeRef",
      22: "GPSDestLongitude",
      23: "GPSDestBearingRef",
      24: "GPSDestBearing",
      25: "GPSDestDistanceRef",
      26: "GPSDestDistance",
      27: "GPSProcessingMethod",
      28: "GPSAreaInformation",
      29: "GPSDateStamp",
      30: "GPSDifferential",
      31: "GPSHPositioningError"
    }
  }), exifTags;
}
var parser, hasRequiredParser;
function requireParser() {
  if (hasRequiredParser) return parser;
  hasRequiredParser = 1;
  var e = requireJpeg(), t = requireExif(), i = requireSimplify();
  function a(o, n, s, l, h, u, d) {
    this.startMarker = o, this.tags = n, this.imageSize = s, this.thumbnailOffset = l, this.thumbnailLength = h, this.thumbnailType = u, this.app1Offset = d;
  }
  a.prototype = {
    hasThumbnail: function(o) {
      return !this.thumbnailOffset || !this.thumbnailLength ? !1 : typeof o != "string" ? !0 : o.toLowerCase().trim() === "image/jpeg" ? this.thumbnailType === 6 : o.toLowerCase().trim() === "image/tiff" ? this.thumbnailType === 1 : !1;
    },
    getThumbnailOffset: function() {
      return this.app1Offset + 6 + this.thumbnailOffset;
    },
    getThumbnailLength: function() {
      return this.thumbnailLength;
    },
    getThumbnailBuffer: function() {
      return this._getThumbnailStream().nextBuffer(this.thumbnailLength);
    },
    _getThumbnailStream: function() {
      return this.startMarker.openWithOffset(this.getThumbnailOffset());
    },
    getImageSize: function() {
      return this.imageSize;
    },
    getThumbnailSize: function() {
      var o = this._getThumbnailStream(), n;
      return e.parseSections(o, function(s, l) {
        e.getSectionName(s).name === "SOF" && (n = e.getSizeFromSOFSection(l));
      }), n;
    }
  };
  function r(o) {
    this.stream = o, this.flags = {
      readBinaryTags: !1,
      resolveTagNames: !0,
      simplifyValues: !0,
      imageSize: !0,
      hidePointers: !0,
      returnTags: !0
    };
  }
  return r.prototype = {
    enableBinaryFields: function(o) {
      return this.flags.readBinaryTags = !!o, this;
    },
    enablePointers: function(o) {
      return this.flags.hidePointers = !o, this;
    },
    enableTagNames: function(o) {
      return this.flags.resolveTagNames = !!o, this;
    },
    enableImageSize: function(o) {
      return this.flags.imageSize = !!o, this;
    },
    enableReturnTags: function(o) {
      return this.flags.returnTags = !!o, this;
    },
    enableSimpleValues: function(o) {
      return this.flags.simplifyValues = !!o, this;
    },
    parse: function() {
      var o = this.stream.mark(), n = o.openWithOffset(0), s = this.flags, l, h, u, d, m, p, g, M, k;
      return s.resolveTagNames && (g = requireExifTags()), s.resolveTagNames ? (l = {}, M = function(w) {
        return l[w.name];
      }, k = function(w, v) {
        l[w.name] = v;
      }) : (l = [], M = function(w) {
        var v;
        for (v = 0; v < l.length; ++v)
          if (l[v].type === w.type && l[v].section === w.section)
            return l.value;
      }, k = function(w, v) {
        var C;
        for (C = 0; C < l.length; ++C)
          if (l[C].type === w.type && l[C].section === w.section) {
            l.value = v;
            return;
          }
      }), e.parseSections(n, function(w, v) {
        var C, B = v.offsetFrom(o);
        w === 225 ? (C = t.parseTags(v, function(A, S, b, E) {
          if (!(!s.readBinaryTags && E === 7)) {
            if (S === 513) {
              if (u = b[0], s.hidePointers)
                return;
            } else if (S === 514) {
              if (d = b[0], s.hidePointers)
                return;
            } else if (S === 259 && (m = b[0], s.hidePointers))
              return;
            if (s.returnTags)
              if (s.simplifyValues && (b = i.simplifyValue(b, E)), s.resolveTagNames) {
                var F = A === t.GPSIFD ? g.gps : g.exif, Z = F[S];
                Z || (Z = g.exif[S]), l.hasOwnProperty(Z) || (l[Z] = b);
              } else
                l.push({
                  section: A,
                  type: S,
                  value: b
                });
          }
        }), C && (p = B)) : s.imageSize && e.getSectionName(w).name === "SOF" && (h = e.getSizeFromSOFSection(v));
      }), s.simplifyValues && (i.castDegreeValues(M, k), i.castDateValues(M, k)), new a(o, l, h, u, d, m, p);
    }
  }, parser = r, parser;
}
var domBufferstream, hasRequiredDomBufferstream;
function requireDomBufferstream() {
  if (hasRequiredDomBufferstream) return domBufferstream;
  hasRequiredDomBufferstream = 1;
  function e(t, i, a, r, o, n) {
    this.global = o, i = i || 0, a = a || t.byteLength - i, this.arrayBuffer = t.slice(i, i + a), this.view = new o.DataView(this.arrayBuffer, 0, this.arrayBuffer.byteLength), this.setBigEndian(r), this.offset = 0, this.parentOffset = (n || 0) + i;
  }
  return e.prototype = {
    setBigEndian: function(t) {
      this.littleEndian = !t;
    },
    nextUInt8: function() {
      var t = this.view.getUint8(this.offset);
      return this.offset += 1, t;
    },
    nextInt8: function() {
      var t = this.view.getInt8(this.offset);
      return this.offset += 1, t;
    },
    nextUInt16: function() {
      var t = this.view.getUint16(this.offset, this.littleEndian);
      return this.offset += 2, t;
    },
    nextUInt32: function() {
      var t = this.view.getUint32(this.offset, this.littleEndian);
      return this.offset += 4, t;
    },
    nextInt16: function() {
      var t = this.view.getInt16(this.offset, this.littleEndian);
      return this.offset += 2, t;
    },
    nextInt32: function() {
      var t = this.view.getInt32(this.offset, this.littleEndian);
      return this.offset += 4, t;
    },
    nextFloat: function() {
      var t = this.view.getFloat32(this.offset, this.littleEndian);
      return this.offset += 4, t;
    },
    nextDouble: function() {
      var t = this.view.getFloat64(this.offset, this.littleEndian);
      return this.offset += 8, t;
    },
    nextBuffer: function(t) {
      var i = this.arrayBuffer.slice(this.offset, this.offset + t);
      return this.offset += t, i;
    },
    remainingLength: function() {
      return this.arrayBuffer.byteLength - this.offset;
    },
    nextString: function(t) {
      var i = this.arrayBuffer.slice(this.offset, this.offset + t);
      return i = String.fromCharCode.apply(null, new this.global.Uint8Array(i)), this.offset += t, i;
    },
    mark: function() {
      var t = this;
      return {
        openWithOffset: function(i) {
          return i = (i || 0) + this.offset, new e(t.arrayBuffer, i, t.arrayBuffer.byteLength - i, !t.littleEndian, t.global, t.parentOffset);
        },
        offset: this.offset,
        getParentOffset: function() {
          return t.parentOffset;
        }
      };
    },
    offsetFrom: function(t) {
      return this.parentOffset + this.offset - (t.offset + t.getParentOffset());
    },
    skip: function(t) {
      this.offset += t;
    },
    branch: function(t, i) {
      return i = typeof i == "number" ? i : this.arrayBuffer.byteLength - (this.offset + t), new e(this.arrayBuffer, this.offset + t, i, !this.littleEndian, this.global, this.parentOffset);
    }
  }, domBufferstream = e, domBufferstream;
}
var bufferstream, hasRequiredBufferstream;
function requireBufferstream() {
  if (hasRequiredBufferstream) return bufferstream;
  hasRequiredBufferstream = 1;
  function e(t, i, a, r) {
    this.buffer = t, this.offset = i || 0, a = typeof a == "number" ? a : t.length, this.endPosition = this.offset + a, this.setBigEndian(r);
  }
  return e.prototype = {
    setBigEndian: function(t) {
      this.bigEndian = !!t;
    },
    nextUInt8: function() {
      var t = this.buffer.readUInt8(this.offset);
      return this.offset += 1, t;
    },
    nextInt8: function() {
      var t = this.buffer.readInt8(this.offset);
      return this.offset += 1, t;
    },
    nextUInt16: function() {
      var t = this.bigEndian ? this.buffer.readUInt16BE(this.offset) : this.buffer.readUInt16LE(this.offset);
      return this.offset += 2, t;
    },
    nextUInt32: function() {
      var t = this.bigEndian ? this.buffer.readUInt32BE(this.offset) : this.buffer.readUInt32LE(this.offset);
      return this.offset += 4, t;
    },
    nextInt16: function() {
      var t = this.bigEndian ? this.buffer.readInt16BE(this.offset) : this.buffer.readInt16LE(this.offset);
      return this.offset += 2, t;
    },
    nextInt32: function() {
      var t = this.bigEndian ? this.buffer.readInt32BE(this.offset) : this.buffer.readInt32LE(this.offset);
      return this.offset += 4, t;
    },
    nextFloat: function() {
      var t = this.bigEndian ? this.buffer.readFloatBE(this.offset) : this.buffer.readFloatLE(this.offset);
      return this.offset += 4, t;
    },
    nextDouble: function() {
      var t = this.bigEndian ? this.buffer.readDoubleBE(this.offset) : this.buffer.readDoubleLE(this.offset);
      return this.offset += 8, t;
    },
    nextBuffer: function(t) {
      var i = this.buffer.slice(this.offset, this.offset + t);
      return this.offset += t, i;
    },
    remainingLength: function() {
      return this.endPosition - this.offset;
    },
    nextString: function(t) {
      var i = this.buffer.toString("utf8", this.offset, this.offset + t);
      return this.offset += t, i;
    },
    mark: function() {
      var t = this;
      return {
        openWithOffset: function(i) {
          return i = (i || 0) + this.offset, new e(t.buffer, i, t.endPosition - i, t.bigEndian);
        },
        offset: this.offset
      };
    },
    offsetFrom: function(t) {
      return this.offset - t.offset;
    },
    skip: function(t) {
      this.offset += t;
    },
    branch: function(t, i) {
      return i = typeof i == "number" ? i : this.endPosition - (this.offset + t), new e(this.buffer, this.offset + t, i, this.bigEndian);
    }
  }, bufferstream = e, bufferstream;
}
var exifParser, hasRequiredExifParser;
function requireExifParser() {
  if (hasRequiredExifParser) return exifParser;
  hasRequiredExifParser = 1;
  var e = requireParser();
  function t() {
    return (0, eval)("this");
  }
  return exifParser = {
    create: function(i, a) {
      if (a = a || t(), i instanceof a.ArrayBuffer) {
        var r = requireDomBufferstream();
        return new e(new r(i, 0, i.byteLength, !0, a));
      } else {
        var o = requireBufferstream();
        return new e(new o(i, 0, i.length, !0));
      }
    }
  }, exifParser;
}
var exifParserExports = requireExifParser();
const EXIFParser = /* @__PURE__ */ getDefaultExportFromCjs(exifParserExports);
function getExifOrientation(e) {
  const t = e._exif;
  return t && t.tags && t.tags.Orientation || 1;
}
function getExifOrientationTransformation(e) {
  const t = e.bitmap.width, i = e.bitmap.height;
  switch (getExifOrientation(e)) {
    case 1:
      return null;
    case 2:
      return function(a, r) {
        return [t - a - 1, r];
      };
    case 3:
      return function(a, r) {
        return [t - a - 1, i - r - 1];
      };
    case 4:
      return function(a, r) {
        return [a, i - r - 1];
      };
    case 5:
      return function(a, r) {
        return [r, a];
      };
    case 6:
      return function(a, r) {
        return [r, i - a - 1];
      };
    case 7:
      return function(a, r) {
        return [t - r - 1, i - a - 1];
      };
    case 8:
      return function(a, r) {
        return [t - r - 1, a];
      };
    default:
      return null;
  }
}
function transformBitmap(e, t, i, a) {
  const r = e.bitmap.data, o = e.bitmap.width, n = Buffer.alloc(r.length);
  for (let s = 0; s < t; s++)
    for (let l = 0; l < i; l++) {
      const [h, u] = a(s, l), d = t * l + s << 2, m = o * u + h << 2, p = r.readUInt32BE(m);
      n.writeUInt32BE(p, d);
    }
  e.bitmap.data = n, e.bitmap.width = t, e.bitmap.height = i, e._exif.tags.Orientation = 1;
}
function exifRotate(e) {
  if (getExifOrientation(e) < 2)
    return;
  const t = getExifOrientationTransformation(e), i = getExifOrientation(e) > 4, a = i ? e.bitmap.height : e.bitmap.width, r = i ? e.bitmap.width : e.bitmap.height;
  t && transformBitmap(e, a, r, t);
}
async function attemptExifRotate(e, t) {
  try {
    e._exif = EXIFParser.create(t).parse(), exifRotate(e);
  } catch {
  }
}
const emptyBitmap = {
  data: Buffer.alloc(0),
  width: 0,
  height: 0
};
function bufferFromArrayBuffer(e) {
  const t = Buffer.alloc(e.byteLength), i = new Uint8Array(e);
  for (let a = 0; a < t.length; ++a)
    t[a] = i[a];
  return t;
}
function createJimp({ plugins: e, formats: t } = {}) {
  const i = e || [], a = (t || []).map((o) => o()), r = class {
    constructor(n = emptyBitmap) {
      /**
       * The bitmap data of the image
       */
      Je(this, "bitmap", emptyBitmap);
      /**  Default color to use for new pixels */
      Je(this, "background", 0);
      /** Formats that can be used with Jimp */
      Je(this, "formats", []);
      /** The original MIME type of the image */
      Je(this, "mime");
      if (this.formats = a, "data" in n)
        this.bitmap = n;
      else if (this.bitmap = {
        data: Buffer.alloc(n.width * n.height * 4),
        width: n.width,
        height: n.height
      }, n.color) {
        this.background = typeof n.color == "string" ? cssColorToHex(n.color) : n.color;
        for (let s = 0; s < this.bitmap.data.length; s += 4)
          this.bitmap.data.writeUInt32BE(this.background, s);
      }
      for (const s of i)
        for (const l in s)
          this[l] = (...h) => {
            var d;
            const u = (d = s[l]) == null ? void 0 : d.call(s, this, ...h);
            return typeof u == "object" && "bitmap" in u ? (this.bitmap = u.bitmap, this) : u;
          };
    }
    /**
     * Create a Jimp instance from a URL, a file path, or a Buffer
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * // Read from a file path
     * const image = await Jimp.read("test/image.png");
     *
     * // Read from a URL
     * const image = await Jimp.read("https://upload.wikimedia.org/wikipedia/commons/0/01/Bot-Test.jpg");
     * ```
     */
    static async read(n, s) {
      if (Buffer.isBuffer(n) || n instanceof ArrayBuffer)
        return this.fromBuffer(n);
      if (existsSync(n))
        return this.fromBuffer(await readFile(n));
      const [l, h] = await to(fetch(n));
      if (l)
        throw new Error(`Could not load Buffer from URL: ${n}`);
      if (!h.ok)
        throw new Error(`HTTP Status ${h.status} for url ${n}`);
      const [u, d] = await to(h.arrayBuffer());
      if (u)
        throw new Error(`Could not load Buffer from ${n}`);
      const m = bufferFromArrayBuffer(d);
      return this.fromBuffer(m, s);
    }
    /**
     * Create a Jimp instance from a bitmap.
     * The difference between this and just using the constructor is that this will
     * convert raw image data into the bitmap format that Jimp uses.
     *
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * const image = Jimp.fromBitmap({
     *   data: Buffer.from([
     *     0xffffffff, 0xffffffff, 0xffffffff,
     *     0xffffffff, 0xffffffff, 0xffffffff,
     *     0xffffffff, 0xffffffff, 0xffffffff,
     *   ]),
     *   width: 3,
     *   height: 3,
     * });
     * ```
     */
    static fromBitmap(n) {
      let s;
      if (n.data instanceof Buffer && (s = Buffer.from(n.data)), (n.data instanceof Uint8Array || n.data instanceof Uint8ClampedArray) && (s = Buffer.from(n.data.buffer)), Array.isArray(n.data) && (s = Buffer.concat(n.data.map((l) => Buffer.from(l.toString(16).padStart(8, "0"), "hex")))), !s)
        throw new Error("data must be a Buffer");
      if (typeof n.height != "number" || typeof n.width != "number")
        throw new Error("bitmap must have width and height");
      return new r({
        height: n.height,
        width: n.width,
        data: s
      });
    }
    /**
     * Parse a bitmap with the loaded image types.
     *
     * @param buffer Raw image data
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * const buffer = await fs.readFile("test/image.png");
     * const image = await Jimp.fromBuffer(buffer);
     * ```
     */
    static async fromBuffer(n, s) {
      const l = n instanceof ArrayBuffer ? bufferFromArrayBuffer(n) : n, h = await fileType.fromBuffer(l);
      if (!h || !h.mime)
        throw new Error("Could not find MIME for Buffer");
      const u = a.find((m) => m.mime === h.mime);
      if (!u || !u.decode)
        throw new Error(`Mime type ${h.mime} does not support decoding`);
      const d = new r(await u.decode(l, s == null ? void 0 : s[u.mime]));
      return d.mime = h.mime, attemptExifRotate(d, l), d;
    }
    /**
     * Nicely format Jimp object when sent to the console e.g. console.log(image)
     * @returns Pretty printed jimp object
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * const image = await Jimp.read("test/image.png");
     *
     * console.log(image);
     * ```
     */
    inspect() {
      return "<Jimp " + (this.bitmap === emptyBitmap ? "pending..." : this.bitmap.width + "x" + this.bitmap.height) + ">";
    }
    /**
     * Nicely format Jimp object when converted to a string
     * @returns pretty printed
     */
    toString() {
      return "[object Jimp]";
    }
    /** Get the width of the image */
    get width() {
      return this.bitmap.width;
    }
    /** Get the height of the image */
    get height() {
      return this.bitmap.height;
    }
    /**
     * Converts the Jimp instance to an image buffer
     * @param mime The mime type to export to
     * @param options The options to use when exporting
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     * import { promises as fs } from "fs";
     *
     * const image = new Jimp({ width: 3, height: 3, color: 0xffffffff });
     *
     * await image.write("test/output.jpeg", {
     *   quality: 50,
     * });
     * ```
     */
    async getBuffer(n, s) {
      const l = this.formats.find((u) => u.mime === n);
      if (!l || !l.encode)
        throw new Error(`Unsupported MIME type: ${n}`);
      let h;
      return l.hasAlpha ? h = this : (h = new r({
        width: this.bitmap.width,
        height: this.bitmap.height,
        color: this.background
      }), composite(h, this)), l.encode(h.bitmap, s);
    }
    /**
     * Converts the image to a base 64 string
     *
     * @param mime The mime type to export to
     * @param options The options to use when exporting
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * const image = Jimp.fromBuffer(Buffer.from([
     *   0xff, 0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 0x00,
     *   0xff, 0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 0x00,
     *   0xff, 0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 0x00,
     * ]));
     *
     * const base64 = image.getBase64("image/jpeg", {
     *   quality: 50,
     * });
     * ```
     */
    async getBase64(n, s) {
      const l = await this.getBuffer(n, s);
      return "data:" + n + ";base64," + l.toString("base64");
    }
    /**
     * Write the image to a file
     * @param path the path to write the image to
     * @param options the options to use when writing the image
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * const image = Jimp.fromBuffer(Buffer.from([
     *   0xff, 0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 0x00,
     *   0xff, 0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 0x00,
     *   0xff, 0x00, 0x00, 0x00, 0xff, 0x00, 0x00, 0x00,
     * ]));
     *
     * await image.write("test/output.png");
     * ```
     */
    async write(n, s) {
      const l = mime.getType(n);
      await writeFile(n, await this.getBuffer(l, s));
    }
    /**
     * Clone the image into a new Jimp instance.
     * @param this
     * @returns A new Jimp instance
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * const image = new Jimp({ width: 3, height: 3, color: 0xffffffff });
     *
     * const clone = image.clone();
     * ```
     */
    clone() {
      return new r({
        ...this.bitmap,
        data: Buffer.from(this.bitmap.data)
      });
    }
    /**
     * Returns the offset of a pixel in the bitmap buffer
     * @param x the x coordinate
     * @param y the y coordinate
     * @param edgeHandling (optional) define how to sum pixels from outside the border
     * @returns the index of the pixel or -1 if not found
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * const image = new Jimp({ width: 3, height: 3, color: 0xffffffff });
     *
     * image.getPixelIndex(1, 1); // 2
     * ```
     */
    getPixelIndex(n, s, l) {
      let h, u;
      if (l || (l = Edge.EXTEND), typeof n != "number" || typeof s != "number")
        throw new Error("x and y must be numbers");
      n = Math.round(n), s = Math.round(s), h = n, u = s, l === Edge.EXTEND && (n < 0 && (h = 0), n >= this.bitmap.width && (h = this.bitmap.width - 1), s < 0 && (u = 0), s >= this.bitmap.height && (u = this.bitmap.height - 1)), l === Edge.WRAP && (n < 0 && (h = this.bitmap.width + n), n >= this.bitmap.width && (h = n % this.bitmap.width), s < 0 && (u = this.bitmap.height + s), s >= this.bitmap.height && (u = s % this.bitmap.height));
      let d = this.bitmap.width * u + h << 2;
      return (h < 0 || h >= this.bitmap.width) && (d = -1), (u < 0 || u >= this.bitmap.height) && (d = -1), d;
    }
    /**
     * Returns the hex color value of a pixel
     * @param x the x coordinate
     * @param y the y coordinate
     * @returns the color of the pixel
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * const image = new Jimp({ width: 3, height: 3, color: 0xffffffff });
     *
     * image.getPixelColor(1, 1); // 0xffffffff
     * ```
     */
    getPixelColor(n, s) {
      if (typeof n != "number" || typeof s != "number")
        throw new Error("x and y must be numbers");
      const l = this.getPixelIndex(n, s);
      return this.bitmap.data.readUInt32BE(l);
    }
    /**
     * Sets the hex colour value of a pixel
     *
     * @param hex color to set
     * @param x the x coordinate
     * @param y the y coordinate
     *
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * const image = new Jimp({ width: 3, height: 3, color: 0xffffffff });
     *
     * image.setPixelColor(0xff0000ff, 0, 0);
     * ```
     */
    setPixelColor(n, s, l) {
      if (typeof n != "number" || typeof s != "number" || typeof l != "number")
        throw new Error("hex, x and y must be numbers");
      const h = this.getPixelIndex(s, l);
      return this.bitmap.data.writeUInt32BE(n, h), this;
    }
    /**
     * Determine if the image contains opaque pixels.
     *
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * const image = new Jimp({ width: 3, height: 3, color: 0xffffffaa });
     * const image2 = new Jimp({ width: 3, height: 3, color: 0xff0000ff });
     *
     * image.hasAlpha(); // false
     * image2.hasAlpha(); // true
     * ```
     */
    hasAlpha() {
      const { width: n, height: s, data: l } = this.bitmap, h = n * s << 2;
      for (let u = 3; u < h; u += 4)
        if (l[u] !== 255)
          return !0;
      return !1;
    }
    /**
     * Composites a source image over to this image respecting alpha channels
     * @param src the source Jimp instance
     * @param x the x position to blit the image
     * @param y the y position to blit the image
     * @param options determine what mode to use
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * const image = new Jimp({ width: 10, height: 10, color: 0xffffffff });
     * const image2 = new Jimp({ width: 3, height: 3, color: 0xff0000ff });
     *
     * image.composite(image2, 3, 3);
     * ```
     */
    composite(n, s = 0, l = 0, h = {}) {
      return composite(this, n, s, l, h);
    }
    scan(n, s, l, h, u) {
      return scan(this, n, s, l, h, u);
    }
    /**
     * Iterate scan through a region of the bitmap
     * @param x the x coordinate to begin the scan at
     * @param y the y coordinate to begin the scan at
     * @param w the width of the scan region
     * @param h the height of the scan region
     * @example
     * ```ts
     * import { Jimp } from "jimp";
     *
     * const image = new Jimp({ width: 3, height: 3, color: 0xffffffff });
     *
     * for (const { x, y, idx, image } of j.scanIterator()) {
     *   // do something with the pixel
     * }
     * ```
     */
    scanIterator(n = 0, s = 0, l = this.bitmap.width, h = this.bitmap.height) {
      if (typeof n != "number" || typeof s != "number")
        throw new Error("x and y must be numbers");
      if (typeof l != "number" || typeof h != "number")
        throw new Error("w and h must be numbers");
      return scanIterator(this, n, s, l, h);
    }
  };
  return r;
}
var ResizeStrategy;
(function(e) {
  e.NEAREST_NEIGHBOR = "nearestNeighbor", e.BILINEAR = "bilinearInterpolation", e.BICUBIC = "bicubicInterpolation", e.HERMITE = "hermiteInterpolation", e.BEZIER = "bezierInterpolation";
})(ResizeStrategy || (ResizeStrategy = {}));
function Resize(e, t, i, a, r, o, n) {
  this.widthOriginal = Math.abs(Math.floor(e) || 0), this.heightOriginal = Math.abs(Math.floor(t) || 0), this.targetWidth = Math.abs(Math.floor(i) || 0), this.targetHeight = Math.abs(Math.floor(a) || 0), this.colorChannels = r ? 4 : 3, this.interpolationPass = !!o, this.resizeCallback = typeof n == "function" ? n : function() {
  }, this.targetWidthMultipliedByChannels = this.targetWidth * this.colorChannels, this.originalWidthMultipliedByChannels = this.widthOriginal * this.colorChannels, this.originalHeightMultipliedByChannels = this.heightOriginal * this.colorChannels, this.widthPassResultSize = this.targetWidthMultipliedByChannels * this.heightOriginal, this.finalResultSize = this.targetWidthMultipliedByChannels * this.targetHeight, this.initialize();
}
Resize.prototype.initialize = function() {
  if (this.widthOriginal > 0 && this.heightOriginal > 0 && this.targetWidth > 0 && this.targetHeight > 0)
    this.configurePasses();
  else
    throw console.log(this), new Error("Invalid settings specified for the resizer.");
};
Resize.prototype.configurePasses = function() {
  this.widthOriginal === this.targetWidth ? this.resizeWidth = this.bypassResizer : (this.ratioWeightWidthPass = this.widthOriginal / this.targetWidth, this.ratioWeightWidthPass < 1 && this.interpolationPass ? (this.initializeFirstPassBuffers(!0), this.resizeWidth = this.colorChannels === 4 ? this.resizeWidthInterpolatedRGBA : this.resizeWidthInterpolatedRGB) : (this.initializeFirstPassBuffers(!1), this.resizeWidth = this.colorChannels === 4 ? this.resizeWidthRGBA : this.resizeWidthRGB)), this.heightOriginal === this.targetHeight ? this.resizeHeight = this.bypassResizer : (this.ratioWeightHeightPass = this.heightOriginal / this.targetHeight, this.ratioWeightHeightPass < 1 && this.interpolationPass ? (this.initializeSecondPassBuffers(!0), this.resizeHeight = this.resizeHeightInterpolated) : (this.initializeSecondPassBuffers(!1), this.resizeHeight = this.colorChannels === 4 ? this.resizeHeightRGBA : this.resizeHeightRGB));
};
Resize.prototype._resizeWidthInterpolatedRGBChannels = function(e, t) {
  const i = t ? 4 : 3, a = this.ratioWeightWidthPass, r = this.widthBuffer;
  let o = 0, n = 0, s = 0, l = 0, h = 0, u;
  for (u = 0; o < 1 / 3; u += i, o += a)
    for (n = u, s = 0; n < this.widthPassResultSize; s += this.originalWidthMultipliedByChannels, n += this.targetWidthMultipliedByChannels)
      r[n] = e[s], r[n + 1] = e[s + 1], r[n + 2] = e[s + 2], t && (r[n + 3] = e[s + 3]);
  o -= 1 / 3;
  let d;
  for (d = this.widthOriginal - 1; o < d; u += i, o += a)
    for (h = o % 1, l = 1 - h, n = u, s = Math.floor(o) * i; n < this.widthPassResultSize; s += this.originalWidthMultipliedByChannels, n += this.targetWidthMultipliedByChannels)
      r[n + 0] = e[s + 0] * l + e[s + i + 0] * h, r[n + 1] = e[s + 1] * l + e[s + i + 1] * h, r[n + 2] = e[s + 2] * l + e[s + i + 2] * h, t && (r[n + 3] = e[s + 3] * l + e[s + i + 3] * h);
  for (d = this.originalWidthMultipliedByChannels - i; u < this.targetWidthMultipliedByChannels; u += i)
    for (n = u, s = d; n < this.widthPassResultSize; s += this.originalWidthMultipliedByChannels, n += this.targetWidthMultipliedByChannels)
      r[n] = e[s], r[n + 1] = e[s + 1], r[n + 2] = e[s + 2], t && (r[n + 3] = e[s + 3]);
  return r;
};
Resize.prototype._resizeWidthRGBChannels = function(e, t) {
  const i = t ? 4 : 3, a = this.ratioWeightWidthPass, r = 1 / a, o = this.originalWidthMultipliedByChannels - i + 1, n = this.targetWidthMultipliedByChannels - i + 1, s = this.outputWidthWorkBench, l = this.widthBuffer, h = this.outputWidthWorkBenchOpaquePixelsCount;
  let u = 0, d = 0, m = 0, p = 0, g = 0, M = 0, k = 0, w = 1, v = 0, C = 0, B = 0, A = 0;
  do {
    for (g = 0; g < this.originalHeightMultipliedByChannels; )
      s[g++] = 0, s[g++] = 0, s[g++] = 0, t && (s[g++] = 0, h[g / i - 1] = 0);
    u = a;
    do {
      for (d = 1 + m - p, w = Math.min(u, d), g = 0, M = m; g < this.originalHeightMultipliedByChannels; M += o)
        v = e[M], C = e[++M], B = e[++M], A = t ? e[++M] : 255, s[g++] += (A ? v : 0) * w, s[g++] += (A ? C : 0) * w, s[g++] += (A ? B : 0) * w, t && (s[g++] += A * w, h[g / i - 1] += A ? w : 0);
      if (u >= d)
        m += i, p = m, u -= d;
      else {
        p += u;
        break;
      }
    } while (u > 0 && m < this.originalWidthMultipliedByChannels);
    for (g = 0, M = k; g < this.originalHeightMultipliedByChannels; M += n)
      u = t ? h[g / i] : 1, w = t ? u ? 1 / u : 0 : r, l[M] = s[g++] * w, l[++M] = s[g++] * w, l[++M] = s[g++] * w, t && (l[++M] = s[g++] * r);
    k += i;
  } while (k < this.targetWidthMultipliedByChannels);
  return l;
};
Resize.prototype._resizeHeightRGBChannels = function(e, t) {
  const i = this.ratioWeightHeightPass, a = 1 / i, r = this.outputHeightWorkBench, o = this.heightBuffer, n = this.outputHeightWorkBenchOpaquePixelsCount;
  let s = 0, l = 0, h = 0, u = 0, d = 0, m = 0, p = 0, g = 1, M = 0, k = 0, w = 0, v = 0;
  do {
    for (d = 0; d < this.targetWidthMultipliedByChannels; )
      r[d++] = 0, r[d++] = 0, r[d++] = 0, t && (r[d++] = 0, n[d / 4 - 1] = 0);
    s = i;
    do {
      for (l = 1 + h - u, g = Math.min(s, l), p = h, d = 0; d < this.targetWidthMultipliedByChannels; )
        M = e[p++], k = e[p++], w = e[p++], v = t ? e[p++] : 255, r[d++] += (v ? M : 0) * g, r[d++] += (v ? k : 0) * g, r[d++] += (v ? w : 0) * g, t && (r[d++] += v * g, n[d / 4 - 1] += v ? g : 0);
      if (s >= l)
        h = p, u = h, s -= l;
      else {
        u += s;
        break;
      }
    } while (s > 0 && h < this.widthPassResultSize);
    for (d = 0; d < this.targetWidthMultipliedByChannels; )
      s = t ? n[d / 4] : 1, g = t ? s ? 1 / s : 0 : a, o[m++] = Math.round(r[d++] * g), o[m++] = Math.round(r[d++] * g), o[m++] = Math.round(r[d++] * g), t && (o[m++] = Math.round(r[d++] * a));
  } while (m < this.finalResultSize);
  return o;
};
Resize.prototype.resizeWidthInterpolatedRGB = function(e) {
  return this._resizeWidthInterpolatedRGBChannels(e, !1);
};
Resize.prototype.resizeWidthInterpolatedRGBA = function(e) {
  return this._resizeWidthInterpolatedRGBChannels(e, !0);
};
Resize.prototype.resizeWidthRGB = function(e) {
  return this._resizeWidthRGBChannels(e, !1);
};
Resize.prototype.resizeWidthRGBA = function(e) {
  return this._resizeWidthRGBChannels(e, !0);
};
Resize.prototype.resizeHeightInterpolated = function(e) {
  const t = this.ratioWeightHeightPass, i = this.heightBuffer;
  let a = 0, r = 0, o = 0, n = 0, s = 0, l = 0, h = 0, u;
  for (; a < 1 / 3; a += t)
    for (o = 0; o < this.targetWidthMultipliedByChannels; )
      i[r++] = Math.round(e[o++]);
  for (a -= 1 / 3, u = this.heightOriginal - 1; a < u; a += t)
    for (h = a % 1, l = 1 - h, n = Math.floor(a) * this.targetWidthMultipliedByChannels, s = n + this.targetWidthMultipliedByChannels, o = 0; o < this.targetWidthMultipliedByChannels; ++o)
      i[r++] = Math.round(e[n++] * l + e[s++] * h);
  for (; r < this.finalResultSize; )
    for (o = 0, n = u * this.targetWidthMultipliedByChannels; o < this.targetWidthMultipliedByChannels; ++o)
      i[r++] = Math.round(e[n++]);
  return i;
};
Resize.prototype.resizeHeightRGB = function(e) {
  return this._resizeHeightRGBChannels(e, !1);
};
Resize.prototype.resizeHeightRGBA = function(e) {
  return this._resizeHeightRGBChannels(e, !0);
};
Resize.prototype.resize = function(e) {
  this.resizeCallback(this.resizeHeight(this.resizeWidth(e)));
};
Resize.prototype.bypassResizer = function(e) {
  return e;
};
Resize.prototype.initializeFirstPassBuffers = function(e) {
  this.widthBuffer = this.generateFloatBuffer(this.widthPassResultSize), e || (this.outputWidthWorkBench = this.generateFloatBuffer(this.originalHeightMultipliedByChannels), this.colorChannels > 3 && (this.outputWidthWorkBenchOpaquePixelsCount = this.generateFloat64Buffer(this.heightOriginal)));
};
Resize.prototype.initializeSecondPassBuffers = function(e) {
  this.heightBuffer = this.generateUint8Buffer(this.finalResultSize), e || (this.outputHeightWorkBench = this.generateFloatBuffer(this.targetWidthMultipliedByChannels), this.colorChannels > 3 && (this.outputHeightWorkBenchOpaquePixelsCount = this.generateFloat64Buffer(this.targetWidth)));
};
Resize.prototype.generateFloatBuffer = function(e) {
  try {
    return new Float32Array(e);
  } catch (t) {
    return console.error(t), [];
  }
};
Resize.prototype.generateFloat64Buffer = function(e) {
  try {
    return new Float64Array(e);
  } catch (t) {
    return console.error(t), [];
  }
};
Resize.prototype.generateUint8Buffer = function(e) {
  try {
    return new Uint8Array(e);
  } catch (t) {
    return console.error(t), [];
  }
};
const operations = {
  nearestNeighbor(e, t) {
    const i = e.width, a = e.height, r = t.width, o = t.height, n = e.data, s = t.data;
    for (let l = 0; l < o; l++)
      for (let h = 0; h < r; h++) {
        let u = (l * r + h) * 4;
        const d = Math.floor(l * a / o), m = Math.floor(h * i / r);
        let p = (d * i + m) * 4;
        s[u++] = n[p++], s[u++] = n[p++], s[u++] = n[p++], s[u++] = n[p++];
      }
  },
  bilinearInterpolation(e, t) {
    const i = e.width, a = e.height, r = t.width, o = t.height, n = e.data, s = t.data, l = function(u, d, m, p, g) {
      return d === p ? m : Math.round((u - d) * g + (p - u) * m);
    }, h = function(u, d, m, p, g, M, k, w) {
      let v = (k * i + p) * 4 + d, C = (k * i + g) * 4 + d;
      const B = l(m, p, n[v], g, n[C]);
      if (w === k)
        s[u + d] = B;
      else {
        v = (w * i + p) * 4 + d, C = (w * i + g) * 4 + d;
        const A = l(m, p, n[v], g, n[C]);
        s[u + d] = l(M, k, B, w, A);
      }
    };
    for (let u = 0; u < o; u++)
      for (let d = 0; d < r; d++) {
        const m = (u * r + d) * 4, p = d * i / r, g = Math.floor(p), M = Math.min(Math.ceil(p), i - 1), k = u * a / o, w = Math.floor(k), v = Math.min(Math.ceil(k), a - 1);
        h(m, 0, p, g, M, k, w, v), h(m, 1, p, g, M, k, w, v), h(m, 2, p, g, M, k, w, v), h(m, 3, p, g, M, k, w, v);
      }
  },
  _interpolate2D(e, t, i, a) {
    const r = e.data, o = t.data, n = e.width, s = e.height, l = t.width, h = t.height, u = Math.max(1, Math.floor(n / l)), d = l * u, m = Math.max(1, Math.floor(s / h)), p = h * m, g = Buffer.alloc(d * s * 4);
    for (let w = 0; w < s; w++)
      for (let v = 0; v < d; v++) {
        const C = v * (n - 1) / d, B = Math.floor(C), A = C - B, S = (w * n + B) * 4, b = (w * d + v) * 4;
        for (let E = 0; E < 4; E++) {
          const F = S + E, Z = B > 0 ? r[F - 4] : 2 * r[F] - r[F + 4], P = r[F], D = r[F + 4], L = B < n - 2 ? r[F + 8] : 2 * r[F + 4] - r[F];
          g[b + E] = a(Z, P, D, L, A);
        }
      }
    const M = Buffer.alloc(d * p * 4);
    for (let w = 0; w < p; w++)
      for (let v = 0; v < d; v++) {
        const C = w * (s - 1) / p, B = Math.floor(C), A = C - B, S = (B * d + v) * 4, b = (w * d + v) * 4;
        for (let E = 0; E < 4; E++) {
          const F = S + E, Z = B > 0 ? g[F - d * 4] : 2 * g[F] - g[F + d * 4], P = g[F], D = g[F + d * 4], L = B < s - 2 ? g[F + d * 8] : 2 * g[F + d * 4] - g[F];
          M[b + E] = a(Z, P, D, L, A);
        }
      }
    const k = u * m;
    if (k > 1)
      for (let w = 0; w < h; w++)
        for (let v = 0; v < l; v++) {
          let C = 0, B = 0, A = 0, S = 0, b = 0;
          for (let F = 0; F < m; F++) {
            const Z = w * m + F;
            for (let P = 0; P < u; P++) {
              const D = v * u + P, L = (Z * d + D) * 4, q = M[L + 3];
              q && (C += M[L], B += M[L + 1], A += M[L + 2], b++), S += q;
            }
          }
          const E = (w * l + v) * 4;
          o[E] = b ? Math.round(C / b) : 0, o[E + 1] = b ? Math.round(B / b) : 0, o[E + 2] = b ? Math.round(A / b) : 0, o[E + 3] = Math.round(S / k);
        }
    else
      t.data = M;
  },
  bicubicInterpolation(e, t, i) {
    const a = function(r, o, n, s, l) {
      const h = s - n - r + o, u = r - o - h, d = n - r, m = o;
      return Math.max(0, Math.min(255, h * (l * l * l) + u * (l * l) + d * l + m));
    };
    return this._interpolate2D(e, t, i, a);
  },
  hermiteInterpolation(e, t, i) {
    const a = function(r, o, n, s, l) {
      const h = o, u = 0.5 * (n - r), d = r - 2.5 * o + 2 * n - 0.5 * s, m = 0.5 * (s - r) + 1.5 * (o - n);
      return Math.max(0, Math.min(255, Math.round(((m * l + d) * l + u) * l + h)));
    };
    return this._interpolate2D(e, t, i, a);
  },
  bezierInterpolation(e, t, i) {
    const a = function(r, o, n, s, l) {
      const h = o + (n - r) / 4, u = n - (s - o) / 4, d = 1 - l, m = o * d * d * d, p = 3 * h * d * d * l, g = 3 * u * d * l * l, M = n * l * l * l;
      return Math.max(0, Math.min(255, Math.round(m + p + g + M)));
    };
    return this._interpolate2D(e, t, i, a);
  }
}, ResizeOptionsSchema = unionType([
  objectType({
    /** the width to resize the image to */
    w: numberType().min(0),
    /** the height to resize the image to */
    h: numberType().min(0).optional(),
    /** a scaling method (e.g. ResizeStrategy.BEZIER) */
    mode: nativeEnumType(ResizeStrategy).optional()
  }),
  objectType({
    /** the width to resize the image to */
    w: numberType().min(0).optional(),
    /** the height to resize the image to */
    h: numberType().min(0),
    /** a scaling method (e.g. ResizeStrategy.BEZIER) */
    mode: nativeEnumType(ResizeStrategy).optional()
  })
]), ScaleToFitOptionsSchema = objectType({
  /** the width to resize the image to */
  w: numberType().min(0),
  /** the height to resize the image to */
  h: numberType().min(0),
  /** a scaling method (e.g. Jimp.RESIZE_BEZIER) */
  mode: nativeEnumType(ResizeStrategy).optional()
}), ScaleComplexOptionsSchema = objectType({
  /** the width to resize the image to */
  f: numberType().min(0),
  /** a scaling method (e.g. Jimp.RESIZE_BEZIER) */
  mode: nativeEnumType(ResizeStrategy).optional()
}), methods$d = {
  /**
   * Resizes the image to a set width and height using a 2-pass bilinear algorithm
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.resize({ w: 150 });
   * ```
   */
  resize(e, t) {
    const { mode: i } = ResizeOptionsSchema.parse(t);
    let a, r;
    if (typeof t.w == "number")
      a = t.w, r = t.h ?? e.bitmap.height * (a / e.bitmap.width);
    else if (typeof t.h == "number")
      r = t.h, a = t.w ?? e.bitmap.width * (r / e.bitmap.height);
    else
      throw new Error("w must be a number");
    if (a = Math.round(a) || 1, r = Math.round(r) || 1, i && typeof operations[i] == "function") {
      const o = {
        data: Buffer.alloc(a * r * 4),
        width: a,
        height: r
      };
      operations[i](e.bitmap, o), e.bitmap = o;
    } else
      new Resize(e.bitmap.width, e.bitmap.height, a, r, !0, !0, (n) => {
        e.bitmap.data = Buffer.from(n), e.bitmap.width = a, e.bitmap.height = r;
      }).resize(e.bitmap.data);
    return e;
  },
  /**
   * Uniformly scales the image by a factor.
   * @param f the factor to scale the image by
   * @param mode (optional) a scaling method (e.g. Jimp.RESIZE_BEZIER)
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.scale(0.5);
   * ```
   */
  scale(e, t) {
    const { f: i, mode: a } = typeof t == "number" ? { f: t } : ScaleComplexOptionsSchema.parse(t), r = e.bitmap.width * i, o = e.bitmap.height * i;
    return this.resize(e, { w: r, h: o, mode: a });
  },
  /**
   * Scale the image to the largest size that fits inside the rectangle that has the given width and height.
   * @param w the width to resize the image to
   * @param h the height to resize the image to
   * @param mode a scaling method (e.g. ResizeStrategy.BEZIER)
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.scaleToFit(100, 100);
   * ```
   */
  scaleToFit(e, t) {
    const { h: i, w: a, mode: r } = ScaleToFitOptionsSchema.parse(t), o = a / i > e.bitmap.width / e.bitmap.height ? i / e.bitmap.height : a / e.bitmap.width;
    return this.scale(e, { f: o, mode: r });
  }
}, ContainOptionsSchema = objectType({
  /** the width to resize the image to */
  w: numberType(),
  /** the height to resize the image to */
  h: numberType(),
  /** A bitmask for horizontal and vertical alignment */
  align: numberType().optional(),
  /** a scaling method (e.g. Jimp.RESIZE_BEZIER) */
  mode: nativeEnumType(ResizeStrategy).optional()
}), methods$c = {
  /**
   * Scale the image to the given width and height keeping the aspect ratio. Some parts of the image may be letter boxed.
   * @param w the width to resize the image to
   * @param h the height to resize the image to
   * @param align A bitmask for horizontal and vertical alignment
   * @param mode a scaling method (e.g. Jimp.RESIZE_BEZIER)
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.contain({ w: 150, h: 100 });
   * ```
   */
  contain(e, t) {
    const { w: i, h: a, align: r = HorizontalAlign.CENTER | VerticalAlign.MIDDLE, mode: o } = ContainOptionsSchema.parse(t), n = r & 7, s = r >> 3;
    if (!(n !== 0 && !(n & n - 1) || s !== 0 && !(s & s - 1)))
      throw new Error("only use one flag per alignment direction");
    const l = n >> 1, h = s >> 1, u = i / a > e.bitmap.width / e.bitmap.height ? a / e.bitmap.height : i / e.bitmap.width, d = methods$d.scale(clone(e), { f: u, mode: o });
    return e = methods$d.resize(e, { w: i, h: a, mode: o }), e.scan((m, p, g) => {
      e.bitmap.data.writeUInt32BE(e.background, g);
    }), e = methods$h.blit(e, {
      src: d,
      x: (e.bitmap.width - d.bitmap.width) / 2 * l,
      y: (e.bitmap.height - d.bitmap.height) / 2 * h
    }), e;
  }
}, CropOptionsSchema = objectType({
  /** the x position to crop form */
  x: numberType(),
  /** the y position to crop form */
  y: numberType(),
  /** the width to crop form */
  w: numberType(),
  /** the height to crop form */
  h: numberType()
}), AutocropComplexOptionsSchema = objectType({
  /** percent of color difference tolerance (default value) */
  tolerance: numberType().min(0).max(1).optional(),
  /** flag to force cropping only if the image has a real "frame" i.e. all 4 sides have some border (default value) */
  cropOnlyFrames: booleanType().optional(),
  /** force cropping top be symmetric */
  cropSymmetric: booleanType().optional(),
  /** Amount of pixels in border to leave */
  leaveBorder: numberType().optional(),
  ignoreSides: objectType({
    north: booleanType().optional(),
    south: booleanType().optional(),
    east: booleanType().optional(),
    west: booleanType().optional()
  }).optional()
}), methods$b = {
  /**
   * Crops the image at a given point to a give size.
   *
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   * const cropped = image.crop(150, 100);
   * ```
   */
  crop(e, t) {
    let { x: i, y: a, w: r, h: o } = CropOptionsSchema.parse(t);
    if (i = Math.round(i), a = Math.round(a), r = Math.round(r), o = Math.round(o), i === 0 && r === e.bitmap.width) {
      const n = r * a + i << 2, s = n + (o * r << 2);
      e.bitmap.data = e.bitmap.data.slice(n, s);
    } else {
      const n = Buffer.allocUnsafe(r * o * 4);
      let s = 0;
      scan(e, i, a, r, o, function(l, h, u) {
        const d = e.bitmap.data.readUInt32BE(u);
        n.writeUInt32BE(d, s), s += 4;
      }), e.bitmap.data = n;
    }
    return e.bitmap.width = r, e.bitmap.height = o, e;
  },
  /**
   * Autocrop same color borders from this image.
   * This function will attempt to crop out transparent pixels from the image.
   *
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   * const cropped = image.autocrop();
   * ```
   */
  autocrop(e, t = {}) {
    const { tolerance: i = 2e-4, cropOnlyFrames: a = !0, cropSymmetric: r = !1, leaveBorder: o = 0, ignoreSides: n } = typeof t == "number" ? { tolerance: t } : AutocropComplexOptionsSchema.parse(t), s = e.bitmap.width, l = e.bitmap.height, h = 1, u = {
      north: !1,
      south: !1,
      east: !1,
      west: !1,
      ...n
    };
    let d = e.getPixelColor(0, 0);
    const m = intToRGBA$1(d);
    let p = 0, g = 0, M = 0, k = 0;
    if (d = e.getPixelColor(0, 0), !u.north)
      e: for (let B = 0; B < l - h; B++) {
        for (let A = 0; A < s; A++) {
          const S = e.getPixelColor(A, B), b = intToRGBA$1(S);
          if (colorDiff(m, b) > i)
            break e;
        }
        p++;
      }
    if (d = e.getPixelColor(s, 0), !u.west)
      e: for (let B = 0; B < s - h; B++) {
        for (let A = 0 + p; A < l; A++) {
          const S = e.getPixelColor(B, A), b = intToRGBA$1(S);
          if (colorDiff(m, b) > i)
            break e;
        }
        k++;
      }
    if (d = e.getPixelColor(0, l), !u.south)
      e: for (let B = l - 1; B >= p + h; B--) {
        for (let A = s - g - 1; A >= 0; A--) {
          const S = e.getPixelColor(A, B), b = intToRGBA$1(S);
          if (colorDiff(m, b) > i)
            break e;
        }
        M++;
      }
    if (d = e.getPixelColor(s, l), !u.east)
      e: for (let B = s - 1; B >= 0 + k + h; B--) {
        for (let A = l - 1; A >= 0 + p; A--) {
          const S = e.getPixelColor(B, A), b = intToRGBA$1(S);
          if (colorDiff(m, b) > i)
            break e;
        }
        g++;
      }
    let w = !1;
    if (k -= o, g -= o, p -= o, M -= o, r) {
      const B = Math.min(g, k), A = Math.min(p, M);
      k = B, g = B, p = A, M = A;
    }
    k = k >= 0 ? k : 0, g = g >= 0 ? g : 0, p = p >= 0 ? p : 0, M = M >= 0 ? M : 0;
    const v = s - (k + g), C = l - (M + p);
    return a ? w = g !== 0 && p !== 0 && k !== 0 && M !== 0 : w = g !== 0 || p !== 0 || k !== 0 || M !== 0, w && this.crop(e, {
      x: k,
      y: p,
      w: v,
      h: C
    }), e;
  }
}, CoverOptionsSchema = objectType({
  /** the width to resize the image to */
  w: numberType(),
  /** the height to resize the image to */
  h: numberType(),
  /** A bitmask for horizontal and vertical alignment */
  align: numberType().optional(),
  /** a scaling method (e.g. ResizeStrategy.BEZIER) */
  mode: nativeEnumType(ResizeStrategy).optional()
}), methods$a = {
  /**
   * Scale the image so the given width and height keeping the aspect ratio. Some parts of the image may be clipped.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.cover(150, 100);
   * ```
   */
  cover(e, t) {
    const { w: i, h: a, align: r = HorizontalAlign.CENTER | VerticalAlign.MIDDLE, mode: o } = CoverOptionsSchema.parse(t), n = r & 7, s = r >> 3;
    if (!(n !== 0 && !(n & n - 1) || s !== 0 && !(s & s - 1)))
      throw new Error("only use one flag per alignment direction");
    const l = n >> 1, h = s >> 1, u = i / a > e.bitmap.width / e.bitmap.height ? i / e.bitmap.width : a / e.bitmap.height;
    return e = methods$d.scale(e, {
      f: u,
      mode: o
    }), e = methods$b.crop(e, {
      x: (e.bitmap.width - i) / 2 * l,
      y: (e.bitmap.height - a) / 2 * h,
      w: i,
      h: a
    }), e;
  }
}, DisplaceOptionsSchema = objectType({
  /** the source Jimp instance */
  map: JimpClassSchema,
  /** the maximum displacement value */
  offset: numberType()
}), methods$9 = {
  /**
   * Displaces the image based on the provided displacement map
   * @param map the source Jimp instance
   * @param offset
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   * const map = await Jimp.read("test/map.png");
   *
   * image.displace(map, 10);
   * ```
   */
  displace(e, t) {
    const { map: i, offset: a } = DisplaceOptionsSchema.parse(t), r = clone(e);
    return e.scan((o, n, s) => {
      let l = i.bitmap.data[s] / 256 * a;
      l = Math.round(l);
      const h = e.getPixelIndex(o + l, n);
      e.bitmap.data[h] = r.bitmap.data[s], e.bitmap.data[h + 1] = r.bitmap.data[s + 1], e.bitmap.data[h + 2] = r.bitmap.data[s + 2];
    }), e;
  }
}, methods$8 = {
  /**
   * Apply a ordered dithering effect.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.dither();
   * ```
   */
  dither(e) {
    const t = [
      1,
      9,
      3,
      11,
      13,
      5,
      15,
      7,
      4,
      12,
      2,
      10,
      16,
      8,
      14,
      6
    ];
    return e.scan((i, a, r) => {
      const o = ((a & 3) << 2) + i % 4, n = t[o];
      e.bitmap.data[r] = Math.min(e.bitmap.data[r] + n, 255), e.bitmap.data[r + 1] = Math.min(e.bitmap.data[r + 1] + n, 255), e.bitmap.data[r + 2] = Math.min(e.bitmap.data[r + 2] + n, 255);
    }), e;
  }
}, FisheyeOptionsSchema = objectType({
  /** the radius of the circle */
  radius: numberType().min(0).optional()
}), methods$7 = {
  /**
   * Adds a fisheye effect to the image.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.fisheye();
   * ```
   */
  fisheye(e, t = {}) {
    const { radius: i = 2.5 } = FisheyeOptionsSchema.parse(t), a = clone(e), { width: r, height: o } = a.bitmap;
    return a.scan((n, s) => {
      const l = n / r, h = s / o, u = Math.sqrt(Math.pow(l - 0.5, 2) + Math.pow(h - 0.5, 2)), d = 2 * Math.pow(u, i), m = (l - 0.5) / u, p = (h - 0.5) / u, g = Math.round((d * m + 0.5) * r), M = Math.round((d * p + 0.5) * o), k = a.getPixelColor(g, M);
      e.setPixelColor(k, n, s);
    }), e.setPixelColor(a.getPixelColor(r / 2, o / 2), r / 2, o / 2), e;
  }
}, FlipOptionsSchema = objectType({
  /** if true the image will be flipped horizontally */
  horizontal: booleanType().optional(),
  /** if true the image will be flipped vertically */
  vertical: booleanType().optional()
}), methods$6 = {
  /**
   * Flip the image.
   * @param horizontal a Boolean, if true the image will be flipped horizontally
   * @param vertical a Boolean, if true the image will be flipped vertically
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.flip(true, false);
   * ```
   */
  flip(e, t) {
    const { horizontal: i, vertical: a } = FlipOptionsSchema.parse(t), r = Buffer.alloc(e.bitmap.data.length);
    return e.scan((o, n, s) => {
      const l = i ? e.bitmap.width - 1 - o : o, h = a ? e.bitmap.height - 1 - n : n, u = e.bitmap.width * h + l << 2, d = e.bitmap.data.readUInt32BE(s);
      r.writeUInt32BE(d, u);
    }), e.bitmap.data = Buffer.from(r), e;
  }
};
var converter, hasRequiredConverter;
function requireConverter() {
  if (hasRequiredConverter) return converter;
  hasRequiredConverter = 1;
  function e(t, i) {
    if (!t || !i || !t.length || !i.length)
      throw new Error("Bad alphabet");
    this.srcAlphabet = t, this.dstAlphabet = i;
  }
  return e.prototype.convert = function(t) {
    var i, a, r, o = {}, n = this.srcAlphabet.length, s = this.dstAlphabet.length, l = t.length, h = typeof t == "string" ? "" : [];
    if (!this.isValid(t))
      throw new Error('Number "' + t + '" contains of non-alphabetic digits (' + this.srcAlphabet + ")");
    if (this.srcAlphabet === this.dstAlphabet)
      return t;
    for (i = 0; i < l; i++)
      o[i] = this.srcAlphabet.indexOf(t[i]);
    do {
      for (a = 0, r = 0, i = 0; i < l; i++)
        a = a * n + o[i], a >= s ? (o[r++] = parseInt(a / s, 10), a = a % s) : r > 0 && (o[r++] = 0);
      l = r, h = this.dstAlphabet.slice(a, a + 1).concat(h);
    } while (r !== 0);
    return h;
  }, e.prototype.isValid = function(t) {
    for (var i = 0; i < t.length; ++i)
      if (this.srcAlphabet.indexOf(t[i]) === -1)
        return !1;
    return !0;
  }, converter = e, converter;
}
var anyBase_1, hasRequiredAnyBase;
function requireAnyBase() {
  if (hasRequiredAnyBase) return anyBase_1;
  hasRequiredAnyBase = 1;
  var e = requireConverter();
  function t(i, a) {
    var r = new e(i, a);
    return function(o) {
      return r.convert(o);
    };
  }
  return t.BIN = "01", t.OCT = "01234567", t.DEC = "0123456789", t.HEX = "0123456789abcdef", anyBase_1 = t, anyBase_1;
}
var anyBaseExports = requireAnyBase();
const anyBase = /* @__PURE__ */ getDefaultExportFromCjs(anyBaseExports);
class ImagePHash {
  constructor(t, i) {
    Je(this, "size");
    Je(this, "smallerSize");
    this.size = t || 32, this.smallerSize = i || 8, initCoefficients(this.size);
  }
  distance(t, i) {
    let a = 0;
    for (let r = 0; r < t.length; r++)
      t[r] !== i[r] && a++;
    return a / t.length;
  }
  /**
   * Returns a 'binary string' (like. 001010111011100010) which is easy to do a hamming distance on.
   */
  getHash(t) {
    t = methods$d.resize(clone(t), { w: this.size, h: this.size }), t = methods$e.greyscale(t);
    const i = [];
    for (let s = 0; s < t.bitmap.width; s++) {
      const l = [];
      for (let h = 0; h < t.bitmap.height; h++)
        l[h] = intToRGBA(t.getPixelColor(s, h)).b;
      i[s] = l;
    }
    const a = applyDCT(i, this.size);
    let r = 0;
    for (let s = 0; s < this.smallerSize; s++)
      for (let l = 0; l < this.smallerSize; l++)
        r += a[s][l];
    const o = r / (this.smallerSize * this.smallerSize);
    let n = "";
    for (let s = 0; s < this.smallerSize; s++)
      for (let l = 0; l < this.smallerSize; l++)
        n += a[s][l] > o ? "1" : "0";
    return n;
  }
}
function intToRGBA(e) {
  const t = e & 255;
  e >>>= 8;
  const i = e & 255;
  e >>>= 8;
  const a = e & 255;
  return e >>>= 8, { r: e & 255, g: a, b: i, a: t };
}
const c = [];
function initCoefficients(e) {
  for (let t = 1; t < e; t++)
    c[t] = 1;
  c[0] = 1 / Math.sqrt(2);
}
function applyDCT(e, t) {
  const i = t, a = [];
  for (let r = 0; r < i; r++) {
    const o = [];
    for (let n = 0; n < i; n++) {
      let s = 0;
      for (let l = 0; l < i; l++)
        for (let h = 0; h < i; h++)
          s += Math.cos((2 * l + 1) / (2 * i) * r * Math.PI) * Math.cos((2 * h + 1) / (2 * i) * n * Math.PI) * e[l][h];
      s *= c[r] * c[n] / 4, o[n] = s, a[r] = o;
    }
  }
  return a;
}
const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_", maxHashLength = [NaN, NaN];
for (let e = 2; e < 65; e++) {
  const t = anyBase(anyBase.BIN, alphabet.slice(0, e))(new Array(65).join("1"));
  maxHashLength.push(t.length);
}
const methods$5 = {
  /**
   * Calculates the perceptual hash
   * @returns the perceptual hash
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.hash();
   * ```
   */
  pHash(e) {
    return new ImagePHash().getHash(e);
  },
  /**
   * Generates a perceptual hash of the image <https://en.wikipedia.org/wiki/Perceptual_hashing>. And pads the string. Can configure base.
   * @param base A number between 2 and 64 representing the base for the hash (e.g. 2 is binary, 10 is decimal, 16 is hex, 64 is base 64). Defaults to 64.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.hash(2); // binary
   * image.hash(64); // base 64
   * ```
   */
  hash(e, t = 64) {
    if (t < 2 || t > 64)
      throw new Error("base must be a number between 2 and 64");
    const i = alphabet.slice(0, t), a = this.pHash(e), r = maxHashLength[t];
    return anyBase(anyBase.BIN, i)(a).padStart(r, "0");
  },
  /**
   * Calculates the hamming distance of the current image and a hash based on their perceptual hash
   * @param compareHash hash to compare to
   * @returns  a number ranging from 0 to 1, 0 means they are believed to be identical
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.distanceFromHash(image.pHash());
   * ```
   */
  distanceFromHash(e, t) {
    const i = new ImagePHash(), a = i.getHash(e);
    return i.distance(a, t);
  }
}, MaskOptionsObjectSchema = objectType({
  src: JimpClassSchema,
  /** the x position to draw the image */
  x: numberType().optional(),
  /** the y position to draw the image */
  y: numberType().optional()
}), MaskOptionsSchema = unionType([JimpClassSchema, MaskOptionsObjectSchema]), methods$4 = {
  /**
   * Masks a source image on to this image using average pixel colour. A completely black pixel on the mask will turn a pixel in the image completely transparent.
   * @param src the source Jimp instance
   * @param x the horizontal position to blit the image
   * @param y the vertical position to blit the image
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   * const mask = await Jimp.read("test/mask.png");
   *
   * image.mask(mask);
   * ```
   */
  mask(e, t) {
    MaskOptionsSchema.parse(t);
    let i, a, r;
    "bitmap" in t ? (i = t, a = 0, r = 0) : (i = t.src, a = t.x ?? 0, r = t.y ?? 0), a = Math.round(a), r = Math.round(r);
    const o = e.bitmap.width, n = e.bitmap.height;
    return i.scan(function(s, l, h) {
      const u = a + s, d = r + l;
      if (u >= 0 && d >= 0 && u < o && d < n) {
        const m = e.getPixelIndex(u, d), { data: p } = i.bitmap, g = (p[h + 0] + p[h + 1] + p[h + 2]) / 3;
        e.bitmap.data[m + 3] *= g / 255;
      }
    }), e;
  }
};
function measureText(e, t) {
  let i = 0;
  for (let a = 0; a < t.length; a++) {
    const r = t[a], o = e.chars[r];
    if (o) {
      const n = e.kernings[r], s = t[a + 1], l = n && s && n[s] && n[s] || 0;
      i += (o.xadvance || 0) + l;
    }
  }
  return i;
}
function splitLines(e, t, i) {
  const a = t.replace(/[\r\n]+/g, ` 
`).split(" "), r = [];
  let o = [], n = 0;
  return a.forEach((s) => {
    if (measureText(e, s + (a.length > 1 ? " " : "")) > i) {
      const d = s[Symbol.iterator]();
      let m = "";
      for (const p of d) {
        const g = [...o, m + p].join(" "), M = measureText(e, g);
        M < i ? m += p : M > i ? (r.push([...o, m]), o = [], m = p) : (r.push([...o, m + p]), o = [], m = "");
      }
      return;
    }
    const h = [...o, s].join(" "), u = measureText(e, h);
    u <= i && !s.includes(`
`) ? (u > n && (n = u), o.push(s)) : (r.push(o), o = [s.replace(`
`, "")]);
  }), r.push(o), {
    lines: r,
    longestLine: n
  };
}
function measureTextHeight(e, t, i) {
  const { lines: a } = splitLines(e, t, i);
  return a.length * e.common.lineHeight;
}
const PrintOptionsSchema = objectType({
  /** the x position to draw the image */
  x: numberType(),
  /** the y position to draw the image */
  y: numberType(),
  /** the text to print */
  text: unionType([
    unionType([stringType(), numberType()]),
    objectType({
      text: unionType([stringType(), numberType()]),
      alignmentX: nativeEnumType(HorizontalAlign).optional(),
      alignmentY: nativeEnumType(VerticalAlign).optional()
    })
  ]),
  /** the boundary width to draw in */
  maxWidth: numberType().optional(),
  /** the boundary height to draw in */
  maxHeight: numberType().optional(),
  /** a callback for when complete that ahs the end co-ordinates of the text */
  cb: functionType(tupleType([objectType({ x: numberType(), y: numberType() })])).optional()
});
function xOffsetBasedOnAlignment(e, t, i, a) {
  return a === HorizontalAlign.LEFT ? 0 : a === HorizontalAlign.CENTER ? (i - measureText(e, t)) / 2 : i - measureText(e, t);
}
function drawCharacter(e, t, i, a, r) {
  if (r.width > 0 && r.height > 0) {
    const o = t.pages[r.page];
    o && (e = methods$h.blit(e, {
      src: o,
      x: i + r.xoffset,
      y: a + r.yoffset,
      srcX: r.x,
      srcY: r.y,
      srcW: r.width,
      srcH: r.height
    }));
  }
  return e;
}
function printText(e, t, i, a, r, o) {
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    let l;
    t.chars[s] ? l = s : /\s/.test(s) ? l = "" : l = "?";
    const h = t.chars[l] || { xadvance: void 0 }, u = t.kernings[l];
    h && drawCharacter(e, t, i, a, h);
    const d = r[n + 1], m = u && d && u[d] && u[d] || 0;
    i += m + (h.xadvance || o);
  }
}
const methods$3 = {
  /**
   * Draws a text on a image on a given boundary
   * @param font a bitmap font loaded from `Jimp.loadFont` command
   * @param x the x position to start drawing the text
   * @param y the y position to start drawing the text
   * @param text the text to draw (string or object with `text`, `alignmentX`, and/or `alignmentY`)
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   * const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
   *
   * image.print({ font, x: 10, y: 10, text: "Hello world!" });
   * ```
   */
  print(e, { font: t, ...i }) {
    var g;
    let {
      // eslint-disable-next-line prefer-const
      x: a,
      y: r,
      text: o,
      // eslint-disable-next-line prefer-const
      maxWidth: n = 1 / 0,
      // eslint-disable-next-line prefer-const
      maxHeight: s = 1 / 0,
      // eslint-disable-next-line prefer-const
      cb: l = () => {
      }
    } = PrintOptionsSchema.parse(i), h, u;
    typeof o == "object" && o.text !== null && o.text !== void 0 ? (h = o.alignmentX || HorizontalAlign.LEFT, u = o.alignmentY || VerticalAlign.TOP, { text: o } = o) : (h = HorizontalAlign.LEFT, u = VerticalAlign.TOP, o = o.toString()), typeof o == "number" && (o = o.toString()), s !== 1 / 0 && u === VerticalAlign.BOTTOM ? r += s - measureTextHeight(t, o, n) : s !== 1 / 0 && u === VerticalAlign.MIDDLE && (r += s / 2 - measureTextHeight(t, o, n) / 2);
    const d = (g = Object.entries(t.chars).find((M) => M[1].xadvance)) == null ? void 0 : g[1].xadvance;
    if (typeof d != "number")
      throw new Error("Could not find default character width");
    const { lines: m, longestLine: p } = splitLines(t, o, n);
    return m.forEach((M) => {
      const k = M.join(" "), w = xOffsetBasedOnAlignment(t, k, n, h);
      printText(e, t, a + w, r, k, d), r += t.common.lineHeight;
    }), l.bind(e)({ x: a + p, y: r }), e;
  }
}, RotateOptionsSchema = unionType([
  numberType(),
  objectType({
    /** the number of degrees to rotate the image by */
    deg: numberType(),
    /** resize mode or a boolean, if false then the width and height of the image will not be changed */
    mode: unionType([booleanType(), nativeEnumType(ResizeStrategy)]).optional()
  })
]);
function createIdxTranslationFunction(e) {
  return function(t, i) {
    return i * e + t << 2;
  };
}
function matrixRotate(e, t) {
  if (Math.abs(t) % 90 !== 0)
    throw new Error("Unsupported matrix rotation degree");
  const i = e.bitmap.width, a = e.bitmap.height;
  let r;
  switch (t) {
    // 90 degree & -270 degree are same
    case 90:
    case -270:
      r = 90;
      break;
    case 180:
    case -180:
      r = 180;
      break;
    case 270:
    case -90:
      r = -90;
      break;
    default:
      throw new Error("Unsupported matrix rotation degree");
  }
  const o = r === 180 ? i : a, n = r === 180 ? a : i, s = Buffer.alloc(e.bitmap.data.length), l = createIdxTranslationFunction(i), h = createIdxTranslationFunction(o);
  for (let u = 0; u < i; u++)
    for (let d = 0; d < a; d++) {
      const m = l(u, d), p = e.bitmap.data.readUInt32BE(m);
      let g;
      switch (r) {
        case 90:
          g = h(d, i - u - 1);
          break;
        case -90:
          g = h(a - d - 1, u);
          break;
        case 180:
          g = h(i - u - 1, a - d - 1);
          break;
        default:
          throw new Error("Unsupported matrix rotation angle");
      }
      s.writeUInt32BE(p, g);
    }
  e.bitmap.data = s, e.bitmap.width = o, e.bitmap.height = n;
}
function createTranslationFunction(e, t) {
  return function(i, a) {
    return {
      x: i + e,
      y: a + t
    };
  };
}
function advancedRotate(e, t, i) {
  const a = t * Math.PI / 180, r = Math.cos(a), o = Math.sin(a);
  let n = e.bitmap.width, s = e.bitmap.height;
  if (i === !0 || typeof i == "string") {
    n = Math.ceil(Math.abs(e.bitmap.width * r) + Math.abs(e.bitmap.height * o)) + 1, s = Math.ceil(Math.abs(e.bitmap.width * o) + Math.abs(e.bitmap.height * r)) + 1, n % 2 !== 0 && n++, s % 2 !== 0 && s++;
    const p = clone(e);
    e.scan((M, k, w) => {
      e.bitmap.data.writeUInt32BE(e.background, w);
    });
    const g = Math.max(n, s, e.bitmap.width, e.bitmap.height);
    e = methods$d.resize(e, {
      h: g,
      w: g,
      mode: i === !0 ? void 0 : i
    }), e = composite(e, p, e.bitmap.width / 2 - p.bitmap.width / 2, e.bitmap.height / 2 - p.bitmap.height / 2);
  }
  const l = e.bitmap.width, h = e.bitmap.height, u = Buffer.alloc(e.bitmap.data.length), d = createTranslationFunction(-(l / 2), -(h / 2)), m = createTranslationFunction(l / 2 + 0.5, h / 2 + 0.5);
  for (let p = 1; p <= h; p++)
    for (let g = 1; g <= l; g++) {
      const M = d(g, p), k = m(r * M.x - o * M.y, r * M.y + o * M.x), w = l * (p - 1) + g - 1 << 2;
      if (k.x >= 0 && k.x < l && k.y >= 0 && k.y < h) {
        const v = (l * (k.y | 0) + k.x | 0) << 2, C = e.bitmap.data.readUInt32BE(v);
        u.writeUInt32BE(C, w);
      } else
        u.writeUInt32BE(e.background, w);
    }
  if (e.bitmap.data = u, i === !0 || typeof i == "string") {
    const p = Math.max(l / 2 - n / 2, 0), g = Math.max(h / 2 - s / 2, 0);
    e = methods$b.crop(e, { x: p, y: g, w: n, h: s });
  }
}
const methods$2 = {
  /**
   * Rotates the image counter-clockwise by a number of degrees. By default the width and height of the image will be resized appropriately.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.rotate(90);
   * ```
   */
  rotate(e, t) {
    const i = RotateOptionsSchema.parse(t), a = typeof i == "number" ? { deg: i } : i, { mode: r = !0 } = a;
    let { deg: o } = a;
    return o %= 360, o % 360 === 0 || (o % 90 === 0 && (r || e.bitmap.width === e.bitmap.height || o % 180 === 0) ? matrixRotate(e, o) : advancedRotate(e, o, r)), e;
  }
}, ThresholdOptionsSchema = objectType({
  /** A number auto limited between 0 - 255 */
  max: numberType().min(0).max(255),
  /** A number auto limited between 0 - 255 (default 255)  */
  replace: numberType().min(0).max(255).optional(),
  /** A boolean whether to apply greyscale beforehand (default true)  */
  autoGreyscale: booleanType().optional()
}), methods$1 = {
  /**
   * Applies a minimum color threshold to a grayscale image.
   * Converts image to grayscale by default.
   * @example
   * ```ts
   * import { Jimp } from "jimp";
   *
   * const image = await Jimp.read("test/image.png");
   *
   * image.threshold({ max: 150 });
   * ```
   */
  threshold(e, t) {
    let {
      max: i,
      replace: a = 255,
      // eslint-disable-next-line prefer-const
      autoGreyscale: r = !0
    } = ThresholdOptionsSchema.parse(t);
    return i = limit255(i), a = limit255(a), r && methods$e.greyscale(e), e.scan((o, n, s) => {
      const l = e.bitmap.data[s] < i ? e.bitmap.data[s] : a;
      e.bitmap.data[s] = l, e.bitmap.data[s + 1] = l, e.bitmap.data[s + 2] = l;
    }), e;
  }
};
var __defProp = Object.defineProperty, __defNormalProp = (e, t, i) => t in e ? __defProp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i, __export = (e, t) => {
  for (var i in t)
    __defProp(e, i, { get: t[i], enumerable: !0 });
}, __publicField = (e, t, i) => (__defNormalProp(e, typeof t != "symbol" ? t + "" : t, i), i), constants_exports = {};
__export(constants_exports, {
  bt709: () => bt709_exports
});
var bt709_exports = {};
__export(bt709_exports, {
  Y: () => Y,
  x: () => x,
  y: () => y
});
var Y = /* @__PURE__ */ ((e) => (e[e.RED = 0.2126] = "RED", e[e.GREEN = 0.7152] = "GREEN", e[e.BLUE = 0.0722] = "BLUE", e[e.WHITE = 1] = "WHITE", e))(Y || {}), x = /* @__PURE__ */ ((e) => (e[e.RED = 0.64] = "RED", e[e.GREEN = 0.3] = "GREEN", e[e.BLUE = 0.15] = "BLUE", e[e.WHITE = 0.3127] = "WHITE", e))(x || {}), y = /* @__PURE__ */ ((e) => (e[e.RED = 0.33] = "RED", e[e.GREEN = 0.6] = "GREEN", e[e.BLUE = 0.06] = "BLUE", e[e.WHITE = 0.329] = "WHITE", e))(y || {}), conversion_exports = {};
__export(conversion_exports, {
  lab2rgb: () => lab2rgb,
  lab2xyz: () => lab2xyz,
  rgb2hsl: () => rgb2hsl,
  rgb2lab: () => rgb2lab,
  rgb2xyz: () => rgb2xyz,
  xyz2lab: () => xyz2lab,
  xyz2rgb: () => xyz2rgb
});
function correctGamma(e) {
  return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
}
function rgb2xyz(e, t, i) {
  return e = correctGamma(e / 255), t = correctGamma(t / 255), i = correctGamma(i / 255), {
    x: e * 0.4124 + t * 0.3576 + i * 0.1805,
    y: e * 0.2126 + t * 0.7152 + i * 0.0722,
    z: e * 0.0193 + t * 0.1192 + i * 0.9505
  };
}
var arithmetic_exports = {};
__export(arithmetic_exports, {
  degrees2radians: () => degrees2radians,
  inRange0to255: () => inRange0to255,
  inRange0to255Rounded: () => inRange0to255Rounded,
  intInRange: () => intInRange,
  max3: () => max3,
  min3: () => min3,
  stableSort: () => stableSort
});
function degrees2radians(e) {
  return e * (Math.PI / 180);
}
function max3(e, t, i) {
  let a = e;
  return a < t && (a = t), a < i && (a = i), a;
}
function min3(e, t, i) {
  let a = e;
  return a > t && (a = t), a > i && (a = i), a;
}
function intInRange(e, t, i) {
  return e > i && (e = i), e < t && (e = t), e | 0;
}
function inRange0to255Rounded(e) {
  return e = Math.round(e), e > 255 ? e = 255 : e < 0 && (e = 0), e;
}
function inRange0to255(e) {
  return e > 255 ? e = 255 : e < 0 && (e = 0), e;
}
function stableSort(e, t) {
  const i = typeof e[0];
  let a;
  if (i === "number" || i === "string") {
    const r = /* @__PURE__ */ Object.create(null);
    for (let o = 0, n = e.length; o < n; o++) {
      const s = e[o];
      r[s] || r[s] === 0 || (r[s] = o);
    }
    a = e.sort((o, n) => t(o, n) || r[o] - r[n]);
  } else {
    const r = e.slice(0);
    a = e.sort((o, n) => t(o, n) || r.indexOf(o) - r.indexOf(n));
  }
  return a;
}
function rgb2hsl(e, t, i) {
  const a = min3(e, t, i), r = max3(e, t, i), o = r - a, n = (a + r) / 510;
  let s = 0;
  n > 0 && n < 1 && (s = o / (n < 0.5 ? r + a : 510 - r - a));
  let l = 0;
  return o > 0 && (r === e ? l = (t - i) / o : r === t ? l = 2 + (i - e) / o : l = 4 + (e - t) / o, l *= 60, l < 0 && (l += 360)), { h: l, s, l: n };
}
var refX = 0.95047, refY = 1, refZ = 1.08883;
function pivot(e) {
  return e > 8856e-6 ? e ** (1 / 3) : 7.787 * e + 16 / 116;
}
function xyz2lab(e, t, i) {
  if (e = pivot(e / refX), t = pivot(t / refY), i = pivot(i / refZ), 116 * t - 16 < 0)
    throw new Error("xxx");
  return {
    L: Math.max(0, 116 * t - 16),
    a: 500 * (e - t),
    b: 200 * (t - i)
  };
}
function rgb2lab(e, t, i) {
  const a = rgb2xyz(e, t, i);
  return xyz2lab(a.x, a.y, a.z);
}
var refX2 = 0.95047, refY2 = 1, refZ2 = 1.08883;
function pivot2(e) {
  return e > 0.206893034 ? e ** 3 : (e - 16 / 116) / 7.787;
}
function lab2xyz(e, t, i) {
  const a = (e + 16) / 116, r = t / 500 + a, o = a - i / 200;
  return {
    x: refX2 * pivot2(r),
    y: refY2 * pivot2(a),
    z: refZ2 * pivot2(o)
  };
}
function correctGamma2(e) {
  return e > 31308e-7 ? 1.055 * e ** (1 / 2.4) - 0.055 : 12.92 * e;
}
function xyz2rgb(e, t, i) {
  const a = correctGamma2(e * 3.2406 + t * -1.5372 + i * -0.4986), r = correctGamma2(e * -0.9689 + t * 1.8758 + i * 0.0415), o = correctGamma2(e * 0.0557 + t * -0.204 + i * 1.057);
  return {
    r: inRange0to255Rounded(a * 255),
    g: inRange0to255Rounded(r * 255),
    b: inRange0to255Rounded(o * 255)
  };
}
function lab2rgb(e, t, i) {
  const a = lab2xyz(e, t, i);
  return xyz2rgb(a.x, a.y, a.z);
}
var distance_exports = {};
__export(distance_exports, {
  AbstractDistanceCalculator: () => AbstractDistanceCalculator,
  AbstractEuclidean: () => AbstractEuclidean,
  AbstractManhattan: () => AbstractManhattan,
  CIE94GraphicArts: () => CIE94GraphicArts,
  CIE94Textiles: () => CIE94Textiles,
  CIEDE2000: () => CIEDE2000,
  CMetric: () => CMetric,
  Euclidean: () => Euclidean,
  EuclideanBT709: () => EuclideanBT709,
  EuclideanBT709NoAlpha: () => EuclideanBT709NoAlpha,
  Manhattan: () => Manhattan,
  ManhattanBT709: () => ManhattanBT709,
  ManhattanNommyde: () => ManhattanNommyde,
  PNGQuant: () => PNGQuant
});
var AbstractDistanceCalculator = class {
  constructor() {
    __publicField(this, "_maxDistance"), __publicField(this, "_whitePoint"), this._setDefaults(), this.setWhitePoint(255, 255, 255, 255);
  }
  setWhitePoint(e, t, i, a) {
    this._whitePoint = {
      r: e > 0 ? 255 / e : 0,
      g: t > 0 ? 255 / t : 0,
      b: i > 0 ? 255 / i : 0,
      a: a > 0 ? 255 / a : 0
    }, this._maxDistance = this.calculateRaw(e, t, i, a, 0, 0, 0, 0);
  }
  calculateNormalized(e, t) {
    return this.calculateRaw(e.r, e.g, e.b, e.a, t.r, t.g, t.b, t.a) / this._maxDistance;
  }
}, AbstractCIE94 = class extends AbstractDistanceCalculator {
  calculateRaw(e, t, i, a, r, o, n, s) {
    const l = rgb2lab(inRange0to255(e * this._whitePoint.r), inRange0to255(t * this._whitePoint.g), inRange0to255(i * this._whitePoint.b)), h = rgb2lab(inRange0to255(r * this._whitePoint.r), inRange0to255(o * this._whitePoint.g), inRange0to255(n * this._whitePoint.b)), u = l.L - h.L, d = l.a - h.a, m = l.b - h.b, p = Math.sqrt(l.a * l.a + l.b * l.b), g = Math.sqrt(h.a * h.a + h.b * h.b), M = p - g;
    let k = d * d + m * m - M * M;
    k = k < 0 ? 0 : Math.sqrt(k);
    const w = (s - a) * this._whitePoint.a * this._kA;
    return Math.sqrt((u / this._Kl) ** 2 + (M / (1 + this._K1 * p)) ** 2 + (k / (1 + this._K2 * p)) ** 2 + w ** 2);
  }
}, CIE94Textiles = class extends AbstractCIE94 {
  _setDefaults() {
    this._Kl = 2, this._K1 = 0.048, this._K2 = 0.014, this._kA = 0.25 * 50 / 255;
  }
}, CIE94GraphicArts = class extends AbstractCIE94 {
  _setDefaults() {
    this._Kl = 1, this._K1 = 0.045, this._K2 = 0.015, this._kA = 0.25 * 100 / 255;
  }
}, _CIEDE2000 = class extends AbstractDistanceCalculator {
  _setDefaults() {
  }
  static _calculatehp(e, t) {
    const i = Math.atan2(e, t);
    return i >= 0 ? i : i + _CIEDE2000._deg360InRad;
  }
  static _calculateRT(e, t) {
    const i = t ** 7, a = 2 * Math.sqrt(i / (i + _CIEDE2000._pow25to7)), r = _CIEDE2000._deg30InRad * Math.exp(-(((e - _CIEDE2000._deg275InRad) / _CIEDE2000._deg25InRad) ** 2));
    return -Math.sin(2 * r) * a;
  }
  static _calculateT(e) {
    return 1 - 0.17 * Math.cos(e - _CIEDE2000._deg30InRad) + 0.24 * Math.cos(e * 2) + 0.32 * Math.cos(e * 3 + _CIEDE2000._deg6InRad) - 0.2 * Math.cos(e * 4 - _CIEDE2000._deg63InRad);
  }
  static _calculate_ahp(e, t, i, a) {
    const r = i + a;
    return e === 0 ? r : t <= _CIEDE2000._deg180InRad ? r / 2 : r < _CIEDE2000._deg360InRad ? (r + _CIEDE2000._deg360InRad) / 2 : (r - _CIEDE2000._deg360InRad) / 2;
  }
  static _calculate_dHp(e, t, i, a) {
    let r;
    return e === 0 ? r = 0 : t <= _CIEDE2000._deg180InRad ? r = i - a : i <= a ? r = i - a + _CIEDE2000._deg360InRad : r = i - a - _CIEDE2000._deg360InRad, 2 * Math.sqrt(e) * Math.sin(r / 2);
  }
  calculateRaw(e, t, i, a, r, o, n, s) {
    const l = rgb2lab(inRange0to255(e * this._whitePoint.r), inRange0to255(t * this._whitePoint.g), inRange0to255(i * this._whitePoint.b)), h = rgb2lab(inRange0to255(r * this._whitePoint.r), inRange0to255(o * this._whitePoint.g), inRange0to255(n * this._whitePoint.b)), u = (s - a) * this._whitePoint.a * _CIEDE2000._kA, d = this.calculateRawInLab(l, h);
    return Math.sqrt(d + u * u);
  }
  calculateRawInLab(e, t) {
    const i = e.L, a = e.a, r = e.b, o = t.L, n = t.a, s = t.b, l = Math.sqrt(a * a + r * r), h = Math.sqrt(n * n + s * s), u = ((l + h) / 2) ** 7, d = 0.5 * (1 - Math.sqrt(u / (u + _CIEDE2000._pow25to7))), m = (1 + d) * a, p = (1 + d) * n, g = Math.sqrt(m * m + r * r), M = Math.sqrt(p * p + s * s), k = g * M, w = _CIEDE2000._calculatehp(r, m), v = _CIEDE2000._calculatehp(s, p), C = Math.abs(w - v), B = o - i, A = M - g, S = _CIEDE2000._calculate_dHp(k, C, v, w), b = _CIEDE2000._calculate_ahp(k, C, w, v), E = _CIEDE2000._calculateT(b), F = (g + M) / 2, Z = ((i + o) / 2 - 50) ** 2, P = 1 + 0.015 * Z / Math.sqrt(20 + Z), D = 1 + 0.045 * F, L = 1 + 0.015 * E * F, q = _CIEDE2000._calculateRT(b, F), j = B / P, J = A / D, ie = S / L;
    return j ** 2 + J ** 2 + ie ** 2 + q * J * ie;
  }
}, CIEDE2000 = _CIEDE2000;
__publicField(CIEDE2000, "_kA", 0.25 * 100 / 255);
__publicField(CIEDE2000, "_pow25to7", 25 ** 7);
__publicField(CIEDE2000, "_deg360InRad", degrees2radians(360));
__publicField(CIEDE2000, "_deg180InRad", degrees2radians(180));
__publicField(CIEDE2000, "_deg30InRad", degrees2radians(30));
__publicField(CIEDE2000, "_deg6InRad", degrees2radians(6));
__publicField(CIEDE2000, "_deg63InRad", degrees2radians(63));
__publicField(CIEDE2000, "_deg275InRad", degrees2radians(275));
__publicField(CIEDE2000, "_deg25InRad", degrees2radians(25));
var CMetric = class extends AbstractDistanceCalculator {
  calculateRaw(e, t, i, a, r, o, n, s) {
    const l = (e + r) / 2 * this._whitePoint.r, h = (e - r) * this._whitePoint.r, u = (t - o) * this._whitePoint.g, d = (i - n) * this._whitePoint.b, m = ((512 + l) * h * h >> 8) + 4 * u * u + ((767 - l) * d * d >> 8), p = (s - a) * this._whitePoint.a;
    return Math.sqrt(m + p * p);
  }
  _setDefaults() {
  }
}, AbstractEuclidean = class extends AbstractDistanceCalculator {
  calculateRaw(e, t, i, a, r, o, n, s) {
    const l = r - e, h = o - t, u = n - i, d = s - a;
    return Math.sqrt(this._kR * l * l + this._kG * h * h + this._kB * u * u + this._kA * d * d);
  }
}, Euclidean = class extends AbstractEuclidean {
  _setDefaults() {
    this._kR = 1, this._kG = 1, this._kB = 1, this._kA = 1;
  }
}, EuclideanBT709 = class extends AbstractEuclidean {
  _setDefaults() {
    this._kR = 0.2126, this._kG = 0.7152, this._kB = 0.0722, this._kA = 1;
  }
}, EuclideanBT709NoAlpha = class extends AbstractEuclidean {
  _setDefaults() {
    this._kR = 0.2126, this._kG = 0.7152, this._kB = 0.0722, this._kA = 0;
  }
}, AbstractManhattan = class extends AbstractDistanceCalculator {
  calculateRaw(e, t, i, a, r, o, n, s) {
    let l = r - e, h = o - t, u = n - i, d = s - a;
    return l < 0 && (l = 0 - l), h < 0 && (h = 0 - h), u < 0 && (u = 0 - u), d < 0 && (d = 0 - d), this._kR * l + this._kG * h + this._kB * u + this._kA * d;
  }
}, Manhattan = class extends AbstractManhattan {
  _setDefaults() {
    this._kR = 1, this._kG = 1, this._kB = 1, this._kA = 1;
  }
}, ManhattanNommyde = class extends AbstractManhattan {
  _setDefaults() {
    this._kR = 0.4984, this._kG = 0.8625, this._kB = 0.2979, this._kA = 1;
  }
}, ManhattanBT709 = class extends AbstractManhattan {
  _setDefaults() {
    this._kR = 0.2126, this._kG = 0.7152, this._kB = 0.0722, this._kA = 1;
  }
}, PNGQuant = class extends AbstractDistanceCalculator {
  calculateRaw(e, t, i, a, r, o, n, s) {
    const l = (s - a) * this._whitePoint.a;
    return this._colordifferenceCh(e * this._whitePoint.r, r * this._whitePoint.r, l) + this._colordifferenceCh(t * this._whitePoint.g, o * this._whitePoint.g, l) + this._colordifferenceCh(i * this._whitePoint.b, n * this._whitePoint.b, l);
  }
  _colordifferenceCh(e, t, i) {
    const a = e - t, r = a + i;
    return a * a + r * r;
  }
  _setDefaults() {
  }
}, palette_exports = {};
__export(palette_exports, {
  AbstractPaletteQuantizer: () => AbstractPaletteQuantizer,
  ColorHistogram: () => ColorHistogram,
  NeuQuant: () => NeuQuant,
  NeuQuantFloat: () => NeuQuantFloat,
  RGBQuant: () => RGBQuant,
  WuColorCube: () => WuColorCube,
  WuQuant: () => WuQuant
});
var AbstractPaletteQuantizer = class {
  quantizeSync() {
    for (const e of this.quantize())
      if (e.palette)
        return e.palette;
    throw new Error("unreachable");
  }
}, Point = class {
  constructor() {
    __publicField(this, "r"), __publicField(this, "g"), __publicField(this, "b"), __publicField(this, "a"), __publicField(this, "uint32"), __publicField(this, "rgba"), this.uint32 = -1 >>> 0, this.r = this.g = this.b = this.a = 0, this.rgba = new Array(4), this.rgba[0] = 0, this.rgba[1] = 0, this.rgba[2] = 0, this.rgba[3] = 0;
  }
  static createByQuadruplet(e) {
    const t = new Point();
    return t.r = e[0] | 0, t.g = e[1] | 0, t.b = e[2] | 0, t.a = e[3] | 0, t._loadUINT32(), t._loadQuadruplet(), t;
  }
  static createByRGBA(e, t, i, a) {
    const r = new Point();
    return r.r = e | 0, r.g = t | 0, r.b = i | 0, r.a = a | 0, r._loadUINT32(), r._loadQuadruplet(), r;
  }
  static createByUint32(e) {
    const t = new Point();
    return t.uint32 = e >>> 0, t._loadRGBA(), t._loadQuadruplet(), t;
  }
  from(e) {
    this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a, this.uint32 = e.uint32, this.rgba[0] = e.r, this.rgba[1] = e.g, this.rgba[2] = e.b, this.rgba[3] = e.a;
  }
  getLuminosity(e) {
    let t = this.r, i = this.g, a = this.b;
    return e && (t = Math.min(255, 255 - this.a + this.a * t / 255), i = Math.min(255, 255 - this.a + this.a * i / 255), a = Math.min(255, 255 - this.a + this.a * a / 255)), t * 0.2126 + i * 0.7152 + a * 0.0722;
  }
  _loadUINT32() {
    this.uint32 = (this.a << 24 | this.b << 16 | this.g << 8 | this.r) >>> 0;
  }
  _loadRGBA() {
    this.r = this.uint32 & 255, this.g = this.uint32 >>> 8 & 255, this.b = this.uint32 >>> 16 & 255, this.a = this.uint32 >>> 24 & 255;
  }
  _loadQuadruplet() {
    this.rgba[0] = this.r, this.rgba[1] = this.g, this.rgba[2] = this.b, this.rgba[3] = this.a;
  }
}, PointContainer = class {
  constructor() {
    __publicField(this, "_pointArray"), __publicField(this, "_width"), __publicField(this, "_height"), this._width = 0, this._height = 0, this._pointArray = [];
  }
  getWidth() {
    return this._width;
  }
  getHeight() {
    return this._height;
  }
  setWidth(e) {
    this._width = e;
  }
  setHeight(e) {
    this._height = e;
  }
  getPointArray() {
    return this._pointArray;
  }
  clone() {
    const e = new PointContainer();
    e._width = this._width, e._height = this._height;
    for (let t = 0, i = this._pointArray.length; t < i; t++)
      e._pointArray[t] = Point.createByUint32(this._pointArray[t].uint32 | 0);
    return e;
  }
  toUint32Array() {
    const e = this._pointArray.length, t = new Uint32Array(e);
    for (let i = 0; i < e; i++)
      t[i] = this._pointArray[i].uint32;
    return t;
  }
  toUint8Array() {
    return new Uint8Array(this.toUint32Array().buffer);
  }
  static fromHTMLImageElement(e) {
    const t = e.naturalWidth, i = e.naturalHeight, a = document.createElement("canvas");
    return a.width = t, a.height = i, a.getContext("2d").drawImage(e, 0, 0, t, i, 0, 0, t, i), PointContainer.fromHTMLCanvasElement(a);
  }
  static fromHTMLCanvasElement(e) {
    const t = e.width, i = e.height, r = e.getContext("2d").getImageData(0, 0, t, i);
    return PointContainer.fromImageData(r);
  }
  static fromImageData(e) {
    const t = e.width, i = e.height;
    return PointContainer.fromUint8Array(e.data, t, i);
  }
  static fromUint8Array(e, t, i) {
    switch (Object.prototype.toString.call(e)) {
      case "[object Uint8ClampedArray]":
      case "[object Uint8Array]":
        break;
      default:
        e = new Uint8Array(e);
    }
    const a = new Uint32Array(e.buffer);
    return PointContainer.fromUint32Array(a, t, i);
  }
  static fromUint32Array(e, t, i) {
    const a = new PointContainer();
    a._width = t, a._height = i;
    for (let r = 0, o = e.length; r < o; r++)
      a._pointArray[r] = Point.createByUint32(e[r] | 0);
    return a;
  }
  static fromBuffer(e, t, i) {
    const a = new Uint32Array(e.buffer, e.byteOffset, e.byteLength / Uint32Array.BYTES_PER_ELEMENT);
    return PointContainer.fromUint32Array(a, t, i);
  }
}, hueGroups = 10;
function hueGroup(e, t) {
  const a = 360 / t, r = a / 2;
  for (let o = 1, n = a - r; o < t; o++, n += a)
    if (e >= n && e < n + a)
      return o;
  return 0;
}
var Palette = class {
  constructor() {
    __publicField(this, "_pointContainer"), __publicField(this, "_pointArray", []), __publicField(this, "_i32idx", {}), this._pointContainer = new PointContainer(), this._pointContainer.setHeight(1), this._pointArray = this._pointContainer.getPointArray();
  }
  add(e) {
    this._pointArray.push(e), this._pointContainer.setWidth(this._pointArray.length);
  }
  has(e) {
    for (let t = this._pointArray.length - 1; t >= 0; t--)
      if (e.uint32 === this._pointArray[t].uint32)
        return !0;
    return !1;
  }
  getNearestColor(e, t) {
    return this._pointArray[this._getNearestIndex(e, t) | 0];
  }
  getPointContainer() {
    return this._pointContainer;
  }
  _nearestPointFromCache(e) {
    return typeof this._i32idx[e] == "number" ? this._i32idx[e] : -1;
  }
  _getNearestIndex(e, t) {
    let i = this._nearestPointFromCache("" + t.uint32);
    if (i >= 0)
      return i;
    let a = Number.MAX_VALUE;
    i = 0;
    for (let r = 0, o = this._pointArray.length; r < o; r++) {
      const n = this._pointArray[r], s = e.calculateRaw(t.r, t.g, t.b, t.a, n.r, n.g, n.b, n.a);
      s < a && (a = s, i = r);
    }
    return this._i32idx[t.uint32] = i, i;
  }
  sort() {
    this._i32idx = {}, this._pointArray.sort((e, t) => {
      const i = rgb2hsl(e.r, e.g, e.b), a = rgb2hsl(t.r, t.g, t.b), r = e.r === e.g && e.g === e.b ? 0 : 1 + hueGroup(i.h, hueGroups), n = (t.r === t.g && t.g === t.b ? 0 : 1 + hueGroup(a.h, hueGroups)) - r;
      if (n)
        return -n;
      const s = e.getLuminosity(!0), l = t.getLuminosity(!0);
      if (l - s !== 0)
        return l - s;
      const h = (a.s * 100 | 0) - (i.s * 100 | 0);
      return h ? -h : 0;
    });
  }
}, utils_exports = {};
__export(utils_exports, {
  HueStatistics: () => HueStatistics,
  Palette: () => Palette,
  Point: () => Point,
  PointContainer: () => PointContainer,
  ProgressTracker: () => ProgressTracker,
  arithmetic: () => arithmetic_exports
});
var HueGroup = class {
  constructor() {
    __publicField(this, "num", 0), __publicField(this, "cols", []);
  }
}, HueStatistics = class {
  constructor(e, t) {
    __publicField(this, "_numGroups"), __publicField(this, "_minCols"), __publicField(this, "_stats"), __publicField(this, "_groupsFull"), this._numGroups = e, this._minCols = t, this._stats = [];
    for (let i = 0; i <= e; i++)
      this._stats[i] = new HueGroup();
    this._groupsFull = 0;
  }
  check(e) {
    this._groupsFull === this._numGroups + 1 && (this.check = () => {
    });
    const t = e & 255, i = e >>> 8 & 255, a = e >>> 16 & 255, r = t === i && i === a ? 0 : 1 + hueGroup(rgb2hsl(t, i, a).h, this._numGroups), o = this._stats[r], n = this._minCols;
    o.num++, !(o.num > n) && (o.num === n && this._groupsFull++, o.num <= n && this._stats[r].cols.push(e));
  }
  injectIntoDictionary(e) {
    for (let t = 0; t <= this._numGroups; t++)
      this._stats[t].num <= this._minCols && this._stats[t].cols.forEach((i) => {
        e[i] ? e[i]++ : e[i] = 1;
      });
  }
  injectIntoArray(e) {
    for (let t = 0; t <= this._numGroups; t++)
      this._stats[t].num <= this._minCols && this._stats[t].cols.forEach((i) => {
        e.indexOf(i) === -1 && e.push(i);
      });
  }
}, _ProgressTracker = class {
  constructor(e, t) {
    __publicField(this, "progress"), __publicField(this, "_step"), __publicField(this, "_range"), __publicField(this, "_last"), __publicField(this, "_progressRange"), this._range = e, this._progressRange = t, this._step = Math.max(1, this._range / (_ProgressTracker.steps + 1) | 0), this._last = -this._step, this.progress = 0;
  }
  shouldNotify(e) {
    return e - this._last >= this._step ? (this._last = e, this.progress = Math.min(this._progressRange * this._last / this._range, this._progressRange), !0) : !1;
  }
}, ProgressTracker = _ProgressTracker;
__publicField(ProgressTracker, "steps", 100);
var networkBiasShift = 3, Neuron = class {
  constructor(e) {
    __publicField(this, "r"), __publicField(this, "g"), __publicField(this, "b"), __publicField(this, "a"), this.r = this.g = this.b = this.a = e;
  }
  toPoint() {
    return Point.createByRGBA(this.r >> networkBiasShift, this.g >> networkBiasShift, this.b >> networkBiasShift, this.a >> networkBiasShift);
  }
  subtract(e, t, i, a) {
    this.r -= e | 0, this.g -= t | 0, this.b -= i | 0, this.a -= a | 0;
  }
}, _NeuQuant = class extends AbstractPaletteQuantizer {
  constructor(e, t = 256) {
    super(), __publicField(this, "_pointArray"), __publicField(this, "_networkSize"), __publicField(this, "_network"), __publicField(this, "_sampleFactor"), __publicField(this, "_radPower"), __publicField(this, "_freq"), __publicField(this, "_bias"), __publicField(this, "_distance"), this._distance = e, this._pointArray = [], this._sampleFactor = 1, this._networkSize = t, this._distance.setWhitePoint(255 << networkBiasShift, 255 << networkBiasShift, 255 << networkBiasShift, 255 << networkBiasShift);
  }
  sample(e) {
    this._pointArray = this._pointArray.concat(e.getPointArray());
  }
  *quantize() {
    this._init(), yield* this._learn(), yield {
      palette: this._buildPalette(),
      progress: 100
    };
  }
  _init() {
    this._freq = [], this._bias = [], this._radPower = [], this._network = [];
    for (let e = 0; e < this._networkSize; e++)
      this._network[e] = new Neuron((e << networkBiasShift + 8) / this._networkSize | 0), this._freq[e] = _NeuQuant._initialBias / this._networkSize | 0, this._bias[e] = 0;
  }
  *_learn() {
    let e = this._sampleFactor;
    const t = this._pointArray.length;
    t < _NeuQuant._minpicturebytes && (e = 1);
    const i = 30 + (e - 1) / 3 | 0, a = t / e | 0;
    let r = a / _NeuQuant._nCycles | 0, o = _NeuQuant._initAlpha, n = (this._networkSize >> 3) * _NeuQuant._radiusBias, s = n >> _NeuQuant._radiusBiasShift;
    s <= 1 && (s = 0);
    for (let u = 0; u < s; u++)
      this._radPower[u] = o * ((s * s - u * u) * _NeuQuant._radBias / (s * s)) >>> 0;
    let l;
    t < _NeuQuant._minpicturebytes ? l = 1 : t % _NeuQuant._prime1 !== 0 ? l = _NeuQuant._prime1 : t % _NeuQuant._prime2 !== 0 ? l = _NeuQuant._prime2 : t % _NeuQuant._prime3 !== 0 ? l = _NeuQuant._prime3 : l = _NeuQuant._prime4;
    const h = new ProgressTracker(a, 99);
    for (let u = 0, d = 0; u < a; ) {
      h.shouldNotify(u) && (yield {
        progress: h.progress
      });
      const m = this._pointArray[d], p = m.b << networkBiasShift, g = m.g << networkBiasShift, M = m.r << networkBiasShift, k = m.a << networkBiasShift, w = this._contest(p, g, M, k);
      if (this._alterSingle(o, w, p, g, M, k), s !== 0 && this._alterNeighbour(s, w, p, g, M, k), d += l, d >= t && (d -= t), u++, r === 0 && (r = 1), u % r === 0) {
        o -= o / i | 0, n -= n / _NeuQuant._radiusDecrease | 0, s = n >> _NeuQuant._radiusBiasShift, s <= 1 && (s = 0);
        for (let v = 0; v < s; v++)
          this._radPower[v] = o * ((s * s - v * v) * _NeuQuant._radBias / (s * s)) >>> 0;
      }
    }
  }
  _buildPalette() {
    const e = new Palette();
    return this._network.forEach((t) => {
      e.add(t.toPoint());
    }), e.sort(), e;
  }
  _alterNeighbour(e, t, i, a, r, o) {
    let n = t - e;
    n < -1 && (n = -1);
    let s = t + e;
    s > this._networkSize && (s = this._networkSize);
    let l = t + 1, h = t - 1, u = 1;
    for (; l < s || h > n; ) {
      const d = this._radPower[u++] / _NeuQuant._alphaRadBias;
      if (l < s) {
        const m = this._network[l++];
        m.subtract(d * (m.r - r), d * (m.g - a), d * (m.b - i), d * (m.a - o));
      }
      if (h > n) {
        const m = this._network[h--];
        m.subtract(d * (m.r - r), d * (m.g - a), d * (m.b - i), d * (m.a - o));
      }
    }
  }
  _alterSingle(e, t, i, a, r, o) {
    e /= _NeuQuant._initAlpha;
    const n = this._network[t];
    n.subtract(e * (n.r - r), e * (n.g - a), e * (n.b - i), e * (n.a - o));
  }
  _contest(e, t, i, a) {
    const r = 1020 << networkBiasShift;
    let o = 2147483647, n = o, s = -1, l = s;
    for (let h = 0; h < this._networkSize; h++) {
      const u = this._network[h], d = this._distance.calculateNormalized(u, { r: i, g: t, b: e, a }) * r | 0;
      d < o && (o = d, s = h);
      const m = d - (this._bias[h] >> _NeuQuant._initialBiasShift - networkBiasShift);
      m < n && (n = m, l = h);
      const p = this._freq[h] >> _NeuQuant._betaShift;
      this._freq[h] -= p, this._bias[h] += p << _NeuQuant._gammaShift;
    }
    return this._freq[s] += _NeuQuant._beta, this._bias[s] -= _NeuQuant._betaGamma, l;
  }
}, NeuQuant = _NeuQuant;
__publicField(NeuQuant, "_prime1", 499);
__publicField(NeuQuant, "_prime2", 491);
__publicField(NeuQuant, "_prime3", 487);
__publicField(NeuQuant, "_prime4", 503);
__publicField(NeuQuant, "_minpicturebytes", _NeuQuant._prime4);
__publicField(NeuQuant, "_nCycles", 100);
__publicField(NeuQuant, "_initialBiasShift", 16);
__publicField(NeuQuant, "_initialBias", 1 << _NeuQuant._initialBiasShift);
__publicField(NeuQuant, "_gammaShift", 10);
__publicField(NeuQuant, "_betaShift", 10);
__publicField(NeuQuant, "_beta", _NeuQuant._initialBias >> _NeuQuant._betaShift);
__publicField(NeuQuant, "_betaGamma", _NeuQuant._initialBias << _NeuQuant._gammaShift - _NeuQuant._betaShift);
__publicField(NeuQuant, "_radiusBiasShift", 6);
__publicField(NeuQuant, "_radiusBias", 1 << _NeuQuant._radiusBiasShift);
__publicField(NeuQuant, "_radiusDecrease", 30);
__publicField(NeuQuant, "_alphaBiasShift", 10);
__publicField(NeuQuant, "_initAlpha", 1 << _NeuQuant._alphaBiasShift);
__publicField(NeuQuant, "_radBiasShift", 8);
__publicField(NeuQuant, "_radBias", 1 << _NeuQuant._radBiasShift);
__publicField(NeuQuant, "_alphaRadBiasShift", _NeuQuant._alphaBiasShift + _NeuQuant._radBiasShift);
__publicField(NeuQuant, "_alphaRadBias", 1 << _NeuQuant._alphaRadBiasShift);
var networkBiasShift2 = 3, NeuronFloat = class {
  constructor(e) {
    __publicField(this, "r"), __publicField(this, "g"), __publicField(this, "b"), __publicField(this, "a"), this.r = this.g = this.b = this.a = e;
  }
  toPoint() {
    return Point.createByRGBA(this.r >> networkBiasShift2, this.g >> networkBiasShift2, this.b >> networkBiasShift2, this.a >> networkBiasShift2);
  }
  subtract(e, t, i, a) {
    this.r -= e, this.g -= t, this.b -= i, this.a -= a;
  }
}, _NeuQuantFloat = class extends AbstractPaletteQuantizer {
  constructor(e, t = 256) {
    super(), __publicField(this, "_pointArray"), __publicField(this, "_networkSize"), __publicField(this, "_network"), __publicField(this, "_sampleFactor"), __publicField(this, "_radPower"), __publicField(this, "_freq"), __publicField(this, "_bias"), __publicField(this, "_distance"), this._distance = e, this._pointArray = [], this._sampleFactor = 1, this._networkSize = t, this._distance.setWhitePoint(255 << networkBiasShift2, 255 << networkBiasShift2, 255 << networkBiasShift2, 255 << networkBiasShift2);
  }
  sample(e) {
    this._pointArray = this._pointArray.concat(e.getPointArray());
  }
  *quantize() {
    this._init(), yield* this._learn(), yield {
      palette: this._buildPalette(),
      progress: 100
    };
  }
  _init() {
    this._freq = [], this._bias = [], this._radPower = [], this._network = [];
    for (let e = 0; e < this._networkSize; e++)
      this._network[e] = new NeuronFloat((e << networkBiasShift2 + 8) / this._networkSize), this._freq[e] = _NeuQuantFloat._initialBias / this._networkSize, this._bias[e] = 0;
  }
  *_learn() {
    let e = this._sampleFactor;
    const t = this._pointArray.length;
    t < _NeuQuantFloat._minpicturebytes && (e = 1);
    const i = 30 + (e - 1) / 3, a = t / e;
    let r = a / _NeuQuantFloat._nCycles | 0, o = _NeuQuantFloat._initAlpha, n = (this._networkSize >> 3) * _NeuQuantFloat._radiusBias, s = n >> _NeuQuantFloat._radiusBiasShift;
    s <= 1 && (s = 0);
    for (let u = 0; u < s; u++)
      this._radPower[u] = o * ((s * s - u * u) * _NeuQuantFloat._radBias / (s * s));
    let l;
    t < _NeuQuantFloat._minpicturebytes ? l = 1 : t % _NeuQuantFloat._prime1 !== 0 ? l = _NeuQuantFloat._prime1 : t % _NeuQuantFloat._prime2 !== 0 ? l = _NeuQuantFloat._prime2 : t % _NeuQuantFloat._prime3 !== 0 ? l = _NeuQuantFloat._prime3 : l = _NeuQuantFloat._prime4;
    const h = new ProgressTracker(a, 99);
    for (let u = 0, d = 0; u < a; ) {
      h.shouldNotify(u) && (yield {
        progress: h.progress
      });
      const m = this._pointArray[d], p = m.b << networkBiasShift2, g = m.g << networkBiasShift2, M = m.r << networkBiasShift2, k = m.a << networkBiasShift2, w = this._contest(p, g, M, k);
      if (this._alterSingle(o, w, p, g, M, k), s !== 0 && this._alterNeighbour(s, w, p, g, M, k), d += l, d >= t && (d -= t), u++, r === 0 && (r = 1), u % r === 0) {
        o -= o / i, n -= n / _NeuQuantFloat._radiusDecrease, s = n >> _NeuQuantFloat._radiusBiasShift, s <= 1 && (s = 0);
        for (let v = 0; v < s; v++)
          this._radPower[v] = o * ((s * s - v * v) * _NeuQuantFloat._radBias / (s * s));
      }
    }
  }
  _buildPalette() {
    const e = new Palette();
    return this._network.forEach((t) => {
      e.add(t.toPoint());
    }), e.sort(), e;
  }
  _alterNeighbour(e, t, i, a, r, o) {
    let n = t - e;
    n < -1 && (n = -1);
    let s = t + e;
    s > this._networkSize && (s = this._networkSize);
    let l = t + 1, h = t - 1, u = 1;
    for (; l < s || h > n; ) {
      const d = this._radPower[u++] / _NeuQuantFloat._alphaRadBias;
      if (l < s) {
        const m = this._network[l++];
        m.subtract(d * (m.r - r), d * (m.g - a), d * (m.b - i), d * (m.a - o));
      }
      if (h > n) {
        const m = this._network[h--];
        m.subtract(d * (m.r - r), d * (m.g - a), d * (m.b - i), d * (m.a - o));
      }
    }
  }
  _alterSingle(e, t, i, a, r, o) {
    e /= _NeuQuantFloat._initAlpha;
    const n = this._network[t];
    n.subtract(e * (n.r - r), e * (n.g - a), e * (n.b - i), e * (n.a - o));
  }
  _contest(e, t, i, a) {
    const r = 1020 << networkBiasShift2;
    let o = 2147483647, n = o, s = -1, l = s;
    for (let h = 0; h < this._networkSize; h++) {
      const u = this._network[h], d = this._distance.calculateNormalized(u, { r: i, g: t, b: e, a }) * r;
      d < o && (o = d, s = h);
      const m = d - (this._bias[h] >> _NeuQuantFloat._initialBiasShift - networkBiasShift2);
      m < n && (n = m, l = h);
      const p = this._freq[h] >> _NeuQuantFloat._betaShift;
      this._freq[h] -= p, this._bias[h] += p << _NeuQuantFloat._gammaShift;
    }
    return this._freq[s] += _NeuQuantFloat._beta, this._bias[s] -= _NeuQuantFloat._betaGamma, l;
  }
}, NeuQuantFloat = _NeuQuantFloat;
__publicField(NeuQuantFloat, "_prime1", 499);
__publicField(NeuQuantFloat, "_prime2", 491);
__publicField(NeuQuantFloat, "_prime3", 487);
__publicField(NeuQuantFloat, "_prime4", 503);
__publicField(NeuQuantFloat, "_minpicturebytes", _NeuQuantFloat._prime4);
__publicField(NeuQuantFloat, "_nCycles", 100);
__publicField(NeuQuantFloat, "_initialBiasShift", 16);
__publicField(NeuQuantFloat, "_initialBias", 1 << _NeuQuantFloat._initialBiasShift);
__publicField(NeuQuantFloat, "_gammaShift", 10);
__publicField(NeuQuantFloat, "_betaShift", 10);
__publicField(NeuQuantFloat, "_beta", _NeuQuantFloat._initialBias >> _NeuQuantFloat._betaShift);
__publicField(NeuQuantFloat, "_betaGamma", _NeuQuantFloat._initialBias << _NeuQuantFloat._gammaShift - _NeuQuantFloat._betaShift);
__publicField(NeuQuantFloat, "_radiusBiasShift", 6);
__publicField(NeuQuantFloat, "_radiusBias", 1 << _NeuQuantFloat._radiusBiasShift);
__publicField(NeuQuantFloat, "_radiusDecrease", 30);
__publicField(NeuQuantFloat, "_alphaBiasShift", 10);
__publicField(NeuQuantFloat, "_initAlpha", 1 << _NeuQuantFloat._alphaBiasShift);
__publicField(NeuQuantFloat, "_radBiasShift", 8);
__publicField(NeuQuantFloat, "_radBias", 1 << _NeuQuantFloat._radBiasShift);
__publicField(NeuQuantFloat, "_alphaRadBiasShift", _NeuQuantFloat._alphaBiasShift + _NeuQuantFloat._radBiasShift);
__publicField(NeuQuantFloat, "_alphaRadBias", 1 << _NeuQuantFloat._alphaRadBiasShift);
var _ColorHistogram = class {
  constructor(e, t) {
    __publicField(this, "_method"), __publicField(this, "_hueStats"), __publicField(this, "_histogram"), __publicField(this, "_initColors"), __publicField(this, "_minHueCols"), this._method = e, this._minHueCols = t << 2, this._initColors = t << 2, this._hueStats = new HueStatistics(_ColorHistogram._hueGroups, this._minHueCols), this._histogram = /* @__PURE__ */ Object.create(null);
  }
  sample(e) {
    switch (this._method) {
      case 1:
        this._colorStats1D(e);
        break;
      case 2:
        this._colorStats2D(e);
        break;
    }
  }
  getImportanceSortedColorsIDXI32() {
    const e = stableSort(Object.keys(this._histogram), (i, a) => this._histogram[a] - this._histogram[i]);
    if (e.length === 0)
      return [];
    let t;
    switch (this._method) {
      case 1:
        const i = Math.min(e.length, this._initColors), a = e[i - 1], r = this._histogram[a];
        t = e.slice(0, i);
        let o = i;
        const n = e.length;
        for (; o < n && this._histogram[e[o]] === r; )
          t.push(e[o++]);
        this._hueStats.injectIntoArray(t);
        break;
      case 2:
        t = e;
        break;
      default:
        throw new Error("Incorrect method");
    }
    return t.map((i) => +i);
  }
  _colorStats1D(e) {
    const t = this._histogram, i = e.getPointArray(), a = i.length;
    for (let r = 0; r < a; r++) {
      const o = i[r].uint32;
      this._hueStats.check(o), o in t ? t[o]++ : t[o] = 1;
    }
  }
  _colorStats2D(e) {
    const t = e.getWidth(), i = e.getHeight(), a = e.getPointArray(), r = _ColorHistogram._boxSize[0], o = _ColorHistogram._boxSize[1], n = r * o, s = this._makeBoxes(t, i, r, o), l = this._histogram;
    s.forEach((h) => {
      let u = Math.round(h.w * h.h / n) * _ColorHistogram._boxPixels;
      u < 2 && (u = 2);
      const d = {};
      this._iterateBox(h, t, (m) => {
        const p = a[m].uint32;
        this._hueStats.check(p), p in l ? l[p]++ : p in d ? ++d[p] >= u && (l[p] = d[p]) : d[p] = 1;
      });
    }), this._hueStats.injectIntoDictionary(l);
  }
  _iterateBox(e, t, i) {
    const a = e, r = a.y * t + a.x, o = (a.y + a.h - 1) * t + (a.x + a.w - 1), n = t - a.w + 1;
    let s = 0, l = r;
    do
      i.call(this, l), l += ++s % a.w === 0 ? n : 1;
    while (l <= o);
  }
  _makeBoxes(e, t, i, a) {
    const r = e % i, o = t % a, n = e - r, s = t - o, l = [];
    for (let h = 0; h < t; h += a)
      for (let u = 0; u < e; u += i)
        l.push({
          x: u,
          y: h,
          w: u === n ? r : i,
          h: h === s ? o : a
        });
    return l;
  }
}, ColorHistogram = _ColorHistogram;
__publicField(ColorHistogram, "_boxSize", [64, 64]);
__publicField(ColorHistogram, "_boxPixels", 2);
__publicField(ColorHistogram, "_hueGroups", 10);
var RemovedColor = class {
  constructor(e, t, i) {
    __publicField(this, "index"), __publicField(this, "color"), __publicField(this, "distance"), this.index = e, this.color = t, this.distance = i;
  }
}, RGBQuant = class extends AbstractPaletteQuantizer {
  constructor(e, t = 256, i = 2) {
    super(), __publicField(this, "_colors"), __publicField(this, "_initialDistance"), __publicField(this, "_distanceIncrement"), __publicField(this, "_histogram"), __publicField(this, "_distance"), this._distance = e, this._colors = t, this._histogram = new ColorHistogram(i, t), this._initialDistance = 0.01, this._distanceIncrement = 5e-3;
  }
  sample(e) {
    this._histogram.sample(e);
  }
  *quantize() {
    const e = this._histogram.getImportanceSortedColorsIDXI32();
    if (e.length === 0)
      throw new Error("No colors in image");
    yield* this._buildPalette(e);
  }
  *_buildPalette(e) {
    const t = new Palette(), i = t.getPointContainer().getPointArray(), a = new Array(e.length);
    for (let u = 0; u < e.length; u++)
      i.push(Point.createByUint32(e[u])), a[u] = 1;
    const r = i.length, o = [];
    let n = r, s = this._initialDistance;
    const l = new ProgressTracker(n - this._colors, 99);
    for (; n > this._colors; ) {
      o.length = 0;
      for (let u = 0; u < r; u++) {
        if (l.shouldNotify(r - n) && (yield {
          progress: l.progress
        }), a[u] === 0)
          continue;
        const d = i[u];
        for (let m = u + 1; m < r; m++) {
          if (a[m] === 0)
            continue;
          const p = i[m], g = this._distance.calculateNormalized(d, p);
          g < s && (o.push(new RemovedColor(m, p, g)), a[m] = 0, n--);
        }
      }
      s += n > this._colors * 3 ? this._initialDistance : this._distanceIncrement;
    }
    if (n < this._colors) {
      stableSort(o, (d, m) => m.distance - d.distance);
      let u = 0;
      for (; n < this._colors && u < o.length; ) {
        const d = o[u];
        a[d.index] = 1, n++, u++;
      }
    }
    let h = i.length;
    for (let u = h - 1; u >= 0; u--)
      a[u] === 0 && (u !== h - 1 && (i[u] = i[h - 1]), --h);
    i.length = h, t.sort(), yield {
      palette: t,
      progress: 100
    };
  }
};
function createArray1D(e) {
  const t = [];
  for (let i = 0; i < e; i++)
    t[i] = 0;
  return t;
}
function createArray4D(e, t, i, a) {
  const r = new Array(e);
  for (let o = 0; o < e; o++) {
    r[o] = new Array(t);
    for (let n = 0; n < t; n++) {
      r[o][n] = new Array(i);
      for (let s = 0; s < i; s++) {
        r[o][n][s] = new Array(a);
        for (let l = 0; l < a; l++)
          r[o][n][s][l] = 0;
      }
    }
  }
  return r;
}
function createArray3D(e, t, i) {
  const a = new Array(e);
  for (let r = 0; r < e; r++) {
    a[r] = new Array(t);
    for (let o = 0; o < t; o++) {
      a[r][o] = new Array(i);
      for (let n = 0; n < i; n++)
        a[r][o][n] = 0;
    }
  }
  return a;
}
function fillArray3D(e, t, i, a, r) {
  for (let o = 0; o < t; o++) {
    e[o] = [];
    for (let n = 0; n < i; n++) {
      e[o][n] = [];
      for (let s = 0; s < a; s++)
        e[o][n][s] = r;
    }
  }
}
function fillArray1D(e, t, i) {
  for (let a = 0; a < t; a++)
    e[a] = i;
}
var WuColorCube = class {
  constructor() {
    __publicField(this, "redMinimum"), __publicField(this, "redMaximum"), __publicField(this, "greenMinimum"), __publicField(this, "greenMaximum"), __publicField(this, "blueMinimum"), __publicField(this, "blueMaximum"), __publicField(this, "volume"), __publicField(this, "alphaMinimum"), __publicField(this, "alphaMaximum");
  }
}, _WuQuant = class extends AbstractPaletteQuantizer {
  constructor(e, t = 256, i = 5) {
    super(), __publicField(this, "_reds"), __publicField(this, "_greens"), __publicField(this, "_blues"), __publicField(this, "_alphas"), __publicField(this, "_sums"), __publicField(this, "_weights"), __publicField(this, "_momentsRed"), __publicField(this, "_momentsGreen"), __publicField(this, "_momentsBlue"), __publicField(this, "_momentsAlpha"), __publicField(this, "_moments"), __publicField(this, "_table"), __publicField(this, "_pixels"), __publicField(this, "_cubes"), __publicField(this, "_colors"), __publicField(this, "_significantBitsPerChannel"), __publicField(this, "_maxSideIndex"), __publicField(this, "_alphaMaxSideIndex"), __publicField(this, "_sideSize"), __publicField(this, "_alphaSideSize"), __publicField(this, "_distance"), this._distance = e, this._setQuality(i), this._initialize(t);
  }
  sample(e) {
    const t = e.getPointArray();
    for (let i = 0, a = t.length; i < a; i++)
      this._addColor(t[i]);
    this._pixels = this._pixels.concat(t);
  }
  *quantize() {
    yield* this._preparePalette();
    const e = new Palette();
    for (let t = 0; t < this._colors; t++)
      if (this._sums[t] > 0) {
        const i = this._sums[t], a = this._reds[t] / i, r = this._greens[t] / i, o = this._blues[t] / i, n = this._alphas[t] / i, s = Point.createByRGBA(a | 0, r | 0, o | 0, n | 0);
        e.add(s);
      }
    e.sort(), yield {
      palette: e,
      progress: 100
    };
  }
  *_preparePalette() {
    yield* this._calculateMoments();
    let e = 0;
    const t = createArray1D(this._colors);
    for (let n = 1; n < this._colors; ++n) {
      this._cut(this._cubes[e], this._cubes[n]) ? (t[e] = this._cubes[e].volume > 1 ? this._calculateVariance(this._cubes[e]) : 0, t[n] = this._cubes[n].volume > 1 ? this._calculateVariance(this._cubes[n]) : 0) : (t[e] = 0, n--), e = 0;
      let s = t[0];
      for (let l = 1; l <= n; ++l)
        t[l] > s && (s = t[l], e = l);
      if (s <= 0) {
        this._colors = n + 1;
        break;
      }
    }
    const i = [], a = [], r = [], o = [];
    for (let n = 0; n < this._colors; ++n) {
      const s = _WuQuant._volume(this._cubes[n], this._weights);
      s > 0 ? (i[n] = _WuQuant._volume(this._cubes[n], this._momentsRed) / s | 0, a[n] = _WuQuant._volume(this._cubes[n], this._momentsGreen) / s | 0, r[n] = _WuQuant._volume(this._cubes[n], this._momentsBlue) / s | 0, o[n] = _WuQuant._volume(this._cubes[n], this._momentsAlpha) / s | 0) : (i[n] = 0, a[n] = 0, r[n] = 0, o[n] = 0);
    }
    this._reds = createArray1D(this._colors + 1), this._greens = createArray1D(this._colors + 1), this._blues = createArray1D(this._colors + 1), this._alphas = createArray1D(this._colors + 1), this._sums = createArray1D(this._colors + 1);
    for (let n = 0, s = this._pixels.length; n < s; n++) {
      const l = this._pixels[n];
      let u = -1, d = Number.MAX_VALUE;
      for (let m = 0; m < this._colors; m++) {
        const p = i[m], g = a[m], M = r[m], k = o[m], w = this._distance.calculateRaw(p, g, M, k, l.r, l.g, l.b, l.a);
        w < d && (d = w, u = m);
      }
      this._reds[u] += l.r, this._greens[u] += l.g, this._blues[u] += l.b, this._alphas[u] += l.a, this._sums[u]++;
    }
  }
  _addColor(e) {
    const t = 8 - this._significantBitsPerChannel, i = (e.r >> t) + 1, a = (e.g >> t) + 1, r = (e.b >> t) + 1, o = (e.a >> t) + 1;
    this._weights[o][i][a][r]++, this._momentsRed[o][i][a][r] += e.r, this._momentsGreen[o][i][a][r] += e.g, this._momentsBlue[o][i][a][r] += e.b, this._momentsAlpha[o][i][a][r] += e.a, this._moments[o][i][a][r] += this._table[e.r] + this._table[e.g] + this._table[e.b] + this._table[e.a];
  }
  *_calculateMoments() {
    const e = [], t = [], i = [], a = [], r = [], o = [], n = createArray3D(this._sideSize, this._sideSize, this._sideSize), s = createArray3D(this._sideSize, this._sideSize, this._sideSize), l = createArray3D(this._sideSize, this._sideSize, this._sideSize), h = createArray3D(this._sideSize, this._sideSize, this._sideSize), u = createArray3D(this._sideSize, this._sideSize, this._sideSize), d = createArray3D(this._sideSize, this._sideSize, this._sideSize);
    let m = 0;
    const p = new ProgressTracker(this._alphaMaxSideIndex * this._maxSideIndex, 99);
    for (let g = 1; g <= this._alphaMaxSideIndex; ++g) {
      fillArray3D(n, this._sideSize, this._sideSize, this._sideSize, 0), fillArray3D(s, this._sideSize, this._sideSize, this._sideSize, 0), fillArray3D(l, this._sideSize, this._sideSize, this._sideSize, 0), fillArray3D(h, this._sideSize, this._sideSize, this._sideSize, 0), fillArray3D(u, this._sideSize, this._sideSize, this._sideSize, 0), fillArray3D(d, this._sideSize, this._sideSize, this._sideSize, 0);
      for (let M = 1; M <= this._maxSideIndex; ++M, ++m) {
        p.shouldNotify(m) && (yield {
          progress: p.progress
        }), fillArray1D(e, this._sideSize, 0), fillArray1D(t, this._sideSize, 0), fillArray1D(i, this._sideSize, 0), fillArray1D(a, this._sideSize, 0), fillArray1D(r, this._sideSize, 0), fillArray1D(o, this._sideSize, 0);
        for (let k = 1; k <= this._maxSideIndex; ++k) {
          let w = 0, v = 0, C = 0, B = 0, A = 0, S = 0;
          for (let b = 1; b <= this._maxSideIndex; ++b)
            w += this._weights[g][M][k][b], v += this._momentsRed[g][M][k][b], C += this._momentsGreen[g][M][k][b], B += this._momentsBlue[g][M][k][b], A += this._momentsAlpha[g][M][k][b], S += this._moments[g][M][k][b], e[b] += w, t[b] += v, i[b] += C, a[b] += B, r[b] += A, o[b] += S, n[M][k][b] = n[M - 1][k][b] + e[b], s[M][k][b] = s[M - 1][k][b] + t[b], l[M][k][b] = l[M - 1][k][b] + i[b], h[M][k][b] = h[M - 1][k][b] + a[b], u[M][k][b] = u[M - 1][k][b] + r[b], d[M][k][b] = d[M - 1][k][b] + o[b], this._weights[g][M][k][b] = this._weights[g - 1][M][k][b] + n[M][k][b], this._momentsRed[g][M][k][b] = this._momentsRed[g - 1][M][k][b] + s[M][k][b], this._momentsGreen[g][M][k][b] = this._momentsGreen[g - 1][M][k][b] + l[M][k][b], this._momentsBlue[g][M][k][b] = this._momentsBlue[g - 1][M][k][b] + h[M][k][b], this._momentsAlpha[g][M][k][b] = this._momentsAlpha[g - 1][M][k][b] + u[M][k][b], this._moments[g][M][k][b] = this._moments[g - 1][M][k][b] + d[M][k][b];
        }
      }
    }
  }
  static _volumeFloat(e, t) {
    return t[e.alphaMaximum][e.redMaximum][e.greenMaximum][e.blueMaximum] - t[e.alphaMaximum][e.redMaximum][e.greenMinimum][e.blueMaximum] - t[e.alphaMaximum][e.redMinimum][e.greenMaximum][e.blueMaximum] + t[e.alphaMaximum][e.redMinimum][e.greenMinimum][e.blueMaximum] - t[e.alphaMinimum][e.redMaximum][e.greenMaximum][e.blueMaximum] + t[e.alphaMinimum][e.redMaximum][e.greenMinimum][e.blueMaximum] + t[e.alphaMinimum][e.redMinimum][e.greenMaximum][e.blueMaximum] - t[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMaximum] - (t[e.alphaMaximum][e.redMaximum][e.greenMaximum][e.blueMinimum] - t[e.alphaMinimum][e.redMaximum][e.greenMaximum][e.blueMinimum] - t[e.alphaMaximum][e.redMaximum][e.greenMinimum][e.blueMinimum] + t[e.alphaMinimum][e.redMaximum][e.greenMinimum][e.blueMinimum] - t[e.alphaMaximum][e.redMinimum][e.greenMaximum][e.blueMinimum] + t[e.alphaMinimum][e.redMinimum][e.greenMaximum][e.blueMinimum] + t[e.alphaMaximum][e.redMinimum][e.greenMinimum][e.blueMinimum] - t[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMinimum]);
  }
  static _volume(e, t) {
    return _WuQuant._volumeFloat(e, t) | 0;
  }
  static _top(e, t, i, a) {
    let r;
    switch (t) {
      case _WuQuant._alpha:
        r = a[i][e.redMaximum][e.greenMaximum][e.blueMaximum] - a[i][e.redMaximum][e.greenMinimum][e.blueMaximum] - a[i][e.redMinimum][e.greenMaximum][e.blueMaximum] + a[i][e.redMinimum][e.greenMinimum][e.blueMaximum] - (a[i][e.redMaximum][e.greenMaximum][e.blueMinimum] - a[i][e.redMaximum][e.greenMinimum][e.blueMinimum] - a[i][e.redMinimum][e.greenMaximum][e.blueMinimum] + a[i][e.redMinimum][e.greenMinimum][e.blueMinimum]);
        break;
      case _WuQuant._red:
        r = a[e.alphaMaximum][i][e.greenMaximum][e.blueMaximum] - a[e.alphaMaximum][i][e.greenMinimum][e.blueMaximum] - a[e.alphaMinimum][i][e.greenMaximum][e.blueMaximum] + a[e.alphaMinimum][i][e.greenMinimum][e.blueMaximum] - (a[e.alphaMaximum][i][e.greenMaximum][e.blueMinimum] - a[e.alphaMaximum][i][e.greenMinimum][e.blueMinimum] - a[e.alphaMinimum][i][e.greenMaximum][e.blueMinimum] + a[e.alphaMinimum][i][e.greenMinimum][e.blueMinimum]);
        break;
      case _WuQuant._green:
        r = a[e.alphaMaximum][e.redMaximum][i][e.blueMaximum] - a[e.alphaMaximum][e.redMinimum][i][e.blueMaximum] - a[e.alphaMinimum][e.redMaximum][i][e.blueMaximum] + a[e.alphaMinimum][e.redMinimum][i][e.blueMaximum] - (a[e.alphaMaximum][e.redMaximum][i][e.blueMinimum] - a[e.alphaMaximum][e.redMinimum][i][e.blueMinimum] - a[e.alphaMinimum][e.redMaximum][i][e.blueMinimum] + a[e.alphaMinimum][e.redMinimum][i][e.blueMinimum]);
        break;
      case _WuQuant._blue:
        r = a[e.alphaMaximum][e.redMaximum][e.greenMaximum][i] - a[e.alphaMaximum][e.redMaximum][e.greenMinimum][i] - a[e.alphaMaximum][e.redMinimum][e.greenMaximum][i] + a[e.alphaMaximum][e.redMinimum][e.greenMinimum][i] - (a[e.alphaMinimum][e.redMaximum][e.greenMaximum][i] - a[e.alphaMinimum][e.redMaximum][e.greenMinimum][i] - a[e.alphaMinimum][e.redMinimum][e.greenMaximum][i] + a[e.alphaMinimum][e.redMinimum][e.greenMinimum][i]);
        break;
      default:
        throw new Error("impossible");
    }
    return r | 0;
  }
  static _bottom(e, t, i) {
    switch (t) {
      case _WuQuant._alpha:
        return -i[e.alphaMinimum][e.redMaximum][e.greenMaximum][e.blueMaximum] + i[e.alphaMinimum][e.redMaximum][e.greenMinimum][e.blueMaximum] + i[e.alphaMinimum][e.redMinimum][e.greenMaximum][e.blueMaximum] - i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMaximum] - (-i[e.alphaMinimum][e.redMaximum][e.greenMaximum][e.blueMinimum] + i[e.alphaMinimum][e.redMaximum][e.greenMinimum][e.blueMinimum] + i[e.alphaMinimum][e.redMinimum][e.greenMaximum][e.blueMinimum] - i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMinimum]);
      case _WuQuant._red:
        return -i[e.alphaMaximum][e.redMinimum][e.greenMaximum][e.blueMaximum] + i[e.alphaMaximum][e.redMinimum][e.greenMinimum][e.blueMaximum] + i[e.alphaMinimum][e.redMinimum][e.greenMaximum][e.blueMaximum] - i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMaximum] - (-i[e.alphaMaximum][e.redMinimum][e.greenMaximum][e.blueMinimum] + i[e.alphaMaximum][e.redMinimum][e.greenMinimum][e.blueMinimum] + i[e.alphaMinimum][e.redMinimum][e.greenMaximum][e.blueMinimum] - i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMinimum]);
      case _WuQuant._green:
        return -i[e.alphaMaximum][e.redMaximum][e.greenMinimum][e.blueMaximum] + i[e.alphaMaximum][e.redMinimum][e.greenMinimum][e.blueMaximum] + i[e.alphaMinimum][e.redMaximum][e.greenMinimum][e.blueMaximum] - i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMaximum] - (-i[e.alphaMaximum][e.redMaximum][e.greenMinimum][e.blueMinimum] + i[e.alphaMaximum][e.redMinimum][e.greenMinimum][e.blueMinimum] + i[e.alphaMinimum][e.redMaximum][e.greenMinimum][e.blueMinimum] - i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMinimum]);
      case _WuQuant._blue:
        return -i[e.alphaMaximum][e.redMaximum][e.greenMaximum][e.blueMinimum] + i[e.alphaMaximum][e.redMaximum][e.greenMinimum][e.blueMinimum] + i[e.alphaMaximum][e.redMinimum][e.greenMaximum][e.blueMinimum] - i[e.alphaMaximum][e.redMinimum][e.greenMinimum][e.blueMinimum] - (-i[e.alphaMinimum][e.redMaximum][e.greenMaximum][e.blueMinimum] + i[e.alphaMinimum][e.redMaximum][e.greenMinimum][e.blueMinimum] + i[e.alphaMinimum][e.redMinimum][e.greenMaximum][e.blueMinimum] - i[e.alphaMinimum][e.redMinimum][e.greenMinimum][e.blueMinimum]);
      default:
        return 0;
    }
  }
  _calculateVariance(e) {
    const t = _WuQuant._volume(e, this._momentsRed), i = _WuQuant._volume(e, this._momentsGreen), a = _WuQuant._volume(e, this._momentsBlue), r = _WuQuant._volume(e, this._momentsAlpha), o = _WuQuant._volumeFloat(e, this._moments), n = _WuQuant._volume(e, this._weights), s = t * t + i * i + a * a + r * r;
    return o - s / n;
  }
  _maximize(e, t, i, a, r, o, n, s, l) {
    const h = _WuQuant._bottom(e, t, this._momentsRed) | 0, u = _WuQuant._bottom(e, t, this._momentsGreen) | 0, d = _WuQuant._bottom(e, t, this._momentsBlue) | 0, m = _WuQuant._bottom(e, t, this._momentsAlpha) | 0, p = _WuQuant._bottom(e, t, this._weights) | 0;
    let g = 0, M = -1;
    for (let k = i; k < a; ++k) {
      let w = h + _WuQuant._top(e, t, k, this._momentsRed), v = u + _WuQuant._top(e, t, k, this._momentsGreen), C = d + _WuQuant._top(e, t, k, this._momentsBlue), B = m + _WuQuant._top(e, t, k, this._momentsAlpha), A = p + _WuQuant._top(e, t, k, this._weights);
      if (A !== 0) {
        let S = w * w + v * v + C * C + B * B, b = S / A;
        w = r - w, v = o - v, C = n - C, B = s - B, A = l - A, A !== 0 && (S = w * w + v * v + C * C + B * B, b += S / A, b > g && (g = b, M = k));
      }
    }
    return { max: g, position: M };
  }
  _cut(e, t) {
    let i;
    const a = _WuQuant._volume(e, this._momentsRed), r = _WuQuant._volume(e, this._momentsGreen), o = _WuQuant._volume(e, this._momentsBlue), n = _WuQuant._volume(e, this._momentsAlpha), s = _WuQuant._volume(e, this._weights), l = this._maximize(e, _WuQuant._red, e.redMinimum + 1, e.redMaximum, a, r, o, n, s), h = this._maximize(e, _WuQuant._green, e.greenMinimum + 1, e.greenMaximum, a, r, o, n, s), u = this._maximize(e, _WuQuant._blue, e.blueMinimum + 1, e.blueMaximum, a, r, o, n, s), d = this._maximize(e, _WuQuant._alpha, e.alphaMinimum + 1, e.alphaMaximum, a, r, o, n, s);
    if (d.max >= l.max && d.max >= h.max && d.max >= u.max) {
      if (i = _WuQuant._alpha, d.position < 0)
        return !1;
    } else l.max >= d.max && l.max >= h.max && l.max >= u.max ? i = _WuQuant._red : h.max >= d.max && h.max >= l.max && h.max >= u.max ? i = _WuQuant._green : i = _WuQuant._blue;
    switch (t.redMaximum = e.redMaximum, t.greenMaximum = e.greenMaximum, t.blueMaximum = e.blueMaximum, t.alphaMaximum = e.alphaMaximum, i) {
      case _WuQuant._red:
        t.redMinimum = e.redMaximum = l.position, t.greenMinimum = e.greenMinimum, t.blueMinimum = e.blueMinimum, t.alphaMinimum = e.alphaMinimum;
        break;
      case _WuQuant._green:
        t.greenMinimum = e.greenMaximum = h.position, t.redMinimum = e.redMinimum, t.blueMinimum = e.blueMinimum, t.alphaMinimum = e.alphaMinimum;
        break;
      case _WuQuant._blue:
        t.blueMinimum = e.blueMaximum = u.position, t.redMinimum = e.redMinimum, t.greenMinimum = e.greenMinimum, t.alphaMinimum = e.alphaMinimum;
        break;
      case _WuQuant._alpha:
        t.alphaMinimum = e.alphaMaximum = d.position, t.blueMinimum = e.blueMinimum, t.redMinimum = e.redMinimum, t.greenMinimum = e.greenMinimum;
        break;
    }
    return e.volume = (e.redMaximum - e.redMinimum) * (e.greenMaximum - e.greenMinimum) * (e.blueMaximum - e.blueMinimum) * (e.alphaMaximum - e.alphaMinimum), t.volume = (t.redMaximum - t.redMinimum) * (t.greenMaximum - t.greenMinimum) * (t.blueMaximum - t.blueMinimum) * (t.alphaMaximum - t.alphaMinimum), !0;
  }
  _initialize(e) {
    this._colors = e, this._cubes = [];
    for (let t = 0; t < e; t++)
      this._cubes[t] = new WuColorCube();
    this._cubes[0].redMinimum = 0, this._cubes[0].greenMinimum = 0, this._cubes[0].blueMinimum = 0, this._cubes[0].alphaMinimum = 0, this._cubes[0].redMaximum = this._maxSideIndex, this._cubes[0].greenMaximum = this._maxSideIndex, this._cubes[0].blueMaximum = this._maxSideIndex, this._cubes[0].alphaMaximum = this._alphaMaxSideIndex, this._weights = createArray4D(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsRed = createArray4D(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsGreen = createArray4D(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsBlue = createArray4D(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsAlpha = createArray4D(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._moments = createArray4D(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._table = [];
    for (let t = 0; t < 256; ++t)
      this._table[t] = t * t;
    this._pixels = [];
  }
  _setQuality(e = 5) {
    this._significantBitsPerChannel = e, this._maxSideIndex = 1 << this._significantBitsPerChannel, this._alphaMaxSideIndex = this._maxSideIndex, this._sideSize = this._maxSideIndex + 1, this._alphaSideSize = this._alphaMaxSideIndex + 1;
  }
}, WuQuant = _WuQuant;
__publicField(WuQuant, "_alpha", 3);
__publicField(WuQuant, "_red", 2);
__publicField(WuQuant, "_green", 1);
__publicField(WuQuant, "_blue", 0);
var image_exports = {};
__export(image_exports, {
  AbstractImageQuantizer: () => AbstractImageQuantizer,
  ErrorDiffusionArray: () => ErrorDiffusionArray,
  ErrorDiffusionArrayKernel: () => ErrorDiffusionArrayKernel,
  ErrorDiffusionRiemersma: () => ErrorDiffusionRiemersma,
  NearestColor: () => NearestColor
});
var AbstractImageQuantizer = class {
  quantizeSync(e, t) {
    for (const i of this.quantize(e, t))
      if (i.pointContainer)
        return i.pointContainer;
    throw new Error("unreachable");
  }
}, NearestColor = class extends AbstractImageQuantizer {
  constructor(e) {
    super(), __publicField(this, "_distance"), this._distance = e;
  }
  *quantize(e, t) {
    const i = e.getPointArray(), a = e.getWidth(), r = e.getHeight(), o = new ProgressTracker(r, 99);
    for (let n = 0; n < r; n++) {
      o.shouldNotify(n) && (yield {
        progress: o.progress
      });
      for (let s = 0, l = n * a; s < a; s++, l++) {
        const h = i[l];
        h.from(t.getNearestColor(this._distance, h));
      }
    }
    yield {
      pointContainer: e,
      progress: 100
    };
  }
}, ErrorDiffusionArrayKernel = /* @__PURE__ */ ((e) => (e[e.FloydSteinberg = 0] = "FloydSteinberg", e[e.FalseFloydSteinberg = 1] = "FalseFloydSteinberg", e[e.Stucki = 2] = "Stucki", e[e.Atkinson = 3] = "Atkinson", e[e.Jarvis = 4] = "Jarvis", e[e.Burkes = 5] = "Burkes", e[e.Sierra = 6] = "Sierra", e[e.TwoSierra = 7] = "TwoSierra", e[e.SierraLite = 8] = "SierraLite", e))(ErrorDiffusionArrayKernel || {}), ErrorDiffusionArray = class extends AbstractImageQuantizer {
  constructor(e, t, i = !0, a = 0, r = !1) {
    super(), __publicField(this, "_minColorDistance"), __publicField(this, "_serpentine"), __publicField(this, "_kernel"), __publicField(this, "_calculateErrorLikeGIMP"), __publicField(this, "_distance"), this._setKernel(t), this._distance = e, this._minColorDistance = a, this._serpentine = i, this._calculateErrorLikeGIMP = r;
  }
  *quantize(e, t) {
    const i = e.getPointArray(), a = new Point(), r = e.getWidth(), o = e.getHeight(), n = [];
    let s = 1, l = 1;
    for (const u of this._kernel) {
      const d = u[2] + 1;
      l < d && (l = d);
    }
    for (let u = 0; u < l; u++)
      this._fillErrorLine(n[u] = [], r);
    const h = new ProgressTracker(o, 99);
    for (let u = 0; u < o; u++) {
      h.shouldNotify(u) && (yield {
        progress: h.progress
      }), this._serpentine && (s *= -1);
      const d = u * r, m = s === 1 ? 0 : r - 1, p = s === 1 ? r : -1;
      this._fillErrorLine(n[0], r), n.push(n.shift());
      const g = n[0];
      for (let M = m, k = d + m; M !== p; M += s, k += s) {
        const w = i[k], v = g[M];
        a.from(w);
        const C = Point.createByRGBA(inRange0to255Rounded(w.r + v[0]), inRange0to255Rounded(w.g + v[1]), inRange0to255Rounded(w.b + v[2]), inRange0to255Rounded(w.a + v[3])), B = t.getNearestColor(this._distance, C);
        if (w.from(B), this._minColorDistance && this._distance.calculateNormalized(a, B) < this._minColorDistance)
          continue;
        let A, S, b, E;
        this._calculateErrorLikeGIMP ? (A = C.r - B.r, S = C.g - B.g, b = C.b - B.b, E = C.a - B.a) : (A = a.r - B.r, S = a.g - B.g, b = a.b - B.b, E = a.a - B.a);
        const F = s === 1 ? 0 : this._kernel.length - 1, Z = s === 1 ? this._kernel.length : -1;
        for (let P = F; P !== Z; P += s) {
          const D = this._kernel[P][1] * s, L = this._kernel[P][2];
          if (D + M >= 0 && D + M < r && L + u >= 0 && L + u < o) {
            const q = this._kernel[P][0], j = n[L][D + M];
            j[0] += A * q, j[1] += S * q, j[2] += b * q, j[3] += E * q;
          }
        }
      }
    }
    yield {
      pointContainer: e,
      progress: 100
    };
  }
  _fillErrorLine(e, t) {
    e.length > t && (e.length = t);
    const i = e.length;
    for (let a = 0; a < i; a++) {
      const r = e[a];
      r[0] = r[1] = r[2] = r[3] = 0;
    }
    for (let a = i; a < t; a++)
      e[a] = [0, 0, 0, 0];
  }
  _setKernel(e) {
    switch (e) {
      case 0:
        this._kernel = [
          [7 / 16, 1, 0],
          [3 / 16, -1, 1],
          [5 / 16, 0, 1],
          [1 / 16, 1, 1]
        ];
        break;
      case 1:
        this._kernel = [
          [3 / 8, 1, 0],
          [3 / 8, 0, 1],
          [2 / 8, 1, 1]
        ];
        break;
      case 2:
        this._kernel = [
          [8 / 42, 1, 0],
          [4 / 42, 2, 0],
          [2 / 42, -2, 1],
          [4 / 42, -1, 1],
          [8 / 42, 0, 1],
          [4 / 42, 1, 1],
          [2 / 42, 2, 1],
          [1 / 42, -2, 2],
          [2 / 42, -1, 2],
          [4 / 42, 0, 2],
          [2 / 42, 1, 2],
          [1 / 42, 2, 2]
        ];
        break;
      case 3:
        this._kernel = [
          [1 / 8, 1, 0],
          [1 / 8, 2, 0],
          [1 / 8, -1, 1],
          [1 / 8, 0, 1],
          [1 / 8, 1, 1],
          [1 / 8, 0, 2]
        ];
        break;
      case 4:
        this._kernel = [
          [7 / 48, 1, 0],
          [5 / 48, 2, 0],
          [3 / 48, -2, 1],
          [5 / 48, -1, 1],
          [7 / 48, 0, 1],
          [5 / 48, 1, 1],
          [3 / 48, 2, 1],
          [1 / 48, -2, 2],
          [3 / 48, -1, 2],
          [5 / 48, 0, 2],
          [3 / 48, 1, 2],
          [1 / 48, 2, 2]
        ];
        break;
      case 5:
        this._kernel = [
          [8 / 32, 1, 0],
          [4 / 32, 2, 0],
          [2 / 32, -2, 1],
          [4 / 32, -1, 1],
          [8 / 32, 0, 1],
          [4 / 32, 1, 1],
          [2 / 32, 2, 1]
        ];
        break;
      case 6:
        this._kernel = [
          [5 / 32, 1, 0],
          [3 / 32, 2, 0],
          [2 / 32, -2, 1],
          [4 / 32, -1, 1],
          [5 / 32, 0, 1],
          [4 / 32, 1, 1],
          [2 / 32, 2, 1],
          [2 / 32, -1, 2],
          [3 / 32, 0, 2],
          [2 / 32, 1, 2]
        ];
        break;
      case 7:
        this._kernel = [
          [4 / 16, 1, 0],
          [3 / 16, 2, 0],
          [1 / 16, -2, 1],
          [2 / 16, -1, 1],
          [3 / 16, 0, 1],
          [2 / 16, 1, 1],
          [1 / 16, 2, 1]
        ];
        break;
      case 8:
        this._kernel = [
          [2 / 4, 1, 0],
          [1 / 4, -1, 1],
          [1 / 4, 0, 1]
        ];
        break;
      default:
        throw new Error(`ErrorDiffusionArray: unknown kernel = ${e}`);
    }
  }
};
function* hilbertCurve(e, t, i) {
  const a = Math.max(e, t), r = Math.floor(Math.log(a) / Math.log(2) + 1), o = new ProgressTracker(e * t, 99), n = {
    width: e,
    height: t,
    level: r,
    callback: i,
    tracker: o,
    index: 0,
    x: 0,
    y: 0
  };
  yield* walkHilbert(
    n,
    1
    /* UP */
  ), visit(
    n,
    0
    /* NONE */
  );
}
function* walkHilbert(e, t) {
  if (!(e.level < 1)) {
    switch (e.tracker.shouldNotify(e.index) && (yield { progress: e.tracker.progress }), e.level--, t) {
      case 2:
        yield* walkHilbert(
          e,
          1
          /* UP */
        ), visit(
          e,
          3
          /* RIGHT */
        ), yield* walkHilbert(
          e,
          2
          /* LEFT */
        ), visit(
          e,
          4
          /* DOWN */
        ), yield* walkHilbert(
          e,
          2
          /* LEFT */
        ), visit(
          e,
          2
          /* LEFT */
        ), yield* walkHilbert(
          e,
          4
          /* DOWN */
        );
        break;
      case 3:
        yield* walkHilbert(
          e,
          4
          /* DOWN */
        ), visit(
          e,
          2
          /* LEFT */
        ), yield* walkHilbert(
          e,
          3
          /* RIGHT */
        ), visit(
          e,
          1
          /* UP */
        ), yield* walkHilbert(
          e,
          3
          /* RIGHT */
        ), visit(
          e,
          3
          /* RIGHT */
        ), yield* walkHilbert(
          e,
          1
          /* UP */
        );
        break;
      case 1:
        yield* walkHilbert(
          e,
          2
          /* LEFT */
        ), visit(
          e,
          4
          /* DOWN */
        ), yield* walkHilbert(
          e,
          1
          /* UP */
        ), visit(
          e,
          3
          /* RIGHT */
        ), yield* walkHilbert(
          e,
          1
          /* UP */
        ), visit(
          e,
          1
          /* UP */
        ), yield* walkHilbert(
          e,
          3
          /* RIGHT */
        );
        break;
      case 4:
        yield* walkHilbert(
          e,
          3
          /* RIGHT */
        ), visit(
          e,
          1
          /* UP */
        ), yield* walkHilbert(
          e,
          4
          /* DOWN */
        ), visit(
          e,
          2
          /* LEFT */
        ), yield* walkHilbert(
          e,
          4
          /* DOWN */
        ), visit(
          e,
          4
          /* DOWN */
        ), yield* walkHilbert(
          e,
          2
          /* LEFT */
        );
        break;
    }
    e.level++;
  }
}
function visit(e, t) {
  switch (e.x >= 0 && e.x < e.width && e.y >= 0 && e.y < e.height && (e.callback(e.x, e.y), e.index++), t) {
    case 2:
      e.x--;
      break;
    case 3:
      e.x++;
      break;
    case 1:
      e.y--;
      break;
    case 4:
      e.y++;
      break;
  }
}
var ErrorDiffusionRiemersma = class extends AbstractImageQuantizer {
  constructor(e, t = 16, i = 1) {
    super(), __publicField(this, "_distance"), __publicField(this, "_weights"), __publicField(this, "_errorQueueSize"), this._distance = e, this._errorQueueSize = t, this._weights = ErrorDiffusionRiemersma._createWeights(i, t);
  }
  *quantize(e, t) {
    const i = e.getPointArray(), a = e.getWidth(), r = e.getHeight(), o = [];
    let n = 0;
    for (let s = 0; s < this._errorQueueSize; s++)
      o[s] = { r: 0, g: 0, b: 0, a: 0 };
    yield* hilbertCurve(a, r, (s, l) => {
      const h = i[s + l * a];
      let { r: u, g: d, b: m, a: p } = h;
      for (let w = 0; w < this._errorQueueSize; w++) {
        const v = this._weights[w], C = o[(w + n) % this._errorQueueSize];
        u += C.r * v, d += C.g * v, m += C.b * v, p += C.a * v;
      }
      const g = Point.createByRGBA(inRange0to255Rounded(u), inRange0to255Rounded(d), inRange0to255Rounded(m), inRange0to255Rounded(p)), M = t.getNearestColor(this._distance, g);
      n = (n + 1) % this._errorQueueSize;
      const k = (n + this._errorQueueSize - 1) % this._errorQueueSize;
      o[k].r = h.r - M.r, o[k].g = h.g - M.g, o[k].b = h.b - M.b, o[k].a = h.a - M.a, h.from(M);
    }), yield {
      pointContainer: e,
      progress: 100
    };
  }
  static _createWeights(e, t) {
    const i = [], a = Math.exp(Math.log(t) / (t - 1));
    for (let r = 0, o = 1; r < t; r++)
      i[r] = (o + 0.5 | 0) / t * e, o *= a;
    return i;
  }
}, quality_exports = {};
__export(quality_exports, {
  ssim: () => ssim
});
var K1 = 0.01, K2 = 0.03;
function ssim(e, t) {
  if (e.getHeight() !== t.getHeight() || e.getWidth() !== t.getWidth())
    throw new Error("Images have different sizes!");
  const a = (1 << 8) - 1, r = (K1 * a) ** 2, o = (K2 * a) ** 2;
  let n = 0, s = 0;
  return iterate(e, t, (l, h, u, d) => {
    let m = 0, p = 0, g = 0;
    for (let C = 0; C < l.length; C++)
      p += (l[C] - u) ** 2, g += (h[C] - d) ** 2, m += (l[C] - u) * (h[C] - d);
    const M = l.length - 1;
    p /= M, g /= M, m /= M;
    const k = (2 * u * d + r) * (2 * m + o), w = (u ** 2 + d ** 2 + r) * (p + g + o), v = k / w;
    s += v, n++;
  }), s / n;
}
function iterate(e, t, i) {
  const r = e.getWidth(), o = e.getHeight();
  for (let n = 0; n < o; n += 8)
    for (let s = 0; s < r; s += 8) {
      const l = Math.min(8, r - s), h = Math.min(8, o - n), u = calculateLumaValuesForWindow(e, s, n, l, h), d = calculateLumaValuesForWindow(t, s, n, l, h), m = calculateAverageLuma(u), p = calculateAverageLuma(d);
      i(u, d, m, p);
    }
}
function calculateLumaValuesForWindow(e, t, i, a, r) {
  const o = e.getPointArray(), n = [];
  let s = 0;
  for (let l = i; l < i + r; l++) {
    const h = l * e.getWidth();
    for (let u = t; u < t + a; u++) {
      const d = o[h + u];
      n[s] = d.r * 0.2126 + d.g * 0.7152 + d.b * 0.0722, s++;
    }
  }
  return n;
}
function calculateAverageLuma(e) {
  let t = 0;
  for (const i of e)
    t += i;
  return t / e.length;
}
typeof setImmediate == "function" ? setImmediate : typeof process < "u" && (process == null || process.nextTick);
function buildPaletteSync(e, {
  colorDistanceFormula: t,
  paletteQuantization: i,
  colors: a
} = {}) {
  const r = colorDistanceFormulaToColorDistance(t), o = paletteQuantizationToPaletteQuantizer(r, i, a);
  return e.forEach((n) => o.sample(n)), o.quantizeSync();
}
function applyPaletteSync(e, t, { colorDistanceFormula: i, imageQuantization: a } = {}) {
  const r = colorDistanceFormulaToColorDistance(i);
  return imageQuantizationToImageQuantizer(r, a).quantizeSync(e, t);
}
function colorDistanceFormulaToColorDistance(e = "euclidean-bt709") {
  switch (e) {
    case "cie94-graphic-arts":
      return new CIE94GraphicArts();
    case "cie94-textiles":
      return new CIE94Textiles();
    case "ciede2000":
      return new CIEDE2000();
    case "color-metric":
      return new CMetric();
    case "euclidean":
      return new Euclidean();
    case "euclidean-bt709":
      return new EuclideanBT709();
    case "euclidean-bt709-noalpha":
      return new EuclideanBT709NoAlpha();
    case "manhattan":
      return new Manhattan();
    case "manhattan-bt709":
      return new ManhattanBT709();
    case "manhattan-nommyde":
      return new ManhattanNommyde();
    case "pngquant":
      return new PNGQuant();
    default:
      throw new Error(`Unknown colorDistanceFormula ${e}`);
  }
}
function imageQuantizationToImageQuantizer(e, t = "floyd-steinberg") {
  switch (t) {
    case "nearest":
      return new NearestColor(e);
    case "riemersma":
      return new ErrorDiffusionRiemersma(e);
    case "floyd-steinberg":
      return new ErrorDiffusionArray(
        e,
        0
        /* FloydSteinberg */
      );
    case "false-floyd-steinberg":
      return new ErrorDiffusionArray(
        e,
        1
        /* FalseFloydSteinberg */
      );
    case "stucki":
      return new ErrorDiffusionArray(
        e,
        2
        /* Stucki */
      );
    case "atkinson":
      return new ErrorDiffusionArray(
        e,
        3
        /* Atkinson */
      );
    case "jarvis":
      return new ErrorDiffusionArray(
        e,
        4
        /* Jarvis */
      );
    case "burkes":
      return new ErrorDiffusionArray(
        e,
        5
        /* Burkes */
      );
    case "sierra":
      return new ErrorDiffusionArray(
        e,
        6
        /* Sierra */
      );
    case "two-sierra":
      return new ErrorDiffusionArray(
        e,
        7
        /* TwoSierra */
      );
    case "sierra-lite":
      return new ErrorDiffusionArray(
        e,
        8
        /* SierraLite */
      );
    default:
      throw new Error(`Unknown imageQuantization ${t}`);
  }
}
function paletteQuantizationToPaletteQuantizer(e, t = "wuquant", i = 256) {
  switch (t) {
    case "neuquant":
      return new NeuQuant(e, i);
    case "rgbquant":
      return new RGBQuant(e, i);
    case "wuquant":
      return new WuQuant(e, i);
    case "neuquant-float":
      return new NeuQuantFloat(e, i);
    default:
      throw new Error(`Unknown paletteQuantization ${t}`);
  }
}
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * cie94.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * ciede2000.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * cmetric.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * common.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * constants.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * ditherErrorDiffusionArray.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * euclidean.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * helper.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * hueStatistics.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * iq.ts - Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * lab2rgb.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * lab2xyz.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * manhattanNeuQuant.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * nearestColor.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * palette.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * pngQuant.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * point.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * pointContainer.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * rgb2hsl.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * rgb2lab.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * rgb2xyz.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * ssim.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * wuQuant.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * xyz2lab.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * xyz2rgb.ts - part of Image Quantization Library
 */
/**
 * @preserve
 * MIT License
 *
 * Copyright 2015-2018 Igor Bezkrovnyi
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * riemersma.ts - part of Image Quantization Library
 */
/**
 * @preserve TypeScript port:
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * colorHistogram.ts - part of Image Quantization Library
 */
/**
 * @preserve TypeScript port:
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * neuquant.ts - part of Image Quantization Library
 */
/**
 * @preserve TypeScript port:
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * rgbquant.ts - part of Image Quantization Library
 */
const QuantizeOptionsSchema = z.object({
  colors: z.number().optional(),
  colorDistanceFormula: z.union([
    z.literal("cie94-textiles"),
    z.literal("cie94-graphic-arts"),
    z.literal("ciede2000"),
    z.literal("color-metric"),
    z.literal("euclidean"),
    z.literal("euclidean-bt709-noalpha"),
    z.literal("euclidean-bt709"),
    z.literal("manhattan"),
    z.literal("manhattan-bt709"),
    z.literal("manhattan-nommyde"),
    z.literal("pngquant")
  ]).optional(),
  paletteQuantization: z.union([
    z.literal("neuquant"),
    z.literal("neuquant-float"),
    z.literal("rgbquant"),
    z.literal("wuquant")
  ]).optional(),
  imageQuantization: z.union([
    z.literal("nearest"),
    z.literal("riemersma"),
    z.literal("floyd-steinberg"),
    z.literal("false-floyd-steinberg"),
    z.literal("stucki"),
    z.literal("atkinson"),
    z.literal("jarvis"),
    z.literal("burkes"),
    z.literal("sierra"),
    z.literal("two-sierra"),
    z.literal("sierra-lite")
  ]).optional()
}), methods = {
  /**
   * Image color number reduction.
   */
  quantize(e, t) {
    const { colors: i, colorDistanceFormula: a, paletteQuantization: r, imageQuantization: o } = QuantizeOptionsSchema.parse(t), n = utils_exports.PointContainer.fromUint8Array(e.bitmap.data, e.bitmap.width, e.bitmap.height), s = buildPaletteSync([n], {
      colors: i,
      colorDistanceFormula: a,
      paletteQuantization: r
    }), l = applyPaletteSync(n, s, {
      colorDistanceFormula: a,
      imageQuantization: o
    });
    return e.bitmap.data = Buffer.from(l.toUint8Array()), e;
  }
}, defaultPlugins = [
  methods$h,
  methods$g,
  methods$f,
  methods$e,
  methods$c,
  methods$a,
  methods$b,
  methods$9,
  methods$8,
  methods$7,
  methods$6,
  methods$5,
  methods$4,
  methods$3,
  methods$d,
  methods$2,
  methods$1,
  methods
], defaultFormats = [bmp, msBmp, gif, jpeg$1, png, tiff];
bmp().mime, gif().mime, jpeg$1().mime, png().mime, tiff().mime;
const Jimp = createJimp({
  formats: defaultFormats,
  plugins: defaultPlugins
}), DEFAULT_COLLAGE_CONFIG = {
  frameWidth: 512,
  // Tăng lên 512 để rõ chi tiết hơn
  frameHeight: 288,
  // Tỷ lệ 16:9
  columns: 4,
  // 4 cột
  rows: 2,
  // 2 hàng → 8 frames/collage
  padding: 4,
  showNumbers: !0
};
function drawNumber(e, t, i, a) {
  const r = {
    0: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0]
    ],
    1: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0]
    ],
    2: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 1, 0],
      [0, 1, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1]
    ],
    3: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 1, 0],
      [0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0]
    ],
    4: [
      [0, 0, 0, 1, 0],
      [0, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0]
    ],
    5: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0]
    ],
    6: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0]
    ],
    7: [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0]
    ],
    8: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0]
    ],
    9: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 1, 1, 1, 0]
    ]
  }, o = String(t), n = 2, s = 5 * n + 1, l = 7 * n, h = 3, u = o.length * s + h * 2, d = l + h * 2, m = 179;
  for (let g = 0; g < u; g++)
    for (let M = 0; M < d; M++) {
      const k = i + g, w = a + M;
      k >= 0 && k < e.width && w >= 0 && w < e.height && e.setPixelColor(m, k, w);
    }
  let p = i + h;
  for (const g of o) {
    const M = r[g];
    if (M) {
      for (let k = 0; k < 7; k++)
        for (let w = 0; w < 5; w++)
          if (M[k][w])
            for (let v = 0; v < n; v++)
              for (let C = 0; C < n; C++) {
                const B = p + w * n + v, A = a + h + k * n + C;
                B >= 0 && B < e.width && A >= 0 && A < e.height && e.setPixelColor(4294967295, B, A);
              }
    }
    p += s;
  }
}
async function createFrameCollages(e, t = {}, i) {
  const a = { ...DEFAULT_COLLAGE_CONFIG, ...t }, r = a.columns * a.rows, o = a.columns * a.frameWidth + (a.columns - 1) * a.padding, n = a.rows * a.frameHeight + (a.rows - 1) * a.padding, s = [], l = Math.ceil(e.length / r);
  console.log(`[FrameCollage] Creating ${l} collages from ${e.length} frames`), console.log(`[FrameCollage] Config: ${a.columns}x${a.rows} grid, ${a.frameWidth}x${a.frameHeight}px per frame`);
  for (let h = 0; h < l; h++) {
    const u = h * r, d = Math.min(u + r, e.length), m = e.slice(u, d), p = new Jimp({ width: o, height: n, color: 255 });
    for (let k = 0; k < m.length; k++) {
      const w = m[k], v = k % a.columns, C = Math.floor(k / a.columns), B = v * (a.frameWidth + a.padding), A = C * (a.frameHeight + a.padding);
      try {
        const S = await Jimp.read(w);
        if (S.cover({ w: a.frameWidth, h: a.frameHeight }), p.composite(S, B, A), a.showNumbers) {
          const b = u + k + 1;
          drawNumber(p, b, B, A);
        }
      } catch (S) {
        console.error(`[FrameCollage] Failed to process frame ${w}:`, S);
        for (let b = 0; b < a.frameWidth; b++)
          for (let E = 0; E < a.frameHeight; E++)
            p.setPixelColor(858993663, B + b, A + E);
      }
    }
    const M = `data:image/jpeg;base64,${(await p.getBuffer("image/jpeg", { quality: 85 })).toString("base64")}`;
    if (s.push(M), i) {
      const k = (h + 1) / l * 100;
      i(k);
    }
    console.log(`[FrameCollage] Created collage ${h + 1}/${l} (frames ${u + 1}-${d})`);
  }
  return {
    collageBase64s: s,
    collageCount: s.length,
    framesPerCollage: r,
    totalFrames: e.length
  };
}
export {
  DEFAULT_COLLAGE_CONFIG,
  createFrameCollages
};
