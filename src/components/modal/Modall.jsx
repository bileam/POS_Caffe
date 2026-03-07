const Modall = ({ isOpen, title, onClose, children }) => {
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
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold text-[#357c4d]">{title}</h2>
          <button
            onClick={onClose}
            type="button"
            className="w-9 h-9 rounded-full flex items-center justify-center
              hover:bg-[#357c4d] hover:text-white shadow-2xl  text-black  transition-all duration-500 active:scale-90"
          >
            ✕
          </button>
        </div>

        {/* body /content */}
        <div className="flex flex-col px-5 py-4 gap-2">{children}</div>
      </div>
    </div>
  );
};
export default Modall;
