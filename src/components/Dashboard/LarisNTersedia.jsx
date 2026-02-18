import gambar from "../../assets/DummyMenu/gambar_7.jpeg";
const LarisNTersedia = ({ img, index, dataName, dataItem }) => {
  return (
    <div className="flex  gap-3  p-2 rounded-md  shadow shadow-[#d4e7dc] border border-[#357c4d]">
      <h1 className="p-2 my-auto rounded-full bg-[#d4e7dc] font-bold ">
        {index + 1 || 0}
      </h1>

      <div className="flex gap-2">
        <img src={img} alt="" className="object-cover w-15 h-15 rounded-md" />
        <div className="flex  flex-col ">
          <h1 className="text-[1.2rem]  ">{dataName}</h1>
          <h1 className="text-[0.8rem]">{dataItem} / items</h1>
        </div>
      </div>
    </div>
  );
};

export default LarisNTersedia;
