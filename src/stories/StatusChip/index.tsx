import { COLORS } from "@constants/enum";
import { Box, Chip, type ChipProps, Typography } from "@mui/material";
import { theme } from "@styles/theme";

interface StatusState {
  color: string;
  bgColor: string;
}

export interface StatusChipProps extends Omit<ChipProps, "value"> {
  type: keyof typeof STATUS_STATE;
  value: string;
  hasIcon?: boolean;
}

const COLOR_HASH_MAP: Record<COLORS, StatusState> = {
  BRAND: {
    color: theme.palette.brand.main,
    bgColor: theme.palette.background.brand.muted,
  },
  NEGATIVE: {
    color: theme.palette.negative.main,
    bgColor: theme.palette.background.negative.muted,
  },
  NEUTRAL: {
    color: theme.palette.neutral.main,
    bgColor: theme.palette.background.neutral.muted,
  },
  POSITIVE: {
    color: theme.palette.positive.main,
    bgColor: theme.palette.background.positive.muted,
  },
  WARNING: {
    color: theme.palette.warning.main,
    bgColor: theme.palette.background.warning.muted,
  },
};

const StatusChip = ({
  type,
  value,
  sx,
  hasIcon = true,
  ...rest
}: StatusChipProps) => {
  if (!value) return null;
  return (
    <Chip
      label={
        <Typography
          variant={"body-small"}
          color={STATUS_STATE[type]?.color || "black"}
        >
          {value}
        </Typography>
      }
      icon={
        hasIcon ? (
          <Box
            width={"8px"}
            height={"8px"}
            borderRadius={"50%"}
            bgcolor={`${STATUS_STATE[type]?.color}`}
          />
        ) : undefined
      }
      sx={{
        padding: "4px 5px",
        borderRadius: "6px",
        backdropFilter: "blur(25px)",
        backgroundColor: STATUS_STATE[type]?.bgColor,
        height: "fit-content",
        "& .MuiChip-label": {
          pr: "7px",
        },
        ...sx,
      }}
      {...rest}
    />
  );
};

export const STATUS_STATE: Record<string, StatusState> = {
  Active: COLOR_HASH_MAP[COLORS.POSITIVE],
  Suspended: COLOR_HASH_MAP[COLORS.WARNING],
  Inactive: COLOR_HASH_MAP[COLORS.NEGATIVE],
  Left: COLOR_HASH_MAP[COLORS.NEUTRAL],
  Approved: COLOR_HASH_MAP[COLORS.POSITIVE],
  "Next Approver": COLOR_HASH_MAP[COLORS.POSITIVE],
  "Approved Withdraw": COLOR_HASH_MAP[COLORS.POSITIVE],
  "Approved - Next Approver": COLOR_HASH_MAP[COLORS.POSITIVE],
  "Approver 1 - Approved": COLOR_HASH_MAP[COLORS.POSITIVE],
  "Approver 2 - Approved": COLOR_HASH_MAP[COLORS.POSITIVE],
  "Approver 3 - Approved": COLOR_HASH_MAP[COLORS.POSITIVE],
  Open: COLOR_HASH_MAP[COLORS.BRAND],
  Transferred: COLOR_HASH_MAP[COLORS.NEGATIVE],
  Rejected: COLOR_HASH_MAP[COLORS.NEGATIVE],
  "Rejected Withdraw": COLOR_HASH_MAP[COLORS.NEGATIVE],
  Withdrew: COLOR_HASH_MAP[COLORS.NEGATIVE],
  "Pending Approve": COLOR_HASH_MAP[COLORS.WARNING],
  "Approver 2 - Waiting Approve": COLOR_HASH_MAP[COLORS.WARNING],
  Cancelled: COLOR_HASH_MAP[COLORS.NEUTRAL],
  "No Comment": COLOR_HASH_MAP[COLORS.NEUTRAL],
  Draft: COLOR_HASH_MAP[COLORS.WARNING],
  Replied: COLOR_HASH_MAP[COLORS.NEUTRAL],
  "On Hold": COLOR_HASH_MAP[COLORS.NEUTRAL],
  Resolved: COLOR_HASH_MAP[COLORS.NEUTRAL],
  Closed: COLOR_HASH_MAP[COLORS.POSITIVE],
  Unsigned: COLOR_HASH_MAP[COLORS.NEGATIVE],
  Default: COLOR_HASH_MAP[COLORS.NEUTRAL],
  Submitted: COLOR_HASH_MAP[COLORS.POSITIVE],
  Uncompleted: COLOR_HASH_MAP[COLORS.NEUTRAL],
  Completed: COLOR_HASH_MAP[COLORS.POSITIVE],
  "Pass Probation": COLOR_HASH_MAP[COLORS.POSITIVE],
  "Fail Probation": COLOR_HASH_MAP[COLORS.NEGATIVE],
  "Approved by Level 1": COLOR_HASH_MAP[COLORS.POSITIVE],
  "Approved by Level 2": COLOR_HASH_MAP[COLORS.POSITIVE],
  "Approved by Level 3": COLOR_HASH_MAP[COLORS.POSITIVE],
  "Rejected by Level 1": COLOR_HASH_MAP[COLORS.NEGATIVE],
  "Rejected by Level 2": COLOR_HASH_MAP[COLORS.NEGATIVE],
  "Rejected by Level 3": COLOR_HASH_MAP[COLORS.NEGATIVE],
  "Update Requested by Level 1": COLOR_HASH_MAP[COLORS.NEUTRAL],
  "Update Requested by Level 2": COLOR_HASH_MAP[COLORS.NEUTRAL],
  "Update Requested by Level 3": COLOR_HASH_MAP[COLORS.NEUTRAL],
  "Updated by Level 3": COLOR_HASH_MAP[COLORS.NEUTRAL],
  "Probation Objectives": COLOR_HASH_MAP[COLORS.NEUTRAL],
  "Plan 1": COLOR_HASH_MAP[COLORS.WARNING],
  "Plan 2": COLOR_HASH_MAP[COLORS.NEUTRAL],
  "Plan 3": COLOR_HASH_MAP[COLORS.POSITIVE],
  "Request Updated": COLOR_HASH_MAP[COLORS.WARNING],
  Returned: COLOR_HASH_MAP[COLORS.POSITIVE],
  "Partly Claimed and Returned": COLOR_HASH_MAP[COLORS.POSITIVE],
  Paid: COLOR_HASH_MAP[COLORS.POSITIVE],
  Claimed: COLOR_HASH_MAP[COLORS.POSITIVE],
  "Request Update": COLOR_HASH_MAP[COLORS.BRAND],
  Unpaid: COLOR_HASH_MAP[COLORS.WARNING],
  Planned: COLOR_HASH_MAP[COLORS.WARNING],
  Current: COLOR_HASH_MAP[COLORS.POSITIVE],
} as const;

export { StatusChip };
