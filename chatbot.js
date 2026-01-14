// ====================================
// GOOGLE GEMINI AI CONFIGURATION
// ====================================
// Lấy API key miễn phí tại: https://aistudio.google.com/app/apikey
const GEMINI_API_KEY = 'AIzaSyANTTxQ9lByGzz8V5FoJp0ww9cqXuk82Yw';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent';

// Knowledge Base (Embedded for context)
const fullKnowledgeBase = {
    "chapters": [
        {
            "title": "Chương I: Khái lược về Triết học",
            "sections": [
                {
                    "title": "Triết học là gì?",
                    "keywords": ["khái niệm triết học", "nguồn gốc triết học", "định nghĩa triết học", "triet hoc la gi", "the nao la triet hoc"],
                    "content": "Triết học là hệ thống tri thức lý luận chung nhất của con người về thế giới; về vị trí, vai trò của con người trong thế giới ấy.\n\n### Nguồn gốc:\n1. **Nguồn gốc nhận thức:** Con người đạt đến khả năng khái quát hóa, rút ra cái chung từ muôn vàn sự kiện riêng lẻ.\n2. **Nguồn gốc xã hội:** Sự phân chia lao động trí óc và lao động chân tay, xã hội hình thành tầng lớp trí thức."
                },
                {
                    "title": "Vấn đề cơ bản của triết học",
                    "keywords": ["van de co ban", "mối quan hệ giữa vật chất và ý thức", "tu duy va ton tai", "vat chat hay y thuc co truoc"],
                    "content": "Theo Ăngghen: \"Vấn đề cơ bản lớn của mọi triết học là vấn đề quan hệ giữa tư duy với tồn tại (vật chất và ý thức)\".\n\n**Vấn đề có 2 mặt:**\n- **Mặt thứ nhất:** Cái nào có trước? Cái nào quyết định cái nào? (Dẫn đến sự phân chia Duy vật và Duy tâm).\n- **Mặt thứ hai:** Con người có khả năng nhận thức được thế giới hay không?"
                },
                {
                    "title": "Chủ nghĩa duy vật và Chủ nghĩa duy tâm",
                    "keywords": ["duy vat", "duy tam", "siêu hình", "biện chứng"],
                    "content": "- **Chủ nghĩa duy vật:** Thừa nhận vật chất có trước, quyết định ý thức. Có 3 hình thức: Chất phác (Cổ đại), Siêu hình (Thế kỷ XVII-XVIII) và Biện chứng (Mác-Ăngghen).\n- **Chủ nghĩa duy tâm:** Thừa nhận ý thức/tinh thần có trước. Chia thành: **Duy tâm chủ quan** (mọi vật là phức hợp cảm giác) và **Duy tâm khách quan** (ý niệm tuyệt đối có trước thế giới)."
                }
            ]
        },
        {
            "title": "Chương II: Vật chất và Ý thức (Core)",
            "sections": [
                {
                    "title": "Định nghĩa Vật chất của Lênin",
                    "keywords": ["vật chất là gì", "dinh nghia vat chat", "lenin dinh nghia vat chat", "vat chat la gi", "pham tru vat chat"],
                    "content": "V.I. Lênin định nghĩa: \"Vật chất là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác của chúng ta chép lại, chụp lại, phản ánh và tồn tại không lệ thuộc vào cảm giác\".\n\n**Ý nghĩa:**\n- Giải quyết triệt để 2 mặt vấn đề cơ bản của triết học.\n- Bác bỏ thuyết không thể biết và chủ nghĩa duy tâm.\n- Tạo cơ sở lý luận cho các nhà khoa học tự nhiên."
                },
                {
                    "title": "Nguồn gốc của Ý thức",
                    "keywords": ["nguồn gốc ý thức", "y thuc tu dau ma co", "nguon goc tu nhien", "nguon goc xa hoi", "bo nao nguoi"],
                    "content": "Ý thức có hai nguồn gốc chính:\n1. **Nguồn gốc tự nhiên:** Bộ não người phát triển cao và sự tác động của thế giới khách quan tạo nên sự phản ánh.\n2. **Nguồn gốc xã hội (Quyết định):** Gồm **Lao động** và **Ngôn ngữ**. Lao động giúp con người thay đổi thế giới, ngôn ngữ là 'vỏ vật chất' của tư duy."
                },
                {
                    "title": "Bản chất của Ý thức",
                    "keywords": ["bản chất ý thức", "y thuc la gi", "ban chat cua y thuc"],
                    "content": "Ý thức là sự phản ánh năng động, sáng tạo thế giới khách quan vào bộ não người; là hình ảnh chủ quan của thế giới khách quan.\n\n**Tính sáng tạo thể hiện ở:**\n- Trao đổi thông tin giữa chủ thể và đối tượng.\n- Mô hình hóa đối tượng trong tư duy.\n- Biến đổi mô hình thành thực thể thông qua thực tiễn."
                },
                {
                    "title": "Mối quan hệ Biện chứng giữa Vật chất và Ý thức",
                    "keywords": ["mối quan hệ", "quan he bien chung", "vat chat quyet dinh y thuc", "vai tro cua y thuc", "su khac nhau giua vat chat va y thuc"],
                    "content": "Vật chất và ý thức có mối quan hệ tác động qua lại, trong đó vật chất giữ vai trò quyết định.\n\n1. **Vật chất quyết định ý thức:** Quyết định nguồn gốc, nội dung và sự biến đổi của ý thức.\n2. **Ý thức có tính độc lập tương đối:** Tác động ngược lại vật chất thông qua hoạt động thực tiễn của con người. Ý thức đúng đắn giúp thành công, ý thức sai lầm dẫn đến thất bại."
                }
            ]
        },
        {
            "title": "Chương III: Lịch sử và Các học thuyết khác",
            "sections": [
                {
                    "title": "Phật giáo và Nhân sinh",
                    "keywords": ["phât giao", "buddha", "tứ diệu đế", "vô ngã", "vô thường", "triet hoc phat giao"],
                    "content": "Triết học Phật giáo tập trung vào vấn đề nhân sinh và giải thoát.\n\n- **Vô ngã:** Không có cái \"tôi\" vĩnh hằng.\n- **Vô thường:** Mọi vật luôn biến đổi.\n- **Tứ diệu đế:** 4 chân lý về khổ đau và con đường diệt khổ."
                },
                {
                    "title": "Nho gia và Đạo đức",
                    "keywords": ["nho gia", "khổng tử", "nhân nghĩa", "tam cương", "ngũ thường"],
                    "content": "Chú trọng vào quản lý xã hội và đạo đức con người. Đề cao các giá trị Nhân, Nghĩa, Lễ, Trí, Tín và học thuyết Chính danh."
                },
                {
                    "title": "Triết học Hy Lạp cổ đại",
                    "keywords": ["hy lạp", "heraclit", "democrit", "platon", "aristot"],
                    "content": "Đặt nền móng cho triết học phương Tây với các tư tưởng về nguyên tử (Democrit), ý niệm (Platon) và phép biện chứng sơ khai (Heraclit)."
                }
            ]
        }
    ]
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

// State Management
let chats = JSON.parse(localStorage.getItem('meta_phils_chats')) || [];
let activeChatId = null;
let conversationHistory = []; // Lưu lịch sử hội thoại cho context

// DOM Elements
const chatHistory = document.getElementById('chat-history');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const newChatBtn = document.getElementById('new-chat-btn');
const deleteChatBtn = document.getElementById('delete-chat-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const aiAvatar = document.getElementById('ai-avatar');

// Core Functions
function init() {
    renderHistory();
    if (chats.length > 0) {
        selectChat(chats[0].id);
    }
}

function renderHistory() {
    chatHistory.innerHTML = '';
    chats.forEach(chat => {
        const div = document.createElement('div');
        div.className = `history-item ${chat.id === activeChatId ? 'active' : ''}`;
        div.onclick = () => selectChat(chat.id);

        const title = chat.messages.length > 0 ? chat.messages[0].text.substring(0, 30) + '...' : 'Cuộc trò chuyện mới';
        div.innerHTML = `<span>${title}</span>`;
        chatHistory.appendChild(div);
    });
}

function selectChat(id) {
    activeChatId = id;
    const chat = chats.find(c => c.id === id);

    // Khôi phục conversation history từ chat messages
    conversationHistory = chat.messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
    }));

    renderMessages(chat);
    renderHistory();
    welcomeScreen.style.display = chat.messages.length > 0 ? 'none' : 'block';
}

function renderMessages(chat) {
    chatMessages.innerHTML = '';
    if (chat.messages.length === 0) {
        chatMessages.appendChild(welcomeScreen);
        welcomeScreen.style.display = 'block';
        return;
    }

    chat.messages.forEach(msg => {
        addMessageToUI(msg.text, msg.sender);
    });
}

function addMessageToUI(text, sender) {
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    if (sender === 'bot') {
        if (typeof marked !== 'undefined') {
            div.innerHTML = marked.parse(text);
        } else {
            div.innerHTML = text.replace(/\n/g, '<br>');
        }
    } else {
        div.textContent = text;
    }
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function createNewChat() {
    const newChat = {
        id: Date.now().toString(),
        messages: [],
        timestamp: new Date()
    };
    chats.unshift(newChat);
    conversationHistory = []; // Reset conversation history
    saveChats();
    selectChat(newChat.id);
}

function saveChats() {
    localStorage.setItem('meta_phils_chats', JSON.stringify(chats));
}

// ====================================
// GEMINI AI INTEGRATION
// ====================================
async function callGeminiAPI(userMessage) {
    // Thêm tin nhắn user vào conversation history
    conversationHistory.push({
        role: 'user',
        parts: [{ text: userMessage }]
    });

    const requestBody = {
        // System Instruction - Gemini 1.5 style
        systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
        },
        contents: conversationHistory,
        generationConfig: {
            temperature: 0.9,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
        }
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'API request failed');
    }

    const data = await response.json();
    const botResponse = data.candidates[0].content.parts[0].text;

    // Thêm response của bot vào conversation history
    conversationHistory.push({
        role: 'model',
        parts: [{ text: botResponse }]
    });

    return botResponse;
}

async function handleBotResponse(userText) {
    aiAvatar.classList.add('thinking');

    const currentChatId = activeChatId;

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot';
    typingDiv.innerHTML = '<span class="typing-dot">.</span><span class="typing-dot">.</span><span class="typing-dot">.</span>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        // Kiểm tra API key
        if (GEMINI_API_KEY === 'YOUR_API_KEY_HERE' || GEMINI_API_KEY === '') {
            throw new Error('API_KEY_NOT_SET');
        }

        // Gọi Gemini API
        const response = await callGeminiAPI(userText);

        aiAvatar.classList.remove('thinking');
        chatMessages.removeChild(typingDiv);

        const activeChat = chats.find(c => c.id === currentChatId);
        if (!activeChat) return;

        activeChat.messages.push({ text: response, sender: 'bot' });
        saveChats();

        if (activeChatId === currentChatId) {
            addMessageToUI(response, 'bot');
            welcomeScreen.style.display = 'none';
        }

        renderHistory();

    } catch (error) {
        aiAvatar.classList.remove('thinking');
        if (chatMessages.contains(typingDiv)) {
            chatMessages.removeChild(typingDiv);
        }
        console.error('Gemini API Error:', error);

        let errorMessage;
        if (error.message === 'API_KEY_NOT_SET') {
            errorMessage = `⚠️ ** Chưa cấu hình API Key! **

    Để sử dụng AI, bạn cần:
1. Truy cập[Google AI Studio](https://aistudio.google.com/app/apikey)
    2. Đăng nhập bằng tài khoản Google
3. Nhấn "Create API Key" 
4. Copy API key và dán vào file \`chatbot.js\` (dòng 5)

\`\`\`javascript
const GEMINI_API_KEY = 'your-api-key-here';
\`\`\``;
        } else {
            errorMessage = `❌ **Đã xảy ra lỗi khi kết nối AI**

Lỗi: ${error.message}

Vui lòng kiểm tra:
- API key có đúng không
- Kết nối internet có ổn định không`;
        }

        const activeChat = chats.find(c => c.id === currentChatId);
        if (activeChat) {
            activeChat.messages.push({ text: errorMessage, sender: 'bot' });
            saveChats();

            if (activeChatId === currentChatId) {
                addMessageToUI(errorMessage, 'bot');
            }
        }
    }
}

// Event Listeners
sendBtn.onclick = () => {
    const text = chatInput.value.trim();
    if (!text) return;

    if (!activeChatId) createNewChat();

    const activeChat = chats.find(c => c.id === activeChatId);
    activeChat.messages.push({ text, sender: 'user' });

    welcomeScreen.style.display = 'none';
    addMessageToUI(text, 'user');
    chatInput.value = '';
    chatInput.style.height = 'auto';

    saveChats();
    handleBotResponse(text);
};

chatInput.oninput = function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
};

chatInput.onkeydown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendBtn.click();
    }
};

newChatBtn.onclick = createNewChat;

deleteChatBtn.onclick = () => {
    if (!activeChatId) return;

    const chatTitle = chats.find(c => c.id === activeChatId)?.messages[0]?.text.substring(0, 20) || "Cuộc trò chuyện này";

    if (confirm(`Bạn có chắc chắn muốn xóa "${chatTitle}..."?`)) {
        chats = chats.filter(c => c.id !== activeChatId);
        saveChats();

        if (chats.length > 0) {
            selectChat(chats[0].id);
        } else {
            activeChatId = null;
            conversationHistory = [];
            chatMessages.innerHTML = '';
            chatMessages.appendChild(welcomeScreen);
            welcomeScreen.style.display = 'block';
            renderHistory();
        }
    }
};

function quickAsk(text) {
    chatInput.value = text;
    sendBtn.click();
}

// Global quickAsk for the onclick in HTML
window.quickAsk = quickAsk;

// Auto-init
init();
