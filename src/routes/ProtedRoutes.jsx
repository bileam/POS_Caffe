import { useContext } from "react";
import { LoginContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const { token } = useContext(LoginContext);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
