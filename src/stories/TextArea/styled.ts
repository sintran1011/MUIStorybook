"use client";

import { Input } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextFieldCustom = styled(Input)(() => ({
  backgroundColor: "#FFFFFF0A",
  fontFamily: "var(--font-montserrat)",
  borderRadius: "4px",
  color: "white",
  padding: "12px 16px",
  height: 52,
  "& input": {
    "&::placeholder": {
      fontWeight: 400,
      fontSize: 16,
    },
  },
  "&.MuiInput-root:not(.Mui-disabled, .Mui-error)::after": {
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  "&.MuiInputBase-sizeSmall": {
    padding: "10px 12px",
    height: 40,
  },
  "&.MuiInput-root .Mui-disabled": {
    WebkitTextFillColor: "#ffffffbf",
  },
  "&::before": {
    borderColor: "transparent",
  },
  "&:hover": {
    "&:not(.Mui-disabled, .Mui-error)": {
      "&::after": {
        borderWidth: 1,
        borderColor: "#FFFFFF",
      },
      "&::focus": {
        borderColor: "#FFFFFF",
        borderWidth: 1,
      },
      "&::before": {
        borderWidth: 0,
        borderColor: "#ffffff80",
      },
    },
  },
}));

export { TextFieldCustom };
