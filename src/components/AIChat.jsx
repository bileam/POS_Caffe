import { useState, useContext, useRef, useEffect } from "react";
import { TransaksiContext } from "../Context/Transaksi";
import { askAI } from "../utils/aiAssistant";

const AIChat = ({ className = "" }) => {
  const ctx = useContext(TransaksiContext);

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef(null);

  const handleAsk = async (e) => {
    e.preventDefault();

    if (!question.trim()) return;

    const userQuestion = question;

    // tampilkan pesan user
    setMessages((prev) => [...prev, { role: "user", text: userQuestion }]);

    setQuestion("");

    // AI mulai mengetik
    setTyping(true);

    const answer = await askAI(userQuestion, ctx);

    // delay 2 detik
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", text: answer }]);
      setTyping(false);
    }, 2000);
  };

  // auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`bg-white shadow-xl rounded-xl ${className} flex flex-col`}
    >
      <h2 className="font-bold mb-3 text-green-600">AI Kasir</h2>
      <span className="w-full border mt-2 inline-block"></span>

      {/* Chat Area */}
      <div className="flex-1 overflow-auto text-sm space-y-2 mb-3 mt-2">
        {messages.map((msg, index) => (
          <div key={index}>
            <span
              className={
                msg.role === "ai"
                  ? "text-green-600 font-semibold"
                  : "text-black font-bold"
              }
            >
              {msg.role === "user" ? "Anda: " : "AI: "}
            </span>

            <span
              className={`whitespace-pre-line ${
                msg.role === "ai" ? "text-gray-700" : "text-black"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}

        {/* indikator mengetik */}
        {typing && (
          <div className="text-green-600 italic animate-pulse">
            AI sedang mengetik...
          </div>
        )}

        <div ref={chatEndRef}></div>
      </div>

      {/* Form */}
      <form onSubmit={handleAsk} className="flex gap-2 w-full">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Tanya sesuatu..."
          className="border p-2 rounded flex-1"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Tanyakan
        </button>
      </form>
    </div>
  );
};

export default AIChat;
