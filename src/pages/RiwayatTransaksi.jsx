import { Link } from "react-router-dom";
import Title from "../components/Title";

import { TransaksiContext } from "../Context/Transaksi";
import { useContext, useState } from "react";
import Input from "../components/Input";
import Emptyy from "../components/Emptyy";
import Modal from "../components/Modal";
import Modall from "../components/modal/Modall";
import Button from "../components/Button";
const RiwayatTransaksi = () => {
  const { ListTransaksi, ByIdTransaksi } = useContext(TransaksiContext);
  const [search, setsearch] = useState("");
  const [date, setDate] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [TransaksiById, setTransaksiById] = useState(null);

  // namaPemesan
  // tanggal
  // items
  // total
  // jam
  // console.log(ListTransaksi);
  const result = ListTransaksi.filter((item) => {
    const searchin = item.namaPemesan
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchDate = date
      ? item.tanggal === new Date(date).toLocaleDateString("id-ID")
      : true;
    return searchin && matchDate;
  });

  const handleClick = (id) => {
    const datas = ByIdTransaksi(id);
    setTransaksiById(datas);
    setOpenModal(true);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden gap-2 pb-15">
      <Title>Riwayat transaksi</Title>
      <div className="  w-[40%] flex gap-2">
        <Input
          name="search"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        >
          Cari Transaksi
        </Input>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded px-2 border-[#357c4d]"
        />
      </div>
      <div className="flex-1 bg-white  p-3 flex  gap-2 overflow-hidden rounded-md">
        <div className="overflow-y-auto flex-1 space-y-2 relative">
          {result.length === 0 && <Emptyy />}

          {[...result]
            .sort((a, b) => b.id - a.id)
            .map((item) => (
              <button
                onClick={(e) => handleClick(item.id)}
                className="flex flex-col border border-[#357c4d]  shadow-md hover:shadow-[] p-2 rounded-md text-start w-full cursor-pointer active:scale-95 transition-all duration-500 ease-in-out"
              >
                <h1 className="font-bold">{item.namaPemesan}</h1>
                <h1 className="text-[0.9rem]">Rp. {item.total}</h1>
                <div className="flex justify-between text-[0.8rem]">
                  <h1>jumlah pesanana: {item.items.length}</h1>
                  <div className="flex gap-2">
                    <h1>{item.tanggal}</h1>
                    <h1>{item.jam}</h1>
                  </div>
                </div>
              </button>
            ))}
        </div>
        {/* <div className="shadow flex-1 px-2">
          <h1 className="inline-block relative ">
            Detail Pesanan
            <span className="inline-block absolute bottom-0 w-full border left-0 "></span>
          </h1>
        </div> */}
      </div>
      <Modall
        title="Detail Pesanan"
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
          <div className="flex justify-between text-green-600">
            <h1 className="">Pesanan</h1>
            <p className="text-[0.8rem] font-extrabold">
              {TransaksiById?.items?.length} Pesanan
            </p>
          </div>

          <div className="flex flex-col gap-2 max-h-20 min-h-19 overflow-y-auto no-scrollbar">
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

        <div className="flex flex-col items-center border-t ">
          <div className="mt-2 w-full space-x-2 flex justify-end">
            <Button onClick={() => setOpenModal(false)}>Kembali</Button>
            <Button className="bg-green-800 text-white">
              Cetak Resi Pesanan
            </Button>
          </div>
          <h1 className="text-[1.5rem] text-green-500 font-bold">Thank You!</h1>
          <p className="text-[0.9rem]">please Come Again</p>
        </div>
      </Modall>
    </div>
  );
};

export default RiwayatTransaksi;
