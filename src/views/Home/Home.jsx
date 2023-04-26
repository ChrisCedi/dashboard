import React from "react";
import { useStyles } from "./HomeStyles";
import { SignatureTable } from "../../components/SignatureTable/SignatureTable";
import { Typography, Box } from "@material-ui/core";

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h5">{`Firmas del trimestre (PYME)`}</Typography>
      {/* <Box className={classes.boxTable}> */}
      <SignatureTable />
      {/* </Box> */}
    </div>
  );
};
