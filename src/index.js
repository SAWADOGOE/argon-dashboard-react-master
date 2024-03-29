
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Assurance from "./layouts/Assurance";
import Hopital from "./layouts/Hopital";
import Pharmacie from "./layouts/Pharmacie";
import Patient from "./layouts/Patient";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/assurance/*" element={<Assurance />} />
      <Route path="/hopital/*" element={<Hopital />} />
      <Route path="/pharmacie/*" element={<Pharmacie />} />
      <Route path="/patient/*" element={<Patient />} />
      <Route path="*" element={<Navigate to="/admin/index" replace />} />
    </Routes>
  </BrowserRouter>
);
