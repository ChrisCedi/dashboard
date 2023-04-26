import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "800px",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  table: {
    width: "800px",
    [theme.breakpoints.down("xs")]: {
      minWidth: "800px",
    },
  },
}));

export { useStyles };
