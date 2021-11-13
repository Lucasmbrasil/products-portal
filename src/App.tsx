import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import PageRoutes from "./routes";

function App() {
  return (
    <main>
      <PageRoutes />
      <ToastContainer
        position="bottom-center"
        className="toast"
        theme="colored"
        autoClose={2000}
      />
    </main>
  );
}

export default App;
