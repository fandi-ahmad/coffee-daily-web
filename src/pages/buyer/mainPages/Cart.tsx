import ScreenLayout from "../../../layouts/ScreenLayout"
import CartCard from "../../../components/Cards/CartCard"
import OrderPaymentCard from "../../../components/Cards/OrderPaymentCard"

const Cart = () => {
  return (
    <div className="pt-6">
      <ScreenLayout className="pb-48">
        <h2 className="text-xl font-semibold mb-6">Cart</h2>

        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>

      </ScreenLayout>

      <OrderPaymentCard/>
    </div>
  )
}

export default Cart