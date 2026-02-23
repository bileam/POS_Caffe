import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import icon1 from "../assets/Icons/dashboard_1.svg";
import icon2 from "../assets/Icons/kategori_1.svg";
import icon3 from "../assets/Icons/menu_1.svg";
import icon4 from "../assets/Icons/order_1.svg";
import icon5 from "../assets/Icons/report_1.svg";
import keluar from "../assets/Icons/logout.svg";
import riwayat from "../assets/Icons/riwayatOrder.svg";
import Burger from "../assets/Icons/Burger.svg";

import { LoginContext } from "../Context/AuthContext";
const Sidebar = () => {
  const [burger, setBurger] = useState(true);
  const { logout } = useContext(LoginContext);
  const navigasi = useNavigate();
  const handelLogout = (e) => {
    e.preventDefault();
    logout();
    navigasi("/login");
  };
  return (
    <aside
      className={` ${
        burger ? "w-20 " : "w-50"
      } flex flex-col p-5  transition-all duration-500 h-full ease-in-out bg-white z-10 justify-between`}
    >
      <div className="w-full  flex-col flex gap-4 mt-9">
        <div className="flex justify-between items-center">
          <img src="" alt="" />
          <button
            onClick={() => setBurger((prev) => !prev)}
            className={`bg-[#357c4d] rounded-full ${
              burger ? "rotate-0 delay-500" : "rotate-180 delay-500"
            } translate-x-9 p-2 text-white shadow transition-all duration-700 ease-in-out cursor-pointer focus:scale-95 active:scale-90  flex flex-col gap-2`}
          >
            <img src={Burger} alt="" />
          </button>
        </div>
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
                   
                ${
                  burger
                    ? "opacity-0 -translate-x-10  text-[#357c4d] bg-[#d4e7dc]  group-hover:opacity-100 px-2 rounded-md  group-hover:left-12   top-2 group-hover:translate-x-0 absolute "
                    : "opacity-100 translate-x-0 text-[#357c4d]  "
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
            ? "opacity-0 -translate-x-10  text-[#357c4d] bg-[#d4e7dc]  group-hover:opacity-100 px-2 rounded-md  group-hover:left-12   top-2 group-hover:translate-x-0 absolute "
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
            ? "opacity-0 -translate-x-10  text-[#357c4d] bg-[#d4e7dc]  group-hover:opacity-100 px-2 rounded-md  group-hover:left-12   top-2 group-hover:translate-x-0 absolute "
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
            ? "opacity-0 -translate-x-10  text-[#357c4d] bg-[#d4e7dc]  group-hover:opacity-100 px-2 rounded-md  group-hover:left-12   top-2 group-hover:translate-x-0 absolute "
            : "opacity-100 translate-x-0 text-[#357c4d]  "
        }
        
      `}
            >
              Chasir
            </span>
          </div>
        </NavLink>
        <NavLink
          to="/riwayat"
          className={({ isActive }) =>
            `
    flex gap-2 relative group items-center text-[0.9rem] rounded-md p-2 transition-all duration-300
    ${isActive ? "bg-[#d4e7dc]" : "hover:bg-[#d4e7dc]"}
  `
          }
        >
          <img src={riwayat} alt="" className="z-10" />
          <div className="overflow-hidden ">
            <span
              className={` 
        inline-block whitespace-nowrap
        transition-all duration-500 ease-in-out
           
        ${
          burger
            ? "opacity-0 -translate-x-10  text-[#357c4d] bg-[#d4e7dc]  group-hover:opacity-100 px-2 rounded-md  group-hover:left-12   top-2 group-hover:translate-x-0 absolute "
            : "opacity-100 translate-x-0 text-[#357c4d]  "
        }
        
      `}
            >
              Riwayat Transaksi
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
                  ? "opacity-0 -translate-x-10 text-[#357c4d] bg-[#d4e7dc] group-hover:opacity-100 px-2 rounded-md absolute left-12 top-2 group-hover:translate-x-0"
                  : "opacity-100 translate-x-0 text-[#357c4d]"
              }
            `}
            >
              Report
            </span>
          </div>
        </NavLink>
      </div>
      <button
        onClick={handelLogout}
        className={`
    flex gap-2 relative group items-center text-[0.9rem]
    rounded-md p-2 transition-all duration-300
    hover:bg-[#d4e7dc] cursor-pointer
  `}
      >
        <img src={keluar} alt="logout" className="z-10" />

        <div className="overflow-hidden">
          <span
            className={`
        inline-block whitespace-nowrap
        transition-all duration-500 ease-in-out
        ${
          burger
            ? "opacity-0 -translate-x-10 text-[#357c4d] bg-[#d4e7dc] group-hover:opacity-100 px-2 rounded-md absolute left-12 top-2 group-hover:translate-x-0"
            : "opacity-100 translate-x-0 text-[#357c4d]"
        }
      `}
          >
            Logout
          </span>
        </div>
      </button>
    </aside>
  );
};
export default Sidebar;
