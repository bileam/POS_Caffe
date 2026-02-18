import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Chasir";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const MainLayout = () => {
  return (
    <div className="flex h-screen relative">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-[#f2f1f5] px-5 py-3 overflow-hidden ">
        <div className="h-10  flex items-center ">
          <TopBar />
        </div>
        <main className="flex-1  overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default MainLayout;
