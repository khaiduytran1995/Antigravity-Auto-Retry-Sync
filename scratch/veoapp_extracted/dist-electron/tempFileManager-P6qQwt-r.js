import e from "fs/promises";
import s from "path";
async function d(n) {
  const r = [];
  for (const t of n)
    try {
      (await e.stat(t)).isDirectory() ? await e.rm(t, { recursive: !0, force: !0 }) : await e.unlink(t);
    } catch (a) {
      r.push(`Failed to delete ${t}: ${a.message}`);
    }
  const o = new Set(n.map((t) => s.dirname(t)));
  for (const t of o)
    try {
      if ((await e.readdir(t)).length === 0) {
        await e.rmdir(t);
        const i = s.dirname(t);
        if (i.includes("veo-pro-clone"))
          try {
            (await e.readdir(i)).length === 0 && await e.rmdir(i);
          } catch {
          }
      }
    } catch {
    }
  r.length > 0 && console.warn("Cleanup warnings:", r);
}
export {
  d as cleanupTemp
};
