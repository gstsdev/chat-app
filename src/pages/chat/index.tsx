import { PanelLeftDashedIcon } from "lucide-react";
import ChatInfoHeader from "./ChatInfoHeader";
import ChatMessageHistory from "./ChatMessageHistory";
import ChatSidebar from "./ChatSidebar";
import MessageForm from "./MessageForm";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ChatPage() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const [activeChat, setActiveChat] = useState<{ id: string } | null>(null);

  return (
    <div className="flex flex-col size-full bg-[#fafaff]">
      <div className="m-auto h-full w-full lg:flex max-w-5xl p-4">
        <aside
          className={cn(
            "min-w-0 min-h-0",
            "max-lg:w-full max-lg:px-4 max-lg:pb-4",
            "max-lg:absolute max-lg:inset-x-0 max-lg:top-16 max-lg:bottom-0",
            "max-lg:bg-gray-50",
            !sidebarActive && "max-lg:hidden",
            "lg:w-88 lg:-ml-10 lg:mr-4",
          )}
        >
          <ChatSidebar />
        </aside>
        <main className="flex flex-col size-full">
          <button
            className={cn(
              "w-fit p-2 mb-2",
              "text-gray-400 hover:bg-black/5",
              sidebarActive && "text-black bg-black/10 hover:bg-black/15",
              "rounded-full",
              "cursor-pointer",
              "lg:hidden",
            )}
            onClick={() => setSidebarActive(!sidebarActive)}
          >
            <PanelLeftDashedIcon className="size-6" />
          </button>

          {activeChat ? (
            <ChatView />
          ) : (
            <div className="flex-1 grid items-center">
              <p className="text-center text-gray-500">
                Select a chat to start messaging
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function ChatView() {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <div className="w-full flex mb-2">
        <ChatInfoHeader />
      </div>
      <div className="flex-1">
        <ChatMessageHistory />
      </div>
      <div className="flex-auto max-h-fit">
        <MessageForm />
      </div>
    </div>
  );
}
