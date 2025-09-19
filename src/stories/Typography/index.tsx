import {
  Typography as MUITypography,
  Tooltip,
  Typography,
  type TooltipProps as MUITooltipProps,
  type TypographyProps,
} from "@mui/material";

interface TooltipProps extends Omit<MUITooltipProps, "children" | "title"> {}
export interface BasicTypographyProps extends TypographyProps {
  children?: React.ReactNode | string;
  tooltipTitle?: React.ReactNode | string;
  lines?: number;
  tooltipProps?: TooltipProps;
}

const BasicTypography = ({
  children,
  lines = 3,
  tooltipProps,
  tooltipTitle,
  ...rest
}: BasicTypographyProps) => {
  const renderTooltipContent = () => {
    if (typeof children === "string") {
      const textArr = children?.split("\n");
      return textArr?.map((i) => (
        <Typography component={"p"} variant="body-small">
          {i}
        </Typography>
      ));
    } else return children;
  };
  return (
    <Tooltip
      placement="top"
      title={tooltipTitle ? tooltipTitle : renderTooltipContent()}
      {...tooltipProps}
    >
      <MUITypography
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: lines,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          wordBreak: "break-all",
          ...rest.sx,
        }}
        {...rest}
      >
        {children}
      </MUITypography>
    </Tooltip>
  );
};

export default BasicTypography;

BasicTypography.displayName = "BasicTypography";
