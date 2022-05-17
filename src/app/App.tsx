import { AppRoutes } from "./routes";
import { MenuLateral } from "./shared/components";
import { AppThemeProvider } from "./shared/contexts";

const App = () => {
  return (
    <AppThemeProvider>
      <MenuLateral>
        <AppRoutes />
      </MenuLateral>
    </AppThemeProvider>
  );
};

export { App };
