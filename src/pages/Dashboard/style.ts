import styled from "styled-components";

export const DashboardContainer = styled.section`
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0 20px;
    margin-top: 40px;
    font-size: 2.2rem;
    font-weight: 400;
  }
  a {
    font-size: 2.2rem;
    margin: 0 25px;
    color: #196e64;
    text-decoration: none;
    transition: 0.3s;
  }
  a:hover {
    transform: scale(1.05);
  }
  img {
    width: 450px;
    margin-bottom: 40px;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
  }
  .question {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 2rem;
      font-weight: 400;
    }
  }
  .options {
    margin: 20px 0;
    font-weight: 600;
    display: flex;
  }
  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1140px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 860px) {
    h1,
    a,
    .question h1 {
      font-size: 1.8rem;
      text-align: center;
    }
  }
  @media screen and (max-width: 560px) {
    .options {
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
    }
    .options a {
      margin: 40px 0;
    }
    h1,
    a,
    .question h1 {
      font-size: 1.5rem;
    }
    img {
      width: 300px;
      margin: 0;
    }
  }
`;
