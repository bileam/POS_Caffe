import gambar from "../assets/DummyMenu/burgerDummy.jpg";
const OrderMenu = () => {
  return (
    <div className="flex gap-2 bg-white shadow ">
      <img src={gambar} alt="" className="object-center h-15 w-15 rounded " />
      <div className="flex flex-col justify-between  w-full pr-2">
        <div className="flex justify-between items-center">
          <h1 className="text-[0.9rem]">BuergerKill</h1>
          <button className="text-[0.7rem] text-red-500 border-b">hapus</button>
        </div>

        <h1 className="text-[0.8rem]">Rp 20.000</h1>
        <div className="flex justify-between text-[0.9rem] ">
          <h1>QTY</h1>
          <h1>+ 1 -</h1>
        </div>
      </div>
    </div>
  );
};
export default OrderMenu;
