import { useState } from "react";
import { useProducts } from "../../providers/ProductsProvider";
import { Product } from "../../types/product";
import ProductCard from "../ProductCard";
import SelectOrder from "../SelectOrder";
import { MainContainer, ProductsContainer } from "./style";

const ProductsListContainer = () => {
  const { productsList } = useProducts();
  const [ordering, setOrdering] = useState<string>("a");
  console.log(ordering);
  return (
    <MainContainer>
      {/* Container da caixa de seleção*/}
      <SelectOrder ordering={ordering} setOrdering={setOrdering} />
      {/* Container com a lista de produtos de acordo com a ordenação escolhida */}
      <ProductsContainer>
        {productsList
          .sort((a, b) =>
            ordering === "Nome (a-z)"
              ? a.name.toLowerCase() < b.name.toLowerCase()
                ? -1
                : 1
              : ordering === "Nome (z-a)"
              ? b.name.toLowerCase() < a.name.toLowerCase()
                ? -1
                : 1
              : ordering === "Menor preço"
              ? // Turning string price into number to use sort method

                a.price.includes(",")
                ? Number(a.price.slice(0, -3).replace(/[^0-9]/g, ""))
                : Number(a.price.replace(/[^0-9]/g, "")) -
                  (b.price.includes(",")
                    ? Number(b.price.slice(0, -3).replace(/[^0-9]/g, ""))
                    : Number(b.price.replace(/[^0-9]/g, "")))
              : ordering === "Maior preço"
              ? b.price.includes(",")
                ? Number(b.price.slice(0, -3).replace(/[^0-9]/g, ""))
                : Number(b.price.replace(/[^0-9]/g, "")) -
                  (a.price.includes(",")
                    ? Number(a.price.slice(0, -3).replace(/[^0-9]/g, ""))
                    : Number(a.price.replace(/[^0-9]/g, "")))
              : ordering === "Código do produto (menor ao maior)"
              ? a.productCode - b.productCode
              : ordering === "Código do produto (maior ao menor)"
              ? b.productCode - a.productCode
              : ordering === "Fabricante (a-z)"
              ? a.productProvider.toLowerCase() <
                b.productProvider.toLowerCase()
                ? -1
                : 1
              : b.productProvider.toLowerCase() <
                a.productProvider.toLowerCase()
              ? -1
              : 1
          )
          .map((item: Product, index) => (
            <ProductCard item={item} key={item.productCode} />
          ))}
      </ProductsContainer>
    </MainContainer>
  );
};

export default ProductsListContainer;
