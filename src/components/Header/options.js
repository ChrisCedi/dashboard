import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DateRangeIcon from "@material-ui/icons/DateRange";

export const menuOptions = [
  {
    title: "Inicio",
    iconOption: HomeIcon,
    route: "/",
  },
  {
    title: "Eventos",
    iconOption: DateRangeIcon,
    route: "/events",
  },
  {
    title: "Mensajeria",
    iconOption: EmailIcon,
    route: "/",
  },
  {
    title: "Administración",
    iconOption: AccountCircleIcon,
    route: "/",
  },
  {
    title: "Acreditados",
    iconOption: FavoriteIcon,
    route: "/",
  },
];
