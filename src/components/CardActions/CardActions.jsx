import React from "react";
import { useStyles } from "./CardActionsStyles";
import { Grid, Typography, Button } from "@material-ui/core";

export const CardActions = ({ action }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={4} className={classes.root}>
        <action.cardIcon className={classes.icon} />
      </Grid>
      <Grid item xs={8} className={classes.root}>
        <Typography className={classes.textCard}>{action.text}</Typography>
        <Button color="primary" variant="contained">
          {action.textButton}
        </Button>
      </Grid>
    </Grid>
  );
};
