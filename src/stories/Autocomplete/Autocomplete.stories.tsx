import { Meta } from '@storybook/react';
import { Stack } from '@mui/material';
import Autocomplete from '.';

const meta: Meta<typeof Autocomplete> = {
  title: 'Nexus/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  return (
    <Stack flexDirection={'row'} gap={6}>
      <Autocomplete
        options={[
          { label: 'SinCEO', value: 'ceo' },
          { label: 'SinPM', value: 'pm' },
          { label: 'SinFE', value: 'fe' },
        ]}
        isControlled
      />
    </Stack>
  );
};

Default.parameters = {
  docs: {
    source: {
      code: `
      const useGenerateOptions = (props: useGenerateOptionsProps) => {
  const { list = [], value, type = "radio" } = props;
  return (list || []).map((i) => {
    const checked = value === i || ((value as string[]) || []).includes(i);
    if (type === "radio")
      return {
        label: (
          <Typography
            display="flex"
            alignItems="center"
            fontSize="14px"
            color="#fff"
            lineHeight="20px"
            variant="body-medium"
            gap={1}
          >
            <StyledRadio checked={checked} />
            {i}
          </Typography>
        ),
        value: i,
      };
    return {
      label: (
        <Typography
          display="flex"
          alignItems="center"
          fontSize="14px"
          color="#fff"
          lineHeight="20px"
          variant="body-medium"
          gap={1}
        >
          {type === "checkbox" ? <BasicCheckbox checked={checked} /> : null}
          {i}
        </Typography>
      ),
      value: i,
    };
  });
};
<BasicSelect
  options={[]}
  value="Launch Discount"
  onChange={(newValue) => console.log(newValue)}
  width={200}
/>
`,
    },
  },
};
