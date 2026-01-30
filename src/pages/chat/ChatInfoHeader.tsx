import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ChatProfileImage } from "@/model/Chat";
import { ArchiveIcon, BanIcon, EllipsisVerticalIcon } from "lucide-react";

interface ChatInfoHeaderProps {
  profileImage?: ChatProfileImage;
  chatName: string;
}

export default function ChatInfoHeader({
  profileImage,
  chatName,
}: ChatInfoHeaderProps) {
  return (
    <div className="flex items-center gap-4 p-2 w-full">
      {profileImage?.type === "color" ? (
        <div
          className="bg-linear-to-tr from-(--color-stop1) to-(--color-stop2) rounded-full size-10"
          style={
            {
              "--color-stop1": profileImage.value.split(";")[0],
              "--color-stop2": profileImage.value.split(";")[1],
            } as React.CSSProperties
          }
        ></div>
      ) : profileImage?.type === "url" ? (
        <img
          src={profileImage.value}
          alt={chatName}
          className="rounded-full size-10 object-cover"
        />
      ) : (
        <div className="bg-gray-300 rounded-full size-10"></div>
      )}
      <div>
        <h1 className="font-semibold text-md">{chatName}</h1>
        <p className="text-xs text-gray-500">Online</p>
      </div>
      <div className="ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer rounded-full p-2 hover:bg-black/5 transition-colors">
            <EllipsisVerticalIcon className="size-5" />
            <span className="sr-only">More</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="text-base">
              <ArchiveIcon className="size-5" />
              Archive
            </DropdownMenuItem>
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
