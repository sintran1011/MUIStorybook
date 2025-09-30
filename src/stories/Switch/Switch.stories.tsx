import { Meta, StoryObj } from '@storybook/react';
import { Grid2 } from '@mui/material';
import BasicSwitch from '.';

const meta: Meta<typeof BasicSwitch> = {
  title: 'Nexus/BasicSwitch',
  component: BasicSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Text label of switch',
    },
    value: {
      description: '`Controlled Value` of switch',
    },
    controlLabelSx: {
      description: '`Sx Props` to control layout of component',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: 'Active',
    value: false,
    controlLabelSx: { gap: '8px' },
  },
};
