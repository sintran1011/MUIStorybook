import { createTheme, Theme } from "@mui/material";
import baseTheme from "@configs/theme";

const theme: Theme = createTheme({
  ...baseTheme,
});

export { theme };
