import { m as d } from "./main-CHQQFXN8.js";
import { d as f } from "./index-Be3YBbK0.js";
const u = "https://api.elevenlabs.io/v1";
let a = {
  enabled: !1,
  proxies: [],
  currentIndex: 0
};
function v(o, s) {
  return a = {
    enabled: s,
    proxies: o,
    currentIndex: 0
  }, console.log(`🌐 [ElevenLabs] Proxy config updated: ${o.length} proxies, enabled=${s}`), { success: !0 };
}
function y() {
  return {
    ...a,
    currentProxy: a.enabled && a.proxies.length > 0 ? a.proxies[a.currentIndex] : null
  };
}
function x() {
  if (!a.enabled || a.proxies.length === 0)
    return null;
  const o = a.proxies[a.currentIndex];
  return a.currentIndex = (a.currentIndex + 1) % a.proxies.length, o;
}
function g(o) {
  const s = x();
  if (s) {
    const e = s.split(":");
    let t;
    if (e.length >= 4) {
      const [l, i, n, r] = e;
      t = `http://${n}:${r}@${l}:${i}`;
    } else if (e.length >= 2)
      t = `http://${e[0]}:${e[1]}`;
    else
      return console.warn("🌐 [ElevenLabs] Invalid proxy format:", s), o;
    console.log(`🌐 [ElevenLabs] Using proxy: ${e[0]}:${e[1]}`);
    const c = new f.HttpsProxyAgent(t);
    return {
      ...o,
      httpsAgent: c,
      proxy: !1
      // Disable axios built-in proxy to use our agent
    };
  }
  return o;
}
async function m(o) {
  const { text: s, voiceId: e, apiKey: t, modelId: c = "eleven_turbo_v2_5", voiceSettings: l = {} } = o;
  try {
    console.log("🎙️ ElevenLabs TTS called"), console.log(`   Voice ID: ${e}`), console.log(`   Model: ${c}`), console.log(`   Text length: ${s.length} chars`);
    const i = g({
      method: "post",
      url: `${u}/text-to-speech/${e}`,
      data: {
        text: s,
        model_id: c,
        voice_settings: l
      },
      headers: {
        Accept: "audio/mpeg",
        "xi-api-key": t,
        "Content-Type": "application/json"
      },
      responseType: "arraybuffer",
      timeout: 6e4
    }), n = await d(i), r = Buffer.from(n.data).toString("base64");
    return console.log("✅ ElevenLabs TTS success"), console.log(`   Audio size: ${n.data.byteLength} bytes`), {
      success: !0,
      data: r
    };
  } catch (i) {
    console.error("❌ ElevenLabs TTS failed:", i.message);
    let n = "Failed to generate speech";
    if (i.response) {
      const r = i.response.status;
      console.error("   Status:", r), r === 401 ? n = "QUOTA_EXCEEDED: Invalid or exhausted API key" : r === 429 ? n = "QUOTA_EXCEEDED: Rate limit exceeded or quota exhausted" : r === 400 ? n = "Invalid request parameters" : n = `API Error: ${r} - ${i.response.statusText}`;
    }
    return {
      success: !1,
      error: n
    };
  }
}
async function b(o) {
  var s;
  try {
    console.log("📋 ElevenLabs getVoices called");
    const e = g({
      method: "get",
      url: `${u}/voices`,
      headers: {
        "xi-api-key": o
      },
      timeout: 3e4
    }), t = await d(e);
    return console.log("✅ ElevenLabs getVoices success"), console.log(`   Found ${((s = t.data.voices) == null ? void 0 : s.length) || 0} voices`), {
      success: !0,
      data: t.data.voices || []
    };
  } catch (e) {
    console.error("❌ ElevenLabs getVoices failed:", e.message);
    let t = "Failed to fetch voices";
    if (e.response) {
      const c = e.response.status;
      c === 401 ? t = "QUOTA_EXCEEDED: Invalid or exhausted API key" : c === 429 && (t = "QUOTA_EXCEEDED: Rate limit exceeded");
    }
    return {
      success: !1,
      error: t
    };
  }
}
async function $(o) {
  var l, i, n;
  const { publicUserId: s, voiceId: e, newName: t, apiKey: c } = o;
  try {
    console.log("➕ ElevenLabs addSharedVoice called"), console.log(`   Voice ID: ${e}`), console.log(`   New name: ${t}`);
    const r = g({
      method: "post",
      url: `${u}/voices/add/${s}/${e}`,
      data: {
        new_name: t
      },
      headers: {
        "xi-api-key": c,
        "Content-Type": "application/json"
      },
      timeout: 3e4
    }), p = await d(r);
    return console.log("✅ ElevenLabs addSharedVoice success"), {
      success: !0,
      data: p.data
    };
  } catch (r) {
    return console.error("❌ ElevenLabs addSharedVoice failed:", r.message), {
      success: !1,
      error: `Failed to add voice: ${((n = (i = (l = r.response) == null ? void 0 : l.data) == null ? void 0 : i.detail) == null ? void 0 : n.message) || r.message}`
    };
  }
}
async function I(o, s) {
  var e, t, c;
  try {
    console.log("🗑️ ElevenLabs deleteVoice called"), console.log(`   Voice ID: ${o}`);
    const l = g({
      method: "delete",
      url: `${u}/voices/${o}`,
      headers: {
        "xi-api-key": s
      },
      timeout: 3e4
    });
    return await d(l), console.log("✅ ElevenLabs deleteVoice success"), {
      success: !0
    };
  } catch (l) {
    return console.error("❌ ElevenLabs deleteVoice failed:", l.message), {
      success: !1,
      error: `Failed to delete voice: ${((c = (t = (e = l.response) == null ? void 0 : e.data) == null ? void 0 : t.detail) == null ? void 0 : c.message) || l.message}`
    };
  }
}
async function L(o) {
  try {
    console.log("📊 ElevenLabs getSubscriptionInfo called");
    const s = g({
      method: "get",
      url: `${u}/user/subscription`,
      headers: {
        "xi-api-key": o
      },
      timeout: 3e4
    }), e = await d(s);
    return console.log("✅ ElevenLabs getSubscriptionInfo success"), {
      success: !0,
      data: e.data
    };
  } catch (s) {
    return console.error("❌ ElevenLabs getSubscriptionInfo failed:", s.message), {
      success: !1,
      error: s.message
    };
  }
}
export {
  $ as addSharedVoice,
  I as deleteVoice,
  L as getSubscriptionInfo,
  y as getVoiceProxyConfig,
  b as getVoices,
  v as setVoiceProxyConfig,
  m as textToSpeech
};
