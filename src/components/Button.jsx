const Button = ({ type, onClick, children, className = "", active }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-1 px-3 text-[0.9rem] ${className} ${
        active ? "bg-[#d4e7dc]  text-[#357c4d]" : ""
      }   cursor-pointer bg-white hover:bg-[#d4e7dc] hover:text-[#357c4d] transition-all duration-700  rounded-md `}
    >
      {children}
    </button>
  );
};

export default Button;
