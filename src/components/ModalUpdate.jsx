const ModalUpdate = ({ isOpen, onClose, children, onSubmit, title }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center
        bg-black/90 backdrop-blur-sm px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
            w-full max-w-xl modalOpen
            bg-white rounded-2xl shadow-xl
            transition-all duration-200
          "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold text-[#00982a]">{title}</h2>
          <button
            onClick={onClose}
            type="button"
            className="w-9 h-9 rounded-full flex items-center justify-center
             bg-[#00982a] text-white transition active:scale-90"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <form
          onSubmit={onSubmit}
          className="p-5 space-y-4 max-h-[70vh] overflow-y-auto"
        >
          {children}

          {/* FOOTER */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md border
                text-gray-600 hover:bg-gray-100 transition"
            >
              Batal
            </button>

            <button
              type="submit"
              // onClick={() => Update(item.id)}
              className="px-4 py-1 cursor-pointer  border rounded-md bg-[#00982a] hover:bg-[#007f24]  transition-all duration-500 text-[#FFFFFF] border-[#d4e7dc]"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalUpdate;
