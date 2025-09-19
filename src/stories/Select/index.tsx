import { type CSSProperties, type ReactNode } from "react";
import {
  MenuItem,
  type SelectProps as MuiSelectProps,
  Typography,
  type MenuItemProps as MUIMenuItemProps,
  type Breakpoint,
  Box,
} from "@mui/material";
import { CustomSelect } from "./styled";
import CheckIcon from "@mui/icons-material/Check";
import { theme } from "@styles/theme";

export type MenuItemLabel = string | ReactNode;

export interface MenuItemProps {
  value: string;
  label: MenuItemLabel;
  icon?: string;
  disabled?: boolean;
}

interface SelectProps extends Omit<MuiSelectProps, "options"> {
  options: MenuItemProps[];
  width?: string | number | Partial<Record<Breakpoint, number | string>>;
  height?: number | string;
  menuItemProps?: MUIMenuItemProps;
  multiple?: boolean;
  style?: CSSProperties;
  value?: unknown;
  onValuesChange?: (val: any) => void;
  onChange?: (val: any) => void;
  bordered?: boolean;
}

const BasicSelect = (props: SelectProps) => {
  const {
    height = "30.5px",
    width = 160,
    fullWidth = false,
    options = [],
    sx,
    MenuProps,
    menuItemProps,
    multiple = false,
    value,
    onValuesChange = () => {},
    onChange = () => {},
    style,
    disabled = false,
    bordered = true,
    readOnly = false,
    ...restProps
  } = props;

  const sxProps = {
    minWidth: fullWidth ? "100%" : width,
    width: fullWidth ? "100%" : width,
    "&.MuiInputBase-root": {
      height: height || "40px",
    },
    borderRadius: "4px",
    ...sx,
  };

  const renderLabel = (label: MenuItemLabel) => {
    if (typeof label === "string")
      return (
        <Typography
          variant="body-small"
          color="text.primary"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            verticalAlign: "middle",
          }}
        >
          {label}
        </Typography>
      );
    return label;
  };

  return (
    <Box
      overflow={"hidden"}
      sx={{
        width: fullWidth ? "100%" : width,
        borderRadius: `${theme.shape.borderRadius}px`,
        border: `1px solid `,
        borderColor: bordered
          ? theme.palette.interaction.border.neutralNormal
          : "transparent",
        "&:hover": {
          boxShadow:
            readOnly || disabled || !bordered
              ? "none"
              : `0 0 2px 1px ${theme.palette.brand.main}`,
        },
        backgroundColor: disabled
          ? `${theme.palette.background.neutral.onSubtle}`
          : "#ffffff",
        ...style,
      }}
    >
      <CustomSelect
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "white",
              "& .MuiButtonBase-root": {
                color: theme.palette.text.primary,
                minHeight: "48px",
              },
            },
          },
          MenuListProps: {
            sx: {
              padding: "6px",
              maxHeight: "336px",
            },
          },
          ...MenuProps,
        }}
        sx={sxProps}
        multiple={multiple}
        displayEmpty
        variant="outlined"
        value={value}
        onChange={(val) => {
          onChange(val);
          onValuesChange(val);
        }}
        style={{ borderColor: "transparent" }}
        disabled={disabled}
        {...restProps}
      >
        {options.map((i, idx) => (
          <MenuItem
            sx={{
              borderRadius: "4px",
              padding: "4px 6px",
              minHeight: "32px !important",
              "& .MuiSvgIcon-root": {
                display: "none",
              },
              "&.Mui-selected": {
                backgroundColor: theme.palette.brand.main,
                "& .MuiTypography-root": {
                  color: "#ffffff",
                  fontWeight: 700,
                },
                "&:hover": {
                  opacity: 0.7,
                  backgroundColor: theme.palette.brand.main,
                },
                "& .MuiSvgIcon-root": {
                  display: "block",
                },
              },
              "&:hover": {
                backgroundColor: theme.palette.interaction.neutral.subtleHover,
              },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            disabled={i?.disabled}
            key={i.value || idx}
            value={i.value}
            {...menuItemProps}
          >
            {renderLabel(i.label)}
            <CheckIcon sx={{ color: "#ffffff", fontSize: "16px" }} />
          </MenuItem>
        ))}
      </CustomSelect>
    </Box>
  );
};

export default BasicSelect;

BasicSelect.displayName = "Basic Select";
