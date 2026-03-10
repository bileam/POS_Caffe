import { useState, useContext } from "react";
import { TransaksiContext } from "../Context/Transaksi";
import { askAI } from "../utils/aiAssistant";

const AIChat = () => {
  const ctx = useContext(TransaksiContext);

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const handleAsk = () => {
    if (!question.trim()) return;

    const answer = askAI(question, ctx);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      { role: "ai", text: answer },
    ]);

    setQuestion("");
  };

  return (
    <div className=" bg-white shadow-xl rounded-xl p-2 w-full ">
      <h2 className="font-bold mb-3">AI Kasir</h2>

      <div className="h-48 overflow-auto text-sm space-y-2 mb-3">
        {messages.map((msg, index) => (
          <div key={index}>
            <span
              className={msg.role === "ai" ? "text-green-600" : "text-black"}
            >
              {msg.role === "user" ? "Anda: " : "AI: "}
            </span>
            {msg.text}
          </div>
        ))}
      </div>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Tanya sesuatu..."
        className="border p-2 w-full rounded"
      />

      <button
        onClick={handleAsk}
        className="bg-green-600 text-white px-3 py-1 mt-2 rounded w-full"
      >
        Tanya
      </button>
    </div>
  );
};

export default AIChat;
