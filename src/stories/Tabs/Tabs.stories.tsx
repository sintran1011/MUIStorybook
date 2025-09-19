import { Meta } from '@storybook/react';
import BasicTabs from '@stories/Tabs';
import { ReactNode } from 'react';

const meta: Meta<typeof BasicTabs> = {
  title: 'Nexus/BasicTabs',
  component: BasicTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type TabItem = { label: string; content: ReactNode; key: string };

const TABS_DATA = [
  {
    label: 'Build Version',
    content: <div>Build Version content</div>,
    key: '0',
  },
  {
    label: 'Discount Management',
    content: <div>Discount Management content</div>,
    key: '1',
  },
  {
    label: 'News & Announcement',
    content: <div>News & Announcement content</div>,
    key: '2',
  },
];

export const Default = {
  args: {
    options: TABS_DATA,
    defaultValue: '0',
    tabPanelSx: {
      borderRadius: '8px',
      padding: '24px 0 0 0',
    },
    tabProps: {
      sx: {
        '& button': {
          textTransform: 'capitalize',
        },
      },
    },
    renderContentTab: (opt: TabItem) => {
      return opt?.content;
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
  type TabItem = {
  label: string;
  content: ReactNode;
  key: string;
};

const TABS_DATA = [
  {
    label: "Build Version",
    content: <div>Build Version content</div>,
    key: "0",
  },
  {
    label: "Discount Management",
    content: <div>Discount Management content</div>,
    key: "1",
  },
  {
    label: "News & Announcement",
    content: <div>News & Announcement content</div>,
    key: "2",
  },
];

<BasicTabs
  defaultValue="0"
  options={TABS_DATA}
  tabPanelSx={{
    borderRadius: "8px",
    padding: "24px 0 0 0",
  }}
  tabProps={
   sx: {
      "& button": {
        textTransform: "capitalize",
      },
    },
  }
  renderContentTab={(opt: TabItem) => opt?.content}
/>;
        `,
      },
    },
  },
};

export const FilledTabs = {
  args: {
    options: TABS_DATA,
    defaultValue: '0',
    tabsProps: {
      sx: {
        '& .MuiTabs-indicator': {
          backgroundColor: 'transparent',
        },
        '& .MuiButtonBase-root.Mui-selected': {
          color: '#EF4923',
        },
        borderRadius: '8px',
        backgroundColor: '#151313e6',
        backdropFilter: 'blur(2px)',
      },
    },
    tabProps: {
      sx: {
        '& button': {
          textTransform: 'capitalize',
        },
      },
    },
    tabPanelSx: {
      borderRadius: '8px',
      padding: '24px 0 0 0',
    },
    renderContentTab: (opt: TabItem) => {
      return opt?.content;
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
  type TabItem = {
  label: string;
  content: ReactNode;
  key: string;
};

const TABS_DATA = [
  {
    label: "Build Version",
    content: <div>Build Version content</div>,
    key: "0",
  },
  {
    label: "Discount Management",
    content: <div>Discount Management content</div>,
    key: "1",
  },
  {
    label: "News & Announcement",
    content: <div>News & Announcement content</div>,
    key: "2",
  },
];

<BasicTabs
    defaultValue="0"
    options={TABS_DATA}
    tabsProps={{
      sx: {
        '& .MuiTabs-indicator': {
          backgroundColor: 'transparent',
        },
        '& .MuiButtonBase-root.Mui-selected': {
          color: '#EF4923',
        },
        borderRadius: '8px',
        backgroundColor: '#151313e6',
        backdropFilter: 'blur(2px)',
        width: 'fit-content',
        padding: '0 16px',
      },
    }}
    tabProps={{
      sx: {
        '& button': {
          textTransform: 'capitalize',
        },
      },
    }}
    tabPanelSx={{
      borderRadius: '8px',
      padding: '24px 0 0 0',
    }}
    renderContentTab={(opt: TabItem) => opt?.content}
  />
        `,
      },
    },
  },
};
