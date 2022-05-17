import { ThemeProvider } from "@emotion/react";
import { AppRoutes } from "./routes";
import { LightTheme } from "./shared/themes";

const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <h1>React JS + MUI</h1>
      <AppRoutes />
    </ThemeProvider>
  );
};

export { App };
