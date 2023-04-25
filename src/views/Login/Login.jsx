import React from "react";
import { useStyles } from "./LoginStyles";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Checkbox,
  Container,
} from "@material-ui/core";
import { useLogin } from "./hooks/useLogin";
import { Images } from "../../assets/Images";

export const Login = () => {
  const classes = useStyles();
  const { formik } = useLogin();

  return (
    <div className={classes.container}>
      <Container>
        <Grid container className={classes.containerItems}>
          <Grid item xs={12} md={6} className={classes.gridItems}>
            <a href="https://socasesores.com/" target="_blank" rel="noreferrer">
              <img src={Images.socLogo} alt="soc" className={classes.logo} />
            </a>
          </Grid>
          <Grid item xs={12} md={6} className={classes.gridItems}>
            <form
              onSubmit={formik.handleSubmit}
              className={classes.formContainer}
            >
              <Typography
                variant="h4"
                color="primary"
                className={classes.sisecText}
              >
                SISEC
              </Typography>
              <Typography variant="h6" className={classes.description}>
                Ingresa al sistema
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} className={classes.gridField}>
                  <TextField
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ej: correo@dominio.com"
                    label="Email"
                    variant="filled"
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    fullWidth
                    size="small"
                  />
                </Grid>

                <Grid item xs={12} className={classes.gridField}>
                  <TextField
                    type="password"
                    name="password"
                    id="password"
                    label="Password"
                    variant="filled"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} className={classes.gridRemember}>
                  <Checkbox />
                  <Typography>Recordar contraseña</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    className={classes.forgetPassword}
                  >
                    ¿Olvidaste tu contraseña?
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridField}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                  >
                    Enviar
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Ingrese usando su cuenta en:
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridField}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="secondary"
                    fullWidth
                  >
                    SOC
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
