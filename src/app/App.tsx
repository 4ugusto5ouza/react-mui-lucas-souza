import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts";

const App = () => {
  return (
    <AppThemeProvider>
      <div>
        <h1>React JS + MUI</h1>
        <AppRoutes />
      </div>
    </AppThemeProvider>
  );
};

export { App };
