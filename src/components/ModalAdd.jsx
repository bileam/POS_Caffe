const ModalAdd = ({ isOpen, OnClose, children, title, onSubmit }) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={OnClose}
      className="fixed inset-0 flex z-50 items-center justify-center bg-black/20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-5 bg-white rounded-md flex flex-col gap-3 relative max-w-[70%]"
      >
        <button
          onClick={OnClose}
          className="inline-block absolute top-2 active:scale-90 focus:bg-[#b0dec3]  right-3 text-green-600 shadow bg-[#d4e7dc] px-4 py-2 rounded-full"
        >
          X
        </button>
        <h1 className="font-bold text-[1.1rem] shadow shadow-[#b0dec3] max-w-40">
          {title}
        </h1>
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
