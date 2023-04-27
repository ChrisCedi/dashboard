import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: theme.spacing(8),
    width: "100%",
    backgroundColor: theme.palette.background.alternative,
  },
  container: {
    display: "flex",
  },
}));

export { useStyles };
