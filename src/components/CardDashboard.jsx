const CardDashboard = ({
  children,
  data,
  logo,
  className = "",
  className2 = "",
}) => {
  return (
    <div
      className="
        bg-white px-3 py-4 flex-1 rounded-md 
        flex gap-2 items-center
        outline-none ring-0 focus:outline-none focus:ring-0
        select-none
      "
      tabIndex={-1}
    >
      <img
        src={logo}
        alt=""
        draggable={false}
        className={`
          ${className2 || "bg-[#d4e7dc]"}
          p-2 rounded-full
          outline-none ring-0 focus:outline-none focus:ring-0
          select-none
        `}
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-[0.8rem] select-none">{children}</h1>
        <h1 className={`text-[1.4rem] ${className} select-none`}>{data}</h1>
      </div>
    </div>
  );
};

export default CardDashboard;
