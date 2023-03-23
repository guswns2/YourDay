/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Calendar from "views/Calendar.js";
import MyPage from "views/MyPage.js"
import Typography from "views/Typography.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Icons from "views/Icons.js";

const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Main",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user/:day",
    name: "Calendar",
    icon: "nc-icon nc-album-2",
    component: Calendar,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "History",
    icon: "nc-icon nc-chart-bar-32",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/MyPage",
    name: "My Page",
    icon: "nc-icon nc-single-02",
    component: MyPage,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Help",
    icon: "nc-icon nc-bulb-63",
    component: Typography,
    layout: "/admin",
  },
    // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO77",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
