import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <div>Carregando...</div>; // ou um spinner

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
};
