import { Home } from "../views/Home/Home";
import { Login } from "../views/Login/Login";
import { FullScreenLayout } from "../layouts/FullScreenLayout";
import { BaseLayout } from "../layouts/BaseLayout";
import { Events } from "../views/Events/Events";

const routes = [
  {
    path: "/login",
    layout: FullScreenLayout,
    component: Login,
    exact: true,
    routeMessage: "Login",
  },
  {
    path: "/",
    layout: BaseLayout,
    component: Home,
    exact: true,
    routeMessage: "Inicio",
  },
  {
    path: "/events",
    layout: BaseLayout,
    component: Events,
    exact: true,
    routeMessage: "Eventos",
  },
];

export { routes };
