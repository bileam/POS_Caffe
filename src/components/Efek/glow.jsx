const Glow = ({ className = " " }) => {
  return (
    <div className={`absolute ${className} rounded-full overflow-hidden`}>
      <div className="w-50 h-50 jelly bg-green-200/20"></div>
    </div>
  );
};
export default Glow;
