import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../providers/ProductsProvider";
import { Product } from "../../types/product";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  TextField,
} from "@mui/material";
import "./style.ts";
import { FormContainer, StyledTextField } from "./style";
const Products = () => {
  const navigate = useNavigate();
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product>();
  const {
    addProduct,
    deleteProduct,
    productsList,
    editProduct,
    // productToEdit,
  } = useProducts();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    productProvider: yup.string().required("Campo obrigatório"),
    productCode: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleNewProduct = (data: Product) => {
    editingProduct && deleteProduct(editingProduct);
    addProduct(data);
  };
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productsList));
  }, [productsList]);
  console.log(productsList);
  console.log(editingProduct);
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
      <Dialog
        onClose={() => setModalEdit(false)}
        open={modalEdit}
        aria-labelledby="customized-dialog-title"
        maxWidth="xs"
      >
        <DialogTitle>Editar produto</DialogTitle>
        <DialogContent dividers>
          <div></div>
          <FormContainer onSubmit={handleSubmit(handleNewProduct)}>
            <StyledTextField
              fullWidth
              variant="outlined"
              label="Nome"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <StyledTextField
              fullWidth
              variant="outlined"
              label="Categoria"
              {...register("category")}
              error={!!errors.category}
              helperText={errors.category?.message}
              defaultValue={
                editingProduct !== undefined ? editingProduct.category : ""
              }
            />
            <StyledTextField
              fullWidth
              variant="outlined"
              label="Código do produto"
              {...register("productCode")}
              error={!!errors.productCode}
              helperText={errors.productCode?.message}
              defaultValue={
                editingProduct !== undefined ? editingProduct.productCode : ""
              }
            />
            <StyledTextField
              fullWidth
              variant="outlined"
              label="Fabricante"
              {...register("productProvider")}
              error={!!errors.productProvider}
              helperText={errors.productProvider?.message}
              defaultValue={
                editingProduct !== undefined
                  ? editingProduct.productProvider
                  : ""
              }
            />
            <StyledTextField
              fullWidth
              variant="outlined"
              label="Preço"
              {...register("price")}
              error={!!errors.price}
              helperText={errors.price?.message}
              defaultValue={
                editingProduct !== undefined ? editingProduct.price : ""
              }
            />
            <DialogActions>
              <Button variant="contained" onClick={() => setModalEdit(false)}>
                Cancelar
              </Button>
              <Button type="submit" variant="contained">
                Enviar
              </Button>
            </DialogActions>
          </FormContainer>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default Products;
