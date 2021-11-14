// import { useEffect } from "react";
// import { useProducts } from "../../providers/ProductsProvider";
import ModalEditProduct from "../../components/ModalEditProduct";
import ProductsListContainer from "../../components/ProductsListContainer";

const Products = () => {
  // const { productsList } = useProducts();

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(productsList));
  // }, [productsList]);

  return (
    <>
      <h1>Produtos cadastrados:</h1>
      <ProductsListContainer />
      <ModalEditProduct />
    </>
  );
};
export default Products;
