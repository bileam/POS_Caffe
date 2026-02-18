import { useContext } from "react";
import gambar from "../assets/DummyMenu/burgerDummy.jpg";
import { CartContext } from "../Context/CartContex";
const OrderMenu = ({ datas }) => {
  const { deleteAll, PlusQty, MinusQty, deleteOne } = useContext(CartContext);
  return (
    <div className="flex gap-2 shadow-[#d4e7dc]  shadow-md border-[#357c4d] border  rounded-md  ">
      <img
        src={datas.image}
        alt=""
        className="object-center h-15 w-15 rounded "
      />
      <div className="flex flex-col justify-between  w-full pr-2">
        <div className="flex justify-between items-center">
          <h1 className="text-[0.9rem]">{datas.name}</h1>
          <button
            onClick={() => deleteOne(datas.id)}
            className="text-[0.7rem] text-red-500 border-b"
          >
            hapus
          </button>
        </div>
        <h1 className="text-[0.8rem]">Rp{datas.price}</h1>
        <div className="flex justify-between text-[0.9rem] ">
          <h1>QTY</h1>
          <div className="flex gap-2">
            <button onClick={() => PlusQty(datas.id)} type="button">
              +
            </button>{" "}
            <h1>{datas.qty}</h1>
            <button onClick={() => MinusQty(datas.id)} type="button">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderMenu;
