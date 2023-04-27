import React from "react";
import {
  Hidden,
  Button,
  withStyles,
  InputBase,
  Paper,
  Box,
} from "@material-ui/core";
import { useStyles } from "./SearchStyles";

export const Search = () => {
  const classes = useStyles();

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
      // border: "white",
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  }))(Button);

  return (
    <Box display="flex" alignItems="center">
      <Paper className={classes.root}>
        <InputBase
          placeholder="Buscar"
          variant="outlined"
          size="small"
          color="inherit"
        />
      </Paper>
      <Hidden xsDown>
        <ColorButton variant="text">Registro rapido</ColorButton>
        <ColorButton variant="text">Valor SOC</ColorButton>
      </Hidden>
    </Box>
  );
};
