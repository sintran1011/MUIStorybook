import { Meta } from '@storybook/react';
import { Grid2 } from '@mui/material';
import BasicCheckbox from '.';

const meta: Meta<typeof BasicCheckbox> = {
  title: 'Nexus/BasicCheckbox',
  component: BasicCheckbox,
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
        <BasicCheckbox />
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
