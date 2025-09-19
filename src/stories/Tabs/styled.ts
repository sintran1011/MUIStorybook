import { styled, Tabs } from "@mui/material";

const CustomTab = styled(Tabs)(({ theme }) => ({
  "& .MuiTab-root": {
    color: theme.palette.neutral[-1],
    fontSize: "14px",
    fontWeight: "450",
    lineHeight: "24px",
    textAlign: "right",
    textTransform: "none",
    padding: "0 24px",
    fontFamily: "var(--font-inter)",
    flexDirection: "row",
    gap: "8px",
    "& svg": {
      color: theme.palette.neutral[-1],
      margin: 0,
    },
  },
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.interaction.default.selected,
    height: "2px",
  },
  "& .MuiTab-root.Mui-selected": {
    color: theme.palette.interaction.default.selected,
    "& svg": {
      color: theme.palette.interaction.default.selected,
    },
  },
  "& .MuiTab-root.Mui-disabled": {
    color: theme.palette.text.disabled,
  },
  "&:hover": {
    color: theme.palette.interaction.default.selected,
  },
}));

export { CustomTab };
