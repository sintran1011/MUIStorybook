import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../src/styles/theme";
import '../src/global.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "Dark", value: "#333" },
        { name: "Light", value: "#F7F9F2" },
      ],
      default: "Dark",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
];

export default preview;
