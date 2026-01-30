import ChatInfoHeader from "./ChatInfoHeader";
import ChatMessageHistory from "./ChatMessageHistory";
import MessageForm from "./MessageForm";

export default function ChatPage() {
  return (
    <div className="flex flex-col size-full bg-[#fafaff]">
      <main className="flex flex-col max-w-3xl size-full p-4 gap-2 m-auto">
        <div className="w-full">
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
  );
}
