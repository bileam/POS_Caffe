import { createContext, useState } from "react";

export const userContext = createContext();
export const UserProvider = ({ children }) => {
  const [listUser, setUser] = useState([]);
  return (
    <userContext.Provider value={{ listUser }}>{children}</userContext.Provider>
  );
};
