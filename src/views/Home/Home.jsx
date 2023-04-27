import React from "react";
import { useStyles } from "./HomeStyles";
import { SignatureTable } from "../../components/SignatureTable/SignatureTable";
import { Typography, Grid, Switch, Box } from "@material-ui/core";
import { actionsItems } from "./mocks";
import { CardActions } from "../../components/CardActions/CardActions";

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.title}>
            Inicio
          </Typography>
        </Grid>
        {actionsItems.map((action, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <CardActions action={action} />
          </Grid>
        ))}

        <Grid item xs={12} className={classes.gridTitle}>
          <Typography
            variant="h5"
            className={classes.titleTable}
          >{`Firmas del trimestre (PYME)`}</Typography>
          <Box display="flex" alignItems="center">
            <Typography>PV</Typography>
            <Switch />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <SignatureTable />
        </Grid>
      </Grid>
    </div>
  );
};
