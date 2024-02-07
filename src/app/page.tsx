"use client";

import Chat from "@/components/chat";
import Footer from "@/components/footer";
import PrimaryHeader from "@/components/p-header";
import { useState } from "react";

export default function Home() {
  const [chat, setChat] = useState<HTMLInputElement>("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleClick = (e: any) => {
    e.preventDefault();
    setChatHistory([...chatHistory, chat]);
    setChat("");
  };

  return (
    <>
      <PrimaryHeader />
      <main className="">
        {/* <Chat
          chat={chat}
          setChat={setChat}
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          handleclick={handleClick}
        /> */}
      </main>
      <Footer />
    </>
  );
}
