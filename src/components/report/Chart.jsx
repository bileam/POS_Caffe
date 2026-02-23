import { LineChart } from "@mui/x-charts";

const Chart = () => {
  return (
    <div className="flex flex-col mt-2 ">
      <div>
        <h1>Grafik keuntungan</h1>
      </div>
      <div className="w-[90%] h-[60%]">
        <LineChart
          xAxis={[
            {
              scaleType: "point",
              data: [
                "1 April",
                "2 April",
                "3 April",
                "4 April",
                "5 April",
                "6 April",
                "7 April",
                "8 April",
                "9 April",
                "10 April",
                "11 April",
                "12 April",
                "13 April",
                "14 April",
                "15 April",
                "16 April",
                "17 April",
                "18 April",
                "19 April",
                "20 April",
              ],
              // label: "Tanggal",
            },
          ]}
          series={[
            {
              // label: "Harga (Rp)",
              data: [
                10000, // 1 April
                12000, // naik
                9000, // turun
                13000, // naik
                10000, // turun
                14000, // naik
                10500, // turun
                15000, // naik
                12500, // turun
                9000, // naik
                15500, // turun
                10000, // naik
                15500, // turun
                20000, // naik
                10500, // turun
                5000, // naik
                30500, // turun
                9000, // naik
                2500, // turun
                9000, // naik
              ],
              area: true,
            },
          ]}
          height={300}
        />
      </div>
    </div>
  );
};

export default Chart;
