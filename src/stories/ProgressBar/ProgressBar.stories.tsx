import { Meta, StoryObj } from '@storybook/react';
import { Box, Grid2 } from '@mui/material';
import ProgressBar from '.';

const meta: Meta<typeof ProgressBar> = {
  title: 'Nexus/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      description: '`Error` status of progress',
    },
    progress: {
      description: '`Number percentage` of progress loading',
      control: 'range',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    progress: 10,
    error: false,
  },
  render: args => (
    <Box width={800}>
      <ProgressBar {...args} />
    </Box>
  ),
};
