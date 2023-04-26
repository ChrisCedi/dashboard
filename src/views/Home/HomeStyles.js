import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    // wdith: "90%",
  },
  boxTable: {
    // overflowX: "scroll",
  },
}));

export { useStyles };
