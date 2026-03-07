import { useContext, useEffect, useState } from "react";
import berhasil from "../assets/Berhasil.png";
import { TransaksiContext } from "../Context/Transaksi";

const Modal = ({ isOpen, isClose, TotalJenis, children }) => {
  const [closing, setClosing] = useState(false);
  const { ListTransaksi, ByIdTransaksi } = useContext(TransaksiContext);

  // console.log(ListTransaksi);
  // console.log("transaksi by id", ByIdTransaksi(1772897492175));
  // const transaksi = ByIdTransaksi(1772897450987);
  // transaksi.items.map((item) => {
  //   console.log("maananan", item);
  // });
  useEffect(() => {
    if (!isOpen) {
      setClosing(false);
    }
  }, [isOpen]);

  if (!isOpen && !closing) return null;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      isClose();
    }, 200); // HARUS sama dengan durasi animasi CSS
  };

  return (
    <div
      onClick={handleClose}
      className="fixed  flex items-center justify-center inset-0 bg-black/90 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col relative justify-center min-w-80 h-60 items-center bg-white p-5 rounded-md
          ${closing ? "modalOut" : "modalOpen"}
        `}
      >
        <img src={berhasil} alt="" className="w-20" />
        <h1 className="text-green-800 font-bold">Pembayaran Berhasil</h1>
        <div className="flex gap-3 flex-col  mt-2 items-center">
          <div> {children}</div>
        </div>
        <button
          onClick={handleClose}
          className="inline-block   absolute top-3 right-3   active:scale-90 text-green-600 rounded-full shadow hover:bg-green-600 hover:text-white transition-all duration-500 ease-in-out cursor-pointer  bg-[#d4e7dc] px-4 py-2 "
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
