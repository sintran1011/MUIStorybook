import {
  Close,
  CloseFullscreenOutlined,
  OpenInFullOutlined,
} from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import BasicModal from "@stories/Modal";
import BasicTypography from "@stories/Typography";
import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@5.3.31/build/pdf.worker.min.mjs";

interface Props {
  keyName: string;
  isOpenConfirmModal: boolean;
  setIsOpenConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
  url: string;
}

const PdfViewer = ({
  keyName,
  isOpenConfirmModal,
  setIsOpenConfirmModal,
  url,
}: Props) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pdfReady, setPdfReady] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    setIsOpenConfirmModal(false);
    setNumPages(0);
    setScale(1);
    setCurrentPage(1);
    setPdfReady(false);
    setError(null);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setTimeout(() => setPdfReady(true), 100);
    setError(null);
  };

  const onLoadError = (err: Error) => {
    console.error("PDF load error:", err);
    setError("Failed to load PDF. Please try again.");
  };

  const onVisiblePage = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const pageNum = Number(entry.target.getAttribute("data-page-number"));
        setCurrentPage(pageNum);
      }
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current || !pdfReady) return;

    const container = containerRef.current;

    container.scrollTop = 0;
    setCurrentPage(1);

    const observer = new IntersectionObserver(onVisiblePage, {
      root: container,
      threshold: 0.6,
    });

    const pages = container.querySelectorAll(".pdf-page");
    pages.forEach((page) => observer.observe(page));

    return () => {
      pages.forEach((page) => observer.unobserve(page));
      observer.disconnect();
    };
  }, [numPages, pdfReady, onVisiblePage]);

  const contentConfirmModal = () => {
    return (
      <Box sx={{ mx: "-24px", height: "100%" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bgcolor="#323639"
          color="#fff"
          px={"20px"}
          py={1}
          width={"100%"}
        >
          <BasicTypography
            width={150}
            lines={1}
            variant="body-small"
            tooltipTitle={
              <Typography component={"p"} variant="body-small">
                {url
                  .split("/")
                  .pop()
                  ?.replace(/\.[^/.]+$/, "") || "File Name"}
              </Typography>
            }
          >
            <Typography variant="body-medium" sx={{ cursor: "pointer" }}>
              {" "}
              {url
                .split("/")
                .pop()
                ?.replace(/\.[^/.]+$/, "") || "File Name"}
            </Typography>
          </BasicTypography>

          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              gap={1}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRight={"1px solid #BDBDC7"}
              pr={3}
            >
              <Box bgcolor={"#191B1C"} p={"5px 12px"}>
                <Typography variant="body-medium">{currentPage}</Typography>
              </Box>
              <Typography variant="body-medium">/</Typography>
              <Typography variant="body-medium">{numPages}</Typography>
            </Stack>

            <Box display="flex" alignItems="center" pl={3}>
              <IconButton
                onClick={() => setScale(scale - 0.2)}
                disabled={scale <= 0.5}
              >
                <Typography variant="body-medium" color="white">
                  -
                </Typography>
              </IconButton>
              <Box bgcolor={"#191B1C"} p={"5px 12px"}>
                <Typography variant="body-medium">
                  {Math.round(scale * 100)}%
                </Typography>
              </Box>
              <IconButton onClick={() => setScale(scale + 0.2)}>
                <Typography variant="body-medium" color="white">
                  +
                </Typography>
              </IconButton>
            </Box>
          </Stack>

          <Box width="150px" height="24px" textAlign={"end"}>
            {isFullScreen ? (
              <CloseFullscreenOutlined
                onClick={() => {
                  setIsFullScreen(false);
                  setScale(1);
                }}
                style={{ cursor: "pointer", marginRight: "8px" }}
              />
            ) : (
              <OpenInFullOutlined
                onClick={() => {
                  setIsFullScreen(true);
                  setScale(1.2);
                }}
                style={{ cursor: "pointer", marginRight: "8px" }}
              />
            )}
            <Close onClick={handleCloseModal} style={{ cursor: "pointer" }} />
          </Box>
        </Box>

        {/* PDF Viewer */}
        <Box
          ref={containerRef}
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: isFullScreen ? "100%" : "800px",
            width: "100%",
            height: isFullScreen ? "100%" : "800px",
            overflowY: "auto",
            bgcolor: "#525659",
            margin: "0 auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            px: scale < 1.4 ? { md: "64px" } : "0px",
            transition: "padding 0.5s ease",
          }}
        >
          {error ? (
            <Typography
              color="error"
              variant="body-large"
              textAlign="center"
              mt={4}
            >
              {error}
            </Typography>
          ) : (
            <Document
              file={url}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onLoadError}
              loading={
                <Box textAlign="center" mt={4}>
                  <CircularProgress />
                  <Typography mt={2} color="white">
                    Loading PDF...
                  </Typography>
                </Box>
              }
              error={
                <Typography color="error" textAlign="center" mt={4}>
                  Unable to load document.
                </Typography>
              }
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {Array.from(new Array(numPages), (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    scale={scale}
                    className="pdf-page"
                    data-page-number={index + 1}
                    error={
                      <Typography color="error" textAlign="center" mt={2}>
                        Failed to load page {index + 1}
                      </Typography>
                    }
                  />
                ))}
              </Box>
            </Document>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <BasicModal
      key={keyName}
      isFullScreen={isFullScreen}
      width={isFullScreen ? "100%" : "800px"}
      open={isOpenConfirmModal}
      children={contentConfirmModal()}
      onSave={handleCloseModal}
      onClose={handleCloseModal}
      hasFooter={false}
      hasTitle={false}
      hasClosedIcon={false}
    />
  );
};

export default PdfViewer;
