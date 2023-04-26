import React from "react";
import { Header } from "../components/Header/Header";
import { useStyles } from "./LayoutStyles";

export const BaseLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.body}>{children}</div>
    </div>
  );
};
