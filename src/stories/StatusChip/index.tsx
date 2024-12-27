import { alpha, Chip, ChipProps, Typography } from "@mui/material";
import { theme } from "@styles/theme";

interface StatusState {
  color: string;
  bgColor: string;
}

export interface StatusChipProps extends Omit<ChipProps, "value"> {
  type: keyof typeof STATUS_STATE;
  value: string;
}

const StatusChip = ({ type, value, sx, ...rest }: StatusChipProps) => {
  if (!value) return null;
  // const formatValue = value.split("_").join(" ").toLowerCase();
  return (
    <Chip
      label={
        <Typography
          variant={"body-small"}
          fontSize={"12px"}
          lineHeight={"16px"}
          color={STATUS_STATE[type].color}
        >
          {value}
        </Typography>
      }
      sx={{
        borderRadius: "8px",
        backdropFilter: "blur(25px)",
        backgroundColor: STATUS_STATE[type].bgColor,
        ...sx,
      }}
      {...rest}
    />
  );
};

const STATUS_STATE: Record<string, StatusState> = {
  success: {
    color: theme.palette.success.main,
    bgColor: alpha(theme.palette.success.main, 0.1),
  },
  normal: {
    color: "#FFFFFF",
    bgColor: alpha("#FFFFFF", 0.04),
  },
  disabled: {
    color: theme.palette.dark[300] as string,
    bgColor: alpha("#FFFFFF", 0.1),
  },
  review: {
    color: theme.palette.warning[500] as string,
    bgColor: alpha("rgba(228, 161, 27)", 0.1),
  },
  ready: {
    color: theme.palette.info.main,
    bgColor: alpha("rgba(84, 180, 211)", 0.1),
  },
  reject: {
    color: theme.palette.secondary[500] as string,
    bgColor: alpha("rgba(239, 73, 35)", 0.1),
  },
} as const;

export { StatusChip };
