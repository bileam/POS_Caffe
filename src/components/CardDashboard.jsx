const CardDashboard = ({
  children,
  data,
  logo,
  className = "",
  className2 = "",
}) => {
  return (
    <div
      className={`bg-white   px-3 py-4 flex-1 rounded-md flex gap-2 items-center`}
    >
      <img
        src={logo}
        alt=""
        className={` ${className2 || "bg-[#d4e7dc]"} p-2 rounded-full`}
      />
      <div className="flex flex-col justify-center">
        <h1 className={"text-[0.8rem] "}>{children}</h1>
        <h1 className={`text-[1.4rem] ${className}`}>{data}</h1>
      </div>
    </div>
  );
};

export default CardDashboard;
