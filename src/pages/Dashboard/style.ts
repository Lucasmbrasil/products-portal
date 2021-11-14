import styled from "styled-components";

export const DashboardContainer = styled.section`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.6rem;
    font-weight: 400;
  }
  img {
    width: 100px;
    margin-left: 40px;
  }
  .toDo {
    h1 {
      font-size: 2.4rem;
    }
    display: flex;
    align-items: center;
    margin: 80px auto;
  }
  .options {
    margin-left: 30px;
    font-size: 2.2rem;
    font-weight: 600;
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      color: #118879;
      text-decoration: none;
      transition: 0.3s;
    }
    a:hover {
      transform: scale(1.05);
    }
  }
`;
