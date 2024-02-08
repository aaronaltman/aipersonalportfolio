"use client";

import React, { useEffect, useRef, useState } from "react"; // Import useState
import { useChat } from "ai/react";

export default function ChatThird() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Function to format timestamp, you might need to adjust based on your actual date value

  return (
    <div className="flex flex-col mx-auto">
      <div className="container max-w-md overflow-y-auto max-h-96">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat ${
              message.role === "user" ? "chat-start" : "chat-end"
            }`}
          >
            <div className="chat-header">
              {message.role === "user" ? "You" : "AI"}
            </div>
            <div className="chat-bubble">
              {message.content
                ? message.content
                : "Placeholder text for empty message"}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex justify-center items-center w-full px-3 py-10">
        <form onSubmit={handleSubmit} className="w-full">
          <input
            className="w-full p-2 mb-2 input rounded shadow-xl"
            value={input}
            placeholder="I am an AI Chatbot"
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
