import berhasil from "../assets/Berhasil.png";
const Modal = ({ isOpen, isClose, TotalJenis }) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={isClose}
      className="fixed flex items-center justify-center inset-0 bg-black/20 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative justify-center min-w-80 h-60 items-center bg-white p-5 scale-105 rounded"
      >
        <img src={berhasil} alt="" className="w-20" />
        <h1 className="text-green-800 font-bold">Pembayaran Berhasil</h1>
        <button
          onClick={isClose}
          className="inline-block absolute top-2 active:scale-90 focus:bg-[#b0dec3]  right-3 text-green-600 shadow bg-[#d4e7dc] px-4 py-2 rounded-full"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
