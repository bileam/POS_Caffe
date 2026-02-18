import { useContext, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { LoginService } from "../Services/LoginService";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const navigasi = useNavigate();
  const { login } = useContext(LoginContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(form);
      const res = LoginService(form);
      login(res.token);
      console.log(res);
      navigasi("/dashboard");
    } catch (error) {
      alert("ada kesalahan");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-5 bg-white shadow shadow-[#357c4d] rounded-md w-100 flex flex-col gap-5">
        <h1 className="text-center text-[1.2rem] text-[#357c4d] font-bold">
          Login
        </h1>
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
            <button className="cursor-pointer text-blue-600">register</button>{" "}
            dulu
          </h1>
          <div className="flex items-center mt-2 justify-center">
            <Button type="submit" className="">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
