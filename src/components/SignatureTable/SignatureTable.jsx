import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
} from "@material-ui/core";
import { useStyles } from "./SignatureTableStyles";
import { tableData } from "./mocks";
import Paper from "@material-ui/core/Paper";

export const SignatureTable = () => {
  const classes = useStyles();

  const StyledTableCell = withStyles((theme) => ({
    head: {
      // backgroundColor: theme.palette.primary.main,
      // color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Asesores</StyledTableCell>
            <StyledTableCell>Octubre</StyledTableCell>
            <StyledTableCell>Noviembre</StyledTableCell>
            <StyledTableCell>Diciembre</StyledTableCell>
            <StyledTableCell>Total</StyledTableCell>
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
