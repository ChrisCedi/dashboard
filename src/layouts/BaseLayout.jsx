import React from "react";
import { Header } from "../components/Header/Header";
import { useStyles } from "./LayoutStyles";
import { Container } from "@material-ui/core";

export const BaseLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.body}>
        <Container>{children}</Container>
      </div>
    </div>
  );
};
