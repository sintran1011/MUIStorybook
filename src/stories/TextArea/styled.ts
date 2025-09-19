import { TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextAreaCustom = styled(TextareaAutosize)(({ theme }) => ({
  //text input
  fontFamily: "var(--font-inter)",
  color: theme.palette.text.primary,
  fontSize: "12px",
  lineHeight: "20px",
  fontWeight: 450,
  //
  border: "1px solid",
  width: "100%",
  backgroundColor: "#ffffff",
  borderRadius: theme.shape.borderRadius,
  padding: "8px 12px",
  transition: "border-color 0.3s, box-shadow 0.3s",
  "&::placeholder": {
    fontWeight: 450,
    fontSize: "12px",
    color: theme.palette.text.disabled,
  },
  "&:focus": {
    borderColor: theme.palette.brand.main,
    boxShadow: `0 0 0 1px ${theme.palette.brand.main}`,
    outline: "none",
  },
  "&[readonly]:focus": {
    boxShadow: "none",
    borderColor: theme.palette.border.primary,
  },
  "&.none-shadow:focus": {
    boxShadow: "none",
  },
  "&:disabled": {
    backgroundColor: `${theme.palette.interaction.disabled.subtleNormal} !important`,
    borderColor: `${theme.palette.border.disabled} !important`,
    color: theme.palette.text.disabled,
    cursor: "not-allowed",
  },
  "&[readonly]": {
    backgroundColor: theme.palette.background.readonly,
    color: theme.palette.text.secondary,
  },
}));

export { TextAreaCustom };
