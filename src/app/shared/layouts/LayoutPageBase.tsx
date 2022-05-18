import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactNode, useEffect } from "react";
import { useAppDrawerContext } from "../hooks";

interface ILayoutPageBaseProps {
  titulo: string;
  barraFerramentas?: ReactNode;
  children?: ReactNode;
}
export const LayoutPageBase: React.FC<ILayoutPageBaseProps> = ({
  titulo,
  barraFerramentas,
  children,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const { toggleDrawerOpen, setDrawerOptions } = useAppDrawerContext();

  useEffect(() => {
    setDrawerOptions?.([
      {
        icon: "home",
        label: "Página inicial",
        path: "pagina-inicial",
      },
    ]);
  }, []);

  return (
    <Box height={"100%"} display="flex" flexDirection={"column"} gap={1}>
      <Box
        padding={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        display={"flex"}
        alignItems={"center"}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipses"}
        >
          {titulo}
        </Typography>
      </Box>

      {barraFerramentas && <Box>{barraFerramentas}</Box>}

      {children && (
        <Box flex={1} overflow={"auto"}>
          {children}
        </Box>
      )}
    </Box>
  );
};
