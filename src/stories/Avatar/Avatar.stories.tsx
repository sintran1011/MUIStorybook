import { Meta } from '@storybook/react';
import Avatar from '@stories/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Nexus/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'radio' },
      description: 'Size of avatar, config follow `Design System`',
    },
    src: {
      description: 'Url image to show on avatar',
    },
    shape: {
      description: 'Shape of Avatar : `Circle` or ``Square',
    },
    isLoading: {
      description: '`Loading` state of Avatar',
    },
    children: {
      description: 'Name of Avatar, use to shown `Character` in case url not have',
    },
  },
};

export default meta;

export const Default = {
  args: {
    size: 'xl',
    src: 'https://picsum.photos/40',
    isLoading: false,
    children: 'Sinbad',
  },
};
