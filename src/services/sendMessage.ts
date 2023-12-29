import { MutableRefObject } from "react";
import { BotResponse, Message } from "../models/Message";

const rasaURL = "https://api-old.rasa.lavdelas.me/webhooks/rest/webhook";

export async function sendMessage(
  uuid: string | MutableRefObject<string>,
  message: string
) {
  const response: Response | Error = await fetch(rasaURL, {
    method: "POST",
    body: JSON.stringify(new Message(uuid, message)),
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }).catch((error: Error) => {
    console.error(error);
    throw error;
  });

  if (response instanceof Error) {
    throw response;
  }

  if (response.ok) {
    return (await response.json()) as BotResponse[];
  }

  throw new Error(`Server returned status: ${response.status}`);
}
