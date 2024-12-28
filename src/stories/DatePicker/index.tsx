import type { Moment } from "moment-timezone";
import moment from "moment-timezone";
import DateTimePicker, { DateTimePickerProps } from "./DateTimePicker";

const textSx = {
  color: "white",
  fontFamily: "var(--font-montserrat)",
  fontSize: "14px",
  lineHeight: "20px",
};

const slotProps = {
  day: {
    sx: {
      backgroundColor: "transparent",
      "&.MuiPickersDay-today": {
        backgroundColor: "#23408E",
        border: "none",
        color: "white",
        fontWeight: "bold",
      },
      "&:focus.Mui-selected": {
        backgroundColor: "#ffffff0a",
      },
      "&.Mui-selected": {
        backgroundColor: "#ffffff0a",
        color: "white",
        border: "1px solid #767272",
      },
      "&:hover": {
        backgroundColor: "#555555",
      },
      ...textSx,
    },
  },
  popper: {
    sx: {
      "& .MuiPaper-root": {
        backgroundColor: "#1C1919",
        color: "white",
        fontFamily: "var(--font-montserrat)",
        fontSize: "14px",
        lineHeight: "20px",
        borderRadius: "4px",
        boxShadow:
          "0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 5px 5px -3px rgba(0, 0, 0, 0.20)",
      },
      "& .MuiDivider-root": {
        borderColor: "#ffffff0a",
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
        color: "dark.300",
      },
    },
  },
  digitalClockSectionItem: {
    sx: {
      borderRadius: "8px",
      ...textSx,
      "&.Mui-selected": {
        backgroundColor: "#23408E",
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
  toolbar: {
    sx: {
      backgroundColor: "red",
      color: "red",
    },
  },
  leftArrowIcon: {
    sx: {
      color: "white",
    },
  },
  rightArrowIcon: {
    sx: {
      color: "white",
    },
  },
  switchViewIcon: {
    sx: {
      color: "white",
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
  actionBar: {
    sx: {
      "& button": {
        backgroundColor: "transparent",
        ...textSx,
        fontWeight: "600",
      },
    },
  },
};

type valueDate = Moment | null | undefined;

interface DatePickerProps extends DateTimePickerProps {
  value?: valueDate;
  onChange?: (val: valueDate) => void;
  readOnly?: boolean;
}

const DatePicker = (props: DatePickerProps) => {
  const { value, onChange = () => {}, readOnly = false } = props;
  return (
    <>
      <DateTimePicker
        onChange={(val) => onChange(moment(val))}
        value={value}
        fullWidth
        slotProps={slotProps}
        readOnly={readOnly}
      />
    </>
  );
};

export default DatePicker;
