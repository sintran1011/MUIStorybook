import { Button as MUIButton } from "@mui/material";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { CustomButton } from "./styled";

export interface ButtonBaseProps
  extends ComponentPropsWithoutRef<typeof MUIButton> {
  fullWidth?: boolean;
  className?: string;
  loading?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  icon?: boolean;
  component?: React.ElementType;
  width?: string | number;
}

const Button = forwardRef<HTMLButtonElement, ButtonBaseProps>((props, ref) => {
  const {
    children,
    className,
    loading = false,
    size = "medium",
    fullWidth = false,
    disabled,
    onClick,
    component,
    variant = "contained",
    width = "fit-content",
    ...rest
  } = props;

  return (
    <CustomButton
      loading={loading}
      loadingPosition="start"
      variant={variant}
      disabled={disabled}
      size={size}
      sx={{ width: fullWidth ? "100%" : width, cursor: "pointer" }}
      ref={ref}
      component={component}
      onClick={onClick}
      className={className}
      {...rest}
    >
      {children}
    </CustomButton>
  );
});

Button.displayName = "Button";

export default Button;
