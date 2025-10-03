import { Meta, StoryObj } from '@storybook/react';
import BasicSelect from '@stories/Select';

const meta: Meta<typeof BasicSelect> = {
  title: 'Nexus/BasicSelect',
  component: BasicSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: '`Array` to render `MenuItems` in dropdown',
      control: 'object',
      table: {
        type: {
          summary: 'MenuItemProps[]',
          detail: `
interface MenuItemProps {
  value: string;
  label: MenuItemLabel;
  icon?: string;
  disabled?: boolean;
}
          `.trim(),
        },
      },
    },
    width: {
      description: '`Width` of Autocomplete, will be remove in case `fullWidth = true`',
    },
    height: {
      description: 'Height of Autocomplete',
    },
    menuItemProps: {
      description: 'Additional `MenuItems props` add to control `MenuItems`',
    },
    multiple: {
      description: 'If `True`, trigger multiple mode allow user select many values',
    },
    value: {
      description: 'Value to controlled Autocomplete',
    },
    readOnly: {
      description: 'Change component into `ReadOnly` state',
    },
    disabled: {
      description: 'Change component into `Disabled` state',
    },
    bordered: {
      description: 'Whether component have border or not',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    options: [
      { label: 'Bánh bao', value: '1' },
      { label: 'Xá xíu', value: '2' },
      { label: 'Mì udon', value: '3' },
    ],
  },
};
