import { createContext, useEffect, useState } from "react";

export const TransaksiContext = createContext();

export const TransaksiProvider = ({ children }) => {
  // const [ListTransaksi, setTransaksi] = useState([]);
  const [ListTransaksi, setTransaksi] = useState(() => {
    const saved = localStorage.getItem("listTransaksi");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("listTransaksi", JSON.stringify(ListTransaksi));
  }, [ListTransaksi]);

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
      _id: transaksiBaru.id,
    };
  };

  // mencari transaksi berdasarkan id
  const ByIdTransaksi = (transaksiid) => {
    const transaksi = ListTransaksi.find((item) => item.id === transaksiid);
    return transaksi;
  };

  // menghitung jumlah transaksi hari ini
  const getTransactionToday = () => {
    const today = new Date().toLocaleDateString("id-ID");
    return ListTransaksi.filter((item) => item.tanggal === today).length;
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
            image: item.image,
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

  // pendapatan perminggu
  const getWeeklyOmzet = () => {
    const today = new Date();
    const result = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      const label = date.toLocaleDateString("id-ID", { weekday: "short" });
      const tanggal = date.toLocaleDateString("id-ID");
      const total = ListTransaksi.filter(
        (trx) => trx.tanggal === tanggal
      ).reduce((sum, trx) => sum + trx.total, 0);
      result.push({ label, total });
    }
    return result;
  };

  // pendapatan perbulan
  const getMonthlyOmzet = () => {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const result = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const tanggal = date.toLocaleDateString("id-ID");

      const total = ListTransaksi.filter(
        (trx) => trx.tanggal === tanggal
      ).reduce((sum, trx) => sum + trx.total, 0);
      result.push({
        label: day.toString(),
        total,
      });
    }

    return result;
  };

  // pendapatan pertahun
  const getYearlyOmzet = () => {
    const year = new Date().getFullYear();
    const result = [];
    for (let month = 0; month < 12; month++) {
      const label = new Date(year, month).toLocaleDateString("id-ID", {
        month: "short",
      });
      const total = ListTransaksi.filter((trx) => {
        const [day, m, y] = trx.tanggal.split("/");
        return Number(m) - 1 === month && Number(y) === year;
      }).reduce((sum, trx) => sum + trx.total, 0);
      result.push({ label, total });
    }
    return result;
  };

  // menampilkan detail transaksi berdasarkan id
  const transaksiById = (id) => {
    const lastTransaksi = ListTransaksi[ListTransaksi.length - 1];

    return {
      datas: lastTransaksi?.items || [],
      message: "berhasil",
    };
  };

  // clear transaksi
  const clearTransaksi = () => {
    setTransaksi([]);
    localStorage.removeItem("listTransaksi");
  };

  // keuntungan hari ini
  // const getProfitToday = () => {
  //   const tanggalHariINi = new Date().toISOString().slice(0, 10);
  //   let profit = 0;
  // };

  // data chart omzet harian (bulan berjalan)
  const getDailyOmzetThisMonth = () => {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const labels = [];
    const data = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const tanggal = date.toLocaleDateString("id-ID");

      const total = ListTransaksi.filter(
        (trx) => trx.tanggal === tanggal
      ).reduce((sum, trx) => sum + trx.total, 0);

      labels.push(
        `${day} ${date.toLocaleDateString("id-ID", { month: "short" })}`
      );
      data.push(total);
    }

    return { labels, data };
  };

  // report
  const isWithinLast7Days = (trxDate) => {
    const today = new Date();
    const trx = new Date(trxDate.split("/").reverse().join("-"));
    const diffTime = today - trx;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 6;
  };
  // paling sering dibeli munggu ini
  const getMostBoughtItemsThisWeek = () => {
    const itemMap = {};

    ListTransaksi.filter((trx) => isWithinLast7Days(trx.tanggal)).forEach(
      (trx) => {
        trx.items.forEach((item) => {
          if (!itemMap[item.name]) {
            itemMap[item.name] = {
              name: item.name,
              image: item.image,
              qty: 0,
            };
          }
          itemMap[item.name].qty += item.qty;
        });
      }
    );

    return Object.values(itemMap).sort((a, b) => b.qty - a.qty);
  };

  // paling jarng dibeli minggu ini
  const getLeastBoughtItemsThisWeek = () => {
    const itemMap = {};

    ListTransaksi.filter((trx) => isWithinLast7Days(trx.tanggal)).forEach(
      (trx) => {
        trx.items.forEach((item) => {
          if (!itemMap[item.name]) {
            itemMap[item.name] = {
              name: item.name,
              image: item.image,
              qty: 0,
            };
          }
          itemMap[item.name].qty += item.qty;
        });
      }
    );

    return Object.values(itemMap).sort((a, b) => a.qty - b.qty);
  };
  // pendapatan mingguan
  const getTotalOmzetWeek = () => {
    const now = new Date();

    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());

    return ListTransaksi.filter((trx) => {
      const trxDate = new Date(trx.tanggal);
      return trxDate >= startOfWeek && trxDate <= now;
    }).reduce(
      (total, trx) =>
        total + trx.items.reduce((sum, item) => sum + item.price * item.qty, 0),
      0
    );
  };
  // pendapatan bulanan
  const getTotalOmzetMonth = () => {
    const now = new Date();

    return ListTransaksi.filter((trx) => {
      const trxDate = new Date(trx.tanggal);

      return (
        trxDate.getMonth() === now.getMonth() &&
        trxDate.getFullYear() === now.getFullYear()
      );
    }).reduce(
      (total, trx) =>
        total + trx.items.reduce((sum, item) => sum + item.price * item.qty, 0),
      0
    );
  };

  // tahunan
  const getTotalOmzetYear = () => {
    const now = new Date();

    return ListTransaksi.filter((trx) => {
      const trxDate = new Date(trx.tanggal);

      return trxDate.getFullYear() === now.getFullYear();
    }).reduce(
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
        getWeeklyOmzet,
        getMonthlyOmzet,
        ByIdTransaksi,
        transaksiById,
        getDailyOmzetThisMonth,
        getMostBoughtItemsThisWeek,
        getLeastBoughtItemsThisWeek,
        getTransactionToday,
        getTotalOmzetWeek,
        getTotalOmzetMonth,
        getTotalOmzetYear,
      }}
    >
      {children}
    </TransaksiContext.Provider>
  );
};
