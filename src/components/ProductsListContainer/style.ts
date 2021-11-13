import styled from "styled-components";

export const OrderingDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90vw;
  margin: 0 auto;
`;

export const ProductsContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1140px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const MainContainer = styled.main`
  width: 100%;
  margin: 20px auto;
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
`;
