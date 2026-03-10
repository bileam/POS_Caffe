// utils/aiAssistant.js

export const askAI = (question, ctx) => {
  const q = question.toLowerCase();

  if (q.includes("hallo") || q.includes("hai") || q.includes("kamu siapa?")) {
    return `hallo saya ai kasir Caffe ada yang bisa saya bantu?`;
  }
  // produk terlaris hari ini
  if (q.includes("produk terlaris hari ini")) {
    const top = ctx.getSortedItemsToday()[0];

    if (!top) {
      return "Belum ada transaksi hari ini.";
    }
    return `Produk terlaris hari ini adalah ${top.name} sebanyak ${top.qty} terjual.`;
  }

  // omzet hari ini
  if (q.includes("pendapatan hari ini") || q.includes("omzet hari ini")) {
    const total = ctx.getTotalOmzetToday().toLocaleString("id-ID");

    return `Omzet hari ini adalah Rp ${total}.`;
  }

  // omzet minggu ini
  if (q.includes("omzet minggu ini") || q.includes("omset minggu ini")) {
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

  if (q.includes("terimakasih") || q.includes("terima kasih")) {
    return "sama sama bro";
  }

  if (q.includes("ok") || q.includes("okey")) {
    return "ada yang bisa dibantu lagi?";
  }

  if (q.includes("transaksi hari ini")) {
    // jumlah transaksi hari ini
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
    const items = ctx.getLeastBoughtItemsThisWeek().slice(0, 5);

    if (!items) {
      return "Belum ada data penjualan minggu ini.";
    }

    return `Produk yang paling jarang dibeli minggu ini adalah:\n${items
      .map((item) => `- ${item.name} (${item.qty} penjualan)`)
      .join("\n")}`;
  }

  if (q.includes("capek")) {
    return "yang semangat ya, kerja keras tidak pernah menghianati hasil kokk";
  }

  if (q.includes("jam berapa")) {
    const jam = new Date().toLocaleTimeString("id-ID");
    return `sekarang pukul ${jam}. yang semangat yaaaaa bre`;
  }
  if (q.includes("pulang") || q.includes("jam pulang")) {
    const sekarang = new Date();

    const jamSekarang = sekarang.getHours();
    const menitSekarang = sekarang.getMinutes();

    const target = new Date();
    target.setHours(17, 0, 0, 0); // 17:00

    const selisihMs = target - sekarang;

    if (selisihMs <= 0) {
      return "Jam pulang adalah pukul 17.00. Sekarang sudah lewat jam pulang.";
    }

    const selisihJam = Math.floor(selisihMs / (1000 * 60 * 60));
    const selisihMenit = Math.floor(
      (selisihMs % (1000 * 60 * 60)) / (1000 * 60)
    );

    return `Jam pulang adalah pukul 17.00. Masih ${selisihJam} jam ${selisihMenit} menit lagi.`;
  }

  return "Maaf saya belum mengerti pertanyaan itu.";
};
