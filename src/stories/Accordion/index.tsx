import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { type ReactNode } from "react";
import { StyledAccordion } from "./styled";
import { SxProps, Theme } from "@mui/material";
import type { AccordionProps as MUIAccordionProps } from "@mui/material/Accordion";

interface AccordionProps extends Omit<MUIAccordionProps, "title"> {
  title: string | ReactNode;
  keyProps: string | number;
  expandIcon?: ReactNode;
  titleStyle?: SxProps<Theme> | undefined;
}

const BasicAccordion = (props: AccordionProps) => {
  const { title, keyProps, expandIcon, children, sx, titleStyle, ...rest } =
    props;
  return (
    <StyledAccordion
      sx={{ boxShadow: "none", padding: { xs: "8px", md: "16px" }, ...sx }}
      {...rest}
    >
      <AccordionSummary
        sx={{
          ...titleStyle,
        }}
        expandIcon={expandIcon ? expandIcon : <ExpandMoreIcon />}
        aria-controls={`panel-${keyProps}-content`}
        id={`panel-${keyProps}-header`}
      >
        {typeof title === "string" ? (
          <Typography variant="header-3x-large">{title}</Typography>
        ) : (
          title
        )}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: 0,
          "& .MuiBox-root": {
            padding: 0,
          },
        }}
      >
        {children}
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default BasicAccordion;

BasicAccordion.displayName = "BasicAccordion";
