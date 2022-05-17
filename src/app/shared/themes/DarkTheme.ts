import { createTheme } from "@mui/material";
import { yellow, cyan } from "@mui/material/colors";

export const DarkTheme = createTheme({
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
      default: "#303134",
      paper: "#202124",
    },
  },
});
