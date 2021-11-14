import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";
import { useProducts } from "../../providers/ProductsProvider";
import { Product } from "../../types/product";

interface ModalDeleteProductProps {
  modalDelete: boolean;
  item: Product;
  setModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalDeleteProduct = ({
  modalDelete,
  setModalDelete,
  item,
}: ModalDeleteProductProps) => {
  const { deleteProduct } = useProducts();

  return (
    <Dialog onClose={() => setModalDelete(false)} open={modalDelete}>
      <DialogTitle>Cuidado!</DialogTitle>
      <DialogContent dividers>
        Você tem certeza que deseja excluir esse produto?
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setModalDelete(false);
          }}
          color="primary"
        >
          Cancelar
        </Button>
        <Button
          onClick={() => {
            toast.success("Produto excluído com sucesso!", {
              onClose: () => {
                deleteProduct(item);
                //     setModalDelete(false);
              },
            });
          }}
          color="primary"
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ModalDeleteProduct;
