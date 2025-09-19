import { Meta } from '@storybook/react';

import { StatusChip } from '@stories/StatusChip';
import { Grid2 } from '@mui/material';

const meta: Meta<typeof StatusChip> = {
  title: 'Nexus/StatusChip',
  component: StatusChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const ARR = [
  { type: 'Active', value: 'Active' },
  { type: 'Suspended', value: 'Suspended' },
  { type: 'Inactive', value: 'Inactive' },
  { type: 'Left', value: 'Left' },
  { type: 'Open', value: 'Open' },
];

export const Default = () => {
  return (
    <Grid2 spacing={4} container>
      {ARR.map(i => (
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
      `,
    },
  },
};
