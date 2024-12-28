import React from "react";
import {
  Checkbox,
  FormControlLabel,
  CheckboxProps,
  FormControlLabelProps,
  FormGroup,
} from "@mui/material";

interface CheckboxOption {
  label: string;
  value: string;
}

interface GenericCheckboxProps {
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  label?: string | React.ReactNode;
  indeterminate?: boolean;
  disabled?: boolean;
  checkboxProps?: CheckboxProps;
  labelProps?: FormControlLabelProps;
  /* Checkbox group section */
  options?: CheckboxOption[];
  selected?: string[];
  onGroupChange?: (selected: string[]) => void;
}

const BasicCheckbox: React.FC<GenericCheckboxProps> = ({
  checked,
  onChange,
  checkboxProps,
  disabled = false,
}) => {
  const checkbox = (
    <Checkbox
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      sx={{
        "& .MuiSvgIcon-root": {
          color: "#5C5757",
        },
        "&.Mui-checked .MuiSvgIcon-root": {
          color: "#EF4923",
        },
        "&.Mui-disabled": {
          color: "#EF4923",
        },
      }}
      color="secondary"
      {...checkboxProps}
    />
  );

  return checkbox;
};

export default BasicCheckbox;
