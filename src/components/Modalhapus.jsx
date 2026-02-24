const Modalhapus = ({ isOpen, Onclose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/90 flex justify-center items-center ">
      <div className="bg-white w-[20%]">
        <h1>modal</h1>
        <button onClick={Onclose} className="border p-2 rounded-md">
          Batal
        </button>
      </div>
    </div>
  );
};

export default Modalhapus;
