// import { useContext } from "react";
// import { LoginContext } from "../Context/AuthContext";
// import { Navigate } from "react-router-dom";

// const GuestProtected = ({ children }) => {
//   const { token } = useContext(LoginContext);

//   if (token) {
//     return <Navigate to="/dashboard" replace />;
//   }

//   return children;
// };

// export default GuestProtected;

import { useContext } from "react";
import { LoginContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const GuestProtected = ({ children }) => {
  const { token, loading } = useContext(LoginContext);

  if (loading) return <div>silakan tunggu...</div>;

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default GuestProtected;
