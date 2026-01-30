import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BanIcon, EllipsisVerticalIcon } from "lucide-react";

export default function ChatInfoHeader() {
  return (
    <div className="flex items-center gap-4 p-2 w-full">
      <div className="bg-linear-to-tr from-yellow-200 to-lime-500 rounded-full size-10"></div>
      <div>
        <h1 className="font-semibold text-md">John Doe</h1>
        <p className="text-xs text-gray-500">Online</p>
      </div>
      <div className="ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer rounded-full p-2 hover:bg-black/5 transition-colors">
            <EllipsisVerticalIcon className="size-5" />
            <span className="sr-only">More</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem variant="destructive" className="text-base">
              <BanIcon className="size-5" />
              Block
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
