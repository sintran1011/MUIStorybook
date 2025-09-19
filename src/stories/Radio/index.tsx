import { Radio, type SxProps, type Theme, useTheme } from "@mui/material";

interface RadioProps<T = string | number | boolean> {
  checked?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  value?: T;
}

const BasicRadio = <T extends string | number | boolean = string>(
  props: RadioProps<T>,
) => {
  const { checked, value, disabled = false, sx } = props;
  const { palette } = useTheme();
  return (
    <Radio
      color="primary"
      sx={{
        "& .MuiSvgIcon-root": {
          color: palette.border.primary,
        },
        "&.Mui-checked .MuiSvgIcon-root": {
          color: palette.brand.main,
        },
        "&.Mui-disabled": {
          opacity: 0.5,
        },
        height: "20px",
        width: "20px",
        ...sx,
      }}
      checked={checked}
      disabled={disabled}
      value={value}
    />
  );
};

export default BasicRadio;

BasicRadio.displayName = "BasicRadio";
