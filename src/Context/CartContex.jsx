import { createContext, useState } from "react";
import { data } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const addCart = (datas) => {
    // menganalasisi apakah prodduk sudah ada dalam cart
    setDatas((prev) => {
      const existing = prev.find((item) => item.id === datas.id); //menacari data yang sama idnya
      if (existing) {
        return prev.map(
          (item) =>
            item.id === datas.id ? { ...item, qty: item.qty + 1 } : item //jika ada makan qty di tambah 1 jika idnya tiadk sama makan tampilkan item saja
        );
      }
      return [
        ...prev,
        {
          ...datas,
          qty: 1,
        },
      ];
    });
    // jika ada, tambahkan qtynya saja
    // jika belum tambakan datanya ke cart
  };
  //   lihat semua isi cart
  const getCart = () => {};

  //   hapus semua cart

  //hapus salah satu cart

  // tambahkan qty

  // kurangi qty

  return (
    <CartContext.Provider value={{ addCart }}>{children}</CartContext.Provider>
  );
};
