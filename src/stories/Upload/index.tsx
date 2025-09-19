import {
  Chip,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  Typography,
  SxProps,
  LinearProgress,
  Button,
} from "@mui/material";
import { DropzoneOptions, FileRejection, useDropzone } from "react-dropzone";
// import FileUploadIcon from "@assets/icons/file-upload.svg";
// import FileUploadDoneIcon from "@assets/icons/file_download_done.svg";
import { ReactNode, useState } from "react";
// import CloseIcon from "@assets/icons/close.svg";
import { toast } from "react-toastify";
import { theme } from "@styles/theme";

export type FileTypes =
  | ".jpg"
  | ".jpeg"
  | ".png"
  | ".gif"
  | ".webp"
  | ".svg"
  | ".mp4"
  | ".webm"
  | ".ogg"
  | ".mp3"
  | ".mp4"
  | ".wav"
  | ".pdf"
  | ".doc"
  | ".docx"
  | ".xls"
  | ".xlsx"
  | ".ppt"
  | ".pptx"
  | ".zip"
  | ".rar"
  | ".7z"
  | ".gz"
  | ".txt"
  | ".css"
  | ".js"
  | ".json"
  | ".xml"
  | ".exe"
  | ".dmg";

export interface MimeTypes {
  [mimeType: string]: FileTypes[];
}

type AcceptAllFileTypes = "image/*" | "video/*" | "audio/*" | "application/*";
export interface FileUpload extends Omit<File, "name"> {
  name?: string;
  url?: string;
  cdn?: string;
}

interface UploadProps extends DropzoneOptions {
  children?: ReactNode;
  value?: FileUpload[];
  onChange?: (files: FileUpload[]) => void;
  containerSx?: SxProps;
  accept?: MimeTypes;
  acceptAllFileTypes?: AcceptAllFileTypes[];
  maxFiles?: number;
  disabled?: boolean;
  loading?: boolean;
  progress?: number;
  processStepsRender?: 1 | 2 | 3;
  customSteps?: {
    beforeUpload?: () => ReactNode;
    progressLoading?: (progress: number) => ReactNode;
    afterUpload?: (values: FileUpload[]) => ReactNode;
  };
}

const Upload = (props: UploadProps) => {
  const {
    children,
    value,
    onChange = () => {},
    maxFiles = 1,
    containerSx,
    accept,
    acceptAllFileTypes = [],
    processStepsRender = 3,
    disabled = false,
    loading = false,
    progress,
    customSteps,
    ...restProp
  } = props;

  const [files, setFiles] = useState<FileUpload[]>([]);
  const values = value || files || [];
  const colorText = disabled ? "dark.300" : "white";

  const objectAccept: Record<string, string[]> = {};
  for (const key of acceptAllFileTypes) {
    objectAccept[key] = [];
  }
  const handleDropFile = (file: File[], rejectFile: FileRejection[]) => {
    const isOverMaxFile = rejectFile.some(
      (i) => i.errors[0].code === "too-many-files",
    );
    if (isOverMaxFile)
      toast.warning(`You can only upload maximum ${maxFiles} files`);
    const formatThumbnail = file.map((file) =>
      Object.assign(file, {
        url: URL.createObjectURL(file),
      }),
    );
    const clone = [...values, ...formatThumbnail];
    clone.splice(0, clone.length - (maxFiles || 0));
    setFiles(clone);
    onChange(clone);
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDropFile,
    accept: accept || { ...objectAccept },
    maxFiles,
    disabled: loading || disabled,
    ...restProp,
  });

  const handleRemoveFile = (idx: number) => {
    const newFiles = [...values];
    newFiles.splice(idx, 1);
    setFiles(newFiles);
    onChange(newFiles);
  };

  const renderBeforeUpload = () => {
    if (customSteps && customSteps.beforeUpload)
      return customSteps.beforeUpload();
    return (
      <>
        {/* <img src={FileUploadIcon} /> */}
        <Stack justifyContent="center" alignItems="center" gap="8px">
          <Typography
            fontSize="14px"
            lineHeight="20px"
            color={colorText}
            variant="body-medium"
          >
            Drag & drop
          </Typography>
          <Divider
            sx={{
              "&::before, &::after": {
                borderColor: "#ffffff26",
                width: "40px",
              },
            }}
          >
            <Typography
              color={colorText}
              fontSize="14px"
              lineHeight="20px"
              variant="body-medium"
            >
              or
            </Typography>
          </Divider>
          <Button disabled={disabled}>
            <Typography fontSize="14px" fontWeight="600" lineHeight="18px">
              Select File
            </Typography>
          </Button>
        </Stack>
      </>
    );
  };

  const renderProgressLoading = (progress?: number) => {
    if (customSteps && customSteps.progressLoading)
      return customSteps.progressLoading(progress || 0);
    return (
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
      >
        <Stack gap={"4px"} alignItems={"center"} justifyContent={"center"}>
          {/* <FileUploadIcon /> */}
          <Typography
            color="white"
            fontSize={"14px"}
            fontWeight={600}
            lineHeight={"18px"}
          >
            Uploading...
          </Typography>
        </Stack>
        <Stack
          width={"100%"}
          height={"100%"}
          alignItems={"end"}
          justifyContent={"end"}
          gap={"4px"}
        >
          <Typography
            color="white"
            fontSize={"14px"}
            fontWeight={600}
            lineHeight={"18px"}
          >
            {progress}%
          </Typography>
          <LinearProgress
            variant="determinate"
            sx={{
              height: "10px",
              width: "100%",
              borderRadius: "100px",
              backgroundColor: "#ffffff26",
              "& .MuiLinearProgress-bar": {
                backgroundColor: theme.palette.success[300],
                borderRadius: "100px",
              },
            }}
            value={progress}
          />
        </Stack>
      </Stack>
    );
  };

  const renderAfterUpload = (values: FileUpload[]) => {
    if (customSteps && customSteps.afterUpload)
      return customSteps.afterUpload(values);
    return (
      <>
        <Stack gap={2} justifyContent="center" alignItems="center">
          {/* <img src={FileUploadDoneIcon} /> */}
          <Typography
            fontSize="14px"
            lineHeight="20px"
            color="white"
            variant="body-medium"
          >
            <Typography
              fontSize="14px"
              lineHeight="18px"
              fontWeight="400"
              component="span"
            >
              {values && values.length > 1
                ? `${values.length.toString()} files`
                : "File"}
            </Typography>{" "}
            successfully uploaded
          </Typography>
        </Stack>
        {values && values.length > 0
          ? values.map((file, idx: number) => (
              <Chip
                key={idx}
                label={
                  <Typography
                    fontSize="14px"
                    lineHeight="20px"
                    color="white"
                    variant="body-medium"
                  >
                    {file?.name}
                  </Typography>
                }
                onDelete={() => handleRemoveFile(idx)}
                disabled={disabled}
                sx={{
                  width: "100%",
                  padding: "8px 10px 8px 4px",
                  bgcolor: "#ffffff0a",
                  justifyContent: "space-between",
                  borderRadius: "4px",
                  "& .MuiChip-label": {
                    maxWidth: "300px",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: "#ffffff0a",
                    color: "white",
                    opacity: 1,
                  },
                }}
                // deleteIcon={<img src={CloseIcon} />}
              />
            ))
          : null}
      </>
    );
  };

  const renderContent = () => {
    if (processStepsRender >= 2 && progress && progress > 0 && progress < 100)
      return renderProgressLoading(progress);
    if (processStepsRender >= 3 && values.length > 0)
      return renderAfterUpload(values);
    return renderBeforeUpload();
  };

  return (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#ffffff03",
        borderRadius: "16px",
        padding: "24px",
        border: "2px dashed #ffffff26",
        position: "relative",
        ...containerSx,
      }}
    >
      <Stack
        height="100%"
        justifyContent="center"
        alignItems="center"
        gap="16px"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {children ? children : renderContent()}
        <Stack
          top={0}
          left={0}
          position={"absolute"}
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          zIndex={10}
          bgcolor={"#00000080"}
          borderRadius={"16px 16px 0 0"}
          sx={{
            display: loading ? "flex" : "none",
          }}
        >
          <CircularProgress />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Upload;
