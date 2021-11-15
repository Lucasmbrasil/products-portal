import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../types/product";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsProviderData {
  productsList: Product[];
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  addProduct: (data: Product | undefined, price: string) => void;
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
  const [theme, setTheme] = useState<boolean>(true);
  const [productsList, setProductsList] = useState<Product[]>(
    JSON.parse(localStorage.getItem("products") || "[]")
  );
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();

  const deleteProduct = (productToDelete: Product | undefined) => {
    const productsStorageList: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    const newProductsList = productsStorageList.filter(
      (product) => product.productCode !== productToDelete!.productCode
    );
    localStorage.setItem("products", JSON.stringify(newProductsList));
    setProductsList(newProductsList);
  };
  const editProduct = (data: Product | undefined) => {
    const productsStorageList: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const newProductsList = productsStorageList.filter(
      (product) => product.productCode !== editingProduct!.productCode
    );
    setProductsList([...newProductsList, data!]);
    newProductsList.push(data!);
    localStorage.setItem("products", JSON.stringify(newProductsList));
  };
  const addProduct = (data: Product | undefined, price: string) => {
    const productsStorageList: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
    data!["price"] = price;
    setProductsList([...productsStorageList, data!]);
    productsStorageList.push(data!);
    localStorage.setItem("products", JSON.stringify(productsStorageList));
  };
  return (
    <ProductContext.Provider
      value={{
        theme,
        setTheme,
        productsList,
        addProduct,
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
