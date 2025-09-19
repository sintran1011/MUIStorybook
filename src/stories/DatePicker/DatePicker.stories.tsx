import { Meta } from '@storybook/react';
import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Nexus/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  return <DatePicker />;
};
