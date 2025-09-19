import { Meta } from '@storybook/react';
import { Grid2 } from '@mui/material';
import BasicTypography from '.';

const meta: Meta<typeof BasicTypography> = {
  title: 'Nexus/BasicTypography',
  component: BasicTypography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  return (
    <Grid2 spacing={4} container>
      <Grid2>
        <BasicTypography>SInbad</BasicTypography>
      </Grid2>
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
