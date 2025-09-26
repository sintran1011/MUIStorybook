import * as React from 'react';
import { Menu, MenuItem, MenuProps, MenuItemProps } from '@mui/material';

export interface MenuItems {
  label: string | React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
  menuItemProps?: MenuItemProps;
  disabled?: boolean;
}

export interface GenericMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  menuItems: MenuItems[];
  menuProps?: Omit<MenuProps, 'open'>;
  disabledClosedOnClick?: boolean;
}

const BasicMenu = ({
  anchorEl,
  open,
  onClose,
  menuItems,
  menuProps,
  disabledClosedOnClick = false,
}: GenericMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: 'white',
        },
      }}
      {...menuProps}
      slotProps={{ list: { autoFocusItem: false } }}
    >
      {menuItems.map((item, index) => {
        return (
          <MenuItem
            key={index}
            disabled={item?.disabled}
            onClick={() => {
              item.onClick();
              if (disabledClosedOnClick) return;
              onClose();
            }}
            {...item.menuItemProps}
            sx={{
              fontSize: '14px',
              ...item.menuItemProps?.sx,
            }}
          >
            {item.icon && <span style={{ marginRight: 8 }}>{item.icon}</span>}
            {item.label}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default BasicMenu;

BasicMenu.displayName = 'BasicMenu';
