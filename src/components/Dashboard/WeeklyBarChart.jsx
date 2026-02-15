import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const WeeklyBarChart = ({ data }) => {
  return (
    <div className="w-full   h-75 sm:h-87.5 md:h-1000 ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip formatter={(value) => `Rp ${value.toLocaleString()}`} />
          <Bar dataKey="total" fill="#357c4d" radius={[6, 6, 0, 0]} />
        </BarChart>
        s
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyBarChart;
