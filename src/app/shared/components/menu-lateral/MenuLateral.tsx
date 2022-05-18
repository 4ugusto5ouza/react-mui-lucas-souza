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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";
import { useAppDrawerContext, useAppThemeContext } from "../../hooks";
import { ListItemLink } from "../list-item-link/ListItemLink";

interface IMenuLateral {
  children?: ReactNode;
}
export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { isDrawerOpen, drawerOptions, toggleDrawerOpen } =
    useAppDrawerContext();

  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
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
              {drawerOptions &&
                drawerOptions.map((drawerOption, index) => (
                  <ListItemLink
                    key={index}
                    icon={drawerOption.icon}
                    label={drawerOption.label}
                    to={drawerOption.path}
                    onClick={smDown ? toggleDrawerOpen : undefined}
                  />
                ))}
            </List>
          </Box>
          <Box>
            <List component={"nav"}>
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary={"Alternar tema"} />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
