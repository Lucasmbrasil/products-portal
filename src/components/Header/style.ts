import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 70px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  a {
    text-decoration: none;
    color: black;
    margin: 0 40px;
    font-size: 1.2rem;
    transition: 0.05s;
    font-weight: 500;
  }
  a:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 860px) {
    a {
      margin: 0;
    }
    justify-content: space-around;
  }
  @media screen and (max-width: 560px) {
    justify-content: space-between;
    height: 50px;
    a {
      margin: 0 10px;
      font-size: 1rem;
    }
  }
`;
