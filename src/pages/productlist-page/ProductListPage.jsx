import { ProductNavbar } from "../../components";
import { ProductTable } from "../../components/product-table/product-table-component";

const ProductListPage = () => {
  return (
    <div>
      <div>
        <ProductNavbar />
      </div>
      <div>
        <ProductTable />
      </div>
    </div>
  );
};

export default ProductListPage;
