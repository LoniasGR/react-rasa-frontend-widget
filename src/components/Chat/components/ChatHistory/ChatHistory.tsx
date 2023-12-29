import { Box, styled } from "@mui/material";
import { ChatMessage } from "../../../../models/Message";
import ChatBubble from "../ChatBubble/ChatBubble";
import { useEffect, useRef } from "react";

export const ChatHistoryWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: theme.spacing(15),
  paddingBottom: theme.spacing(2),
  overflow: "auto",
  border: "1px solid",
  color: theme.palette.secondary.contrastText,
  borderColor: theme.palette.secondary.border,
  flexGrow: 1,
})) as typeof Box;

type Props = {
  messages: ChatMessage[];
};

function ChatHistory({ messages }: Props) {
  const historyRef = useRef<HTMLBaseElement>();

  useEffect(() => {
    const element = historyRef.current;

    if (element !== undefined) {
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  });

  return (
    <ChatHistoryWrapper ref={historyRef}>
      {messages.map((m) => {
        return <ChatBubble key={m.text} text={m.text} fromBot={m.bot} />;
      })}
    </ChatHistoryWrapper>
  );
}

export default ChatHistory;
