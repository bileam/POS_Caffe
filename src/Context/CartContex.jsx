import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [Listdata, setDatas] = useState([]);
  const addCart = (product) => {
    // menganalasisi apakah prodduk sudah ada dalam cart
    setDatas((prev) => {
      const existing = prev.find((item) => item.id === product.id); //menacari data yang sama idnya
      if (existing) {
        return prev.map(
          (item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item //jika ada makan qty di tambah 1 jika idnya tiadk sama makan tampilkan item saja
        );
      }
      return [
        ...prev,
        {
          ...product,
          qty: 1,
        },
      ];
    });
    // jika ada, tambahkan qtynya saja
    // jika belum tambakan datanya ke cart
  };

  //   hapus semua cart
  const deleteAll = () => {
    setDatas([]);
  };
  //hapus salah satu cart
  const deleteOne = (id) => {
    setDatas((prev) => prev.filter((item) => item.id !== id));
  };
  // tambahkan qty
  const PlusQty = (id) => {
    setDatas((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const MinusQty = (id) => {
    setDatas((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ addCart, Listdata, deleteAll, PlusQty, MinusQty, deleteOne }}
    >
      {children}
    </CartContext.Provider>
  );
};
