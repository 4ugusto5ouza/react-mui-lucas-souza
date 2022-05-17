import { createContext, ReactNode, useCallback, useState } from "react";

interface IDrawerContextData {
  isDrawerOpen?: boolean;
  toggleDrawerOpen?: () => void;
  children?: ReactNode;
}

export const DrawerContext = createContext({} as IDrawerContextData);

export const AppDrawerProvider: React.FC<IDrawerContextData> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
