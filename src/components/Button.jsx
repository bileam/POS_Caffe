const Button = ({
  type = "button",
  onClick,
  children,
  className = "",
  active,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        py-2 px-4 text-[0.8rem] rounded-md cursor-pointer
        border border-[#357c4d]
        transition-all duration-300

        ${
          active
            ? "bg-[#00982a] text-white hover:bg-[#007f24]"
            : "bg-[#d4e7dc] text-[#357c4d] hover:bg-[#36794d] hover:text-white"
        }

        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
