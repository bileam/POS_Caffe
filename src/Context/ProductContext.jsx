import { createContext, useState } from "react";
import { menuDummy } from "../datasDummy/dummy";
import datadummy from "../datasDummy/produck.json";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [listProduct, setListProduct] = useState(menuDummy);

  //   mengurangi stock jika ada yang pesan

  const addProduck = (produk) => {
    setListProduct((prev) => {
      // jika sudah ada produk
      const existensi = prev.find((item) => item.id === produk.id);
      if (existensi) {
        return prev.map((item) =>
          item.id === produk.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...produk, qty: 1 }];
    });
    // kalau belum ada
  };
  const reduceStock = (id, qty = 1) => {
    setListProduct((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const newStock = item.stock - qty;
        return {
          ...item,
          stock: newStock < 0 ? 0 : newStock,
        };
      })
    );
  };

  //   menambahkan stock kembali jika ada yang batal pesan
  const increaseStock = (id, qty = 1) => {
    setListProduct((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, stock: item.stock + qty } : item
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{ listProduct, reduceStock, increaseStock, addProduck }}
    >
      {children}
    </ProductContext.Provider>
  );
};
