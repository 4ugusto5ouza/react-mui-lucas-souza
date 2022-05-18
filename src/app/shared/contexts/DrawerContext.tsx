import { createContext, ReactNode, useCallback, useState } from "react";
interface IDrawerOption {
  path: string;
  icon: string;
  label: string;
}

interface IDrawerContextData {
  isDrawerOpen?: boolean;
  toggleDrawerOpen?: () => void;
  drawerOptions?: IDrawerOption[];
  setDrawerOptions?: (newDrawerOptions: IDrawerOption[]) => void;
  children?: ReactNode;
}

export const DrawerContext = createContext({} as IDrawerContextData);

export const AppDrawerProvider: React.FC<IDrawerContextData> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOption[]) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        toggleDrawerOpen,
        setDrawerOptions: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
