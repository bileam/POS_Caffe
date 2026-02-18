import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import MenuCard from "../components/MenuCard";
import { menuDummy } from "../datasDummy/dummy";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Transaksi from "../components/Transaksi";
import { ProductContext } from "../Context/ProductContext";
import Title from "../components/Title";

const Chasir = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { listProduct } = useContext(ProductContext);
  // const getAll = () => {

  // };
  // console.log(listProduct);
  const menus = Array.from({ length: 1000 });
  // console.log(listProduct);
  useEffect(() => {
    setTimeout(() => {
      setDatas(listProduct);
      setLoading(false);
    }, 2000);
  }, []);

  // search data
  const searchData = listProduct.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex gap-2 h-[calc(100vh-64px)] bg-gray-100 p-2">
      {/* MENU */}
      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
        <div className=" rounded-lg p-2 flex gap-2 items-center">
          <Button active>Semua kategori</Button>
          <Button>Makanan</Button>
          <Button>Minuman</Button>
          <Input className="flex-1" type="search">
            Cari Menu
          </Input>
        </div>

        <div className="flex-1 flex flex-wrap gap-4 overflow-y-auto no-scrollbar p-2">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <Loading key={i} />)
            : listProduct.map((item, i) => <MenuCard key={i} datas={item} />)}
        </div>
      </div>

      {/* TRANSAKSI */}
      <div className="w-70 h-full shrink-0">
        <Transaksi />
      </div>
    </div>
  );
};

export default Chasir;
