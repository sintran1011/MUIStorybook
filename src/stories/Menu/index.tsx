import * as React from "react";
import { Menu, MenuItem, MenuProps, MenuItemProps } from "@mui/material";

export interface MenuItems {
  label: string | React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
  menuItemProps?: MenuItemProps;
  disabled?: boolean;
}

interface GenericMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  menuItems: MenuItems[];
  menuProps?: Omit<MenuProps, "open">;
}

const BasicMenu = ({
  anchorEl,
  open,
  onClose,
  menuItems,
  menuProps,
}: GenericMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "white",
        },
        "& .MuiMenu-list": {
          maxWidth: "fit-content",
        },
      }}
      {...menuProps}
    >
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          disabled={item?.disabled}
          onClick={() => {
            item.onClick();
            onClose();
          }}
          {...item.menuItemProps}
          sx={{
            fontSize: "14px",
          }}
        >
          {item.icon && <span style={{ marginRight: 8 }}>{item.icon}</span>}
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default BasicMenu;

BasicMenu.displayName = "BasicMenu";
