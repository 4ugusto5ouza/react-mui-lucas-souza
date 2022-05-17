import { useContext } from "react";
import { DrawerContext } from "../contexts";

export const useAppDrawerContext = () => {
  return useContext(DrawerContext);
};
