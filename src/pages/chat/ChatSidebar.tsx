import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Chat } from "@/model/Chat";
import { EllipsisVerticalIcon, LogOutIcon, SettingsIcon } from "lucide-react";

interface ChatSidebarProps {
  chats: Chat[];
  onChatSelect?: (chatId: string) => void;
}

export default function ChatSidebar({ chats, onChatSelect }: ChatSidebarProps) {
  return (
    <div className="h-full w-full flex flex-col gap-4">
      <div className="bg-neutral-700 text-white p-2 rounded-lg flex items-center gap-4">
        <div className="bg-linear-to-tr from-red-400 to-blue-600 rounded-full size-10"></div>
        <div>
          <h1 className="text-md font-semibold">You</h1>
        </div>
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full p-2 hover:bg-white/10 transition-colors">
              <EllipsisVerticalIcon className="size-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="text-base">
                <SettingsIcon className="size-5" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base">
                <LogOutIcon className="size-5" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="bg-white w-full flex-1 rounded-lg shadow-md overflow-hidden">
        <nav>
          <ul>
            {chats.map((chat) => (
              <li key={chat.id}>
                <a
                  href="#"
                  className="block p-4 border-b border-gray-200 hover:bg-gray-100"
                  onClick={() => onChatSelect?.(chat.id)}
                >
                  <span className="flex items-center gap-4">
                    {chat.profile_image.type === "color" ? (
                      <span
                        className="bg-linear-to-tr from-(--color-stop1) to-(--color-stop2) rounded-full size-10"
                        style={
                          {
                            "--color-stop1":
                              chat.profile_image.value.split(";")[0],
                            "--color-stop2":
                              chat.profile_image.value.split(";")[1],
                          } as React.CSSProperties
                        }
                      ></span>
                    ) : (
                      <img
                        src={chat.profile_image.value}
                        alt="Profile"
                        className="rounded-full size-10"
                      />
                    )}
                    <span>{chat.name}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
