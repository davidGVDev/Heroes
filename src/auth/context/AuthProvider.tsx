import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { useReducer } from "react";
import { types } from "../types/types";

const initialState = {
  logged: false,
  user: null,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name: string) => {
    const action = {
      type: types.login,
      payload: {
        id: "123",
        name: name,
      },
    };
    localStorage.setItem("user", JSON.stringify(action.payload));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: types.logout });
  };

  return (
    <AuthContext.Provider value={{ login, logout, authState }}>
      {children}
    </AuthContext.Provider>
  );
};
