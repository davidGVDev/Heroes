import { AuthContext } from "../auth/context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { authState }: any = useContext(AuthContext);

  return (
    authState.logged ? <Navigate to="/marvel" /> : children
  )
}
