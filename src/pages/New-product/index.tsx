import ProductForm from "../../components/ProductForm";
import { NewProductPageContainer } from "./style";
import image from "../../assets/newproduct.png";
import { motion } from "framer-motion";

const NewProductPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NewProductPageContainer>
        <img src={image} alt="Adicionando produto" />
        <ProductForm editing="" />
      </NewProductPageContainer>
    </motion.div>
  );
};
export default NewProductPage;
