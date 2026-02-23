const LaporanStoct = ({ children, Title }) => {
  return (
    <div className="bg-white flex-1 rounded-md p-2 flex flex-col gap-2">
      <h1 className="text-[1.1rem] font-semibold">{Title}</h1>
      {children}
    </div>
  );
};

export default LaporanStoct;
