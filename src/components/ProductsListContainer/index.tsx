import { useState } from "react";
import { useProducts } from "../../providers/ProductsProvider";
import { Product } from "../../types/product";
import NotFound from "../NotFound";
import ProductCard from "../ProductCard";
import SearchBar from "../SearchBar";
import SelectOrder from "../SelectOrder";
import { MainContainer, ProductsContainer } from "./style";

const ProductsListContainer = () => {
  const { productsList } = useProducts();
  const [ordering, setOrdering] = useState<string>(" ");
  const [userInput, setUserInput] = useState<string>("");
  const [filteredList, setFilteredList] = useState<Product[]>([]);
  const [notFound, setNotFound] = useState<boolean>(false);

  const priceStringToNumber = (a: string) => {
    let numberA = "";
    if (a.includes(",")) {
      let replacingA = a.replace(/[^0-9]/g, "");
      numberA = `${replacingA.slice(0, -2)}.${replacingA.slice(-2)}`;
    } else {
      numberA = a.replace(/[^0-9]/g, "");
    }
    return Number(numberA);
  };
  return (
    <MainContainer>
      <h1>Produtos cadastrados:</h1>
      <SearchBar
        setUserInput={setUserInput}
        setNotFound={setNotFound}
        setFilteredList={setFilteredList}
      />
      {/* Container da caixa de seleção*/}
      <SelectOrder ordering={ordering} setOrdering={setOrdering} />
      {/* Container com a lista de produtos de acordo com a ordenação escolhida */}
      {notFound ? (
        <NotFound />
      ) : (
        <ProductsContainer>
          {(userInput.length > 0 ? filteredList : productsList)
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
                ? priceStringToNumber(a.price) - priceStringToNumber(b.price)
                : ordering === "Maior preço"
                ? priceStringToNumber(b.price) - priceStringToNumber(a.price)
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
            .map((item: Product) => (
              <ProductCard item={item} key={item.productCode} />
            ))}
        </ProductsContainer>
      )}
    </MainContainer>
  );
};

export default ProductsListContainer;
