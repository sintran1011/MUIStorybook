import { Meta } from "@storybook/react";
import Avatar from "@stories/Avatar";
import { ReactNode } from "react";

const meta: Meta<typeof Avatar> = {
  title: "Component/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    size: "sm",
    src: "https://picsum.photos/40",
  },
};
