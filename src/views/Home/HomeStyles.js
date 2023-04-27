import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    paddingBottom: theme.spacing(6),
  },
  title: {
    paddingTop: theme.spacing(4),
  },
  gridTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },

  titleTable: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  containerCards: {
    paddingTop: theme.spacing(4),
  },
  card: {
    width: "100%",
  },
  media: {
    height: "150px",
  },
  button: {
    color: theme.palette.primary.light,
  },
  gridButtons: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export { useStyles };
