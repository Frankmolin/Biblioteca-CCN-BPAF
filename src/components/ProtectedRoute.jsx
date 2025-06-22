import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const usuario = JSON.parse(localStorage.getItem("usuario") || "null");
  if (!token || usuario?.rol !== "admin") {
    return <Navigate to="/login" replace />;
  }
  return children;
}