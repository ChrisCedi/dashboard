import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { useStyles } from "./SignatureTableStyles";
import { tableData } from "./mocks";
import Paper from "@material-ui/core/Paper";

export const SignatureTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Asesores</TableCell>
            <TableCell>Octubre</TableCell>
            <TableCell>Noviembre</TableCell>
            <TableCell>Diciembre</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.octubre}</TableCell>
              <TableCell>{row.noviembre}</TableCell>
              <TableCell>{row.diciembre}</TableCell>
              <TableCell>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
