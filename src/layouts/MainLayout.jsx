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
import AIChat from "../components/AIChat";

const MainLayout = () => {
  const { token } = useContext(LoginContext);
  const { DataByToken } = useContext(UserContext);
  const [isOpen, setOpen] = useState(false);
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
      <div className="fixed bottom-5 right-10 flex flex-col items-end gap-2 group">
        {/* Chat Box */}

        <AIChat className="overflow-hidden   w-0 h-0 group-hover:w-[320px] group-hover:h-80 group-hover:p-4 transition-all duration-500" />

        {/* Button */}
        <button
          onClick={() => setOpen(true)}
          className="bg-green-600 p-2 rounded-full float-small  shadow-lg hover:bg-green-700 transition"
        >
          <img
            src={bot}
            alt="AI Bot"
            className="w-8 object-cover group-hover:scale-105 scale-200 transition-transform duration-300"
          />
        </button>
      </div>
      {/* <ModalAi isOpen={isOpen} OnClose={() => setOpen(false)} /> */}
    </div>
  );
};
export default MainLayout;
