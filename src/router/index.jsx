import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartPage from "../pages/CartPage";
import CategoryPage from "../pages/CategoryPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ViewItemPage from "../pages/ViewItemPage";
import AddCategoryPage from "../pages/owner/AddCategoryPage";
import AddSubCategoryPage from "../pages/owner/AddSubCategoryPage";
import NoPage from "../pages/NoPage";
import AddProduct from "../pages/owner/AddProductPage";
import AddVariant from "../pages/owner/AddVariantPage";

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
          <Route path="*" element={<NoPage />} />

          <Route path="/owner">
            <Route path="addCategory" element={<AddCategoryPage />} />
            <Route path="addSubCategory" element={<AddSubCategoryPage />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="addVariant" element={<AddVariant />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
