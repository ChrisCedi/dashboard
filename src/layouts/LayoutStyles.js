import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: theme.spacing(10),
  },
  container: {
    display: "flex",
  },
}));

export { useStyles };
