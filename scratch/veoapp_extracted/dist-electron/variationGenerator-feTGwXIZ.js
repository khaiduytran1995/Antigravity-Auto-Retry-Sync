async function s(c, i, e, o) {
  try {
    const { GoogleGenAI: n } = await import("./index-Cc1J6kp6.js"), g = new n({ apiKey: e });
    let t = "";
    i <= 20 ? t = "Thay đổi nhẹ một số chi tiết nhỏ, giữ nguyên cấu trúc và ý chính." : i <= 40 ? t = "Thay đổi một số chi tiết và cách diễn đạt, nhưng giữ nguyên ý tưởng chính." : i <= 60 ? t = "Thay đổi đáng kể cách kể chuyện, góc nhìn, hoặc trọng tâm, nhưng vẫn liên quan đến chủ đề gốc." : i <= 80 ? t = "Tạo một phiên bản khá khác biệt với góc nhìn mới, cấu trúc khác, nhưng vẫn giữ một số yếu tố cốt lõi." : t = "Tạo một phiên bản hoàn toàn mới với cách tiếp cận, phong cách, và chi tiết khác biệt, chỉ giữ lại chủ đề chung.";
    const r = `Bạn là một chuyên gia viết kịch bản sáng tạo. Dưới đây là một kịch bản video gốc:

---
${c}
---

Nhiệm vụ của bạn: Tạo một phiên bản biến thể của kịch bản này với mức độ khác biệt khoảng ${i}%.

Hướng dẫn: ${t}

Yêu cầu:
1. Kịch bản mới phải có cùng độ dài và chi tiết như bản gốc
2. Giữ định dạng văn bản thuần túy, rõ ràng
3. Đảm bảo kịch bản vẫn phù hợp để tạo prompt cho AI
4. Không giải thích hay bình luận, chỉ viết kịch bản mới

Hãy viết kịch bản biến thể:`, h = await g.models.generateContent({
      model: o,
      contents: {
        parts: [{ text: r }]
      }
    });
    if (!(h != null && h.text))
      throw new Error("Gemini API không trả về kết quả");
    return h.text.trim();
  } catch (n) {
    throw n instanceof Error ? n.message.includes("API_KEY_INVALID") || n.message.includes("API key") ? new Error("API Key không hợp lệ. Vui lòng kiểm tra lại.") : n.message.includes("QUOTA_EXCEEDED") || n.message.includes("quota") ? new Error("Đã vượt quá giới hạn API. Vui lòng thử lại sau.") : new Error(`Lỗi Gemini API: ${n.message}`) : n;
  }
}
export {
  s as generateVariation
};
