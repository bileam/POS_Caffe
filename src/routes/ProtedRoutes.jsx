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
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative">
            <div className="relative w-32 h-32">
              <div
                className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#0ff] border-b-[#0ff] animate-spin"
                style={{ animationDuration: "3s" }}
              ></div>

              <div
                className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin"
                style={{
                  animationDuration: "2s",
                  animationDirection: "reverse",
                }}
              ></div>
            </div>

            <div className="absolute inset-0 bg-linear-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm"></div>
          </div>
        </div>
      </div>
    ); // atau spinner

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
