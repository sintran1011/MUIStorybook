import { Input } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextFieldCustom = styled(Input)(({ theme }) => ({
  //text input
  fontFamily: "var(--font-inter)",
  color: theme.palette.text.primary,
  fontSize: "12px",
  lineHeight: "20px",
  fontWeight: 450,
  //
  backgroundColor: "#ffffff",
  border: "1px solid",
  borderRadius: theme.shape.borderRadius,
  transition: "border-color 0.3s, box-shadow 0.3s",
  padding: "8px 14px",
  height: "40px",
  "& input": {
    fontSize: "12px",
    "&::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    MozAppearance: "textfield",
    "&::placeholder": {
      fontSize: "12px",
    },
  },
  "&.MuiInputBase-root.Mui-disabled": {
    backgroundColor: `${theme.palette.interaction.disabled.subtleNormal} !important`,
    borderColor: `${theme.palette.border.disabled} !important`,
    color: theme.palette.text.disabled,
    cursor: "not-allowed",
    "& input": {
      cursor: "not-allowed",
      WebkitTextFillColor: "inherit",
    },
  },
  "&.MuiInputBase-root.Mui-readOnly": {
    backgroundColor: theme.palette.background.readonly,
    color: theme.palette.text.secondary,
  },
  "&.MuiInput-root:not(.Mui-disabled, .Mui-error)::after": {
    borderWidth: 1,
    borderColor: theme.palette.brand.main,
  },
  "&.MuiInputBase-sizeSmall": {
    padding: "8px 10px",
    height: 40,
  },
  "&.MuiInputBase-sizeMedium": {
    padding: "10px 12px",
    height: 48,
  },
  "&.MuiInputBase-sizeLarge": {
    padding: "12px 14px",
    height: 56,
  },
  "&::before": {
    borderColor: "transparent",
  },
  "&:hover": {
    "&:not(.Mui-disabled, .Mui-error)": {
      "&::after": {
        borderWidth: 1,
        borderColor: theme.palette.brand.main,
      },
      "&::focus": {
        borderColor: theme.palette.brand.main,
        borderWidth: 1,
      },
      "&::before": {
        borderColor: "transparent",
      },
    },
  },
  "&.Mui-readOnly.MuiInputBase-readOnly": {
    "&::after": {
      border: "unset",
    },
    "&:hover": {
      "&::after": {
        border: "unset",
      },
      "&::focus": {
        border: "unset",
      },
    },
  },
}));

export { TextFieldCustom };
