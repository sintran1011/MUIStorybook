import { Meta } from "@storybook/react";
import TextArea from ".";

const meta: Meta<typeof TextArea> = {
  title: "Quoxent/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    width:'800px'
  },
};
