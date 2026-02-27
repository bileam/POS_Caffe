import { LineChart } from "@mui/x-charts";
import { TransaksiContext } from "../../Context/Transaksi";
import { useContext } from "react";

const Chart = () => {
  const { getDailyOmzetThisMonth } = useContext(TransaksiContext);
  const { labels, data } = getDailyOmzetThisMonth();
  console.log(getDailyOmzetThisMonth);
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
              data: labels,
            },
          ]}
          series={[
            {
              data,
              color: "#00982a",
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
