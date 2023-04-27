import React from "react";
import { useStyles } from "./EventsStyles";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  CardActionArea,
} from "@material-ui/core";
import { cards } from "./mocks";

export const Events = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={3} className={classes.containerCards}>
        <Grid item xs={12}>
          <Typography variant="h4">Eventos y promociones</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Explora nuestros diferentes eventos</Typography>
        </Grid>
        {cards.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  image={item.url}
                  title={item.title}
                  className={classes.media}
                />
                <CardContent>
                  <Typography>{item.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
