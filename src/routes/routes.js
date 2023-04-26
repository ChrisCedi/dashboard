import { Home } from "../views/Home/Home";
import { Login } from "../views/Login/Login";
import { FullScreenLayout } from "../layouts/FullScreenLayout";
import { BaseLayout } from "../layouts/BaseLayout";

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
    routeMessage: "Home",
  },
];

export { routes };
