import { useContext, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { userContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { addUser } = useContext(userContext);
  const navigasi = useNavigate();
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(form);

    if (!form.fullname || !form.username || !form.password) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
      return setMessage("isi semua data terlebih dahulu");
    }
    const res = addUser(form);
    // console.log(res);
    if (res) {
      return navigasi("/login");
    }
    // setOpen(true);
    // setMessage(res.message);
    // setTimeout(() => {
    //   setOpen(false);
    // }, 2000);
  };

  return (
    <div className="center">
      <div className="coloms p-5 bg-[#d4e7dc] shadow-white shadow w-100 gap-4 rounded-md">
        <h1 className="text-center text-[1.2rem] text-[#357c4d] font-bold">
          Login
        </h1>
        <p className="text-[0.8rem] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          libero?
        </p>
        <form onSubmit={handlesubmit} action="" className="coloms gap-5">
          <Input
            value={form.fullname}
            name="fullname"
            onChange={handleChange}
            type="text"
            id="fullname"
          >
            Full Name
          </Input>
          <Input
            value={form.username}
            name="username"
            onChange={handleChange}
            type="text"
            id="username"
          >
            Username
          </Input>
          <Input
            value={form.password}
            name="password"
            onChange={handleChange}
            type="password"
            id="password"
          >
            Password
          </Input>

          <div className="w-full row justify-end gap-2">
            <Button type="button" onClick={() => navigasi("/login")}>
              Kembali
            </Button>
            <Button type="submit">Register</Button>
          </div>
        </form>
      </div>
      <div
        className={`fixed ${
          open ? "top-2" : "-top-10"
        } bg-[#d4e7dc] rounded-md border-[#357c4d] border transition-all duration-500 ease-in-out px-2 py-2`}
      >
        <p className="text-[#357c4d] text-[0.9rem] ">{message}</p>
      </div>
    </div>
  );
};

export default Register;
