import { createContext, useState } from "react";
import { CategoryDammy } from "../datasDummy/Category";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categori, setCategori] = useState(
    Array.isArray(CategoryDammy) ? CategoryDammy : []
  );

  const CategoryAdd = (datas) => {
    if (!datas.name) {
      return { status: false, message: "isi data terlebih dahulu" };
    }

    const exists = categori.find(
      (item) => item.name.toLowerCase() === datas.name.toLowerCase()
    );

    if (exists) {
      return { status: false, message: "data sudah ada" };
    }

    setCategori((prev) => [...prev, { ...datas, id: Date.now() }]);

    return { status: true, message: "berhasil menambah kategori" };
  };

  const DeleteCategoryById = (id) => {
    setCategori((prev) => prev.filter((item) => item.id !== id));
  };

  const UpdateCategoryById = (id, datas) => {
    const byId = categori.find((item) => item.id === id);
    if (!byId) {
      return { status: false, message: "id tidak terdaftar" };
    }

    setCategori((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...datas } : item))
    );

    return { status: true, message: "berhasil update data" };
  };

  return (
    <CategoryContext.Provider
      value={{
        categori,
        CategoryAdd,
        DeleteCategoryById,
        UpdateCategoryById,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
