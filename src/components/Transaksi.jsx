import OrderMenu from "./OrderMenu";
import { CartContext } from "../Context/CartContex";
import { useContext, useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import { TransaksiContext } from "../Context/Transaksi";
import Modall from "./modal/Modall";

const Transaksi = () => {
  const { Listdata, deleteAll, deleallSuccessOrder } = useContext(CartContext);
  const [modalOpen, setModal] = useState(false);
  const { addTransaksi } = useContext(TransaksiContext);
  const [openModal, setOpenModal] = useState(false);
  const [namaPemesan, setNamaPemesan] = useState("");

  const subTotal = Listdata.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handlePesan = (e) => {
    e.preventDefault();
    if (!namaPemesan) return alert("Masukkan nama pemesan");
    addTransaksi({ namaPemesan, items: Listdata });
    deleallSuccessOrder();
    // setOpenModal(true);
    setModal(true);
  };

  // console.log(Listdata);

  return (
    <div className="w-full h-full min-h-0 bg-white rounded-xl  shadow-lg flex flex-col">
      {/* HEADER */}
      <div className="p-4 border-b sticky top-0 bg-white z-10 rounded-xl">
        <h1 className="text-lg font-bold text-[#00982a]">🧾 Current Order</h1>
      </div>

      {/* NAMA PEMESAN */}
      <div className="p-4">
        <Input
          id="namaPemesan"
          value={namaPemesan}
          onChange={(e) => setNamaPemesan(e.target.value)}
        >
          Nama Pemesan
        </Input>
      </div>

      {/* LIST ORDER */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2">
        {Listdata.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-400 text-sm">
            Belum ada pesanan
          </div>
        ) : (
          Listdata.map((item) => <OrderMenu key={item.id} datas={item} />)
        )}
      </div>

      {/* RINGKASAN */}
      <div className="border-t p-4 space-y-2 bg-gray-50">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>Rp {subTotal.toLocaleString("id-ID")}</span>
        </div>

        <div className="flex justify-between font-bold text-lg text-[#357c4d]">
          <span>Total</span>
          <span>Rp {subTotal.toLocaleString("id-ID")}</span>
        </div>

        {/* ACTION */}
        <div className="flex gap-2 mt-3">
          {/* warna riset ulang
         BG        : #e5efe9
         Text      : #357c4d
         Border    : #357c4d
         Hover BG  : #36794d
         Hover Text: #ffffff
         */}
          <button
            onClick={deleteAll}
            className="w-1/3 py-2 rounded-md bg-[#e5efe9] hover:text-[#ffffff] duration-500 ease-in-out text-[#357c4d] hover:bg-[#36794d] transition"
          >
            Reset
          </button>

          <button
            disabled={Listdata.length === 0}
            onClick={handlePesan}
            className="flex-1 py-2 rounded-md bg-[#357c4d] text-white font-semibold hover:bg-[#2e6841] transition disabled:opacity-50"
          >
            💳 Payment
          </button>
        </div>
      </div>
      <Modal isOpen={modalOpen} isClose={() => setModal(false)} />
      <Modall
        title="PAYMENT"
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default Transaksi;
