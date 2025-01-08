"use client";

import { Accordion } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: "16px",
  width: "800px",
  backgroundColor: theme.palette.dark["700"],
  padding: 3,
  gap: 3,
  color: "#FFFFFF",
  maxHeight: "400px",
  overflow: "hidden",
  boxShadow: "none",
  margin: "0",
  marginBottom: "12px",
  "& .MuiAccordionSummary-root": {
    height: "76px",
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));

export { StyledAccordion };
