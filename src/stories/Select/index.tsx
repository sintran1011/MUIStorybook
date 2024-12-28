import { forwardRef, ReactNode } from 'react';
import { MenuItem, SelectProps, Typography, TypographyProps, MenuItemProps as MUIMenuItemProps } from '@mui/material';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import { CustomSelect } from './styled';

export type MenuItemLabel = string | ReactNode;

export interface MenuItemProps {
  value: string;
  label: MenuItemLabel;
  icon?: string;
  disabled?: boolean;
}

interface IProps<T> extends Omit<SelectProps, 'options'> {
  options: MenuItemProps[];
  width?: number | string;
  height?: number | string;
  typographyProps?: TypographyProps;
  menuItemProps?: MUIMenuItemProps;
  placeholder?: string;
  multiple?: boolean;
  renderItem?: (label: T) => ReactNode;
}

const BasicSelect = ({
  height,
  width = 140,
  fullWidth = false,
  options = [],
  typographyProps,
  sx,
  MenuProps,
  menuItemProps,
  placeholder,
  multiple = false,
  renderValue,
  renderItem,
  ...restProps
}: IProps<MenuItemProps>) => {
  const sxProps = {
    minWidth: fullWidth ? '100%' : width,
    height,
    ...sx,
  };

  const CustomIcon = forwardRef((props, _ref) => (
    <ArrowDropDownIcon {...props} style={{ right: '16px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
  ));

  const renderLabel = (label: MenuItemLabel) => {
    if (typeof label === 'string')
      return (
        <Typography color="white" fontSize="14px" variant="body-medium" {...typographyProps}>
          {label}
        </Typography>
      );
    return label;
  };

  return (
    <CustomSelect
      MenuProps={{
        PaperProps: {
          sx: {
            bgcolor: '#1C1919',
            borderRadius: '8px',
          },
        },
        MenuListProps: {
          sx: {
            padding: 0,
            maxHeight: '336px',
          },
        },
        ...MenuProps,
      }}
      IconComponent={CustomIcon}
      sx={sxProps}
      multiple={multiple}
      displayEmpty
      variant="outlined"
      {...restProps}
      renderValue={value => {
        const isValidValue = multiple ? (value as []).length > 0 : !!value;
        if (!isValidValue) {
          return (
            <Typography color="#767272" fontSize="14px" lineHeight="20px" variant="body-medium">
              {placeholder}
            </Typography>
          );
        }
        return renderValue ? renderValue(value) : (value as string);
      }}>
      {options.map((i, idx) => (
        <MenuItem
          sx={{
            padding: '12px',
            '&:hover': {
              backgroundColor: '#332D2D',
            },
          }}
          disabled={i?.disabled}
          key={i.value || idx}
          value={i.value}
          {...menuItemProps}>
          {!!renderItem ? renderItem(i) : renderLabel(i.label)}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default BasicSelect;
