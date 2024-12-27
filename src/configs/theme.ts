import { ThemeOptions } from "@mui/material";

const baseTheme: ThemeOptions = {
  components: {
    MuiTypography: {
      defaultProps: {
        variant: "label-large",
      },
      variants: [
        {
          props: { variant: "display-large" },
          style: {
            fontSize: "57pt", // 76px
            fontWeight: 700,
            lineHeight: "64pt",
            letterSpacing: "-0.25pt",
            fontFamily: "var(--font-orbitron)",
          },
        },
        {
          props: { variant: "display-medium" },
          style: {
            fontSize: "45pt", // 60px
            fontWeight: 700,
            lineHeight: "52pt",
            letterSpacing: "0pt",
            fontFamily: "var(--font-orbitron)",
          },
        },
        {
          props: { variant: "display-small" },
          style: {
            fontSize: "36pt", // 48px
            fontWeight: 700,
            lineHeight: "44pt",
            letterSpacing: "0pt",
            fontFamily: "var(--font-orbitron)",
          },
        },
        {
          props: { variant: "headline-large" },
          style: {
            fontSize: "32pt", // 42px
            fontWeight: 600,
            lineHeight: "40pt",
            letterSpacing: "0pt",
            fontFamily: "var(--font-orbitron)",
          },
        },
        {
          props: { variant: "headline-medium" },
          style: {
            fontSize: "28pt", // 36px
            fontWeight: 600,
            lineHeight: "36pt",
            letterSpacing: "0pt",
            fontFamily: "var(--font-orbitron)",
          },
        },
        {
          props: { variant: "headline-small" },
          style: {
            fontSize: "24pt", // 32px
            fontWeight: 600,
            lineHeight: "32pt",
            letterSpacing: "0pt",
            fontFamily: "var(--font-orbitron)",
          },
        },

        {
          props: { variant: "title-large" },
          style: {
            fontSize: "22pt", // 28px
            fontWeight: 400,
            lineHeight: "28pt",
            letterSpacing: "0pt",
            fontFamily: "var(--font-orbitron)",
          },
        },
        {
          props: { variant: "title-medium" },
          style: {
            fontSize: "18pt", // 24px
            fontWeight: 400,
            lineHeight: "24pt",
            letterSpacing: "0.15pt",
            fontFamily: "var(--font-orbitron)",
          },
        },
        {
          props: { variant: "title-small" },
          style: {
            fontSize: "14pt", // 20px
            fontWeight: 400,
            lineHeight: "20pt",
            letterSpacing: "0.1pt",
            fontFamily: "var(--font-orbitron)",
          },
        },

        {
          props: { variant: "body-large" },
          style: {
            fontSize: "16pt", // 24px
            fontWeight: 500,
            lineHeight: "28pt",
            letterSpacing: "0pt",
            fontFamily: "var(--font-montserrat)",
          },
        },
        {
          props: { variant: "body-regular" },
          style: {
            fontSize: "16pt", // 24px
            fontWeight: 400,
            lineHeight: "28pt",
            letterSpacing: "0pt",
            fontFamily: "var(--font-montserrat)",
          },
        },
        {
          props: { variant: "body-light" },
          style: {
            fontSize: "16pt", // 24px
            fontWeight: 300,
            lineHeight: "24pt",
            letterSpacing: "0.15pt",
            fontFamily: "var(--font-montserrat)",
          },
        },
        {
          props: { variant: "body-medium" },
          style: {
            fontSize: "14pt", // 20px
            fontWeight: 400,
            lineHeight: "24pt",
            letterSpacing: "0.15pt",
            fontFamily: "var(--font-montserrat)",
          },
        },
        {
          props: { variant: "body-small" },
          style: {
            fontSize: "12pt", // 16px
            fontWeight: 400,
            lineHeight: "20pt",
            letterSpacing: "0.1pt",
            fontFamily: "var(--font-montserrat)",
          },
        },
        {
          props: { variant: "body-xs" },
          style: {
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "20pt",
            letterSpacing: "0.1pt",
            fontFamily: "var(--font-montserrat)",
          },
        },
        {
          props: { variant: "label-large" },
          style: {
            fontSize: "14pt", // 20px
            fontWeight: 400,
            lineHeight: "20pt",
            letterSpacing: "0.1pt",
            fontFamily: "var(--font-montserrat)",
          },
        },
        {
          props: { variant: "label-medium" },
          style: {
            fontSize: "12pt", // 16px
            fontWeight: 400,
            lineHeight: "16pt",
            letterSpacing: "0.5pt",
            fontFamily: "var(--font-montserrat)",
          },
        },
        {
          props: { variant: "label-small" },
          style: {
            fontSize: "11pt", // 14px
            fontWeight: 400,
            lineHeight: "16pt",
            letterSpacing: "0.5pt",
            fontFamily: "var(--font-montserrat)",
          },
        },
        {
          props: { variant: "label-xs" },
          style: {
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "16pt",
            letterSpacing: "0.5pt",
            fontFamily: "var(--font-montserrat)",
          },
        },
        {
          props: { variant: "label-xl" },
          style: {
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "14pt",
            letterSpacing: "0.5pt",
            fontFamily: "var(--font-montserrat)",
          },
        },
      ],
    },
    MuiButton: {
      defaultProps: {
        variant: "primary",
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: "#23408e",
            color: "white",
            fontFamily: "var(--font-montserrat)",
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            backgroundColor: "#ef4923",
            color: "white",
            fontFamily: "var(--font-montserrat)",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "#FFFFFF0A",
            color: "white",
            border: "none",
            fontFamily: "var(--font-montserrat)",
          },
        },
      ],
      styleOverrides: {
        sizeLarge: {
          height: "52px",
        },
        sizeMedium: {
          height: "40px",
        },
        sizeSmall: {
          height: "32px",
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        style: {
          borderRadius: 8,
        },
        sx: {
          bgcolor: "dark.400",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.MuiPaginationItem-ellipsis": {
            color: "#FFFFFF",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      "50": "#e9ecf4",
      "100": "#bbc4dc",
      "200": "#9aa7cb",
      "300": "#6c7fb3",
      "400": "#4f66a5",
      main: "#23408e",
      "600": "#203a81",
      "700": "#192d65",
      "800": "#13234e",
      "900": "#0f1b3c",
    },
    secondary: {
      "50": "#fdede9",
      "100": "#fac7bb",
      "200": "#f8ab9a",
      "300": "#f4856c",
      "400": "#f26d4f",
      main: "#ef4923",
      "600": "#d94220",
      "700": "#aa3419",
      "800": "#832813",
      "900": "#641f0f",
    },
    info: {
      "50": "#eef8fb",
      "100": "#cae8f1",
      "200": "#b0ddeb",
      "300": "#8ccde2",
      "400": "#76c3dc",
      main: "#54b4d3",
      "600": "#4ca4c0",
      "700": "#3c8096",
      "800": "#2e6374",
      "900": "#234c59",
    },
    error: {
      "50": "#fcedf0",
      "100": "#f4c8cf",
      "200": "#efadb8",
      "300": "#e88797",
      "400": "#e37083",
      "500": "#dc4c64",
      "600": "#c8455b",
      "700": "#9c3647",
      "800": "#792a37",
      "900": "#5c202a",
    },
    success: {
      "50": "#e8f6ed",
      "100": "#b6e3c8",
      "200": "#93d5ad",
      "300": "#62c288",
      "400": "#43b671",
      "500": "#14a44d",
      "600": "#129546",
      "700": "#0e7437",
      "800": "#0b5a2a",
      "900": "#084520",
    },
    warning: {
      "50": "#fcf6e8",
      "100": "#f7e2b8",
      "200": "#f3d496",
      "300": "#edc066",
      "400": "#e9b449",
      "500": "#e4a11b",
      "600": "#cf9319",
      "700": "#a27213",
      "800": "#7d590f",
      "900": "#60440b",
    },
    brown: {
      main: "#2a2525",
    },
    dark: {
      "50": "#ebeaea",
      "100": "#8E98A8",
      "200": "#a19e9e",
      "300": "#767272",
      "400": "#5c5757",
      "500": "#332d2d",
      "600": "#2e2929",
      "700": "#242020",
      "800": "#1c1919",
      "900": "#151313",
      main: "#1C1919",
    },
    light: {
      "50": "#FFFFFF",
      "100": "#fefefe",
      "200": "#fdfdfd",
      "300": "#fcfcfc",
      "400": "#fcfcfc",
      "500": "#fbfbfb",
      "600": "#e4e4e4",
      "700": "#b2b2b2",
      "800": "#8a8a8a",
      "900": "#696969",
    },
    text: {
      primary: "#EF4923",
      secondary: "#767272",
      disabled: "#FFFFFF26",
    },
    bgColor: {
      primary: "linear-gradient(0.04deg, #151313 20.03%, #2E2929 109.66%)",
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      "2xs": 375,
      sm: 600,
      md: 900,
      tablet: 1024,
      lg: 1200,
      xl: 1536,
      "2xl": 1920,
      "3xl": 2560,
    },
  },
};

export { baseTheme };
