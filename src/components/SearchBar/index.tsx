import { InputAdornment } from "@mui/material";
import { SearchBarContainer, StyledSearchBar } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { useProducts } from "../../providers/ProductsProvider";
import { Product } from "../../types/product";
interface SearchBarProps {
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  setNotFound: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredList: React.Dispatch<React.SetStateAction<Product[]>>;
}
const SearchBar = ({
  setUserInput,
  setNotFound,
  setFilteredList,
}: SearchBarProps) => {
  const { productsList } = useProducts();

  const filtringProducts = (input: string) => {
    const chosenProducts = productsList.filter((product) => {
      return product.name
        .normalize("NFD")
        .toLowerCase()
        .includes(input.normalize("NFD").toLowerCase());
    });

    if (chosenProducts.length < 1) {
      setNotFound(true);
    } else {
      setNotFound(false);
      setFilteredList(chosenProducts);
    }
  };

  return (
    <SearchBarContainer>
      <StyledSearchBar
        label="Pesquisa"
        fullWidth
        InputLabelProps={{ style: { fontFamily: "'Dosis',sans-serif" } }}
        onChange={(e) => {
          filtringProducts(e.target.value);
          setUserInput(e.target.value);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
          style: { fontFamily: "'Dosis',sans-serif" },
        }}
      />
    </SearchBarContainer>
  );
};
export default SearchBar;
