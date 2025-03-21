import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";

import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HeroesRoutes />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/heroes" />} />
      </Routes>
    </>
  );
};
