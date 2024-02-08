"use client";

import { useChat } from "ai/react";

export default function ChatThird() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`chat ${
            message.role === "user" ? "chat-start" : "chat-end"
          }`}
        >
          <div className="chat-header">
            {message.role === "user" ? "You" : "AI"}
            <time className="text-xs opacity-50">{}</time>
          </div>
          <div className="chat-bubble">{message.content}</div>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          className="bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
