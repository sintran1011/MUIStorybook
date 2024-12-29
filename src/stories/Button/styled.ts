"use client";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  padding: theme.spacing(1, 3),
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  textTransform: "initial",
  "&.MuiButton-primary": {
    "&:hover": {
      boxShadow: "0px 0px 10px 1px " + theme.palette.primary["400"],
    },
    "&.Mui-disabled": {
      backgroundColor: theme.palette.primary["700"],
    },
  },
  "&.MuiButton-secondary": {
    "&:hover": {
      boxShadow: "0px 0px 10px 1px " + theme.palette.secondary["400"],
    },
    "&.Mui-disabled": {
      backgroundColor: "#641F0F",
    },
  },
  "&.MuiButton-outlined": {
    "&:hover": {
      backgroundColor: "#FFFFFF14",
      boxShadow: "0px 0px 10px 1px " + theme.palette.grey["800"],
    },
    "&.Mui-disabled": {
      backgroundColor: theme.palette.grey["800"],
    },
  },
  "&.MuiButton-icon": {
    maxWidth: "fit-content",
    minWidth: 0,
    padding: "1rem",
    "&:hover": {
      backgroundColor: "#FFFFFF14",
      boxShadow: "0px 0px 4px 1px " + theme.palette.grey["800"],
    },
  },
  "&.Mui-disabled": {
    color: "#ffffffcc",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backdropFilter: "blur(50px)",
      opacity: 0.3,
    },
  },
}));

export { CustomButton };
