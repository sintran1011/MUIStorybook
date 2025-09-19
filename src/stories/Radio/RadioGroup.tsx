import {
  type Breakpoint,
  FormControlLabel,
  RadioGroup,
  type SxProps,
  type Theme,
  Typography,
} from "@mui/material";
import { type ReactNode } from "react";

import BasicRadio from ".";

interface RadioItem<T extends string | number | boolean = string> {
  label: string | ReactNode;
  value: T;
  disabled?: boolean;
}

interface RadioGroupProps<T extends string | number | boolean = string> {
  options: RadioItem<T>[];
  onChange?: (value: T) => void;
  onValuesChange?: (value: T) => void;
  value?: T;
  direction?: "row" | "column";
  sx?: SxProps<Theme>;
  labelSx?: SxProps<Theme>;
  readOnly?: boolean;
  height?: string | number | Partial<Record<Breakpoint, number | string>>;
}

const BaseRadioGroup = <T extends string | number | boolean = string>(
  props: RadioGroupProps<T>,
) => {
  const {
    options = [],
    onChange = () => {},
    onValuesChange = () => {},
    value,
    direction = "row",
    sx,
    labelSx,
    readOnly = false,
    height = "32px",
  } = props;

  return (
    <RadioGroup
      onChange={(e) => {
        const rawValue = e.target.value;
        const parsed =
          typeof value === "number"
            ? Number(rawValue)
            : typeof value === "boolean"
              ? rawValue === "true"
              : rawValue;
        onChange(parsed as T);
        onValuesChange(parsed as T);
      }}
      row={direction === "row"}
      value={value}
      sx={{
        alignItems: "center",
        gap: 1,
        ml: "12px",
        height,
        ...sx,
      }}
    >
      {options.map((i) => (
        <FormControlLabel
          key={String(i.value)}
          aria-readonly
          sx={{
            gap: 1,
            pointerEvents: readOnly ? "none" : "unset",
            ...labelSx,
          }}
          value={String(i.value)}
          control={<BasicRadio<T> disabled={i.disabled} />}
          label={
            typeof i.label === "string" ? (
              <Typography variant="body-medium">{i.label}</Typography>
            ) : (
              i.label
            )
          }
        />
      ))}
    </RadioGroup>
  );
};

export default BaseRadioGroup;

BaseRadioGroup.displayName = "BaseRadioGroup";
