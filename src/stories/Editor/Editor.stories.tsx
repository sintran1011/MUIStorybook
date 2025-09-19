import { Meta } from '@storybook/react';
import Editor from '.';

const meta: Meta<typeof Editor> = {
  title: 'Nexus/Editor',
  component: Editor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  return <Editor />;
};
