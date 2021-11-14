import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Home</Link>
      <Link to="/new-product">Cadastrar produto</Link>
      <Link to="/products">Meus produtos</Link>
    </HeaderContainer>
  );
};
export default Header;
