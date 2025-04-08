import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/home" /> : children;
};

export default AuthRoute;
