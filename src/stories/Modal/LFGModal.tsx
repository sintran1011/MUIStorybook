import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  DialogProps,
  DialogTitleProps,
  DialogContentProps,
  DialogActionsProps,
  TypographyProps,
} from "@mui/material";
import { FC, ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children: ReactNode;
  actions?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  dialogProps?: Omit<DialogProps, "open">;
  titleProps?: DialogTitleProps;
  contentProps?: DialogContentProps;
  actionsProps?: DialogActionsProps;
  typographyProps?: TypographyProps;
  paperProps?: DialogProps["PaperProps"];
}

const LFGModal: FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  actions,
  size = "xs",
  dialogProps,
  titleProps,
  contentProps,
  actionsProps,
  typographyProps,
  paperProps,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      disableScrollLock
      PaperProps={paperProps}
      maxWidth={size}
      {...dialogProps}
      sx={{
        "& .MuiPaper-root": { background: "#151313", color: "#FFFFFF" },
        ...dialogProps?.sx,
      }}
    >
      {title && (
        <DialogTitle {...titleProps}>
          <Typography
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "21.94px",
            }}
            {...typographyProps}
          >
            {title}
          </Typography>
        </DialogTitle>
      )}
      <DialogContent
        {...contentProps}
        sx={{
          fontFamily: "var(--font-montserrat)",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          ...contentProps?.sx,
        }}
      >
        {children}
      </DialogContent>
      {actions && (
        <DialogActions
          {...actionsProps}
          sx={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "18px",
            ...actionsProps?.sx,
          }}
        >
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default LFGModal;
