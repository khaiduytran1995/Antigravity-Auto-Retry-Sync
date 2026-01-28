import k from "fs/promises";
async function w(e, a, g, n) {
  try {
    const { GoogleGenAI: t } = await import("./index-Cc1J6kp6.js"), u = new t({ apiKey: a });
    n(10);
    const m = await Promise.all(
      e.map(async (c, i) => {
        const v = (await k.readFile(c)).toString("base64"), y = 10 + i / e.length * 30;
        return n(y), {
          inlineData: {
            data: v,
            mimeType: "image/jpeg"
          }
        };
      })
    );
    n(40);
    const s = `Bạn là một chuyên gia phân tích video. Hãy phân tích các khung hình này từ một video và tạo một kịch bản tóm tắt chi tiết.

Trước hết, hãy thêm một mục ở đầu kết quả với tiêu đề "Nhân vật:" mô tả sơ bộ về nhân vật chính (vóc dáng, kiểu tóc, trang phục, độ tuổi, vai trò). Nếu nhân vật là trẻ em, hãy thay thế cách gọi bằng học sinh tương ứng với độ tuổi: 1-5 tuổi dùng "học sinh mầm non", 5-12 tuổi dùng "học sinh tiểu học".

Yêu cầu:
1. Mô tả các cảnh chính và hành động quan trọng
2. Xác định dòng chảy câu chuyện/nội dung
3. Ghi chú về các yếu tố thị giác quan trọng (màu sắc, bố cục, ánh sáng)
4. Tóm tắt thông điệp hoặc mục đích của video
5. Kịch bản phải phù hợp để tạo prompt chi tiết cho các ứng dụng AI khác

Hãy viết kịch bản dưới dạng văn bản thuần túy, rõ ràng và có cấu trúc.`;
    n(50);
    const h = await u.models.generateContent({
      model: g,
      contents: {
        parts: [
          ...m,
          { text: s }
        ]
      }
    });
    if (!(h != null && h.text))
      throw new Error("Gemini API không trả về kết quả");
    const l = h.text.trim(), o = (c) => c.replace(/[\*\_]/g, "").trim().toLowerCase(), d = [
      "tuyệt vời, tôi sẽ giúp bạn phân tích và tạo kịch bản chi tiết cho video này",
      "tuyệt vời! dưới đây là kịch bản phân tích chi tiết từ các khung hình bạn cung cấp",
      "tuyệt vời! dưới đây là kịch bản phân tích chi tiết từ các khung hình bạn đã cung cấp",
      "4. tóm tắt thông điệp hoặc mục đích của video",
      "5. kịch bản chi tiết cho các ứng dụng ai khác",
      "lưu ý:",
      "bạn có thể sử dụng kịch bản này để tạo prompt cho các ứng dụng ai như tạo ảnh, video hoặc viết truyện.",
      "bạn có thể thêm các chi tiết cụ thể hơn vào kịch bản, chẳng hạn như mô tả trang phục, biểu cảm khuôn mặt, hoặc các hành động nhỏ khác.",
      'nếu có lời thoại, hãy thêm chúng vào phần "narrative".',
      "hy vọng bản phân tích và kịch bản này hữu ích cho bạn!"
    ].map(o), p = l.split(/\r?\n/).filter((c) => {
      const i = o(c);
      return i ? !d.some((r) => i.includes(r)) : !0;
    }).join(`
`).replace(/\n{3,}/g, `

`).trim();
    return n(100), p;
  } catch (t) {
    throw t instanceof Error ? t.message.includes("API_KEY_INVALID") || t.message.includes("API key") ? new Error("API Key không hợp lệ. Vui lòng kiểm tra lại.") : t.message.includes("QUOTA_EXCEEDED") || t.message.includes("quota") ? new Error("Đã vượt quá giới hạn API. Vui lòng thử lại sau.") : t.message.includes("MODEL_NOT_FOUND") || t.message.includes("model") ? new Error("Model không tồn tại. Vui lòng chọn model khác.") : new Error(`Lỗi Gemini API: ${t.message}`) : t;
  }
}
export {
  w as analyzeWithGemini
};
