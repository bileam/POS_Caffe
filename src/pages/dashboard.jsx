import { useContext } from "react";
import Title from "../components/Title";
import logo1 from "../assets/Icons/dashboard_1.svg";
import { TransaksiContext } from "../Context/Transaksi";
import { ProductContext } from "../Context/ProductContext";
import CardDashboard from "../components/CardDashboard";

const Dashboard = () => {
  const { listProduct } = useContext(ProductContext);
  const {
    ListTransaksi,
    addTransaksi,
    getSortedItemsToday,
    getTotalItemsSoldToday,
    getTotalOmzetToday,
  } = useContext(TransaksiContext);
  const sortedItems = getSortedItemsToday();
  const totalTerjual = getTotalItemsSoldToday();
  console.log(ListTransaksi);
  console.log(getTotalItemsSoldToday());
  return (
    <div>
      <Title>dashboard</Title>
      {/* <div>total transaksi : {ListTransaksi.length || 0}</div>
      <h1>total pendapatan hari ini: {getTotalOmzetToday() || 0}</h1>
      <h1>Total terjual hari ini: {getTotalItemsSoldToday() || 0}</h1>

      {sortedItems.length === 0 ? (
        <p>Belum ada transaksi hari ini</p>
      ) : (
        sortedItems.map((item, index) => (
          <div key={item.name}>
            {index + 1}. {item.name} : {item.qty}
          </div>
        ))
      )} */}

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
        <CardDashboard logo={logo1} data={listProduct.length || 0}>
          Menu Tersedia hari ini
        </CardDashboard>
      </div>
    </div>
  );
};

export default Dashboard;
