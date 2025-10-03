import { Meta, StoryObj } from '@storybook/react';
import { Grid2 } from '@mui/material';
import BasicTimeline from '.';

const meta: Meta<typeof BasicTimeline> = {
  title: 'Nexus/BasicTimeline',
  component: BasicTimeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: '`Array` to render `Items`',
      control: 'object',
      table: {
        type: {
          summary: 'TimelineOption[]',
          detail: `
interface TimelineOption {
  content?: string | ReactNode;
  icon?: ReactNode;
  dotProps?: TimelineDotProps;
  connectorProps?: TimelineConnectorProps;
  separatorProps?: TimelineSeparatorProps;
  contentProps?: TimelineContentProps;
}
          `.trim(),
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {},
  render: args => (
    <Grid2 spacing={4} container>
      <Grid2>
        <BasicTimeline
          options={[
            { content: 'Sinbad have created' },
            { content: 'Sinbad edited' },
            { content: 'Sinbad approved' },
          ]}
          {...args}
        />
      </Grid2>
    </Grid2>
  ),
};
