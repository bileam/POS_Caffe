import { Link } from "react-router-dom";

const Loading = () => {
  return (
    <Link
      to=""
      className="
bg-white rounded-lg    p-3
flex-[1_1_220px]
max-w-[calc(25%-12px)] animate-pulse
"
    >
      <img
        src=""
        className="max-h-27 min-h-26 bg-[#f2f1f5] animate-pulse  w-full object-cover rounded object-center"
      />
      <div className="space-y-1">
        <h1 className="font-bold w-40 h-3 inline-block bg-[#f2f1f5] animate-pulse"></h1>
        <div className="flex justify-between items-center">
          <h1 className="text-[1rem] text-[#357c4d] w-20 h-3 inline-block bg-[#f2f1f5]"></h1>
          <h1 className="text-[1rem] text-[#357c4d] w-25 h-3 inline-block bg-[#f2f1f5]"></h1>
        </div>
        <h1 className="text-[1rem] text-[#357c4d] w-15 h-3 inline-block bg-[#f2f1f5]"></h1>
      </div>
    </Link>
  );
};
export default Loading;
