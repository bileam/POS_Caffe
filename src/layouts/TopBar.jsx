import notif from "../assets/Icons/notif.svg";
import person from "../assets/personal01.jpg";
const TopBar = () => {
  return (
    <div className="flex   w-full justify-between items-center px-5">
      <h1 className="text-[#357c4d] text-[1.2rem] font-bold">Hey, Billeam</h1>
      <div className="flex gap-2">
        <button className="p-2 bg-[#d4e7dc]  transition-all duration-500 shadow rounded cursor-pointer ">
          <img src={notif} alt="" className="" />
        </button>
        <img src={person} alt="" className="w-20 object-cover shadow rounded" />
      </div>
    </div>
  );
};

export default TopBar;
