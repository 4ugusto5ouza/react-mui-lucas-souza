import { Box } from "@mui/material";
import { LayoutPageBase } from "../../shared/layouts";

export const Home = () => {
  return (
    <LayoutPageBase
      titulo="Página inicial"
      barraFerramentas={<>Barra de Ferramentas</>}
    >
      Children
    </LayoutPageBase>
  );
};
