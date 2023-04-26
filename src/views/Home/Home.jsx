import React from "react";
import { useStyles } from "./HomeStyles";
import { SignatureTable } from "../../components/SignatureTable/SignatureTable";
import { Typography, Grid, Button, Switch, Box } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SchoolIcon from "@material-ui/icons/School";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Inicio</Typography>
        </Grid>
        <Grid item lg={4}>
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            startIcon={<RecordVoiceOverIcon />}
          >
            Comunicados semanales
          </Button>
        </Grid>
        <Grid item lg={4}>
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            startIcon={<DateRangeIcon />}
          >
            Eventos y prmociones
          </Button>
        </Grid>
        <Grid item lg={4}>
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            startIcon={<SchoolIcon />}
          >
            Capacitación
          </Button>
        </Grid>
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
