import React, { useState, useRef, useEffect } from "react";
import "./LiveChat.css";

const DUMMY_RESPONSES = [
  "Merhaba! Size nasıl yardımcı olabilirim?",
  "Siparişinizle ilgili bir sorunuz mu var?",
  "Favori ürünlerinizi görmek ister misiniz?",
  "Kargo süresiyle ilgili bilgi almak ister misiniz?",
  "Teşekkürler! Size başka nasıl yardımcı olabilirim?"
];

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: DUMMY_RESPONSES[0] }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    setTimeout(() => {
      const random = DUMMY_RESPONSES[Math.floor(Math.random() * DUMMY_RESPONSES.length)];
      setMessages((msgs) => [...msgs, { from: "bot", text: random }]);
    }, 900);
    setInput("");
  };

  return (
    <div className={"live-chat-container" + (isOpen ? " open" : "") }>
      <button className="live-chat-toggle" onClick={() => setIsOpen((v) => !v)}>
        💬 {isOpen ? "Kapat" : "Canlı Destek"}
      </button>
      {isOpen && (
        <div className="live-chat-box">
          <div className="live-chat-header">Canlı Destek <span onClick={() => setIsOpen(false)} style={{cursor:'pointer',float:'right'}}>✖</span></div>
          <div className="live-chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={"chat-msg " + msg.from}>{msg.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form className="live-chat-input" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Mesajınızı yazın..."
              autoFocus
            />
            <button type="submit">Gönder</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
