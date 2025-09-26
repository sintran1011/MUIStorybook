import React from 'react';
import { Checkbox, CheckboxProps, useTheme } from '@mui/material';

export interface BasicCheckboxProps extends CheckboxProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  indeterminate?: boolean;
  disabled?: boolean;
  value?: string;
  style?: React.CSSProperties;
}

const BasicCheckbox = (props: BasicCheckboxProps) => {
  const {
    checked,
    value,
    onChange,
    disabled = false,
    indeterminate = false,
    style,
    ...rest
  } = props;
  const { palette } = useTheme();

  return (
    <Checkbox
      indeterminate={indeterminate}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      sx={{
        '& .MuiSvgIcon-root': {
          color: palette.border.secondary,
        },
        '&.Mui-checked .MuiSvgIcon-root': {
          color: palette.brand.main,
        },
        '&.Mui-disabled': {
          opacity: '0.5',
        },
      }}
      color="secondary"
      value={value}
      style={style}
      {...rest}
    />
  );
};

export default BasicCheckbox;

BasicCheckbox.displayName = 'BasicCheckbox';
