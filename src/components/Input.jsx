const Input = ({
  children,
  value,
  name,
  type,
  onChange,
  id,
  className = "",
  defaultValue,
}) => {
  return (
    <div className="flex-1 flex flex-col relative text-[0.8rem]">
      <input
        className={`${className} w-full  py-1 px-3 peer outline-none border rounded-md  border-[#357c4d]`}
        name={name}
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        id={id}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute left-2 -top-3 rounded-md peer-focus:rounded-md text-sm text-white bg-[#00982a] peer-placeholder-shown:bg-white/20 px-2 peer-placeholder-shown:top-1 peer-placeholder-shown:text-[1rem] peer-placeholder-shown:text-[#cdcdcd] transition-all duration-700 peer-focus:text-sm peer-focus:-top-3 peer-focus:bg-[#00982a] peer-focus:text-white"
      >
        {children}
      </label>
    </div>
  );
};

export default Input;
