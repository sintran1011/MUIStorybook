import { Meta } from '@storybook/react';

import Upload from '@stories/Upload';

const meta: Meta<typeof Upload> = {
  title: 'Nexus/Upload',
  component: Upload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    processStepsRender: 3,
    containerSx: {
      width: '800px',
    },
  },
};
