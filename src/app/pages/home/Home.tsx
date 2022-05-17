import { Button } from "@mui/material";
import { useAppDrawerContext } from "../../shared/hooks";

export const Home = () => {
  const { toggleDrawerOpen } = useAppDrawerContext();
  return (
    <>
      <Button variant="contained" onClick={toggleDrawerOpen}>
        Toggle Open
      </Button>
    </>
  );
};
