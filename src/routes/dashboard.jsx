// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import Product from "views/Product/Product.jsx";

const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   sidebarName: "Home",
  //   navbarName: "Home page",
  //   icon: Dashboard,
  //   component: DashboardPage
  // },
  // {
  //   path: "/user",
  //   sidebarName: "User",
  //   navbarName: "User Registration",
  //   icon: Person,
  //   component: UserProfile
  // },
  {
    path: "/table",
    sidebarName: "Products",
    navbarName: "Please Select From Products List",
    icon: "content_paste",
    component: Product
   },
  // {
  //   path: "/typography",
  //   sidebarName: "Blog",
  //   navbarName: "Blog",
  //   icon: LibraryBooks,
  //   component: Typography
  // },
  // {
  //   path: "/icons",
  //   sidebarName: "News",
  //   navbarName: "News",
  //   icon: BubbleChart,
  //   component: Icons
  // },
  // {
  //   path: "/maps",
  //   sidebarName: "Location",
  //   navbarName: "Location Data",
  //   icon: LocationOn,
  //   component: Maps
  // },
  // {
  //   path: "/notifications",
  //   sidebarName: "Notifications",
  //   navbarName: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage
  // },
  {
    path: "/upgrade-to-pro",
    sidebarName: "Go To Basket",
    navbarName: "Basket",
    icon: Unarchive,
    component: UpgradeToPro
  },
  { redirect: true, path: "/", to: "/table", navbarName: "Redirect" }
];

export default dashboardRoutes;
