/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { inventoryData } from "../staticData/Static-data";
import { sortData } from "../utils/filter";

const inventoryContext = createContext();

export const InventoryContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [filter, setFilter] = useState({
    department: "all",
    lowStock: false,
    sortBy: "name"
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

  const addProduct = (product) => {
    const updateData = [product, ...data];
    setData(updateData);
    localStorage.setItem("data", JSON.stringify(updateData));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setData(data);
    } else {
      setData(inventoryData);
    }
  }, []);

  return (
    <inventoryContext.Provider
      value={{
        data,
        filter,
        setFilter,
        setData,
        tableData,
        addProduct
      }}
    >
      {children}
    </inventoryContext.Provider>
  );
};

export const useInventory = () => useContext(inventoryContext);
