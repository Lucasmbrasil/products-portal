import { motion } from "framer-motion";
import ModalEditProduct from "../../components/ModalEditProduct";
import ProductsListContainer from "../../components/ProductsListContainer";

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProductsListContainer />
      <ModalEditProduct />
    </motion.div>
  );
};
export default Products;
