
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import IndexAssurance from "./views/IndexAssurance";
import IndexHopital from "./views/IndexHopital";
import IndexPharmacie from "./views/IndexPharmacie";
import IndexPatient from "./views/IndexPatient";
import TableHopital from "./views/examples/TableHopital";
import Remboursement from "./views/examples/Remboursement";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
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


  //auth


  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },

  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },



//Hopital

{
  path: "/index",
  name: "Hopital-dashboard",
  icon: "ni ni-tv-2 text-primary",
  component: <IndexHopital />,
  layout: "/hopital",
},
  {
    path: "/tables",
    name: "Liste des patients",
    icon: "ni ni-bullet-list-67 text-red",
    component: <TableHopital />,
    layout: "/hopital",
  },

  {
    path: "/tables",
    name: "Liste des Medecins",
    icon: "ni ni-bullet-list-67 text-red",
    component: <TableHopital />,
    layout: "/hopital",
  },

  {
    path: "/tables",
    name: "Liste des Remboursement",
    icon: "ni ni-bullet-list-67 text-red",
    component: <TableHopital />,
    layout: "/hopital",
  },

  {
    path: "/user-profile",
    name: "traiter un remboursement",
    icon: "ni ni-single-02 text-yellow",
    component: <Remboursement />,
    layout: "/hopital",
  },

  



  //patient


  {
    path: "/index",
    name: "Dashboard-patient",
    icon: "ni ni-tv-2 text-primary",
    component: <IndexPatient />,
    layout: "/patient",
  },

//assurance
  {
    path: "/index",
    name: "Assurance-assurance",
    icon: "ni ni-tv-2 text-primary",
    component: <IndexAssurance />,
    layout: "/assurance",
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
    name: "Login-assurance",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/assurance",
  },
  
  {
    path: "/register",
    name: "Register-assurance",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/assurance",
  },

  

  //Pharmacie
  
  {
    path: "/index",
    name: "Dashboard-pharmacie",
    icon: "ni ni-tv-2 text-primary",
    component: <IndexPharmacie />,
    layout: "/pharmacie",
  },

  {
    path: "/tables",
    name: "Ordonnance",
    icon: "ni ni-file text-yellow",
    component: <IndexPharmacie />,
    layout: "/pharmacie",
  },

  

];
export default routes;
