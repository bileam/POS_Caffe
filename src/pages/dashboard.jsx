import { useContext } from "react";
import Title from "../components/Title";
import logo1 from "../assets/Icons/dashboard_1.svg";
import { TransaksiContext } from "../Context/Transaksi";
import { ProductContext } from "../Context/ProductContext";
import CardDashboard from "../components/CardDashboard";
import LarisNTersedia from "../components/Dashboard/LarisNTersedia";
import WeeklyBarChart from "../components/Dashboard/WeeklyBarChart";

const Dashboard = () => {
  const { listProduct, amountavailable, StockLimit } =
    useContext(ProductContext);

  // console.log(amountavailable());
  // console.log(StockLimit());
  const {
    ListTransaksi,
    addTransaksi,
    getSortedItemsToday,
    getTotalItemsSoldToday,
    getTotalOmzetToday,
    getWeeklyOmzet,
  } = useContext(TransaksiContext);
  const sortedItems = getSortedItemsToday();
  const menuTersedia = amountavailable();
  const limitStock = StockLimit();

  // alert(menuTersedia);
  // console.log(getSortedItemsToday());
  const totalTerjual = getTotalItemsSoldToday();
  // console.log(ListTransaksi);
  // console.log(getTotalItemsSoldToday());

  return (
    <div className="flex flex-col h-screen overflow-y-scroll gap-2  no-scrollbar">
      <Title>dashboard</Title>
      <div className="flex flex-wrap gap-4">
        <CardDashboard logo={logo1} data={ListTransaksi.length || 0}>
          Transaksi Hari ini
        </CardDashboard>
        <CardDashboard
          className="text-red-600"
          // className2="bg-black"
          logo={logo1}
          data={"Rp." + getTotalOmzetToday().toLocaleString() || 0}
        >
          Pendapatan Hari ini
        </CardDashboard>
        <CardDashboard logo={logo1} data={getTotalItemsSoldToday() || 0}>
          Item Terjual Hari ini
        </CardDashboard>

        <CardDashboard
          logo={logo1}
          data={`${amountavailable().length || 0}/${listProduct.length || 0}`}
        >
          Menu Tersedia hari ini
        </CardDashboard>
      </div>
      <div className=" flex-1 overflow-hidden flex gap-2 ">
        <div className=" flex-1 bg-white overflow-y-scroll px-10   no-scrollbar pb-20 py-3 flex flex-col gap-2 rounded-md">
          <div className="text-md">Pendapatan perhari</div>
          {/* <div className="text-md">Menu Terlaris hari ini</div> */}
          {/* 
          {sortedItems.length === 0 && (
            <div className="text-center text-[#cdcdcd]">belum ada data</div>
          )}

          {sortedItems.map((item, index) => (
            <LarisNTersedia
              key={item.id}
              img={item.image}
              index={index}
              dataItem={item.qty}
              dataName={item.name}
            >
              Menu Terlaris hari ini
            </LarisNTersedia>
          ))} */}
          <WeeklyBarChart data={getWeeklyOmzet()} />
        </div>
        {/* <div className=" flex-1 relative bg-white overflow-y-scroll no-scrollbar pb-20 p-3 flex flex-col gap-2 rounded-md">
          <div className="text-md ">Menu Tersedia</div>
          {menuTersedia.map((item, index) => (
            <LarisNTersedia
              img={item.image}
              index={index}
              dataName={item.name}
              dataItem={item.stock}
            />
          ))}
        </div> */}
        <div className="flex-1 relative bg-white overflow-y-scroll no-scrollbar pb-20 p-3 flex flex-col gap-2 rounded-md">
          <h1>Menu Stock Habis</h1>
          {limitStock.map((item, index) => (
            <LarisNTersedia
              img={item.image}
              dataItem={item.stock === 0 ? "kosong" : item.stock}
              dataName={item.name}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
