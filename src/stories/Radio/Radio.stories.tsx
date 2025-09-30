import { Meta, StoryObj } from '@storybook/react';
import { Grid2 } from '@mui/material';
import BaseRadioGroup from './RadioGroup';

const meta: Meta<typeof BaseRadioGroup> = {
  title: 'Nexus/BaseRadioGroup',
  component: BaseRadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'Options to render item, with `label` - `value` - `disabled`',
    },
    height: {
      description: 'Height of Radio Group',
    },
    direction: {
      description: 'Flex direction of radio group items',
    },
    readOnly: {
      description: 'Change Radio into `ReadOnly` state',
    },
    value: {
      description: '`Controlled Value` of radio group',
    },
    labelSx: {
      description: '`Sx Props` of `Label` in radio items label',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    options: [
      {
        label: 'Option1',
        value: '1',
      },
      {
        label: 'Option2',
        value: '2',
      },
      {
        label: 'Option3',
        value: '3',
      },
    ],
    height: 'auto',
    direction: 'row',
    readOnly: false,
    value: '1',
  },
};

export const Default = () => {
  return (
    <Grid2 spacing={4} container>
      <Grid2>
        <BaseRadioGroup
          options={[
            {
              label: 'Option1',
              value: '1',
            },
            {
              label: 'Option2',
              value: '2',
            },
            {
              label: 'Option3',
              value: '3',
            },
          ]}
        />
      </Grid2>
    </Grid2>
  );
};

Default.parameters = {
  docs: {
    source: {
      code: `
const theme = useTheme();

 <Button
  size="small"
  variant="outlined"
>
 Cancel / small
</Button>

<Button
  size="medium"
  variant="primary"
>
 Create / medium
</Button>

<Button
  size="large"
  variant="secondary"
>
  Delete / large
</Button>     
      `,
    },
  },
};
