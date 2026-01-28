import { spawn as u, exec as D } from "child_process";
import { promisify as _ } from "util";
import i from "path";
import a from "fs/promises";
import q from "os";
import { createRequire as I } from "module";
_(D);
const S = I(import.meta.url);
function O() {
  try {
    let s = S("@ffmpeg-installer/ffmpeg").path;
    if (!s)
      throw new Error("FFmpeg path not found in installer");
    if (s.includes("app.asar") && (s = s.replace("app.asar", "app.asar.unpacked"), console.log("🔧 Fixed FFmpeg path for production:", s)), !S("fs").existsSync(s))
      throw new Error(`FFmpeg binary not found at: ${s}`);
    return s;
  } catch (c) {
    throw console.error("Error loading ffmpeg path:", c), new Error(`Không thể tải FFmpeg path: ${c.message}`);
  }
}
async function U(c, s) {
  var h, w, g, y;
  const p = i.join(q.tmpdir(), "veo-pro-clone", Date.now().toString());
  await a.mkdir(p, { recursive: !0 });
  const l = i.join(p, "video.mp4");
  try {
    let o = null;
    const $ = i.join(process.cwd(), "clone", "bin", "yt-dlp.exe");
    try {
      await a.access($), o = $;
    } catch {
      const t = i.join(process.cwd(), "bin", "yt-dlp.exe");
      try {
        await a.access(t), o = t;
      } catch {
        if (process.resourcesPath) {
          const r = i.join(process.resourcesPath, "clone", "bin", "yt-dlp.exe");
          try {
            await a.access(r), o = r;
          } catch {
            const e = i.join(process.resourcesPath, "bin", "yt-dlp.exe");
            try {
              await a.access(e), o = e;
            } catch {
            }
          }
        }
      }
    }
    o || (o = "yt-dlp");
    try {
      const t = u(o, ["--version"], {
        shell: !1,
        stdio: ["ignore", "pipe", "pipe"]
      });
      await new Promise((r, e) => {
        t.on("close", (n) => {
          n === 0 ? r() : e(new Error(`yt-dlp version check failed with code ${n}`));
        }), t.on("error", e);
      });
    } catch {
      const r = [
        i.join(process.cwd(), "clone", "bin", "yt-dlp.exe"),
        i.join(process.cwd(), "bin", "yt-dlp.exe"),
        ...process.resourcesPath ? [
          i.join(process.resourcesPath, "clone", "bin", "yt-dlp.exe"),
          i.join(process.resourcesPath, "bin", "yt-dlp.exe")
        ] : []
      ];
      throw new Error(
        `yt-dlp không được tìm thấy. Vui lòng cài đặt yt-dlp hoặc đảm bảo file bin/yt-dlp.exe tồn tại.
Đã kiểm tra các đường dẫn:
${r.map((e) => `  - ${e}`).join(`
`)}
Resources path: ${process.resourcesPath || "N/A"}
CWD: ${process.cwd()}`
      );
    }
    const P = O(), m = [
      "--ffmpeg-location",
      P,
      "-f",
      "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best",
      "--merge-output-format",
      "mp4",
      "-o",
      l,
      c
    ], d = u(o, m, {
      shell: !1,
      stdio: ["ignore", "pipe", "pipe"]
    });
    let x = 0, b = "", F = "";
    (h = d.stderr) == null || h.on("data", (t) => {
      const r = Buffer.isBuffer(t) ? t.toString() : t;
      b += r;
      const e = r.match(/(\d+\.\d+)%/);
      if (e) {
        const n = parseFloat(e[1]);
        n > x && (x = n, s(n));
      }
    }), (w = d.stdout) == null || w.on("data", (t) => {
      const r = Buffer.isBuffer(t) ? t.toString() : t;
      F += r;
    }), await new Promise((t, r) => {
      d.on("close", (e) => {
        if (e === 0)
          t();
        else {
          const n = b || F || "No error message available";
          r(new Error(
            `yt-dlp exited with code ${e}
Command: ${o} ${m.join(" ")}
Error output:
${n}
FFmpeg location: ${P}
Output path: ${l}`
          ));
        }
      }), d.on("error", (e) => {
        r(new Error(
          `Failed to spawn yt-dlp process: ${e.message}
Path: ${o}
Args: ${m.join(" ")}`
        ));
      });
    });
    try {
      await a.access(l);
    } catch {
      const t = await a.readdir(p);
      throw console.error("Files in temp dir:", t), new Error(`Video file not found at ${l}. Files in dir: ${t.join(", ")}`);
    }
    const f = u(o, ["--print", "%(title)s|||%(duration)s", c], {
      shell: !1,
      stdio: ["ignore", "pipe", "pipe"]
    });
    let j = "", E = "";
    (g = f.stdout) == null || g.on("data", (t) => {
      j += t.toString();
    }), (y = f.stderr) == null || y.on("data", (t) => {
      E += t.toString();
    }), await new Promise((t, r) => {
      f.on("close", (e) => {
        e === 0 ? t() : r(new Error(`yt-dlp metadata exited with code ${e}: ${E}`));
      }), f.on("error", r);
    });
    const v = j.trim(), [B, k] = v.split("|||"), A = parseInt(k, 10);
    return s(100), {
      title: B || "Unknown",
      duration: A || 0,
      videoPath: l
    };
  } catch (o) {
    try {
      await a.rm(p, { recursive: !0, force: !0 });
    } catch {
    }
    throw o;
  }
}
export {
  U as downloadVideo
};
