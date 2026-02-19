const Button = ({ type, onClick, children, className = "", active }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 text-[0.9rem] ${
        active ? " bg-[#36794d] text-white" : ""
      }   cursor-pointer bg-[#d4e7dc] border border-[#357c4d]    text-[#357c4d]  hover:bg-[#36794d] hover:text-white transition-all duration-700  rounded-md `}
    >
      {children}
    </button>
  );
};

export default Button;
