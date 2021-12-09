import { Dialog } from "@mui/material";
import {
  // ProductEditContainer,
  StyledDialogContent,
  StyledDialogTitle,
} from "../../components/ModalEditProduct/style";
import { useProducts } from "../../providers/ProductsProvider";
import "react-toastify/dist/ReactToastify.css";
import ProductForm from "../ProductForm";

const ModalEditProduct = () => {
  const { modalEdit, setModalEdit } = useProducts();

  return (
    <>
      <Dialog
        onClose={() => setModalEdit(false)}
        open={modalEdit}
        aria-labelledby="customized-dialog-title"
        maxWidth="lg"
      >
        <StyledDialogTitle>Editar produto</StyledDialogTitle>
        <StyledDialogContent dividers>
          {/* <ProductEditContainer>
            <h2>Dados atuais:</h2>
            {editingProduct !== undefined && (
              <>
                <p>Nome: {editingProduct!.name}</p>
                <p>Categoria: {editingProduct!.category}</p>
                <p>Código do produto: {editingProduct!.productCode}</p>
                <p>Fabricante: {editingProduct!.productProvider}</p>
                <p>Preço: {editingProduct!.price}</p>
              </>
            )}
          </ProductEditContainer> */}
          <ProductForm editing="edit" />
        </StyledDialogContent>
      </Dialog>
    </>
  );
};
export default ModalEditProduct;
