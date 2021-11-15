import image from "../../assets/notfound.svg";
import { NotFoundContainer } from "./style";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src={image} alt="Not Found" />
      <h2>Produto não encontrado!</h2>
    </NotFoundContainer>
  );
};
export default NotFound;
