import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../types/product";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsProviderData {
  productsList: Product[];
  // productToEdit: object;
  // addProduct: (data: Product) => void;
  deleteProduct: (product: Product | undefined) => void;
  editProduct: (product: Product | undefined) => void;
  setProductsList: React.Dispatch<React.SetStateAction<Product[]>>;
  modalEdit: boolean;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  editingProduct: Product | undefined;
  setEditingProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
}

const ProductContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();

  const deleteProduct = (productToDelete: Product | undefined) => {
    const newProductsList = productsList.filter(
      (product) => product.name !== productToDelete!.name
    );
    setProductsList(newProductsList);
  };
  const editProduct = (data: Product | undefined) => {
    const productsStorageList = JSON.parse(
      localStorage.getItem("products") || ""
    );
    setProductsList([...productsStorageList, data]);
  };

  return (
    <ProductContext.Provider
      value={{
        productsList,
        // addProduct,
        deleteProduct,
        editProduct,
        setProductsList,
        modalEdit,
        setModalEdit,
        setEditingProduct,
        editingProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
