import { Box, Breakpoint, Popper, PopperProps } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  type DatePickerSlotProps,
  DatePicker as MUIXDatePicker,
  type DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { DateView } from "@mui/x-date-pickers/models";
import { CalendarViewIcon } from "@stories/Icons";
import { theme } from "@styles/theme";
import { type CSSProperties, forwardRef } from "react";
import { TextFieldCustom } from "./styled";
import { TIME_FORMAT } from "@constants/enum";

export interface DatePickerProps
  extends Omit<MuiDatePickerProps<Date>, "renderInput" | "value" | "onChange"> {
  style?: CSSProperties;
  fullWidth?: boolean;
  width?: string | number | Partial<Record<Breakpoint, number | string>>;
  height?: string | number | Partial<Record<Breakpoint, number | string>>;
  placeholder?: string;
  format?: string;
  views?: readonly DateView[];
  slotProps?: DatePickerSlotProps<Date, false>;
  value?: string;
  onChange?: (val: string | null) => void;
  onValueChange?: (val: string | null) => void;
  readOnly?: boolean;
  disabled?: boolean;
  disableClearable?: boolean;
  bordered?: boolean;
}

const textSx = {
  color: theme.palette.text.secondary,
  fontFamily: "var(--font-inter)",
  fontSize: "14px",
  lineHeight: "20px",
};

const defaultSlotProps = {
  day: {
    sx: {
      backgroundColor: "transparent",
      "&.MuiPickersDay-today": {
        backgroundColor: "#ffffff0a",
        color: theme.palette.text.secondary,
        border: "1px solid #767272",
      },
      "&.Mui-selected": {
        backgroundColor: theme.palette.brand.main,
        border: "none",
        color: "white",
        fontWeight: "bold",
        "&:focus": {
          backgroundColor: theme.palette.brand.main,
        },
      },
      "&:hover": {
        backgroundColor: theme.palette.brand["+3"],
      },
      ...textSx,
    },
  },
  popper: {
    sx: {
      "& .MuiPaper-root": {
        backgroundColor: "white",
        color: theme.palette.text.secondary,
        fontFamily: "var(--font-montserrat)",
        fontSize: "14px",
        lineHeight: "20px",
        borderRadius: "4px",
        boxShadow:
          "0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 5px 5px -3px rgba(0, 0, 0, 0.20)",
        "& .MuiDateCalendar-root": {
          height: "auto",
        },
      },
      "& .MuiDivider-root": {
        borderColor: theme.palette.border.primary,
      },
      "& .MuiMultiSectionDigitalClockSection-root:not(:first-of-type)": {
        borderLeft: "1px solid #ffffff0a",
      },
      "& .MuiPickersCalendarHeader-labelContainer": {
        ...textSx,
        fontSize: "16px",
        fontWeight: "600",
      },
      "& .MuiDayCalendar-weekDayLabel": {
        ...textSx,
        color: "text.primary",
        fontWeight: "600",
      },
    },
  },
  digitalClockSectionItem: {
    sx: {
      borderRadius: "8px",
      ...textSx,
      "&.Mui-selected": {
        backgroundColor: theme.palette.brand.main,
        fontWeight: "600",
      },
    },
  },
  yearButton: {
    sx: {
      ...textSx,
      "&.Mui-selected": {
        fontWeight: "bold",
      },
    },
  },
  monthButton: {
    sx: {
      ...textSx,
      "&.Mui-selected": {
        fontWeight: "bold",
      },
    },
  },
  leftArrowIcon: {
    sx: {
      color: theme.palette.text.secondary,
    },
  },
  rightArrowIcon: {
    sx: {
      color: theme.palette.text.secondary,
    },
  },
  switchViewIcon: {
    sx: {
      color: theme.palette.text.secondary,
    },
  },
  calendarHeader: {
    sx: {
      "&.MuiPickersCalendarHeader-label": {
        ...textSx,
        fontWeight: "600",
      },
    },
  },
};

const CustomPopper = forwardRef<any, PopperProps>((props, ref) => {
  return (
    <Popper
      {...props}
      ref={ref}
      placement="bottom"
      modifiers={[
        {
          name: "flip",
          enabled: true,
          options: {
            fallbackPlacements: ["auto"],
            padding: 8,
          },
        },
        {
          name: "preventOverflow",
          enabled: true,
          options: {
            padding: 8,
          },
        },
      ]}
      sx={{ ...props.sx, zIndex: 1400 }}
    />
  );
});

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const {
    style,
    sx,
    fullWidth = false,
    width = "250px",
    height = "32.5px",
    placeholder = "Please select a date",
    format = TIME_FORMAT.FE_TIME,
    views = ["year", "month", "day"],
    slotProps,
    value,
    onChange = () => {},
    onValueChange = () => {},
    readOnly = false,
    disabled = false,
    disableClearable = false,
    bordered = true,
    ...rest
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          overflow: "hidden",
          width: fullWidth ? "100%" : width,
          height,
          borderRadius: `${theme.shape.borderRadius}px`,
          border: `1px solid`,
          borderColor: bordered
            ? theme.palette.interaction.border.neutralNormal
            : "transparent",
          "&:hover": {
            boxShadow:
              readOnly || disabled || !bordered
                ? "none"
                : `0 0 2px 1px ${theme.palette.brand.main}`,
          },
          ...style,
        }}
      >
        <MUIXDatePicker
          {...rest}
          readOnly={readOnly}
          disabled={disabled}
          sx={{
            width: "100%",
            ...sx,
          }}
          views={views}
          slots={{
            textField: TextFieldCustom,
            openPickerIcon: CalendarViewIcon,
            popper: CustomPopper,
          }}
          slotProps={{
            textField: {
              placeholder,
              fullWidth: true,
              inputRef: ref,
            },
            openPickerIcon: {
              sx: {
                color: "#8C8C8C",
                width: "20px",
                height: "20px",
              },
            },
            actionBar: {
              actions: ["today"],
              sx: {
                justifyContent: "center",
                width: "100%",
                borderTop: `1px solid ${theme.palette.border.primary}`,
                "@media (max-width:600px)": {
                  justifyContent: "center",
                },
                "& button": {
                  backgroundColor: "transparent",
                  ...textSx,
                  fontWeight: "600",
                },
              },
            },
            // tabs: {
            //   sx: { display: 'none' },
            // },
            field: { clearable: !disableClearable },
            ...defaultSlotProps,
            ...slotProps,
          }}
          format={format}
          closeOnSelect
          value={value ? new Date(value) : null}
          onChange={(val) => {
            onChange(val?.toISOString?.() ?? "");
            onValueChange(val?.toISOString?.() ?? "");
          }}
        />
      </Box>
    </LocalizationProvider>
  );
});

DatePicker.displayName = "DatePicker";

export default DatePicker;
