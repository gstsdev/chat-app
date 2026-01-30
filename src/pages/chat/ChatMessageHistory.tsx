export default function ChatMessageHistory() {
  return (
    <div className="bg-white rounded-md shadow-md size-full overflow-y-auto min-h-0 flex flex-col">
      <div className="h-fit mt-auto">
        <div className="w-full py-4 px-5">
          <div className="ml-auto p-2 rounded-xl bg-indigo-500 text-white w-fit h-fit">
            <p>Hello World</p>
          </div>
        </div>
        <div className="w-full py-4 px-5">
          <div className="mr-auto p-2 rounded-xl bg-neutral-200 text-black w-fit h-fit">
            <p>Hello World</p>
          </div>
        </div>
      </div>
    </div>
  );
}
