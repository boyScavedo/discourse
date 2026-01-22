"use server";

import { pusherServer } from "@/lib/pusher";

export const sendMessage = async (message: string) => {
  try {
    // Store message in database

    await pusherServer.trigger("chat-app", "upcoming-message", {
      message,
    });
  } catch (error) {
    console.log(error);
  }
};
