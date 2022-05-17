import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";

interface IMenuLateral {
  children?: ReactNode;
}
export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Drawer variant={"permanent"}>
        <Box
          width={theme.spacing(28)}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box
            width={"100%"}
            height={theme.spacing(20)}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Avatar
              sx={{
                height: theme.spacing(10),
                width: theme.spacing(10),
              }}
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component={"nav"}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary={"Página Inicial"} />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height={"100vh"} marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
