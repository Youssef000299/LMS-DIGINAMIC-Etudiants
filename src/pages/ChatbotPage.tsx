import React, { useState } from "react";

interface Message {
  id: number;
  sender: "user" | "bot";
  content: string;
  timestamp: string;
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMsg: Message = {
      id: messages.length + 1,
      sender: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, userMsg]);
    setInputValue("");

    // Simuler une réponse du chatbot
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        sender: "bot",
        content: simulateBotResponse(inputValue),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((msgs) => [...msgs, botResponse]);
    }, 1000);
  };

  const simulateBotResponse = (question: string): string => {
    // Ici, on simule une réponse. Dans un vrai cas, vous appelleriez une API.
    if (question.toLowerCase().includes("bonjour")) {
      return "Bonjour ! Comment puis-je vous aider aujourd'hui ?";
    } else if (question.toLowerCase().includes("cours")) {
      return "Vous pouvez consulter le catalogue des cours pour découvrir notre offre.";
    } else {
      return "Je n'ai pas la réponse exacte, mais je peux essayer de vous aider à explorer le sujet.";
    }
  };

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <h1>Chatbot Intelligent</h1>
        <p>Posez vos questions, le bot tentera d'y répondre.</p>
      </header>
      <div className="chatbot-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-bubble ${msg.sender}`}>
            <p>{msg.content}</p>
            <span className="timestamp">{msg.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Tapez votre question..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Envoyer</button>
      </div>
    </div>
  );
};

export default ChatbotPage;
