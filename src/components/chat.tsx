import React from "react";

export default function Chat({
  chat,
  setChat,
  chatHistory,
  setChatHistory,
  handleClick,
}) {
  return (
    <>
      <div className="chat chat-start py-6">
        <div>
          {chatHistory.map((chat, index) => (
            <div className="chat-bubble" key={index}>
              {chat}
            </div>
          ))}
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">You underestimate my power!</div>
      </div>
      <form className="flex gap-x-6 py-6 justify-center" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <button type="submit" className="btn btn-primary px-10">
          Send
        </button>
      </form>
    </>
  );
}
