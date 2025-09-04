import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, History, X } from "lucide-react";
import { useChat } from "../context/ChatContext";
import MessageBubble from "./MessageBubble";
import LoadingIndicator from "./LoadingIndicator";
import ChatHistory from "./ChatHistory";

const ChatInterface: React.FC = () => {
  const { messages, isLoading, sendMessage, clearHistory } = useChat();
  const [input, setInput] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    await sendMessage(userMessage);
    inputRef.current?.focus();
  };

  const suggestedQuestions = [
    "What is a phishing scam?",
    "Explain credit default swap in simple terms",
    "How can I secure my online banking?",
    "What's the difference between APR and interest rate?",
    "How do I identify fraudulent transactions?",
  ];

  const handleSuggestionClick = (question: string) => {
    if (!isLoading) {
      setInput(question);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      {/* Chat History Modal */}
      {showHistory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center space-x-2">
                <History className="h-5 w-5 text-blue-600" />
                <span>Chat History</span>
              </h3>
              <button
                onClick={() => setShowHistory(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>
            <ChatHistory
              messages={messages}
              onClose={() => setShowHistory(false)}
              onClearHistory={clearHistory}
            />
          </div>
        </div>
      )}

      {/* Welcome Message */}
      {messages.length === 0 && (
        <div className="p-8 text-center border-b border-slate-100">
          <div className="flex justify-center mb-4">
            <Bot className="h-16 w-16 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Welcome to FinanceBot
          </h2>
          <p className="text-slate-600 mb-6">
            Ask me anything about banking, investments, loans, or fraud
            prevention. I'll provide expert guidance with trusted sources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(question)}
                className="p-3 text-left text-sm bg-slate-50 hover:bg-blue-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-200 hover:shadow-sm"
                disabled={isLoading}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <MessageBubble key={message.id} message={message} index={index} />
        ))}

        {isLoading && <LoadingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-slate-200 p-6">
        {/* Chat History Button */}
        {messages.length > 0 && (
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setShowHistory(true)}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 border border-slate-200 hover:border-blue-300"
            >
              <History className="h-4 w-4" />
              <span>View Chat History ({messages.length} messages)</span>
            </button>
            <button
              onClick={clearHistory}
              className="text-xs text-slate-500 hover:text-red-600 transition-colors"
            >
              Clear History
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex space-x-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about banking, investments, or fraud prevention..."
            className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            disabled={isLoading}
            maxLength={500}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2 font-medium"
          >
            <Send className="h-4 w-4" />
            <span>Send</span>
          </button>
        </form>

        <div className="mt-3 text-center">
          <p className="text-xs text-slate-500">
            Financial advice provided for educational purposes. Always consult a
            professional advisor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
