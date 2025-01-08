import { Meta } from "@storybook/react";

import { StatusChip } from "@stories/StatusChip";
import { Grid2 } from "@mui/material";

const meta: Meta<typeof StatusChip> = {
  title: "Quoxent/StatusChip",
  component: StatusChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const ARR = [
  { type: "success", value: "Success" },
  { type: "normal", value: "Normal" },
  { type: "disabled", value: "Disabled" },
  { type: "review", value: "Review" },
  { type: "ready", value: "Ready" },
  { type: "reject", value: "Reject" },
];

export const Default = () => {
  return (
    <Grid2 spacing={4} container>
      {ARR.map((i) => (
        <Grid2 key={i.type}>
          <StatusChip type={i.type} value={i.value} />
        </Grid2>
      ))}
    </Grid2>
  );
};

Default.parameters = {
  docs: {
    source: {
      code: `
      // Type is determined color-bgColor and value is the content
      <StatusChip type="success" value="Success" />
      <StatusChip type="normal" value="Normal" />
      <StatusChip type="disabled" value="Disabled" />
      <StatusChip type="review" value="Review" />
      <StatusChip type="ready" value="Ready" />
      <StatusChip type="reject" value="Reject" />
      `,
    },
  },
};
