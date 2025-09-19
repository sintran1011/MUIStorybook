import {
  Avatar as MuiAvatar,
  Skeleton,
  SxProps,
  type Theme,
} from "@mui/material";
import { theme } from "@styles/theme";

type AvatarSize = "sm" | "md" | "lg" | "xl" | "xxl";
type Shape = "rounded" | "square";

const SIZE_MAP: Record<AvatarSize, number> = {
  sm: 24,
  md: 32,
  lg: 40,
  xl: 64,
  xxl: 128,
};

const SHAPE_MAP: Record<Shape, string> = {
  rounded: "50%",
  square: "4px",
};

export interface AvatarProps {
  children?: string;
  size?: AvatarSize;
  shape?: Shape;
  src?: string;
  sx?: SxProps<Theme>;
  isLoading?: boolean;
}

const colorArr = [
  theme.palette.brand.main,
  theme.palette.neutral.main,
  theme.palette.positive.main,
  theme.palette.warn.main,
  theme.palette.negative.main,
];

const Avatar = (props: AvatarProps) => {
  const {
    children,
    size = "md",
    shape = "rounded",
    src,
    sx,
    isLoading = false,
  } = props;
  const dimension = SIZE_MAP[size];

  const randomColor = () => {
    const length = children?.length || 0;
    const idx = Math.floor(length / 4);
    return colorArr[idx];
  };

  const stringAvatar = () => {
    const split = children?.split(" ").filter(Boolean);
    const firstCharacter = split?.[0]?.charAt(0) ? split?.[0]?.charAt(0) : "";
    const secondCharacter = split?.[1] ? split?.[1].charAt(0) : "";
    const splitName = `${firstCharacter}${secondCharacter}`;
    return splitName;
  };

  return isLoading ? (
    <Skeleton
      animation="wave"
      variant="circular"
      width={dimension}
      height={dimension}
    />
  ) : (
    <MuiAvatar
      sx={{
        color: "#ffffff",
        fontWeight: 600,
        width: dimension,
        height: dimension,
        fontSize: dimension * 0.4,
        borderRadius: SHAPE_MAP[shape],
        bgcolor: randomColor(),
        ...sx,
      }}
      src={src}
      alt={children}
    >
      {stringAvatar() || ""}
    </MuiAvatar>
  );
};

export default Avatar;
