"use client";

import React, { useEffect, useRef } from "react"; // Import useRef and useEffect
import { useChat } from "ai/react";

export default function ChatThird() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesEndRef = useRef(null); // Create a ref for the end of the messages container

  useEffect(() => {
    // Scroll to the bottom of the chat container every time messages update
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); // Dependency array, ensures effect runs whenever `messages` changes

  return (
    <div className="flex flex-col mx-auto">
      <div className="container overflow-y-auto max-h-96">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat ${
              message.role === "user" ? "chat-start" : "chat-end"
            }`}
          >
            <div className="chat-header">
              {message.role === "user" ? "You" : "AI"}
              <time className="text-xs opacity-50">{/* Time here */}</time>
            </div>
            <div className="chat-bubble">{message.content}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />{" "}
        {/* Invisible div at the end of messages */}
      </div>
      <div className="flex justify-center items-center w-full px-3 py-10">
        <form onSubmit={handleSubmit} className="w-full">
          <input
            className="w-full p-2 mb-2 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
