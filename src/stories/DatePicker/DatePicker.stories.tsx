import { Meta } from "@storybook/react";

import DateTimePicker from "@stories/DatePicker";
import moment from "moment";

const meta: Meta<typeof DateTimePicker> = {
  title: "Quoxent/DatePicker",
  component: DateTimePicker,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: { control: { type: "date" } },
    onChange: { action: "changed" },
    readOnly: {
      control: { type: "boolean" },
      description: "Lock the DatePicker, only can view value",
    },
    fullWidth: {
      type: "boolean",
      control: { type: "boolean" },
      description: "Enable full width of father div",
    },
    view: {
      control: "multi-select",
      options: ["year", "month", "day", "hours", "minutes", "seconds"],
      description: "Determine what will showoff in the DatePicker",
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    value: moment(),
    onChange: (date) =>
      console.log("Today is:", moment(date).format("yyyy-MM-dd")),
    fullWidth: true,
    readOnly: false,
    view: ["year", "month", "day", "hours", "minutes", "seconds"],
  },
};
