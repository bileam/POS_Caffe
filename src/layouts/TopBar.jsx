import notif from "../assets/Icons/notif.svg";
import person from "../assets/personal01.jpg";
const TopBar = ({ dataname }) => {
  return (
    <div className="flex   w-full justify-between items-center px-5">
      <h1 className="text-[#00982a] text-[1.2rem] font-bold">
        Hey, {dataname}
      </h1>
      <div className="flex gap-2">
        <button className="p-2 bg-[#00982a]  transition-all duration-500 shadow rounded cursor-pointer ">
          <img src={notif} alt="" className="" />
        </button>
        <img src={person} alt="" className="w-20 object-cover shadow rounded" />
      </div>
    </div>
  );
};

export default TopBar;
