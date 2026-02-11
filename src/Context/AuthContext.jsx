import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const logintoken = (kodeToken) => {
    localStorage.setItem("token", token);
    setToken(kodeToken);
  };

  useEffect(() => {
    const storeted = localStorage.getItem("token");
    if (storeted) {
      setToken(storeted);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <LoginContext.Provider value={(token, logintoken, logout)}>
      {children}
    </LoginContext.Provider>
  );
};
