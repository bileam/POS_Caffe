import { useContext } from "react";
import { TransaksiContext } from "../Context/Transaksi";
import Title from "../components/Title";
import LaporanStoct from "../components/report/LaporanStoct";
import ButtonLaporan from "../components/report/ButtonLaporan";
import Keuntungan from "../components/report/Keuntungan";
import Cart from "../components/report/Cart";
import Chart from "../components/report/Chart";
const Report = () => {
  const { ListTransaksi, transaksiById } = useContext(TransaksiContext);
  console.log(ListTransaksi);
  // const res = ListTransaksi[0].id;
  // const trans = transaksiById(res);
  // console.log(trans);
  return (
    <div className="flex flex-col gap-2 h-screen">
      <Title>Laporan</Title>
      <div className="flex justify-between text-[0.8rem]">
        <div>
          <ButtonLaporan>Filter</ButtonLaporan>
        </div>
        <div className="flex gap-2">
          <ButtonLaporan className="text-green-700">
            Unduh Laporan
          </ButtonLaporan>
          <ButtonLaporan className="text-green-700">Cetak</ButtonLaporan>
        </div>
      </div>
      <div className=" flex-1 w-full  text-[0.8rem] flex gap-2 ">
        <div className=" flex-1 flex flex-col w-full gap-2 ">
          <Keuntungan title="keuntungan harian">
            <div className="flex gap-2">
              <Cart title="keuntungan Hari ini" data="90.000" />
              <Cart title="Keuntungan mingguan" data="100.000" />
              <Cart title="Keuntungan bulanan" data="1.000.000" />
              <Cart title="Keuntungan Tahunan" data="11.000.000" />
            </div>
            <Chart />
          </Keuntungan>
          <div className="flex flex-col gap-2 bg-white p-2">
            <h1 className="font-bold">Jumlah transaksi hari ini</h1>
          </div>
        </div>
        <div className="flex flex-col gap-6  w-60">
          <LaporanStoct Title="Download Laporan"></LaporanStoct>
          <LaporanStoct Title="Stoct Paling sering habis"></LaporanStoct>
        </div>
      </div>
    </div>
  );
};

export default Report;
