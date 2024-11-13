import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/buyer/mainPages/Home";
import Category from "../pages/buyer/mainPages/Category";
import Cart from "../pages/buyer/mainPages/Cart";
import Profile from "../pages/buyer/mainPages/Profile";

import ProductDetail from "../pages/buyer/detailPages/ProductDetail";
import OrderHistory from "../pages/buyer/detailPages/OrderHistory";
import SignIn from "../pages/buyer/otherPages/SignIn";
import BuyerNavbar from "../components/Navbar/BuyerNavbar";

export const RoutesTemplate = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* buyer pages */}
        <Route element={<MainLayout navbar={<BuyerNavbar/>} />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/*" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/profile/order-history/packaged" element={<OrderHistory />} />
          <Route path="/profile/order-history/delivery" element={<OrderHistory />} />
          <Route path="/profile/order-history/finished" element={<OrderHistory />} />
          <Route path="/profile/order-history/return" element={<OrderHistory />} />
          <Route path="/profile/order-history/canceled" element={<OrderHistory />} />
        </Route>

        {/* other pages */}
        <Route element={<MainLayout/>}>
          <Route path="/sign-in" element={<SignIn />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesTemplate;