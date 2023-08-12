import { ProductNavbar } from "../../components";
import { Container } from "../../components/container/container";
import { ProductTable } from "../../components/product-table/product-table-component";

const ProductListPage = () => {
  return (
    <div>
      <Container>
        <div>
          <ProductNavbar />
        </div>
        <div>
          <ProductTable />
        </div>
      </Container>
    </div>
  );
};

export default ProductListPage;
