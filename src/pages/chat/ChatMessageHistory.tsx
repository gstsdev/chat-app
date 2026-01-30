import type { ChatMessage } from "@/model/Chat";

interface ChatMessageHistoryProps {
  messages?: ChatMessage[];
}

export default function ChatMessageHistory({
  messages,
}: ChatMessageHistoryProps) {
  return (
    <div className="bg-white rounded-md shadow-md size-full overflow-y-auto min-h-0 flex flex-col">
      <div className="h-fit mt-auto">
        {messages?.map((message) => (
          <div key={message.id} className="w-full py-4 px-5">
            {message.sender === "You" ? (
              <div className="ml-auto p-2 rounded-xl bg-indigo-500 text-white w-fit h-fit">
                <p>{message.content}</p>
              </div>
            ) : (
              <div className="mr-auto p-2 rounded-xl bg-neutral-200 text-black w-fit h-fit">
                <p>{message.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
