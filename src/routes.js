/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import IndexAssurance from "./views/IndexAssurance";
import IndexHopital from "./views/IndexHopital";
import IndexPharmacie from "./views/IndexPharmacie";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },

  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <IndexPharmacie />,
    layout: "/pharmacie",
  },

  {
    path: "/index",
    name: "Assurance",
    icon: "ni ni-tv-2 text-primary",
    component: <IndexAssurance />,
    layout: "/assurance",
  },

  {
    path: "/index",
    name: "Hopital",
    icon: "ni ni-tv-2 text-primary",
    component: <IndexHopital />,
    layout: "/hopital",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },

  {
    path: "/tables",
    name: "Hopitals",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },

  {
    path: "/tables",
    name: "Pharmacies",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },


  {
    path: "/tables",
    name: "Patients",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },

  {
    path: "/tables",
    name: "Remboursement",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },

  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/hopital",
  },

  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/hopital",
  },


  {
    path: "/tables",
    name: "Tables_pharmacie",
    icon: "ni ni-bullet-list-67 text-red",
    component: <IndexPharmacie />,
    layout: "/pharmacie",
  },




  {
    path: "/tables",
    name: "Tables-assurance",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/assurance",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },

  {
    path: "/login",
    name: "Login-assurance",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/assurance",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },

  {
    path: "/register",
    name: "Register-assurance",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/assurance",
  },
];
export default routes;
