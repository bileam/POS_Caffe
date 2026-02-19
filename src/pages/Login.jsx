import { useContext, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { LoginService } from "../Services/LoginService";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/AuthContext";
import person from "../assets/personal01.jpg";
import { userContext } from "../Context/UserContext";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [mess, setMess] = useState("");
  const [open, setOpen] = useState(false);
  const { listUser, addUser, removeALl, LoginUser } = useContext(userContext);
  const navigasi = useNavigate();

  const { login } = useContext(LoginContext);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const result = LoginUser(form);
      if (!result?.status) {
        // console.log(result?.message || "Login gagal");
        setMess(result.message);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 2000);
        return;
      }

      // simpan token (atau user) ke auth context
      login(result.token);
      // console.log("Token:", result.token);
      navigasi("/dashboard");
    } catch (error) {
      // console.error(error);
      setMess("Terjadi kesalahan saat login");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  };

  return (
    <div className="h-screen bg-[#357c4d] flex items-center justify-center">
      <div className="p-5 bg-[#d4e7dc] border border-[#357c4d] shadow shadow-[#357c4d] rounded-md w-100 flex flex-col gap-5">
        <h1 className="text-center text-[1.2rem] text-[#357c4d] font-bold">
          Login
        </h1>
        <div className="flex justify-center text-[0.9rem] flex-col gap-2 items-center ">
          {/* <img src={person} alt="" className="w-20 object-cover rounded-full" /> */}
          <h1 className="flex-wrap text-center">
            hallo Admin lor Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
          </h1>
        </div>
        <form onSubmit={handleSubmit} action="" className="  ">
          <div className="flex flex-col gap-4">
            <Input
              name="username"
              value={form.username}
              onChange={handleChange}
              id="username"
              type="text"
            >
              Username
            </Input>
            <Input
              name="password"
              value={form.password}
              onChange={handleChange}
              id="password"
              type="password"
            >
              Password
            </Input>
          </div>
          {/* <h1 className="text-[0.8rem]">lupa password?</h1> */}
          <h1 className="text-[0.8rem]">
            Belum punya akun?{" "}
            <button
              type="button"
              onClick={() => navigasi("/register")}
              className="cursor-pointer text-blue-600"
            >
              register
            </button>{" "}
              dulu
          </h1>
          <div className="flex items-center mt-2 justify-center">
            <Button type="submit" className="">
              Sign in
            </Button>
          </div>
        </form>
      </div>
      <div
        className={`fixed ${
          open ? "top-2" : "-top-10"
        } bg-[#d4e7dc] rounded-md border-[#357c4d] border transition-all duration-500 ease-in-out px-2 py-2`}
      >
        <p className="text-[#357c4d] text-[0.9rem] ">{mess}</p>
      </div>
    </div>
  );
};

export default Login;
