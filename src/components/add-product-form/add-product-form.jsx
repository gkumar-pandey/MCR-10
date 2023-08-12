/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./form.module.css";
import { useInventory } from "../../context/inventory-context";
const Input = ({ label, type, value, placeholder, onChange, name }) => {
  return (
    <label className={styles.label}>
      {label}:{" "}
      <input
        className=" border border-gray-900 rounded py-1 px-2 "
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </label>
  );
};

export const AddProductForm = () => {
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: "0",
    imageUrl: ""
  });
  const { addProduct } = useInventory();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const onSubmitHandler = () => {
    addProduct(formData);
  };

  console.log(formData);

  return (
    <div>
      <div className=" w-1/4">
        <label className={styles.label}>
          Department :
          <select
            name="department"
            value={formData.department}
            onChange={onChangeHandler}
            className="p-1 focus:outline-none border border-gray-900 rounded  "
          >
            <option>Select Department</option>
            <option>Kitchen</option>
            <option>Clothing</option>
            <option>Toys</option>
          </select>
        </label>
        <Input
          label={"Name"}
          placeholder={"Name"}
          value={formData.name}
          name={"name"}
          onChange={onChangeHandler}
        />
        <label className="text-lg my-1 text-gray-600 flex flex-col ">
          Description :
          <textarea
            value={formData.description}
            onChange={onChangeHandler}
            className=" border rounded border-gray-900 px-2 py-1 "
            name="description"
          ></textarea>
        </label>
        <Input
          onChange={onChangeHandler}
          label={"Price"}
          type={"number"}
          placeholder={"Price"}
          value={formData.price}
          name={"price"}
        />
        <Input
          onChange={onChangeHandler}
          label={"Stock"}
          placeholder={"stock"}
          value={formData.stock}
          name={"stock"}
        />
        <Input
          onChange={onChangeHandler}
          label={"SKU"}
          placeholder={"sku"}
          value={formData.sku}
          name={"sku"}
        />
        <Input
          label={"Supplier"}
          placeholder={"supplier"}
          value={formData.supplier}
          onChange={onChangeHandler}
          name={"supplier"}
        />
        <Input
          label={"Delivered"}
          type={"number"}
          placeholder={"delivered"}
          value={formData.delivered}
          onChange={onChangeHandler}
          name={"delivered"}
        />
        <Input
          label={"Image URL"}
          placeholder={"URL"}
          value={formData.imageUrl}
          onChange={onChangeHandler}
          name={"imageUrl"}
        />
        <button
          onClick={onSubmitHandler}
          className="py-1 px-3 rounded text-lg my-2 bg-blue-700 text-white font-medium "
        >
          Add Product
        </button>
      </div>
    </div>
  );
};
