import { Meta } from "@storybook/react";

import { StatusChip } from "@stories/StatusChip";

const meta: Meta<typeof StatusChip> = {
  title: "Component/StatusChip",
  component: StatusChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    value: "Current",
    type: "success",
  },
};
