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
  const { addTransaksi, ListTransaksi, ByIdTransaksi } =
    useContext(TransaksiContext);
  const [openModal, setOpenModal] = useState(false);
  const [namaPemesan, setNamaPemesan] = useState("");
  const [byID, setId] = useState();
  const subTotal = Listdata.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  console.log(ListTransaksi);
  const TransaksiById = ByIdTransaksi(byID);
  const handlePesan = (e) => {
    e.preventDefault();
    if (!namaPemesan) return alert("Masukkan nama pemesan");
    const add = addTransaksi({ namaPemesan, items: Listdata });
    deleallSuccessOrder();

    setId(add._id);
    setModal(true);
  };

  // handleStruct
  const handleStruct = (e) => {
    e.preventDefault();
    // console.log(byID);
    setOpenModal(true);
    setModal(false);
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
            💳 Bayar
          </button>
        </div>
      </div>
      <Modal isOpen={modalOpen} isClose={() => setModal(false)}>
        <button
          onClick={handleStruct}
          className="active:scale-90  absolute bottom-4 left-[35%]  shadow hover:bg-[#36794d] hover:text-white  bg-green-600 text-white px-4 py-2 rounded"
        >
          Cetak Struck
        </button>
      </Modal>
      <Modall
        title="Nota Kasir Caffe"
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      >
        {/* <h1>{byID}</h1> */}
        <div className="flex justify-between">
          <h1>Order #00123</h1>
          <p>
            {TransaksiById?.tanggal}, {TransaksiById?.jam}{" "}
          </p>
        </div>
        <div>
          <h1 className="text-green-600">Nama Pemesan</h1>
          <h1 className="text-[0.9rem]">{TransaksiById?.namaPemesan}</h1>
        </div>
        <div className="bg-green-600/20 p-2 rounded-md">
          <h1 className="text-green-600">Pesanan</h1>
          <div className="flex flex-col gap-2">
            {TransaksiById?.items?.map((item, index) => (
              <div key={item.id} className="flex  justify-between">
                <div>
                  <h1 className="text-[0.9rem]">
                    {index + 1} {item.name}
                  </h1>
                </div>
                <div className="flex gap-4">
                  <h1 className="text-[0.9rem]">x{item.qty}</h1>
                  <h1 className="text-[0.9rem]">
                    Rp {(item.price * item.qty).toLocaleString("id-ID")}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex  justify-between">
          <h1 className="">Sub Total</h1>
          <h1 className="text-[0.9rem]">Rp. 500.000</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="">Tax/service</h1>
          <h1 className="text-[0.9rem]">Rp. 2.000</h1>
        </div>
        <div className="flex justify-between font-extrabold">
          <h1 className="text-green-600 ">Total</h1>
          <h1 className="text-[0.9rem]">
            Rp. {TransaksiById?.total.toLocaleString()}
          </h1>
        </div>
        <div className="flex justify-between">
          <h1 className="">Metode Pembayaran</h1>
          <h1 className="text-[0.9rem]">CASH</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="">Uang Di bayar</h1>
          <h1 className="text-[0.9rem]">Rp. 150.000</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="">Kembalian</h1>
          <h1 className="text-[0.9rem]">Rp. 5.000</h1>
        </div>
        <div className="flex flex-col items-center border-t">
          <h1 className="text-[1.5rem] text-green-500 font-bold">Thank You!</h1>
          <p className="text-[0.9rem]">please Come Again</p>
        </div>
      </Modall>
    </div>
  );
};

export default Transaksi;
