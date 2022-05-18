import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";
import { useAppDrawerContext } from "../hooks";

interface ILayoutPageBaseProps {
  titulo: string;
  children?: ReactNode;
}
export const LayoutPageBase: React.FC<ILayoutPageBaseProps> = ({
  titulo,
  children,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { toggleDrawerOpen } = useAppDrawerContext();
  return (
    <Box height={"100%"} display="flex" flexDirection={"column"} gap={1}>
      <Box
        padding={1}
        height={theme.spacing(12)}
        display={"flex"}
        alignItems={"center"}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography variant="h5">{titulo}</Typography>
      </Box>
      <Box>Barra de ferramentas</Box>
      <Box>{children && children}</Box>
    </Box>
  );
};
