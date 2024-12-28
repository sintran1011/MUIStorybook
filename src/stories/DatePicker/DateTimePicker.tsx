"use client";
import {
  DateTimePickerSlotProps,
  DateTimePicker as MUIXDateTimePicker,
  DateTimePickerProps as MuiDateTimePickerProps,
} from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Box, TextField, styled } from "@mui/material";
import { CSSProperties, forwardRef } from "react";
import { DateOrTimeView } from "@mui/x-date-pickers/models";
import type { Moment } from "moment-timezone";

type SVGComponents = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
  }
>;

interface StyleConfig {
  textColor?: string;
  backgroundColor?: string;
  selectedColor?: string;
  hoverColor?: string;
  todayColor?: string;
  borderColor?: string;
  fontFamily?: string;
  fontSize?: string;
  inputHeight?: string;
}

export interface DateTimePickerProps
  extends Omit<MuiDateTimePickerProps<Moment>, "renderInput"> {
  style?: CSSProperties;
  fullWidth?: boolean;
  width?: string | number;
  placeholder?: string;
  views?: readonly DateOrTimeView[];
  suffixIcon?: any;
  styleConfig?: StyleConfig;
  slotProps?: DateTimePickerSlotProps<Moment, false>;
}

const defaultStyleConfig: StyleConfig = {
  textColor: "white",
  backgroundColor: "#ffffff0a",
  selectedColor: "#23408E",
  hoverColor: "#555555",
  todayColor: "#23408E",
  borderColor: "#ffffff0a",
  fontFamily: "var(--font-montserrat)",
  fontSize: "14px",
  inputHeight: "52px",
};

const CustomTextField = styled(TextField)({
  fontFamily: "var(--font-montserrat)",
  height: "100%",
  borderRadius: "4px",
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    height: "100%",
    border: "1px solid transparent",
    "&:hover": {
      border: "1px solid transparent",
      outline: "none",
    },
    "&.Mui-focused": {
      border: "1px solid transparent",
      outline: "none",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
});

const DateTimePicker = forwardRef<HTMLDivElement, DateTimePickerProps>(
  (props, ref) => {
    const {
      style,
      sx,
      fullWidth = false,
      width = "250px",
      placeholder = "Please select a date",
      views = ["year", "month", "day", "hours", "minutes", "seconds"],
      suffixIcon: SuffixIcon,
      styleConfig: customStyleConfig,
      slotProps,
      ...rest
    } = props;

    const mergedStyleConfig = { ...defaultStyleConfig, ...customStyleConfig };

    return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box style={{ width: fullWidth ? "100%" : width, ...style }}>
          <MUIXDateTimePicker
            {...rest}
            ref={ref}
            sx={{
              width: "100%",
              color: mergedStyleConfig.textColor,
              backgroundColor: mergedStyleConfig.backgroundColor,
              height: mergedStyleConfig.inputHeight,
              borderRadius: "4px",
              fontFamily: mergedStyleConfig.fontFamily,
              ...sx,
            }}
            views={views}
            slots={{
              textField: CustomTextField,
              ...(SuffixIcon && { openPickerIcon: SuffixIcon }),
            }}
            slotProps={{
              textField: {
                placeholder,
                fullWidth: true,
              },
              ...slotProps,
            }}
          />
        </Box>
      </LocalizationProvider>
    );
  }
);

DateTimePicker.displayName = "DateTimePicker";

export default DateTimePicker;
