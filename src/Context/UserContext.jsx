import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [listUser, setListUser] = useState(() => {
    const saved = localStorage.getItem("listUser");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("listUser", JSON.stringify(listUser));
  }, [listUser]);

  // REGISTER USER
  const addUser = (form) => {
    const token = Date.now().toString(); // ✅ STRING

    setListUser((prev) => [
      ...prev,
      {
        id: Date.now(),
        fullname: form.fullname,
        username: form.username,
        password: form.password,
        token,
      },
    ]);

    return {
      status: true,
      message: "User berhasil ditambahkan",
      token,
    };
  };

  // LOGIN USER
  const LoginUser = (datas) => {
    const user = listUser.find(
      (item) =>
        item.username === datas.username && item.password === datas.password
    );

    if (!user) {
      return {
        status: false,
        message: "Username atau password salah",
      };
    }

    return {
      status: true,
      token: user.token,
      user,
    };
  };

  // AMBIL USER BERDASARKAN TOKEN
  const DataByToken = (token) => {
    if (!token) return null;
    return listUser.find((item) => item.token === token) || null;
  };

  const removeAll = () => {
    setListUser([]);
    localStorage.removeItem("listUser");
  };

  return (
    <UserContext.Provider
      value={{ listUser, addUser, LoginUser, DataByToken, removeAll }}
    >
      {children}
    </UserContext.Provider>
  );
};
