import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <>Loading</>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivetRoute;
