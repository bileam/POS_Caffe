// utils/aiAssistant.js

export const askAI = (question, ctx) => {
  const q = question.toLowerCase();

  // produk terlaris hari ini
  if (q.includes("produk terlaris hari ini")) {
    const top = ctx.getSortedItemsToday()[0];

    if (!top) {
      return "Belum ada transaksi hari ini.";
    }
    return `Produk terlaris hari ini adalah ${top.name} sebanyak ${top.qty} terjual.`;
  }

  // omzet hari ini
  if (q.includes("omzet hari ini")) {
    const total = ctx.getTotalOmzetToday().toLocaleString("id-ID");

    return `Omzet hari ini adalah Rp ${total}.`;
  }

  // omzet minggu ini
  if (q.includes("omzet minggu ini")) {
    const total = ctx.getTotalOmzetWeek().toLocaleString("id-ID");
    return `Omzet minggu ini adalah Rp ${total}.`;
  }

  // omzet bulan ini
  if (q.includes("omzet bulan ini")) {
    const total = ctx.getTotalOmzetMonth().toLocaleString("id-ID");

    return `Omzet bulan ini adalah Rp ${total}.`;
  }

  // omzet tahun ini
  if (q.includes("omzet tahun ini")) {
    const total = ctx.getTotalOmzetYear().toLocaleString("id-ID");

    return `Omzet tahun ini adalah Rp ${total}.`;
  }

  // jumlah transaksi hari ini
  if (q.includes("transaksi hari ini")) {
    const total = ctx.getTransactionToday();

    return `Jumlah transaksi hari ini adalah ${total}.`;
  }

  // produk paling sering dibeli minggu ini
  if (q.includes("produk terlaris minggu ini")) {
    const top = ctx.getMostBoughtItemsThisWeek()[0];

    if (!top) {
      return "Belum ada transaksi minggu ini.";
    }

    return `Produk terlaris minggu ini adalah ${top.name} sebanyak ${top.qty} terjual.`;
  }

  // produk paling jarang dibeli minggu ini
  if (q.includes("produk paling jarang dibeli")) {
    const item = ctx.getLeastBoughtItemsThisWeek()[0];

    if (!item) {
      return "Belum ada data penjualan minggu ini.";
    }

    return `Produk yang paling jarang dibeli minggu ini adalah ${item.name} dengan ${item.qty} penjualan.`;
  }

  return "Maaf saya belum mengerti pertanyaan itu.";
};
