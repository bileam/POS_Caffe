import AIChat from "../AIChat";

const ModalAi = ({ isOpen, OnClose }) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={OnClose}
      className="fixed inset-0 flex z-50 items-center  justify-center bg-black/90 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white modalOpen   rounded-md flex flex-col gap-3 relative max-w-[70%]"
      >
        <AIChat />
      </div>{" "}
    </div>
  );
};

export default ModalAi;
