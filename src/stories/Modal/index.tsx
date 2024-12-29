import { Box, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CSSProperties, ReactNode } from "react";
import LFGModal from "./LFGModal";
import Button from "@stories/Button";

type ButtonProps = {
  text?: string;
  sx?: CSSProperties;
  props?: Record<string, any>;
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  hasFooter?: boolean;
  firstButton?: ButtonProps;
  secondButton?: ButtonProps;
  children?: ReactNode;
  footerSx?: CSSProperties;
  description?: string;
}

const BasicModal = (props: ModalProps) => {
  const {
    open = false,
    onClose = () => {},
    hasFooter = true,
    footerSx = null,
    firstButton = {
      text: "",
    },
    secondButton = {
      text: "Create",
    },
    children,
    title = "",
    description = "",
  } = props;

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
        size="medium"
        sx={{
          backgroundColor: "#ffffff0a",
          backdropFilter: "blur(25px)",
          ...firstButton.sx,
        }}
        {...firstButton.props}
      >
        <Typography
          color="white"
          variant="label-large"
          fontSize="14px"
          fontWeight={600}
          lineHeight="18px"
        >
          {firstButton.text || "Cancel"}
        </Typography>
      </Button>
      <Button
        size="medium"
        sx={{
          ...secondButton.sx,
        }}
        {...secondButton.props}
      >
        <Typography
          color="white"
          variant="label-large"
          fontSize="14px"
          fontWeight={600}
          lineHeight="18px"
        >
          {secondButton.text || "Create"}
        </Typography>
      </Button>
    </Stack>
  );

  return (
    <LFGModal
      title={title}
      open={open}
      size="xs"
      onClose={onClose}
      actions={hasFooter ? renderFooter() : null}
      titleProps={{ sx: { padding: "16px 24px 8px 24px" } }}
    >
      <Box
        width="24px"
        height="24px"
        position={"absolute"}
        top={"16px"}
        right={"24px"}
      >
        <CloseIcon onClick={onClose} style={{ cursor: "pointer" }} />
      </Box>
      {description ? (
        <Typography
          variant="body-medium"
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"20px"}
          color="dark.300"
          display={"block"}
          marginBottom={"24px"}
        >
          {description}
        </Typography>
      ) : null}
      {children}
    </LFGModal>
  );
};

export default BasicModal;
