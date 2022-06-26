import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartPage from "../pages/CartPage";
import CategoryPage from "../pages/CategoryPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ViewItemPage from "../pages/ViewItemPage";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/viewItem" element={<ViewItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
