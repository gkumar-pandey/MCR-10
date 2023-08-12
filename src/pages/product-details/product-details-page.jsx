import { useParams } from "react-router-dom";
import { useInventory } from "../../context/inventory-context";
import { Container } from "../../components/container/container";

export const ProductDetailsPage = () => {
  const { data } = useInventory();
  const { id } = useParams();

  const product = data.find((ele) => ele.id == id);

  return (
    <div>
      <Container>
        <div>
          <h2 className=" text-3xl font-bold text-gray-800 ">
            {product?.name}
          </h2>
          <img className="w-1/2" src={product?.imageUrl} />
          <p>Price : {product.price} </p>
          <p>Stock : {product.stock} </p>
          <p>Supplier : {product.supplier} </p>
          <p>Department : {product.department}</p>
          <p>SKU : {product.sku}</p>
          <p>Delivered : {product.delivered}</p>
          <p>Description : {product.description}</p>
        </div>
      </Container>
    </div>
  );
};
