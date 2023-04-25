import { Home } from "../views/Home/Home";
import { Login } from "../views/Login/Login";
import { BaseLayout } from "../layouts/BaseLayout";

const routes = [
  {
    path: "/login",
    layout: BaseLayout,
    component: Login,
    exact: true,
    routeMessage: "Home",
  },
  {
    path: "/",
    layout: BaseLayout,
    component: Home,
    exact: true,
    routeMessage: "Not found",
  },
];

export { routes };
