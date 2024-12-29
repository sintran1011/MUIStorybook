'use client';
import * as React from 'react';
import { Menu, MenuItem, MenuProps, MenuItemProps } from '@mui/material';

interface GenericMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  menuItems: {
    label: string | React.ReactNode;
    onClick: () => void;
    icon?: React.ReactNode;
    menuItemProps?: MenuItemProps;
    disabled?: boolean;
  }[];
  menuProps?: Omit<MenuProps, 'open'>;
}

const BasicMenu: React.FC<GenericMenuProps> = ({ anchorEl, open, onClose, menuItems, menuProps }) => {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose} {...menuProps}>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          disabled={item?.disabled}
          onClick={() => {
            item.onClick();
            onClose();
          }}
          {...item.menuItemProps}>
          {item.icon && <span style={{ marginRight: 8 }}>{item.icon}</span>}
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default BasicMenu;
