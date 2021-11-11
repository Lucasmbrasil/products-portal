import { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../providers/ProductsProvider";

const Products = () => {
  const { productsList, editProduct } = useProducts();
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productsList));
  }, [productsList]);

  return (
    <>
      {productsList.map((item) => (
        <div>
          <ProductCard
            name={item.name}
            price={item.price}
            productCode={item.productCode}
            productProvider={item.productProvider}
            category={item.category}
          />
          <button onClick={() => editProduct(item)}>Editar</button>
        </div>
      ))}
    </>
  );
};
export default Products;
