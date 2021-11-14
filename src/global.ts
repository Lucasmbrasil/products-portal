import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background: rgb(17,136,121);
  background: linear-gradient(135deg, rgba(17,136,121,1) 0%, rgba(235,235,235,1) 15%, rgba(235,235,235,1) 85%, rgba(17,136,121,1) 100%);
  min-height: 100vh;
  font-family: 'Dosis', sans-serif
}
h1{
  text-align: center;
  margin: 20px 0;
}
`;

export default GlobalStyle;
