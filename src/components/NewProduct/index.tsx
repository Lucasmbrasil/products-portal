import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useProducts } from "../../providers/ProductsProvider";
import { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();
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
    addProduct(data);
    toast.success("Produto cadastrado com sucesso!", {
      onClose: () => {
        navigate("/products");
      },
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleNewProduct)}>
        <input placeholder="Nome" {...register("name")} />
        <p>{errors.name?.message}</p>
        <input placeholder="Categoria" {...register("category")} />
        <p>{errors.category?.message}</p>
        <input placeholder="Código" {...register("productCode")} />
        <p>{errors.productCode?.message}</p>
        <input placeholder="Fabricante" {...register("productProvider")} />
        <p>{errors.productProvider?.message}</p>
        <input placeholder="Preço" {...register("price")} />
        <p>{errors.price?.message}</p>
        <button type="submit">Cadastrar</button>
      </form>
      <ToastContainer
        position="bottom-center"
        theme="dark"
        className="toast"
        autoClose={3500}
      />
    </>
  );
};
export default NewProduct;
