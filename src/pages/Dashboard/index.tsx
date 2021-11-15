import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image from "../../assets/welcome.svg";
import { DashboardContainer } from "./style";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DashboardContainer>
        <h1>Seja bem-vindo ao seu novo portal de produtos!</h1>
        <div className="main">
          <div className="question">
            <img src={image} alt="seta" />
            <h1>O que gostaria de fazer?</h1>
          </div>
          <div className="options">
            <Link to="/products">Ir para meus produtos</Link>
            <Link to="/new-product">Cadastrar novos produtos</Link>
          </div>
        </div>
      </DashboardContainer>
    </motion.div>
  );
};
export default Dashboard;
