import { Meta } from "@storybook/react";
import Input from ".";
import { Stack } from "@mui/material";
import StyledInputNumber from "./StyledInputNumber";

const meta: Meta<typeof Input> = {
  title: "Quoxent/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = () => {
  return (
    <Stack flexDirection={"row"} gap={6}>
      <Input placeholder="Input Text" noHint />
      <StyledInputNumber type="number" placeholder="Input Number" noHint />
    </Stack>
  );
};

Default.parameters = {
  docs: {
    source: {
      code: `
<Input placeholder="Input Text" noHint />

<StyledInputNumber type="number" placeholder="Input Number" noHint />
      `,
    },
  },
};
