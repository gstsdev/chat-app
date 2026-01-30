export type ChatProfileImage =
  | {
      type: "url";
      value: string;
    }
  | {
      type: "color";
      value: `${string};${string}`;
    };

export interface Chat {
  id: string;
  name: string;
  profile_image: ChatProfileImage;
}

export type ChatWithMessages = Chat & {
  messages: ChatMessage[];
};

export interface ChatMessage {
  id: string;
  sender: string;
  content: string;
}
