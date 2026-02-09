import { Link } from "react-router-dom";
import Image1 from "../assets/DummyMenu/burgerDummy.jpg";
const MenuCard = ({ id, datas }) => {
  return (
    <Link
      to={datas.stock === 0 ? "" : ""}
      key={id}
      className={`
      bg-white rounded-lg    p-3
      flex-[1_1_220px]
      max-w-[calc(25%-12px)] ${
        datas.stock === 0
          ? "cursor-no-drop opacity-50"
          : "active:scale-95 focus:shadow-2xl"
      }
    `}
    >
      <div className="relative">
        <img
          src={datas.image}
          alt="gambar"
          className="max-h-27 min-h-26  w-full object-cover rounded object-center"
        />
        <div
          className={`absolute ${
            datas.stock === 0 ? "flex" : "hidden"
          } top-0 inset-0 bg-black/50 text-white/50  items-center justify-center`}
        >
          <h1 className="-rotate-45 text-[1.2rem]">Kosong</h1>
        </div>
      </div>

      <div className="space-y-1">
        <h1 className="font-bold max-w-45">{datas.name}</h1>
        <div className="flex justify-between items-center">
          <h1 className="text-[1rem] text-[#357c4d] font-bold">
            Rp {datas.price}
          </h1>
          <h1 className="text-[0.5rem]">⭐⭐⭐</h1>
        </div>
        <h1 className="text-[0.7rem]">{datas.stock}/stock</h1>
      </div>
    </Link>
  );
};

export default MenuCard;
