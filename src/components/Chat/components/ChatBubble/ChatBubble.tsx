import {
  Container,
  Paper,
  SxProps,
  Typography,
  styled,
  useTheme,
} from "@mui/material";

export const MessageContainer = styled(Paper)(({ theme }) => ({
  maxWidth: "90%",
  background: theme.palette.ternary.main,
  color: theme.palette.ternary.contrastText,
  paddingTop: theme.spacing(1.2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(1.2),
  paddingLeft: theme.spacing(2),
  wordWrap: "break-word",
  animation: `fadeIn 100ms ${theme.transitions.easing.easeInOut}`,
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
})) as typeof Paper;

type Props = {
  text: string;
  fromBot?: boolean;
  firstMessage?: boolean;
};

function ChatBubble({ text, fromBot, firstMessage }: Props) {
  const theme = useTheme();

  const commonStyle = {
    fontSize: theme.typography.body2,
    marginBottom: firstMessage ? "0.2rem" : "0",
  };

  const botStyle = {
    ...commonStyle,
    marginLeft: "1rem",
  } as SxProps;

  const userStyle = {
    ...commonStyle,
    alignSelf: "end",
    marginLeft: "auto",
  } as SxProps;

  const style = fromBot ? botStyle : userStyle;

  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      {firstMessage && (
        <Typography variant="body2" sx={style}>
          {fromBot ? "Theano" : "Εσείς"}
        </Typography>
      )}
      <MessageContainer sx={style}>{text}</MessageContainer>
    </Container>
  );
}

ChatBubble.defaultProps = {
  firstMessage: false,
  fromBot: false,
};

export default ChatBubble;
