import OrderMenu from "./OrderMenu";
import { CartContext } from "../Context/CartContex";
import { useContext } from "react";
const Transaksi = () => {
  const { Listdata, deleteAll } = useContext(CartContext);
  const totalItem = Listdata.reduce((sum, item) => sum + item.qty, 0);

  const subTotal = Listdata.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const total = subTotal;
  return (
    <div className="flex flex-col gap-2  p-3 relative">
      <h1 className="font-bold text-[#357c4d]">Current Order</h1>
      <div
        className={`h-100  rounded flex-col flex ${
          Listdata.length === 0 ? "items-center justify-center" : ""
        }   gap-2  overflow-y-auto no-scrollbar`}
      >
        {Listdata.length === 0 ? (
          <p className="text-sm text-gray-400 text-center">Belum ada pesanan</p>
        ) : (
          Listdata.map((item) => <OrderMenu key={item.id} datas={item} />)
        )}
      </div>
      <div className="flex flex-col gap-2  bottom-0">
        <div className="flex justify-between text-[0.9rem]">
          <h1>total</h1>
          <p>Rp {total.toLocaleString("id-ID")}</p>
        </div>
        <div className="flex justify-between text-[0.9rem] text-[#357c4d]">
          <h1>Sub Total</h1>
          <p>Rp {subTotal.toLocaleString("id-ID")}</p>
        </div>
        <div className="flex justify-between gap-2  ">
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
