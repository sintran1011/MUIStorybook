import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import CalendarViewIcon from "assets/icons/calendar-view-icon.svg";

const CustomIcon = (props: SvgIconProps) => {
  return <SvgIcon component={CalendarViewIcon} inheritViewBox {...props} />;
};

export default CustomIcon;
