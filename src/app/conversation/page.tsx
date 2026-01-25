"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Message from "@/components/Message";
import { pusherClient } from "@/lib/pusher";
import { sendMessage } from "@/actions/message.action";

export default function Page() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  const handleSend = async () => {
    // setMessages((prev) => [...prev, message]);
    // setMessage("");

    if (!message) return;

    try {
      await sendMessage(message);
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    const handleIncoming = (data: { message: string }) => {
      setMessages((prev) => [...prev, data.message]);
    };

    pusherClient.subscribe("chat-app");
    pusherClient.bind("upcoming-message", handleIncoming);

    return () => {
      pusherClient.unbind("upcoming-message", handleIncoming);
      pusherClient.unsubscribe("chat-app");
      pusherClient.disconnect();
    };
  }, []);

  //TODO: Checkout why the conversation page is not rendering the messages.

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[40vw] min-h-[80vh] border border-white">
        <div className="w-full py-2 flex items-center justify-center border border-gray-50">
          <h1>Conversation</h1>
        </div>
        <div className="w-full h-110 border border-white">
          {!messages.length ? (
            <h1>No Messages Yet</h1>
          ) : (
            messages.map((message, index) => (
              <Message key={index} message={message} />
            ))
          )}
        </div>
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <Input
            type="text"
            placeholder="Enter your message here..."
            onChange={handleInputChange}
            onKeyDown={handleEnterPress}
          />
          <Button
            className="w-full hover:cursor-pointer"
            size={"lg"}
            onClick={handleSend}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
