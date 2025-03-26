import { AuthContext } from "../auth/context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { authState }: any = useContext(AuthContext);

  return (
    authState.logged ? children : <Navigate to="/login" />
  )
}
