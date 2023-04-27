import {
  Toolbar,
  AppBar,
  Avatar,
  Typography,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Box,
  Hidden,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./HeaderStyles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { menuOptions } from "./options";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Search } from "../Search/Search";

export const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.boxHeader}>
            <Hidden smDown>
              <Typography className={classes.typeAccount}>
                Cuenta maestra
              </Typography>
            </Hidden>
            <Box display="flex">
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
              <Search />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Typography
            variant="h5"
            color="primary"
            className={classes.nameHeader}
          >
            SISEC
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem key={"profile"}>
            <ListItemIcon>
              <Avatar className={classes.avatar}>C</Avatar>
            </ListItemIcon>
            <ListItemText
              primary={
                <>
                  <Typography>Christian Cedillo</Typography>
                  <Typography className={classes.role} variant="body2">
                    Lider de Book c
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem button onClick={() => navigate("/login")}>
            <ListItemIcon>
              <SettingsIcon color="primary" className={classes.optionIcon} />
            </ListItemIcon>
            <ListItemText primary="Configuración" />
          </ListItem>
          <ListItem button onClick={() => navigate("/login")}>
            <ListItemIcon>
              <ExitToAppIcon color="primary" className={classes.optionIcon} />
            </ListItemIcon>
            <ListItemText primary="Salir" />
          </ListItem>
          <Divider />
          {menuOptions.map((option) => (
            <>
              <ListItem
                button
                key={option.title}
                onClick={() => navigate(option.route)}
              >
                <ListItemIcon>
                  <option.iconOption
                    color="primary"
                    className={classes.optionIcon}
                  />
                </ListItemIcon>
                <ListItemText primary={option.title} />
              </ListItem>
            </>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
