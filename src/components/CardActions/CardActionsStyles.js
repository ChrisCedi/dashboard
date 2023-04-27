import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 30,
    padding: theme.spacing(2),
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  textCard: {
    paddingBottom: theme.spacing(2),
  },
  icon: {
    fontSize: "60px",
  },
}));

export { useStyles };
