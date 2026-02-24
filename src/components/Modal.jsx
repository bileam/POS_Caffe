import { useEffect, useState } from "react";
import berhasil from "../assets/Berhasil.png";

const Modal = ({ isOpen, isClose, TotalJenis }) => {
  const [closing, setClosing] = useState(false);

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
      className="fixed flex items-center justify-center inset-0 bg-black/90 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col relative justify-center min-w-80 h-60 items-center bg-white p-5 rounded-md
          ${closing ? "modalOut" : "modalOpen"}
        `}
      >
        <img src={berhasil} alt="" className="w-20" />
        <h1 className="text-green-800 font-bold">Pembayaran Berhasil</h1>

        <button
          onClick={handleClose}
          className="inline-block absolute bottom-4 active:scale-90 text-green-600 shadow bg-[#d4e7dc] px-4 py-2 rounded-full"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default Modal;
