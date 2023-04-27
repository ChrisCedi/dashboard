import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(6),
    backgroundColor: theme.palette.background.alternative,
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
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
  button: {
    color: theme.palette.primary.light,
  },
}));

export { useStyles };
