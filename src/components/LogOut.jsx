const Lokout = ({ isOpen, Onclose, logout }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/90 z-50  flex items-center justify-center">
      <div className="flex flex-col gap-2 modalOpen bg-white rounded-md items-center justify-center p-4 w-[20%] ">
        <p>anda yakin ingin keluar?</p>
        <div className="flex gap-2">
          <button onClick={Onclose} className="py-2 px-4 border rounded-md">
            Batal
          </button>
          <button
            onClick={logout}
            className="py-2 px-4 border rounded-md bg-green-800 text-white hover:bg-green-900 transition-all duration-500 cursor-pointer"
          >
            Yakin
          </button>
        </div>
      </div>
    </div>
  );
};
export default Lokout;
