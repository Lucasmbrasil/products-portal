import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: flex-start;
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
export const MainContainer = styled.section`
  width: 100%;
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
`;
