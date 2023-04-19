import React from "react";
import "./App.scss";
import ProductCard from "./components/ProductCard";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductList";
import ModalPlayground from "./pages/Playground/modal";
import ProductCardPage from "./pages/Playground/productCard";
import CartPage from "./pages/Cart";
import SingleProductPage from "./pages/SingleProduct";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/playground/modal" element={<ModalPlayground />} />
      <Route path="/playground/productCard" element={<ProductCardPage />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
