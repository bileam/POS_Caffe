import { createContext, useState } from "react";
import { CategoryDammy } from "../datasDummy/Category";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categori, setCategori] = useState(CategoryDammy);

  const CategoryAdd = (datas) => {
    if (!datas.name) {
      return {
        status: 404,
        message: "isi data terlebih dahulu",
      };
    }
    const namedatas = categori.find((item) => item.name === datas.name);
    if (namedatas) {
      return {
        status: 402,
        message: "data sudah ada",
      };
    }
    setCategori((prev) => [...prev, { ...datas, id: Date.now() }]);
    return {
      status: 200,
      message: "successAdd Datas",
      data: datas,
    };
  };

  const DeleteCategoryById = (id) => {};
  const UpdateCategoryById = (id, datas) => {};

  return (
    <CategoryContext.Provider
      value={{ CategoryAdd, categori, DeleteCategoryById, UpdateCategoryById }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
