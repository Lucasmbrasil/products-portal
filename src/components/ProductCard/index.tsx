import { ProductCardProps } from "../../types/product";

import { ProductContainer } from "./style";

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <ProductContainer>
      <h3>Nome: {item.name}</h3>
      <p>Categoria: {item.category}</p>
      <p>Código do produto: {item.productCode}</p>
      <p>Fabricante: {item.productProvider}</p>
      <p>Preço: {item.price}</p>
    </ProductContainer>
  );
};
export default ProductCard;
