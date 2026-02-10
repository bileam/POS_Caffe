import OrderMenu from "./OrderMenu";
import { CartContext } from "../Context/CartContex";
import { useContext } from "react";
const Transaksi = () => {
  const { Listdata, deleteAll } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-2  p-3">
      <h1 className="font-bold text-[#357c4d]">Current Order</h1>
      <div className="h-80 flex-col flex gap-5  overflow-y-auto no-scrollbar">
        {Listdata.length === 0 ? (
          <p className="text-sm text-gray-400">Belum ada pesanan</p>
        ) : (
          Listdata.map((item) => <OrderMenu key={item.id} datas={item} />)
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-[0.9rem]">
          <h1>total</h1>
          <p>Rp 150.000</p>
        </div>
        <div className="flex justify-between text-[0.9rem] text-[#357c4d]">
          <h1>Sub Total</h1>
          <p>Rp 500.000</p>
        </div>
        <div className="flex justify-between gap-2">
          <button
            onClick={() => deleteAll()}
            className="p-2 border bg-red-500 text-white rounded-md cursor-pointer"
          >
            Riset
          </button>
          <button className="p-2 border bg-[#357c4d] text-white flex-1 rounded-md cursor-pointer">
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};
export default Transaksi;
