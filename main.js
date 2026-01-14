document.addEventListener("DOMContentLoaded", () => {
  // Canvas Particle Background
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];

  function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      else if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      else if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      // Gold particles with opacity
      ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function createParticles() {
    particles = [];
    const count = (canvas.width * canvas.height) / 15000;
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }

  window.addEventListener("resize", () => {
    initCanvas();
    createParticles();
  });

  initCanvas();
  createParticles();
  animateParticles();

  // Intersection Observer for animations
  const observerOptions = { threshold: 0.15 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".animate-on-scroll")
    .forEach((el) => observer.observe(el));

  // Smooth scroll for navigation
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});

// Chatbot Logic
const chatBubble = document.getElementById("chat-bubble");
const chatWindow = document.getElementById("chat-window");
const closeChat = document.getElementById("close-chat");
const sendChat = document.getElementById("send-chat");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

// GEMINI CONFIG
const GEMINI_API_KEY = "AIzaSyANTTxQ9lByGzz8V5FoJp0ww9cqXuk82Yw";
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";

let conversationHistory = []; // Session history for bubble chat

const fullKnowledgeBase = {
  chapters: [
    {
      title: "Chương I: Khái lược về Triết học",
      sections: [
        {
          title: "Triết học là gì?",
          keywords: [
            "khái niệm triết học",
            "nguồn gốc triết học",
            "định nghĩa triết học",
            "triet hoc la gi",
            "the nao la triet hoc",
          ],
          content:
            "Triết học là hệ thống tri thức lý luận chung nhất của con người về thế giới; về vị trí, vai trò của con người trong thế giới ấy.\n\n### Nguồn gốc:\n1. **Nguồn gốc nhận thức:** Con người đạt đến khả năng khái quát hóa, rút ra cái chung từ muôn vàn sự kiện riêng lẻ.\n2. **Nguồn gốc xã hội:** Sự phân chia lao động trí óc và lao động chân tay, xã hội hình thành tầng lớp trí thức.",
        },
        {
          title: "Vấn đề cơ bản của triết học",
          keywords: [
            "van de co ban",
            "mối quan hệ giữa vật chất và ý thức",
            "tu duy va ton tai",
            "vat chat hay y thuc co truoc",
          ],
          content:
            'Theo Ăngghen: "Vấn đề cơ bản lớn của mọi triết học là vấn đề quan hệ giữa tư duy với tồn tại (vật chất và ý thức)".\n\n**Vấn đề có 2 mặt:**\n- **Mặt thứ nhất:** Cái nào có trước? Cái nào quyết định cái nào? (Dẫn đến sự phân chia Duy vật và Duy tâm).\n- **Mặt thứ hai:** Con người có khả năng nhận thức được thế giới hay không?',
        },
        {
          title: "Chủ nghĩa duy vật và Chủ nghĩa duy tâm",
          keywords: ["duy vat", "duy tam", "siêu hình", "biện chứng"],
          content:
            "- **Chủ nghĩa duy vật:** Thừa nhận vật chất có trước, quyết định ý thức. Có 3 hình thức: Chất phác (Cổ đại), Siêu hình (Thế kỷ XVII-XVIII) và Biện chứng (Mác-Ăngghen).\n- **Chủ nghĩa duy tâm:** Thừa nhận ý thức/tinh thần có trước. Chia thành: **Duy tâm chủ quan** và **Duy tâm khách quan**.",
        },
      ],
    },
    {
      title: "Chương II: Vật chất và Ý thức (Core)",
      sections: [
        {
          title: "Định nghĩa Vật chất của Lênin",
          keywords: [
            "vật chất là gì",
            "dinh nghia vat chat",
            "lenin dinh nghia vat chat",
            "vat chat la gi",
            "pham tru vat chat",
          ],
          content:
            'V.I. Lênin định nghĩa: "Vật chất là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác của chúng ta chép lại, chụp lại, phản ánh và tồn tại không lệ thuộc vào cảm giác".\n\n**Ý nghĩa:**\n- Giải quyết triệt để 2 mặt vấn đề cơ bản của triết học.\n- Bác bỏ thuyết không thể biết và chủ nghĩa duy tâm.\n- Tạo cơ sở lý luận cho các nhà khoa học tự nhiên.',
        },
        {
          title: "Nguồn gốc của Ý thức",
          keywords: [
            "nguồn gốc ý thức",
            "y thuc tu dau ma co",
            "nguon goc tu nhien",
            "nguon goc xa hoi",
            "bo nao nguoi",
          ],
          content:
            "Ý thức có hai nguồn gốc chính:\n1. **Nguồn gốc tự nhiên:** Bộ não người phát triển cao và sự tác động của thế giới khách quan tạo nên sự phản ánh.\n2. **Nguồn gốc xã hội (Quyết định):** Gồm **Lao động** và **Ngôn ngữ**. Lao động giúp con người thay đổi thế giới, ngôn ngữ là 'vỏ vật chất' của tư duy.",
        },
        {
          title: "Bản chất của Ý thức",
          keywords: ["bản chất ý thức", "y thuc la gi", "ban chat cua y thuc"],
          content:
            "Ý thức là sự phản ánh năng động, sáng tạo thế giới khách quan vào bộ não người; là hình ảnh chủ quan của thế giới khách quan.\n\n**Tính sáng tạo thể hiện ở:**\n- Trao đổi thông tin giữa chủ thể và đối tượng.\n- Mô hình hóa đối tượng trong tư duy.\n- Biến đổi mô hình thành thực thể thông qua thực tiễn.",
        },
        {
          title: "Mối quan hệ Biện chứng giữa Vật chất và Ý thức",
          keywords: [
            "mối quan hệ",
            "quan he bien chung",
            "vat chat quyet dinh y thuc",
            "vai tro cua y thuc",
            "su khac nhau giua vat chat va y thuc",
          ],
          content:
            "Vật chất và ý thức có mối quan hệ tác động qua lại, trong đó vật chất giữ vai trò quyết định.\n\n1. **Vật chất quyết định ý thức:** Quyết định nguồn gốc, nội dung và sự biến đổi của ý thức.\n2. **Ý thức có tính độc lập tương đối:** Tác động ngược lại vật chất thông qua hoạt động thực tiễn của con người. Ý thức đúng đắn giúp thành công, ý thức sai lầm dẫn đến thất bại.",
        },
      ],
    },
    {
      title: "Chương III: Lịch sử và Các học thuyết khác",
      sections: [
        {
          title: "Phật giáo và Nhân sinh",
          keywords: [
            "phât giao",
            "buddha",
            "tứ diệu đế",
            "vô ngã",
            "vô thường",
            "triet hoc phat giao",
          ],
          content:
            'Triết học Phật giáo tập trung vào vấn đề nhân sinh và giải thoát.\n\n- **Vô ngã:** Không có cái "tôi" vĩnh hằng.\n- **Vô thường:** Mọi vật luôn biến đổi.\n- **Tứ diệu đế:** 4 chân lý về khổ đau và con đường diệt khổ.',
        },
        {
          title: "Nho gia và Đạo đức",
          keywords: [
            "nho gia",
            "khổng tử",
            "nhân nghĩa",
            "tam cương",
            "ngũ thường",
          ],
          content:
            "Chú trọng vào quản lý xã hội và đạo đức con người. Đề cao các giá trị Nhân, Nghĩa, Lễ, Trí, Tín và học thuyết Chính danh.",
        },
        {
          title: "Triết học Hy Lạp cổ đại",
          keywords: ["hy lạp", "heraclit", "democrit", "platon", "aristot"],
          content:
            "Đặt nền móng cho triết học phương Tây với các tư tưởng về nguyên tử (Democrit), ý niệm (Platon) và phép biện chứng sơ khai (Heraclit).",
        },
      ],
    },
  ],
};

// System prompt for Gemini - Linh hoạt hơn
const SYSTEM_PROMPT = `Bạn là một trợ lý AI thông minh chuyên về Triết học Mác - Lênin, hỗ trợ sinh viên học tập.

## QUAN TRỌNG - Quy tắc trả lời:
1. LUÔN trả lời trực tiếp câu hỏi của người dùng, KHÔNG lặp lại lời chào hay giới thiệu bản thân
2. Nếu câu hỏi bằng tiếng Việt → trả lời tiếng Việt
3. Nếu câu hỏi bằng tiếng Anh → trả lời tiếng Anh  
4. Nếu câu hỏi bằng ngôn ngữ khác → trả lời bằng ngôn ngữ đó
5. Sử dụng Markdown để format câu trả lời
6. Với câu hỏi về Triết học Mác-Lênin, ưu tiên sử dụng kiến thức tham khảo bên dưới
7. Với câu hỏi NGOÀI chủ đề triết học, VẪN trả lời bình thường như một AI assistant thông thường
8. KHÔNG BAO GIỜ từ chối trả lời với lý do "ngoài phạm vi"

## Kiến thức tham khảo về Triết học Mác-Lênin:
${JSON.stringify(fullKnowledgeBase, null, 2)}

## Ví dụ cách trả lời:
- Nếu hỏi "Hello" → Trả lời: "Hello! How can I help you today?"
- Nếu hỏi "Vật chất là gì?" → Trả lời dựa trên kiến thức tham khảo
- Nếu hỏi về thời tiết → Trả lời bình thường như AI assistant`;

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = `message ${sender}`;

  if (sender === "bot") {
    // Use marked.js for bot responses
    if (typeof marked !== "undefined") {
      div.innerHTML = marked.parse(text);
    } else {
      div.innerHTML = text.replace(/\n/g, "<br>");
    }
  } else {
    div.textContent = text;
  }

  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function callGeminiAPI(userMessage) {
  // Thêm tin nhắn user vào conversation history
  conversationHistory.push({
    role: "user",
    parts: [{ text: userMessage }],
  });

  const requestBody = {
    // System Instruction - Gemini 1.5 style
    systemInstruction: {
      parts: [{ text: SYSTEM_PROMPT }],
    },
    contents: conversationHistory,
    generationConfig: {
      temperature: 0.9,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 2048,
    },
  };

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "API request failed");
    }

    const data = await response.json();
    const botResponse = data.candidates[0].content.parts[0].text;

    // Thêm response của bot vào conversation history
    conversationHistory.push({
      role: "model",
      parts: [{ text: botResponse }],
    });

    return botResponse;
  } catch (error) {
    throw error;
  }
}

async function handleBotResponse(userText) {
  // Show typing indicator
  const typingDiv = document.createElement("div");
  typingDiv.className = "message bot";
  typingDiv.innerHTML =
    '<span class="typing-dot">.</span><span class="typing-dot">.</span><span class="typing-dot">.</span>';
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  try {
    const response = await callGeminiAPI(userText);

    chatMessages.removeChild(typingDiv);
    addMessage(response, "bot");
  } catch (error) {
    chatMessages.removeChild(typingDiv);
    console.error("Gemini API Error:", error);
    addMessage(`❌ Đã xảy ra lỗi: ${error.message}. Vui lòng thử lại.`, "bot");
  }
}

if (chatBubble) {
  chatBubble.addEventListener("click", () => {
    chatWindow.classList.toggle("active");
  });
}

if (closeChat) {
  closeChat.addEventListener("click", () => {
    chatWindow.classList.remove("active");
  });
}

if (sendChat) {
  sendChat.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (text) {
      addMessage(text, "user");
      chatInput.value = "";
      handleBotResponse(text);
    }
  });
}

if (chatInput) {
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendChat.click();
  });
}
