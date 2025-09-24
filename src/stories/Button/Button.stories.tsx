import { Meta, StoryObj } from '@storybook/react';
import Button from '@stories/Button';
import { Grid2, Typography } from '@mui/material';

const meta: Meta<typeof Button> = {
  title: 'Nexus/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['outlined', 'contained', 'text'],
      control: { type: 'radio' },
      description: 'Styled custom button: `outlined` | `contained` | `text`',
    },
    color: {
      options: ['brand', 'neutral', 'positive', 'warn', 'negative'],
      description: 'Color of button, config follow `design system`',
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      description: 'Size of button, config follow `design system`',
      control: { type: 'radio' },
    },
    loading: {
      description: 'Change button into state loading if `true`',
      control: { type: 'boolean' },
    },
    disabled: {
      description: 'Change button into state disabled if `true`',
      control: { type: 'boolean' },
    },
    sx: {
      description: 'sx props of `MUI` to control style',
    },
    fullWidth: {
      description: 'If true, button width will equal `100%`',
    },
    width: {
      description: 'Width of button, can be px or number',
    },
    component: {
      description: 'Type of tag of button, common props in MUI : `div` , `tag`, `ul`, `li`',
    },
    startIcon: {
      description: 'Icon will add to left text',
    },
    endIcon: {
      description: 'Icon will add to right text',
    },
  },
  args: {
    loading: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { variant: 'contained', size: 'medium', children: 'Button' },
};

const ARR: {
  title: string;
  props: Record<string, any>;
}[] = [
  {
    title: 'Delete / small',
    props: {
      size: 'small',
      variant: 'text',
    },
  },
  {
    title: 'Cancel / medium',
    props: {
      size: 'medium',
      variant: 'outlined',
    },
  },
  {
    title: 'Create / large',
    props: {
      size: 'large',
      variant: 'contained',
    },
  },
];

export const Gallery = () => {
  return (
    <Grid2 spacing={4} container>
      {ARR.map(i => (
        <Grid2 key={i.title}>
          <Button {...i.props}>{i.title}</Button>
        </Grid2>
      ))}
    </Grid2>
  );
};

Gallery.parameters = {
  docs: {
    source: {
      code: `
 <Button
  size="small"
  variant="text"
>
 Delete / small
</Button>

<Button
  size="medium"
  variant="outlined"
>
 Cancel / medium
</Button>

<Button
  size="large"
  variant="contained"
>
  Create / large
</Button>     
      `,
    },
  },
  layout: 'centered',
};
