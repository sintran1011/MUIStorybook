import { Meta } from '@storybook/react';
import Avatar from '@stories/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Nexus/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    size: 'xl',
    src: 'https://picsum.photos/40',
  },
};
