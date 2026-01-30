import { SendHorizontalIcon } from "lucide-react";

export default function MessageForm() {
  return (
    <form
      className="flex items-center gap-2 mt-2 w-full"
      onSubmit={(ev) => {
        ev.preventDefault();
        console.log(
          (
            ev.currentTarget.elements.namedItem(
              "message",
            ) as HTMLTextAreaElement
          ).value,
        );
      }}
    >
      <div className="flex border border-gray-200 bg-white rounded-full flex-1 px-3 py-2 focus-within:border-gray-300 h-fit">
        <textarea
          name="message"
          className="resize-none focus-visible:outline-none w-full "
          rows={1}
          placeholder="Enter a message..."
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
