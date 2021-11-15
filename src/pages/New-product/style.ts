import styled from "styled-components";

export const NewProductPageContainer = styled.section`
  display: flex;
  height: calc(100vh - 80px);
  justify-content: space-evenly;
  align-items: center;
  img {
    height: 340px;
  }

  @media screen and (max-width: 1140px) {
    img {
      height: 290px;
    }
  }
  @media screen and (max-width: 860px) {
    img {
      display: none;
    }
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
