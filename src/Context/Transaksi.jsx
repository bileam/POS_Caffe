import { createContext, useState } from "react";

export const TransaksiContext = createContext();

export const TransaksiProvider = ({ children }) => {
  const [ListTransaksi, setTransaksi] = useState([]);

  const addTransaksi = ({ namaPemesan, items }) => {
    const now = new Date();
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const transaksiBaru = {
      id: Date.now(),
      namaPemesan,
      tanggal: now.toLocaleDateString("id-ID"),
      jam: now.toLocaleTimeString("id-ID"),
      total,
      items,
    };
    setTransaksi((prev) => [...prev, transaksiBaru]);
    return {
      message: "Transaksi berhasil",
      status: 200,
    };
  };

  // menghitung yang paling banyak dibeli hari ini
  const getSortedItemsToday = () => {
    const today = new Date().toLocaleDateString("id-ID");
    // 1️ Filter transaksi hari ini
    const todayTransactions = ListTransaksi.filter(
      (trx) => trx.tanggal === today
    );
    // 2️ Hitung total qty per item
    const itemMap = {};
    todayTransactions.forEach((trx) => {
      trx.items.forEach((item) => {
        if (!itemMap[item.name]) {
          itemMap[item.name] = {
            name: item.name,
            qty: 0,
          };
        }
        itemMap[item.name].qty += item.qty;
      });
    });
    // 3️ Ubah object ke array
    const result = Object.values(itemMap);
    // 4️ Urutkan dari paling banyak → sedikit
    result.sort((a, b) => b.qty - a.qty);
    return result;
  };

  // jumlah item terjual hari ini
  const getTotalItemsSoldToday = () => {
    const today = new Date().toLocaleDateString("id-ID");
    return ListTransaksi.filter((trx) => trx.tanggal === today).reduce(
      (total, trx) =>
        total + trx.items.reduce((sum, item) => sum + item.qty, 0),
      0
    );
  };

  // omsethari ini
  const getTotalOmzetToday = () => {
    const today = new Date().toLocaleDateString("id-ID");
    return ListTransaksi.filter((trx) => trx.tanggal === today).reduce(
      (total, trx) =>
        total + trx.items.reduce((sum, item) => sum + item.price * item.qty, 0),
      0
    );
  };

  return (
    <TransaksiContext.Provider
      value={{
        getSortedItemsToday,
        ListTransaksi,
        addTransaksi,
        getTotalItemsSoldToday,
        getTotalOmzetToday,
      }}
    >
      {children}
    </TransaksiContext.Provider>
  );
};
