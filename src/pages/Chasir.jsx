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
  return (
    <div className="flex gap-2 h-screen  ">
      <div className=" flex-1 flex flex-col gap-2 pb-20">
        <div className="rounded flex gap-2 items-center p-2">
          <Button active={true}>Semua kategori</Button>
          <Button>Makanan</Button>
          <Button>Minuman</Button>
          <Input id="cari" name="cari" type="search" className="flex-1">
            Cari Menu
          </Input>
        </div>
        {loading ? (
          <div className="flex flex-wrap gap-4 w-full overflow-y-auto no-scrollbar  ">
            {listProduct.map((_, index) => (
              <Loading />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 w-full overflow-y-auto no-scrollbar ">
            {listProduct.map((item, index) => (
              <MenuCard id={index} datas={item} />
              // <Loading />
            ))}
          </div>
        )}
      </div>
      <div className="w-60 flex  items-center  ">
        <Transaksi />
      </div>
    </div>
  );
};

export default Chasir;
