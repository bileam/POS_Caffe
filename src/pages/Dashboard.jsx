import { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import MenuCard from "../components/MenuCard";
import { menuDummy } from "../datasDummy/dummy";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Transaksi from "../components/Transaksi";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  // const getAll = () => {

  // };
  const menus = Array.from({ length: 20 });

  useEffect(() => {
    setTimeout(() => {
      setDatas(menuDummy);
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="flex gap-2 h-screen ">
      <div className=" flex-1 flex flex-col gap-2 pb-20">
        <div className="rounded flex gap-2 items-center p-2">
          <Button active={true}>Semua kategori</Button>
          <Button>Makanan</Button>
          <Button>Minuman</Button>

          <Input id="cari" name="cari" className="flex-1">
            Cari Menu
          </Input>
        </div>
        {loading ? (
          <div className="flex flex-wrap gap-4 w-full overflow-y-auto no-scrollbar  ">
            {menus.map((_, index) => (
              <Loading />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 w-full overflow-y-auto no-scrollbar ">
            {datas.map((item, index) => (
              <MenuCard id={index} datas={item} />
            ))}
          </div>
        )}
      </div>
      <div className="w-60 bg-white shadow rounded-md ">
        <Transaksi />
      </div>
    </div>
  );
};

export default Dashboard;
