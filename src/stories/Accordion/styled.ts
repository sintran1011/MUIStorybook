import { Accordion } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAccordion = styled(Accordion)(() => ({
  "&.MuiAccordion-root": {
    "&:before": {
      display: "none",
    },
    margin: 0,
  },
  "& .MuiAccordionSummary-root": {
    height: "50px",
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));

export { StyledAccordion };
