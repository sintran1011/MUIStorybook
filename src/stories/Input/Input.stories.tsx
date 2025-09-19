import { Meta } from '@storybook/react';
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
};

export default meta;

export const Default = () => {
  return (
    <Stack flexDirection={'row'} gap={6}>
      <BaseInput placeholder="Input Text" />
      <InputNumber type="number" placeholder="Input Number" />
    </Stack>
  );
};

Default.parameters = {
  docs: {
    source: {
      code: `
<Input placeholder="Input Text" noHint />

<StyledInputNumber type="number" placeholder="Input Number" noHint />
      `,
    },
  },
};
