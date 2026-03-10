import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Chasir";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { LoginContext } from "../Context/AuthContext";
import bot from "../assets/Icons/bot.svg";
// import { userContext } from "../Context/UserContext";
import { UserContext } from "../Context/UserContext";
// import { UserContext } from "../Context/UserContext";
import { useContext, useMemo, useState } from "react";
import ModalAi from "../components/Ai/ModalAI";

const MainLayout = () => {
  const { token } = useContext(LoginContext);
  const { DataByToken } = useContext(UserContext);
  const [isOpen, setOpen] = useState(true);
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
        <main className="flex-1  overflow-hidden ">
          <Outlet />
        </main>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="inline-block fixed bottom-5 float-small group    right-10 p-2 rounded-full bg-green-600"
      >
        <img
          src={bot}
          alt=""
          className="w-8 object-cover group-hover:scale-200 transition-all duration-500"
        />
      </button>
      <ModalAi isOpen={isOpen} OnClose={() => setOpen(false)} />
    </div>
  );
};
export default MainLayout;
