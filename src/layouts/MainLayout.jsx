import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Chasir";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { LoginContext } from "../Context/AuthContext";
// import { userContext } from "../Context/UserContext";
import { UserContext } from "../Context/UserContext";
// import { UserContext } from "../Context/UserContext";
import { useContext, useMemo } from "react";

const MainLayout = () => {
  const { token } = useContext(LoginContext);
  const { DataByToken } = useContext(UserContext);
  // const res = DataByToken(token);
  const user = useMemo(() => {
    return DataByToken(token);
  }, [token]);
  // console.log(res);
  return (
    <div className="flex h-screen relative">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-[#f2f1f5] px-5 py-3 overflow-hidden ">
        <div className="h-10  flex items-center ">
          <TopBar dataname={user?.fullname} />
        </div>
        <main className="flex-1  overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default MainLayout;
