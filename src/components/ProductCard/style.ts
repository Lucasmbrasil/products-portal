import { IconButton } from "@mui/material";
import styled from "styled-components";

export const ProductContainer = styled.div`
  text-align: left;
  padding: 15px;
  margin: 10px;
  width: 190px;
  min-height: 180px;
  word-break: break-word;
  align-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  border: 1px solid rgba(43, 43, 43, 0.5);
  display: flex;
  flex-wrap: wrap;
  color: #848484;

  :hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 0.95rem;
    margin: 0;
  }
  h3 {
    font-size: 1.4em;
    margin: 0 0 5px;
    color: #000000;
    /* text-align: center; */
  }
  .title {
    width: 100%;
  }
  .title p {
    font-size: 0.9rem;
  }
`;
export const Price = styled.h2`
  margin: 5px 0 0;
  color: black;
  font-weight: normal;
  font-size: 1.8rem;
`;
export const StyledIconButton = styled(IconButton)`
  float: right;
`;
