import { Close } from "@mui/icons-material";
import { Box, Typography, styled, IconButton } from "@mui/material";

export const ChatBoxHeaderContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  boxShadow: theme.shadows[3],
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
})) as typeof Box;

export const CloseIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  float: "right",
  marginRight: 15,
})) as typeof IconButton;

type Props = {
  onCloseClick: () => void;
};

function ChatBoxHeader({ onCloseClick }: Props) {
  return (
    <ChatBoxHeaderContainer onClick={onCloseClick}>
      <Typography sx={{ paddingLeft: "1rem" }}>Voice Bot</Typography>
      <CloseIconButton onClick={onCloseClick}>
        <Close />
      </CloseIconButton>
    </ChatBoxHeaderContainer>
  );
}

export default ChatBoxHeader;
