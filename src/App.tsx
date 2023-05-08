import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductList";
import ModalPlayground from "./pages/Playground/modal";
import ProductCardPage from "./pages/Playground/productCard";
import CartPage from "./pages/Cart";
import SingleProductPage from "./pages/SingleProduct";
import NotFoundPage from "./pages/NotFound";
import MainNavigationHeader from "./components/Layout/navBar";

function App() {
  return (
    <>
      <MainNavigationHeader />
      <Routes>
        <Route path="/products">
          <Route index element={<ProductListPage />} />
          <Route path=":id" element={<SingleProductPage />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/playground">
          <Route path="modal" element={<ModalPlayground />} />
          <Route path="productCard" element={<ProductCardPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
