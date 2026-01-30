import type { Chat, ChatMessage, ChatWithMessages } from "@/model/Chat";
import { create } from "zustand";

type ChatStoreState = {
  chats: ChatWithMessages[];
  newChat: (chat: Omit<Chat, "id">) => void;
  addMessage: (chatId: string, message: Omit<ChatMessage, "id">) => void;
};

export const useChatStore = create<ChatStoreState>()((set) => ({
  chats: [
    {
      id: "1",
      name: "Chat with Alice",
      profile_image: {
        type: "color",
        value: "#ff5733;#33c1ff",
      },
      messages: [
        { id: "m1", sender: "Alice", content: "Hi there!" },
        { id: "m2", sender: "You", content: "Hello, Alice!" },
      ],
    },
    {
      id: "2",
      name: "Project Discussion",
      profile_image: {
        type: "color",
        value: "#33ff57;#ff33a8",
      },
      messages: [
        { id: "m1", sender: "Bob", content: "Did you finish the report?" },
        { id: "m2", sender: "You", content: "Yes, I sent it this morning." },
      ],
    },
    {
      id: "3",
      name: "Random Talk",
      profile_image: {
        type: "color",
        value: "#ff33d4;#3357ff",
      },
      messages: [
        { id: "m1", sender: "Charlie", content: "What's up?" },
        { id: "m2", sender: "You", content: "Not much, just chilling." },
      ],
    },
  ] as ChatWithMessages[],

  newChat: (chat: Omit<ChatWithMessages, "id" | "messages">) => {
    set((state) => ({
      chats: [
        ...state.chats,
        {
          ...chat,
          id: Math.random().toString(36).substring(2, 9),
          messages: [],
        },
      ],
    }));
  },
  addMessage: (
    chatId: string,
    message: Omit<ChatWithMessages["messages"][0], "id">,
  ) => {
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  ...message,
                  id: Math.random().toString(36).substring(2, 9),
                },
              ],
            }
          : chat,
      ),
    }));
  },
}));
