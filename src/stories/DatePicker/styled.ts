import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "@styles/theme";

const TextFieldCustom = styled(TextField)({
  //
  height: "100%",
  border: "none",
  borderRadius: theme.shape.borderRadius,
  "& .MuiInputBase-root": {
    //text input
    fontFamily: "var(--font-inter)",
    color: theme.palette.text.primary,
    backgroundColor: "#ffffff",
    padding: "8px 14px",
    input: {
      fontSize: "12px",
      padding: 0,
      "&::placeholder": {
        fontSize: "12px",
      },
    },
    "& .MuiButtonBase-root": {
      height: "24px",
      width: "24px",
    },
    "&.Mui-disabled": {
      backgroundColor: `${theme.palette.interaction.disabled.subtleNormal} !important`,
      borderColor: `${theme.palette.border.disabled} !important`,
      color: theme.palette.text.disabled,
      cursor: "not-allowed",
      "& input": {
        cursor: "not-allowed",
        WebkitTextFillColor: "inherit",
      },
    },
    "&.Mui-readOnly": {
      backgroundColor: theme.palette.background.readonly,
      color: theme.palette.text.secondary,
      userSelect: "none",
    },
  },
  "& .MuiOutlinedInput-root": {
    height: "100%",
    border: "none",
    "&:hover": {
      outline: "none",
      border: "none",
    },
    "&.Mui-focused": {
      outline: "none",
      border: "none",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
});

export { TextFieldCustom };
