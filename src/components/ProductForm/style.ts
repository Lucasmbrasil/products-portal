import { TextField } from "@mui/material";
import styled from "styled-components";

export const FormContainer = styled.form`
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 450px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  border: 1px solid rgba(43, 43, 43, 0.5);
`;
export const StyledTextField = styled(TextField)`
  && {
    width: 300px;
  }
`;
