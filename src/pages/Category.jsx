import { useContext, useState } from "react";
import { CategoryContext } from "../Context/Categori";
import Button from "../components/Button";
import Title from "../components/Title";
import Input from "../components/Input";
import ModalAdd from "../components/ModalAdd";
import ModalUpdate from "../components/ModalUpdate";
const Category = () => {
  const [search, setsearch] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isOpenUpdate, setOpenUpdate] = useState(false);
  const [byid, setById] = useState(null);
  const [formUpdate, setFormUpdate] = useState({
    name: "",
  });
  const [form, setForm] = useState({
    name: "",
  });
  const { CategoryAdd, categori, DeleteCategoryById, UpdateCategoryById } =
    useContext(CategoryContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeUpdate = (e) => {
    const { name, value } = e.target;
    setFormUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const res = CategoryAdd(form);
      // console.log(res);
      setOpen(false);
    } catch (error) {
      console.log(error.message);
      setOpen(false);
    }
  };

  const Update = (id) => {
    setById(id);
    setOpenUpdate(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(byid);
    UpdateCategoryById(byid, formUpdate);
    setOpenUpdate(false);
  };
  // console.log(search);
  const filterSearch = categori.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="flex flex-col h-screen overflow-y-scroll gap-2  no-scrollbar">
      <Title>Manajemant Categories</Title>
      <div className="bg-white flex flex-col gap-3 rounded-md flex-1 overflow-y-auto no-scrollbar  p-5">
        <div className="flex justify-between gap-25">
          <div className="w-[50%]">
            <Input
              onChange={(e) => setsearch(e.target.value)}
              value={search}
              type="search"
              id="search"
              name="search"
            >
              Searching
            </Input>
          </div>
          <Button type="button" onClick={() => setOpen(true)}>
            Add Kategori
          </Button>
        </div>
        <table className=" w-full">
          <thead>
            <tr className="text-center shadow bg-[#d4e7dc] rounded-md p-2 text-[#357c4d]">
              <th className="p-2">No</th>
              <th className="p-2">Name Categories</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center w-full relative">
            {filterSearch.length === 0 && (
              <div className="text-[#cdcdcd]  absolute left-1/2 translate-x-[50%] top-50">
                tidak ada data
              </div>
            )}
            {filterSearch.map((item, index) => (
              <tr key={index} className="shadow-[#d4e7dc] shadow  w-full">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{item.name}</td>
                <td className="flex gap-4 items-center justify-center p-2 ">
                  <button
                    onClick={() => DeleteCategoryById(item.id)}
                    className="px-4 py-1 cursor-pointer border rounded-md border-[#357c4d] text-[#357c4d] bg-[#d4e7dc]"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => Update(item.id)}
                    className="px-4 py-1 cursor-pointer border rounded-md bg-[#357c4d] hover:bg-green-800  transition-all duration-500 text-[#FFFFFF] border-[#d4e7dc]"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalAdd
        isOpen={isOpen}
        OnClose={() => setOpen(false)}
        title="ADD CATEGORIES"
        onSubmit={handleSubmit}
      >
        <Input
          id="name"
          value={form.name}
          name="name"
          type="text"
          onChange={handleChange}
        >
          Name categories
        </Input>
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-md border
                text-gray-600 hover:bg-gray-100 transition"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md
                bg-[#357c4d] text-white
                hover:bg-[#2c6a41] transition"
          >
            Simpan
          </button>
        </div>
      </ModalAdd>
      <ModalUpdate
        title="UPDATE CATEGORIES"
        onSubmit={handleUpdate}
        isOpen={isOpenUpdate}
        onClose={() => setOpenUpdate(false)}
      >
        <Input
          id="name"
          value={formUpdate.name}
          onChange={handleChangeUpdate}
          name="name"
        >
          Name categorie
        </Input>
      </ModalUpdate>
    </div>
  );
};

export default Category;
