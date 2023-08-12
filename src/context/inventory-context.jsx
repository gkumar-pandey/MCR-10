/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { inventoryData } from "../staticData/Static-data";
import { sortData } from "../utils/filter";

const inventoryContext = createContext();

export const InventoryContextProvider = ({ children }) => {
  const [data, setData] = useState(inventoryData);
  const [filter, setFilter] = useState({
    department: "all",
    lowStock: false,
    sortBy: ""
  });

  const filterData = (data) => {
    let filteredArr = [...data];

    if (filter.department !== "all") {
      filteredArr = filteredArr.filter(
        (item) =>
          item.department.toLowerCase() === filter.department.toLowerCase()
      );
    }

    if (filter.lowStock) {
      filteredArr = filteredArr.filter((item) => item.stock <= 10);
    }

    if (filter.sortBy) {
      filteredArr = sortData(filteredArr, filter.sortBy);
    }

    return filteredArr;
  };

  const tableData = filterData(data);

  return (
    <inventoryContext.Provider
      value={{
        data,
        filter,
        setFilter,
        setData,
        tableData
      }}
    >
      {children}
    </inventoryContext.Provider>
  );
};

export const useInventory = () => useContext(inventoryContext);
