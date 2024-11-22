import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BuyerNavbar from "@/components/Navbar/BuyerNavbar";
import SellerNavbar from "@/components/Navbar/SellerNavbar";

import { Home, Cart, Category, Profile, OrderHistory, OrderHistoryProduct } from "../pages/buyer/mainPages";
import { ProductDetail } from "../pages/buyer/detailPages";
import { SignIn, SignUp } from "../pages/buyer/otherPages";

import { HomeSeller, Sales, ProductsSeller, ProfileSeller } from "@/pages/seller";
import ProductOrderHistory from "@/pages/seller/Home/ProductOrderHistory";

export const RoutesTemplate = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* buyer pages */}
        <Route element={<MainLayout navbar={<BuyerNavbar/>} />}>
          <Route path="/product-detail" element={<ProductDetail />} />

          <Route path="/" element={<Home />} />
          <Route path="/category/*" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/*" element={<ProductDetail/>} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/order-history/product/:id_product_order" element={<OrderHistoryProduct/>} />
          <Route path="/profile/order-history/:status" element={<OrderHistory />} />
        </Route>

        {/* other pages */}
        <Route element={<MainLayout/>}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        {/* seller pages */}
        <Route element={<MainLayout navbar={<SellerNavbar/>}/>}>
          <Route path="/seller" element={<HomeSeller/>} />
          <Route path="/seller/product-order-history/:id" element={<ProductOrderHistory/>} />
          <Route path="/seller/sales/:status" element={<Sales/>} />
          <Route path="/seller/products" element={<ProductsSeller/>} />
          <Route path="/seller/profile" element={<ProfileSeller/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesTemplate;