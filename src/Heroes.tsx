import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";

export const Heroes = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
};
