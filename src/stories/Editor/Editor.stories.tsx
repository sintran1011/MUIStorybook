import { Meta } from "@storybook/react";

import Editor from "@stories/Editor";

const meta: Meta<typeof Editor> = {
  title: "Quoxent/Editor",
  component: Editor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    style: {
      width: "700px",
    },
    onChange: (val) => console.log(val, "value"),
  },
};
