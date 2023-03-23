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
import Main from "views/Main.js";
import Calendar from "views/Calendar.js";
import MyPage from "views/MyPage.js"
import Help from "views/Help.js";
import History from "views/History.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Icons from "views/Icons.js";

const dashboardRoutes = [

  {
    path: "/main",
    name: "Main",
    icon: "nc-icon nc-chart-pie-35",
    component: Main,
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
    path: "/history",
    name: "History",
    icon: "nc-icon nc-chart-bar-32",
    component: History,
    layout: "/admin",
  },
  {
    path: "/mypage",
    name: "My Page",
    icon: "nc-icon nc-single-02",
    component: MyPage,
    layout: "/admin",
  },
  {
    path: "/help",
    name: "Help",
    icon: "nc-icon nc-bulb-63",
    component: Help,
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
