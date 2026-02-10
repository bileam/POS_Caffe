import { createContext, useState } from "react";

export const TransaksiContext = createContext();

export const TransaksiProvider = ({ children }) => {
  const [ListTransaksi, setTransaksi] = useState([]);
  return (
    <TransaksiContext.Provider value={{ ListTransaksi }}>
      {children}
    </TransaksiContext.Provider>
  );
};
