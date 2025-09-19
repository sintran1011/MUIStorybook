import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)<ButtonProps>(() => ({
  padding: "8xp 0",
  borderRadius: "8px",
  overflow: "hidden",
  textTransform: "initial",
}));

export { CustomButton };
