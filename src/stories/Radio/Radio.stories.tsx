import { Meta, StoryObj } from '@storybook/react';
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
        label: 'Option 1',
        value: '1',
      },
      {
        label: 'Option 2',
        value: '2',
      },
      {
        label: 'Option 3',
        value: '3',
      },
    ],
    height: 'auto',
    direction: 'row',
    readOnly: false,
  },
  render: args => (
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
      {...args}
    />
  ),
};
