import { Meta } from '@storybook/react';
import BasicTabs from '@stories/Tabs';
import { ReactNode } from 'react';
import { theme } from '@styles/theme';

const meta: Meta<typeof BasicTabs> = {
  title: 'Nexus/BasicTabs',
  component: BasicTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: '`Array` to render `TabItems`',
      control: 'object',
      table: {
        type: {
          summary: 'TabOption[]',
          detail: `
interface TabOption {
  key: string;
  label: string | ReactNode;
  content?: ReactNode;
  disabled?: boolean;
  icon?: string | ReactElement;
}
          `.trim(),
        },
      },
    },
    defaultValue: {
      description: '`Key value` of initial tabs selected',
    },
    tabsProps: {
      description: 'Custom Props pass to container',
    },
    tabProps: {
      description: 'Custom Props pass to single tabs button',
    },
    tabPanelSx: {
      description: 'Custom Props pass to tab content body',
    },
    onChange: {
      description: 'Function trigger when change tabs with param is `Key of TabItems`',
    },
  },
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
          color: '#ffffff',
        },
        borderRadius: '8px',
        backgroundColor: theme.palette.brand.main,
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
