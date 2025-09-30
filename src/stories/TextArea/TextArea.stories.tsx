import { Meta, StoryObj } from '@storybook/react';
import TextArea from '.';

const meta: Meta<typeof TextArea> = {
  title: 'Nexus/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      description: '`Width of TextArea`',
    },
    maxCharacters: {
      description: '`Max Characters` user can input',
    },
    rows: {
      description: 'The count of `Rows` that TextArea contain',
    },
    maxRows: {
      description: 'Max rows `increased` when user enter to go down',
    },
    bordered: {
      description: 'Whether component have border or not, default is `True`',
    },
    readOnly: {
      description: 'Change component into `ReadOnly` state if true',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    width: '700px',
    maxCharacters: 500,
    rows: 5,
    maxRows: 10,
    placeholder: 'Please type...',
    bordered: true,
    readOnly: false,
  },
};
