import { createContext, useState } from "react";
import { menuDummy } from "../datasDummy/dummy";
import datadummy from "../datasDummy/produck.json";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [listProduct, setListProduct] = useState(menuDummy);

  //   mengurangi stock jika ada yang pesan
  const addProduct = (product) => {
    const namaProduct = listProduct.find((item) => item.name === product.name);
    if (namaProduct) {
      return { message: "Nama sudah ada", status: 402 };
    }
    setListProduct((prev) => [...prev, { ...product, id: Date.now() }]);
    return {
      message: "berhasil",
      status: 200,
    };
  };

  // read data by id

  const ReadProductById = (id) => {
    const readProduct = listProduct.find((item) => item.id === id);
    if (readProduct) {
      return readProduct;
    }
  };

  // hapus 1 data
  const deleteByOne = (id) => {
    setListProduct((prev) => prev.filter((item) => item.id !== id));
  };

  // update product
  const UpdateProduct = (id, product) => {
    const byId = listProduct.find((item) => item.id === id);

    if (!byId) {
      return { message: "tidak ada data", status: 400 };
    }

    setListProduct((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        const newStock =
          product.stock !== undefined ? Math.max(0, product.stock) : item.stock;

        return {
          ...item,
          ...product,
          stock: newStock,
        };
      })
    );

    return { message: "berhasil update", status: 200 };
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

  // filter produck yang tersedia hari ini
  const amountavailable = () => {
    const availeble = listProduct.filter((item) => item.stock > 0);
    return availeble;
  };

  // cari produck yang stocknya habis
  const StockLimit = () => {
    const limitStock = listProduct.filter((item) => item.stock === 0);
    return limitStock;
  };

  // menambahkan item
  const AddStock = (id, qty) => {
    setListProduct((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, stock: item.stock + qty } : item
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        listProduct,
        reduceStock,
        increaseStock,
        addProduct,
        deleteByOne,
        ReadProductById,
        UpdateProduct,
        amountavailable,
        StockLimit,
        AddStock,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
