import { Link } from "react-router-dom";
import Title from "../components/Title";

import { TransaksiContext } from "../Context/Transaksi";
import { useContext } from "react";
import Input from "../components/Input";
const RiwayatTransaksi = () => {
  const { ListTransaksi } = useContext(TransaksiContext);
  // namaPemesan
  // tanggal
  // items
  // total
  // jam
  console.log(ListTransaksi);
  return (
    <div className="h-screen flex flex-col overflow-hidden gap-2 pb-15">
      <Title>Riwayat transaksi</Title>
      <div className="  w-[40%] flex gap-2">
        <Input>Cari Transaksi</Input>
        <input type="date" className="border rounded px-2 border-[#357c4d]" />
      </div>
      <div className="flex-1 bg-white  p-3 flex  gap-2 overflow-hidden rounded-md">
        <div className="overflow-y-auto flex-1 space-y-2 relative">
          {ListTransaksi.length === 0 && (
            <div className="text-[#d4e7dc] text-center">
              Belum ada transaksi
            </div>
          )}

          {[...ListTransaksi]
            .sort((a, b) => b.id - a.id)
            .map((item) => (
              <button className="flex flex-col border border-[#357c4d]  shadow-md hover:shadow-[] p-2 rounded-md text-start w-full cursor-pointer active:scale-95 transition-all duration-500 ease-in-out">
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
    </div>
  );
};

export default RiwayatTransaksi;
