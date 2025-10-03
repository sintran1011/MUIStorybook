import { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography } from '@mui/material';
import BasicStep from '.';
import { theme } from '@styles/theme';
import PendingIcon from '@mui/icons-material/Pending';

const meta: Meta<typeof BasicStep> = {
  title: 'Nexus/BasicStep',
  component: BasicStep,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: '`Array` to render `StepItems` ',
      control: 'object',
      table: {
        type: {
          summary: 'Step[]',
          detail: `
type Step = {
  key: string;
  icon?: ReactNode;
  label?: string | ReactNode;
}
          `.trim(),
        },
      },
    },
    activeStep: {
      description: '`Index` of Step is active',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    options: [
      {
        key: 'a',
        label: (
          <Stack>
            <Typography variant="body-medium">Approved</Typography>
            <Typography variant="body-small">By Sintran</Typography>
          </Stack>
        ),
      },
      {
        key: 'b',
        label: (
          <Stack>
            <Typography variant="body-medium">Pending</Typography>
            <Typography variant="body-small">By Sinbad</Typography>
          </Stack>
        ),
        icon: <PendingIcon sx={{ color: theme.palette.brand.main }} />,
      },
      {
        key: 'c',
        label: (
          <Stack>
            <Typography variant="body-medium">Waiting</Typography>
            <Typography variant="body-small">By Tam Tran</Typography>
          </Stack>
        ),
      },
      {
        key: 'd',
        label: (
          <Stack>
            <Typography variant="body-medium">Waiting</Typography>
            <Typography variant="body-small">By Tran tam</Typography>
          </Stack>
        ),
      },
    ],
    alternativeLabel: false,
    activeStep: 2,
  },
  render: args => (
    <Box width={800} sx={{ bgcolor: theme.palette.background.paper, borderColor: '#F0F0F0' }}>
      <Box p={'8px 24px'}>
        <BasicStep {...args} />
      </Box>
    </Box>
  ),
};
