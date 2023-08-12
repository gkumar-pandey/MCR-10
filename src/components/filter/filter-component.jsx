import { useInventory } from "../../context/inventory-context";

export const FilterComp = () => {
  const { filter, setFilter } = useInventory();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "lowStock") {
      setFilter((pre) => ({ ...pre, lowStock: !filter.lowStock }));
    } else {
      setFilter((pre) => ({ ...pre, [name]: value }));
    }
  };

  return (
    <div className=" flex flex-row items-center  w-full p-2 gap-4 justify-between ">
      <div>
        <select
          onChange={onChangeHandler}
          defaultValue={"all"}
          name="department"
          value={filter.department}
        >
          <option value={"all"}>All Department</option>
          <option value={"kitchen"}>Kitchen</option>
          <option value={"clothing"}>Clothing</option>
          <option value={"toys"}>Toys</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" name="lowStock" onChange={onChangeHandler} />
          Low Stock Items
        </label>
      </div>
      <div>
        <select name="sortBy" defaultValue={"name"} onChange={onChangeHandler}>
          <option value={"name"}>Name</option>
          <option value={"price"}>Price</option>
          <option value={"stock"}>Stock</option>
        </select>
      </div>
    </div>
  );
};
