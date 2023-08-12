/* eslint-disable react/prop-types */
import styles from "./form.module.css";
const Input = ({ label, type, value, placeholder }) => {
  return (
    <label className={styles.label}>
      {label}:{" "}
      <input
        className=" border border-gray-900 rounded p-1 "
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
};

export const AddProductForm = () => {
  return (
    <div>
      <div className=" w-1/4">
        <label className={styles.label}>
          Department :
          <select className="p-1 focus:outline-none border border-gray-900 rounded  ">
            <option>Select Department</option>
            <option>Kitchen</option>
            <option>Clothing</option>
            <option>Toys</option>
          </select>
        </label>
        <Input label={"Name"} placeholder={"Name"} />
        <label className="text-lg my-1 text-gray-600 flex flex-col ">
          Description :
          <textarea className=" border rounded border-gray-900 "></textarea>
        </label>
        <Input label={"Price"} placeholder={"Price"} />
        <Input label={"Stock"} placeholder={"stock"} />
        <Input label={"SKU"} placeholder={"sku"} />
        <Input label={"Supplier"} placeholder={"supplier"} />
        <Input label={"Delivered"} placeholder={"delivered"} />
        <Input label={"Image URL"} placeholder={"URL"} />
      </div>
    </div>
  );
};
