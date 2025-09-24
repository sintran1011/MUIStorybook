import { Meta, StoryObj } from '@storybook/react';
import { Grid2 } from '@mui/material';
import BasicCheckbox from '.';
import CheckBoxSingle from './CheckBoxSingle';
import CheckBoxGroup from './CheckBoxGroup';
import { useState } from 'react';

const meta: Meta<typeof BasicCheckbox> = {
  title: 'Nexus/BasicCheckbox',
  component: BasicCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      description: 'Controled checkbox is checked or not',
    },
    indeterminate: {
      description: 'Change styled checkbox to `indeterminate`',
    },
    disabled: {
      description: 'Change checkbox to `disabled` state if `true`',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { checked: false, indeterminate: false, disabled: false },
};

export const Gallery = () => {
  const [singleCheck, setSingleCheck] = useState<0 | 1>(0);
  const [groupCheck, setGroupCheck] = useState<string[]>([]);
  return (
    <Grid2 spacing={4} container>
      <Grid2>
        <BasicCheckbox />
      </Grid2>
      <Grid2>
        <CheckBoxSingle
          onChange={val => setSingleCheck(val)}
          label="Single Checkbox with label"
          value={singleCheck}
        />
      </Grid2>
      <Grid2>
        <CheckBoxGroup
          options={[
            { label: 'Bánh Bao', value: 'banhbao' },
            { label: 'Mì bò', value: 'mibo' },
            { label: 'Pizza', value: 'pizza' },
          ]}
          onChange={val => setGroupCheck(val as string[])}
          value={groupCheck}
        />
      </Grid2>
    </Grid2>
  );
};

Gallery.parameters = {
  docs: {
    source: {
      code: `
 const [singleCheck, setSingleCheck] = useState<0 | 1>(0);
  const [groupCheck, setGroupCheck] = useState<string[]>([]);
  return (
    <Grid2 spacing={4} container>
      <Grid2>
        <BasicCheckbox />
      </Grid2>
      <Grid2>
        <CheckBoxSingle
          onChange={val => setSingleCheck(val)}
          label="Single Checkbox with label"
          value={singleCheck}
        />
      </Grid2>
      <Grid2>
        <CheckBoxGroup
          options={[
            { label: 'Bánh Bao', value: 'banhbao' },
            { label: 'Mì bò', value: 'mibo' },
            { label: 'Pizza', value: 'pizza' },
          ]}
          onChange={val => setGroupCheck(val as string[])}
          value={groupCheck}
        />
      </Grid2>
    </Grid2>
  );
      `,
    },
  },
};
