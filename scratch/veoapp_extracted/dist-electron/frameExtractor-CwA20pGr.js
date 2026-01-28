import f from "path";
import F from "fs/promises";
import { createRequire as b } from "module";
const i = b(import.meta.url);
let n = null, g = !1;
async function y() {
  n || (n = i("fluent-ffmpeg"));
  try {
    const o = i("@ffmpeg-installer/ffmpeg"), a = i("@ffprobe-installer/ffprobe");
    if (!n.setFfmpegPath || !n.setFfprobePath)
      throw new Error("fluent-ffmpeg missing setFfmpegPath or setFfprobePath methods");
    let r = o.path, e = a.path;
    if (console.log("📦 Original FFmpeg path:", r), console.log("📦 Original FFprobe path:", e), !r)
      throw new Error("FFmpeg path not found in installer");
    if (!e)
      throw new Error("FFprobe path not found in installer");
    r.includes("app.asar") && (r = r.replace("app.asar", "app.asar.unpacked"), console.log("🔧 Fixed FFmpeg path for production:", r)), e.includes("app.asar") && (e = e.replace("app.asar", "app.asar.unpacked"), console.log("🔧 Fixed FFprobe path for production:", e));
    const s = i("fs");
    if (!s.existsSync(r))
      throw new Error(`FFmpeg binary not found at: ${r}`);
    if (!s.existsSync(e))
      throw new Error(`FFprobe binary not found at: ${e}`);
    n.setFfmpegPath(r), n.setFfprobePath(e), g ? console.log("🔄 FFmpeg and FFprobe paths updated") : (g = !0, console.log("✅ FFmpeg and FFprobe paths configured successfully"));
  } catch (o) {
    throw console.error("Error setting FFmpeg paths:", o), new Error(`Không thể cấu hình FFmpeg/FFprobe: ${o.message}`);
  }
}
async function $(o, a, r) {
  await y();
  const e = f.join(f.dirname(o), "frames");
  return await F.mkdir(e, { recursive: !0 }), new Promise((s, p) => {
    n.ffprobe(o, (m, u) => {
      if (m) {
        p(new Error(`Không thể đọc metadata video: ${m.message}`));
        return;
      }
      const h = u.format.duration || 0;
      if (h === 0) {
        p(new Error("Không thể xác định thời lượng video"));
        return;
      }
      const d = a / h, l = [];
      n(o).outputOptions([
        `-vf fps=${d}`,
        "-q:v 2"
        // High quality JPEG
      ]).output(f.join(e, "frame-%04d.jpg")).on("start", (t) => {
        console.log("FFmpeg command:", t);
      }).on("progress", (t) => {
        t.percent && r(Math.min(t.percent, 99));
      }).on("end", async () => {
        try {
          const w = (await F.readdir(e)).filter((c) => c.endsWith(".jpg")).sort().slice(0, a);
          for (const c of w)
            l.push(f.join(e, c));
          r(100), s({
            framePaths: l,
            frameCount: l.length
          });
        } catch (t) {
          p(t);
        }
      }).on("error", (t) => {
        p(new Error(`Lỗi khi cắt frames: ${t.message}`));
      }).run();
    });
  });
}
export {
  $ as extractFrames
};
