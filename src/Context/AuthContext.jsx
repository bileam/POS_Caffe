import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const exist = localStorage.getItem("token");
    if (exist) {
      return setToken(exist);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <LoginContext.Provider value={{ token, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
