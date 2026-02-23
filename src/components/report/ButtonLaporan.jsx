const ButtonLaporan = ({ children, onclick, type, className = " " }) => {
  return (
    <button
      onClick={onclick}
      type={type}
      className={`${className} px-4 py-2 bg-white rounded-md cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default ButtonLaporan;
