import { Link } from "react-router-dom";
import { useInventory } from "../../context/inventory-context";

export const ProductTable = () => {
  const { tableData } = useInventory();
  return (
    <div>
      <div>
        <table className=" border ">
          <thead className=" bg-slate-200">
            <tr>
              <th className=" p-3 ">Image</th>
              <th className=" p-3 ">Name</th>
              <th className=" p-3">Description</th>
              <th className=" p-3">Price</th>
              <th className=" p-3">Stock</th>
              <th className=" p-3 ">Supplier</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id} className=" border">
                <td>
                  <img
                    className="w-40 h-40 object-cover "
                    src={item.imageUrl}
                  />
                </td>
                <td>
                  <Link to={`/products/${item.id}`}>
                    <p>{item.name}</p>
                  </Link>
                </td>
                <td>
                  <p>{item.description}</p>
                </td>
                <td>
                  <p>{item.price}</p>
                </td>
                <td>
                  <p>{item.stock}</p>
                </td>
                <td>
                  <p>{item.supplier}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
