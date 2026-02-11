const ModalUpdate = ({ isOpen, onClose, children, onSubmit, title }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 backdrop-blur-sm px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
            w-full max-w-xl
            bg-white rounded-2xl shadow-xl
            transition-all duration-200
          "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold text-[#357c4d]">{title}</h2>
          <button
            onClick={onClose}
            type="button"
            className="w-9 h-9 rounded-full flex items-center justify-center
              hover:bg-red-100 text-red-500 transition active:scale-90"
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
              className="px-4 py-2 rounded-md
                bg-[#357c4d] text-white
                hover:bg-[#2c6a41] transition"
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
