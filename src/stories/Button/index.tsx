import { Button as MUIButton } from "@mui/material";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { CustomButton } from "./styled";
import "./Button.css";

export interface ButtonProps
  extends ComponentPropsWithoutRef<typeof MUIButton> {
  fullWidth?: boolean;
  className?: string;
  loading?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  icon?: boolean;
  component?: React.ElementType;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    icon = false,
    className,
    loading = false,
    size = "medium",
    fullWidth = false,
    disabled,
    onClick,
    style,
    component,
    variant = "primary",
    ...buttonProps
  } = props;

  const clsIcon = icon ? "MuiButton-icon" : "";

  return (
    <CustomButton
      variant={variant}
      disabled={disabled || loading}
      size={size}
      sx={{ width: fullWidth ? "auto" : "fit-content" }}
      ref={ref}
      component={component}
      onClick={onClick}
      className={`${clsIcon} ${className}`}
      {...buttonProps}
    >
      {loading && <div className="button-loader" style={style} />}
      {children}
    </CustomButton>
  );
});

Button.displayName = "Button";

export default Button;
