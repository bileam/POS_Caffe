import notif from "../assets/Icons/notif.svg";
import person from "../assets/personal01.jpg";
const TopBar = ({ dataname }) => {
  return (
    <div className="flex    w-full justify-between items-center px-5">
      <h1 className="text-[#00982a] text-[1.2rem ] font-bold">
        Hey, {dataname}
      </h1>
      <div className="flex gap-2">
        <button className="h-10 w-10 flex items-center justify-center bg-[#00982a]  transition-all duration-500 shadow rounded-full cursor-pointer ">
          <img src={notif} alt="" className="rounded-full" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00982a] shadow-2xl scale-110 cursor-pointer shadow-[#cdcdcd] overflow-hidden p-1">
          <img src={person} alt="" className=" object-cover shadow rounded" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
