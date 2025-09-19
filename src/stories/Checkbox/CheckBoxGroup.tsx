import {
  FormControlLabel,
  FormGroup,
  type SxProps,
  type Theme,
  Typography,
} from "@mui/material";
import { type ChangeEvent, useState, type ReactNode } from "react";
import BasicCheckbox from ".";

interface CheckboxItem {
  label: string | ReactNode;
  value: string;
  disabled?: boolean;
}

interface CheckboxGroupProps {
  options?: CheckboxItem[];
  onChange?: (e: string[] | string) => void;
  value?: string[];
  multiple?: boolean;
  containerSx?: SxProps<Theme>;
}

const CheckBoxGroup = (props: CheckboxGroupProps) => {
  const {
    options = [],
    value = [],
    onChange = () => {},
    multiple = true,
    containerSx,
  } = props;
  const [values, setValues] = useState<string[] | string>([]);
  const currentValue = value || values;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const itemValue = e.target.value;
    if (checked) {
      const mergedValue = multiple ? [...currentValue, itemValue] : itemValue;
      setValues(mergedValue);
      onChange(mergedValue);
    } else {
      const filter = multiple
        ? (currentValue as string[]).filter((i) => i !== itemValue)
        : "";
      setValues(filter);
      onChange(filter);
    }
  };

  const renderLabel = (label: string) => (
    <Typography variant="body-medium">{label}</Typography>
  );
  return (
    <FormGroup sx={containerSx}>
      {options.map((i) => (
        <FormControlLabel
          key={i.value}
          control={
            <BasicCheckbox
              checked={!!currentValue.includes(i.value)}
              onChange={handleChange}
              value={i.value}
              disabled={i.disabled}
            />
          }
          label={typeof i.label === "string" ? renderLabel(i.label) : i.label}
          sx={{ width: "fit-content" }}
        />
      ))}
    </FormGroup>
  );
};

export default CheckBoxGroup;

CheckBoxGroup.displayName = "CheckBoxGroup";
