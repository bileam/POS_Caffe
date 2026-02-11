import OrderMenu from "./OrderMenu";
import { CartContext } from "../Context/CartContex";
import { useContext, useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
const Transaksi = () => {
  const { Listdata, deleteAll, deleallSuccessOrder } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);
  const totalItem = Listdata.reduce((sum, item) => sum + item.qty, 0);

  const subTotal = Listdata.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const total = subTotal;
  const handlePesan = (e) => {
    e.preventDefault();
    deleallSuccessOrder();
    setOpenModal(true);
  };
  return (
    <div className="flex flex-col gap-2  p-3 relative bg-white rounded-md w-full  mb-7">
      <h1 className="font-bold text-[#357c4d]">Current Order</h1>
      <Input id="namaPemesan">Nama pemesan</Input>
      <div
        className={`h-80  rounded flex-col flex ${
          Listdata.length === 0 ? "items-center justify-center" : ""
        }   gap-2  overflow-y-auto no-scrollbar pb-6`}
      >
        {Listdata.length === 0 ? (
          <p className="text-sm text-gray-400 text-center ">
            Belum ada pesanan
          </p>
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
          <button
            disabled={Listdata.length === 0}
            onClick={handlePesan}
            className="p-2 border bg-[#d4e7dc] text-green-700  flex-1 rounded-md cursor-pointer"
          >
            Payment
          </button>
        </div>
      </div>
      <Modal isOpen={openModal} isClose={() => setOpenModal(false)} />
    </div>
  );
};
export default Transaksi;
