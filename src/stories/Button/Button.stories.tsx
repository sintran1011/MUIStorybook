import { Meta } from '@storybook/react';
import Button from '@stories/Button';
import { Grid2, Typography } from '@mui/material';

const meta: Meta<typeof Button> = {
  title: 'Nexus/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const ARR: {
  title: string;
  props: Record<string, any>;
}[] = [
  {
    title: 'Cancel / small',
    props: {
      size: 'small',
      variant: 'outlined',
    },
  },
  {
    title: 'Create / medium',
    props: {
      size: 'medium',
      variant: 'primary',
    },
  },
  {
    title: 'Delete / large',
    props: {
      size: 'large',
      variant: 'secondary',
    },
  },
];

export const Default = () => {
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

Default.parameters = {
  docs: {
    source: {
      code: `
const theme = useTheme();

 <Button
  size="small"
  variant="outlined"
>
 Cancel / small
</Button>

<Button
  size="medium"
  variant="primary"
>
 Create / medium
</Button>

<Button
  size="large"
  variant="secondary"
>
  Delete / large
</Button>     
      `,
    },
  },
};
