import { Zoom, styled, Box } from "@mui/material";
import React, { useEffect } from "react";
import ChatHistory from "../ChatHistory/ChatHistory";
import ChatBoxHeader from "../ChatBoxHeader";
import { ChatMessage } from "../../../../models/Message";
import ChatInput from "../ChatInput/ChatInput";

export const ChatBoxContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.contrastText,
  position: "fixed",
  bottom: theme.spacing(4),
  right: theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    height: "70vh",
    width: "70vw",
  },
  [theme.breakpoints.up("md")]: {
    height: "60vh",
    width: "50vw",
  },
  [theme.breakpoints.down("sm")]: {
    height: "80vh",
    width: "70vw",
  },
  boxShadow: theme.shadows[12],
  display: "flex",
  flexDirection: "column",
})) as typeof Box;

type Props = {
  isVisible: boolean;
  onCloseClick: () => void;
  uuid: React.MutableRefObject<string>;
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  currentMessage: string;
  setCurrentMessage: React.Dispatch<React.SetStateAction<string>>;
};

function ChatBox({
  isVisible,
  onCloseClick,
  uuid,
  messages,
  setMessages,
  currentMessage,
  setCurrentMessage,
}: Props) {
  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (isVisible) {
        e.preventDefault();
        if (e.key === "Escape") {
          onCloseClick();
        }
      }
    };

    window.addEventListener("keyup", onEscape);

    return () => {
      window.removeEventListener("keyup", onEscape);
    };
  });

  return (
    <Zoom in={isVisible} unmountOnExit>
      <ChatBoxContainer>
        <ChatBoxHeader onCloseClick={onCloseClick} />
        <ChatHistory messages={messages} />
        <ChatInput
          uuid={uuid}
          setMessages={setMessages}
          currentMessage={currentMessage}
          setCurrentMessage={setCurrentMessage}
        />
      </ChatBoxContainer>
    </Zoom>
  );
}

export default ChatBox;
