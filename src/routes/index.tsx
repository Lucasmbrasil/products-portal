import { Route, Routes } from "react-router-dom";
import NewProductPage from "../pages/New-product";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/new-product" element={<NewProductPage />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default PageRoutes;
