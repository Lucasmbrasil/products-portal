import { Route, Routes } from "react-router-dom";
import NewProductPage from "../pages/New-product";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import { AnimatePresence } from "framer-motion";
const PageRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new-product" element={<NewProductPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </AnimatePresence>
  );
};

export default PageRoutes;
