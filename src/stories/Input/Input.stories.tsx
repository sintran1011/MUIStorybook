import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import BaseInput from '.';
import InputNumber from './InputNumber';

const meta: Meta<typeof BaseInput> = {
  title: 'Nexus/BaseInput',
  component: BaseInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    height: {
      description: 'height of Input',
    },
    fullWidth: {
      description: 'If `true` , width input will be 100%',
    },
    disabled: {
      description: 'Change input to disabled state',
    },
    readOnly: {
      description: 'Change input to readonly state',
    },
    bordered: {
      description: 'Change input to `non-border` style',
    },
    placeholder: {
      description: 'Placeholder of input',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    height: 32,
    fullWidth: false,
    disabled: false,
    readOnly: false,
    bordered: true,
    placeholder: 'Search...',
  },
};

export const Gallery = () => {
  return (
    <Stack flexDirection={'row'} gap={6}>
      <BaseInput placeholder="Input Text" />
      <InputNumber type="number" placeholder="Input Number" />
    </Stack>
  );
};

Gallery.parameters = {
  docs: {
    source: {
      code: `
<Input placeholder="Input Text" />

<StyledInputNumber type="number" placeholder="Input Number" />
      `,
    },
  },
};
