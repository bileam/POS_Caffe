import { useState } from "react";
import { NavLink } from "react-router-dom";
import icon1 from "../assets/Icons/dashboard_1.svg";
import icon2 from "../assets/Icons/kategori_1.svg";
import icon3 from "../assets/Icons/menu_1.svg";
import icon4 from "../assets/Icons/order_1.svg";
import icon5 from "../assets/Icons/report_1.svg";
const Sidebar = () => {
  const [burger, setBurger] = useState(true);
  return (
    <aside
      className={` ${
        burger ? "w-20 " : "w-50"
      } flex flex-col p-5  transition-all duration-500 h-full ease-in-out bg-white z-10 `}
    >
      <div className="flex justify-between items-center">
        <img src="" alt="" />
        <button
          onClick={() => setBurger((prev) => !prev)}
          className={`bg-[#357c4d] rounded-full translate-x-9 p-2 shadow cursor-pointer focus:scale-95 active:scale-90  flex flex-col gap-2`}
        >
          <div className="w-5 outline outline-white "></div>
          <div className="w-5 outline outline-white "></div>
          <div className="w-5 outline outline-white "></div>
        </button>
      </div>
      <div className="w-full  flex-col flex gap-4 mt-9">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `
            flex gap-2 relative group items-center text-[0.9rem] rounded-md p-2 transition-all duration-300
            ${isActive ? "bg-[#d4e7dc]" : "hover:bg-[#d4e7dc]"}
          `
          }
        >
          <img src={icon1} alt="" className="z-10" />
          <div className="overflow-hidden ">
            <span
              className={` 
        inline-block whitespace-nowrap
        transition-all duration-500 ease-in-out
            text-[#357c4d] bg-[#d4e7dc] 
        ${
          burger
            ? "opacity-0 -translate-x-15 group-hover:opacity-100 px-2 rounded-md  group-hover:left-12   top-2 group-hover:translate-x-0 absolute "
            : "opacity-100 translate-x-0"
        }
        
      `}
            >
              Dashboard
            </span>
          </div>
        </NavLink>
        <NavLink
          to="/categori"
          className={({ isActive }) =>
            `
            flex gap-2 relative group items-center text-[0.9rem] rounded-md p-2 transition-all duration-300
            ${isActive ? "bg-[#d4e7dc]" : "hover:bg-[#d4e7dc]"}
          `
          }
        >
          <img src={icon2} alt="" className="z-10" />
          <div className="overflow-hidden ">
            <span
              className={` 
        inline-block whitespace-nowrap
        transition-all duration-500 ease-in-out
           
        ${
          burger
            ? "opacity-0 -translate-x-15  text-[#357c4d] bg-[#d4e7dc]  group-hover:opacity-100 px-2 rounded-md  group-hover:left-12   top-2 group-hover:translate-x-0 absolute "
            : "opacity-100 translate-x-0 text-[#357c4d]  "
        }
        
      `}
            >
              Category
            </span>
          </div>
        </NavLink>
        <NavLink
          to="/produk"
          className={({ isActive }) =>
            `
    flex gap-2 relative group items-center text-[0.9rem] rounded-md p-2 transition-all duration-300
    ${isActive ? "bg-[#d4e7dc]" : "hover:bg-[#d4e7dc]"}
  `
          }
        >
          <img src={icon3} alt="" className="z-10" />
          <div className="overflow-hidden ">
            <span
              className={` 
        inline-block whitespace-nowrap
        transition-all duration-500 ease-in-out
           
        ${
          burger
            ? "opacity-0 -translate-x-15  text-[#357c4d] bg-[#d4e7dc]  group-hover:opacity-100 px-2 rounded-md  group-hover:left-12   top-2 group-hover:translate-x-0 absolute "
            : "opacity-100 translate-x-0 text-[#357c4d]  "
        }
        
      `}
            >
              Product
            </span>
          </div>
        </NavLink>
        <NavLink
          to="/kasir"
          className={({ isActive }) =>
            `
    flex gap-2 relative group items-center text-[0.9rem] rounded-md p-2 transition-all duration-300
    ${isActive ? "bg-[#d4e7dc]" : "hover:bg-[#d4e7dc]"}
  `
          }
        >
          <img src={icon4} alt="" className="z-10" />
          <div className="overflow-hidden ">
            <span
              className={` 
        inline-block whitespace-nowrap
        transition-all duration-500 ease-in-out
           
        ${
          burger
            ? "opacity-0 -translate-x-15  text-[#357c4d] bg-[#d4e7dc]  group-hover:opacity-100 px-2 rounded-md  group-hover:left-12   top-2 group-hover:translate-x-0 absolute "
            : "opacity-100 translate-x-0 text-[#357c4d]  "
        }
        
      `}
            >
              Chasir
            </span>
          </div>
        </NavLink>
        <NavLink
          to="/laporan"
          className={({ isActive }) =>
            `
    flex gap-2 relative group items-center text-[0.9rem] rounded-md p-2 transition-all duration-300
    ${isActive ? "bg-[#d4e7dc]" : "hover:bg-[#d4e7dc]"}
  `
          }
        >
          <img src={icon5} alt="" className="z-10" />
          <div className="overflow-hidden ">
            <span
              className={` 
        inline-block whitespace-nowrap
        transition-all duration-500 ease-in-out
           
        ${
          burger
            ? "opacity-0 -translate-x-15  text-[#357c4d] bg-[#d4e7dc]  group-hover:opacity-100 px-2 rounded-md  group-hover:left-12   top-2 group-hover:translate-x-0 absolute "
            : "opacity-100 translate-x-0 text-[#357c4d]  "
        }
        
      `}
            >
              Report
            </span>
          </div>
        </NavLink>
      </div>
    </aside>
  );
};
export default Sidebar;
