import { Meta, StoryObj } from '@storybook/react';
import BasicModal from '@stories/Modal';
import { useState } from 'react';
import Button from '@stories/Button';

const meta: Meta<typeof BasicModal> = {
  title: 'Nexus/BasicModal',
  component: BasicModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '`Body content` of modal',
    },
    isFullScreen: {
      description: 'If `True` the modal will have screen size',
    },
    onClose: {
      description: 'Function excuted to close `Modal`',
    },
    onSave: {
      description: 'Function excute when click on `Second Button`',
    },
    title: {
      description: 'Title of modal',
    },
    footerSx: {
      description: 'Sx Props of Modal Footer',
    },
    modalProps: {
      description: 'Sx Props of Modal Container',
    },
    titleProps: {
      description: 'Sx Props of Modal Title',
    },
    contentProps: {
      description: 'Sx Props of Modal Body',
    },
    typographyProps: {
      description: 'Sx Props to custom title in case title just a `string`',
    },
    firstButton: {
      description: 'Props pass to `First Button`',
      control: 'object',
      table: {
        type: {
          summary: `ButtonProps`,
          detail: `
type ButtonProps = {
  text?: string | ReactNode;
  sx?: SxProps<Theme>;
  props?: Record<string, unknown>;
};
`.trim(),
        },
      },
    },
    secondButton: {
      description: 'Props pass to `Second Button`',
      control: 'object',
      table: {
        type: {
          summary: `ButtonProps`,
          detail: `
type ButtonProps = {
  text?: string | ReactNode;
  sx?: SxProps<Theme>;
  props?: Record<string, unknown>;
};
`.trim(),
        },
      },
    },
    width: {
      description: 'Width of Modal',
    },
    hasFooter: {
      description: 'Whether Modal have `Footer` or not',
    },
    hasTitle: {
      description: 'Whether Modal have `Title` or not',
    },
    icon: {
      description: 'Icon additional in Title',
    },
    hasClosedIcon: {
      description: 'Whether Modal have `Close Icon` or not',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    isFullScreen: false,
    title: 'Title of Modal',
    hasFooter: true,
    hasTitle: true,
    hasClosedIcon: true,
  },
  render: args => {
    const [open, setOpen] = useState<boolean>(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <BasicModal title="Title Modal Props" onClose={() => setOpen(false)} open={open} {...args}>
          This is a demo for modal content
        </BasicModal>
      </div>
    );
  },
};
