import { MutableRefObject } from "react";

export class Message {
  sender: string | MutableRefObject<string>;
  message: string;

  constructor(uuid: string | MutableRefObject<string>, message: string) {
    this.sender = uuid;
    this.message = message;
  }
}
export type BotResponse = {
  recipient_id: string;
  text: string;
};

export type ChatMessage = {
  text: string;
  bot: boolean;
};
