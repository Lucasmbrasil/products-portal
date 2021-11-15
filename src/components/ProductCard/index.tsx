import { MoreVertOutlined } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useProducts } from "../../providers/ProductsProvider";
import { Product } from "../../types/product";
import ModalDeleteProduct from "../ModalDeleteProduct";

import { Price, ProductContainer, StyledIconButton } from "./style";
interface ProductCardProps {
  item: Product;
}
const ProductCard = ({ item }: ProductCardProps) => {
  const { setModalEdit, setEditingProduct } = useProducts();
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ProductContainer>
      <div className="title">
        <StyledIconButton
          size="small"
          id="long-button"
          aria-controls="long-menu"
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertOutlined />
        </StyledIconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              setModalEdit(true);
              setEditingProduct(item);
            }}
          >
            Editar
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setModalDelete(true);
            }}
          >
            Deletar
          </MenuItem>
        </Menu>
        <h3>{item.name}</h3>
        <p>Categoria: {item.category}</p>
      </div>
      <div>
        <p>Código do produto: {item.productCode}</p>
        <p>Fabricante: {item.productProvider}</p>
        <Price>{item.price}</Price>
      </div>
      <ModalDeleteProduct
        modalDelete={modalDelete}
        setModalDelete={setModalDelete}
        item={item}
      />
    </ProductContainer>
  );
};
export default ProductCard;
