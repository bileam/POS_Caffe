import hapus from "../assets/Icons/delete_01.svg";
import gambar from "../assets/DummyMenu/burgerDummy.jpg";
import update from "../assets/Icons/update_01.svg";
import { ProductContext } from "../Context/ProductContext";
import { useContext, useState } from "react";
import ModalUpdate from "./ModalUpdate";
import Input from "./Input";
import Button from "./Button";

const MenuCard2 = ({ datas }) => {
  const { deleteByOne, UpdateProduct } = useContext(ProductContext);

  const [isOpen, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    rating: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOpenModal = (data) => {
    setSelectedId(data.id);
    setForm({
      name: data.name || "",
      category: data.category || "",
      price: data.price || "",
      stock: data.stock || "",
      rating: data.rating || "",
      image: data.image || "",
    });
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = UpdateProduct(selectedId, form);
    console.log(res);
    setOpen(false);
  };

  const DataInput = [
    {
      name: "name",
      value: form.name,
      onChange: handleChange,
      type: "text",
      id: "name",
    },
    {
      name: "price",
      value: form.price,
      onChange: handleChange,
      type: "number",
      id: "price",
    },
    {
      name: "stock",
      value: form.stock,
      onChange: handleChange,
      type: "number",
      id: "stock",
    },
    {
      name: "rating",
      value: form.rating,
      onChange: handleChange,
      type: "number",
      id: "rating",
    },
    {
      name: "image",
      value: form.image,
      onChange: handleChange,
      type: "text",
      id: "image",
    },
  ];

  return (
    <>
      <div
        className="bg-white rounded-lg p-3 hover:scale-105 transition
        flex-[1_1_220px] max-w-[calc(25%-12px)]"
      >
        <div className="flex flex-col gap-2">
          <div className="relative">
            <img
              src={datas.image || gambar}
              alt=""
              className="h-28 w-full object-cover rounded"
            />
            {datas.stock === 0 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                <h1 className="-rotate-45 text-lg">Kosong</h1>
              </div>
            )}
          </div>

          <h1 className="font-bold">{datas.name}</h1>

          <div className="flex justify-between">
            <span className="text-[#357c4d] font-bold">Rp {datas.price}</span>
            <span className="text-xs">⭐⭐⭐⭐⭐</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs">{datas.stock} / stock</span>
            <div className="flex gap-3">
              <button onClick={() => handleOpenModal(datas)}>
                <img src={update} alt="" />
              </button>
              <button onClick={() => deleteByOne(datas.id)}>
                <img src={hapus} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <ModalUpdate
        title="Update Data"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
      >
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          id="name"
        >
          Nama Menu
        </Input>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 rounded-md w-full outline-none"
        >
          <option value="" className="">
            Kategori
          </option>
          <option value="Makanan">Makanan</option>
          <option value="Minuman">Minuman</option>
          <option value="Burger">Burger</option>
        </select>
        <Input
          name="price"
          value={form.price}
          onChange={handleChange}
          type="number"
          id="price"
        >
          Harga
        </Input>

        <Input
          name="stock"
          value={form.stock}
          onChange={handleChange}
          type="number"
          id="stock"
        >
          Stok
        </Input>

        <Input
          name="rating"
          value={form.rating}
          onChange={handleChange}
          type="number"
          id="rating"
        >
          Rating
        </Input>
        <Input
          name="image"
          value={form.image}
          onChange={handleChange}
          type="text"
          id="image"
        >
          Image URL
        </Input>
      </ModalUpdate>
    </>
  );
};

export default MenuCard2;
