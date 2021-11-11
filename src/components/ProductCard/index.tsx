import { Product } from "../../types/product";
import "./style.css";

const ProductCard = ({
  name,
  category,
  productCode,
  productProvider,
  price,
}: Product) => {
  return (
    <div className="cardContainer">
      <p>{name}</p>
      <p>{category}</p>
      <p>{productCode}</p>
      <p>{productProvider}</p>
      <p>{price}</p>
    </div>
  );
};
export default ProductCard;
