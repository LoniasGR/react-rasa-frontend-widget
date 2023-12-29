import { Typography, styled } from "@mui/material";

type Props = {
  error: Error;
};

export const ErrorMessageText = styled(Typography)(({ theme }) => ({
  color: theme.palette.ternary.contrastText,
  margin: "auto",
})) as typeof Typography;

function ErrorMessage({ error }: Props) {
  return (
    <>
      <ErrorMessageText variant="body1">{error.message}</ErrorMessageText>
    </>
  );
}

export default ErrorMessage;
