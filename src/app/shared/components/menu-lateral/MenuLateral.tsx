import { Box, Drawer, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface IMenuLateral {
  children?: ReactNode;
}
export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Drawer variant={"permanent"}>
        <Box width={theme.spacing(28)}>Teste</Box>
      </Drawer>
      <Box height={"100vh"} marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
