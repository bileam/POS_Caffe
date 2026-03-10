import { useContext, useMemo } from "react";
import { TransaksiContext } from "../Context/Transaksi";
import Title from "../components/Title";
import LaporanStoct from "../components/report/LaporanStoct";
import ButtonLaporan from "../components/report/ButtonLaporan";
import Keuntungan from "../components/report/Keuntungan";
import Cart from "../components/report/Cart";
import Chart from "../components/report/Chart";
import LarisNTersedia from "../components/Dashboard/LarisNTersedia";

const Report = () => {
  const {
    ListTransaksi,
    getMostBoughtItemsThisWeek,
    getLeastBoughtItemsThisWeek,
    getTotalOmzetToday,
    getWeeklyOmzet,
    getMonthlyOmzet,
    getDailyOmzetThisMonth,
    getTotalOmzetWeek,
    getTotalOmzetMonth,
    getTotalOmzetYear,
  } = useContext(TransaksiContext);

  console.log(getTotalOmzetWeek());
  const mostBought = useMemo(
    () => getMostBoughtItemsThisWeek(),
    [ListTransaksi]
  );

  const leastBought = useMemo(
    () => getLeastBoughtItemsThisWeek(),
    [ListTransaksi]
  );
  // console.log(mostBought);

  return (
    <div className="flex flex-col h-screen gap-2">
      <Title>Laporan</Title>
      {/* HEADER */}
      <div className="flex justify-between text-[0.8rem]">
        <ButtonLaporan className="text-[#00982a]">Filter</ButtonLaporan>
        <div className="flex gap-2">
          <ButtonLaporan className="text-green-700">
            Unduh Laporan
          </ButtonLaporan>
          <ButtonLaporan className="text-green-700">Cetak</ButtonLaporan>
        </div>
      </div>

      {/* BODY */}
      <div className="flex flex-1 gap-2 overflow-hidden text-[0.8rem]">
        {/* KIRI – KEUNTUNGAN */}
        <div className="flex-1 bg-white overflow-y-auto rounded">
          <Keuntungan title="Keuntungan">
            <div className="flex gap-2 mb-3">
              <Cart
                title="Hari ini"
                data={getTotalOmzetToday().toLocaleString("id-ID")}
              />
              <Cart
                title="Mingguan"
                data={getTotalOmzetWeek().toLocaleString("id-ID")}
              />
              <Cart
                title="Bulanan"
                data={getTotalOmzetMonth().toLocaleString("id-ID")}
              />
              <Cart
                title="Tahunan"
                data={getTotalOmzetYear().toLocaleString("id-ID")}
              />
            </div>
            <Chart />
          </Keuntungan>
        </div>

        {/* KANAN – SERING & JARANG (SAMPING) */}
        <div className="flex gap-2 w-130 h-full">
          {/* SERING DIBELI */}
          <div className="flex-1 bg-white rounded overflow-y-auto pb-16 no-scrollbar">
            <LaporanStoct Title="Sering dibeli (minggu)">
              {mostBought.length === 0 && (
                <p className="text-center text-gray-400">Belum ada data</p>
              )}

              {mostBought.map((item, index) => (
                <LarisNTersedia
                  key={item.name}
                  dataName={item.name}
                  img={item.image}
                  dataItem={item.qty}
                  index={index}
                  variant="success"
                />
              ))}
            </LaporanStoct>
          </div>

          {/* JARANG DIBELI */}
          <div className="flex-1 bg-white rounded overflow-y-auto pb-16 no-scrollbar">
            <LaporanStoct Title="Jarang dibeli (minggu)">
              {leastBought.length === 0 && (
                <p className="text-center text-gray-400">Belum ada data</p>
              )}

              {leastBought.map((item, index) => (
                <LarisNTersedia
                  key={item.name}
                  dataName={item.name}
                  img={item.image}
                  dataItem={item.qty}
                  index={index}
                  variant="danger"
                />
              ))}
            </LaporanStoct>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
