import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import Autocomplete from '.';

const meta: Meta<typeof Autocomplete> = {
  title: 'Nexus/Autocomplete',
  component: Autocomplete,
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
  description?: string;
  email?: string;
  icon?: string;
  disabled?: boolean;
  [key: string]: any;
}
          `.trim(),
        },
      },
    },
    style: {
      description: '`Style Css` of container',
    },
    menuItemProps: {
      description: 'Additional `MenuItems props` add to control `MenuItems`',
    },
    fullWidth: {
      description: 'Whether `Autocomplete` have `Width` 100% or not',
    },
    width: {
      description: '`Width` of Autocomplete, will be remove in case `fullWidth = true`',
    },
    height: {
      description: 'Height of Autocomplete',
    },
    placeholder: {
      description: 'Placeholder text',
    },
    extraOptions: {
      description:
        '`Additional Hidden Options` use in case need to add some `Fixed Value` but not exist in Options, just effect if `isControlled = true` and `multiple = true`. Ex: You need to add value CEO, but the CEO options should not show in options => options is hidden but value pass into still exist',
    },
    value: {
      description: 'Value to controlled Autocomplete',
    },
    onValuesChange: {
      description:
        'Function excute same `time` and same `params` with onChange, use to handle side effect logic',
    },
    isLoading: {
      description: 'Change component into `Loading` state',
    },
    readOnly: {
      description: 'Change component into `ReadOnly` state',
    },
    disabled: {
      description: 'Change component into `Disabled` state',
    },
    onSearch: {
      description:
        'Function excute when user type something into input, if `undefined` , then function filter default will trigger to search in dropdown menu',
    },
    displayValue: {
      description:
        'This is an important `props`, please careful. This props is the `key` for hashmap to show `value` after user select, and value of key should be `string` type',
    },
    filterOptionsDisplay: {
      description:
        'Same with `displayValue` , this props is the key to filter when user type search , in case `onSearch = undefined`',
    },
    isControlled: {
      description:
        'Detech component is `controlled component` or `uncontrolled component`. If not use with `FormItem`, please add this props as `false`',
    },
    disableClearable: {
      description: 'Hide clear icon if `true`',
    },
    maxLength: {
      description: 'Max chips value render, just effect if `multiple = true`',
    },
    renderTags: {
      description: 'Function to render custom `Value chip`, just effect if `multiple = true`',
    },
    bordered: {
      description: 'Whether component have border or not',
    },
    multiple: {
      description: 'If `True`, trigger multiple mode allow user select many values',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    options: [
      { label: 'SinCEO', value: 'ceo', disabled: true },
      { label: 'SinPM', value: 'pm' },
      { label: 'SinFE', value: 'fe' },
    ],
    extraOptions: [{ label: 'SinCuly', value: 'culy' }],
    isControlled: false,
    multiple: true,
    isLoading: false,
    width: 240,
    height: 30.5,
    placeholder: 'Select me',
    readOnly: false,
    disabled: false,
    maxLength: 4,
    bordered: true,
  },
};
