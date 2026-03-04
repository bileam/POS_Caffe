// import { useContext } from "react";
// import { LoginContext } from "../Context/AuthContext";
// import { Navigate } from "react-router-dom";
// const Protected = ({ children }) => {
//   const { token } = useContext(LoginContext);
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };
// export default Protected;

import { useContext } from "react";
import { LoginContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { token, loading } = useContext(LoginContext);

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/90">
        <div className="text-black bg-white p-2 rounded-md ">
          silakan tunggu...
        </div>
      </div>
    ); // atau spinner

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
