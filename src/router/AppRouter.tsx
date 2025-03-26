import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};
