import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const roles = userInfo?.user?.authorities?.map((a) => a.authority) || [];

  if (!userInfo) {
    return <Navigate to="/" replace />;
  }

  const hasAccess = roles.some((role) => allowedRoles.includes(role));

  return hasAccess ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
