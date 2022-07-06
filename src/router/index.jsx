import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartPage from "../pages/CartPage";
import CategoryPage from "../pages/CategoryPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ViewItemPage from "../pages/ViewItemPage";
import ViewCategory from "../pages/ViewCategoryPage";
import ProfilePage from "../pages/ProfilePage";
import AddCategoryPage from "../pages/owner/AddCategoryPage";
import AddSubCategoryPage from "../pages/owner/AddSubCategoryPage";
import NoPage from "../pages/NoPage";
import MyOrders from "../pages/MyOrdersPage";
import Checkout from "../pages/CheckoutPage";
import AddProduct from "../pages/owner/AddProductPage";

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
          <Route path="/viewCategory" element={<ViewCategory />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/myOrders" element={<MyOrders />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NoPage />} />

          <Route path="/owner">
            <Route path="addCategory" element={<AddCategoryPage />} />
            <Route path="addSubCategory" element={<AddSubCategoryPage />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
