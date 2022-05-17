import { Button } from "@mui/material";
import { useAppThemeContext } from "../../shared/hooks";

export const Home = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <>
      <p>Home</p>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </>
  );
};
