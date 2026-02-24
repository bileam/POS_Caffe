import { useContext, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/AuthContext";

const Register = () => {
  const { addUser } = useContext(UserContext);
  const navigasi = useNavigate();
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    password: "",
  });
  const { login } = useContext(LoginContext);

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
    login(res.token);
    // console.log(res);
    if (res) {
      return navigasi("/dashboard");
    }
    // setOpen(true);
    // setMessage(res.message);
    // setTimeout(() => {
    //   setOpen(false);
    // }, 2000);
  };

  return (
    <div className="center h-screen bg-[#357c4d] flex items-center justify-center">
      <div className="coloms p-5 bg-[#d4e7dc] shadow-white shadow w-100 gap-4 flex flex-col rounded-md ">
        <h1 className="text-center text-[1.2rem] text-[#357c4d] font-bold">
          Login
        </h1>
        {/* <p className="text-[0.8rem] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          libero?
        </p> */}
        <form
          onSubmit={handlesubmit}
          action=""
          className="coloms flex flex-col gap-5"
        >
          <Input
            value={form.fullname}
            name="fullname"
            className="bg-white border-white"
            onChange={handleChange}
            type="text"
            id="fullname"
          >
            Full Name
          </Input>
          <Input
            value={form.username}
            name="username"
            className="bg-white border-white"
            onChange={handleChange}
            type="text"
            id="username"
          >
            Username
          </Input>
          <Input
            value={form.password}
            name="password"
            className="bg-white border-white"
            onChange={handleChange}
            type="password"
            id="password"
          >
            Password
          </Input>

          <div className="w-full flex flex-col justify-center items-center gap-1">
            {/* <Button type="button" onClick={() => navigasi("/login")}>
              Kembali
            </Button> */}
            {/* <Button type="submit">Register</Button> */}
            <button
              type="submit"
              className="py-2 px-8 text-[0.8rem] w-[80%] bg-green-800 hover:bg-green-900 transition duration-500 active:scale-95 rounded-lg text-white"
            >
              Register
            </button>
            <h1 className="text-[0.8rem]">
              sudah punya akun?{" "}
              <button type="button" className="text-green-900 cursor-pointer">
                {" "}
                Sign IN
              </button>
            </h1>
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
