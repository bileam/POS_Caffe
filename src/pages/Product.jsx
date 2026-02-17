import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import MenuCard2 from "../components/MenuCart2";
import { ProductContext } from "../Context/ProductContext";
import Loading from "../components/Loading";
import Title from "../components/Title";
import ModalAdd from "../components/ModalAdd";
import { CategoryContext } from "../Context/Categori";
const Product = () => {
  const { listProduct, addProduct } = useContext(ProductContext);
  const { categori } = useContext(CategoryContext);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  // 🔥 DIPISAH
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    rating: "",
    image: "",
  });

  // ========================
  // HANDLE FORM
  // ========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: ["price", "stock", "rating"].includes(name)
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = addProduct(form);

    setToastOpen(true);
    setMessage(res.message);

    if (res.status === 200) {
      setForm({
        name: "",
        category: "",
        price: "",
        stock: "",
        rating: "",
        image: "",
      });
      setIsOpen(false);
    }

    setTimeout(() => {
      setToastOpen(false);
    }, 2000);
  };

  // ========================
  // LOADING
  // ========================
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // ========================
  // FILTER + SEARCH
  // ========================
  const filteredProduct = listProduct.filter((item) => {
    const matchName = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchCategory = filterCategory
      ? item.category.toLowerCase() === filterCategory.toLowerCase()
      : true;

    return matchName && matchCategory;
  });

  return (
    <div className="h-screen flex flex-col gap-3">
      <Title>Product</Title>

      {/* ================= FILTER BAR ================= */}
      <div className="flex items-center justify-between">
        <div className="w-[50%] flex gap-3">
          {/* FILTER CATEGORY */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="outline-none border rounded-md px-2"
          >
            <option value="">Semua Produk</option>
            {categori.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
            {/* 
            <option value="minuman">Minuman</option>
            <option value="burger">Burger</option> */}
          </select>

          {/* SEARCH */}
          <Input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          >
            Cari data
          </Input>
        </div>

        <Button onClick={() => setIsOpen(true)}>Add Product</Button>
      </div>

      {loading ? (
        <div className="flex flex-wrap gap-4 overflow-y-auto no-scrollbar pb-20">
          {listProduct.map((_, index) => (
            <Loading key={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 overflow-y-auto no-scrollbar pb-20">
          {filteredProduct.length === 0 ? (
            <div className="text-[#cdcdcd] mx-auto">tidak ada data</div>
          ) : (
            filteredProduct.map((item) => (
              <MenuCard2 datas={item} key={item.id} />
            ))
          )}
        </div>
      )}
      <ModalAdd
        title="ADD PRODUCT"
        isOpen={isOpen}
        OnClose={() => setIsOpen(false)}
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
          className="outline-none border p-2 rounded-md"
        >
          <option value="" disabled>
            Kategori
          </option>
          {categori.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}

          {/* <option value="minuman">Minuman</option>
          <option value="burger">Burger</option> */}
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
          Stock
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

        <div className="flex justify-end ">
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

      <div
        className={`fixed left-1/2 -translate-x-1/2 ${
          toastOpen ? "top-4" : "-top-10"
        } transition-all duration-300 px-4 py-2 bg-blue-600 rounded`}
      >
        <p className="text-white">{message}</p>
      </div>
    </div>
  );
};

export default Product;
