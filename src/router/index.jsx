import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartPage from "../pages/CartPage";
import CategoryPage from "../pages/CategoryPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import ViewItemPage from "../pages/ViewItemPage";
import ViewCategory from "../pages/ViewCategoryPage";
import ProfilePage from "../pages/ProfilePage";
import SearchResultPage from "../pages/SearchResultPage";
import AddCategoryPage from "../pages/owner/AddCategoryPage";
import AddSubCategoryPage from "../pages/owner/AddSubCategoryPage";
import NoPage from "../pages/NoPage";
import MyOrders from "../pages/MyOrdersPage";
import Checkout from "../pages/CheckoutPage";
import AddProduct from "../pages/owner/AddProductPage";
import OwnerLoginPage from "../pages/owner/OwnerLoginPage";
import AddVariant from "../pages/owner/AddVariantPage";
import AddItem from "../pages/owner/AddItemPage";
import ViewReports from "../pages/owner/ViewReportsPage";
import CheckOrders from "../pages/owner/CheckOrdersPage";
import ViewOrder from "../pages/owner/ViewOrderPage";
import CusViewOrder from "../pages/ViewOrder";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/viewItem" element={<ViewItemPage />} />
          <Route path="/viewCategory" element={<ViewCategory />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/myOrders" element={<MyOrders />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/viewOrder" element={<CusViewOrder />} />
          <Route path="/SearchResult" element={<SearchResultPage />} />
          <Route path="*" element={<NoPage />} />

          <Route path="/owner">
            <Route path="addCategory" element={<AddCategoryPage />} />
            <Route path="addSubCategory" element={<AddSubCategoryPage />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="login" element={<OwnerLoginPage />} />
            <Route path="addVariant" element={<AddVariant />} />
            <Route path="addItem" element={<AddItem />} />
            <Route path="checkOrders" element={<CheckOrders />} />
            <Route path="viewOrder" element={<ViewOrder />} />
            <Route path="viewReports" element={<ViewReports />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
