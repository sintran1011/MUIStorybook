import { Meta } from "@storybook/react";
import BasicTabs from "@stories/Tabs";
import { ReactNode } from "react";

const meta: Meta<typeof BasicTabs> = {
  title: "Component/BasicTabs",
  component: BasicTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type TabItem = { label: string; content: ReactNode; key: string };

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

export const Default = {
  args: {
    options: TABS_DATA,
    defaultValue: "0",
    tabProps: {
      sx: {
        fontSize: "16px",
        fontWeight: "bold",
        "& button": {
          textTransform: "capitalize",
        },
      },
    },
    tabPanelSx: {
      borderRadius: "8px",
      padding: "24px 0 0 0",
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
  tabProps={{
    sx: {
      fontSize: "16px",
      fontWeight: "bold",
      "& button": {
        textTransform: "capitalize",
      },
    },
  }}
  tabPanelSx={{
    borderRadius: "8px",
    padding: "24px 0 0 0",
  }}
  renderContentTab={(opt: TabItem) => opt?.content}
/>;
        `,
      },
    },
  },
};
