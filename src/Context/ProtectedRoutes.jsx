import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  if (!token) {
    <Navigate to="/login" replace />;
  }

  return children;
};
