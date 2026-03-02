const Keuntungan = ({ title, children }) => {
  return (
    <div className="flex flex-col bg-white p-2 flex-1 min-h-0">
      <h1 className="font-bold shrink-0 text-[#00982a]">{title}</h1>
      <div className="flex-1 min-h-0 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Keuntungan;
