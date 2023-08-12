import { StockCard } from "../../components";
import { useInventory } from "../../context/inventory-context";

const DashboardPage = () => {
  const { data } = useInventory();
  const totalStock = data.reduce((acc, curr) => acc + curr.stock, 0);

  const totalDelivered = data.reduce((acc, curr) => acc + curr.delivered, 0);

  const totalLowStock = data.reduce(
    (acc, curr) => (curr.stock <= 10 ? acc + 1 : acc),
    0
  );
  return (
    <div className=" flex flex-row p-4 ">
      <StockCard value={totalStock} text={"Total Stock"} />
      <StockCard value={totalDelivered} text={"Total Delivered"} />
      <StockCard value={totalLowStock} text={"Low Stock Items"} />
    </div>
  );
};

export default DashboardPage;
