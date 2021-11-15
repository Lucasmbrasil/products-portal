import { DialogContent, DialogTitle } from "@mui/material";
import styled from "styled-components";

export const StyledDialogContent = styled(DialogContent)`
  display: flex;
  @media screen and (max-width: 560px) {
    .editModalForm {
      width: 240px;
      margin: 0 auto;
      div {
        width: 240px;
        padding: 0;
        margin: 0 auto;
      }
      button {
        width: 90px;
        margin: 10px 15px;
      }
    }

    flex-direction: column;
    && {
      padding: 0;
    }
  }
`;

export const ProductEditContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  @media screen and (max-width: 860px) {
    text-align: center;
  }
  @media screen and (max-width: 560px) {
    width: 220px;
  }
  h2 {
    content: "Dados atuais:";
  }
`;
export const StyledDialogTitle = styled(DialogTitle)`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 550;
`;
