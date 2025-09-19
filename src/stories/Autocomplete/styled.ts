import { autocompleteClasses, Popper, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "@styles/theme";

const TextFieldCustom = styled(TextField)({
  border: "none",
  ".MuiInputBase-root": {
    fontFamily: "var(--font-inter)",
    color: theme.palette.text.primary,
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 450,
    padding: "8px 14px !important",
    gap: "2px",
    height: "100%",
    input: {
      padding: "0 15px 0 0 !important",

      "&::placeholder": {
        fontSize: "12px",
      },
    },
    ".MuiAutocomplete-endAdornment": {
      ".MuiButtonBase-root": {
        height: "24px",
        width: "24px",
      },
    },
    "&.Mui-disabled": {
      backgroundColor: `${theme.palette.interaction.disabled.subtleNormal} !important`,
      borderColor: `${theme.palette.border.disabled} !important`,
      color: theme.palette.text.disabled,
      cursor: "not-allowed",
      "& input": {
        cursor: "not-allowed",
        WebkitTextFillColor: "inherit",
        color: theme.palette.text.disabled,
      },
    },
    "& input[readonly]": {
      color: theme.palette.text.secondary,
    },
  },
  ".MuiOutlinedInput-root": {
    border: "none",
    "&:hover": {
      outline: "none",
      border: "none",
    },
    "&.Mui-focused": {
      outline: "none",
      border: "none",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
});

const StyledPopper = styled(Popper)(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: theme.shadows[3],
    marginTop: 4,
    borderRadius: 8,
    overflow: "hidden",
    "& .MuiAutocomplete-noOptions": {
      color: "text.disabled",
      fontStyle: "italic",
      fontSize: "14px",
      padding: "8px",
    },
  },
  [`& .${autocompleteClasses.listbox}`]: {
    padding: "6px",
    margin: 0,
    "& .MuiAutocomplete-option": {
      padding: "4px 6px",
      minHeight: "32px !important",
      borderRadius: "4px",
      "&.Mui-selected": {
        backgroundColor: theme.palette.brand.main,
        "& .MuiTypography-root": {
          color: "#ffffff",
          fontWeight: 700,
        },
        "&.Mui-focused": {
          opacity: 0.8,
          backgroundColor: theme.palette.brand.main,
        },
        "& .MuiSvgIcon-root": {
          display: "block",
        },
        justifyContent: "space-between",
      },

      "& .MuiSvgIcon-root": {
        display: "none",
      },
      "&.Mui-focused": {
        backgroundColor: `${theme.palette.interaction.neutral.subtleHover}`,
      },
    },
  },
}));

export { TextFieldCustom, StyledPopper };
