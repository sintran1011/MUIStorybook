import { Meta, StoryObj } from '@storybook/react';
import { Grid2 } from '@mui/material';
import SignaturePad from '.';

const meta: Meta<typeof SignaturePad> = {
  title: 'Nexus/SignaturePad',
  component: SignaturePad,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      description: '`Width` of SignaturePad',
    },
    height: {
      description: '`Height` of SignaturePad',
    },
    color: {
      description: '`Color` of signature ',
      control: { type: 'color' },
    },
    lineWidth: {
      description: '`Width` of paint line',
    },
    value: {
      description: '`Controlled Value` to signature pad',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    height: 200,
    width: 480,
    color: '#000000',
  },
};

export const Default = () => {
  return (
    <Grid2 spacing={4} container>
      <Grid2>
        <SignaturePad />
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
