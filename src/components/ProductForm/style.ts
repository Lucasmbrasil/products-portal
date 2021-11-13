import { TextField } from "@mui/material";
import styled from "styled-components";

export const FormContainer = styled.form`
  height: 540px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-end;
  width: 300px;
  color: white;
`;
export const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
`;
