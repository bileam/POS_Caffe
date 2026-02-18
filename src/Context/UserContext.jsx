import { createContext, useEffect, useState } from "react";

export const userContext = createContext();
export const UserProvider = ({ children }) => {
  //   const [listUser, setUser] = useState([]);
  const [listUser, setUser] = useState(() => {
    const saved = localStorage.getItem("listUser");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("listUser", JSON.stringify(listUser));
  }, [listUser]);

  const addUser = (form) => {
    setUser((prev) => [...prev, { ...form, id: Date.now() }]);
  };

  const LoginUser = (datas) => {
    const user = listUser.find(
      (item) => item.username === datas.username && item.password === password
    );

    if (!user) {
      return {
        statusCode: 401,
        message: "username dan password salah",
        status: false,
      };
    }
    return { statusCode: 200, message: "berhasil login", status: true, user };
  };

  const removeALl = () => {
    setUser([]);
    localStorage.removeItem("listUser");
  };

  return (
    <userContext.Provider value={{ listUser, addUser, removeALl }}>
      {children}
    </userContext.Provider>
  );
};
