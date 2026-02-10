import { createContext, useContext, useState } from "react";
import { ProductContext } from "./ProductContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { listProduct, reduceStock, increaseStock } =
    useContext(ProductContext);
  const [Listdata, setDatas] = useState([]);

  const addCart = (product) => {
    if (product.stock <= 0) return alert("Stock habis");
    reduceStock(product.id, 1);
    setDatas((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };
  const PlusQty = (id) => {
    const product = listProduct.find((p) => p.id === id);
    if (!product) return;

    if (product.stock <= 0) {
      alert("Stock habis");
      return;
    }
    reduceStock(id, 1);
    setDatas((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const MinusQty = (id) => {
    increaseStock(id, 1);

    setDatas((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const deleteOne = (id) => {
    const item = Listdata.find((i) => i.id === id);
    if (item) increaseStock(id, item.qty);
    setDatas((prev) => prev.filter((item) => item.id !== id));
  };

  const deleteAll = () => {
    Listdata.forEach((item) => increaseStock(item.id, item.qty));
    setDatas([]);
  };

  const deleallSuccessOrder = () => {
    setDatas([]);
  };

  return (
    <CartContext.Provider
      value={{
        addCart,
        Listdata,
        deleteAll,
        PlusQty,
        MinusQty,
        deleteOne,
        deleallSuccessOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
