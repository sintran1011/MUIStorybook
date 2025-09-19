'use client';
import { Meta } from '@storybook/react';
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
      label: (
        <Typography
          color="white"
          sx={{ fontSize: '14px', lineHeight: '20px' }}
          variant="body-medium"
        >
          Edit
        </Typography>
      ),
      onClick: () => {
        console.log('click');
      },
      icon: <ModeIcon sx={{ color: theme.palette.brand.main }} />,
      menuItemProps: {
        sx: {
          ':hover': {
            backgroundColor: '#332D2D',
          },
        },
      },
    },
    {
      label: (
        <Typography
          color="white"
          sx={{ fontSize: '14px', lineHeight: '20px' }}
          variant="body-medium"
        >
          Charge
        </Typography>
      ),
      onClick: () => {
        console.log('click');
      },
      icon: <BoltIcon sx={{ color: theme.palette.brand.main }} />,
      menuItemProps: {
        sx: {
          ':hover': {
            backgroundColor: '#332D2D',
          },
        },
      },
    },
    {
      label: (
        <Typography
          color="white"
          sx={{ fontSize: '14px', lineHeight: '20px' }}
          variant="body-medium"
        >
          Funding
        </Typography>
      ),
      onClick: () => {
        console.log('click');
      },
      icon: <MonetizationOnIcon sx={{ color: theme.palette.brand.main }} />,
      menuItemProps: {
        sx: {
          ':hover': {
            backgroundColor: '#332D2D',
          },
        },
      },
    },
    {
      label: (
        <Typography
          color="white"
          sx={{ fontSize: '14px', lineHeight: '20px' }}
          variant="body-medium"
        >
          Selling
        </Typography>
      ),
      onClick: () => {
        console.log('click');
      },
      icon: <SellIcon sx={{ color: theme.palette.brand.main }} />,
      menuItemProps: {
        sx: {
          ':hover': {
            backgroundColor: '#332D2D',
          },
        },
      },
    },
  ];

  return (
    <>
      <Button onClick={handleClick}>Open</Button>
      <BasicMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        menuProps={{
          sx: {
            '& .MuiPaper-root': {
              backgroundColor: '#1C1919',
            },
          },
        }}
        menuItems={MENU_ITEMS}
      />
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
    label: (
      <Typography
        color="white"
        sx={{ fontSize: "14px", lineHeight: "20px" }}
        variant="body-medium"
      >
        Edit
      </Typography>
    ),
    onClick: () => {
      console.log("click");
    },
    icon: <ModeIcon />,
    menuItemProps: {
      sx: {
        ":hover": {
          backgroundColor: "#332D2D",
        },
      },
    },
  },
  {
    label: (
      <Typography
        color="white"
        sx={{ fontSize: "14px", lineHeight: "20px" }}
        variant="body-medium"
      >
        Charge
      </Typography>
    ),
    onClick: () => {
      console.log("click");
    },
    icon: <BoltIcon />,
    menuItemProps: {
      sx: {
        ":hover": {
          backgroundColor: "#332D2D",
        },
      },
    },
  },
  {
    label: (
      <Typography
        color="white"
        sx={{ fontSize: "14px", lineHeight: "20px" }}
        variant="body-medium"
      >
        Funding
      </Typography>
    ),
    onClick: () => {
      console.log("click");
    },
    icon: <MonetizationOnIcon />,
    menuItemProps: {
      sx: {
        ":hover": {
          backgroundColor: "#332D2D",
        },
      },
    },
  },
  {
    label: (
      <Typography
        color="white"
        sx={{ fontSize: "14px", lineHeight: "20px" }}
        variant="body-medium"
      >
        Selling
      </Typography>
    ),
    onClick: () => {
      console.log("click");
    },
    icon: <SellIcon />,
    menuItemProps: {
      sx: {
        ":hover": {
          backgroundColor: "#332D2D",
        },
      },
    },
  },
];

<Button onClick={handleClick}>Open</Button>
<BasicMenu
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  menuProps={{
    sx: {
      "& .MuiPaper-root": {
        backgroundColor: "#1C1919",
      },
    },
  }}
  menuItems={MENU_ITEMS}
/>;
      `,
    },
  },
};
