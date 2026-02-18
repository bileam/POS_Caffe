import { useContext } from "react";
import { TransaksiContext } from "../Context/Transaksi";
import Title from "../components/Title";
const Report = () => {
  const { ListTransaksi, transaksiById } = useContext(TransaksiContext);
  console.log(ListTransaksi);
  // const res = ListTransaksi[0].id;
  // const trans = transaksiById(res);
  // console.log(trans);
  return (
    <div className="flex flex-col gap-2">
      <Title>Laporan</Title>
    </div>
  );
};

export default Report;
