import { useContext, useState } from "react";
import { CategoryContext } from "../Context/Categori";
import Button from "../components/Button";
import Title from "../components/Title";
import Input from "../components/Input";
const Category = () => {
  const [form, setForm] = useState({
    name: "makanan berat",
  });
  const { CategoryAdd, categori, DeleteCategoryById, UpdateCategoryById } =
    useContext(CategoryContext);
  // console.log(categori);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const res = CategoryAdd(form);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-col h-screen overflow-y-scroll gap-2  no-scrollbar">
      <Title>Manajemant Categories</Title>

      <div className="bg-white flex flex-col gap-3 rounded-md flex-1 overflow-y-auto no-scrollbar  p-5">
        <div className="flex justify-between gap-25">
          <div className="w-[50%]">
            <Input>Searching</Input>
          </div>
          <Button type="button">Add Kategori</Button>
        </div>
        <table className=" w-full">
          <thead>
            <tr className="text-center shadow bg-[#d4e7dc] rounded-md p-2 text-[#357c4d]">
              <th className="p-2">No</th>
              <th className="p-2">Name Categories</th>
            </tr>
          </thead>
          <tbody className="text-center w-full">
            {categori.map((item, index) => (
              <tr key={index} className="shadow-[#d4e7dc] shadow  w-full">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
