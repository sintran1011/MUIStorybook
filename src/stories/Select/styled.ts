import { styled } from "@mui/material/styles";
import { Select } from "@mui/material";

const CustomSelect = styled(Select)(({ theme }) => ({
  "&.MuiInputBase-root": {
    //text input
    fontFamily: "var(--font-inter)",
    color: theme.palette.text.primary,
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 450,
    //
    padding: "8px 14px",
    backgroundColor: "#ffffff",
    border: "1px solid",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    input: {
      padding: 0,
      "&::placeholder": {
        fontSize: "12px",
      },
    },
    "& .MuiSelect-select": {
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
    '& .MuiSvgIcon-root[aria-hidden="true"]': {
      display: "none !important",
    },
  },
  "&.MuiInputBase-root.Mui-disabled": {
    backgroundColor: `${theme.palette.interaction.disabled.subtleNormal} !important`,
    border: "none",
    color: theme.palette.text.disabled,
    cursor: "not-allowed",
    "& input": {
      cursor: "not-allowed",
      WebkitTextFillColor: "inherit",
    },
    "& .MuiSelect-select": {
      cursor: "not-allowed",
    },
  },
  "&.MuiInputBase-root.Mui-readOnly": {
    backgroundColor: theme.palette.background.readonly,
    color: theme.palette.text.secondary,
  },
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    padding: 0,
  },
}));

export { CustomSelect };
