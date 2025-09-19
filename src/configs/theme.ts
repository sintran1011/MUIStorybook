import { ThemeOptions } from "@mui/material";

const baseTheme: ThemeOptions = {
  components: {
    MuiTypography: {
      defaultProps: {
        variant: "body-large",
        color: "textPrimary",
      },
      variants: [
        {
          props: { variant: "hero-large" },
          style: ({ theme }) => ({
            fontSize: "48px",
            fontWeight: 600,
            lineHeight: "64px",
            letterSpacing: "-0.96px",
            fontFamily: "var(--font-inter)",
            [theme.breakpoints.down("sm")]: {
              fontSize: "32px",
              lineHeight: "60px",
            },
          }),
        },
        {
          props: { variant: "hero-medium" },
          style: () => ({
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "56px",
            letterSpacing: "-0.8px",
            fontFamily: "var(--font-inter)",
          }),
        },
        {
          props: { variant: "header-4x-large" },
          style: () => ({
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: "44px",
            letterSpacing: "-0.64px",
            fontFamily: "var(--font-inter)",
          }),
        },
        {
          props: { variant: "header-3x-large" },
          style: ({ theme }) => ({
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "36px",
            letterSpacing: "-0.48px",
            fontFamily: "var(--font-inter)",
            [theme.breakpoints.down("md")]: {
              fontSize: "22px",
              lineHeight: "32px",
            },
          }),
        },
        {
          props: { variant: "header-x-large" },
          style: ({ theme }) => ({
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "28px",
            letterSpacing: "-0.36px",
            fontFamily: "var(--font-inter)",
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
              lineHeight: "32px",
            },
          }),
        },
        {
          props: { variant: "header-large" },
          style: ({ theme }) => ({
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "28px",
            fontFamily: "var(--font-inter)",
            [theme.breakpoints.down("md")]: {
              fontSize: "14px",
              lineHeight: "24px",
            },
          }),
        },
        {
          props: { variant: "header-medium" },
          style: ({ theme }) => ({
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "24px",
            fontFamily: "var(--font-inter)",
            [theme.breakpoints.down("sm")]: {
              fontSize: "12px",
              lineHeight: "20px",
            },
          }),
        },
        {
          props: { variant: "header-small" },
          style: () => ({
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: "20px",
            fontFamily: "var(--font-inter)",
            userSelect: "none",
          }),
        },
        {
          props: { variant: "body-large" },
          style: ({ theme }) => ({
            fontSize: "14px",
            fontWeight: 450,
            lineHeight: "20px",
            letterSpacing: "0.32px",
            fontFamily: "var(--font-inter)",
            [theme.breakpoints.up("sm")]: {
              fontSize: "16px",
              lineHeight: "28px",
            },
          }),
        },
        {
          props: { variant: "body-medium" },
          style: () => ({
            fontSize: "14px",
            fontWeight: 450,
            lineHeight: "24px",
            letterSpacing: "0.28px",
            fontFamily: "var(--font-inter)",
            userSelect: "none",
          }),
        },
        {
          props: { variant: "body-small" },
          style: () => ({
            fontSize: "12px",
            fontWeight: 450,
            lineHeight: "20px",
            letterSpacing: "0.24px",
            fontFamily: "var(--font-inter)",
          }),
        },
        {
          props: { variant: "body-x-small" },
          style: () => ({
            fontSize: "10px",
            fontWeight: 450,
            lineHeight: "16px",
            letterSpacing: "0.2px",
            fontFamily: "var(--font-inter)",
          }),
        },
        {
          props: { variant: "body-strong-large" },
          style: ({ theme }) => ({
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "20px",
            fontFamily: "var(--font-inter)",
            [theme.breakpoints.up("sm")]: {
              fontSize: "16px",
              lineHeight: "28px",
            },
          }),
        },
        {
          props: { variant: "body-strong-medium" },
          style: () => ({
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "24px",
            fontFamily: "var(--font-inter)",
          }),
        },
        {
          props: { variant: "body-strong-small" },
          style: () => ({
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: "20px",
            fontFamily: "var(--font-inter)",
          }),
        },
        {
          props: { variant: "body-strong-2x-small" },
          style: () => ({
            fontSize: "10px",
            fontWeight: 600,
            lineHeight: "16px",
            fontFamily: "var(--font-inter)",
          }),
        },
      ],
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "brand",
        size: "medium",
      },
      styleOverrides: {
        sizeLarge: {
          height: "48px",
          fontWeight: 450,
          fontSize: "16px",
          lineHeight: "28px",
          color: "#ffffff",
          fontFamily: "var(--font-inter)",
        },
        sizeMedium: {
          height: "40px",
          fontWeight: 450,
          fontSize: "14px",
          lineHeight: "24px",
          color: "#ffffff",
          fontFamily: "var(--font-inter)",
        },
        sizeSmall: {
          height: "32px",
          fontWeight: 450,
          fontSize: "14px",
          lineHeight: "24px",
          color: "#ffffff",
          fontFamily: "var(--font-inter)",
        },
      },
      variants: [
        {
          props: { color: "brand", variant: "contained" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.brand.main,
            color: "#fff",
            "&:hover": {
              backgroundColor: theme.palette.interaction.default.hover,
            },
            "&:disabled": {
              backgroundColor: theme.palette.background.brand.muted,
              color: "#ffffff",
            },
          }),
        },
        {
          props: { color: "brand", variant: "outlined" },
          style: ({ theme }) => ({
            borderColor: theme.palette.interaction.default.normal,
            backgroundColor: "#ffffff",
            color: theme.palette.interaction.default.normal,
            "&:hover": {
              backgroundColor: theme.palette.background.brand.surface,
              borderColor: theme.palette.interaction.default.hover,
            },
            "&:disabled": {
              borderColor: theme.palette.border.brand.subtle,
              color: theme.palette.background.brand.muted,
            },
          }),
        },
        {
          props: { color: "brand", variant: "text" },
          style: ({ theme }) => ({
            color: theme.palette.interaction.default.normal,
            "&:disabled": {
              opacity: 0.5,
              color: theme.palette.interaction.default.normal,
            },
          }),
        },
        {
          props: { color: "neutral", variant: "contained" },
          style: () => ({
            backgroundColor: "#dadada",
            color: "#383838",
            "&:hover": {
              opacity: 0.8,
            },
            "&:disabled": {
              backgroundColor: "#dadada",
              opacity: 0.5,
              color: "#383838",
            },
          }),
        },
        {
          props: { color: "neutral", variant: "outlined" },
          style: ({ theme }) => ({
            borderColor: theme.palette.neutral.main,
            color: theme.palette.neutral.main,
            backgroundColor: "#ffffff",
            "&:hover": {
              borderColor: theme.palette.neutral.main,
              color: theme.palette.neutral.main,
            },
            "&:disabled": {
              borderColor: theme.palette.neutral.main,
              color: theme.palette.neutral.main,
              opacity: 0.5,
            },
          }),
        },
        {
          props: { color: "neutral", variant: "text" },
          style: ({ theme }) => ({
            color: theme.palette.neutral.main,
            "&:disabled": {
              opacity: 0.5,
              color: theme.palette.neutral.main,
            },
          }),
        },
        {
          props: { color: "positive", variant: "contained" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.positive.main,
            color: "#fff",
            "&:hover": {
              backgroundColor: theme.palette.positive[-2],
              color: "#fff",
            },
            "&:disabled": {
              backgroundColor: theme.palette.positive.main,
              opacity: 0.5,
              color: "#fff",
            },
          }),
        },
        {
          props: { color: "positive", variant: "outlined" },
          style: ({ theme }) => ({
            borderColor: theme.palette.positive.main,
            color: theme.palette.positive.main,
            backgroundColor: "#ffffff",
            "&:hover": {
              borderColor: theme.palette.positive.main,
              color: theme.palette.positive.main,
            },
            "&:disabled": {
              borderColor: theme.palette.positive.main,
              color: theme.palette.positive.main,
              opacity: 0.5,
            },
          }),
        },
        {
          props: { color: "positive", variant: "text" },
          style: ({ theme }) => ({
            color: theme.palette.positive.main,
            "&:disabled": {
              opacity: 0.5,
              color: theme.palette.positive.main,
            },
          }),
        },
        {
          props: { color: "warn", variant: "contained" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.warn.main,
            color: "#fff",
            "&:hover": {
              backgroundColor: theme.palette.warn[-2],
              color: "#fff",
            },
            "&:disabled": {
              backgroundColor: theme.palette.warn.main,
              opacity: 0.5,
              color: "#fff",
            },
          }),
        },
        {
          props: { color: "warn", variant: "outlined" },
          style: ({ theme }) => ({
            borderColor: theme.palette.warn.main,
            color: theme.palette.warn.main,
            backgroundColor: "#ffffff",
            "&:hover": {
              borderColor: theme.palette.warn.main,
              color: theme.palette.warn.main,
            },
            "&:disabled": {
              borderColor: theme.palette.warn.main,
              color: theme.palette.warn.main,
              opacity: 0.5,
            },
          }),
        },
        {
          props: { color: "warn", variant: "text" },
          style: ({ theme }) => ({
            color: theme.palette.warn.main,
            "&:disabled": {
              opacity: 0.5,
              color: theme.palette.warn.main,
            },
          }),
        },
        {
          props: { color: "negative", variant: "contained" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.negative.main,
            color: "#fff",
            "&:hover": {
              backgroundColor: theme.palette.negative[-2],
              color: "#fff",
            },
            "&:disabled": {
              backgroundColor: theme.palette.negative.main,
              opacity: 0.5,
              color: "#fff",
            },
          }),
        },
        {
          props: { color: "negative", variant: "outlined" },
          style: ({ theme }) => ({
            borderColor: theme.palette.negative.main,
            color: theme.palette.negative.main,
            backgroundColor: "#ffffff",
            "&:hover": {
              borderColor: theme.palette.negative.main,
              color: theme.palette.negative.main,
            },
            "&:disabled": {
              borderColor: theme.palette.negative.main,
              color: theme.palette.negative.main,
              opacity: 0.5,
            },
          }),
        },
        {
          props: { color: "negative", variant: "text" },
          style: ({ theme }) => ({
            color: theme.palette.negative.main,
            "&:disabled": {
              opacity: 0.5,
              color: theme.palette.negative.main,
            },
          }),
        },
      ],
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#EAEDF0",
        },
      },
    },
    MuiChip: {
      variants: [
        {
          props: { color: "brand", variant: "filled" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.brand.main,
            color: "#ffffff",
            fontWeight: "700",
          }),
        },
        {
          props: { color: "brand", variant: "outlined" },
          style: ({ theme }) => ({
            backgroundColor: "#ffffff",
            color: theme.palette.brand.main,
            borderColor: theme.palette.brand.main,
            fontWeight: "700",
          }),
        },
        {
          props: { color: "neutral" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.neutral.main,
            color: "#ffffff",
            fontWeight: "700",
          }),
        },
        {
          props: { color: "neutral", variant: "outlined" },
          style: ({ theme }) => ({
            backgroundColor: "#ffffff",
            color: theme.palette.neutral.main,
            borderColor: theme.palette.neutral.main,
            fontWeight: "700",
          }),
        },
        {
          props: { color: "positive" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.positive.main,
            color: "#ffffff",
            fontWeight: "700",
          }),
        },
        {
          props: { color: "positive", variant: "outlined" },
          style: ({ theme }) => ({
            backgroundColor: "#ffffff",
            color: theme.palette.positive.main,
            borderColor: theme.palette.positive.main,
            fontWeight: "700",
          }),
        },
        {
          props: { color: "warn" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.warn.main,
            color: "#ffffff",
            fontWeight: "700",
          }),
        },
        {
          props: { color: "warn", variant: "outlined" },
          style: ({ theme }) => ({
            backgroundColor: "#ffffff",
            color: theme.palette.warn.main,
            borderColor: theme.palette.warn.main,
            fontWeight: "700",
          }),
        },
        {
          props: { color: "negative" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.negative.main,
            color: "#ffffff",
            fontWeight: "700",
          }),
        },
        {
          props: { color: "negative", variant: "outlined" },
          style: ({ theme }) => ({
            backgroundColor: "#ffffff",
            color: theme.palette.negative.main,
            borderColor: theme.palette.negative.main,
            fontWeight: "700",
          }),
        },
      ],
    },
  },
  palette: {
    brand: {
      "-4": "#001133",
      "-3": "#00194A",
      "-2": "#002F8E",
      "-1": "#0055FF",
      "0": "#3C7DFF",
      main: "#3C7DFF",
      "+1": "#709FFF",
      "+2": "#9BBDFF",
      "+3": "#BFD5FF",
      "+4": "#DBE7FF",
      "+5": "#EFF4FF",
      "+6": "#FBFCFF",
      "+7": "#F5F8FF",
      "+8": "#FAFBFF",
    },
    neutral: {
      "-4": "#1B242C",
      "-3": "#272E35",
      "-2": "#3A424A",
      "-1": "#4A545E",
      "0": "#555F6D",
      main: "#555F6D",
      "+1": "#7E8C9A",
      "+2": "#9EA8B3",
      "+3": "#CFD6DD",
      "+4": "#DEE3E7",
      "+5": "#EAEDF0",
      "+6": "#F0F3F5",
      "+7": "#F5F5F5",
      "+8": "#FCFCFD",
    },
    positive: {
      "-4": "#062D1B",
      "-3": "#0E4E30",
      "-2": "#196742",
      "-1": "#1E714A",
      "0": "#1D7C4D",
      main: "#1D7C4D",
      "+1": "#4AA578",
      "+2": "#75CC9E",
      "+3": "#C2EBD5",
      "+4": "#C6F1DA",
      "+5": "#D8F8E7",
      "+6": "#E6F9EF",
      "+7": "#F4FBF7",
      "+8": "#FBFEFC",
    },
    warn: {
      "-4": "#331A00",
      "-3": "#4A2600",
      "-2": "#8E4900",
      "-1": "#FF8400",
      "0": "#FFA13C",
      main: "#FFA13C",
      "+1": "#FFBA70",
      "+2": "#FFCF9B",
      "+3": "#FCDEC0",
      "+4": "#FFE0BF",
      "+5": "#FFE8D1",
      "+6": "#FFF0E0",
      "+7": "#FFF5EB",
      "+8": "#FFFCFA",
    },
    negative: {
      "-4": "#4A0D0D",
      "-3": "#6F2020",
      "-2": "#952D2D",
      "-1": "#A13636",
      "0": "#C53434",
      main: "#C53434",
      "+1": "#F26464",
      "+2": "#F49090",
      "+3": "#FCCFCF",
      "+4": "#FCD9D9",
      "+5": "#FEE6E6",
      "+6": "#FFEBEB",
      "+7": "#FEF5F5",
      "+8": "#FFFAFA",
    },
    text: {
      primary: "#272E35",
      secondary: "#555F6D",
      tertiary: "#7E8C9A",
      disabled: "#9EA8B3",
      informative: {
        primary: "#3C7DFF",
        secondary: "#4482FF",
      },
      positive: {
        primary: "#0E4E30",
        secondary: "#1D7C4D",
      },
      warning: {
        primary: "#4A2600",
        secondary: "#FF8300",
      },
      negative: {
        // design system color bad so i change to this one
        primary: "#FF4D4F",
        secondary: "#C53434",
      },
      brand: {
        primary: "#0055FF",
        secondary: "#FFA13C",
      },
    },
    border: {
      primary: "#EAEDF0",
      secondary: "#8C8C8C",
      disabled: "#D9D9D9",
      neutral: {
        strong: "#555F6D",
        subtle: "#CFD6DD",
      },
      informative: {
        strong: "#0055FF",
        subtle: "#6699FF",
      },
      positive: {
        strong: "#1D7C4D",
        subtle: "#C2EBD5",
      },
      warning: {
        strong: "#FFA13C",
        subtle: "#FCDEC0",
      },
      negative: {
        strong: "#C53434",
        subtle: "#FCCFCF",
      },
      brand: {
        strong: "#0055FF",
        subtle: "#AFCDF9",
      },
    },
    background: {
      default: "#CFD6DD",
      inverted: "#272E35",
      readonly: "#F5F7F9",
      neutral: {
        strong: "#555F6D",
        muted: "#DEE3E7",
        onSubtle: "#EAEDF0",
        subtle: "#F5F7F9",
        surface: "#FCFCFD",
      },
      informative: {
        strong: "#0055FF",
        muted: "#88B0FF",
        onSubtle: "#EAF3FF",
        subtle: "#EEF4FF",
        surface: "#F8FAFF",
      },
      positive: {
        strong: "#1D7C4D",
        muted: "#C6F1DA",
        onSubtle: "#D8F8E7",
        subtle: "#F4FBF7",
        surface: "#FBFEFC",
      },
      warning: {
        strong: "#FFA13C",
        muted: "#FFE0BF",
        onSubtle: "#FFF3E7",
        subtle: "#FFF5EB",
        surface: "#FFFCFA",
      },
      negative: {
        strong: "#C53434",
        muted: "#FCD9D9",
        onSubtle: "#FEE6E6",
        subtle: "#FEF5F5",
        surface: "#FFFAFA",
      },
      brand: {
        strong: "#0055FF",
        muted: "#CCDFFB",
        onSubtle: "#DBE8FA",
        subtle: "#EEF4FF",
        surface: "#F8FAFF",
      },
    },
    interaction: {
      default: {
        normal: "#3062D4",
        hover: "#8CB7F6",
        active: "#2A68C7",
        selected: "#003EBB",
        subtleNormal: "#B2CFF9",
        subtleHover: "#E2EDFD",
        subtleActive: "#AFCDF9",
        subtleSelected: "#E2EDFD",
      },
      neutral: {
        normal: "#4A545E",
        hover: "#3A424A",
        active: "#272E35",
        selected: "#3A424A",
        subtleNormal: "#F2F7FE",
        subtleHover: "#EAEDF0",
        subtleActive: "#CFD6DD",
        subtleSelected: "#EAEDF0",
      },
      alert: {
        normal: "#C53434",
        hover: "#952D2D",
        active: "#6F2020",
        selected: "#952D2D",
        subtleNormal: "#FFEBEB",
        subtleHover: "#FEE6E6",
        subtleActive: "#FCCFCF",
        subtleSelected: "#FEE6E6",
      },
      disabled: {
        normal: "#9EA8B3",
        hover: "#7E8C9A",
        active: "#555F6D",
        subtleNormal: "#F2F2F2",
        subtleHover: "#DEE3E7",
        subtleActive: "#CFD6DD",
      },
      border: {
        normal: "#8CB7F6",
        hover: "#639DF3",
        active: "#2A68C7",
        selected: "#21519D",
        neutralNormal: "#CFD6DD",
        neutralHover: "#9EA8B3",
        neutralActive: "#7E8C9A",
        neutralSelected: "#9EA8B3",
        alert: "#F26464",
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
};

export { baseTheme };
