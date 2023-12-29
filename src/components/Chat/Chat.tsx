import { useRef, useState } from "react";
import ChatCircle from "./components/ChatCircle/ChatCircle";
import ChatBox from "./components/ChatBox/ChatBox";
import { firstMessage } from "../../utils/firstMessage";
import { ChatMessage } from "../../models/Message";

function Chat() {
  const sessionID = useRef<string>(crypto.randomUUID());
  const [chatActive, setChatActive] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([firstMessage]);
  const [currentMessage, setcurrentMessage] = useState("");
  const setChatActiveToggle = () => setChatActive(!chatActive);

  return (
    <>
      <ChatCircle isVisible={!chatActive} onClick={setChatActiveToggle} />
      <ChatBox
        isVisible={chatActive}
        onCloseClick={setChatActiveToggle}
        uuid={sessionID}
        messages={messages}
        setMessages={setMessages}
        currentMessage={currentMessage}
        setCurrentMessage={setcurrentMessage}
      />
    </>
  );
}

export default Chat;
