import { Meta } from '@storybook/react';
import { Box, Grid2 } from '@mui/material';
import ProgressBar from '.';

const meta: Meta<typeof ProgressBar> = {
  title: 'Nexus/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  return (
    <Box width={800}>
      <ProgressBar progress={50} />
    </Box>
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
