import E from "fs/promises";
const k = "https://api.yescale.io/v1/chat/completions";
async function S(g, h, f, c) {
  var l, p, m, u, y, A, n, w, o, s, r;
  console.log("🤖 [OpenAI] Starting analysis with model:", f), console.log("🤖 [OpenAI] Number of frames:", g.length);
  try {
    c(10);
    const I = await Promise.all(
      g.map(async (d, i) => {
        const v = (await E.readFile(d)).toString("base64"), x = 10 + i / g.length * 30;
        return c(x), {
          type: "image_url",
          image_url: {
            url: `data:image/jpeg;base64,${v}`,
            detail: "low"
          }
        };
      })
    );
    c(40);
    const b = [
      {
        role: "user",
        content: [{ type: "text", text: `Bạn là một chuyên gia phân tích video. Hãy phân tích các khung hình này từ một video và tạo một kịch bản tóm tắt chi tiết.

Yêu cầu:
1. Mô tả các cảnh chính và hành động quan trọng
2. Xác định dòng chảy câu chuyện/nội dung
3. Ghi chú về các yếu tố thị giác quan trọng (màu sắc, bố cục, ánh sáng)
4. Tóm tắt thông điệp hoặc mục đích của video
5. Kịch bản phải phù hợp để tạo prompt chi tiết cho các ứng dụng AI khác

Hãy viết kịch bản dưới dạng văn bản thuần túy, rõ ràng và có cấu trúc.` }, ...I]
      }
    ];
    c(50), console.log("🤖 [OpenAI] Sending request to:", k);
    const t = await fetch(k, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${h}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: f,
        messages: b,
        max_completion_tokens: 1e5
        // GPT-5 Nano needs more tokens for reasoning + output
      })
    });
    if (console.log("🤖 [OpenAI] Response status:", t.status), !t.ok) {
      const i = ((l = (await t.json().catch(() => ({}))).error) == null ? void 0 : l.message) || t.statusText;
      throw console.error("🤖 [OpenAI] Error:", t.status, i), t.status === 401 ? new Error("OpenAI API Key không hợp lệ. Vui lòng kiểm tra lại.") : t.status === 429 ? new Error("OpenAI: Đã vượt quá giới hạn API. Vui lòng thử lại sau.") : t.status === 402 || t.status === 403 ? new Error("OpenAI: Không đủ credit hoặc không có quyền truy cập model này.") : new Error(`Lỗi OpenAI API: ${i}`);
    }
    const e = await t.json();
    console.log("🤖 [OpenAI] Response model:", e.model), console.log("🤖 [OpenAI] Response keys:", Object.keys(e));
    let a = "";
    if ((u = (m = (p = e.choices) == null ? void 0 : p[0]) == null ? void 0 : m.message) != null && u.content ? a = e.choices[0].message.content : (A = (y = e.choices) == null ? void 0 : y[0]) != null && A.text ? a = e.choices[0].text : Array.isArray((o = (w = (n = e.choices) == null ? void 0 : n[0]) == null ? void 0 : w.message) == null ? void 0 : o.content) && (a = e.choices[0].message.content.filter((i) => i.type === "text").map((i) => i.text).join(`
`)), ((r = (s = e.choices) == null ? void 0 : s[0]) == null ? void 0 : r.finish_reason) === "length" && !a)
      throw console.error("🤖 [OpenAI] Response truncated due to token limit"), new Error("OpenAI: Model đã dùng hết tokens cho reasoning. Vui lòng giảm số frames hoặc thử lại.");
    if (!a)
      throw console.error("🤖 [OpenAI] Cannot parse response:", JSON.stringify(e, null, 2)), new Error("OpenAI: Không thể parse phản hồi từ model.");
    return console.log("🤖 [OpenAI] Analysis complete, text length:", a.length), c(100), a;
  } catch (I) {
    throw I instanceof Error ? I : new Error("Lỗi không xác định khi gọi OpenAI API");
  }
}
async function K(g, h, f, c) {
  var l, p, m, u, y, A;
  console.log("🤖 [OpenAI Variation] Starting with model:", c);
  try {
    let n = "";
    h <= 20 ? n = "Thay đổi nhẹ một số chi tiết nhỏ, giữ nguyên cấu trúc và ý chính." : h <= 40 ? n = "Thay đổi một số chi tiết và cách diễn đạt, nhưng giữ nguyên ý tưởng chính." : h <= 60 ? n = "Thay đổi đáng kể cách kể chuyện, góc nhìn, hoặc trọng tâm, nhưng vẫn liên quan đến chủ đề gốc." : h <= 80 ? n = "Tạo một phiên bản khá khác biệt với góc nhìn mới, cấu trúc khác, nhưng vẫn giữ một số yếu tố cốt lõi." : n = "Tạo một phiên bản hoàn toàn mới với cách tiếp cận, phong cách, và chi tiết khác biệt, chỉ giữ lại chủ đề chung.";
    const w = `Bạn là một chuyên gia viết kịch bản sáng tạo. Dưới đây là một kịch bản video gốc:

---
${g}
---

Nhiệm vụ của bạn: Tạo một phiên bản biến thể của kịch bản này với mức độ khác biệt khoảng ${h}%.

Hướng dẫn: ${n}

Yêu cầu:
1. Kịch bản mới phải có cùng độ dài và chi tiết như bản gốc
2. Giữ định dạng văn bản thuần túy, rõ ràng
3. Đảm bảo kịch bản vẫn phù hợp để tạo prompt cho AI
4. Không giải thích hay bình luận, chỉ viết kịch bản mới

Hãy viết kịch bản biến thể:`, o = await fetch(k, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${f}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: c,
        messages: [{ role: "user", content: w }],
        max_completion_tokens: 16e3
      })
    });
    if (!o.ok) {
      const O = ((l = (await o.json().catch(() => ({}))).error) == null ? void 0 : l.message) || o.statusText;
      throw o.status === 401 ? new Error("OpenAI API Key không hợp lệ.") : o.status === 429 ? new Error("OpenAI: Đã vượt quá giới hạn API.") : new Error(`Lỗi OpenAI API: ${O}`);
    }
    const s = await o.json();
    let r = "";
    if ((u = (m = (p = s.choices) == null ? void 0 : p[0]) == null ? void 0 : m.message) != null && u.content ? r = s.choices[0].message.content : (A = (y = s.choices) == null ? void 0 : y[0]) != null && A.text && (r = s.choices[0].text), !r)
      throw new Error("OpenAI: Không nhận được phản hồi từ model.");
    return console.log("🤖 [OpenAI Variation] Complete"), r;
  } catch (n) {
    throw n instanceof Error ? n : new Error("Lỗi không xác định khi gọi OpenAI API");
  }
}
export {
  S as analyzeWithOpenAI,
  K as generateVariationWithOpenAI
};
