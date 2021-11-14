import { FormContainer, StyledTextField } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EditingProps, Product } from "../../types/product";
import { useProducts } from "../../providers/ProductsProvider";
import { toast } from "react-toastify";
import { Button, DialogActions } from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";
import NumberFormat from "react-number-format";

const ProductForm = ({ editing }: EditingProps) => {
  const [price, setPrice] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const { editProduct, setModalEdit, productsList, addProduct } = useProducts();
  const [disable, setDisable] = useState<boolean>(false);

  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    productProvider: yup.string().required("Campo obrigatório"),
    productCode: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleEditProduct = (data: Product) => {
    const isEqual = productsList.find(
      (produto) => produto.productProvider === data.productProvider
    );

    if (isEqual !== undefined) {
      toast.error("Produto de mesmo código já cadastrado!");
    } else if (error === false) {
      data["price"] = price;
      setDisable(true);
      editProduct(data);

      toast.success("Produto cadastrado com sucesso!", {
        onClose: () => {
          setModalEdit(false);
          setDisable(false);
        },
      });
    }
  };
  const handleNewProduct = (data: Product) => {
    const isEqual = productsList.find(
      (produto) => produto.productCode === data.productCode
    );
    if (isEqual !== undefined) {
      toast.error("Produto de mesmo código já cadastrado!");
    } else if (error === false) {
      setDisable(true);
      addProduct(data, price);
      toast.success("Produto cadastrado com sucesso!", {
        onClose: () => {
          navigate("/products");
          setDisable(false);
        },
      });
    }
  };

  return (
    <FormContainer
      onSubmit={
        editing === "edit"
          ? handleSubmit(handleEditProduct)
          : handleSubmit(handleNewProduct)
      }
    >
      {editing === "edit" ? (
        <h2>Editar produto</h2>
      ) : (
        <h2>Cadastrar produto</h2>
      )}
      <StyledTextField
        id="id"
        fullWidth
        inputProps={{ style: { fontFamily: "'Dosis',sans-serif" } }}
        InputLabelProps={{ style: { fontFamily: "'Dosis',sans-serif" } }}
        variant="outlined"
        label={editing === "edit" ? "Novo nome" : "Nome"}
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <StyledTextField
        fullWidth
        inputProps={{ style: { fontFamily: "'Dosis',sans-serif" } }}
        InputLabelProps={{ style: { fontFamily: "'Dosis',sans-serif" } }}
        variant="outlined"
        label={editing === "edit" ? "Nova categoria" : "Categoria"}
        {...register("category")}
        error={!!errors.category}
        helperText={errors.category?.message}
      />
      <StyledTextField
        fullWidth
        inputProps={{ style: { fontFamily: "'Dosis',sans-serif" } }}
        InputLabelProps={{ style: { fontFamily: "'Dosis',sans-serif" } }}
        variant="outlined"
        label={
          editing === "edit" ? "Novo código do produto" : "Código do produto"
        }
        {...register("productCode")}
        error={!!errors.productCode}
        helperText={errors.productCode?.message}
      />
      <StyledTextField
        variant="outlined"
        fullWidth
        inputProps={{ style: { fontFamily: "'Dosis',sans-serif" } }}
        InputLabelProps={{ style: { fontFamily: "'Dosis',sans-serif" } }}
        label={editing === "edit" ? "Novo fabricante" : "Fabricante"}
        {...register("productProvider")}
        error={!!errors.productProvider}
        helperText={errors.productProvider?.message}
      />
      <NumberFormat
        fullWidth
        inputProps={{ style: { fontFamily: "'Dosis',sans-serif" } }}
        InputLabelProps={{ style: { fontFamily: "'Dosis',sans-serif" } }}
        label={editing === "edit" ? "Novo preço" : "Preço"}
        thousandsGroupStyle="thousand"
        prefix="R$"
        decimalSeparator=","
        displayType="input"
        customInput={StyledTextField}
        value={price}
        error={error}
        helperText={error && "Campo obrigatório"}
        type="text"
        onChange={(e) => {
          setPrice(e.target.value);
          setError(false);
        }}
        thousandSeparator="."
        allowNegative={false}
        decimalScale={2}
        fixedDecimalScale={false}
        isNumericString={false}
      />
      <DialogActions>
        {editing === "edit" ? (
          <>
            <Button
              variant="contained"
              onClick={() => {
                editing === "edit" && setModalEdit(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={disable}
              onClick={() => {
                price.length < 1 && setError(true);
              }}
            >
              Enviar
            </Button>
          </>
        ) : (
          <Button
            type="submit"
            variant="contained"
            disabled={disable}
            onClick={() => price.length < 1 && setError(true)}
          >
            Enviar
          </Button>
        )}
      </DialogActions>
    </FormContainer>
  );
};

export default ProductForm;
