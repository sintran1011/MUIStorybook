import { Meta, StoryObj } from '@storybook/react';
import { Grid2, Typography } from '@mui/material';
import BasicTypography from '.';

const meta: Meta<typeof BasicTypography> = {
  title: 'Nexus/BasicTypography',
  component: BasicTypography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Content show in component',
    },
    tooltipTitle: {
      description: '`Tooltip text content`',
    },
    tooltipProps: {
      description: '`Addition Props` to controlled tooltip',
    },
    lines: {
      description: '`Line clamp` of text, if over it will show as `...`',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const TypoArr = [
  'hero-large',
  'hero-medium',
  'header-4x-large',
  'header-3x-large',
  'header-x-large',
  'header-large',
  'header-medium',
  'header-small',
  'body-large',
  'body-medium',
  'body-small',
  'body-x-small',
  'body-strong-large',
  'body-strong-medium',
  'body-strong-small',
  'body-strong-2x-small',
];

export const Playground: Story = {
  args: {
    tooltipTitle: 'Custom tooltip',
  },
  render: args => (
    <Grid2 columns={1} spacing={4} container>
      {TypoArr.map((i: any) => (
        <Grid2 textAlign={'center'} size={1}>
          <BasicTypography variant={i} {...args}>
            {i}
          </BasicTypography>
        </Grid2>
      ))}
    </Grid2>
  ),
};
