import { Link } from "react-router-dom";
import arrow from "../../assets/arrows2.svg";
import { DashboardContainer } from "./style";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1>Seja bem-vindo ao seu novo portal de produtos!</h1>
      <div className="toDo">
        <h1>O que gostaria de fazer?</h1>
        <img src={arrow} alt="seta" />
        <div className="options">
          <Link to="/products">Ir para meus produtos</Link>
          <Link to="/new-product">Cadastrar novos produtos</Link>
        </div>
      </div>
    </DashboardContainer>
  );
};
export default Dashboard;
