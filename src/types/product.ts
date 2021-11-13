export interface Product {
  name: string;
  category: string;
  productCode: number;
  productProvider: string;
  price: string;
}
export interface EditingProps {
  editing: string;
}
export interface ProductCardProps {
  item: Product;
}
