const Cart = ({ data, title, logo }) => {
  return (
    <div className="bg-green-600/20 p-2 rounded flex  gap-2">
      <img src={logo} alt="" className="w-5" />
      <div className="text-green-600 text-[0.9rem]">
        <h1>{title}</h1>
        <h1 className="text-[1rem] text-green-800">Rp. {data}</h1>
      </div>
    </div>
  );
};
export default Cart;
