/* eslint-disable react/prop-types */
export const StockCard = ({ value, text }) => {
  return (
    <div className=" bg-slate-200 p-4 border w-48 rounded-md m-2 shadow-md ">
      <div className=" flex flex-col items-center justify-center ">
        <h2 className=" text-2xl font-bold ">{value}</h2>
        <p className=" text-lg font-medium ">{text}</p>
      </div>
    </div>
  );
};
