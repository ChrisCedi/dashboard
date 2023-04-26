import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: theme.spacing(8),
    width: "100%",
  },
  container: {
    display: "flex",
    width: "100%",
  },
}));

export { useStyles };
