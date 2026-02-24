import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const exist = localStorage.getItem("token");
    if (exist) {
      setToken(exist);
    }
    setLoading(false);
  }, []);

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  

  return (
    <LoginContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </LoginContext.Provider>
  );
};
