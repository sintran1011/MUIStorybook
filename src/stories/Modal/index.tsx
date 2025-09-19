import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Stack,
  useTheme,
} from "@mui/material";
import type {
  SxProps,
  Theme,
  DialogTitleProps,
  DialogContentProps,
  DialogProps,
  TypographyProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { ReactNode } from "react";
import Button from "@stories/Button";
import { isEmpty } from "lodash";

type ButtonProps = {
  text?: string | ReactNode;
  sx?: SxProps<Theme>;
  props?: Record<string, unknown>;
};

interface ModalProps {
  open: boolean;
  isFullScreen?: boolean;
  onClose?: (event?: any, reason?: any) => void;
  onSave?: () => void;
  title?: string | ReactNode;
  children: ReactNode;
  footerSx?: SxProps<Theme>;
  modalProps?: Omit<DialogProps, "open">;
  titleProps?: DialogTitleProps;
  contentProps?: DialogContentProps;
  typographyProps?: TypographyProps;
  firstButton?: ButtonProps;
  secondButton?: ButtonProps;
  width?: number | string;
  hasFooter?: boolean;
  hasTitle?: boolean;
  icon?: ReactNode;
  hasClosedIcon?: boolean;
}

const BasicModal = (props: ModalProps) => {
  const {
    open,
    isFullScreen = false,
    onClose,
    onSave,
    title,
    children,
    modalProps,
    titleProps,
    contentProps,
    hasFooter = true,
    hasTitle = true,
    hasClosedIcon = true,
    typographyProps,
    footerSx,
    width = 400,
    firstButton = {
      text: "Cancel",
    },
    secondButton = {
      text: "Save",
    },
    icon,
  } = props;

  const { palette } = useTheme();

  const renderFooter = () => (
    <Stack
      flexDirection="row"
      justifyContent="end"
      gap="16px"
      padding="0px 16px 16px 16px"
      sx={footerSx}
    >
      <Button
        onClick={onClose}
        variant="outlined"
        color="neutral"
        sx={{
          ...firstButton.sx,
        }}
        {...firstButton.props}
      >
        {typeof firstButton.text === "string" || isEmpty(firstButton.text) ? (
          <Typography
            color="text.primary"
            variant="body-medium"
            fontWeight={600}
          >
            {firstButton.text || "Cancel"}
          </Typography>
        ) : (
          firstButton.text
        )}
      </Button>
      <Button
        variant="contained"
        onClick={onSave}
        sx={{
          ...secondButton.sx,
        }}
        {...secondButton.props}
      >
        {typeof secondButton.text === "string" || isEmpty(secondButton.text) ? (
          <Typography color="white" variant="body-medium" fontWeight={600}>
            {secondButton.text || "Create"}
          </Typography>
        ) : (
          secondButton.text
        )}
      </Button>
    </Stack>
  );

  return (
    <Dialog
      open={open}
      disableScrollLock={false}
      onClose={onClose}
      {...modalProps}
      sx={
        isFullScreen
          ? {
              "& .MuiPaper-root": {
                maxHeight: "100%",
                height: "100% !important",
                margin: "0px !important",
                width: "100%",
                maxWidth: "100%",
              },
            }
          : {
              "& .MuiPaper-root": {
                background: "white",
                color: palette.text.secondary,
                width,
                maxWidth: width,
              },
              ...modalProps?.sx,
            }
      }
    >
      {hasClosedIcon ? (
        <Box
          width="24px"
          height="24px"
          position={"absolute"}
          top={"12px"}
          right={"12px"}
        >
          <CloseIcon onClick={onClose} style={{ cursor: "pointer" }} />
        </Box>
      ) : null}
      {hasTitle ? (
        <DialogTitle
          display={"flex"}
          alignItems={"center"}
          flexDirection={"row"}
          gap={2}
          p={"10px 24px !important"}
          {...titleProps}
        >
          {icon ? icon : null}
          {typeof title === "string" ? (
            <Typography
              fontWeight={700}
              variant="header-x-large"
              color="text.primary"
              {...typographyProps}
            >
              {title}
            </Typography>
          ) : (
            title
          )}
        </DialogTitle>
      ) : null}
      <DialogContent
        {...contentProps}
        sx={{
          position: "relative",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          p: "0px 24px",
          ...contentProps?.sx,
        }}
      >
        {children}
      </DialogContent>
      {hasFooter ? (
        <DialogActions
          sx={{
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "18px",
          }}
        >
          {renderFooter()}
        </DialogActions>
      ) : null}
    </Dialog>
  );
};

export default BasicModal;

BasicModal.displayName = "BasicModal";
