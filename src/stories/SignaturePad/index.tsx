import { Box, IconButton, useTheme } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { type CSSProperties, useEffect, useRef, useState } from "react";

export interface SignaturePadProps {
  width?: number;
  height?: number;
  color?: string;
  lineWidth?: number;
  style?: CSSProperties;
  value?: string;
  onChange?: (val: string) => void;
}

const SignaturePad = (props: SignaturePadProps) => {
  const theme = useTheme();
  const {
    height = 200,
    width = 480,
    color = theme.palette.text.primary,
    lineWidth = 3,
    style,
    value = "",
    onChange = () => {},
  } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !context) return;
    if (!value) return;
    const img = new Image();
    img.src = value;
    img.onload = () => {
      context.drawImage(
        img,
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height,
      );
    };
  }, [context, value]);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        setContext(ctx);
      }
    }
  }, []);

  const parseToBase64 = () => {
    if (!canvasRef.current) return "";
    return canvasRef.current.toDataURL("image/png");
  };

  const startDrawing = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    setIsDrawing(true);
    const { x, y } = getCoordinates(event);
    context?.beginPath();
    context?.moveTo(x, y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    context?.closePath();
    const res = parseToBase64();
    onChange(res);
  };

  const draw = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !context) return;
    const { x, y } = getCoordinates(event);
    context.lineTo(x, y);
    context.stroke();
  };

  const onClear = () => {
    if (context && canvasRef.current) {
      context.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height,
      );
    }
  };

  const getCoordinates = (event: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    if ("touches" in event) {
      const touch = event.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    }
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  return (
    <Box
      style={style}
      width={width}
      height={height}
      position={"relative"}
      bgcolor={"neutral.+6"}
      borderRadius={"8px"}
    >
      <canvas
        width={width}
        height={height}
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
      <IconButton
        onClick={onClear}
        sx={{ position: "absolute", top: "8px", right: "8px" }}
      >
        <RefreshIcon />
      </IconButton>
    </Box>
  );
};

export default SignaturePad;
