import { Paper, InputBase, IconButton, styled } from "@mui/material";
import { Send } from "@mui/icons-material";
import React from "react";
import { ChatMessage } from "../../../../models/Message";
import { sendMessage } from "../../../../services/sendMessage";

export const ChatInputPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  marginBottom: "auto",
  width: "100%",
  background: theme.palette.ternary.main,
  color: theme.palette.ternary.contrastText,
  paddingTop: theme.spacing(1.2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(1.2),
  paddingLeft: theme.spacing(2),
  display: "flex",
  alignItems: "center",
})) as typeof Paper;

type Props = {
  uuid: React.MutableRefObject<string>;
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  currentMessage: string;
  setCurrentMessage: React.Dispatch<React.SetStateAction<string>>;
};

function ChatInput({
  uuid,
  setMessages,
  currentMessage,
  setCurrentMessage,
}: Props) {
  function advanceChat() {
    setMessages((prev) => [
      ...prev,
      { text: currentMessage, bot: false } as ChatMessage,
    ]);
    setCurrentMessage("");
    sendMessage(uuid, currentMessage).then((resp) => {
      if (resp !== null) {
        const respChat = resp.map((r) => {
          return { text: r.text, bot: true } as ChatMessage;
        });
        setMessages((prev) => [...prev, ...respChat]);
      }
      console.log(resp);
    });
  }

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    advanceChat();
  };

  const onEnter = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter") {
      e.stopPropagation();
      advanceChat();
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  return (
    <ChatInputPaper component="form" autoComplete="off" noValidate>
      <InputBase
        onChange={onChange}
        onKeyUp={onEnter}
        sx={{ width: "100%" }}
        multiline
        value={currentMessage}
        placeholder="Send a message..."
      />
      <IconButton sx={{ marginLeft: "auto" }} onClick={onClick}>
        <Send />
      </IconButton>
    </ChatInputPaper>
  );
}

export default ChatInput;
