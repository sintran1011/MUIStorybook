import { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Nexus/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      description: '`Style CSS` of container',
    },
    fullWidth: {
      description: 'If `True` , width will be 100%',
    },
    width: {
      description: '`Width` of component',
    },
    height: {
      description: '`Height` of component',
    },
    placeholder: {
      description: 'Placeholder of input ',
    },
    format: {
      description: 'Format `Time` show in value',
    },
    views: {
      description: '`View types` of Calendar',
      options: ['year', 'month', 'day'],
      control: 'check',
    },
    readOnly: {
      description: 'Change component to `Readonly` state',
    },
    disabled: {
      description: 'Change component to `Disabled` state',
    },
    disableClearable: {
      description: 'Whether hide clear icon or not',
    },
    bordered: {
      description: 'Whether have border or not',
    },
    slotProps: {
      description: '`slotProps` of MUI library',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    fullWidth: false,
    width: 250,
    height: 33,
    placeholder: 'dd/mm/yyyy',
    views: ['year', 'month', 'day'],
    readOnly: false,
    disabled: false,
    disableClearable: false,
    bordered: true,
  },
};
