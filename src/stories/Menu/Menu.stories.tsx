'use client';
import { Meta, StoryObj } from '@storybook/react';
import BasicMenu from '@stories/Menu';
import { useState } from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import ModeIcon from '@mui/icons-material/Mode';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SellIcon from '@mui/icons-material/Sell';
import { Typography } from '@mui/material';
import Button from '@stories/Button';
import { theme } from '@styles/theme';

const meta: Meta<typeof BasicMenu> = {
  title: 'Nexus/BasicMenu',
  component: BasicMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    anchorEl: {
      description: 'Element which user click to show menu, use `event.currentTarget`',
    },
    open: {
      description: 'Controled state to show Menu, should use `Boolean(anchorEl)`',
    },
    onClose: {
      description: 'Function closed Menu, just simple set `AnchorEl` to `null`',
    },
    menuItems: {
      description: 'List `Items` to render Menu Item',
    },
    menuProps: {
      description: 'Optional props add to Menu, extends from Menu MUI',
    },
    disabledClosedOnClick: {
      description: 'Prevent event closed when user select item if `True`',
    },
  },
};

export default meta;

export const Default = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const MENU_ITEMS = [
    {
      label: 'Edit',
      onClick: () => {
        console.log('click');
      },
      icon: <ModeIcon sx={{ color: theme.palette.brand.main }} />,
    },
    {
      label: 'Charge',
      onClick: () => {
        console.log('click');
      },
      icon: <BoltIcon sx={{ color: theme.palette.brand.main }} />,
    },
    {
      label: 'Funding',
      onClick: () => {
        console.log('click');
      },
      icon: <MonetizationOnIcon sx={{ color: theme.palette.brand.main }} />,
    },
    {
      label: 'Selling',
      onClick: () => {
        console.log('click');
      },
      icon: <SellIcon sx={{ color: theme.palette.brand.main }} />,
    },
  ];

  return (
    <>
      <Button onClick={handleClick}>Open</Button>
      <BasicMenu anchorEl={anchorEl} open={open} onClose={handleClose} menuItems={MENU_ITEMS} />
    </>
  );
};

Default.parameters = {
  docs: {
    source: {
      code: `
 const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const MENU_ITEMS = [
    {
      label: 'Edit',
      onClick: () => {
        console.log('click');
      },
      icon: <ModeIcon sx={{ color: theme.palette.brand.main }} />,
    },
    {
      label: 'Charge',
      onClick: () => {
        console.log('click');
      },
      icon: <BoltIcon sx={{ color: theme.palette.brand.main }} />,
    },
    {
      label: 'Funding',
      onClick: () => {
        console.log('click');
      },
      icon: <MonetizationOnIcon sx={{ color: theme.palette.brand.main }} />,
    },
    {
      label: 'Selling',
      onClick: () => {
        console.log('click');
      },
      icon: <SellIcon sx={{ color: theme.palette.brand.main }} />,
    },
  ];

  return (
    <>
      <Button onClick={handleClick}>Open</Button>
      <BasicMenu anchorEl={anchorEl} open={open} onClose={handleClose} menuItems={MENU_ITEMS} />
    </>
  );
      `,
    },
  },
};
