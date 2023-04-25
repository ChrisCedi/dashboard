import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",

    backgroundImage:
      "url(https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(4),
    },
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(240,240,240,.9)",
    width: "50%",
    padding: theme.spacing(4),
    borderRadius: 20,
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  sisecText: {
    fontWeight: 600,
  },
  description: { paddingBottom: theme.spacing(1) },
  gridField: {
    display: "flex",
    justifyContent: "center",
  },
  gridImage: {
    display: "flex",
    justifyContent: "center",
  },
  gridRemember: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    height: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "210px",
      height: "120px",
    },
  },
  forgetPassword: {
    display: "flex",
    justifyContent: "center",
  },
  containerItems: {
    height: "100%",
  },
  gridItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export { useStyles };
