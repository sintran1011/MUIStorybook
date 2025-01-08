import { styled } from "@mui/material";
import Input from ".";

const StyledInputNumber = styled(Input)({
  "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
    {
      appearance: "none",
      margin: 0,
    },
  "& input[type=number]": {
    appearance: "textfield",
  },
  "&": { borderRadius: "4px", width: "100%" },
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
});

export default StyledInputNumber;
