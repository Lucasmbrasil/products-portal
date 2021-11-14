import ProductForm from "../../components/ProductForm";
import { NewProductPageContainer } from "./style";
import image from "../../assets/image.png";

const NewProductPage = () => {
  return (
    <>
      <NewProductPageContainer>
        <img src={image} alt="Adicionando produto" />
        <ProductForm editing="" />
      </NewProductPageContainer>
    </>
  );
};
export default NewProductPage;
