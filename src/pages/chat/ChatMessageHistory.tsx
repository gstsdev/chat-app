import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/model/Chat";

interface ChatMessageHistoryProps {
  messages?: ChatMessage[];
}

export default function ChatMessageHistory({
  messages,
}: ChatMessageHistoryProps) {
  const messagesBySender = messages?.reduce<
    { sender: string; messages: ChatMessage[] }[]
  >((acc, message) => {
    if (acc.at(-1)?.sender == message.sender) {
      acc.at(-1)?.messages.push(message);
    } else {
      acc.push({ sender: message.sender, messages: [message] });
    }

    return acc;
  }, []);

  return (
    <div className="bg-white rounded-md shadow-md size-full overflow-y-auto min-h-0 flex flex-col">
      <div className="h-fit mt-auto">
        {messagesBySender?.map(({ sender, messages }, idx) => (
          <div key={idx} className="w-full py-4 px-5 space-y-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "p-2 rounded-xl size-fit",
                  sender == "You"
                    ? "ml-auto bg-indigo-500 text-white"
                    : "mr-auto bg-neutral-200 text-black",
                )}
              >
                <p>{message.content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
