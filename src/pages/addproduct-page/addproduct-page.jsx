import { AddProductForm } from "../../components/add-product-form/add-product-form";
import { Container } from "../../components/container/container";

export const AddProductPage = () => {
  return (
    <div>
      <Container>
        <div className="text-2xl font-bold ">
          <h1>Add New Product</h1>
        </div>
        <AddProductForm />
      </Container>
    </div>
  );
};
