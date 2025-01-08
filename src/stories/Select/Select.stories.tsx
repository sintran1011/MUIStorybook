import { Meta } from "@storybook/react";

import BasicSelect from "@stories/Select";
import { Stack, Typography } from "@mui/material";
import StyledRadio from "./StyledRadio";
import BasicCheckbox from "./BasicCheckbox";
import { useState } from "react";
import { render } from "react-dom";

interface useGenerateOptionsProps {
  list: string[];
  value?: string | string[];
  type?: "radio" | "checkbox" | "none";
}

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

const meta: Meta<typeof BasicSelect> = {
  title: "Quoxent/BasicSelect",
  component: BasicSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const DISCOUNT_TYPE_LIST = [
  "Launch Discount",
  "Weeklong Deals",
  "Seasonal Sales",
  "Midweek Deals",
  "Daily Deals",
  "Weekend Deals",
  "Custom Discount",
];
export const Default = () => {
  const [value1, setValue1] = useState<any>("Launch Discount");
  const [value2, setValue2] = useState<any>(["Weeklong Deals"]);
  const [value3, setValue3] = useState<any>("Seasonal Sales");

  const options1 = useGenerateOptions({
    list: DISCOUNT_TYPE_LIST,
    value: value1,
    type: "radio",
  });
  const options2 = useGenerateOptions({
    list: DISCOUNT_TYPE_LIST,
    value: value2,
    type: "checkbox",
  });
  const options3 = useGenerateOptions({
    list: DISCOUNT_TYPE_LIST,
    value: value3,
    type: "none",
  });

  return (
    <Stack flexDirection={"row"} gap={6}>
      {/* Select with Radio */}
      <Stack gap={3}>
        <Typography
          variant="body-medium"
          color="white"
          fontWeight="bold"
        >
          Select with Radio:
        </Typography>
        <BasicSelect
          options={options1}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          width={200}
        />
      </Stack>
      <Stack gap={3}>
        <Typography
          variant="body-medium"
          color="white"
          fontWeight="bold"
        >
          Select with Checkbox:
        </Typography>
        <BasicSelect
          options={options2}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          width={200}
          multiple
          sx={{ maxWidth: "200px" }}
        />
      </Stack>
      <Stack gap={3}>
        <Typography
          variant="body-medium"
          color="white"
          fontWeight="bold"
        >
          Select basic:
        </Typography>
        <BasicSelect
          options={options3}
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
          width={200}
        />
      </Stack>
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
//Radio Select
<BasicSelect
  options={useGenerateOptions({
    list: ${JSON.stringify(DISCOUNT_TYPE_LIST, null, 2)},
    value: "Launch Discount",
    type: "radio",
  })}
  value="Launch Discount"
  onChange={(newValue) => console.log(newValue)}
  width={200}
/>
//Checkbox Select
<BasicSelect
  options={useGenerateOptions({
    list: ${JSON.stringify(DISCOUNT_TYPE_LIST, null, 2)},
    value: ["Launch Discount"],
    type: "checkbox",
  })}
  value={["Launch Discount"]}
  onChange={(newValue) => console.log(newValue)}
  width={200}
/>
//Base Select
<BasicSelect
  options={useGenerateOptions({
    list: ${JSON.stringify(DISCOUNT_TYPE_LIST, null, 2)},
    value: "Launch Discount",
    type: "none",
  })}
  value="Launch Discount"
  onChange={(newValue) => console.log(newValue)}
  width={200}
/>`,
    },
  },
};
