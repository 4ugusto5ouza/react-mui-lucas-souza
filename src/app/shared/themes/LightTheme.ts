import { createTheme } from "@mui/material";
import { yellow, cyan } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: yellow[400],
      dark: yellow[700],
      light: yellow[200],
      contrastText: "#fff",
    },
    secondary: {
      main: cyan[400],
      dark: cyan[700],
      light: cyan[200],
      contrastText: "#fff",
    },
    background: {
      default: "#f7f6f3",
      paper: "#fff",
    },
  },
});
