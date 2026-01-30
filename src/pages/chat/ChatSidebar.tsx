import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon, LogOutIcon, SettingsIcon } from "lucide-react";

export default function ChatSidebar() {
  return (
    <div className="h-full w-66 flex flex-col mr-4 gap-4 -ml-10">
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
            <li>
              <a
                href="#"
                className="block p-4 border-b border-gray-200 hover:bg-gray-100"
              >
                Chat 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-4 border-b border-gray-200 hover:bg-gray-100"
              >
                Chat 2
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
