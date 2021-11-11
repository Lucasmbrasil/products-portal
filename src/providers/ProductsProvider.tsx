import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../types/product";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsProviderData {
  productsList: Product[];
  addProduct: (data: Product) => void;
  deleteProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
  setProductsList: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [productsList, setProductsList] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProductsList([...productsList, product]);
  };
  const deleteProduct = (productToDelete: Product) => {
    const newProductsList = productsList.filter(
      (product) => product.name !== productToDelete.name
    );
    setProductsList(newProductsList);
  };
  const editProduct = (productToEdit: Product) => {
    const newProduct = productsList.find(
      (product) => product.productCode === productToEdit.productCode
    );
    console.log(newProduct);
  };

  return (
    <ProductContext.Provider
      value={{
        productsList,
        addProduct,
        deleteProduct,
        editProduct,
        setProductsList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
