import { Interpolator } from "react-apply-darkmode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import GlobalStyle from "./global";
import { useProducts } from "./providers/ProductsProvider";
import PageRoutes from "./routes";

function App() {
  const { theme } = useProducts();
  return (
    <main>
      <Interpolator
        appearance={theme ? "undefined" : "dark"}
        watchSystem={false}
        filter={{ brightness: 90, contrast: 90, sepia: 10 }}
      >
        <GlobalStyle />
        <Header />
        <PageRoutes />

        <ToastContainer
          position="bottom-center"
          className="toast"
          autoClose={2000}
        />
      </Interpolator>
    </main>
  );
}
export default App;
