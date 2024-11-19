import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BuyerNavbar from "../components/Navbar/BuyerNavbar";

import { Home, Cart, Category, Profile, OrderHistory, OrderHistoryProduct } from "../pages/buyer/mainPages";
import { ProductDetail } from "../pages/buyer/detailPages";
import { SignIn, SignUp } from "../pages/buyer/otherPages";

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

          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/order-history/product/*" element={<OrderHistoryProduct/>} />
          <Route path="/profile/order-history/packaged" element={<OrderHistory />} />
          <Route path="/profile/order-history/delivery" element={<OrderHistory />} />
          <Route path="/profile/order-history/finished" element={<OrderHistory />} />
          <Route path="/profile/order-history/return" element={<OrderHistory />} />
          <Route path="/profile/order-history/canceled" element={<OrderHistory />} />
        </Route>

        {/* other pages */}
        <Route element={<MainLayout/>}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesTemplate;