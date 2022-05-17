import { AppRoutes } from "./routes";
import { MenuLateral } from "./shared/components";
import { AppDrawerProvider, AppThemeProvider } from "./shared/contexts";

const App = () => {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </AppDrawerProvider>
    </AppThemeProvider>
  );
};

export { App };
