import { MenuItem, Select, FormControl } from "@mui/material";
import { SelectOrderContainer } from "./style";

interface SelectOrderProps {
  ordering: string;
  setOrdering: React.Dispatch<React.SetStateAction<string>>;
}

const SelectOrder = ({ ordering, setOrdering }: SelectOrderProps) => {
  return (
    <SelectOrderContainer>
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <Select
          variant="standard"
          renderValue={(ordering) =>
            ordering.length > 2 ? ordering : <div>Ordenar por:</div>
          }
          labelId="label"
          value={ordering}
          onChange={(e) => setOrdering(e.target.value)}
        >
          <MenuItem value="Nome (a-z)">Nome (a-z)</MenuItem>
          <MenuItem value="Nome (z-a)">Nome (z-a)</MenuItem>
          <MenuItem value="Menor preço">Menor preço</MenuItem>
          <MenuItem value="Maior preço">Maior preço</MenuItem>
          <MenuItem value="Código do produto (menor ao maior)">
            Código do produto (menor ao maior)
          </MenuItem>
          <MenuItem value="Código do produto (maior ao menor)">
            Código do produto (maior ao menor)
          </MenuItem>
          <MenuItem value="Fabricante (a-z)">Fabricante (a-z)</MenuItem>
          <MenuItem value="Fabricante (z-a)">Fabricante (z-a)</MenuItem>
        </Select>
      </FormControl>
    </SelectOrderContainer>
  );
};
export default SelectOrder;
