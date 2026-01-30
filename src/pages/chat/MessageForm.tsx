import { SendHorizontalIcon } from "lucide-react";
import React, { useRef } from "react";

interface MessageFormProps {
  onMessageSend?: (message: string) => void;
}

export default function MessageForm({ onMessageSend }: MessageFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const onFormSubmit = (ev: React.SubmitEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onMessageSend?.(
      (ev.currentTarget.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    );
    formRef.current?.reset();
  };

  const onTextAreaKeyDown = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (ev.key === "Enter" && !ev.shiftKey) {
      ev.preventDefault();
      formRef.current?.requestSubmit();
      return;
    }
  };

  return (
    <form
      ref={formRef}
      className="flex items-center gap-2 mt-2 w-full"
      onSubmit={onFormSubmit}
    >
      <div className="flex border border-gray-200 bg-white rounded-full flex-1 px-3 py-2 focus-within:border-gray-300 h-fit">
        <textarea
          name="message"
          className="resize-none focus-visible:outline-none w-full "
          rows={1}
          placeholder="Enter a message..."
          onKeyDown={onTextAreaKeyDown}
        ></textarea>
      </div>
      <button
        type="submit"
        className="shrink-0 bg-linear-to-tr from-blue-500 to-purple-600 text-white p-3 rounded-full"
      >
        <SendHorizontalIcon className="size-5" />
        <span className="sr-only">Send</span>
      </button>
    </form>
  );
}
