import { Button } from "@mui/material";
import { useAppThemeContext } from "../../shared/hooks";

export const Home = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <>
      <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </>
  );
};
