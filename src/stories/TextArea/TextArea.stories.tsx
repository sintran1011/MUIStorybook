import { Meta } from '@storybook/react';
import TextArea from '.';

const meta: Meta<typeof TextArea> = {
  title: 'Nexus/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = () => <TextArea maxCharacters={500} width={800} />;
