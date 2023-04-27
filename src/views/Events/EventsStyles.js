import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",

    paddingBottom: theme.spacing(6),
  },
  gridTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },

  titleTable: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
}));

export { useStyles };
