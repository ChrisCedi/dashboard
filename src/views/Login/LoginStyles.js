import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
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
    width: "60%",
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

  gridRemember: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
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
    flexDirection: "column",
  },
  gridSecondary: {
    height: "100vh",
    backgroundImage: `url(https://images.pexels.com/photos/7681681/pexels-photo-7681681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(4),
  },
  gridLogo: {
    width: "100%",
  },
  headerLogo: {
    height: "50px",
  },
  imageLogo: {
    height: "120px",
  },
}));

export { useStyles };
