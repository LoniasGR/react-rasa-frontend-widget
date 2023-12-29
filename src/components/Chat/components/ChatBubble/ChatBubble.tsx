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
})) as typeof Paper;

type Props = {
  text: string;
  fromBot: boolean;
};

function ChatBubble({ text, fromBot }: Props) {
  const theme = useTheme();

  const commonStyle = {
    fontSize: theme.typography.body2,
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
      <Typography variant="body2" sx={style}>
        {fromBot ? "Theano" : "Εσείς"}
      </Typography>
      <MessageContainer sx={style}>{text}</MessageContainer>
    </Container>
  );
}

export default ChatBubble;
