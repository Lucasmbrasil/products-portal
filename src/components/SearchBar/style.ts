import { TextField } from "@mui/material";
import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  @media screen and (max-width: 560px) {
    width: 300px;
  }
`;
export const StyledSearchBar = styled(TextField)`
  & label.Mui-focused {
    color: #118879;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #118879;
    }
  }
`;
