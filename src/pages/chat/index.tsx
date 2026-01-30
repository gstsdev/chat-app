import ChatInfoHeader from "./ChatInfoHeader";
import ChatMessageHistory from "./ChatMessageHistory";
import ChatSidebar from "./ChatSidebar";
import MessageForm from "./MessageForm";

export default function ChatPage() {
  return (
    <div className="flex flex-col size-full bg-[#fafaff]">
      <div className="m-auto h-full w-full flex max-w-5xl p-4">
        <aside className="hidden lg:block">
          <ChatSidebar />
        </aside>
        <main className="flex flex-col size-full gap-2">
          <div className="w-full mb-2">
            <ChatInfoHeader />
          </div>
          <div className="flex-1">
            <ChatMessageHistory />
          </div>
          <div className="flex-auto max-h-fit">
            <MessageForm />
          </div>
        </main>
      </div>
    </div>
  );
}
