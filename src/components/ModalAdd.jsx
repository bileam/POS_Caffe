const ModalAdd = ({ isOpen, OnClose, children, title, onSubmit }) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={OnClose}
      className="fixed inset-0 flex z-50 items-center justify-center bg-black/20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-5 bg-white modalOpen rounded-md flex flex-col gap-3 relative max-w-[70%]"
      >
        <div className="flex justify-between">
          <h1 className="font-bold text-[1.1rem]  max-w-40">{title}</h1>
          <button
            onClick={OnClose}
            type="button"
            className="w-9 h-9 rounded-full flex items-center justify-center
              hover:bg-red-100 text-red-500 transition active:scale-90"
          >
            ✕
          </button>
        </div>

        <form
          className="gap-4 flex flex-col w-100 mt-10"
          action=""
          onSubmit={onSubmit}
        >
          {children}
        </form>
      </div>
    </div>
  );
};

export default ModalAdd;
