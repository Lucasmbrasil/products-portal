import { MenuItem, Select, FormControl } from "@mui/material";
import { useState } from "react";
import { useProducts } from "../../providers/ProductsProvider";
import { Product } from "../../types/product";
import ProductCard from "../ProductCard";
import { MainContainer, OrderingDiv, ProductsContainer } from "./style";

const ProductsListContainer = () => {
  const { productsList, setModalEdit, setEditingProduct } = useProducts();
  const [ordering, setOrdering] = useState<string>("name+");
  console.log(ordering);
  return (
    <MainContainer>
      {/* Container da caixa de seleção*/}
      <OrderingDiv>
        <p>Ordenar por:</p>
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={ordering}
            onChange={(e) => setOrdering(e.target.value)}
          >
            <MenuItem value="name+">Nome (a-z)</MenuItem>
            <MenuItem value="name-">Nome (z-a)</MenuItem>
            <MenuItem value="price-">Menor preço</MenuItem>
            <MenuItem value="price+">Maior preço</MenuItem>
            <MenuItem value="productCode-">
              Código do produto (menor ao maior)
            </MenuItem>
            <MenuItem value="productCode+">
              Código do produto (maior ao menor)
            </MenuItem>
            <MenuItem value="productProvider+">Fabricante (a-z)</MenuItem>
            <MenuItem value="productProvider-">Fabricante (z-a)</MenuItem>
          </Select>
        </FormControl>
      </OrderingDiv>
      {/* Container com a lista de produtos de acordo com a ordenação escolhida */}
      <ProductsContainer>
        {productsList
          .sort((a, b) =>
            ordering === "name+"
              ? a.name.toLowerCase() < b.name.toLowerCase()
                ? -1
                : 1
              : ordering === "name-"
              ? b.name.toLowerCase() < a.name.toLowerCase()
                ? -1
                : 1
              : ordering === "price-"
              ? // Turning string price into number to use sort method

                a.price.includes(",")
                ? Number(a.price.slice(0, -3).replace(/[^0-9]/g, ""))
                : Number(a.price.replace(/[^0-9]/g, "")) -
                  (b.price.includes(",")
                    ? Number(b.price.slice(0, -3).replace(/[^0-9]/g, ""))
                    : Number(b.price.replace(/[^0-9]/g, "")))
              : ordering === "price+"
              ? b.price.includes(",")
                ? Number(b.price.slice(0, -3).replace(/[^0-9]/g, ""))
                : Number(b.price.replace(/[^0-9]/g, "")) -
                  (a.price.includes(",")
                    ? Number(a.price.slice(0, -3).replace(/[^0-9]/g, ""))
                    : Number(a.price.replace(/[^0-9]/g, "")))
              : ordering === "productCode-"
              ? a.productCode - b.productCode
              : ordering === "productCode+"
              ? b.productCode - a.productCode
              : ordering === "productProvider+"
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
            <div key={item.productCode}>
              <ProductCard item={item} />
              <button
                onClick={() => {
                  setModalEdit(true);
                  setEditingProduct(item);
                }}
              >
                Editar
              </button>
            </div>
          ))}
      </ProductsContainer>
    </MainContainer>
  );
};

export default ProductsListContainer;
