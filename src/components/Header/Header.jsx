import {
  Box,
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
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { menuOptions } from "./options";

export const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

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
          <Typography variant="h5" color="primary">
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
          {menuOptions.map((option) => (
            <>
              <ListItem button key={option.title}>
                <ListItemIcon>
                  <option.icon color="primary" className={classes.optionIcon} />
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