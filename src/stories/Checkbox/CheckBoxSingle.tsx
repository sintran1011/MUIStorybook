import {
  FormControlLabel,
  type SxProps,
  type Theme,
  Typography,
} from "@mui/material";
import React from "react";
import BasicCheckbox, { BasicCheckboxProps } from ".";

export interface CheckBoxSingleProps
  extends Omit<BasicCheckboxProps, "value" | "onChange" | "controlLabelSx"> {
  label?: string | React.ReactNode;
  value?: 0 | 1;
  disabled?: boolean;
  onChange?: (e: 0 | 1) => void;
  onValuesChange?: (e: 0 | 1) => void;
  controlLabelSx?: SxProps<Theme>;
}

const CheckBoxSingle = (props: CheckBoxSingleProps) => {
  const {
    label,
    value,
    disabled,
    onChange = () => {},
    onValuesChange = () => {},
    controlLabelSx = {},
    ...restProps
  } = props;

  return (
    <FormControlLabel
      label={
        typeof label === "string" ? (
          <Typography variant="body-medium">{label}</Typography>
        ) : (
          label
        )
      }
      sx={controlLabelSx}
      control={
        <BasicCheckbox
          disabled={disabled}
          checked={value ? true : false}
          onChange={(_, checked) => {
            onValuesChange(checked ? 1 : 0);
            onChange(checked ? 1 : 0);
          }}
          {...restProps}
        />
      }
    />
  );
};

export default CheckBoxSingle;

CheckBoxSingle.displayName = "CheckBoxSingle";
