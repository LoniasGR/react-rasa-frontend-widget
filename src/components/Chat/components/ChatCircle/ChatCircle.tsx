import ChatIcon from "@mui/icons-material/Chat";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";

const RoundButton = styled(ButtonBase)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(6),
  right: theme.spacing(6),
  width: theme.spacing(8),
  height: theme.spacing(8),
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
  boxShadow: theme.shadows[7],
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
})) as typeof ButtonBase;

type Props = {
  onClick: () => void;
  isVisible: boolean;
};

function ChatCircle({ isVisible, onClick }: Props) {
  return (
    <Zoom in={isVisible} unmountOnExit>
      <RoundButton aria-label="chat" onClick={onClick}>
        <ChatIcon />
      </RoundButton>
    </Zoom>
  );
}

export default ChatCircle;
