import { Meta, StoryObj } from '@storybook/react';

import Upload from '@stories/Upload';
import { Stack } from '@mui/material';

const meta: Meta<typeof Upload> = {
  title: 'Nexus/Upload',
  component: Upload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {},
  render: args => {
    return (
      <Stack width={'700px'} height={'300px'}>
        <Upload {...args} />
      </Stack>
    );
  },
};
